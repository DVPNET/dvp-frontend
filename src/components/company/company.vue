<template>
	<div>
		<div class="child-page-sep-wrap companywrap" style="min-height: 600px !important;">
			<div class="company-left clearfix common-shadow fl">
				<el-menu  :default-active="$route.path"  class="el-menu-demo CSmenu"  router  mode="horizontal">
					<el-menu-item  index="/combox/company/companyOne">
			        <span slot="title">{{$t('message.personalCenter')}}</span>
			      </el-menu-item>
			      <el-menu-item  index="/combox/company/comLoophole">
			        <span slot="title">{{$t('message.VulnerabilityManagement')}}</span>
			      </el-menu-item>
			      <el-menu-item  index="/combox/company/comReward">
			        <span slot="title">{{$t('message.BountyManagement')}}</span>
			      </el-menu-item>
			      <el-menu-item  index="/combox/company/comTrade">
			        <span slot="title">{{$t('message.DepositManagement')}}</span>
			      </el-menu-item>
			      <el-menu-item index="/combox/company/comMember">
			        <span slot="title" >{{$t('message.AccountSettings')}}</span>
			      </el-menu-item>
			  </el-menu>
			</div>
			<div class="company-right fr">
				<transition name="el-fade-in-linear">           	
	     			<router-view></router-view>
	            </transition>
			</div>

	</div>
</div>

</template>

<script>
//	import comLoophole from '@/components/company/comLoophole'
//	import comReward from '@/components/company/comReward'
//	import comTrade from '@/components/company/comTrade'
//	import comMember from '@/components/company/comMember'

	export default {
		name:'company',

		data(){
			return{
				activeIndex:'',
				tokenType:0
			}
		},
		methods: {
			initData(){
				this.activeIndex=this.$route.fullPath;
				this.tokenType=window.localStorage.getItem("tokenType");
			},
			handleClick (tab, event) {
				//console.log(tab, event)
			},

		},
		created:function(){
	   		this.initData();
		}
	}
</script>

 <style>
 	.companymy_tab tbody tr:hover td{
 		background: #f5f9fc !important;
 	}
 	.company-left{
 		width: 20%;
 	}
 	.company-personal-wrap{
 		border-top: 3px solid #2196f3 !important;
 	}
 	.company-right{
 		width: 78%;
 		margin-bottom: 40px;
 	}
 	.company-newtop{
 		position: relative;
 		display: inline-block;
 		width: 100%;
 	}
 	.company-newtop ul{
 		width: 100%;
 	}
 	.company-newtop ul li{
 		width: 25%;
 		float: left;
 		padding: 25px 0 25px 30px;
 		box-sizing: border-box;
 	}
 	.comTopOther span{
 		font-size: 24px;
 		display: inline-block;
 		margin: 0 0 5px 0;
 	}
 	.comTopOther p:nth-of-type(1){
 		margin-bottom: 20px;
 	}
 	.comTopOther p:nth-of-type(2){
 		color: #2196f3;
 		cursor: pointer;
 	}
	.company-left .el-tabs__content{
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
	.companywrap .el-tabs__header{
		padding: 10px 30px 0 30px;
		box-sizing: border-box;
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
	.CSmenu{
		width: 100%;
		border: none !important;
	}
	.CSmenu li{
		width: 100%;
		text-align: center;
		font-size: 16px;
		font-weight: 600;
		border-bottom: solid 1px #E2EAF1;
		box-sizing: border-box;
	}
	.CSmenu li:nth-of-type(1){
		border-left: none;
	}
	.CSmenucons{
		padding: 30px 24px;
	}
	.CSmenu>.el-menu-item.is-active{
		border-left: 3px solid #409EFF;
		border-top: none !important;
	}
	.CSmenu>.el-menu-item{
		border-bottom-color: inherit !important;
		border-bottom: solid 1px #E2EAF1 !important;
	}
</style>
