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
				<el-table-column prop="company" label="이름" width="285">
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
				    <p class="illustrate-title">위험한 공급업체에 대한 설명</p>
				    <p class="illustrate-content text-pre-wrap">블록체인 업계의 안전 중시를 한층 더 높이기 위해, 또한 블록체인 생태계의 안전을 강화하기 위해 DVP 커뮤니티는 블록체인에 관한 위험한 공급업체 차트를 공식 출시하고 결함 등급 및 결함 영향을 통해 업계 관련 보안 위험을 제시하고 위험 계수가 높고 복구되지 않는 결함 공급업체에 대해 책임 있게 공개합니다.</p>
				    <p class="illustrate-content text-pre-wrap">DVP 커뮤니티는 접수·검토된 블록체인 업계 및 협력업체의 결함을 계량화하고 결함 상황에 따라 일정 모델 하에 채점 제도를 수립하는 한편, 스토리지 경중별로 그 존재한 위험에 대한 3대 태그 분류 및 세분화 설명이 진행하고 블록체인 관련 기업이나 프로젝트 측의 '건강 상태'를 보다 명확히 알 수 있도록 도와드립니다.</p>
				    <p class="illustrate-content text-pre-wrap">안전한 블록체인 네트워크 생태계 조성을 하기 위해 DVP는 사이버 보안과 정보화 발전을 선도하는 것을 견지하고 있으며, 보안 분야에서의 팀의 기술적 우위에 힘입어 사이버 보안을 강화하여 사이버 공간을 정화하고 사회적 책임을 지도록 노력합니다.</p>
				    <p class="illustrate-content text-pre-wrap" style="margin-bottom: 0;">위험한 공급업체 공개에 대한 설명:</p>
				    <p class="illustrate-content text-pre-wrap" style="margin-bottom: 0;">• 위험성이 높은 결함이 있으며, 연락할 수 없는 결함 공급업체 </p>
				    <p class="illustrate-content text-pre-wrap">• 위험성이 높은 결함이 있으며, 오랜 시간 동안 결함을 복구하지 않은 공급업체</p>
				  </div>
				  <p class="illustrate-title" style="margin-bottom: 18px;">존재한 위험에 대한 설명</p>
				  <table class="illustrate-table">
				    <tbody>
				      <tr>
				        <td class="illustrate-one-td">자산 손실 위험</td>
				        <td class="illustrate-two-td">이 유형의 위험은 자산의 분실, 도난, 강제 거래, 이상 금액 거래로 이어지기 쉽다</td>
				        <td class="illustrate-three-td">-5점</td>
				      </tr>
				      <tr>
				        <td class="illustrate-one-td">도용 왜곡 위험</td>
				        <td class="illustrate-two-td">이 유형의 위험은 계좌 정보, 신원 정보, 연락처, 자산계정의 도용이나 왜곡으로 이어지기 쉽다</td>
				        <td class="illustrate-three-td">-3점</td>
				      </tr>
				      <tr>
				        <td class="illustrate-one-td">프라이버시 노출 위험</td>
				        <td class="illustrate-two-td">이 유형의 위험은 계좌 정보, 신원 정보, 연락처, 자산 정보, 거래 데이터와 같은 민감한 데이터의 유출을 유발하기 쉽다</td>
				        <td class="illustrate-three-td">-2pts</td>
				      </tr>
				    </tbody>
				  </table>
	
				  <div class="illustrate-item">
				    <p class="illustrate-title">처리 상태에 대한 설명: </p>
				    <p class="illustrate-content text-pre-wrap sub-title">• 통보할 수 없음</p>
				    <p class="illustrate-content text-pre-wrap">DVP 커뮤니티는 현재 공개된 채널을 통해 결함 공급업체의 연락처를 조회하지 못해 결함 및 결함에 대한 자세한 내용을 해당 공급업체에 통보할 수 없습니다. 공급업체에서 자신의 결함을 얻으려면: <el-button type="primary" class=" btnshadow wrapBtn" @click="dialogldxqdvp=true">DVP에 연락하십시오</el-button></p>
				    <p class="illustrate-content text-pre-wrap sub-title">• 복구 대기 중</p>
				    <p class="illustrate-content text-pre-wrap">DVP 커뮤니티는 결함 및 결함에 대한 자세한 내용을 해당 공급업체에 통보했으며, 이 공급업체는 오랫동안 결함에 대한 응답과 복구를 하지 않았습니다. 공급업체가 이미 결함을 복구했다면: <el-button type="primary" class=" btnshadow wrapBtn" @click="CScompany">복구를 확인하였습니다</el-button></p>
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
