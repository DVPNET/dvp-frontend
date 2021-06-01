<template>
		<div>
			<div>
			    <!-- 担保金管理 -->
			   <div class="company-personal-wrap cpmpany-shadow">
			      <div class="safeguards-manage">
			        <div class="safeguards-top clearfix">
			          <div class="fl">
			            <p class="safeguards-name">{{$t('message.SecurityDepositBalance')}}</p>
			            <p class="safeguards-ether"><span style="font-size: 24px;font-weight: bold;color: #2196f3;">{{$store.state.CSuser.user.balance}} </span><span style="font-size: 12px;">Ether</span></p>
			          </div>
			          <div class="fr">
			          	<el-button type="primary" class="btnshadow wrapBtnw"  style="border: 0;" @click="dialogVisibleTX = true">{{$t('message.Withdraw')}}</el-button>
			          	<el-button type="primary" class="btnshadow wrapBtn"   @click="dialogVisibleCZ = true">{{$t('message.Recharge')}}</el-button>
			          </div>
			        </div>

			        <div class="safeguards-bottom">
			        	<div style="background: #f5f9fc !important;display: inline-block;width: 100%;">
			        		<div class="safeguards-name fl" style="line-height: 40px; padding: 0 0 0 20px;">{{$t('message.Detail')}}</div>
					        <el-select @change="vullist_select" v-model="value" placeholder="所有" class="fr" style="width: 150px;z-index: 999;">
								<el-option
									v-for="item in options"
									:key="item.id"
									:label="item.label"
									:value="item.id">
								</el-option>
							</el-select>
			        	</div>		      
				        <el-table  :data="TradeData"  style="width: 100%;margin-bottom: 30px;" class="tabbg"  v-loading="loading">
                            <el-table-column prop="created_at"  :label="$t('message.Time')"  width="auto"></el-table-column>
                            <el-table-column prop=""  :label="$t('message.Transaction')"  width="auto">
                            	<template slot-scope="scope">
                            		<p v-if="scope.row.type===0">{{$t('message.Recharge')}}</p>
                            		<p v-if="scope.row.type===1">{{$t('message.Withdraw')}}</p>
                            		<p v-if="scope.row.type===2">{{$t('message.vulreward')}}</p>
                            		<p v-if="scope.row.type===3">{{$t('message.Miner')}}</p>
					        	</template>
                            </el-table-column>
                            <el-table-column prop="price"  :label="$t('message.Detail')"  width="auto">
                            	<template slot-scope="scope">
		                			<p  v-if="scope.row.type == 0">+{{scope.row.price}}&nbsp;Ether</p>
		                			<p  v-if="scope.row.type != 0">-{{scope.row.price}}&nbsp;Ether</p>
	                			</template>
                            </el-table-column>
                            <el-table-column prop="history_operate"  :label="$t('message.operatation')"  width="auto">
                            	<template slot-scope="scope">
                            		<p class="cp"><img src="/static/image/common/editlook.png" alt="" @click="dialogTradeBtn(scope.$index,scope.row.id)" /></p>
					        	</template>
                            </el-table-column>
                       </el-table>

			        </div>
			        <div class="fr" v-if="total!=0">
					      	<el-pagination
			   				       @size-change="handleSizeChange"
				   				   @current-change="handleCurrentChange"
				   				    :current-page.sync="currentPage"
				   				    :page-size="pagesize"
									layout="total,prev, pager, next"
									:total="total">
							</el-pagination>
						</div>
			      </div>
			    </div>
			</div>

			<el-dialog
			  title="详细"
			  :visible.sync="dialogTrade"
			  width="1170px">
			  	<div class="hole-table">
				    <div class="withdraw-item clearfix">
				          <span class="fl">{{$t('message.Total')}}:</span>
				          <div class="fl">{{dialogTradeData.price}} Ether</div>
				    </div>
				    <div class="withdraw-item clearfix">
				        <span class="fl">{{$t('message.TransactionNumber')}}:</span>
				        <div class="fl success-status">
				        	<a v-if="dialogTradeData.type==2 || dialogTradeData.type==3" :href="'https://etherscan.io/address/'+dialogTradeData.order" target="_blank">
				        		<span v-if="dialogTradeData.order!=''">{{dialogTradeData.order}} </span>
				        		<span v-if="dialogTradeData.order==''">-</span>
				        		<span v-if="!dialogTradeData.orde">-</span>
				        	</a>
				        	<a v-if="dialogTradeData.type==0" :href="'https://etherscan.io/address/'+dialogTradeData.order">
				        		{{dialogTradeData.order}}
				        	</a>
				        </div>
				    </div>
				    <div class="withdraw-item clearfix">
				          <span class="fl">{{$t('message.ApplicationTime')}}:</span>
				          <div class="fl">	{{dialogTradeData.created_at}} </div>
				    </div>
				    <div class="withdraw-item clearfix">
				          <span class="fl">{{$t('message.Status')}}:</span>
				          <div class="fl success-status" v-if="dialogTradeData.type === 0">	{{$t('message.success')}}</div>
				    </div>
				    <div class="withdraw-item clearfix" v-if="dialogTradeData.type === 2">
				          <span class="fl">{{$t('message.vulreward')}}:</span>
				          <el-table  :data="dialogTradeDatas"  stripe v-loading="loading">
				          	<el-table-column  prop="hid"  :label="$t('message.vulnerability_level')"  width="auto">
			                	<template slot-scope="scope">
						        	<p v-if="scope.row.dvp_level == 3"><span class="com-dot-lv ser-lv"></span> {{$t('message.seriousrisk')}}</p>
						        	<p v-if="scope.row.dvp_level == 2"><span class="com-dot-lv high-lv"></span> {{$t('message.highrisk')}} </p>
						        	<p v-if="scope.row.dvp_level == 1"><span class="com-dot-lv mid-lv"></span>  {{$t('message.midrisk')}}</p>
						        	<p v-if="scope.row.dvp_level == 0"><span class="com-dot-lv low-lv"></span>  {{$t('message.lowrisk')}}</p>
								</template>
			                </el-table-column>
			                <el-table-column  prop="title"  :label="$t('message.vulTitle')"  width="auto"></el-table-column>
			                <el-table-column  prop="hid"  :label="$t('message.WhitehatID')"  width="auto">
			                	<template slot-scope="scope">
						        	<p>{{scope.row.hid}}</p>
								</template>
			                </el-table-column>
			                <el-table-column  prop="reward"  :label="$t('message.vulreward')"  width="100px">
			                	<template slot-scope="scope">
						        	<p v-if="scope.row.state == 0"> -</p>
						        	<p v-if="scope.row.state == 1 && scope.row.price != 0"> {{scope.row.price}} Ether</p>
						        	<p v-if="scope.row.state == 1 && scope.row.price == 0 && scope.row.dvp == 0">-</p>
						        	<p v-if="scope.row.state == 2"> -</p>
						        	<p v-if="scope.row.state == 3"> -</p>
						        	<p v-if="scope.row.state == 1 && scope.row.price == 0 && !scope.row.dvp == 0"> {{scope.row.dvp}} DVP</p>
								</template>
			                </el-table-column>
			                <el-table-column  prop="write_time"  :label="$t('message.submit_time')"  width="auto"></el-table-column>
			                <el-table-column  prop="status"  :label="$t('message.vulStatus')"  width="auto">
			                	<template slot-scope="scope">
						        	<p v-if="scope.row.company_state == 0 || scope.row.company_state == 6"><i class="icon iconfont icon-shalou_huaban p8 ser"></i>{{$t('message.notConfirm')}}</p>
						        	<!--<p v-if="scope.row.company_state == 1"> 已认领</p>-->
						        	<!--<p v-if="scope.row.company_state == 2"> 不认领</p>-->
						        	<p v-if="scope.row.company_state == 1 && scope.row.is_fix == 0"><i class="icon iconfont icon-daixiufu_huaban p8 ser"></i>{{$t('message.ToBeFixed')}}</p>
						        	<p v-if="scope.row.company_state == 1 && scope.row.is_fix == 1"><i class="icon iconfont icon-yixiufu_huaban p8 low"></i>{{$t('message.vulFixed')}}</p>
						        	<p v-if="scope.row.company_state == 2 && scope.row.is_fix == 0"><i class="icon iconfont icon-daixiufu_huaban p8 ser"></i>{{$t('message.ToBeFixed')}}</p>
						        	<p v-if="scope.row.company_state == 2 && scope.row.is_fix == 1"><i class="icon iconfont icon-yixiufu_huaban p8 low"></i>{{$t('message.vulFixed')}}</p>
						        	<p v-if="scope.row.company_state == 3 && scope.row.is_fix == 0 && scope.row.dvpCompanyState == 0"><i class="icon iconfont icon-shanchu p8 mid"></i>{{$t('message.IgnoredLoopholes')}}</p>
						        	<p v-if="scope.row.company_state == 3 && scope.row.is_fix == 0 && scope.row.dvpCompanyState == 1"><i class="icon iconfont icon-daixiufu_huaban p8 ser"></i>{{$t('message.ToBeFixed')}}</p>
						        	<p v-if="scope.row.company_state == 3 && scope.row.is_fix == 1 && scope.row.dvpCompanyState == 1"><i class="icon iconfont icon-yixiufu_huaban p8 low"></i>{{$t('message.vulFixed')}}</p>
						        	<!--<p v-if="scope.row.company_state == 5 && scope.row.is_fix == 0"> 待修复</p>
						        	<p v-if="scope.row.company_state == 5 && scope.row.is_fix == 1"> 已修复</p>-->
								</template>
			                </el-table-column>
		                </el-table>
				    </div>
				    <div class="withdraw-item clearfix" v-if="dialogTradeData.type === 3">
				          <span class="fl">{{$t('message.Miner')}}:</span>
				          <el-table  :data="dialogTradeDatas"  stripe v-loading="loading">
				          	<el-table-column  prop="hid"  :label="$t('message.vulnerability_level')"  width="auto">
			                	<template slot-scope="scope">
						        	<p v-if="scope.row.dvp_level == 3"><span class="com-dot-lv ser-lv"></span> {{$t('message.seriousrisk')}}</p>
						        	<p v-if="scope.row.dvp_level == 2"><span class="com-dot-lv high-lv"></span> {{$t('message.highrisk')}} </p>
						        	<p v-if="scope.row.dvp_level == 1"><span class="com-dot-lv mid-lv"></span>  {{$t('message.midrisk')}}</p>
						        	<p v-if="scope.row.dvp_level == 0"><span class="com-dot-lv low-lv"></span>  {{$t('message.lowrisk')}}</p>
								</template>
			                </el-table-column>
			                <el-table-column  prop="title"  :label="$t('message.vulTitle')"  width="auto"></el-table-column>
			                <el-table-column  prop="hid"  :label="$t('message.WhitehatID')"  width="auto">
			                	<template slot-scope="scope">
						        	<p>{{scope.row.hid}}</p>
								</template>
			                </el-table-column>
			                <el-table-column  prop="reward"  :label="$t('message.Miner')"  width="auto">
			                	<template slot-scope="scope">
						        	<p v-if="scope.row.state == 0"> -</p>
						        	<p v-if="scope.row.state == 1 && scope.row.price != 0"> {{dialogTradeData.price}} Ether</p>
						        	<p v-if="scope.row.state == 1 && scope.row.price == 0 && scope.row.dvp == 0">-</p>
						        	<p v-if="scope.row.state == 2"> -</p>
						        	<p v-if="scope.row.state == 3"> -</p>
						        	<p v-if="scope.row.state == 1 && scope.row.price == 0 && !scope.row.dvp == 0"> {{scope.row.dvp}} DVP</p>
								</template>
			                </el-table-column>
			                <el-table-column  prop="write_time"  :label="$t('message.submit_time')"  width="auto"></el-table-column>
			                <el-table-column  prop="status"  :label="$t('message.vulStatus')"  width="auto">
			                	<template slot-scope="scope">
						        		<p v-if="scope.row.company_state == 0 || scope.row.company_state == 6"> {{$t('message.notConfirm')}}</p>
							        	<!--<p v-if="scope.row.company_state == 1"> 已认领</p>-->
							        	<!--<p v-if="scope.row.company_state == 2"> 不认领</p>-->
							        	<p v-if="scope.row.company_state == 1 && scope.row.is_fix == 0"> 待修复</p>
							        	<p v-if="scope.row.company_state == 1 && scope.row.is_fix == 1"> 已修复</p>
							        	<p v-if="scope.row.company_state == 2 && scope.row.is_fix == 0"> 待修复</p>
							        	<p v-if="scope.row.company_state == 2 && scope.row.is_fix == 1"> 已修复</p>
							        	<p v-if="scope.row.company_state == 3 && scope.row.is_fix == 0 && scope.row.dvpCompanyState == 0"> 已忽略</p>
							        	<p v-if="scope.row.company_state == 3 && scope.row.is_fix == 0 && scope.row.dvpCompanyState == 1"> 待修复</p>
							        	<p v-if="scope.row.company_state == 3 && scope.row.is_fix == 1 && scope.row.dvpCompanyState == 1"> 已修复</p>
							        	<p v-if="scope.row.company_state == 5 && scope.row.is_fix == 0"> 待修复</p>
							        	<p v-if="scope.row.company_state == 5 && scope.row.is_fix == 1"> 已修复</p>
								</template>
			                </el-table-column>
		                </el-table>
				    </div>

				</div>
			</el-dialog>
			<!--充值弹窗-->
				<el-dialog
					  title=""
					  :visible.sync="dialogVisibleCZ"
					  width="720px">
					 <div style="width: 720px;text-align: center;">
						    <div class="apply-safeguards-pop-up common-pop-up">
						      <p class="apply-title" style="margin-bottom: 30px;">{{$t('message.Deposit')}}
						      	<el-tooltip placement="bottom">
								  <div slot="content">
								  		<div>
									        <p class="apply-info-text" style="font-weight: 600;">{{$t('message.AboutSecurityDeposit')}}</p>
									        <p class="apply-info-text">• {{$t('message.SecurityDepositDVPBountyRewards')}}</p>
									        <p class="apply-info-text">• {{$t('message.depositNOlessthanloopholeBountyProgram')}}</p>
									        <p class="apply-info-text">• {{$t('message.withdrawsecurityDepositanyTime')}}</p>
									        <p class="apply-info-text">• {{$t('message.depositingproblemcontactDVP')}}</p>
									        <p class="apply-info-text">service@dvpnet.io</p>
						      			</div>
								  	</div>
								  <el-button type="text"><span class="ketubbah-btn"><img src="/static/image/question.png"></span></el-button>
								</el-tooltip></p>
						      <!--<p class="apply-num" style="margin-bottom: 28px;">24 Ether <b style="font-size: 12px;display: block;">最高奖励</b></p>-->
						      <div class="apply-address">{{$t('message.PaymentAddress')}}: 0xd5bAA94e09C4a1C6613A35c485604F507b368517</div>
						      <div class="apply-scan">
						        <img src="/static/image/eth_code.png">
						        <p>{{$t('message.walletQRcode_makepayment')}}</p>
						      </div>
						      <input type="text" :placeholder="$t('message.PleaseEnterTxHash')"  id="order" class="form-control-inp" style="width: 80%;margin-bottom: 10px;" v-model="orderPrice">
						      <div style="clear: both;"></div>
						      <el-button type="primary" @click="rewardBtn" :plain="true" class="btnshadow wrapBtn">{{$t('message.PaymentCompleted')}}</el-button>
						    </div>
					</div>
				</el-dialog>
				<!-- 充值成功 -->
				<el-dialog
				  title="充值成功"
				  :visible.sync="VulRLpayDBJSucess"
				  class="dialogwdetailC"
	 			  :close-on-click-modal = false
				  width="500px">
				  	<div class="dialogTXCon">
				  		<p style="margin-bottom: 30px;">{{$t('message.DVPWillCompleteAudit15minutes')}}</p>
				  		<el-button type="primary" class="btnshadow wrapBtn" @click="VulRLpayDBJSucsBtn">{{$t('message.Confirm')}}</el-button>
					</div>
			    </el-dialog>
				<!-- 申请入驻弹窗 -->
				<el-dialog
					  title=""
					  :visible.sync="dialogVisibleTX"
					  class="dialogTX"
					  width="40%">
					  	<div class="dialogTXCon">
						    <p>{{$t('message.Withdrawal')}}</p>
						    <p class="pop-up-text">{{$t('message.ClickbuttoncCustomerService')}}</p>
						    <p class="pop-up-text">{{$t('message.Emailcontent_amount')}}</p>
						    <a href='mailto:service@dvpnet.io'><el-button type="primary" class="btnshadow wrapBtnlg">service@dvpnet.io</el-button></a>
						</div>
				</el-dialog>
		</div>
</template>

<script>
	export default {
			name: 'comTrade',
			data () {
				return {
				    loading:false,
					total:0,//默认数据总数
	                pagesize: 0,//每页的数据条数
	                currentPage:1,//默认开始页面
		            dialogTrade: false,
		            VulRLpayDBJSucess: false,
		            dialogTradeDatas:[],
					dialogVisibleCZ: true,
					dialogVisibleTX: false,
					orderPrice:'',
					TradeData:[],
					dialogTradeData:[],
					options: [{
					          id: 'all',
					          label: '所有'
					        },{
					          id: '0',
					          label: '充值'
					        },{
					          id: '1',
					          label: '提现'
				      		},{
					          id: '2',
					          label: '漏洞奖励'
				            },{
					          id: '3',
					          label: '矿工费用'
					        }],
				    value: '',
				}
			},
			methods: {
				initData(){
                    this.loading = true
                    setTimeout(() => {
                        this.loading = false;
                    }, 500);
					var _this=this
					var type=this.$route.query.type
					this.value=type
					this.$ajax.CScomTrade({'type': type})
					.then(res => {
						if(res.errcode === 1){
							_this.TradeData = res.data.tradeList.data
							_this.total = res.data.tradeList.total
							_this.pagesize = res.data.tradeList.per_page
						}
					})
				},
				VulRLpayDBJSucsBtn(){
					this.VulRLpayDBJSucess=false
				},
				vullist_select(){
                    this.loading = true
                    setTimeout(() => {
                        this.loading = false;
                    }, 500);
				    var _this=this
					var type = this.value
		  			this.$ajax.CScomTrade({"type": type})
					.then(res => {
						_this.TradeData = res.data.tradeList.data
						_this.total = res.data.tradeList.total
						_this.pagesize = res.data.tradeList.per_page
					})
				},
				rewardBtn(){
					var _this=this
					var depositCom={
						'order': this.orderPrice
					}
					this.$ajax.CScomDeposit(depositCom)
					.then(res => {
						if(res.errcode === 1){
							_this.dialogVisibleCZ = false
							_this.VulRLpayDBJSucess=true
						}else{
							this.$message.error(res.errmsg);
						}
					})
				},
				dialogTradeBtn(ind,id){
					this.dialogTradeData =[]
					this.dialogTradeDatas =[]
					this.dialogTrade = true
	    	  		let MyVulData={
	    	  			"id": id
	    	  		}
	    	  		this.$ajax.CScomTradeInfo(MyVulData)
						.then(res => {
							this.dialogTradeData = res.data.tradeInfo;
						    this.dialogTradeDatas.push(res.data.tradeInfo.vul)
						})
//						console.log(this.dialogTradeDatas)
				},
				handleSizeChange(pagesize){
		  			this.pagesize = pagesize;
			  	},
			  	handleCurrentChange(currentPage){
			  		this.currentPage = currentPage;
			  		var type = this.value
		  			this.$ajax.CScomTrade({"type": type,"page": this.currentPage })
					.then(res => {
						_this.TradeData = res.data.tradeList.data
					})
			  	}
			},
			created:function(){
				this.initData();
			},

	  }
</script>

<style>
	.dialogTXCon{
		text-align: center;
	}
	.dialogTXCon p{
		font-size: 18px;
		line-height: 36px;
	}
	.pop-up-text{
		font-size: 12px !important;
	}
	.dialogTX .el-button{
		margin-top: 20px;
	}
</style>
