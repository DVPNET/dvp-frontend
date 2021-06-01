<template>
	<div>
		<div class="child-page-sep-wrap companytwo">
				<div class="company-top common-shadow clearfix">
					<div class="fl clearfix">
						<!--<button disabled="true" class="fl" style="width: 100px;height: 100px;background: none;margin-right: 30px;"><img src="" class="fl company-detail-logo" style="width: 100px;"></button>-->
						<button disabled="true" class="fl" style="width: 100px;height: 100px;background: none;margin-right: 30px;">
							<img :src="$store.state.Vuluser.companyInfo.logo" v-if="$store.state.Vuluser.companyInfo.logo" class="fl company-detail-logo" style="width: 100px;">
							<img src="/static/image/company-logo-default.png" v-if="!$store.state.Vuluser.companyInfo.logo" class="el-icon-plus">
						</button>
						<div class="fl company-detail-wrap">
								<p class="company-detail-name">{{$store.state.Vuluser.company.company_name}}</p>
								<p class="company-detail-info" @click="zkqbfh" :title="$store.state.Vuluser.companyInfo.introduction">{{$store.state.Vuluser.companyInfo.introduction}}</p>
						</div>
					</div>		
					<div class="fr clearfix">
					  <div class="fl ac reward-item">
					    <p> {{$store.state.Vuluser.companyInfo.gra_end}} Ether</p>
					    <p>{{$t('message.vulfirmsHighest')}}</p>
					  </div>
					  <div class="fl ac reward-item">
					    <p>{{$store.state.Vuluser.vulCount}} {{$t('message.Item')}}</p>
					    <p>{{$t('message.vulHasbeenclaimed')}}</p>
					  </div>
					</div>
				</div>
				  <div class="company-bottom clearfix">
				    <div class="fl company-bottom-left common-shadow" style="position: relative;">
				    	<div class="fl" style="position: absolute;top: 18px;left:200px;font-size: 12px;" v-if="$store.state.Vuluser.historyCount">({{$store.state.Vuluser.historyCount}})</div>
				    	<div class="company-common-title vuecode_common">				    	
				    	<router-link to="/membox/vul" style="position: absolute;top: 0;right: 10px;z-index: 99;"><el-button type="primary" class="wrapBtn btnshadow" style="height: 38px;font-size: 16px;">{{$t('btn.sub_vul')}}</el-button></router-link >
				        <div class="fl company-links-wrap" >
				        	<el-tabs v-model="activeName" @tab-click="handleClick" class="vuecode_tab">
								<el-tab-pane :label="$t('dvp_head.bounty')" name="first" class="vul_state" >
									<div class="company-bottom-left-main">
							        <div>
							          <!-- 测试范围 -->
							          <a class="company-bottom-left-main-item" name="item-one">
							            <h5>{{$t('message.TestRange')}}</h5>
							            <p><pre>{{$store.state.Vuluser.companyInfo.test_range}}</pre></p>
							          </a>							
							          <!-- 漏洞评级 -->
							          <a class="company-bottom-left-main-item" name="item-two">
							            <h5>{{$t('message.VulnerabilityRating')}}</h5>
							            <h6>{{$t('message.SeriousVul')}}</h6>
							            <p><pre>{{$store.state.Vuluser.companyInfo.gra_vul_rate}}</pre></p>
							            <h6>{{$t('message.HighVul')}}</h6>
							            <p><pre>{{$store.state.Vuluser.companyInfo.high_vul_rate}}</pre></p>
							            <h6>{{$t('message.MidVul')}}</h6>
							            <p><pre>{{$store.state.Vuluser.companyInfo.mid_vul_rate}}</pre></p>
							            <h6>{{$t('message.LowVul')}}</h6>
							            <p><pre>{{$store.state.Vuluser.companyInfo.low_vul_rate}}</pre></p>
							          </a>
							          <!-- 注意事项 -->
							          <a class="company-bottom-left-main-item" name="item-three">
							            <h5>{{$t('message.Precautions')}}</h5>
							            <p><pre>{{$store.state.Vuluser.companyInfo.remarks}}</pre></p>
							          </a>
							        </div>
							      </div>
								</el-tab-pane>
								<el-tab-pane :label="$t('message.Update')" name="second">
									<div class="vuecodetime">
										<timeline  v-for="(item,index) in reverseSum" :key="index" style="--timelineTheme:#e2eaf1;--timelineBg:#fff;">
											<div><timeline-item bg-color="#2196f3"><p style="font-size: 20px;font-weight: 600;">{{item}}年</p></timeline-item></div>
										    <div v-for="vul in $store.state.Vuluser.companyHistory[item]">
											    <timeline-item bg-color="#ffffff">
											    	<span style="font-size: 16px;color: #8e9eae;">{{vul.updatetime}} </span><span style="font-size: 16px;">更新了赏金内容</span><p><router-link :to="{path:'/vueCode',query: {id:vul.id}}" style="font-size: 14px;line-height: 34px;">[{{$t('message.ForMoreInformation')}}]</router-link></p>
											    </timeline-item>							    	
										    </div>
										</timeline>
									</div>
								</el-tab-pane>
  							</el-tabs>
				        </div>
				     </div>

				    </div>
				    <div class="fr company-bottom-right common-shadow">
				      <div class="company-common-title">{{$t('message.LoopholeStatistics')}}</div>
				      <div class="reward-plan">
				        <div><span class="com-dot-lv ser-lv"></span>{{$t('message.seriousrisk')}}：{{$store.state.Vuluser.companyInfo.gra_start}} - {{$store.state.Vuluser.companyInfo.gra_end}}  Ether</div> 
				        <div><span class="com-dot-lv high-lv"></span>{{$t('message.highrisk')}}：{{$store.state.Vuluser.companyInfo.high_start}}  - {{$store.state.Vuluser.companyInfo.high_end}}  Ether</div> 
				        <div><span class="com-dot-lv mid-lv"></span>{{$t('message.midrisk')}}：{{$store.state.Vuluser.companyInfo.mid_start}}  - {{$store.state.Vuluser.companyInfo.mid_end}} Ether</div> 
				        <div><span class="com-dot-lv low-lv"></span>{{$t('message.lowrisk')}}：{{$store.state.Vuluser.companyInfo.low_start}}  - {{$store.state.Vuluser.companyInfo.low_end}}  Ether</div> 
					  </div>
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
	import { Timeline, TimelineItem, TimelineTitle,companyTwoNo } from 'vue-cute-timeline'
	export default {
		 components: {
		    Timeline,
		    TimelineItem,
			TimelineTitle,
			vulNum
		  },
		name:'companyTwo',		
		data(){
			return{
					activeName:'first',
					comLink: [
						{
							name: "测试范围",
							hrefs: "#item-one"
						},{
							name: "漏洞评级",
							hrefs: "#item-two"
						},{
							name: "注意事项",
							hrefs: "#item-three"
						}		
					],
					guigeSpan: 0,
					userCSData:[],
					fundXQData:[],
					dialogldxq: false,
			}
		},
		
		computed: {
		       reverseSum() {
		       	let datas=this.$store.state.Vuluser.companyHistory
		       	let arr=[]
				for(var i in datas){
					if(datas[i][0]){
					arr.push(i);
						
					}

				}
				let sortArr = arr.reverse();
				return sortArr
     		 },
		},
		methods: {
			initData(){
				this.$ajax.ComCompanyInfo({'company': this.$route.query.company})
					.then(res => {
						if(res.errcode === 1){
							window.localStorage.setItem('$Vuluser',JSON.stringify(res.data))
			          		this.$store.dispatch('setVuluser',window.localStorage.getItem("$Vuluser"))
						}
				}),
				this.$ajax.ComCompanyNon({'company': this.$route.query.company})
					.then(res => {
						if(res.errcode === 1){
							this.userCSData = res.data
						}
		          })
			},			
			handleClick (tab, event) {},
			guige(index){
            	this.guigeSpan = index;
	        },
	        zkqbfh(){
	       	
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

<style scoped>

	.timeline-item{
		border-bottom: 0 !important;
	}
	.vuecodetime{
		margin-top: 50px;
	}
	.vuecodetime p{
		line-height: 20px !important;
	}
	.vuecodetime li{
		line-height: 18px !important;
	}
	.icon-heart{
		width: 20px;
	}
	.update-wrap{
		padding-left: 100px;
	}
	.update-wrap .update-box .update-day{
		left: -180px;
	}
	.update-wrap .update-box .update-content{
		padding: 15px;
		width: 120px;
	}
	.markdown-body a{
		font-size: 12px;
		color: #2196f3 !important;
	}
	.vul_state{
		padding-bottom: 50px;
	}
	.company-detail-info{
		max-height: 60px;
		overflow:hidden; text-overflow: ellipsis; 
	    display:-webkit-box; -webkit-line-clamp:3; -webkit-box-orient:vertical;
	}
	.companytwo .el-button a{color: #ffffff;;}
	.companytwo .el-tabs__header{
		height: 56px;
		padding:  0;
	}
	.company-common-title{
		border-bottom: 1px solid #e2eaf1;
	}
	.companyld{
		margin-top: 10px;
	}
	.companytwo .el-button{
		padding: 8px 20px !important;
	}
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