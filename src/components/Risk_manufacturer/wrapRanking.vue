<template>
	<div class="wrap_box ranking_tablebox">
		<div class="boxpadline">
			<h1>{{$t('message.Top20RiskyVendors')}}</h1>
			<el-select v-model="value2" placeholder="月份" class="select_rank" @change="rankSelect" style="margin: 0 0 0 10px;">
			    <el-option
			      v-for="(item,index) in months"
				  :key="item.id"
			      :label="item.label"
			      :value="item.id">
			    </el-option>
			</el-select>
			 <el-select v-model="value1" placeholder="年份" class="select_rank" @change="rankingsSelectYear">
			    <el-option
			      v-for="(item,index)  in years"
			      :key="item"
			      :label="item+'年'"
			      :value="item">
			    </el-option>
			</el-select>
		</div>
		<div style="clear: both;"></div>
		 <el-table	:data="showdetailList" class="ranking_table"  v-loading="loading">
				<el-table-column prop="" :label="$t('message.tabRanking')" width="80"  type="index"></el-table-column>
				<el-table-column prop="company" :label="$t('message.tabName')" width="330">
					<template slot-scope="scope">
						<span @click="comAscription(scope.row.redirect,scope.row.company)" style="color: #2196f3;" class="cp"> {{ scope.row.company }}</span><p style="display: block;"></p>
			        	<span v-if="!scope.row.fxh_rank ==' '" class="rank-span">非小号前： {{ scope.row.fxh_rank }}</span><span v-if="!scope.row.market ==' '" class="price-span">交易量： {{ scope.row.market }}</span>
					</template>
				</el-table-column>
				<el-table-column prop="total" :label="$t('message.tabLoopholes')" width="100" >
					<template slot-scope="scope">
						<span class="hole_th cp" style="color: #2196f3;" @click="dialogfundBtn(scope.row.company)">{{ scope.row.total }}</span>
					</template>
				</el-table-column>
				<el-table-column prop="r_score" :label="$t('message.tabSecurityRating')" width="170">
					<template slot-scope="scope">
						<rateData :rateData='scope.row.r_score'></rateData>
					</template>
				</el-table-column>
				<el-table-column prop="risk_exit_th" :label="$t('message.tabRisks')" width="130">
					<template slot-scope="scope">
						<p class="risk-tags-td">
						    <b v-for='(val, i) in scope.row.risk'>
						    	<b v-html='risk[i]'></b>
						    </b>
						</p>
					</template>
				</el-table-column>
				<el-table-column prop="risk_number_th"	  :label="$t('message.tabRiskIndex')"	  width="110">
					<template slot-scope="scope">
						<p class="risk_num" v-if="scope.row.r_count == 3"><img src="/static/image/DH_public/jigao.png" alt="" />极高</p>
						<p class="risk_num" v-if="scope.row.r_count != 3"><img src="/static/image/DH_public/jigao.png" alt="" />高</p>
					</template>
				</el-table-column>
	        </el-table>
		 </el-tabs>
		 <div class="click_more">
		 	<el-button type="primary" v-if="this.rankingData.length > 1" @click="click_more" round>{{brandFold?'点击查看更多':''}}</el-button>
		 </div>
		 <el-dialog
			  title=""
			  :visible.sync="dialogldxq"
			  width="1024px">
			  	<vulNum :lddtData="fundXQData"></vulNum>
		</el-dialog>
		 <div class="illustrate" style="padding: 20px;box-sizing: border-box">
		 		<div class="illustrate-item illustrate-item-sp">
				    <p class="illustrate-title">风险厂商说明</p>
				    <p class="illustrate-content text-pre-wrap">为进一步提升区块链行业各方对安全的重视，加强区块链生态安全。  DVP社区正式推出区块链风险厂商排行榜，通过漏洞等级及漏洞影响，提示行业相关安全风险，并对风险系数高且不修复的漏洞厂商进行负责任披露。</p>
				    <p class="illustrate-content text-pre-wrap">DVP社区将对接收、审核过的区块链行业及合作企业存在的漏洞进行量化评估，根据漏洞情况在一定模型下建立评分制度，同时根据情节轻重对其存在的风险进行三大标签分类及细化说明，帮助各方更清晰地了解区块链相关企业或项目方的“健康状况”。</p>
				    <p class="illustrate-content text-pre-wrap">为了营造更安全的区块链网络生态，DVP坚持以网络安全和信息化发展为导向，凭借团队在安全领域的技术优势，努力加强网络安全建设，净化网络空间、承担社会责任。</p>
				    <p class="illustrate-content text-pre-wrap" style="margin-bottom: 0;">风险厂商披露说明：</p>
				    <p class="illustrate-content text-pre-wrap" style="margin-bottom: 0;">• 有高危漏洞，无法取得联系的漏洞厂商 </p>
				    <p class="illustrate-content text-pre-wrap">• 有高危漏洞，长时间未修复漏洞的厂商</p>
				</div>


				<p class="illustrate-title" style="margin-bottom: 18px;">存在风险说明</p>
				<table class="illustrate-table">
				    <tbody>
				      <tr>
				        <td class="illustrate-one-td">资产损失风险</td>
				        <td class="illustrate-two-td">该类风险容易导致资产丢失，被盗，被控强制交易，异常金额交易。</td>
				        <td class="illustrate-three-td">-5分</td>
				      </tr>
				      <tr>
				        <td class="illustrate-one-td">盗用篡改风险</td>
				        <td class="illustrate-two-td">该类风险容易导致帐户信息，身份信息，联系方式，资产帐户被盗用或篡改。</td>
				        <td class="illustrate-three-td">-3分</td>
				      </tr>
				      <tr>
				        <td class="illustrate-one-td">隐私泄露风险</td>
				        <td class="illustrate-two-td">该类风险容易导致帐户信息，身份信息，联系方式，资产信息，交易数据等敏感数据泄露。</td>
				        <td class="illustrate-three-td">-2分</td>
				      </tr>
				    </tbody>
				</table>

				  <div class="illustrate-item">
				    <p class="illustrate-title">处理状态说明</p>
				    <p class="illustrate-content text-pre-wrap sub-title">• 无法通报</p>
				    <p class="illustrate-content text-pre-wrap">DVP社区通过目前公开的渠道查询不到漏洞厂商的联系方式，无法将漏洞及漏洞详情通报给相关厂商。厂商获取自己的漏洞请点击：<el-button type="primary" class=" btnshadow wrapBtn" @click="dialogldxqdvp=true">联系DVP</el-button>
				    </p>
				    <p class="illustrate-content text-pre-wrap sub-title">• 等待修复</p>
				    <p class="illustrate-content text-pre-wrap">DVP社区已将漏洞及漏洞详情通报给相关厂商，而该厂商长时间未对漏洞进行响应和修复。若厂商已修复漏洞，请点击：<el-button type="primary" class=" btnshadow wrapBtn" @click="CScompany">立即修复</el-button>
				    </p>
				  </div>
		 </div>
		  <el-dialog
	            title=""
	            :visible.sync="dialogldxqdvp"
	            width="370px">
	            <div class="dvp-custom-service-fix-shadow">
	                <div id="dvp-custom-service-fix">
	                    <p class="dvp-custom-service-call">{{$t('message.ContactDVP')}}</p>
	                    <p class="dvp-custom-servcie-click">{{$t('message.ClickButtonEContactDVP')}}</p>
	                    <p style="margin: 45px 0;text-align: center;">
	                        <a href="mailto:service@dvpnet.io" class="dvp-custom-srevice-button">service@dvpnet.io</a>
	                    </p>
	                </div>
	            </div>
	       </el-dialog>
		 </div>

</div>
</template>
<script>
	import vulNum from '@/components/vulNum/vulNum'
	import rateData from '@/components/Risk_manufacturer/rateData'
	export default {
		name: "ranking",
		components: {vulNum,rateData},
		data() {
	      return {
	      	loading: false,
	      	dialogldxqdvp:false,
	      	dialogldxq: false,
	        rankingData: [] ,
	        fundXQData:[],
	        brandFold: true,
	        company:'',
	        tokenType: 0,
	        risk: ['<span style="background: #E51C23;border-color: #E51C23;" title="该类风险容易导致资产丢失，被盗，被控强制交易，异常金额交易。"><img src="/static/image/DH_public/zichanxs.png"><p>资产损失风险</p></span>',
		        	'<span  style="background: #F57618;border-color: #F57618;" title="该类风险容易导致帐户信息，身份信息，联系方式，资产帐户被盗用或篡改。"><img src="/static/image/DH_public/daoyongcg.png"><p>盗用篡改风险</p></span>',
					'<span style="background: #F7C708;border-color: #F7C708;" title="该类风险容易导致帐户信息，身份信息，联系方式，资产信息，交易数据等敏感数据泄露。"><img src="/static/image/DH_public/yinsi.png"><p>隐私泄露风险</p></span>'
	        ],
	        dateObj:{},
		    years:[],
		    months:[],
		    lang:'zh',
		   	value2: '00',
	        value1:'2019',
	        select_rankval: '',
	        langshow:true
		    }
 	  	},
 	  	computed: {
 	  		//查看更多获取数据
			 	showdetailList: {
			        get: function () {
			           if (this.brandFold) {
			             if (this.rankingData.length < 10) {
			                return this.rankingData
			             }
			             let newArr = []
			             for (var i = 0; i < 10; i++) {
			                 let item = this.rankingData[i]
			                 newArr.push(item)
			              }
			              return newArr
			           }
			           return this.rankingData
			        },
			        set: function (val) {
			            this.showdetailList = val
			        }
			    }
		},
 	  	methods:{
		  	initData(){
		  		this.lang=localStorage.getItem('locale')
		  		this.tokenType=window.localStorage.getItem('tokenType')
				var _this=this
				this.$ajax.ComYearmonth()
				.then(res=>{
					if(res.errcode === 1){
						const resYear=res.data.year;
						const defaultYear = Object.keys(resYear)[0];
						this.dateObj=res.data;
						for(let key in resYear){
							this.years.push(key)
						}
                        this.months = resYear[Object.keys(resYear)[1]].map(item=>item);
					}
			})
		    	this.$ajax.ComCompanyRisk({year:'2019',month: '00'})
		    	.then(res =>{
		    		if(res.errcode === 1){
		    			_this.rankingData = res.data.risk
		    		}
		    	})
			},
			rankingsSelectYear(year){
				this.value2="00"
				var  year = parseFloat(year);
				this.months = this.dateObj.year[year].map(item=>item);
				this.loading =true
				setTimeout(() => {
		          this.loading = false;
		        }, 5000);
				var _this=this
		    	this.$ajax.ComCompanyRisk({year:this.value1,month:"00"})
		    	.then(res =>{
		    		if(res.errcode === 1){
		    			_this.rankingData = res.data.risk
		    		}
		    	})
			},
			rankSelect(){
				this.loading =true
				setTimeout(() => {
		          this.loading = false;
		        }, 5000);
				var _this=this
		    	this.$ajax.ComCompanyRisk({year:this.value1,month:this.value2})
		    	.then(res =>{
		    		if(res.errcode === 1){
		    			_this.rankingData = res.data.risk
		    		}
		    	})
			},
			//入驻、未入驻厂商
			comAscription(rouTure,company){
				this.company = company
				if(rouTure == 0){
					this.$router.push({ path:"/companyTwoNo",query:{company:this.company}})
				}else if(rouTure == 1){
					this.$router.push({ path:"/companyTwo",query:{company:this.company}})
				}

			},
            CScompany(){
                this.$router.push({path:'/combox/company/companyOne'})
                window.sessionStorage.setItem('userCSrole',2)
            },
			dialogfundBtn(companyName){
				this.fundXQData=''
		  		var valListData={
		  			"companyName": companyName,
		  			"year": this.value1,
		  			'month': this.value2,
		  			'is_fix': 'all',
		  			'level':'all'
		  		}
		  		this.dialogldxq = true
		  		var _this=this
		  		this.$ajax.ComCompanyVulTotalList(valListData)
			    .then(res => {
					if(res.errcode === 1){
						_this.fundXQData = res.data.companyVulTotalList
					}
				})
		    },
			click_more(){
				 this.brandFold = !this.brandFold
				$(".illustrate").show()
				$(".click_more").hide()
			}
		},
		created:function(){
		   	this.initData();
		}
	}
</script>

<style>
	.wrap_box .el-tabs__header{
		float: right;
	}
	.wrap_box .el-tabs__content{
		clear: both;
	}
	.el-table_1_column_2 {
		text-align:left !important;
	}
	.ranking_table{
		font-size: 12px !important;
		margin-top: 20px;
		padding: 0 20px;
		box-sizing: border-box;
	}
	.ranking_table thead tr th{
		border-bottom: none !important;
		background: #f5f9fc;
	}
	.ranking_table tbody tr:hover td{
		background: #f5f9fc !important;
	}
	.ranking_table  th>.cell{
		font-size: 14px;
		color: #4c5b6a;
	}
	.ranking_table th:nth-of-type(2)>.cell{text-align:left !important;}
	.ranking_table .cell{
		white-space: nowrap;
	}
	.ranking_table tbody tr td:nth-child(1){
		font-size: 16px;
		color: #4c5b6a ;
	}
	.ranking_table tbody tr:nth-of-type(1) td:nth-of-type(1) {
		font-size: 20px;
		color: #f57618;
	}
	.ranking_table tbody tr:nth-of-type(2) td:nth-of-type(1) {
		font-size: 20px;
		color: #f8cf3b;
	}
	.ranking_table tbody tr:nth-of-type(3) td:nth-of-type(1) {
		font-size: 20px;
		color: #E5ec23;
	}
	.ranking_table tbody tr td:nth-child(2){
		text-align: left !important;
		font-size: 14px;
	}
	.rank-span{
		background: #1284DF;
		color: #ffffff !important;
		border:1px solid #1284DF;
		padding: 2px 8px;
		box-sizing: border-box;
	}
	.price-span {
    	background-color: #ffffff;
    	color: #1284DF !important;
		border:1px solid #1284DF;
		padding: 2px 8px;
		box-sizing: border-box;
	}
	.risk_num{
		padding: 0 15px;
		display: inline-block;
		color: #E51C23;
		font-size: 12px;
		line-height: 18px;
	}
	.risk_num img{
		margin-right: 5px;
	}
	.name-td{
		white-space: nowrap;
	}
	.name-td span {
	    font-size: 12px !important;
	    padding: 2px 8px;
	    margin-bottom: 2px;
		box-sizing:border-box;
		display: inline-block;
	}
	.risk-tags-td{
		width: 130px;
		display: block;
	}
	.risk-tags-td b{
		display: block;
	}
	.risk-tags-td span {
	    display: inline-block;
	    font-size: 12px;
	    padding-right: 8px;
	    padding: 4px 8px 4px 0;
	    color: #fff;
	    line-height: 12px;
	    margin-right: 10px;
	    margin-top: 7px;
	    background: #E67E22;
	    border-radius: 15px;
	    border: 1px solid #D26A0F;
	    white-space: nowrap;
	}
	.risk-tags-td img{
		margin: 0 6px;
		float: left;
	}
	.risk-tags-td p{
		float: right;
	}
	.risk-tags-td span:nth-of-type(1){

	}
	.underline-td a {
	    text-decoration: underline;
	  }

	  .status-td img {
	    margin-top: -3px;
	    margin-right: 3px;
	  }

	.illustrate{
		display: none;
	}
	  .illustrate-item {
	  	margin: 25px 0;
	  }

	  .illustrate-title {
	    font-size: 16px;
	    line-height: 16px;
	    font-weight: 600;
	    margin-bottom: 13px;
	    text-align: left;
	  }

	  .illustrate-content {
	    font-size: 14px;
	    color: #4a4c52;
	    line-height: 28px;
	  }

		.illustrate-content a{
			margin-left:0 !important;
		}

	  .illustrate-item .sub-title {
	    font-weight: 600;
	  }

	  .illustrate-item .sub-title+p {
	    padding-left: 10px;
	  }

	  .illustrate-content a {
	    color: #fff;
	    font-size: 14px;
	    margin-left: 37px;
	  }

	  .illustrate-table {
	    width: 850px!important;
	    color: #4a4c52;
	    font-size: 14px!important;
	    margin-left: 0!important;
	    margin-bottom: 25px!important;
	  }

	  .illustrate-item-sp .illustrate-content {
	    margin-bottom: 10px;
	  }

	  .illustrate-table tr {
	    line-height: 32px;
	    border: 1px solid #DBE2E5!important;
	  }

	  .illustrate-table td {
	    padding: 8px 10px;
	  }

	  .illustrate-one-td {
	    width: 16%;
	    font-weight: 600;
	    line-height: 24px!important;
	    border: 1px solid #DBE2E5!important;
	  }

	  .illustrate-two-td {
	    width: 70%;
	    line-height: 24px!important;
	    border: 1px solid #DBE2E5!important;
	  }

	  .illustrate-three-td {
	    width: 14%;
	  }

</style>
