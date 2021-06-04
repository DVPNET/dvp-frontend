<template>
    <div>
        <div>
            <!-- 悬赏管理 -->
            <div class="company-personal-wrap cpmpany-shadow" style="padding: 30px 30px 0 30px !important;">
                <div class="reward-manage">
                    <div class="clearfix  reward-header">
                        <div class="reward-title">{{ $t('dvp_head.bounty') }}</div>
                        <div class="fl">
                            <p style="color:#4a4c52;font-size: 14px;">
                                {{ $t('ComReward.PostBounty') }}
                            </p><br/>
                            <router-link to="/Bounty" target="_blank">[{{ $t('ComReward.AboutBounty') }}]</router-link>
                        </div>
                        <div class="fr" style="text-align: right;">
                            <router-link :to="{path:'/companyTwoCons',query:{company:mycompany}}" target="_blank">
                                <el-button class="btnshadow wrapBtnw" style="border: 0;">
                                    {{ $t('ComReward.Preview') }}
                                </el-button>
                            </router-link>
                            <el-button class="btnshadow wrapBtn" style="margin-left: 10px;" type="primary"
                                       @click="edit_CZdjfbbtn" :disabled="isDisable">{{ $t('ComReward.Release') }}
                            </el-button>
                            <br/>
                            <div class="FBtime" v-if="update_time!=''">
                                {{ $t('ComReward.LatestUpdate') }}：{{ update_time }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <el-card shadow="hover" class="rewardcon"
                     style="margin-top: 30px;background: #ffffff;padding: 40px 20px 20px 0;">
                <el-tabs :tab-position="tabPosition" v-model="activeName" @tab-click="handleClick">
                    <el-tab-pane :label="$t('ComReward.Reward1')" name="first">
                        <div>
                            <div class="rewardConhead">
                                {{ $t('ComReward.JudgmentReference') }}
                                <router-link to="/rewardReference" target="_blank">
                                    [{{ $t('ComReward.ReferenceTemplate') }}]
                                </router-link>
                            </div>
                            <div class="reward-manage-item clearfix">
                                <div class="reward-plan-edit">
                                    <span>{{ $t('ComReward.LowRisk') }}&nbsp;</span>
                                    <el-input v-model="lowPriceStart" :disabled="true"></el-input>&nbsp;-&nbsp;
                                    <el-input v-model="lowPriceEnd"></el-input>
                                    <br/>
                                    <span>{{ $t('ComReward.InDanger') }}&nbsp;</span>
                                    <el-input v-model="lowPriceEnd" :disabled="true">

                                    </el-input>&nbsp;-&nbsp;<el-input
                                    v-model="midPriceEnd"></el-input>
                                    <br/>
                                    <span>{{ $t('ComReward.HighRisk') }}&nbsp;</span>
                                    <el-input v-model="midPriceEnd" :disabled="true">

                                    </el-input>&nbsp;-&nbsp;<el-input
                                    v-model="highPriceEnd"></el-input>
                                    <br/>
                                    <span>{{ $t('ComReward.Serious') }}&nbsp;</span>
                                    <el-input v-model="highPriceEnd" :disabled="true">

                                    </el-input>&nbsp;-&nbsp;<el-input
                                    v-model="serPriceEnd"></el-input>
                                </div>
                            </div>
                            <div class='fr'>
                                <el-button type="primary" class="btnshadow wrapBtn" @click="rewardNext1" :plain="true">
                                    {{ $t('ComReward.NextStep') }}
                                </el-button>
                            </div>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane :label="$t('ComReward.Reward2')" v-if="this.dataCsfw==''" disabled name="second">
                        <div class="rewardConhead">
                            {{ $t('ComReward.JudgmentReference2') }}
                            <router-link to="/rewardReference" target="_blank">
                                [{{ $t('ComReward.ReferenceTemplate') }}]
                            </router-link>
                        </div>
                        <div class="reward-manage-item clearfix">
                            <div class="reward-plan-edit">
                                <el-input type="textarea" autosize :placeholder="$t('ComReward.PleaseContent')"
                                          v-model="dataCsfw"></el-input>
                            </div>
                        </div>
                        <div class='fr'>
                            <el-button class="comColor btnshadow wrapBtnw" @click='rewardLast2'>
                                {{ $t('ComReward.Previous') }}
                            </el-button>
                            <el-button type="primary" class="btnshadow wrapBtn" @click="rewardNext2" :plain="true">
                                {{ $t('ComReward.NextStep') }}
                            </el-button>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane :label="$t('ComReward.Reward2')" v-if="dataCsfw!=''" name="second">
                        <div class="rewardConhead">
                            {{ $t('ComReward.JudgmentReference3') }}
                            <router-link to="/rewardReference" target="_blank">
                                [{{ $t('ComReward.ReferenceTemplate') }}]
                            </router-link>
                        </div>
                        <div class="reward-manage-item clearfix">
                            <div class="reward-plan-edit">
                                <el-input type="textarea" autosize :placeholder="$t('ComReward.PleaseContent')"
                                          v-model="dataCsfw"></el-input>
                            </div>
                        </div>
                        <div class='fr'>
                            <el-button class="comColor btnshadow wrapBtnw" @click='rewardLast2'>
                                {{ $t('ComReward.NextStep') }}
                            </el-button>
                            <el-button type="primary" class="btnshadow wrapBtn" @click="rewardNext2" :plain="true">
                                {{ $t('ComReward.Previous') }}
                            </el-button>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane :label="$t('ComReward.Reward3')" v-if="!this.dataVulSer " disabled name="third">
                        <div class="rewardConhead">
                            {{ $t('ComReward.JudgmentReference4') }}
                            <router-link to="/rewardReference" target="_blank">
                                [{{ $t('ComReward.ReferenceTemplate') }}]
                            </router-link>
                        </div>
                        <div class="reward-manage-item clearfix">
                            <div class="reward-plan-edit">
                                <p>{{ $t('ComReward.LowRisk') }}</p>
                                <el-input type="textarea" autosize
                                          :placeholder="$t('ComReward.PleaseContent')" v-model='dataVulLow'></el-input>
                            </div>
                            <div class="reward-plan-edit">
                                <p>{{ $t('ComReward.InDanger') }}</p>
                                <el-input type="textarea" autosize :placeholder="$t('ComReward.PleaseContent')"
                                          v-model='dataVulMid'></el-input>
                            </div>
                            <div class="reward-plan-edit">
                                <p>{{ $t('ComReward.HighRisk') }}</p>
                                <el-input type="textarea" autosize :placeholder="$t('ComReward.PleaseContent')"
                                          v-model='dataVulHigh'></el-input>
                            </div>
                            <div class="reward-plan-edit">
                                <p>{{ $t('ComReward.Serious') }}</p>
                                <el-input type="textarea" autosize :placeholder="$t('ComReward.PleaseContent')"
                                          v-model='dataVulSer'></el-input>
                            </div>
                        </div>
                        <div class='fr'>
                            <el-button class="comColor btnshadow wrapBtnw" @click='rewardLast3'>
                                {{ $t('ComReward.Previous') }}
                            </el-button>
                            <el-button type="primary" class="btnshadow wrapBtn" @click="rewardNext3" :plain="true">
                                {{ $t('ComReward.NextStep') }}
                            </el-button>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane :label="$t('ComReward.RewardThree')" v-if="this.dataVulSer" name="third">
                        <div class="rewardConhead">
                            {{ $t('ComReward.JudgmentReference5') }}
                            <router-link to="/rewardReference" target="_blank">
                                [{{ $t('ComReward.ReferenceTemplate') }}]
                            </router-link>
                        </div>
                        <div class="reward-manage-item clearfix">
                            <div class="reward-plan-edit">
                                <p>{{ $t('ComReward.LowRisk') }}</p>
                                <el-input type="textarea" autosize :placeholder="$t('ComReward.PleaseContent')"
                                          v-model='dataVulLow'></el-input>
                            </div>
                            <div class="reward-plan-edit">
                                <p>{{ $t('ComReward.InDanger') }}</p>
                                <el-input type="textarea" autosize :placeholder="$t('ComReward.PleaseContent')"
                                          v-model='dataVulMid'></el-input>
                            </div>
                            <div class="reward-plan-edit">
                                <p>{{ $t('ComReward.HighRisk') }}</p>
                                <el-input type="textarea" autosize :placeholder="$t('ComReward.PleaseContent')"
                                          v-model='dataVulHigh'></el-input>
                            </div>
                            <div class="reward-plan-edit">
                                <p>{{ $t('ComReward.Serious') }}</p>
                                <el-input type="textarea" autosize :placeholder="$t('ComReward.PleaseContent')"
                                          v-model='dataVulSer'></el-input>
                            </div>
                        </div>
                        <div class='fr'>
                            <el-button class="comColor btnshadow wrapBtnw" @click='rewardLast3'>
                                {{ $t('ComReward.Previous') }}
                            </el-button>
                            <el-button type="primary" class="btnshadow wrapBtn" @click="rewardNext3" :plain="true">
                                {{ $t('ComReward.NextStep') }}
                            </el-button>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane :label="$t('ComReward.MattersNeedingAttention')" v-if="!this.dataVulSer" disabled
                                 name="fourth">
                        <div class="rewardConhead">
                            {{ $t('ComReward.Supplement') }}
                            <span style="color:#F00;font-size: 14px;color: #b4bdc2;">
                                （{{ $t('ComReward.NotRequired') }}）
                            </span>{{ $t('ComReward.JudgmentReferenceText') }}
                            <router-link to="/rewardReference" target="_blank">
                                [{{ $t('ComReward.ReferenceTemplate') }}]
                            </router-link>
                        </div>
                        <div class="reward-manage-item clearfix">
                            <div class="reward-plan-edit">
                                <el-input type="textarea" autosize :placeholder="$t('ComReward.PleaseContent')"
                                          v-model="remarks"></el-input>
                            </div>
                        </div>
                        <div class='fr'>
                            <el-button class="comColor btnshadow wrapBtnw" @click='rewardLast4'>
                                {{ $t('ComReward.Previous') }}
                            </el-button>
                            <el-button type="primary" class="btnshadow wrapBtn" @click="rewardNext4" :plain="true">
                                {{ $t('ComReward.CarryOut') }}
                            </el-button>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane :label="$t('ComReward.MattersNeedingAttention')" v-if="this.dataVulSer" name="fourth">
                        <div class="rewardConhead">{{ $t('ComReward.Supplement') }}<span
                            style="color:#F00;font-size: 14px;color: #b4bdc2;">（{{
                                $t('ComReward.NotRequired')
                            }}）</span>
                            {{ $t('ComReward.JudgmentReferenceText') }}
                            <router-link to="/rewardReference" target="_blank">
                                [{{ $t('ComReward.ReferenceTemplate') }}]
                            </router-link>
                        </div>
                        <div class="reward-manage-item clearfix">
                            <div class="reward-plan-edit">
                                <el-input type="textarea" autosize :placeholder="$t('ComReward.PleaseContent')"
                                          v-model="remarks"></el-input>
                            </div>
                        </div>
                        <div class='fr'>
                            <el-button class="comColor btnshadow wrapBtnw" @click='rewardLast4'>
                                {{ $t('ComReward.Previous') }}
                            </el-button>
                            <el-button type="primary" class="btnshadow wrapBtn" @click="rewardNext4" :plain="true">
                                {{ $t('ComReward.CarryOut') }}
                            </el-button>
                        </div>
                    </el-tab-pane>
                </el-tabs>
            </el-card>
            <!-- 余额不足 -->
            <el-dialog
                :title="$t('ComReward.Tips')"
                :visible.sync="dialognoMoney"
                width="600px">
                <div class="common-pop-up">
                    <h3>{{ $t('ComReward.StorageGuarantee') }}</h3>
                    <p style="color:#4a4c52;padding-top: 10px;">
                        <span v-html="$t('ComReward.StorageNoLessThan', {number: serPriceEnd})"></span>
                    </p>  <br/><br/>
                    {{ $t('ComReward.RemainingDeposit') }}<span>
                    {{ $store.state.CSuser.user.balance }}
                </span>Ether，{{ $t('ComReward.InsufficientBalance') }} &nbsp;&nbsp;<el-button
                    type="primary" class='fr btnshadow wrapBtn' @click="dialogVisibleCZbtn">
                    {{ $t('ComReward.DepositRecharge') }}
                </el-button>
                    <br>
                    <p></p>
                </div>
            </el-dialog>
            <!--充值弹窗-->
            <el-dialog
                title=""
                :visible.sync="dialogVisibleCZ"
                width="720px">
                <div style="width: 720px;text-align: center;">
                    <div class="apply-safeguards-pop-up common-pop-up">
                        <p class="apply-title" style="margin-bottom: 30px;">
                            {{ $t('ComReward.PayGuarantee') }}
                            <el-tooltip placement="bottom">
                        <div slot="content">
                            <div>
                                <p class="apply-info-text" style="font-weight: 600;">
                                    {{ $t('ComReward.GuaranteeMoneyDescription') }}</p>
                                <p class="apply-info-text">• {{ $t('ComReward.GuaranteeMoneyDescription1') }}</p>
                                <p class="apply-info-text">• {{ $t('ComReward.GuaranteeMoneyDescription2') }}</p>
                                <p class="apply-info-text">• {{ $t('ComReward.GuaranteeMoneyDescription3') }}</p>
                                <p class="apply-info-text">• {{ $t('ComReward.GuaranteeMoneyDescription4') }}</p>
                                <p class="apply-info-text">service@dvpnet.io</p>
                            </div>
                        </div>
                        <el-button type="text">
                            <span class="ketubbah-btn"><img src="/static/image/question.png"></span>
                        </el-button>
                        </el-tooltip>
                        </p>
                        <!--<p class="apply-num" style="margin-bottom: 28px;">24 Ether <b style="font-size: 12px;display: block;">最高奖励</b></p>-->
                        <div class="apply-address">
                            {{ $t('ComReward.PaymentAddress') }}：0xd5bAA94e09C4a1C6613A35c485604F507b368517
                        </div>
                        <div class="apply-scan">
                            <img src="/static/image/eth_code.png">
                            <p>{{ $t('ComReward.ScanQRCodeToPay') }}</p>
                        </div>
                        <input type="text" :placeholder="$t('ComReward.PleaseEnter')" id="order"
                               class="form-control-inp"
                               style="width: 80%;margin-bottom: 10px;" v-model="orderPrice">
                        <div style="clear: both;"></div>
                        <el-button type="primary" class="btnshadow wrapBtn" @click="rewardBtn">
                            {{ $t('ComReward.PaymentCompleted') }}
                        </el-button>
                    </div>
                </div>
            </el-dialog>
            <!-- 充值成功 -->
            <el-dialog
                :title="$t('ComReward.TopUpSuccessfully')"
                :visible.sync="VulRLpayDBJSucess"
                class="dialogwdetailC"
                :close-on-click-modal=false
                width="500px">
                <div class="dialogTXCon">
                    <p style="margin-bottom: 30px;">
                        {{ $t('ComReward.DVPWillBe') }}
                    </p>
                    <el-button type="primary" class="btnshadow wrapBtn" @click="VulRLpayDBJSucsBtn">
                        {{ $t('ComReward.Determine') }}
                    </el-button>
                </div>
            </el-dialog>
            <!-- 支付担保金弹窗 -->
            <el-dialog
                :title="$t('ComReward.Tips')"
                :visible.sync="dialogVisiblepop1"
                width="780px">
                <div style="width: 780px;text-align: center;">
                    <div class="common-pop-up">
                        <p>{{ $t('ComReward.SecurityReview') }}</p>
                        <button type="button" class="close-btn close">×</button>
                    </div>
                </div>
            </el-dialog>
            <!-- 支付担保金弹窗 -->
            <el-dialog
                :title="$t('ComReward.Tips')"
                :visible.sync="dialogVisiblepop3"
                width="780px">
                <div class="common-pop-up">
                    <p>{{ $t('ComReward.AuditFailure') }}</p>
                    <p></p>
                    <button type="button" class="close-btn close">×</button>
                </div>
            </el-dialog>
            <!-- 完善信息 -->
            <el-dialog
                :title="$t('ComReward.Tips')"
                :visible.sync="dialogRewardmsg"
                width="400px">
                <div class="common-pop-up ac">
                    <div class="ac">{{ $t('ComReward.CompanyProfiles') }}</div>
                    <router-link to="/combox/company/comMember">
                        <el-button type="primary" style="margin-top: 20px;" class="btnshadow wrapBtn">
                            {{ $t('ComReward.PerfectInformation') }}
                        </el-button>
                    </router-link>
                    <p></p>
                </div>
            </el-dialog>
            <!-- 发布成功 -->
            <el-dialog
                :title="$t('ComReward.Tips')"
                :visible.sync="dialogRewardplan"
                width="400px">
                <div class="common-pop-up ac">
                    <div class="ac">{{ $t('ComReward.TheBugBounty') }}</div>
                    <router-link :to="{path:'/companyTwo',query:{company: mycompany}}">
                        <el-button type="primary" style="margin-top: 20px;" class='btnshadow wrapBtn'>
                            {{ $t('ComReward.LookOver') }}
                        </el-button>
                    </router-link>
                    <p></p>
                </div>
            </el-dialog>
            <el-dialog
                :title="$t('ComReward.Tips')"
                :visible.sync="dialogRewardOther"
                width="400px">
                <div class="common-pop-up ac">
                    <div class="ac">{{ otherReward }}</div>
                    <el-button type="primary" style="margin-top: 20px;" class="btnshadow wrapBtn"
                               @click="otherRewardBtn">{{ $t('ComReward.ContinueEditing') }}
                    </el-button>
                    <p></p>
                </div>
            </el-dialog>
            <!-- 身份审核 -->
            <el-dialog
                :title="$t('ComReward.Tips')"
                :visible.sync="dialogRewardperson"
                width="400px">
                <div class="common-pop-up ac">
                    <div class="ac">{{ $t('ComReward.SuccessfullyRegistered') }}</div>
                    <p></p>
                </div>
            </el-dialog>
        </div>
    </div>
</template>

<script>

export default {
    name: 'comReward',
    data() {
        return {
            msgErr: '',
            update_time: '',
            otherReward: '',
            dialogRewardperson: false,
            dialogRewardOther: false,
            dialognoMoney: false,
            dialogRewardmsg: false,
            dialogRewardplan: false,
            VulRLpayDBJSucess: false,
            tabPosition: 'left',
            activeName: 'first',
            dialogVisibleCZ: false,
            isDisable: false,
            textarea2: '',
            vulintroduceData: [],
            edit_CZdj: false,
            lowPriceStart: '0.05',
            midPriceStart: '',
            highPriceStart: '',
            serPriceStart: '',
            lowPriceEnd: '',
            midPriceEnd: '',
            highPriceEnd: '',
            serPriceEnd: '',
            dataCsfw: '',
            dataVulMid: '',
            dataVulHigh: '',
            dataVulLow: '',
            dataVulSer: '',
            remarks: '',
            dialogVisiblepop1: false,
            dialogVisiblepop3: false,
            orderPrice: '',
            Money: 0,
            mycompany: '',
            userCSData: '',
            lang: 'en'
        }
    },
    mounted() {

    },
    methods: {
        initData() {
            this.$ajax.CScomReward()
                .then(res => {
                    if (res.errcode === 1) {
                        const info = res.data.companyInfo;
                        const company = res.data.company;
                        this.vulintroduceData = info
                        this.update_time = info.update_time
                        this.lowPriceStart = info.low_start
                        this.midPriceStart = info.mid_start
                        this.highPriceStart = info.high_start
                        this.serPriceStart = info.gra_start
                        this.serPriceEnd = info.gra_end
                        this.highPriceEnd = info.high_end
                        this.midPriceEnd = info.mid_end
                        this.lowPriceEnd = info.low_end
                        this.dataCsfw = info.test_range
                        this.dataVulMid = info.mid_vul_rate
                        this.dataVulHigh = info.high_vul_rate
                        this.dataVulSer = info.gra_vul_rate
                        this.dataVulLow = info.low_vul_rate
                        this.remarks = info.remarks
                        this.mycompany = company.company_name
                        this.Money = company.balance
                    }
                })
        },
        otherRewardBtn() {
            this.dialogRewardOther = false
        },
        //预览
        dialogVisibleCZbtn() {
            this.dialognoMoney = false
            this.dialogVisibleCZ = true
        },
        VulRLpayDBJSucsBtn() {
            this.VulRLpayDBJSucess = false
        },
        rewardLast2() {
            this.activeName = 'first'
        },
        rewardLast3() {
            this.activeName = 'second'
        },
        rewardLast4() {
            this.activeName = 'third'
        },
        rewardNext1() {
            if (this.lowPriceEnd === '' || this.lowPriceEnd === null) {
                this.$message.error({
                    message: this.$t('ComReward.ErrorLowRisk'),
                    type: ''
                });
                return false;
            } else if (this.midPriceEnd === '' || this.midPriceEnd === null) {
                this.$message.error({
                    message: this.$t('ComReward.ErrorMidRisk'),
                    type: ''
                });
                return false;
            } else if (this.highPriceEnd === '' || this.highPriceEnd === null) {
                this.$message.error({
                    message: this.$t('ComReward.ErrorHighRisk'),
                    type: ''
                });
                return false;
            } else if (this.serPriceEnd === '' || this.serPriceEnd === null) {
                this.$message.error({
                    message: this.$t('ComReward.ErrorSeriousRewards'),
                    type: ''
                });
                return false;
            } else if (this.lowPriceStart - this.lowPriceEnd >= 0) {
                this.$message.error({
                    message: this.$t('ComReward.ErrorRewardForLowRisk'),
                    type: ''
                });
                return false;
            } else if (this.lowPriceEnd - this.midPriceEnd >= 0) {
                this.$message.error({
                    message: this.$t('ComReward.ErrorRewardForDangerRisk'),
                    type: ''
                });
                return false;
            } else if (this.midPriceEnd - this.highPriceEnd >= 0) {
                this.$message.error({
                    message: this.$t('ComReward.ErrorHighestReward'),
                    type: ''
                });
                return false;
            } else if (this.highPriceEnd - this.serPriceEnd >= 0) {
                this.$message.error({
                    message: this.$t('ComReward.ErrorSeriousHighest'),
                    type: ''
                });
                return false;
            } else {
                const Reward = {
                    'low_start': this.lowPriceStart,
                    'low_end': this.lowPriceEnd,
                    'mid_start': this.lowPriceEnd,
                    'mid_end': this.midPriceEnd,
                    'high_start': this.midPriceEnd,
                    'high_end': this.highPriceEnd,
                    'gra_start': this.highPriceEnd,
                    'gra_end': this.serPriceEnd,
                    'test_range': this.dataCsfw,
                    'low_vul_rate': this.dataVulLow,
                    'mid_vul_rate': this.dataVulMid,
                    'high_vul_rate': this.dataVulHigh,
                    'gra_vul_rate': this.dataVulSer,
                    'remarks': this.remarks
                }
                this.$ajax.CScomRewardNext(Reward)
                    .then(res => {
                        if (res.errcode === 1) {
                            this.activeName = 'second'
                            return false;
                        }
                    })
            }


        },
        rewardNext2() {
            if (this.dataCsfw === '' || this.dataCsfw === null) {
                this.$message.error({
                    message: this.$t('ComReward.PerfectLoopholes'),
                    type: ''
                });
            } else {
                const Reward = {
                    'low_start': this.lowPriceStart,
                    'low_end': this.lowPriceEnd,
                    'mid_start': this.lowPriceEnd,
                    'mid_end': this.midPriceEnd,
                    'high_start': this.midPriceEnd,
                    'high_end': this.highPriceEnd,
                    'gra_start': this.highPriceEnd,
                    'gra_end': this.serPriceEnd,
                    'test_range': this.dataCsfw,
                    'low_vul_rate': this.dataVulLow,
                    'mid_vul_rate': this.dataVulMid,
                    'high_vul_rate': this.dataVulHigh,
                    'gra_vul_rate': this.dataVulSer,
                    'remarks': this.remarks
                }
                this.$ajax.CScomRewardNext(Reward)
                    .then(res => {
                        if (res.errcode === 1) {
                            this.activeName = 'third'
                        }
                    })
            }

        },
        rewardNext3() {
            if (this.dataVulLow === '' || this.dataVulLow == null) {
                this.$message.error({
                    message: this.$t('ComReward.ErrorPerfectLowRisk'),
                    type: ''
                });
            } else if (this.dataVulMid === '' || this.dataVulMid == null) {
                this.$message.error({
                    message: this.$t('ComReward.ErrorPerfectInDanger'),
                    type: ''
                });
            } else if (this.dataVulHigh === '' || this.dataVulHigh == null) {
                this.$message.error({
                    message: this.$t('ComReward.ErrorPerfectHighRisk'),
                    type: ''
                });
            } else if (this.dataVulSer === '' || this.dataVulSer == null) {
                this.$message.error({
                    message: this.$t('ComReward.ErrorPerfectSerious'),
                    type: ''
                });
            }
            const Reward = {
                'low_start': this.lowPriceStart,
                'low_end': this.lowPriceEnd,
                'mid_start': this.lowPriceEnd,
                'mid_end': this.midPriceEnd,
                'high_start': this.midPriceEnd,
                'high_end': this.highPriceEnd,
                'gra_start': this.highPriceEnd,
                'gra_end': this.serPriceEnd,
                'test_range': this.dataCsfw,
                'low_vul_rate': this.dataVulLow,
                'mid_vul_rate': this.dataVulMid,
                'high_vul_rate': this.dataVulHigh,
                'gra_vul_rate': this.dataVulSer,
                'remarks': this.remarks
            }
            this.$ajax.CScomRewardNext(Reward)
                .then(res => {
                    if (res.errcode === 1) {
                        this.activeName = 'fourth'
                    }
                })
        }, //完成
        rewardNext4() {
            const Reward = {
                'low_start': this.lowPriceStart,
                'low_end': this.lowPriceEnd,
                'mid_start': this.lowPriceEnd,
                'mid_end': this.midPriceEnd,
                'high_start': this.midPriceEnd,
                'high_end': this.highPriceEnd,
                'gra_start': this.highPriceEnd,
                'gra_end': this.serPriceEnd,
                'test_range': this.dataCsfw,
                'low_vul_rate': this.dataVulLow,
                'mid_vul_rate': this.dataVulMid,
                'high_vul_rate': this.dataVulHigh,
                'gra_vul_rate': this.dataVulSer,
                'remarks': this.remarks
            }
            this.$ajax.CScomRewardNext(Reward)
                .then(res => {
                    if (res.errcode === 1) {
                        this.$message({
                            message: this.$t('ComReward.SuccessSave'),
                            type: 'success'
                        });
                    }
                })
        },
        handleClick(tab, event) {

        },
        rewardNext() {
            if (this.active++ > 2) this.active = 0;
        },
        //悬赏管理编辑
        edit_CZdjbtn(file) {
            this.$ajax.CScomReward()
                .then(res => {
                    if (res.errcode === 1) {
                        if (res.data.popup === 0) {
                            this.dialogVisibleCZ = true
                        } else if (res.data.popup === 1) {
                            this.dialogVisiblepop1 = true
                        } else if (res.data.popup === 2) {
                            this.edit_CZdj = true
                        } else {
                            this.dialogVisiblepop3 = true
                        }
                    }
                })
        },
        //发布悬赏
        edit_CZdjfbbtn() {
            this.isDisable = true
            setTimeout(() => {
                this.isDisable = false
            }, 1000)
            const Reward = {
                'low_start': this.lowPriceStart,
                'low_end': this.lowPriceEnd,
                'mid_start': this.lowPriceEnd,
                'mid_end': this.midPriceEnd,
                'high_start': this.midPriceEnd,
                'high_end': this.highPriceEnd,
                'gra_start': this.highPriceEnd,
                'gra_end': this.serPriceEnd,
                'test_range': this.dataCsfw,
                'low_vul_rate': this.dataVulLow,
                'mid_vul_rate': this.dataVulMid,
                'high_vul_rate': this.dataVulHigh,
                'gra_vul_rate': this.dataVulSer,
                'remarks': this.remarks
            }
            this.$ajax.CScomRewardUpdate(Reward)
                .then(res => {
                    if (res.errcode === 1) {
                        this.edit_CZdj = false
                        this.dialogRewardplan = true
                    } else if (res.errcode === 2002) {
                        this.dialogRewardmsg = true;
                    } else if (res.errcode === 2003) {
                        this.dialognoMoney = true;
                        this.Money = res.data.balance
                    } else if (res.errcode === 2001) {
                        this.dialogRewardperson = true
                    } else {
                        this.dialogRewardOther = true
                        this.otherReward = res.errmsg;
                    }
                })
        },
        rewardBtn() {
            const depositCom = {
                'order': this.orderPrice
            }
            this.$ajax.CScomDeposit(depositCom)
                .then(res => {
                    if (res.errcode === 1) {
                        this.dialogVisibleCZ = false
                    } else {
                        this.$message.error(res.errmsg);
                    }
                })
        },
    },
    created() {
        this.initData();
    }

}
</script>

<style scoped>
.FBtime {
    font-size: 12px;
    color: #b4bdc2;
    padding-top: 5px;
    display: inline-block;
}

.reward-manage .comColor:hover {
    background: #2196f3 !important;
    color: #ffffff !important;
}

.rewardcon .el-button {
    margin: 20px 30px 30px 0;
}

.rewardcon .el-tabs__item.is-active {
    background: #409EFF !important;
    color: #ffffff !important;
}

.rewardcon .el-tabs__active-bar {
    height: 0 !important;
}

.rewardcon .el-tabs__item {
    border: 1px solid #dbe1e4 !important;
    margin-bottom: 10px !important;
    padding: 10px 40px !important;
    height: inherit !important;
    font-size: 16px !important;
}

.rewardcon .el-tabs__header {
    padding-top: 0 !important;
}

.rewardcon textarea {
    width: 100%;
    height: 100px !important;
}

.rewardcon .el-tabs__content {
    box-sizing: border-box;
}

.rewardConhead {
    border-bottom: 1px solid #dbe1e4;
    padding-bottom: 20px;
    font-size: 14px;
}

.common-pop-up-wrap > div {
    padding: 0 !important;
}

.reward-plan-edit .el-input {
    width: 80px;
}

.edit_CZdj {
    display: none;
}

.hole-lv-item h5 {
    font-size: 14px;
}

.comColor {
    color: #148CCE;
}

.common-yl-btn {
    height: 40px;
    padding: 0 25px;
    font-size: 16px;
    display: inline-block;
    color: #2196f3 !important;
}

.common-yl-btn:hover {
    background: #2196f3 !important;
    color: #ffffff !important;
}

.common-btn-normal:hover {
    color: #ffffff !important;
}

.common-btn-normal {
    color: #ffffff !important;
    height: 40px;
    padding: 0 45px;
}

.reward-header > div {
    width: 50%;
    margin-bottom: 20px;
}

.reward-manage-item:nth-last-of-type(1) {
    border-bottom: none;
}

.closeBtn {
    border: 1px solid #2198f2;
    color: #148CCE;
    margin-right: 20px;
}

.closeBtn:hover {
    background: #2198f2;
    border-bottom: 1px solid #dbe2e5;
    color: #ffffff !important;
}

.nextBtn {
    background: #2198f2;
    border-bottom: 1px solid #dbe2e5;
    color: #ffffff;
    margin-right: 15px;
}

.nextBtn:hover {
    border-bottom: 1px solid #dbe2e5;
    color: #ffffff !important;
    margin-right: 15px;
}

.cAnBtn {
    line-height: 36px !important;
    margin: 20px 0;
}

.reward-title {
    font-size: 24px;
}

.numTitle {
    font-size: 42px;
    font-family: "SourceHanSansSC-regular";
}

.fsize18 {
    font-size: 18px;
}

.reward-plan-edit > div {
    line-height: 32px !important;
}

.reward-manage-item > span {
    width: 5% !important;
}

.hides {
    display: none;
}

.edit-cons {
    width: 100%;
}

.company-textarea {
    width: 100%;
}

.czMoneyBox {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4)
}

.czMoney {
    width: 600px;
    height: auto;
    background: #f4f4f4;
    margin: 25% auto;
    padding: 20px 40px;
}

.czMoney_header {
    padding: 20px;
    position: relative;
}

.full {
    width: 100%;
    overflow: hidden;
    border: none;
    outline: 0;
}

.closeBox {
    position: absolute;
    top: 0;
    right: -10px;
    font-size: 21px;
    font-weight: 700;
    line-height: 1;
    color: #000;
    text-shadow: 0 1px 0 #fff;
    filter: alpha(opacity=20);
    opacity: .2;
    background: 0;
}

.closeBox:hover {
    color: #000;
}

.czMoney_header h5 {
    margin-bottom: 10px;
}

.czMoney_footer {
    padding: 20px;
    text-align: right;
}

.BZJmoney {
    color: #2198f2;
}

pre {
    padding: 0 !important;
    font-size: 14px !important;
    border: none !important;
    background-color: #ffffff !important;
    line-height: inherit;
    font-family: '微软雅黑';
    overflow: hidden;
    white-space: pre-wrap; /* css-3 */
    white-space: -moz-pre-wrap; /* Mozilla, since 1999 */
    white-space: -pre-wrap; /* Opera 4-6 */
    white-space: -o-pre-wrap; /* Opera 7 */
    word-wrap: break-word; /* Internet Explorer 5.5+ */
}

input[type="text" i]:disabled {
    background-color: #f5f5f5;
}

.edit-cons > div {
    margin-bottom: 10px;
}

.reward-plan-edit > div span:hover {
    margin-right: 5px;
}

.wizard > .content > .body input {
    display: inline-block;
}

legend {
    margin-bottom: 20px;
    padding-bottom: 20px;
}

#example-vertical {
    margin-top: 20px;
}

.reward-manage-item > div {
    width: 100% !important;
}

.reward-manage-item {
    padding: 20px 0;
    box-sizing: border-box;
}

.wizard > .content > .body {
    width: 100% !important;
    position: relative;
}

.wizard > .content {
    background: 0;
    border-radius: 0;
    -webkit-border-radius: 0;
}

.wizard.vertical > .steps {
    width: 20%;
}

.wizard.vertical > .content {
    width: 77.5%;
    margin-right: 0%;
    min-height: 15em;
}

.wizard.vertical > .actions {
    margin: 0;
}

label {
    float: right;
}

.wizard > .steps a, .wizard > .steps a:hover, .wizard > .steps a:active {
    border-radius: 0;
    -webkit-border-radius: 0;
}

.wizard > .steps .current a, .wizard > .steps .current a:hover, .wizard > .steps .current a:active {
    background: #2196f3;
}

.wizard > .steps .disabled a, .wizard > .steps .disabled a:hover, .wizard > .steps .disabled a:active {
    background: 0;
    border: 1px solid #dbe1e4;
    color: #30414d;
}

.wizard > .steps .done a, .wizard > .steps .done a:hover, .wizard > .steps .done a:active {
    background: #fafafa;
    border: 1px solid #dbe1e4;
    color: #30414d;
}

.wizard > .actions a, .wizard > .actions a:hover, .wizard > .actions a:active {
    background: #2196f3;
    border-radius: 0;
    -webkit-border-radius: 0;
}

.steps li {
    text-align: center;
}

.steps li a {
    font-size: 16px;
}

legend {
    font-size: 14px;
}
</style>
