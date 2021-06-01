<template>
	<div class="wrap_box ranking_tablebox">
		<div class="boxpadline">
			<h1>{{$t('message.Top20RiskyVendors')}}</h1>
			<el-select v-model="value2" placeholder="Month" class="select_rank" @change="rankSelect" style="margin: 0 0 0 10px;">
			    <el-option
			      v-for="(item,index) in months"
				  :key="item.id"
			      :label="item.labelEn"
			      :value="item.id">
			    </el-option>
			</el-select>
			 <el-select v-model="value1" placeholder="Year" class="select_rank" @change="rankingsSelectYear">
			    <el-option
			      v-for="(item,index)  in years"
			      :key="item"
			      :label="item"
			      :value="item">
			    </el-option>
			</el-select>
		</div>
		<div style="clear: both;"></div>
		 <el-table	:data="showdetailList" class="ranking_table"  v-loading="loading">
				<el-table-column prop="" :label="$t('message.tabRanking')" width="90"  type="index"></el-table-column>
				<el-table-column prop="company" label="Name" width="285">
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
				<el-table-column prop="r_score" :label="$t('message.tabSecurityRating')" width="155">
					<template slot-scope="scope">
						<rateData :rateData='scope.row.r_score'></rateData>
					</template>
				</el-table-column>
				<el-table-column prop="risk_exit_th" :label="$t('message.tabRisks')" width="145">
					<template slot-scope="scope">
						<p class="risk-tags-td" style="width: 125px !important;text-align: left;">
						    <b v-for='(val, i) in scope.row.risk'>
						    	<b v-html='risk[i]'></b>
						    </b>
						</p>
					</template>
				</el-table-column>
				<el-table-column prop="risk_number_th"	  :label="$t('message.tabRiskIndex')"	  width="150">
					<template slot-scope="scope">
						<p class="risk_num" v-if="scope.row.r_count == 3"><img src="/static/image/DH_public/jigao.png" alt="" />Dangerous</p>
						<p class="risk_num" v-if="scope.row.r_count != 3"><img src="/static/image/DH_public/jigao.png" alt="" />High</p>
					</template>
				</el-table-column>
	        </el-table>
		 </el-tabs>
		 <div class="click_more">
		 	<el-button type="primary" v-if="this.rankingData.length > 1" @click="click_more" round>{{brandFold?'More':''}}</el-button>
		 </div>
		 <el-dialog
			  title=""
			  :visible.sync="dialogldxq"
			  width="1024px">
			  	<vulNum :lddtData="fundXQData"></vulNum>
		</el-dialog>
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
		 <div class="illustrate" style="padding: 20px;box-sizing: border-box">
				<div class="illustrate-item illustrate-item-sp">
				    <p class="illustrate-title">Description of Risky Vendors</p>
				    <p class="illustrate-content text-pre-wrap">To improve the security of the whole blockchain ecosystem, DVP publishes the ranking of vendors ranked by the severity and impact of the loopholes identified in each vendor, which raises red flag against risky vendors. At the same time, for high-risk vendors with lots of confirmed unfixed bugs, DVP could choose to disclose bugs to protect users from risky vendors.</p>
				    <p class="illustrate-content text-pre-wrap">DVP would analyze the loopholes identified in each vendor to build up a rating model including three major categories of risky problems and corresponding detailed descriptions, which helps to clearly evaluate the "health" of blockchain firms or projects.</p>
				    <p class="illustrate-content text-pre-wrap">To build a more secure blockchain ecosystem, DVP persists in network security improvement and informational development. With the leading technology in security and social responsibility, DVP keeps strengthening network security infrastructure, and purifying network traffic.</p>
				    <p class="illustrate-content text-pre-wrap" style="margin-bottom: 0;">Risky Vendors Disclosure:</p>
				    <p class="illustrate-content text-pre-wrap" style="margin-bottom: 0;">• Vendors with high-severity loopholes but cannot be reached </p>
				    <p class="illustrate-content text-pre-wrap">• Vendors with high-severity loopholes but cannot fix bugs for a long time</p>
				  </div>
				  <p class="illustrate-title" style="margin-bottom: 18px;">Risks</p>
				  <table class="illustrate-table">
				    <tbody>
				      <tr>
				        <td class="illustrate-one-td">Property Loss</td>
				        <td class="illustrate-two-td">Risks leading to property loss, property theft, unauthorized trading, abnormal trading</td>
				        <td class="illustrate-three-td">-5pts</td>
				      </tr>
				      <tr>
				        <td class="illustrate-one-td">Credential Theft</td>
				        <td class="illustrate-two-td">Risks leading to theft or tampering of accounts, IDs, or contacts</td>
				        <td class="illustrate-three-td">-3pts</td>
				      </tr>
				      <tr>
				        <td class="illustrate-one-td">Privacy Leakage</td>
				        <td class="illustrate-two-td">Risks leading to leakage of accounts, IDs, contacts, balances, or trading logs</td>
				        <td class="illustrate-three-td">-2pts</td>
				      </tr>
				    </tbody>
				  </table>
	
				  <div class="illustrate-item">
				    <p class="illustrate-title">States of Disclosure: </p>
				    <p class="illustrate-content text-pre-wrap sub-title">• Unable to Contact</p>
				    <p class="illustrate-content text-pre-wrap">DVP can not contact the vendor to deliver the details of loopholes based on the public contact information. If the vendor wants to retrieve the details of loopholes by itself, please click: <el-button type="primary" class=" btnshadow wrapBtn" @click="dialogldxqdvp=true">Contact DVP</el-button></p>
				    <p class="illustrate-content text-pre-wrap sub-title">• Wait for Bugfix</p>
				    <p class="illustrate-content text-pre-wrap">DVP has delivered the details of loopholes to the corresponding vendor for a long time.  However, the vendor is not responding and the loopholes are not patched yet.  If the vendor has fixed the loopholes, please click: <el-button type="primary" class=" btnshadow wrapBtn" @click="CScompany">Bugfix Confirmed</el-button></p>
				  </div>
			</div>
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
	        risk: ['<span style="background: #E51C23;border-color: #E51C23;width:100%;" title="Risks leading to property loss, property theft, unauthorized trading, abnormal trading"><img src="/static/image/DH_public/zichanxs.png"><p style="float:left !important;">Property Loss</p></span>',
		        	'<span  style="background: #F57618;border-color: #F57618;width:100%;" title="Risks leading to theft or tampering of accounts, IDs, or contacts"><img src="/static/image/DH_public/daoyongcg.png"><p style="float:left !important;">Credential Theft</p></span>',
					'<span style="background: #F7C708;border-color: #F7C708;width:100%;" title="Risks leading to leakage of accounts, IDs, contacts, balances, or trading logs"><img src="/static/image/DH_public/yinsi.png"><p style="float:left !important;">Privacy Leakage</p></span>'
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
