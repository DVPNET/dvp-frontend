<template>
	<el-container>
			<el-header class='hole-top'>
				<p>{{$t('message.WithdrawalVul')}}</p>
				<el-button type="primary" class="fr btnshadow wrapBtn" v-show="EandD" @click="txjl1">{{$t('message.WithdrawalsRecord')}}</el-button>
				<el-button type="primary" class="fr btnshadow wrapBtn" v-show="!EandD" @click="txjl2">{{$t('message.WithdrawalsRecord')}}</el-button>
			</el-dropdown>
			</el-header>
			<el-tabs v-model="activeName"   @tab-click="handleClick" class="withdrawTable tabbg">
			    <el-tab-pane :label="$t('message.ETHWithdraw')" name="first">
			    	<el-table  ref="multipleTable" :data="ldsqData"  style="width: 100%;margin-bottom: 50px;" tooltip-effect="dark" @selection-change="handleSelectionChange_Ether" v-loading="loading">
			    		<el-table-column type="selection" width="auto"></el-table-column>
		                <el-table-column class="vul_numbers_th" prop="vulSign"  :label="$t('message.vulSerialNumber')"  width="140px"></el-table-column>
		                <el-table-column prop="title"  :label="$t('message.vulTitle')"  width="200">
							<template slot-scope="scope">
									<div class="fl">
										<p class="font-lim1">{{scope.row.title}}</p>
										<span v-if="scope.row.state ==0">
						        			<span v-if="scope.row.level == 3" class="comVulLv ser_lv">{{$t('message.seriousrisk')}}</span>
											<span v-if="scope.row.level == 2" class="comVulLv high_lv">{{$t('message.highrisk')}}</span>
											<span v-if="scope.row.level == 1" class="comVulLv mid_lv">{{$t('message.midrisk')}}</span>
											<span v-if="scope.row.level == 0" class="comVulLv low_lv">{{$t('message.lowrisk')}}</span>
						        		</span>
										<span v-if="scope.row.state !=0">
						        			<span v-if="scope.row.dvp_level == 3" class="comVulLv ser_lv">{{$t('message.seriousrisk')}}</span>
											<span v-if="scope.row.dvp_level == 2" class="comVulLv high_lv">{{$t('message.highrisk')}}</span>
											<span v-if="scope.row.dvp_level == 1" class="comVulLv mid_lv">{{$t('message.midrisk')}}</span>
											<span v-if="scope.row.dvp_level == 0" class="comVulLv low_lv">{{$t('message.lowrisk')}}</span>
						        		</span>
									</div>
									<div style="clear: both"></div>
									<p class="Vultime">{{scope.row.write_time}}</p>
							</template>
						</el-table-column>
		                <el-table-column class="hole_vendor_th" prop="company"  :label="$t('message.vulvendor')" width="110"></el-table-column>
		                <el-table-column class="hole_reward_th" prop="reward"  :label="$t('message.vulreward')"  width="110">
		                	<template slot-scope="scope">
					        	<p v-if="scope.row.state == 0"> -</p>
					        	<p v-if="scope.row.state == 1"> {{scope.row.price}}&nbsp;Ether</p>
					        	<p v-if="scope.row.state == 2"> -</p>
					        	<p v-if="scope.row.state == 3"> -</p>
							</template>
		                </el-table-column>
		                <el-table-column class="hole_status_th"  prop="state" :label="$t('message.vulStatus')"    width="160px">
		                	<template slot-scope="scope">
					        	<p v-if="scope.row.state == 0 && scope.row.reedit ==0"> {{$t('message.BeingAudit')}}</p>
					        	<p v-if="scope.row.state == 0 && scope.row.reedit ==1"><i class="icon iconfont icon-daishenhe2 p8 ser"></i>{{$t('message.SupplementInformationVerified')}}</p>
					        	<p v-if="scope.row.state == 1"><i class="icon iconfont icon-fuxuankuang_xuanzhong p8 low"></i> {{$t('message.approved')}}</p>
					        	<p v-if="scope.row.state == 2"> {{$t('message.VerificationFailedAdditionalInformationRequired')}}</p>
					        	<p v-if="scope.row.state == 3"><i class="icon iconfont icon-shanchu p8 ser"></i> {{$t('message.not_approved')}}</p>
							</template>
		                </el-table-column>
		            </el-table>
		            <div class="block pages fl" v-if="total !=0">
		   				<el-pagination
		   				   @size-change="handleSizeChange"
			   				   @current-change="handleCurrentChange"
			   				    :current-page.sync="currentPage"
			   				    :page-size="pagesize"
								layout="total,prev, pager, next"
								:total="total">
							</el-pagination>
					</div>
		            <div class="withdraw-bottom clearfix">
		            	  <el-button class="fr btnshadow wrapBtn"  @click="DialogEtherbtn(ldsqData)" style="margin: 0px 30px 50px 0">{{$t('message.Apply_for_withdrawal')}}</el-button>
					      <p class="fr withdraw-bottomcons"><span class="hole-num">{{EtherVultotal}}</span>{{$t('message.Vulnerability')}}</i>,{{$t('message.Total')}}<span class="ether-num">{{sumMoney}}</span>Ether</p>
					</div>
			    </el-tab-pane>
			    <el-tab-pane :label="$t('message.DVPWithdraw')" name="second">
			    	<el-table  ref="multipleTable" :data="ldsqDVPData" class="tabbg"  style="width: 100%;margin-bottom: 50px;" tooltip-effect="dark" @selection-change="handleSelectionChange_DVP" v-loading="loading">
			    		<el-table-column type="selection" width="auto"></el-table-column>
		                <el-table-column class="vul_numbers_th" prop="vulSign"  :label="$t('message.vulSerialNumber')"  width="140px"></el-table-column>
		                <el-table-column prop="title"  :label="$t('message.vulTitle')"  width="200">
							<template slot-scope="scope">
									<div class="fl">
										<p class="font-lim1">{{scope.row.title}}</p>
										<span v-if="scope.row.level == 3" class="comVulLv ser_lv">{{$t('message.seriousrisk')}}</span>
										<span v-if="scope.row.level == 2" class="comVulLv high_lv">{{$t('message.highrisk')}}</span>
										<span v-if="scope.row.level == 1" class="comVulLv mid_lv">{{$t('message.midrisk')}}</span>
										<span v-if="scope.row.level == 0" class="comVulLv low_lv">{{$t('message.lowrisk')}}</span>
									</div>
									<div style="clear: both"></div>
									<p class="Vultime">{{scope.row.write_time}}</p>
							</template>
						</el-table-column>
		                <el-table-column class="hole_vendor_th" prop="company"  :label="$t('message.vulvendor')"></el-table-column>
		                <el-table-column class="hole_reward_th" prop="reward"  :label="$t('message.vulreward')"  width="auto">
		                	<template slot-scope="scope">
					        	<p v-if="scope.row.state == 0"> -</p>
					        	<p v-if="scope.row.state == 1"> {{scope.row.dvp}}&nbsp;DVP</p>
					        	<p v-if="scope.row.state == 2"> -</p>
					        	<p v-if="scope.row.state == 3"> -</p>
							</template>
		                </el-table-column>
		                <el-table-column class="hole_status_th"  prop="state" :label="$t('message.vulStatus')">
		                	<template slot-scope="scope">
					        	<p v-if="scope.row.state == 0"> {{$t('message.BeingAudit')}}</p>
					        	<p v-if="scope.row.state == 1"> {{$t('message.AuditPassed')}}</p>
					        	<p v-if="scope.row.state == 2"> {{$t('message.AuditNotPassed')}}</p>
					        	<p v-if="scope.row.state == 3"> {{$t('message.VerificationRefuse')}}</p>
							</template>
		                </el-table-column>
		            </el-table>
		            <div class="block pages fl" v-if="total !=0">
		   				<el-pagination
		   				   @size-change="handleSizeChange"
			   				   @current-change="handleCurrentChange"
			   				    :current-page.sync="currentPage"
			   				    :page-size="pagesize"
								layout="total,prev, pager, next"
								:total="total">
							</el-pagination>
					</div>
		            <div class="withdraw-bottom clearfix">
		            		<el-button class="fr btnshadow wrapBtn"  @click="DialogDVPbtn(ldsqDVPData)" style="margin: 0px 30px 50px 0">{{$t('message.Apply_for_withdrawal')}}</el-button>
					     	<p class="fr  withdraw-bottomcons"><span class="hole-num">{{DVPVultotal}}</span>{{$t('message.Vulnerability')}}</i>,{{$t('message.Total')}}<span class="ether-num">{{sumDVPMoney}}</span>DVP</p>
		            </div>
			    </el-tab-pane>
			</el-tabs>
			<el-dialog
				  :title="$t('message.point')"
				  :visible.sync="Dialogchecked"
				  width="30%"
				  center>
				  <span>{{$t('message.Please_select_Vulnerability')}}</span>
				  <span slot="footer" class="dialog-footer">
				    <el-button type="primary" class="btnshadow wrapBtn"  @click="Dialogchecked = false">{{$t('message.sure')}}</el-button>
				  </span>
			</el-dialog>
			<el-dialog
				  :title="$t('message.point')"
				  :visible.sync="Dialogwithdraw"
				  width="30%"
				  center>
				  <span>{{$t('message.submitSuccess')}}</span>
				  <span>{{$t('message.Application_has_been_submitted_waiting_for_payment')}}</span>
				  <span slot="footer" class="dialog-footer">
				    	<el-button type="primary"class="btnshadow wrapBtn"  @click="Dialogwithdraw = false">{{$t('message.sure')}}</el-button>
				  </span>
			</el-dialog>
	</el-container>
</template>

<script>
	//import data from "../../../static/json/ldsq.json"
	export default {
		name: 'withdraw',
		 data() {
	        return {
	          loading: false,
	        	activeName: 'first',
	        	checked: true,
	        	Dialogchecked: false,
	        	Dialogwithdraw: false,
		        ldsqData: [],
		        ldsqDVPData:[],
		        EtherVultotal: 0,
		        DVPVultotal:0,
		        multipleSelection:[],
		        multipleSelection2:[],
		        EtherData_id: '',
		        Ether_id:'',
		        DVPData_id:'',
		        sumMoney: 0,
		        sumDVPMoney: 0,
		        EandD: true,
		        msgErr: '',
		        total:0,//默认数据总数
               pagesize: 0,//每页的数据条数
               currentPage:1,//默认开始页面
               index:0
	        }
      },
       methods: {
	       	initData(){
                this.loading = true
                setTimeout(() => {
                    this.loading = false;
                }, 500);
				var _this = this;
				this.$ajax.BMZvulpassList({"type": 0})
				.then(res => {
					if(res.errcode===1){
						_this.ldsqData = res.data.vul.data;
						_this.total = res.data.vul.total
						_this.pagesize = res.data.vul.per_page
					}

				})
			},
		    handleSelectionChange_Ether(val) {
		        this.multipleSelection = val;
		        this.sumMoney = this.multipleSelection.map(row=>row.price).reduce(
						(acc, cur) => (parseFloat(cur) + acc), 0).toFixed(2)
				this.EtherVultotal = this.multipleSelection.length
				this.EtherData_id = this.multipleSelection.map(row=>{
				    	return row.id
			   })
		    },
		    handleSelectionChange_DVP(val) {
		        this.multipleSelection2 = val;
				this.sumDVPMoney = this.multipleSelection2.map(row=>row.dvp).reduce(
						(acc, cur) => (parseFloat(cur) + acc), 0).toFixed(2)
				this.DVPVultotal = this.multipleSelection2.length
				this.DVPData_id = this.multipleSelection2.map(row=>{
				    	return row.id
			    })
		    },
		    handleClick(tab, event) {
                this.loading = true
                setTimeout(() => {
                    this.loading = false;
                }, 500);
		    	this.total=0
		    	this.ldsqData=[]
		    	this.ldsqDVPData=[]
		    	var _this=this
		    	this.index=tab.index
    		 	this.$ajax.BMZvulpassList({"type": this.index})
				.then(res => {
					_this.ldsqData = res.data.vul.data
					_this.ldsqDVPData = res.data.vul.data
					_this.total = res.data.vul.total
					_this.pagesize = res.data.vul.per_page
				}) 
		    	if(tab.name =='first' ){
		    		this.EandD = true
		    	}else{
		    		this.EandD = false
		    	}
		    },
		    handleCurrentChange(currentPage){
			  this.currentPage == currentPage
			  var _this = this;
			  this.$ajax.BMZvulpassList({"type": this.index,"page": this.currentPage })
			  .then(res => {
					if(res.errcode === 1){
						_this.lddtData= res.data.vul.data
						_this.ldsqDVPData= res.data.vul.data
					}
				})
		  	},
			 //Ether提现
			 DialogEtherbtn(rows){
			 	let _this=this
			 		let EtherData= {
			 			'type': 0,
			 			'ids': this.EtherData_id
			 		}
			 		this.$ajax.BMZvulQwithdraw(EtherData,{"type": 0})
					.then(res => {
						if(res.errcode === 1){
							this.Dialogwithdraw = true
							rows.splice(this.multipleSelection,1);
						}else if(res.errcode===0){
			         		this.$message.error(res.errmsg);
						}else{
							this.Dialogchecked = true
						}
					})
			 },
			  //DVP提现
			 DialogDVPbtn(rows){
			 		let _this=this
					let DVPData={
						'type': 1,
						 'ids': this.DVPData_id
					}
			 		this.$ajax.BMZvulQwithdraw(DVPData,{"type": 1})
					.then(res => {
						if(res.errcode === 1){
							 this.Dialogwithdraw = true
							 rows.splice(this.multipleSelection2,1);
						}else if(res.errcode===0){
							this.$message.error(res.errmsg);
						}else{
							this.Dialogchecked = true
						}
					})
			 },
			handleSizeChange(pagesize){
		  		this.pagesize = pagesize;
		  },
			 txjl1(){
			 	this.$router.push({ path:"/membox/member/withdraw_history?state=1&type=0" })
			 },
			 txjl2(){
			 	this.$router.push({ path:"/membox/member/withdraw_history?state=1&type=1" })
			 }
	    },
	    computed: {

		},
	    created:function(){
		   	this.initData();
		}
	}
</script>

<style>
	.withdrawTable tr th,.withdrawTable tr td{
		text-align: left !important;
	}
	
	.withdraw-bottom {
		color: #4c5b6a;
		font-size: 14px;
		line-height: 14px;
		padding-top: 20px;
	}
	
	.withdraw-bottom p {
		line-height: 42px !important;
		margin-right: 21px !important;
	}
	
	.withdraw-bottom .withdraw-bottomcons span {
		color: #2196f3;
		font-weight: bold;
		margin: 0 5px;
	}
	
	.withdraw-bottom i {
		margin-left: 9px;
	}
	
	.withdraw-bottom a {
		height: 42px;
		color: #fff;
		line-height: 42px;
		text-align: center;
		-moz-border-radius: 2px;
		     border-radius: 2px;
		background-color: #2196f3;
	}
</style>
