<template>
	<el-row :gutter="20">
		<el-col :span="24"  class="Risk_wrapaqts" style="padding: 0 !important ;">
			<div class="Risk_wrap">
				<div class="homebanner wow fadeInDown animated hidden-xs animated">
					<div class="cen_1">
						<div class="cen_1_1">
							<wrapRiskhone></wrapRiskhone>
						</div>
						<div class="cen_1_2">
							<wrapRiskhtwo></wrapRiskhtwo>
						</div>	
						<div class="cen_1_3">
							<wrapRiskhthree></wrapRiskhthree>
						</div>	
						<div class="cen_1_4">
							<wrapRiskhfour></wrapRiskhfour>
						</div>
					</div>
				</div>	
				<div style="clear: both;"></div>
				<div class="cons">
					<div class="left_cons">
						<div class="cen_2">
							<div class="cen_2_1" v-if="langshow == 'zh'">
								<wrapRiskstatistics></wrapRiskstatistics>
							</div>
							<div class="cen_2_1" v-if="langshow == 'en'">
								<wrapRiskstatisticsEn></wrapRiskstatisticsEn>
							</div>
							<div class="cen_2_1" v-if="langshow == 'ko'">
								<wrapRiskstatisticsKo></wrapRiskstatisticsKo>
							</div>
							<div class="cen_2_2" v-if="langshow == 'zh'">
								<wrapLdtypestatistics></wrapLdtypestatistics>
							</div>	
							<div class="cen_2_2" v-if="langshow == 'en'">
								<wrapLdtypestatisticsEn></wrapLdtypestatisticsEn>
							</div>
							<div class="cen_2_2" v-if="langshow == 'ko'">
								<wrapLdtypestatisticsKo></wrapLdtypestatisticsKo>
							</div>
						</div>
						<div style="clear: both;"></div>
						<div class="cen_3">
							<div class="cen_3_1" v-if="langshow == 'zh'">
								<wrapRanking></wrapRanking>
							</div>
							<div class="cen_3_1" v-if="langshow == 'en'">
								<wrapRankingEn></wrapRankingEn>
							</div>
							<div class="cen_3_1" v-if="langshow == 'ko'">
								<wrapRankingKo></wrapRankingKo>
							</div>
						</div>
					</div>
					<div class="right_cons">
						<div class="cen_2_3">
							<wrapLdyzstatistics></wrapLdyzstatistics>
						</div>	
						<div class="cen_3_2" v-if="langshow == 'zh'">
							<wrapRepairdt></wrapRepairdt>
						</div>	
						<div class="cen_3_2" v-if="langshow == 'en'">
							<wrapRepairdt></wrapRepairdt>
						</div>
						<div class="cen_3_2" v-if="langshow == 'ko'">
							<wrapRepairdt></wrapRepairdt>
						</div>	
					</div>
				</div>		
			</div>
		</el-col>
	</el-row>
</template>

<script>
	import wrapRanking from '@/components/Risk_manufacturer/wrapRanking'
	import wrapRankingEn from '@/components/Risk_manufacturer/wrapRankingEn'
	import wrapRankingKo from '@/components/Risk_manufacturer/wrapRankingKo'
	import wrapRepairdt from '@/components/Risk_manufacturer/wrapRepairdt'
	import wrapRepairdtEn from '@/components/Risk_manufacturer/wrapRepairdtEn'
	import wrapRepairdtKo from '@/components/Risk_manufacturer/wrapRepairdtKo'
	import wrapRiskstatistics from '@/components/Risk_manufacturer/wrapRiskstatistics'
	import wrapRiskstatisticsEn from '@/components/Risk_manufacturer/wrapRiskstatisticsEn'
	import wrapRiskstatisticsKo from '@/components/Risk_manufacturer/wrapRiskstatisticsKo'
	import wrapLdtypestatistics from '@/components/Risk_manufacturer/wrapLdtypestatistics'
	import wrapLdtypestatisticsEn from '@/components/Risk_manufacturer/wrapLdtypestatisticsEn'
	import wrapLdtypestatisticsKo from '@/components/Risk_manufacturer/wrapLdtypestatisticsKo'
	import wrapLdyzstatistics from '@/components/Risk_manufacturer/wrapLdyzstatistics'
	import wrapRiskhone from '@/components/Risk_manufacturer/wrapRiskhone'
	import wrapRiskhtwo from '@/components/Risk_manufacturer/wrapRiskhtwo'
	import wrapRiskhthree from '@/components/Risk_manufacturer/wrapRiskhthree'
	import wrapRiskhfour from '@/components/Risk_manufacturer/wrapRiskhfour'
	
	 export default {
	 	name: "Risk_manufacturer",
	 	components:{
			wrapRanking,
			wrapRankingEn,
			wrapRankingKo,
			wrapRepairdt,
			wrapRepairdtEn,
			wrapRepairdtKo,
			wrapRiskstatistics,
			wrapRiskstatisticsEn,
			wrapRiskstatisticsKo,
			wrapLdtypestatistics,
			wrapLdtypestatisticsEn,
			wrapLdtypestatisticsKo,
			wrapLdyzstatistics,
			wrapRiskhone,
			wrapRiskhtwo,
			wrapRiskhthree,
			wrapRiskhfour
		},
	 	data () {
		    return {
		    	lang:'zh',
		    	langshow:true
		    }
		},
		mounted(){
	        this.lang=localStorage.getItem('locale')
	        if(this.lang=='zh'){
	        	this.langshow='zh'
	        }else if(this.lang=='en' || this.lang==null || this.lang==''){
	        	this.langshow='en'
	        } else if(this.lang=='ko'){
	        	this.langshow='ko'
	        }
		},
	 }
   
</script>

<style>
	.Risk_wrapaqts .Risk_wrap{
		margin: 60px auto;
		text-align: center;
	}
	.Risk_wrapaqts .Risk_wrap h1{
		margin: 0.6em 0 0 0;
		font-weight: normal;
	}
	.Risk_wrapaqts .homebanner {
		width: 100%;
		background-image: url(/static/image/DH_public/taishibbg.png);
		background-color: #20293b;
		background-repeat: no-repeat;
		background-position: 50% !important;
		text-align: center;
		display: inline-block;
		text-align: center;
	}
	.Risk_wrapaqts .wrapsection_box{		
		background-image: url(/static/image/DH_public/taishimallbg.png);
  		position: relative;	
		padding: 90px 20px 10px 20px;
		box-sizing: border-box;
		background-size: 291px 250px
	}
	.Risk_wrapaqts .section_box{
		width: 100%;
	    padding: 20px 25px 0 25px;
	    box-sizing: border-box;
	    position: absolute;
	    top: 0;
	    left: 0;
	    right: 0;
	}
	.Risk_wrapaqts .cen_1{
		width: 100%;   
		max-width: 1200px;
	    margin-bottom: 20px;
	    background-size: cover;
	    display: inline-block;
	    padding: 68px 0 60px 0;
	    box-sizing: border-box;
	}
	.cen_1_1, .cen_1_2, .cen_1_3 {
	    margin-right: 1%;
	}
	.cen_1_1,.cen_1_2,.cen_1_3,.cen_1_4{
		width: 24.25%;
	    float: left;
	    box-sizing: border-box;
	}
	.Risk_wrapaqts .cons{
		
		min-width: 1024px;
		display: inline-block;
		box-sizing: border-box;
		margin:20px auto;
		text-align: center;
		max-width: 1200px;
	}
	.Risk_wrapaqts .left_cons{
		width: 78.5%;
		float: left;
		margin-right: 1%;
	}
	.Risk_wrapaqts .right_cons{
		width: 20%;
		float: right;
	}
	.Risk_wrapaqts .wrap_title{
		font-size: 16px;
		text-align: left;
	}
	.Risk_wrapaqts .cen_2{
		width: 100%;
		display: inline-block;
		margin-bottom: 20px;
	}
	.cen_2_1,.cen_2_2,.cen_2_3,.cen_3_1,.cen_3_2{
		-webkit-box-shadow: 0 5px 10px 0 rgba(64,158,225,.1);
   		-moz-box-shadow: 0 5px 10px 0 rgba(64,158,225,.1);
   		box-shadow: 0 5px 10px 0 rgba(64,158,225,.1);
	}
	.Risk_wrapaqts .cen_2_1{
		width: 49%;
		float: left;
		background: #ffffff;
		box-sizing: border-box;
	}
	.Risk_wrapaqts .cen_2_2{
		width: 49%;
		float: right;
		margin: 0 0 0 1%;
		background: #ffffff;
		box-sizing: border-box;
	}
	.Risk_wrapaqts .cen_2_3{
		width: 100%;
		background: #ffffff;
		margin: 0 0 20px 0;
	}
	.Risk_wrapaqts .el-table{
		width: auto !important; 
	}
	.Risk_wrapaqts .cen_3{
		width: 100%;
		display: inline-block;
	}
	.Risk_wrapaqts .cen_3_1{
		width: 100%;
		float: left;
		margin-right: 1%;
		background: #ffffff;
	}
	.Risk_wrapaqts .cen_3_2{
		width: 100%;
		background: #ffffff;
		padding-bottom: 30px;
		box-sizing: border-box;
	}
	.Risk_wrapaqts .wrap_box h1{
		float: left;
		font-size: 20px;
		color: #4c5b6a;
		font-family: "微软雅黑";
	}
	
	.Risk_wrapaqts .section_1_box{
		    color: #8e9eae;
		    text-align: left;
		    padding: 10px 0 0 0;
		    font-size: 16px;
	}
	.Risk_wrapaqts .select_1_afonts{
		float: right;
		color: #f06d6d;
		font-size: 14px;
		line-height: 30px;
	}
	.Risk_wrapaqts .afonts{
		display: block;
		text-align: left;
		font-size: 24px;
		color: #ffffff;
		font-weight: 600;
		margin-top: 20px;
	}
	.Risk_wrapaqts .select_rank{
		width: 90px;
		float: right;
	}
</style>