<template>
	<div>
		<div class=" child-page-sep-wrap">
			<div class="company-top common-shadow clearfix">
				<div class="fl clearfix">
					<!--<button disabled="true" class="fl" style="width: 100px;height: 100px;background: none;margin-right: 30px;"><img src="" class="fl company-detail-logo" style="width: 100px;"></button>-->
					<button disabled="true" class="fl" style="width: 100px;height: 100px;background: none;margin-right: 30px;">
						<img src="/static/image/company-logo-default.png" style="width: 100%;">
					</button>
					<div class="fl company-detail-wrap">
							<p class="company-detail-name">{{this.$route.query.company}}</p>
							<p class="company-detail-info">暂无厂商信息</p>
							<!-- <a href="#" style="float:right;">查看全部</a>-->
					</div>
					</div>
				</div>
				<div class="company-bottom clearfix">
			    <div class="fl company-bottom-left common-shadow">
			    	<div class="company-common-title">
			        <div class="fl company-links-wrap">
			          <a class="active-opt" href="#item-one">{{$t('dvp_head.bounty')}}</a>
			          <a href="#item-two">{{$t('message.Update')}}</a>
			        </div>
			        <router-link to="/membox/vul" class="fr"><el-button type="primary" class="wrapBtn btnshadow">{{$t('btn.sub_vul')}}</el-button></router-link >
			     </div>
			            <div class="company-bottom-left-main">
			        <div style="height: 400px;position: relative;">
			          <div style="position: absolute;left: 0;top: 100px;right: 0;margin: 0 absolute;text-align: center;">
			             <h3 style="color: #4c5b6a;font-size: 24px;font-weight: 400;margin-bottom: 30px;">{{$t('message.Cannotvendorjoined')}}</h3>
			             <el-button type="primary" class="wrapBtnlg btnshadow" @click="CScompany">{{$t('message.ImmediatelySettled')}}</el-button>
			          </div>
			        </div>
			      </div>
			    </div>
			    <div class="fr company-bottom-right common-shadow">
			      <div class="company-common-title">{{$t('message.LoopholeStatisticsNo')}}</div>
			      <div class="reward-plan">
			        <div @click="dialogfundBtn(3)"><span class="com-dot-lv ser-lv"></span>{{$t('message.seriousrisk')}}：<span><a href="#">{{userCSData.ser}}</a></span></div>
			        <div @click="dialogfundBtn(2)"><span class="com-dot-lv high-lv"></span>{{$t('message.highrisk')}}：<span><a href="#">{{userCSData.high}}</a></span></div>
			        <div @click="dialogfundBtn(1)"><span class="com-dot-lv mid-lv"></span>{{$t('message.midrisk')}}：<span><a href="#">{{userCSData.mid}}</a></span></div>
			        <div @click="dialogfundBtn(0)"><span class="com-dot-lv low-lv"></span>{{$t('message.lowrisk')}}：<span><a href="#">{{userCSData.low}}</a></span></div>
			      </div>
			    </div>
			</div>
			<!--漏洞详情-->
				<el-dialog
				  title=""
				  :visible.sync="dialogldxq"
				  width="1024px">
				  	<vulNum :lddtData="fundXQData"></vulNum>
				</el-dialog>
		</div>

	</div>
</template>

<script>
	import vulNum from '@/components/vulNum/vulNum'
	export default {
		name:'companyTwoNo',
		components:{vulNum},
		data(){
			return{
				activeName: 'item-one',
				dialogldxq: false,
				fundXQData:[],
				userCSData:[]
			}
		},
		methods: {
			initData(){
				this.$ajax.ComCompanyNon({'company': this.$route.query.company})
					.then(res => {
						if(res.errcode === 1){
							this.userCSData = res.data
						}
		          })
			},
            CScompany(){
                this.$router.push({path:'/combox/company/companyOne'})
                window.sessionStorage.setItem('userCSrole',2)
            },
			handleClick (tab, event) {
				console.log(tab, event)
			},
			dialogfundBtn(num){
		  		var valListData={
		  			"companyName": this.$route.query.company,
		  			'month': '00',
		  			'is_fix': 'all',
		  			'level': num
		  		}
		  		this.dialogldxq = true
		  		var _this=this
		  		this.$ajax.ComCompanyVulTotalList(valListData)
			    .then(res => {
					if(res.errcode === 1){
						_this.fundXQData = res.data.companyVulTotalList
					}
				})
		  }
		},
		created:function(){
			   	this.initData();
		}
	}
</script>>

<style>
	.el-button a{color: #ffffff;;}
	.companytwo .el-tabs__header{
		height: 56px;
	}
	.company-common-title{
		border-bottom: 1px solid #dee3e2;
	}
	.company-common-title .el-button--primary{
		margin-top: 8px;
	}
</style>
