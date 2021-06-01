<template>
    <el-row :gutter="20">
        <el-col :span="24" class="child-page-wrap projects fund_wrap" style="float: inherit;">
            <div class="overview wow fadeInDown animated hidden-xs animated">
                <p>Balance:<span>{{ balance }} </span></p>
                <p>{{ $t('message.Transactions') }}:<span>{{ total }} txns</span>，Total: <span>{{ price }} </span></p>
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
                            <p id="qraddress">0x8e30ea2329d95802fd804f4291220b0e2f579812</p>
                        </font>
                    </center>
                </h5>
                <div class="modal-body">
                    <div id="qrcode" align="center" title="0x8e30ea2329d95802fd804f4291220b0e2f579812"><img
                        src="/static/image/token-code.png" style="width: 235px;"></div>
                    <br>
                </div>
            </el-dialog>
            <div style="clear: both;"></div>
            <el-tabs v-model="activeName" @tab-click="handleClick" class="project-tab fund-tab">
                <el-tab-pane label="Transactions" name="first" class="vul_state">

                </el-tab-pane>
                <el-tab-pane label="Erc20 Token Txns" name="second" class="vul_state">
                    <el-table :data="fundTokenData" stripe style="width: 100%">
                        <el-table-column prop="hash" label="TxHash" width="auto">
                            <template slot-scope="scope">
                                <a :href="'https://etherscan.io/tx/'+scope.row.hash" target="_blank"> {{
                                        scope.row.hash
                                    }}</a>
                            </template>
                        </el-table-column>
                        <el-table-column prop="diffTime" label="Age"></el-table-column>
                        <el-table-column prop="tx_from" label="From">

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
                        <el-table-column prop="price" label="Value" width="90px">
                            <template slot-scope="scope">
                                <span>{{ scope.row.price }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column prop="" label="Token" width="90px">
                            <template slot-scope="scope">
                                <span :title="scope.row.hash"><a
                                    :href="'https://etherscan.io/address/'+scope.row.contractAddress" target="_blank">DVP</a></span>
                            </template>
                        </el-table-column>
                    </el-table>
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
        </el-col>
    </el-row>
</template>

<script>
export default {
    name: 'fund',
    data() {
        return {
            balance: '',
            totals: '',
            IndexTotal: 0,//默认数据总数
            total: 0,
            pagesize: 9,//每页的数据条数
            currentPage: 1,//默认开始页面
            dialogfund: false,
            activeName: "second",
            fundTokenData: [],
            lddtData: [],
            fundHead: [],
            fundFrom: '',
            dialogqbdz: false,
            price: ''
        }
    },
    methods: {
        initData() {
            var _this = this;
            this.$ajax.ComFundToken()
                .then(res => {
                    if (res.errcode === 1) {
                        _this.balance = res.data.info.balance
                        _this.price = res.data.total.price
                        _this.totals = res.data.tokenList.total
                        _this.fundHead = res.data
                        _this.fundTokenData = res.data.tokenList.data
                        _this.fundFrom = res.data.ethAddr
                        _this.pagesize = res.data.tokenList.per_page
                        _this.total = res.data.tokenList.total
                    }
                })
        },
        handleClick(tab, event) {
            var FundIndex = tab.index
            if (FundIndex == 0) {
                this.$router.push({path: "/fund"})
            }
        },
        handleSizeChange(pagesize) {
            this.pagesize = pagesize;
        },
        handleCurrentChange(currentPage) {
            this.currentPage = currentPage;
            var _this = this;
            this.$ajax.ComFundToken({"page": this.currentPage})
                .then(res => {
                    if (res.errcode === 1) {
                        _this.fundTokenData = res.data.tokenList.data
                        _this.fundFrom = res.data.ethAddr
                        _this.pagesize = res.data.tokenList.per_page
                        _this.total = res.data.tokenList.total
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
    text-align: center !important;
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

.list-top a {
    font-size: 16px;
    margin-right: 20px;
}

.list-group-item.active > .badge.badge-orange, span.badge-orange, span.label-orange {
    background: #e67e22;
}

span.label {
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
