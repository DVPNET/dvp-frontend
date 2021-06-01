<template>
	<div>
		<div class=" child-page-sep-wrap companytwo">
				<div class="company-top common-shadow clearfix">
					<div class="fl clearfix">
						<!--<button disabled="true" class="fl" style="width: 100px;height: 100px;background: none;margin-right: 30px;"><img src="" class="fl company-detail-logo" style="width: 100px;"></button>-->
						<button disabled="true" class="fl" style="width: 100px;height: 100px;background: none;margin-right: 30px;">
							<img :src="YLdata.companyInfo.logo" v-if="YLdata.companyInfo.logo" class="fl company-detail-logo" style="width: 100px;">
							<img src="/static/image/company-logo-default.png" v-if="!YLdata.companyInfo.logo" class="el-icon-plus">
						</button>
						<div class="fl company-detail-wrap">
								<p class="company-detail-name">{{YLdata.company.company_name}}</p>
								<p class="company-detail-info" @click="zkqbfh">{{YLdata.companyInfo.introduction}}</p>
								<!-- <a href="#" style="float:right;">查看全部</a>-->
						</div>
						</div>		
						<div class="fr clearfix">
						  <div class="fl ac reward-item">
						    <p> {{YLdata.companyInfo.gra_end}} Ether</p>
						    <p>{{$t('message.vulfirmsHighest')}}</p>
						  </div>
						  <div class="fl ac reward-item">
						    <p>{{YLdata.vulCount}} {{$t('message.Item')}}</p>
						    <p>{{$t('message.vulHasbeenclaimed')}}</p>
						  </div>
					</div>
				</div>
				  <div class="company-bottom clearfix">
				    <div class="fl company-bottom-left common-shadow">
				    	<div class="company-common-title">
				        <div class="fl company-links-wrap" >
				        	<a v-for='(val,index) in comLink'  :href="val.hrefs"  @click="guige(index)" :class="{active_opt:index==guigeSpan}">{{val.name}}</a>
				        </div>
				        <router-link to="/membox/vul" class="fr"><el-button type="primary" class="wrapBtn btnshadow">{{$t('btn.sub_vul')}}</el-button></router-link >
				     </div>
				      <div class="company-bottom-left-main">
				        <div>
				          <!-- 测试范围 -->
				          <a class="company-bottom-left-main-item" name="item-one">
				            <h5>{{$t('message.TestRange')}}</h5>
				            <p><pre>{{YLdata.companyInfo.test_range}}</pre></p>
				          </a>
				
				          <!-- 漏洞评级 -->
				          <a class="company-bottom-left-main-item" name="item-two">
				            <h5>{{$t('message.VulnerabilityRating')}}</h5>
				            <h6>{{$t('message.SeriousVul')}}</h6>
				            <p><pre>{{YLdata.companyInfo.gra_vul_rate}}</pre></p>
				            <h6>{{$t('message.HighVul')}}</h6>
				            <p><pre>{{YLdata.companyInfo.high_vul_rate}}</pre></p>
				            <h6>{{$t('message.MidVul')}}</h6>
				            <p><pre>{{YLdata.companyInfo.mid_vul_rate}}</pre></p>
				            <h6>{{$t('message.LowVul')}}</h6>
				            <p><pre>{{YLdata.companyInfo.low_vul_rate}}</pre></p>
				          </a>
				          <!-- 注意事项 -->
				          <a class="company-bottom-left-main-item" name="item-three">
				            <h5>{{$t('message.Precautions')}}</h5>
				            <p><pre>{{YLdata.companyInfo.remarks}}</pre></p>
				          </a>
				        </div>
				      </div>
				    </div>
				    <div class="fr company-bottom-right common-shadow">
				      <div class="company-common-title">{{$t('message.LoopholeStatistics')}}</div>
				      <div class="reward-plan">
				        <div><span class="com-dot-lv ser-lv"></span>{{$t('message.seriousrisk')}}：{{YLdata.companyInfo.gra_start}} - {{YLdata.companyInfo.gra_end}}  Ether</div> 
				        <div><span class="com-dot-lv high-lv"></span>{{$t('message.highrisk')}}：{{YLdata.companyInfo.high_start}}  - {{YLdata.companyInfo.high_end}}  Ether</div> 
				        <div><span class="com-dot-lv mid-lv"></span>{{$t('message.midrisk')}}：{{YLdata.companyInfo.mid_start}}  - {{YLdata.companyInfo.mid_end}} Ether</div> 
				        <div><span class="com-dot-lv low-lv"></span>{{$t('message.lowrisk')}}：{{YLdata.companyInfo.low_start}}  - {{YLdata.companyInfo.low_end}}  Ether</div> 
				      </div>
				    </div>  
				</div>
			</div>
	   
	</div>
</template>

<script>
	
	
	export default {
		name:'companyTwoCons',
		
		data(){
			return{
					YLdata:[],
					tokenType:0,
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
					guigeSpan: 0
			}
		},
		methods: {
			initData(){
				this.tokenType=window.localStorage.getItem('tokenType')
				this.$ajax.CScomRewardView()
					.then(res => {
						if(res.errcode===1){
							this.YLdata = res.data
						}
					})
			},
			handleClick (tab, event) {
				console.log(tab, event)
			},
			guige(index){  //当点击时候点亮，同级的span标签删除Class
            	this.guigeSpan = index;
	        },
	        zkqbfh(){
	       	
	        }
		},
		created:function(){
			   	this.initData();
		}
	}
</script>>

<style>
	.company-detail-info{
		max-height: 60px;
		overflow:hidden; text-overflow: ellipsis; 
	    display:-webkit-box; -webkit-line-clamp:3; -webkit-box-orient:vertical;
	}
	.companytwo .el-button a{color: #ffffff;;}
	.companytwo .el-tabs__header{
		height: 56px;
	}
	.company-common-title{
		border-bottom: 1px solid #dee3e2;
	}
	.companyld{
		margin-top: 10px;
	}
	.companytwo .el-button{
		padding: 8px 20px !important;
	}
</style>