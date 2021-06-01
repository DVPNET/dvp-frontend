<template>
    <el-row :gutter="20">
        <el-col :span="24" class="child-page-wrap projects fund_wrap" style="float: inherit;">
            <div class="overview wow fadeInDown animated hidden-xs animated">
                <p>Balance:<span>{{ balance }} Ether</span></p>
                <p>{{ $t('message.Transactions') }}:<span>{{ total }} txns</span>，Total: <span>{{ price }} Ether</span>
                </p>
                <button class="qr-code-link fr" title="Click For QR Code" @click="dialogqbdz = true"><img
                    src="/static/image/qrcode2.png?v=2"></button>
                <p class="fr sub-color" style="font-size: 12px;">{{ $t('message.ClickCheckDVPWalletAddress') }}</p>
            </div>
            <el-dialog
                title=""
                :visible.sync="dialogqbdz"
                width="30%">
                <h5 id="myLargeModalLabel" class="modal-title">
                    <center>
                        <font size="2">
                            <p id="qraddress">0xd5bAA94e09C4a1C6613A35c485604F507b368517</p>
                        </font>
                    </center>
                </h5>
                <div class="modal-body">
                    <div id="qrcode" align="center" title="0xd5bAA94e09C4a1C6613A35c485604F507b368517"><img
                        src="/static/image/qrcode2.png" style="width: 235px;"></div>
                    <br>
                </div>
            </el-dialog>
            <div style="clear: both;"></div>
            <el-tabs v-model="activeName" @tab-click="handleClick" class="project-tab fund-tab">
                <el-tab-pane label="Transactions" name="first" class="vul_state">
                    <el-table :data="fundData" stripe style="width: 100%">
                        <el-table-column prop="hash" label="TxHash" width="auto">
                            <template slot-scope="scope">
                                <a :href="'https://etherscan.io/tx/'+scope.row.hash" target="_blank"> {{
                                        scope.row.hash
                                    }}</a>
                            </template>
                        </el-table-column>
                        <el-table-column prop="blockNumber" label="Block" width="90px">
                            <template slot-scope="scope">
                                <a :href="'https://etherscan.io/block/'+scope.row.blockNumber" target="_blank">
                                    {{ scope.row.blockNumber }}</a>
                            </template>
                        </el-table-column>
                        <el-table-column prop="diffTime" label="Age"></el-table-column>
                        <el-table-column prop="tx_from" label="From">
                            <template slot-scope="scope">
                                <span v-if="scope.row.tx_from == fundFrom">{{ scope.row.tx_from }}</span>
                                <span v-if="scope.row.tx_from != fundFrom"><a
                                    :href="'https://etherscan.io/address/'+scope.row.tx_from"
                                    target="_blank">{{ scope.row.tx_from }}</a></span>
                            </template>
                        </el-table-column>
                        <el-table-column prop="tx_lable" label="" width="65">
                            <template slot-scope="scope">
                                <span v-if="scope.row.tx_from == fundFrom"><span
                                    class="label label-orange rounded">OUT</span></span>
                                <span v-if="scope.row.tx_from != fundFrom"><span class="label label-success rounded">&nbsp;&nbsp;IN&nbsp;&nbsp;</span></span>
                            </template>
                        </el-table-column>
                        </el-table-column>
                        <el-table-column prop="tx_to" label="To">
                            <template slot-scope="scope">
										<span v-if="scope.row.tx_to != ' '">
											<span v-if="scope.row.tx_to == fundFrom">{{ scope.row.tx_to }}</span>
											<span v-if="scope.row.tx_to != fundFrom"><a
                                                :href="'https://etherscan.io/address/'+scope.row.tx_to" target="_blank">{{
                                                    scope.row.tx_to
                                                }}</a></span>
										</span>
                                <span v-if="scope.row.tx_to == ' '">
											<img style="margin-right:5px" src="/static/image/application-table.png"/><a
                                    :href="'https://etherscan.io/address/'+scope.row.contractAddress" target="_blank">Contract Creation</a>
										</span>
                            </template>
                        </el-table-column>
                        <el-table-column prop="tx_value" label="Value" width="90px">
                            <template slot-scope="scope">
                                <span>{{ scope.row.price }}&nbsp;Ether</span>
                            </template>
                        </el-table-column>
                        <el-table-column prop="price" label="[TxFee]" width="90px">
                            <template slot-scope="scope">
                                <span>{{ scope.row.gasPrice }}</span>
                            </template>
                        </el-table-column>
                        <!--眼睛点击弹出框-->
                        <el-table-column prop="tx_look el-icon-view" label="Vulnerability">
                            <template slot-scope="scope">
                                <span v-if="scope.row.tx_from == fundFrom && scope.row.jyh==1" class="el-icon-view"
                                      @click="dialogfundBtn(scope.row.hash)"></span>
                            </template>
                        </el-table-column>
                    </el-table>
                </el-tab-pane>
                <el-tab-pane label="Erc20 Token Txns" name="second" class="vul_state">

                </el-tab-pane>
                <el-tab-pane disabled label="USDT Token" name="three" class="vul_state">

                </el-tab-pane>
            </el-tabs>
            <div style="clear: both;"></div>

            <div class="block pages" id="pages">
                <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page.sync="currentPage"
                    :page-size="pagesize"
                    layout="total,prev, pager, next"
                    :total="total">
                </el-pagination>
            </div>

            <!--漏洞详情-->
            <el-dialog
                title=""
                :visible.sync="dialogldxq"
                width="1024px">
                <vulNum :lddtData="fundXQData"></vulNum>

            </el-dialog>
        </el-col>
    </el-row>
</template>

<script>

import vulNum from '@/components/vulNum/vulNum'

export default {
    name: 'fund',
    components: {vulNum},
    data() {
        return {
            balance: '',
            price: '',
            total: 0,//默认数据总数
            pagesize: 10,//每页的数据条数
            currentPage: 1,//默认开始页面
            dialogfund: false,
            activeName: "first",
            fundData: [],
            fundHead: [],
            lddtData: [],
            fundFrom: '',
            fundXQData: [],
            dialogqbdz: false,
            dialogldxq: false
        }
    },
    methods: {
        initData() {
            this.$ajax.ComFund()
                .then(res => {
                    if (res.errcode === 1) {
                        this.balance = res.data.info.balance
                        this.total = res.data.txList.total
                        this.price = res.data.total.price
                        this.blanace = res.data.info.blanace
                        this.fundHead = res.data
                        this.fundData = res.data.txList.data
                        this.fundFrom = res.data.ethAddr
                        // this.pagesize = res.data.txList.per_page
                        this.total = res.data.txList.total
                    }
                })
        },
        handleClick(tab, event) {
            var FundIndex = tab.index
            if (FundIndex == 1) {
                this.$router.push({path: "/fundToken"})
            }
        },
        handleCurrentChange(currentPage) {
            this.currentPage = currentPage;
            this.$ajax.ComFund({"page": this.currentPage})
                .then(res => {
                    if (res.errcode === 1) {
                        this.fundData = res.data.txList.data
                        this.fundFrom = res.data.ethAddr
                        // this.pagesize = res.data.txList.per_page
                        this.total = res.data.txList.total
                    }
                })
        },
        handleSizeChange(pagesize) {
            this.pagesize = pagesize;
            console.log(this.pagesize)
        },
        dialogfundBtn(hash) {
            this.fundXQData = ''
            var hashData = {
                "hash": hash
            }
            this.dialogldxq = true
            var _this = this
            this.$ajax.ComFundInfo(hashData)
                .then(res => {
                    if (res.errcode === 1) {
                        _this.fundXQData = res.data.vul
                    }
                })
        }

    },
    created: function () {
        this.initData();
    }

}
</script>

<style>
.fund-tab tr td {
    text-align: center !important;
}

.fund_wrap {
    position: relative;
}

.fund_wrap .el-table__row td {
    white-space: nowrap;
}

.fund_wrap #pages {
    position: absolute;
    right: 50px;
    bottom: 50px;
}

.fund_wrap .projects table {
    margin: 0 !important;
}

.fund_wrap .el-table {
    margin-bottom: 49px;
}

.fund_wrap .el-table .cell {
    white-space: nowrap !important;
}

.fund_wrap .label-success {
    background-color: #5cb85c;
    padding: 4px 7px !important;
    font-size: 11px;
    font-weight: 400;
    display: inline-block;
}

.fund_wrap .el-table th {
    text-align: left !important;
}

.fund_wrap .projects table {
    max-width: 1200px;
    margin: 0 !important;
}

.fund_wrap span.label {
    font-size: 11px;
    font-weight: 400;
    padding: 4px 7px;
    display: inline;
    color: #fff;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
    border-radius: 5px;
}

.fund_wrap .el-icon-view {
    color: #2196F3;
    font-weight: 600;
    font-size: 18px;
}

.fund_wrap .list-top {
    height: 38px;
    line-height: 38px;
    margin-bottom: 28px;
}

.fund_wrap .modal-title {
    margin-bottom: 20px;
}

.fund_wrap .project-tab {
    margin: 0;
    line-height: 38px;
}

.fund_wrap .has-gutter {
    background: #dae2e5 !important;
}

.fund_wrap .el-table th, .fund_wrap .el-table tr {
    background: inherit;
}

.fund_wrap .el-table .cell {
    font-size: 14px !important;
    font-weight: 400;
}

.fund_wrap .list-top a {
    font-size: 16px;
    margin-right: 20px;
}

.list-group-item.active > .badge.badge-orange, span.badge-orange, span.label-orange {
    background: #e67e22;
}

.fund_wrap span.label {
    font-size: 11px;
    font-weight: 400;
    padding: 4px 7px;
}

.tx_hash {
    width: 13%;
}

.tx_block {
    width: 8%;
}

.tx_age {
    width: 13%;
}

.tx_lable {
    width: 8%;

}

.overview {
    position: relative;
    margin-bottom: 20px
}

.overview p {
    font-weight: bold;
    line-height: 30px;

}

.overview p span {
    margin-left: 10px;
}

.tx_value {
    width: 13%
}

.fund_wrap .nav-tabs {
    border-bottom: solid 2px #3498db;
}

.fund_wrap .nav-tabs li a {
    background-color: #eee;
    color: #000;
}

.fund_wrap .nav-tabs li.active a {
    background-color: #3498db;
    color: #fff;
}

.fund_wrap .nav-tabs > li.active > a:hover {
    background-color: #3498db !important;
    color: #fff;
}

.qr-code-link img {
    position: absolute;
    top: 10px;
    right: 0;
    margin-top: -16px;
    width: 60px;
    height: 60px;
}
</style>
