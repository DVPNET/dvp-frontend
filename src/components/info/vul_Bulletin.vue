<template>
  		<el-row :gutter="20"   class="hole-detailed-wrap   hole-detailed-wrapBulletin">
			  <el-col :span="17">
			  	<div class="grid-content bg-purple">
				  		<div class="hole-detailed hole-detailed1" style="margin-top: 20px;">
						    <p style="line-height: 50px;">{{$t('message.TheVulsettlementdiagram')}}</p>
						     <div class="clearfix" v-if="dialogCSVul_data.reedit!=0">
					    		<el-steps :active="2" finish-status="success" align-center>
								  <el-step :title="$t('message.ReceivedVulnotification')"></el-step>
								  <el-step :title="$t('message.ViewVuldetails')"></el-step>
								  <el-step :title="$t('message.Confirmedfixed')"></el-step>
								</el-steps>
					    	 </div>
					    	 <div class="clearfix" v-if="dialogCSVul_data.reedit==0">
					    		<el-steps :active="1" finish-status="success" align-center>
								  <el-step :title="$t('message.ReceivedVulnotification')"></el-step>
								  <el-step :title="$t('message.ViewVuldetails')"></el-step>
								  <el-step :title="$t('message.Confirmedfixed')"></el-step>
								</el-steps>
					    	</div>	
					    </div>
			  			<div class="hole-detailed hole-detailed1" style="margin-top: 30px;border:none">
						    <p style="line-height: 50px;">{{$t('message.Summary')}}</p>
						    <div class="hole-item clearfix">
						      <span class="fl">{{$t('message.vulTitle')}} :</span>
						      <div class="fl" id="pocTitle">{{dialogCSVul_data.title}}</div>
						    </div>					    
						    <div class="hole-item clearfix">
						      <span class="fl">{{$t('message.targetType')}} :</span>
						      <div class="fl">{{dialogCSVul_data.target_name}}</div>
						    </div>
						    <div class="hole-item clearfix">
						      <span class="fl">{{$t('message.vulSerialNumber')}} :</span>
						      <div class="fl">{{dialogCSVul_data.vulSign}}</div>
						    </div>
						    <div class="hole-item clearfix">
						      <span class="fl">{{$t('message.attackType')}} :</span>
						      <div class="fl">{{dialogCSVul_data.attack_name}}</div>
						    </div>
						    <div class="hole-item clearfix">
						      <span class="fl">{{$t('message.vulvendor')}} :</span>
						      <div class="fl">{{dialogCSVul_data.company}}</div>
						    </div>
						    <div class="hole-item clearfix">
						      <span class="fl">{{$t('message.submit_time')}} :</span>
						      <div class="fl">{{dialogCSVul_data.write_time}}</div>
						    </div>
						    <div class="hole-item clearfix">
						      <span class="fl">{{$t('message.AuditTime')}} :</span>
						      <div class="fl">{{dialogCSVul_data.write_time}}</div>
						    </div>
					</div>
					<!--漏洞描述-->
					<div class="hole-detailed" style="padding-bottom: 0 !important;margin:30px 0 0 0">
						<p style="line-height: 50px;">{{$t('message.vulnerabilityDescription')}}</p>						   
				    	 <div class="clearfix simditor" style="border: none;">
				    		<div class="simditor-body" v-html="dialogCSVul_data.description" style="padding-bottom: 80px;"></div>
				   			<div class="zzcBtn" v-if="dialogCSVul_data.reedit==0"><router-link  to="/combox/company/companyOne"><el-button  type="primary" @click="dialogDes">{{$t('message.Readmore')}}</el-button></router-link></div>
				    	</div>
					</div>
					<div class="wrapBulletin_userlogin">
				    		<img src="/static/image/nomal-pic.png" alt="" />
				    		<div>
				    			<p>{{$t('message.loginsurecomplookmore')}}</p>
				    			<router-link to="/combox/company/companyOne"><el-button class="wrapBulletin_Btn">{{$t('dvp_head.login')}}</el-button></router-link>
				    			<el-button class="wrapBulletin_Btn" type="primary" @click="wrapBulletin_Res">{{$t('dvp_head.register')}}</el-button>
				    		</div>
				    </div>
			  	</div>
			  </el-col>
			  <el-col :span="7">
			  	<div class="grid-content bg-purple" style="margin-top: 20px;" v-if="lang=='zh'">
			  		<el-collapse v-model="activeName" accordion class="wrapBulletinRight">
						  <el-collapse-item title="漏洞奖励由谁支付？" name="1">
						    <div>
						    	DVP社区对于接收到的漏洞信息，会按厂商性质做两类处理，分为已经入驻DVP平台的厂商，和非入驻的厂商，对于入驻的厂商，奖励是由厂商进行颁发，同时也意味着厂商拥有该漏洞的最终知识产权，对漏洞的公开与否自行决定，而非入驻的厂商，DVP社区会有7天的时间留给厂商进行认领，超过7天DVP社区会对漏洞进行奖励由DVP基金进行支付，同时社区会根据漏洞的修复情况，进行公开处理，一旦确认漏洞修复，且该漏洞具备行业漏洞的典型性，DVP会对漏洞进行脱敏处理，并且公开漏洞，给予行业以及社区成员学习参考。
						    </div>
						  </el-collapse-item>
						  <el-collapse-item title="DVP负责修复漏洞吗？" name="2">
						    <div>
						    	DVP不负责修复漏洞，但可联系我们友情进行协助修复。
						    </div>
						  </el-collapse-item>
						  <el-collapse-item title="厂商为何需要在DVP确认漏洞已修复？" name="3">
						    <div>
						    	为了提高区块链整体的安全性，共同构建更好的区块链生态，厂商修复漏洞后，需要发邮件告知DVP社区漏洞已修复或注册DVP账号，在漏洞管理里将漏洞状态改为已修复。
						    </div>
						  </el-collapse-item>
						  <el-collapse-item title="厂商为何选择入驻DVP？" name="4">
						    <div>
						    	传统安全服务产品主要是用于自动化检测安全问题，有一定的局限性。而在DVP社区，全球白帽子和安全工程师参与测试，并利用攻击者思维，可以从更全面的角度帮助厂商发现安全问题，有效加强相应的漏洞预警和应急响应机制，从而提升区块链整体行业的安全性。
						    </div>
						  </el-collapse-item>
						  <el-collapse-item title="厂商如何入驻DVP？" name="5">
						    <div>第一步，注册DVP账号；</div>
						    <div>第二步，发布漏洞悬赏计划。完成入驻。</div>
						  </el-collapse-item>
						  <el-collapse-item title="漏洞细节会公开吗？" name="6">
						    <div>
						    	DVP社区会选择对外公开具备行业典型性的漏洞，并对公开的漏洞进行脱敏处理。
						    </div>
						  </el-collapse-item>
						    <div style="text-align: right;background: #fff;padding: 20px;"><router-link to="/faq">更多>></router-link></div>
						</el-collapse>
			  	</div>
			  	<div class="grid-content bg-purple" style="margin-top: 20px;" v-if="lang=='en'">
			  		<el-collapse v-model="activeName" accordion class="wrapBulletinRight">
						  <el-collapse-item title="Who pays the loophole reward?" name="1">
						    <div>
						    	There are two types of loopholes, one belongs to vendors on the DVP platform, and one to vendors not on DVP platform. For the vendors on the DVP platform, they pay the reward and own the intellectual property and decide to publish the info about the loophole or not. For vendors not on the DVP platform, DVP will give seven days for the vendor to claim the loophole, after seven days, Foundation will pay the reward, the DVP community may process the loophole publicly, and if they are fixed, may publish the detailed information ( but obscure anything sensitive)
						    </div>
						  </el-collapse-item>
						  <el-collapse-item title="Is DVP responsible to fix loopholes?" name="2">
						    <div>
						    	DVP is not responsible for fixing loopholes, but you can contact us for help.
						    </div>
						  </el-collapse-item>
						  <el-collapse-item title="Why vendors need to confirm on DVP for fixed loopholes?" name="3">
						    <div>
						    	To improve the overall security of the blockchain eco system, vendors need to email and notify DVP after loopholes are fixed, or register a DVP account and change the status of loopholes to ‘fixed’ in the loophole management page.
						    </div>
						  </el-collapse-item>
						  <el-collapse-item title="Why select DVP?" name="4">
						    <div>
						    	Traditional security service products are mainly used for automatically check security issues, and have limited applicability. In DVP community, white hats and security engineers from all over the world, following attackers’ own logic, test and detect vendors’ security problems, improve the loophole warning and urgent response mechanism, and improve the blockchain industry’s overall security.
						    </div>
						  </el-collapse-item>
						  <el-collapse-item title="How to use DVP?" name="5">
						    <div>First, register an account, and pass identity check;</div>
						    <div>Second, pay a security deposit, and publish a loophole reward plan;Third, you are on DVP platform.</div>
						  </el-collapse-item>
						  <el-collapse-item title="Is the loophole detail open to public?" name="6">
						    <div>
						    	After loopholes are fixed, DVP may selectively publish some typical loopholes, but will obscure any sensitive details.
						    </div>
						  </el-collapse-item>
						    <div style="text-align: right;background: #fff;padding: 20px;"><router-link to="/faq">More>></router-link></div>
						</el-collapse>
			  	</div>
					<div class="grid-content bg-purple" style="margin-top: 20px;" v-if="lang=='ko'">
			  		<el-collapse v-model="activeName" accordion class="wrapBulletinRight">
						  <el-collapse-item title="Who pays the loophole reward?" name="1">
						    <div>
						    	There are two types of loopholes, one belongs to vendors on the DVP platform, and one to vendors not on DVP platform. For the vendors on the DVP platform, they pay the reward and own the intellectual property and decide to publish the info about the loophole or not. For vendors not on the DVP platform, DVP will give seven days for the vendor to claim the loophole, after seven days, Foundation will pay the reward, the DVP community may process the loophole publicly, and if they are fixed, may publish the detailed information ( but obscure anything sensitive)
						    </div>
						  </el-collapse-item>
						  <el-collapse-item title="Is DVP responsible to fix loopholes?" name="2">
						    <div>
						    	DVP is not responsible for fixing loopholes, but you can contact us for help.
						    </div>
						  </el-collapse-item>
						  <el-collapse-item title="Why vendors need to confirm on DVP for fixed loopholes?" name="3">
						    <div>
						    	To improve the overall security of the blockchain eco system, vendors need to email and notify DVP after loopholes are fixed, or register a DVP account and change the status of loopholes to ‘fixed’ in the loophole management page.
						    </div>
						  </el-collapse-item>
						  <el-collapse-item title="Why select DVP?" name="4">
						    <div>
						    	Traditional security service products are mainly used for automatically check security issues, and have limited applicability. In DVP community, white hats and security engineers from all over the world, following attackers’ own logic, test and detect vendors’ security problems, improve the loophole warning and urgent response mechanism, and improve the blockchain industry’s overall security.
						    </div>
						  </el-collapse-item>
						  <el-collapse-item title="How to use DVP?" name="5">
						    <div>First, register an account, and pass identity check;</div>
						    <div>Second, pay a security deposit, and publish a loophole reward plan;Third, you are on DVP platform.</div>
						  </el-collapse-item>
						  <el-collapse-item title="Is the loophole detail open to public?" name="6">
						    <div>
						    	After loopholes are fixed, DVP may selectively publish some typical loopholes, but will obscure any sensitive details.
						    </div>
						  </el-collapse-item>
						    <div style="text-align: right;background: #fff;padding: 20px;"><router-link to="/faq">More>></router-link></div>
						</el-collapse>
			  	</div>
			  </el-col>
		</el-row>
</template>

<script>
	import timeDown from '@/components/info/timeDown'
	export default {
		name: 'wrapdetail',
		components:{timeDown},
		data(){
			return{
				ApplyBthshow: true,
				dialogApply: false,
				dialogCSVul_data:[],
				activeName: '1',
				lang: 'zh'
			}
		},
		methods: { 
			initData(){
				var _this=this
				let token = this.$route.query.token				
				this.lang=localStorage.getItem('locale')
				 if(this.lang=='zh'){
					this.$ajax.ComBulletin({'token':token,'language':'zh_CN'})
					.then(res => {
						if(res.errcode===1){
							_this.dialogCSVul_data = res.data.vulInfo;
						}else if(res.errcode ===5001){
							_this.$router.push({ path:"/vul_BulletinNo"})
						}						
					})
				}else if(this.lang=="en" || this.lang==null || this.lang=='' || this.lang=='ko'){
					this.$ajax.ComBulletin({'token':token,'language':'en_US'})
					.then(res => {
						if(res.errcode===1){
							_this.dialogCSVul_data = res.data.vulInfo;
						}else if(res.errcode ===5001){
							_this.$router.push({ path:"/vul_BulletinNo"})
						}						
					})
				}
			},
    	   wrapBulletin_Res(){  	   	
 				let userType=window.localStorage.getItem("tokenType")
 				if(userType==='2'){
 					this.$router.push({path:"/combox/company/companyOne"})
 				}else{
 					this.$router.push({path:"/register"})
 				}
    	   		
    	   },
			ApplyBth(id){
				var _this = this; 
				this.$ajax.BMZVulAudit({'id': id})
				.then(res => {
					if(res.errcode === 1){
						this.dialogApply = true
						this.ApplyBthshow = false  
					}else{
						this.ApplyBthshow = false
					}
				})
			},
			dialogDes(){
				
			}
		},
	     created:function(){
		   	this.initData();
		}
	  }
</script>

<style>
	.hole-detailed-wrapBulletin .el-collapse-item__header{
		line-height: inherit !important;
	}
	.wrapBulletinRight .el-collapse-item__header,.wrapBulletinRight .el-collapse-item__content{
		padding: 0 20px;
		box-sizing: border-box;
	}
	.wrapBulletin_userlogin{
		position: relative;
		text-align: center;
	}
	.wrapBulletin_userlogin img{
		width: 100%;
	}
	.wrapBulletin_Btn{
		width: 150px;
		margin: 30px 0 0 0;
	}
	.wrapBulletin_Btn:nth-of-type(1){
		margin-right: 20px;
	}
	.wrapBulletin_userlogin>div{
		position: absolute;
		left: 0;
		right: 0;
		top: 40%;
		margin: auto;
	}
	.simditor{
		width: 100%;
		position: relative;
		display: inline-block;
	}
	.sjjhbox{
		text-align:left;margin: 0 60px 20px 0;padding:0 0 20px 0;border-bottom: 1px solid #E2EAF1;font-size: 14px;line-height: 18px;
	}
	.hole-item .simditor-body span{
		display: none;
	}
	.zzcBtn{
		width: 100%;
		padding: 120px 0 0 0;
		display: block;
		box-sizing: border-box;
		text-align: center;
		height: 200px;
		z-index: 9999;
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		background-image: -webkit-gradient(linear,left top, left bottom,from(rgba(225,225,225,0)),color-stop(50%, #fff));
		/*background-image: linear-gradient(-180deg,rgba(242,244,245,0) 0%,#f2f4f5 70%);*/
	}
	.dialogwdetailC{
		text-align: center;
	}
	.dialogwdetailC .el-radio{
		margin-top: 20px;
		width: 100%;
	}
	.dialogwdetailC ul li{
		text-align: left;
		line-height: 34px;
		border-bottom: 1px solid #E2EAF1;
	}
	.dialogwdetailC .ConFoot{
		text-align: right;
		margin-top: 30px;
	}
	.dialogwdetailC .ConFoot .el-button{
		margin-left: 20px;
	}
	.dialogwdetailC .pop-up-text{
		margin-bottom: 30px;
		font-size: 12px;
	}
	.hole-proleftbom .el-button:nth-of-type(2):hover{
		background: #409EFF;
		color: #ffffff;
	}
	.hole-detailed-wrapBulletin .el-step__title.is-process{
		color: #8E9EAE !important;
	}
	.hole-detailed-wrapBulletin .hole-header {
		max-width: 1200px
	}
	.hole-detailed-wrapBulletin .hole-header .el-step__line-inner{
		border-style: dashed !important;
	}
	.hole-detailed-wrapBulletin .hole-header2 .progress_cpytime,.hole-header1 .progress_cpytime{
		margin-left: 600px;
		margin-bottom: -10px;
	}
	.hole-detailed-wrapBulletin .hole-header3 .progress_cpytime{
		margin-left: 400px;
		margin-bottom: 10px;
	}
	.hole-detailed-wrapBulletin .hole-header3 .progress_cpytime span{
		color: #2496f3;
		font-size: 14px;
	}
	.hole-detailed-wrapBulletin .hole-header1 .hole-proleftcen span{
		margin-top: 30px;
	}
	.hole-detailed-wrapBulletin .hole-header4 .hole-proleftcen span,.hole-detailed-wrapBulletin .hole-header5 .hole-proleftcen span,.hole-detailed-wrapBulletin .hole-header6 .hole-proleftcen span{
		margin-top: 60px;
		margin-bottom: 6px;
	}
	.hole-detailed-wrapBulletin .hole-proleftcen p{
		font-size: 14px;
	}
	.hole-detailed-wrapBulletin .hole-proHead{
		position: absolute;
		top: 0;
		color: #8E9EAE;
	}
	.hole-detailed-wrapBulletin .hole-status1{
		background: #f5f9fc;
		margin: 20px;
		padding: 20px;
		box-sizing: border-box;		
	}
	.hole-detailed-wrapBulletin .hole-status1>div{
		border-left: 1px dashed #000000;
		padding: 0 20px;
	}
	.hole-detailed-wrapBulletin .hole-status1 p{
		line-height: 20px;
	}
	.hole-detailed-wrapBulletin .hole-status1 b{
		width: 6px;
		height: 6px;
		background: #2196f3;
		display: inline-block;
		border-radius: 3px;
		margin-left: -23px;
		margin-right: 20px;
	}
	.hole-detailed-wrapBulletin .hole-status1 span{
		margin-right: 30px;
	}
	.hole-detailed-wrapBulletin .hole-progress{
		width: 74%;
		border-left: 1px solid #f5f9fc;
		padding: 60px 20px 40px 20px;
		box-sizing: border-box;
		position: relative;
	}
	.hole-detailed-wrapBulletin .hole-progress .el-step__icon-inner{
		display: none;
	}
	.hole-detailed-wrapBulletin .hole-progress .el-step__head.is-wait .el-step__icon{
		background: #8E9EAE !important;
	}
	.hole-detailed-wrapBulletin .hole-progress 	.el-step__head.is-process .el-step__icon{
		background: #8E9EAE !important;
	}
	.hole-detailed-wrapBulletin .hole-progress 	.el-step__head.is-finish .el-step__icon{
		background: #2196f3 !important;
	}
	.hole-detailed-wrapBulletin .hole-header1 .hole-progress .el-step.is-horizontal:nth-child(even) .el-step__head .el-step__icon.is-text{
		background: #409EFF;
	    width: 12px;
	    height: 12px;
	    font-size: 10px;
	    top: 4px;
	}
	.hole-detailed-wrapBulletin .hole-header1 .hole-progress .el-step.is-horizontal:nth-child(even) .el-step__main .el-step__title{
		font-size: 14px;
		margin-top: -50px;
	}
	.hole-detailed-wrapBulletin .hole-header1 .hole-progress .el-step.is-horizontal:nth-child(4) .el-step__head .el-step__icon-inner{
		display: none;
	}
	.hole-detailed-wrapBulletin .hole-header1 .hole-progress .el-step.is-horizontal:nth-child(4) .el-step__head .el-step__icon.is-text{
		display: none;
	}
	.hole-detailed-wrapBulletin .hole-header2 .hole-progress .el-step.is-horizontal:nth-child(even) .el-step__head .el-step__icon.is-text{
		background: #409EFF;
	    width: 12px;
	    height: 12px;
	    font-size: 10px;
	    top: 4px;
	}
	.hole-detailed-wrapBulletin .hole-header2 .hole-progress .el-step.is-horizontal:nth-child(even) .el-step__main .el-step__title{
		font-size: 14px;
		margin-top: -50px;
	}
	.hole-detailed-wrapBulletin .hole-header2 .hole-progress .el-step.is-horizontal:nth-child(2) .el-step__head .el-step__icon.is-text{
		display: none;
	}
	.hole-detailed-wrapBulletin .hole-header2 .hole-progress .el-step.is-horizontal:nth-child(2) .el-step__main .el-step__title{
		display: none;
	}
	
	.hole-detailed-wrapBulletin .hole-header3 .hole-progress .el-step.is-horizontal:nth-child(even) .el-step__main .el-step__title{
		font-size: 14px;
		margin-top: -50px;
	}
	.hole-detailed-wrapBulletin .hole-header3 .hole-progress .el-step.is-horizontal:nth-child(2) .el-step__head .el-step__icon.is-text{
		display: none;
	}
	.hole-detailed-wrapBulletin .hole-header3 .hole-progress .el-step.is-horizontal:nth-child(2) .el-step__main .el-step__title{
		display: none;
	}
	.hole-detailed-wrapBulletin .hole-header3 .hole-progress .el-step.is-horizontal:nth-child(4) .el-step__head .el-step__icon.is-text{
		display: none;
	}
	.hole-detailed-wrapBulletin .hole-header3 .hole-progress .el-step.is-horizontal:nth-child(4) .el-step__main .el-step__title{
		display: none;
	}
	.hole-detailed-wrapBulletin .hole-header3 .hole-progress .el-step.is-horizontal:nth-child(6) .el-step__head .el-step__icon.is-text{
		background: #409EFF;
	    width: 12px;
	    height: 12px;
	    font-size: 10px;
	    top: 4px;
	}

	.hole-detailed-wrapBulletin .hole-header3 .hole-progress .el-step.is-horizontal .el-step__head .el-step__icon.is-text{
		background: #409EFF;
	    font-size: 10px;
	}
	.hole-detailed-wrapBulletin .hole-progress .el-step__line{
		height: 1px !important;
		border-bottom: 1px dashed #8e9eae ;
		background-color: #ffffff;
	}



	.hole-detailed-wrapBulletin .hole-proleft {
		width: 25%;	
	}
	.hole-detailed-wrapBulletin .hole-headerTop{
		width: 100%;
		display:  inline-block;
		padding: 20px;
		box-sizing: border-box;
		border-bottom: 1px solid #f5f9fc;
	}
	.hole-detailed-wrapBulletin .hole-proleft{
		padding-right: 20px;
		box-sizing: border-box;
	}
	.hole-detailed-wrapBulletin .hole-proleft>p{
		width: 100%;
		text-align: center;	
		display: block;
	}
	.hole-detailed-wrapBulletin .hole-proleft .hole-proleftcen{
		margin: 30px 0;
		text-align: center;
	}
	.hole-detailed-wrapBulletin .hole-proleft .hole-proleftcen span{
		width: 100%;
		text-align: center;	
		display: block;
		font-size: 20px;	
	}
	.hole-detailed-wrapBulletin .hole-proleft .hole-proleftcen b{
		font-size: 12px;
		font-weight: 400;
		padding-left: 20px;
		color: #8E9EAE;
		line-height: 24px;
		background: url(/static/image/common/timeIcon.png) no-repeat left center;
	}
	.hole-detailed-wrapBulletin .hole-proleft .hole-proleftbom{
		border-top: 1px solid #f5f9fc;
		padding: 20px 0;
	}
	.hole-detailed-wrapBulletin .hole-proleft .hole-proleftbom p{
		line-height: 24px;
	}
	

	.hole-detailed-wrapBulletin .hole-header{
		width: 100%;
		display:  inline-block;
		-webkit-box-shadow: 0 5px 10px 0 rgba(64,158,225,.1);
	    -moz-box-shadow: 0 5px 10px 0 rgba(64,158,225,.1);
	    box-shadow: 0 5px 10px 0 rgba(64,158,225,.1);
	}
	.hole-detailed-wrapBulletin .hole-detailed1{
		width: 100%;
		display: inline-block;
		border-top: 2px solid #2196f3;
		margin-top: 20px;
	}
	.hole-detailed-wrapBulletin .hole-detailed1 .hole-item{
		width: 49%;
		display: inline-block;
		padding: 0 20px;
		box-sizing: border-box;
	}
	.hole-detailed-wrapBulletin .hole-detailed>p:first-child{
		border-bottom: 1px solid #f5f9fc;
		line-height: 50px;
		font-size: 20px;
		padding: 0 20px;
		margin-bottom: 20px;
	}
	 .hole-detailed-wrapBulletin .simditor-body{
	 	width: 100%;
	 	margin: 10px 0;
	 	padding: 0 20px;
		box-sizing: border-box;
	 }
	 .hole-detailed-wrapBulletin  .simditor-body img{
	 	max-width: 100%;
	 }
	.hole-detailed-wrapBulletin .el-popover{
		min-width: auto !important; 
	}
	.hole-detailed-wrapBulletin .hole-status span p{
		margin-bottom: 10px;
	}
	.hole-detailed-wrapBulletin .hole_title{
		font-size: 24px;
	    line-height: 24px;
	    margin-bottom: 34px;
	    font-weight: 500;
	}
	.hole-detailed-wrapBulletin .progress_title{
		width: 100%;
		display: inline-block;
	}
	.hole-detailed-wrapBulletin .progress_title p{
		font-size: 18px;
	    font-weight: 500;
	    margin-bottom: 10px;
	}
	.hole-detailed-wrapBulletin .progress_title span{
		font-size: 12px;
	    font-weight: 500;
	    color: #8E9EAE;
	}
	.hole-detailed-wrapBulletin .progress_title p:nth-of-type(1){
		float: left;
	}
	.hole-detailed-wrapBulletin .progress_title p:nth-of-type(2){
		float: right;
	}
	.hole-detailed-wrapBulletin .progress_title span:nth-of-type(1){
		float: left;
	}
	.hole-detailed-wrapBulletin .progress_title span:nth-of-type(2){
		float: right;
	}
	.hole-detailed-wrapBulletin .hole-status p{
		color: #8E9EAE;
	}
	.hole-detailed-wrapBulletin .hole-detailes{
		width: 100%;
	    padding: 30px 50px;
	    border: 1px solid #dbe2e5;
	    background-color: #f2f4f5;
	    box-sizing: border-box;
	}
	.hole-detailed-wrapBulletin .dialogTX{
		text-align: center;
		margin-top: 200px;
	}
	.hole-detailed-wrapBulletin .dialogTX p{
		margin: 10px 0;
	}
	
</style>