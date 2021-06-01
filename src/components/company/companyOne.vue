<template>
	<div class="companyOne_wrap">
		<div class="company-newtop">
			<el-card   shadow="hover" class="newtopOne">
				<div class="newtopOnehead">
					<button disabled="true" style="width: 100px;height: 140px;background: none;padding-top: 10px;">
						<img :src="$store.state.CSuser.user.logo" :onerror="defaultImg" class="fl company-detail-logo comuser-logo" style="width: 100px;">
					</button>
				</div>

				<p class="company-detail-name" style="background: #ffffff;font-size: 16px;">	{{$store.state.CSuser.user.company_name}}
					<span v-if="$store.state.CSuser.user.state == 1"><img :title="$t('icon_title.dvp_partners')" src="/static/image/home/Security_aut.png" alt="" /></span>
	        		<span v-if="$store.state.CSuser.user.state == 1 && $store.state.CSuser.user.publish == 1"><img :title="$t('icon_title.bountyVendor')" src="/static/image/home/conpanyYXicon.png" alt="" /></span>
	        		<span v-if="$store.state.CSuser.user.state != 1"></span>
				</p>
				<!--<p class="company-detail-info" @click="zkqbfh">{{$store.state.CSuser.user.introduction}}</p>-->
			</el-card>
			<ul class="fr">
				<li></li>
				<li>
					<div class="comTopOther">
						<span>{{$store.state.CSuser.user.balance}}</span>
						<p>{{$t('message.SecurityDepositBalance')}}(Ether)</p><a href=""></a>
						<p class="companyhead"><span @click="recharge">{{$t('message.Recharge')}}</span> | <span><router-link to="/combox/company/comTrade">{{$t('message.Detail')}}</router-link></span></p>
				  </div>
				</li>
				<li>
					<div class="comTopOther">
						<span>{{$store.state.CSuser.user.gra_end}}</span>
						<p>{{$t('message.BountyRewardsCriticalLoophole')}}（Ether）</p>
						<p class="companyhead">
							<span>
								<router-link to="/combox/company/comReward"  v-if="$store.state.CSuser.user.publish===0" >{{$t('message.JoinBountyProgram')}}</router-link>
								<router-link to="/combox/company/comReward"  v-if="$store.state.CSuser.user.publish===1" >{{$t('message.modify')}}</router-link>
							</span>
						</p>

				    </div>
				</li>
				<li>
					<div class="comTopOther">
						<span>{{$store.state.CSuser.user.rewardTotal}}</span>
						<p>{{$t('message.TotalBountyRewards')}}（Ether）</p>
						<p class="companyhead">
							<span><router-link to="/combox/company/comTrade?type=2">{{$t('message.Detail')}}</router-link></span>
						</p>
					</div>
				</li>
			</ul>
		</div>
		<div class="company-personal-wrap" style="position: relative;padding-bottom: 90px;">
		<div v-show="vulLoophole1">
			<p class="msk-tips">{{$t('message.VulpassesVerificationProcess')}}</p>
	        <img src="/static/image/DH_public/loudongguanli.png" style="width: 100%">
		</div>
	    <el-container v-show="vulLoophole2">
			<el-header><h2>{{$t('message.MyVulnerability')}}</h2></el-header>
			<ul class="myVulicon">
				<li>
					<router-link to="/combox/company/comLoophole?state=0">
						<el-badge  :value="comLoopholeDatanum[0]" v-if="!comLoopholeDatanum[0] == 0"  class="item">
							<div style="background: url(/static/image/DH_public/dairenlingnomml.png) no-repeat center;width: 40px;height: 40px;" class="myVulIcon1"></div>
						</el-badge>
						<el-badge  v-if="comLoopholeDatanum[0] == 0"  class="item">
							<div style="background: url(/static/image/DH_public/dairenlingnomml.png) no-repeat center;width: 40px;height: 40px;" class="myVulIcon1"></div>
						</el-badge>
						<p>{{$t('message.vulUnclaimed')}}</p>
					</router-link>
				</li>
				<li>
					<router-link to="/combox/company/comLoophole?state=5">
						<el-badge :value="comLoopholeDatanum[5]"  v-if="!comLoopholeDatanum[5] == 0" class="item">
							<div style="background: url(/static/image/DH_public/daixiufunomal.png) no-repeat center;width: 40px;height: 40px;" class="myVulIcon2"></div>
						</el-badge>
						<el-badge  v-if="comLoopholeDatanum[5] == 0" class="item">
							<div style="background: url(/static/image/DH_public/daixiufunomal.png) no-repeat center;width: 40px;height: 40px;" class="myVulIcon2"></div>
						</el-badge>
						<p>{{$t('message.LoopholesFixed')}}</p>
					</router-link>
				</li>
				<li>
					<router-link to="/combox/company/comLoophole?state=6">
						<el-badge class="item">
							<div style="background: url(/static/image/DH_public/yixiufunomal.png) no-repeat center;width: 40px;height: 40px;" class="myVulIcon3"></div>
						</el-badge>
						<p>{{$t('message.vulFixed')}}</p>
					</router-link>
				</li>
				<li>
					<router-link to="/combox/company/comLoophole?state=2">
						<el-badge  class="item">
							<div style="background: url(/static/image/DH_public/yihuluenomal.png) no-repeat center;width: 40px;height: 40px;" class="myVulIcon4"></div>
						</el-badge>
						<p>{{$t('message.IgnoredLoopholes')}}</p>
					</router-link>
				</li>
				<li>
					<router-link to="/combox/company/comLoophole">
						<span><img src="/static/image/DH_public/jiantounomal.png" alt="" /></span>
						<p>{{$t('message.AllLoopholes')}}</p>
					</router-link>
				</li>
			</ul>
			<vulsCompCons :comLoopholeDatas="comLoopholeData"></vulsCompCons>

           <div class="block pages" id="pages"  v-if="total !=0" style="text-align: right">
   				<el-pagination
   				 	   @size-change="handleSizeChange"
	   				   @current-change="handleCurrentChange"
	   				    :current-page.sync="currentPage"
	   				    :page-size="pagesize"
						layout="total,prev, pager, next"
						:total="total">
					</el-pagination>
			</div>


		</el-container>
		<!--充值弹窗-->
				<el-dialog
					  title=""
					  :visible.sync="dialogVisibleCZ"
					  width="720px">
					 <div style="width: 720px;text-align: center;">
						    <div class="apply-safeguards-pop-up common-pop-up">
						      <p class="apply-title" style="margin-bottom: 30px;">{{$t('message.Deposit')}}
						      	<el-tooltip placement="bottom">
								  <div slot="content">
								  		<div>
									        <p class="apply-info-text" style="font-weight: 600;">{{$t('message.AboutSecurityDeposit')}}</p>
									        <p class="apply-info-text">• {{$t('message.SecurityDepositDVPBountyRewards')}}</p>
									        <p class="apply-info-text">• {{$t('message.depositNOlessthanloopholeBountyProgram')}}</p>
									        <p class="apply-info-text">• {{$t('message.withdrawsecurityDepositanyTime')}}</p>
									        <p class="apply-info-text">• {{$t('message.depositingproblemcontactDVP')}}</p>
									        <p class="apply-info-text">service@dvpnet.io</p>
						      			</div>
								  	</div>
								  <el-button type="text"><span class="ketubbah-btn"><img src="/static/image/question.png"></span></el-button>
								</el-tooltip></p>
						      <!--<p class="apply-num" style="margin-bottom: 28px;">24 Ether <b style="font-size: 12px;display: block;">最高奖励</b></p>-->
						      <div class="apply-address">{{$t('message.DepositAddress')}}：0xd5bAA94e09C4a1C6613A35c485604F507b368517</div>
						      <div class="apply-scan">
						        <img src="/static/image/eth_code.png">
						        <p>{{$t('message.walletQRcode_makepayment')}}</p>
						      </div>
						      <input type="text" :placeholder="$t('message.PleaseEnterTxHash')"  id="order" class="form-control-inp" style="width: 80%;margin-bottom: 10px;" v-model="orderPrice">
						      <div style="clear: both;"></div>
						      <el-button type="primary" @click="rewardBtn" :plain="true"  style="background: #309df4 !important;">支付完成</el-button>
						    </div>
					</div>
				</el-dialog>
				<!-- 充值成功 -->
				<el-dialog
				  title="充值成功"
				  :visible.sync="VulRLpayDBJSucess"
				  class="dialogwdetailC"
	 			  :close-on-click-modal = false
				  width="500px">
				  	<div class="dialogTXCon">
				  		<p style="margin-bottom: 30px;">{{$t('message.DVPWillCompleteAudit15minutes')}}</p>
				  		<el-button type="primary" class="common-btn" @click="VulRLpayDBJSucsBtn">{{$t('message.Confirm')}}</el-button>
					</div>
			    </el-dialog>
		<!-- 赏金计划 -->
		<el-dialog
		  title=""
		  :visible.sync="BountyPlan"
		  class="dialogwdetailC"
		  :close-on-click-modal = false
		  width="700px">
		  	<div class="dialogTXCon">
		  		<p style="text-align: left;font-size: 16px;margin-bottom: 5px;">{{$t('message.depositBountyAprocessLoopholes')}}</p>
		  		<p style="text-align:left;margin: 0 60px 20px 0;padding:0 0 20px 0;border-bottom: 1px solid #E2EAF1;font-size: 14px;line-height: 18px;">{{$t('message.ParticipatingBountyProgramfree')}}</p>
		  		<div style="text-align: left;">
		  			<p style="font-size: 16px;">{{$t('message.WaysCheckLoopholes')}}：</p>
			  			 <el-radio-group v-model="radioPay" @change="vulchange">
			  			 	<el-radio :label="1">{{$t('message.ParticipatingBountyProgramfree')}}<router-link to="/Bounty" >[{{$t('message.aboutBounty')}}]</router-link></el-radio>
						    <el-radio :label="2">{{$t('message.BoParticipatingBountyProgramprocessing')}}</el-radio>
						</el-radio-group>
		  		</div>
			    <div class="ConFoot"><el-button type="primary" class="common-btn"  @click="BountyPlanBtn()">{{BountyPlanCon}}</el-button></div>
			</div>
	    </el-dialog>
    </div>
	</div>

</template>

<script>
	import { mapState,mapMutations } from 'vuex';
	import vulsCompCons from '@/components/company/vulsCompCons'
	import vulDetailrl from '@/components/info/vulDetailrl'
	export default {
		name:'companyOne',
		components:{vulsCompCons,vulDetailrl},
		data(){
			return{
				dialogVisibleCZ: false,
				VulRLpayDBJSucess:false,
				BountyPlanCon:'加入赏金计划',
	        	BountyPlan: false,
	        	radioPay: 1,
	       		total:0,//默认数据总数
                pagesize: 0,//每页的数据条数
                currentPage:1,//默认开始页面
		        value: '',
	         	comLoopholeData: [],
	         	vulLoophole1: false,
	         	vulLoophole2: false,
	         	dialogCSVul_data:'',
	         	orderPrice:'',
	         	comLoopholeDatanum:[],
	         	defaultImg: 'this.src="' + require('../../../static/image/company-logo-default.png') + '"'
			}
		},
		created(){
			this.initData();
		},
		methods: {
			initData(){
				var _this=this
				this.$ajax.CSvul({"status": 3})
				.then(res => {
					if(res.errcode == 1){
						_this.total = res.data.vulList.total
						_this.pagesize = res.data.vulList.per_page
						_this.comLoopholeDatanum=res.data.vulCount
						if(res.data.popup === 0){
							_this.vulLoophole2 = true
							_this.comLoopholeData = res.data.vulList.data;
						}else if(res.data.popup === 1){
							_this.vulLoophole1 = true
							_this.comLoopholeData = res.data.vulList.data;
						}

					}
				})
			},
			VulRLpayDBJSucsBtn(){
				this.VulRLpayDBJSucess = false
			},
			vulchange(id){
	      		if(id==1){
			  		this.BountyPlanCon = '加入赏金计划'
		  		}else if(id==2){
		  			this.BountyPlanCon ='存储赏金'
		  		}
	      	},
			zkqbfh(){
				 if($(".company-detail-info").height()<40){
			      $(".company-detail-wrap a").text('')
			   	 }
			    $(".company-detail-wrap a").toggle(function(){
			      $(".company-detail-info").addClass("hidep")
			      $(".company-top").addClass("hidepbox")
			      $(this).text("返回")
			    },function(){
			      $(".company-detail-info").removeClass("hidep")
			      $(".company-top").removeClass("hidepbox")
			      $(this).text("查看更多")
			    })
			},
			handleClick (tab, event) {
				//console.log(tab, event)
			},
			recharge(){
				this.dialogVisibleCZ = true
			},
			rewardBtn(){
					var _this=this
					var depositCom={
						'order': this.orderPrice
					}
					this.$ajax.CScomDeposit(depositCom)
					.then(res => {
						if(res.errcode === 1){
							this.dialogVisibleCZ = false
							this.VulRLpayDBJSucess = true
						}else{
							this.$message.error(res.errmsg);
						}
					})
				},
			vullist_select(){
				var type = this.value
	  			this.$ajax.CSvul({"status": type})
				.then(res => {
					this.comLoopholeData = res.data.vulList.data;
				})
			},
		  	handleClick(tab,event){
		  		var indexs=tab.index
		  		if(indexs==1){
		  			this.$ajax.CSvul({"status": 0})
					.then(res => {
						this.comLoopholeData = res.data.vulList.data;
					})
		  		}else if(indexs==2){
		  			this.$ajax.CSvul({"status": 5})
					.then(res => {
						this.comLoopholeData = res.data.vulList.data;
					})
		  		}else if(indexs==0){
		  			this.$ajax.CSvul({"status": 'all'})
					.then(res => {
						this.comLoopholeData = res.data.vulList.data;
					})
		  		}
		  	},
		  	handleSizeChange(pagesize){
		  		this.pagesize = pagesize;
		  	},
		  	handleCurrentChange(currentPage){
		  		  this.currentPage == currentPage
				  var _this = this;
				  this.$ajax.CSvul({"page": this.currentPage })
				  .then(res => {
						if(res.errcode === 1){
							_this.comLoopholeData = res.data.vulList.data;
						}
					})
		  	}

		}
	}
</script>

 <style>
 	.companyhead span{
 		font-size: 14px !important;
 	}
 	.myVulicon{
 		display: inline-block;
 		height: 140px;
 	}
 	.myVulicon a{
 		color: #606266 !important;
 		font-size: 14px;
 	}
 	.myVulIcon1:hover{
 		background: url(/static/image/DH_public/dairenlinghover.png) no-repeat center !important;
 	}
 	.myVulIcon2:hover{
 		background: url(/static/image/DH_public/daixiufuhover.png) no-repeat center !important;
 	}
 	.myVulIcon3:hover{
 		background: url(/static/image/DH_public/yixiufuhover.png) no-repeat center !important;
 	}
 	.myVulIcon4:hover{
 		background: url(/static/image/DH_public/yihuluehover.png) no-repeat center !important;
 	}
 	.myVulicon .el-badge{
 		border: 1px solid #E2EAF1;
 		padding: 20px;
 		border-radius: 50%;
 	}
 	.myVulicon li p{
 		padding-top: 10px;
 		color: #8e9eae;
 	}
 	.myVulicon li{
 		float: left;
 		width: 20%;
 		text-align: center;
 		cursor: pointer;
 	}
 	.myVulicon li span{
 		display: inline-block;
 		border: 1px solid #E2EAF1;
 		width: 50px;
 		height: 50px;
 		margin: 15px 0;
 		line-height: 50px;
 		text-align: center;
 		background: #f5f9fc;
 		border-radius: 50%;
 	}
 	.company-newtop{
 		position: relative;
 		display: inline-block;
 		width: 100%;
 		padding: 20px 0;
 		margin-bottom: 40px;
 	}
 	.company-newtop ul{
 		width: 100%;
 		background: #ffffff;
 		-webkit-box-shadow: 0 2px 12px 0 rgba(64,158,225,.1);
	    -moz-box-shadow: 0 2px 12px 0 rgba(64,158,225,.1);
	    box-shadow: 0 2px 12px 0 rgba(64,158,225,.1);
 	}
 	.company-newtop ul li{
 		width: 25%;
 		float: left;
 		padding: 25px 0 25px 30px;
 		box-sizing: border-box;
 	}
 	.newtopOne{
 		width: 20%;
 		text-align: center;
 		position: absolute;
 		left: 20px;
 		top: 0;
 	}
 	.newtopOnehead{
 		/* background-image: url(/static/image/DH_public/cs_grzxdi.png); */
		background-color: rgb(104, 116, 142); 
 		background-repeat: no-repeat;
 		background-position: top;
 		background-size: 100%;
 	}
 	.comuser-logo{
 		border-radius: 50%;
 	}
 	.comTopOther span{
 		font-size: 24px;
 		display: inline-block;
 		margin: 0 0 5px 0;
 		font-weight: bold;
 	}
 	.comTopOther p:nth-of-type(1){
 		margin-bottom: 20px;
 		color: #8E9EAE;
 	}
 	.comTopOther p:nth-of-type(2){
 		color: #309df4;
 		cursor: pointer;
 	}
	.companyOne_wrap .el-tabs__content{
		margin-top: 30px;
		border-top: 1px solid #dee3e2;
		padding: 20px 0 0 0;
	}
	.project-tab {
		font-size: 14px;
	}
	.sucbox{
		margin-top: 230px !important;
	}
	.company-personal-wrap{
		padding: 30px 30px 50px 30px;
		box-sizing: border-box;
		position: relative;
		background: #ffffff;
	}
	.company-Rtop {
		width: 100%;
	}
</style>
