<template>
	<div>
		 <div>
		<!-- 悬赏管理 -->
				<div class="company-personal-wrap cpmpany-shadow" style="padding: 30px 30px 0 30px !important;">
				  	<div class="reward-manage">
					    <div class="clearfix  reward-header">
					    	<div class="reward-title">{{$t('dvp_head.bounty')}}</div>
					    	<div class="fl">
							      <p style="color:#4a4c52;font-size: 14px;">Publish reward plan, and encourage more white hats to detect more loopholes in your projects. Plan can be changed without notice.</p><br />
		            			  <router-link to="/Bounty" target="_blank">[About Bounty]</router-link>
					    	</div>
            			    <div class="fr" style="text-align: right;">
            				  	<router-link :to="{path:'/companyTwoCons',query:{company:mycompany}}" target="_blank"><el-button class="btnshadow wrapBtnw" style="border: 0;">Preview</el-button></router-link>
            			  		<el-button  class="btnshadow wrapBtn" style="margin-left: 10px;"  type="primary" @click="edit_CZdjfbbtn"  :disabled="isDisable">Publish</el-button><br />
					    		<div class="FBtime" v-if="update_time!=''">{{$t('message.LatestUpdate')}}：{{update_time}}</div>
            			  	</div>
					    </div>
				</div>				
			</div>
			<el-card  shadow="hover" class="rewardcon" style="margin-top: 30px;background: #ffffff;padding: 40px 20px 20px 0;"> 
					    	<el-tabs :tab-position="tabPosition"   v-model="activeName"  @tab-click="handleClick">
							    <el-tab-pane label="1.RewardPlan" name="first">
						    		<div>
						    			<div class="rewardConhead">Loophole reward based on severity.Grading reference <router-link to="/rewardReference" target="_blank">[Reference template]</router-link></div>
						    			<div class="reward-manage-item clearfix">
										    <div class="reward-plan-edit">
									      			<span>{{$t('message.lowrisk')}}&nbsp;</span>
									      			<el-input  v-model="lowPriceStart" :disabled="true"></el-input>&nbsp;-&nbsp;<el-input  v-model="lowPriceEnd"></el-input><br />
									      			<span>{{$t('message.midrisk')}}&nbsp;</span>
									      			<el-input  v-model="lowPriceEnd" :disabled="true"></el-input>&nbsp;-&nbsp;<el-input  v-model="midPriceEnd"></el-input><br />
									      			<span>{{$t('message.highrisk')}}&nbsp;</span>
									      			<el-input  v-model="midPriceEnd" :disabled="true"></el-input>&nbsp;-&nbsp;<el-input  v-model="highPriceEnd"></el-input><br />
									      			<span>{{$t('message.seriousrisk')}}&nbsp;</span>
									      			<el-input  v-model="highPriceEnd" :disabled="true"></el-input>&nbsp;-&nbsp;<el-input  v-model="serPriceEnd"></el-input>
									   		</div>
										</div>
										<div class='fr'>
					  						<el-button type="primary" class="btnshadow wrapBtn"  @click="rewardNext1" :plain="true">{{$t('message.next')}}</el-button>
										</div>
						    		</div>
							    </el-tab-pane>
							    <el-tab-pane label="2.TestRange" v-if="this.dataCsfw==''" disabled name="second">
							    	<div class="rewardConhead">Specify which domain/applications you can test for security personnel; which domain/applications cannot be tested<router-link to="/rewardReference" target="_blank">[Reference template]</router-link></div>
							    	<div class="reward-manage-item clearfix">
							    		<div class="reward-plan-edit">
									      	<el-input type="textarea" autosize  placeholder="Please enter the content" v-model="dataCsfw"></el-input>
									    </div>
								    </div>
								    <div class='fr'>
											<el-button class="comColor btnshadow wrapBtnw" @click='rewardLast2' >{{$t('message.previous')}}</el-button>
					  						<el-button type="primary" class="btnshadow wrapBtn" @click="rewardNext2" :plain="true">{{$t('message.next')}}</el-button>
										</div>
							    </el-tab-pane>
							    <el-tab-pane label="2.TestRange" v-if="this.dataCsfw!=''" name="second">
							    	<div class="rewardConhead">Specify which domain/applications you can test for security personnel; which domain/applications cannot be tested<router-link to="/rewardReference" target="_blank">[Reference template]</router-link></div>
							    	<div class="reward-manage-item clearfix">
							    		<div class="reward-plan-edit">
									      	<el-input type="textarea" autosize  placeholder="Please enter the content" v-model="dataCsfw"></el-input>
									    </div>
								    </div>
								    <div class='fr'>
											<el-button class="comColor btnshadow wrapBtnw" @click='rewardLast2' >{{$t('message.previous')}}</el-button>
					  						<el-button type="primary" class="btnshadow wrapBtn" @click="rewardNext2" :plain="true">{{$t('message.next')}}</el-button>
										</div>
							    </el-tab-pane>
							    <el-tab-pane label="3.VulnerabilityRating" v-if="!this.dataVulSer " disabled name="third">
							    	<div class="rewardConhead">Defined severity of loopholes. Grading reference<router-link to="/rewardReference"  target="_blank">[Reference template]</router-link></div>
							    	<div class="reward-manage-item clearfix">
									    <div class="reward-plan-edit">
									     		<p>Low</p>
									      		<el-input  type="textarea" autosize  placeholder="Please enter the content"  v-model='dataVulLow'></el-input>
									    </div>
									    <div class="reward-plan-edit">
									    		<p>Mid</p>
									      		<el-input type="textarea"  autosize  placeholder="Please enter the content"  v-model='dataVulMid'></el-input>
									    </div>
									    <div class="reward-plan-edit">
									    		<p>High</p>
									      		<el-input  type="textarea" autosize placeholder="Please enter the content"   v-model='dataVulHigh'></el-input>
									    </div>
									    <div class="reward-plan-edit">
									    		<p>Serious</p>
									      		<el-input  type="textarea" autosize  placeholder="Please enter the content"  v-model='dataVulSer'></el-input>
									    </div>
									</div>
							   		 <div class='fr'>
										<el-button class="comColor btnshadow wrapBtnw"  @click='rewardLast3' >{{$t('message.previous')}}</el-button>
				  						<el-button type="primary"class="btnshadow wrapBtn"  @click="rewardNext3" :plain="true">{{$t('message.next')}}</el-button>
									</div>
							    </el-tab-pane>
							    <el-tab-pane label="3.VulnerabilityRating" v-if="this.dataVulSer" name="third">
							    	<div class="rewardConhead">Defined severity of loopholes. Grading reference <router-link to="/rewardReference"  target="_blank">[Reference template]</router-link></div>
							    	<div class="reward-manage-item clearfix">
									    <div class="reward-plan-edit">
									     		<p>Low</p>
									      		<el-input  type="textarea" autosize  placeholder="Please enter the content"  v-model='dataVulLow'></el-input>
									    </div>
									    <div class="reward-plan-edit">
									    		<p>Mid</p>
									      		<el-input type="textarea"  autosize  placeholder="Please enter the content"  v-model='dataVulMid'></el-input>
									    </div>
									    <div class="reward-plan-edit">
									    		<p>High</p>
									      		<el-input  type="textarea" autosize placeholder="Please enter the content"   v-model='dataVulHigh'></el-input>
									    </div>
									    <div class="reward-plan-edit">
									    		<p>Serious</p>
									      		<el-input  type="textarea" autosize  placeholder="Please enter the content"  v-model='dataVulSer'></el-input>
									    </div>
									</div>
							   		 <div class='fr'>
										<el-button class="comColor btnshadow wrapBtnw"  @click='rewardLast3' >{{$t('message.previous')}}</el-button>
				  						<el-button type="primary" class="btnshadow wrapBtn" @click="rewardNext3" :plain="true">{{$t('message.next')}}</el-button>
									</div>
							    </el-tab-pane>
							    <el-tab-pane label="4.Precautions" v-if="!this.dataVulSer"  disabled name="fourth">
							    	<div class="rewardConhead">Supplementary explanation<span style="color:#F00;font-size: 14px;color: #b4bdc2;">（Optional）</span>Grading reference  <router-link to="/rewardReference" target="_blank">[Reference template]</router-link></div>
							        <div class="reward-manage-item clearfix">
								        <div class="reward-plan-edit">
									      		<el-input type="textarea" autosize  placeholder="Please enter the content" v-model="remarks"></el-input>
									    </div>
									</div>
								    <div class='fr'>
										<el-button class="comColor btnshadow wrapBtnw"  @click='rewardLast4' >{{$t('message.previous')}}</el-button>
				  						<el-button type="primary" class="btnshadow wrapBtn" @click="rewardNext4"  :plain="true">{{$t('message.Complete')}}</el-button>
									</div>
							    </el-tab-pane>
							    <el-tab-pane label="4.Precautions"  v-if="this.dataVulSer"  name="fourth">
							    	<div class="rewardConhead">Supplementary explanation<span style="color:#F00;font-size: 14px;color: #b4bdc2;">（Optional）</span>Grading reference  <router-link to="/rewardReference" target="_blank">[Reference template]</router-link></div>
							        <div class="reward-manage-item clearfix">
								        <div class="reward-plan-edit">
									      		<el-input type="textarea" autosize  placeholder="Please enter the content" v-model="remarks"></el-input>
									    </div>
									</div>
								    <div class='fr'>
										<el-button class="comColor btnshadow wrapBtnw"  @click='rewardLast4' >{{$t('message.previous')}}</el-button>
				  						<el-button type="primary" class="btnshadow wrapBtn" @click="rewardNext4"  :plain="true">{{$t('message.Complete')}}</el-button>
									</div>
							    </el-tab-pane>
							  </el-tabs>
					    </el-card>
			<!-- 余额不足 -->
				<el-dialog
					  :title="$t('message.point')"
					  :visible.sync="dialognoMoney"
					  width="600px">
					 <div class="common-pop-up">
					 	<h3>You need to store the deposit before you join the Bug Bounty.</h3>
					 	 <p style="color:#4a4c52;padding-top: 10px;">To have enough money to pay white hats, please deposit into your account no less than<span>{{serPriceEnd}}</span>Ether the amount of a single severe loophole reward</p>  <br /><br />
					 	 Account balance：<span>{{$store.state.CSuser.user.balance}}</span>Ether，Balance not enough &nbsp;&nbsp;<el-button  type="primary" class='fr btnshadow wrapBtn' @click="dialogVisibleCZbtn"> Make deposit </el-button><br>
					      <p></p>
					    </div>
				</el-dialog>
				<!--充值弹窗-->
				<el-dialog
					  title=""
					  :visible.sync="dialogVisibleCZ"
					  width="720px">
					 <div style="width: 720px;text-align: center;">
						    <div class="apply-safeguards-pop-up common-pop-up">
						      <p class="apply-title" style="margin-bottom: 30px;">PaymentDeposit
						      	<el-tooltip placement="bottom">
								  <div slot="content">
								  		<div>
									        <p class="apply-info-text" style="font-weight: 600;">{{$t('message.AboutSecurityDeposit')}}</p>
									        <p class="apply-info-text">• The security deposit is the sum of cryptocurrencies held in DVP for bounty rewards.</p>
									        <p class="apply-info-text">• You need to deposit NO less than the bounty rewards for one critical loophole before publishing a bounty program.</p>
									        <p class="apply-info-text">• You can withdraw from the security deposit at any time.</p>
									        <p class="apply-info-text">• If you have problem depositing funds, please contact DVP customer support by email.</p>
									        <p class="apply-info-text">service@dvpnet.io</p>
						      			</div>
								  	</div>
								  <el-button type="text"><span class="ketubbah-btn"><img src="/static/image/question.png"></span></el-button>
								</el-tooltip></p>
						      <!--<p class="apply-num" style="margin-bottom: 28px;">24 Ether <b style="font-size: 12px;display: block;">最高奖励</b></p>-->
						      <div class="apply-address">Payment address：0xd5bAA94e09C4a1C6613A35c485604F507b368517</div>
						      <div class="apply-scan">
						        <img src="/static/image/eth_code.png">
						        <p>Open wallet, scan the code to pay</p>
						      </div>
						      <input type="text" placeholder="Please enter the TxHash" id="order" class="form-control-inp" style="width: 80%;margin-bottom: 10px;" v-model="orderPrice">
						      <div style="clear: both;"></div>
						      <el-button type="primary" class="btnshadow wrapBtn" @click="rewardBtn">{{$t('message.PaymentCompleted')}}</el-button>
						    </div>
					</div>
				</el-dialog>
				<!-- 充值成功 -->
				<el-dialog
				  :title="$t('message.DepositCompleted')"
				  :visible.sync="VulRLpayDBJSucess"
				  class="dialogwdetailC"
	 			  :close-on-click-modal = false
				  width="500px">
				  	<div class="dialogTXCon">
				  		<p style="margin-bottom: 30px;">DVP will complete audit in 15 minutes, please wait...</p>
				  		<el-button type="primary" class="btnshadow wrapBtn" @click="VulRLpayDBJSucsBtn">{{$t('message.Confirm')}}</el-button>
					</div>
			    </el-dialog>
				<!-- 支付担保金弹窗 -->
				<el-dialog
					  :title="$t('message.point')"
					  :visible.sync="dialogVisiblepop1"
					  width="780px">
					 <div style="width: 780px;text-align: center;">
					        <div class="common-pop-up">
						      <p>您已成功提交交易号，请等待担保金审核。</p>
						      <button type="button" class="close-btn close">×</button>
						    </div>
					</div>
				</el-dialog>
				<!-- 支付担保金弹窗 -->
				<el-dialog
					  :title="$t('message.point')"
					  :visible.sync="dialogVisiblepop3"
					  width="780px">
					 <div class="common-pop-up">
					      <p>VerificationFailed</p>
					      <p></p>
					      <button type="button" class="close-btn close">×</button>
					    </div>
				</el-dialog>
				<!-- 完善信息 -->
				<el-dialog
					  :title="$t('message.point')"
					  :visible.sync="dialogRewardmsg"
					  width="400px">
					 <div class="common-pop-up ac">
					 	<div class="ac">Before publishing reward plan, please complete company introduction and logo, etc.</div>
					 	<router-link to="/combox/company/comMember"><el-button  type="primary" style="margin-top: 20px;" class="btnshadow wrapBtn">Complete required information</el-button></router-link>
					      <p></p>
					    </div>
				</el-dialog>
				<!-- 发布成功 -->
				<el-dialog
					  :title="$t('message.point')"
					  :visible.sync="dialogRewardplan"
					  width="400px">
					 <div class="common-pop-up ac">
					 	<div class="ac">Publishing loophole reward plan successfu</div>
					 	<router-link :to="{path:'/companyTwo',query:{company: mycompany}}" ><el-button  type="primary" style="margin-top: 20px;" class='btnshadow wrapBtn'>{{$t('message.look_over')}}</el-button></router-link>
					    <p></p>
					    </div>
				</el-dialog>
				<el-dialog
					  :title="$t('message.point')"
					  :visible.sync="dialogRewardOther"
					  width="400px">
					 <div class="common-pop-up ac">
					 	<div class="ac">{{otherReward}}</div>
					 	<el-button  type="primary" style="margin-top: 20px;" class="btnshadow wrapBtn"  @click="otherRewardBtn" >Continue to edit</el-button>
					      <p></p>
					    </div>
				</el-dialog>
				<!-- 身份审核 -->
				<el-dialog
					  :title="$t('message.point')"
					  :visible.sync="dialogRewardperson"
					  width="400px">
					 <div class="common-pop-up ac">
					 	<div class="ac">You have registered DVP account successfully, please wait for ID check.</div>
					      <p></p>
					    </div>
				</el-dialog>
		  </div>
	</div>
</template>

<script>

	export default {
			name: 'comReward',
			data () {
				return {
					msgErr:'',
					update_time:'',
					otherReward:'',
					dialogRewardperson: false,
					dialogRewardOther: false,
					dialognoMoney: false,
					dialogRewardmsg: false,
					dialogRewardplan:false,
					VulRLpayDBJSucess:false,
					 tabPosition: 'left',
					 activeName: 'first',
					dialogVisibleCZ: false,
					isDisable: false,
					textarea2: '',
					vulintroduceData:[],
					edit_CZdj: false,
					lowPriceStart:'0.05',
					midPriceStart:'',
					highPriceStart:'',
					serPriceStart:'',
					lowPriceEnd:'',
					midPriceEnd:'',
					highPriceEnd:'',
					serPriceEnd:'',
					dataCsfw:'',
					dataVulMid:'',
					dataVulHigh:'',
					dataVulLow:'',
					dataVulSer:'',
					remarks:'',
					dialogVisiblepop1: false,
					dialogVisiblepop3: false,
					orderPrice:'',
					Money:0,
					mycompany:'',
					userCSData:'',
					lang: 'zh'
				}
			},
			mounted(){
			   this.lang=localStorage.getItem('locale')
			   if(this.lang=='zh'){
			   		this.$router.push({ path: '/combox/company/comReward' })
			   }else if(this.lang=='en' || this.lang==null || this.lang==''){
			   		this.$router.push({ path: '/combox/company/comReward_en' })
			   }else if(this.lang=='ko'){
			   		this.$router.push({ path: '/combox/company/comReward_ko' })
			   }
		  },
			methods: {
				initData(){
					var _this = this;
					this.$ajax.CScomReward()
					.then(res => {
						if(res.errcode===1){
							_this.update_time=res.data.companyInfo.update_time
							_this.mycompany = res.data.company.company_name
							_this.vulintroduceData = res.data.companyInfo
	    					_this.lowPriceStart =  res.data.companyInfo.low_start
							_this.midPriceStart =  res.data.companyInfo.mid_start
							_this.highPriceStart =  res.data.companyInfo.high_start
							_this.serPriceStart =  res.data.companyInfo.gra_start
							_this.serPriceEnd= res.data.companyInfo.gra_end
							_this.highPriceEnd= res.data.companyInfo.high_end
							_this.midPriceEnd= res.data.companyInfo.mid_end
							_this.lowPriceEnd= res.data.companyInfo.low_end
							_this.dataCsfw = res.data.companyInfo.test_range
							_this.dataVulMid = res.data.companyInfo.mid_vul_rate
							_this.dataVulHigh = res.data.companyInfo.high_vul_rate
							_this.dataVulSer = res.data.companyInfo.gra_vul_rate
							_this.dataVulLow = res.data.companyInfo.low_vul_rate
							_this.remarks = res.data.companyInfo.remarks
							_this.Money=res.data.company.balance
						}

					})
				},
				otherRewardBtn(){
					this.dialogRewardOther = false
				},
				//预览
				dialogVisibleCZbtn(){
					this.dialognoMoney =false
					this.dialogVisibleCZ = true
				},
				VulRLpayDBJSucsBtn(){
					this.VulRLpayDBJSucess =false
				},
				rewardLast2(){
					this.activeName = 'first'
				},
				rewardLast3(){
					this.activeName = 'second'
				},
				rewardLast4(){
					this.activeName = 'third'
				},
				rewardNext1(){
						if(this.lowPriceEnd ==''||this.lowPriceEnd ==null){
							 this.$message.error({
					          message: 'Low risk rewards are not set!',
					          type: ''
					       });
							return false;
						}else if(this.midPriceEnd ==''||this.midPriceEnd ==null){
							this.$message.error({
					          message: 'Medium risk award is not set!',
					          type: ''
					      });
							return false;
						}else if(this.highPriceEnd ==''||this.highPriceEnd ==null){
							this.$message.error({
					          message: 'High risk rewards are not set!',
					          type: ''
					   		});
							return false;
						}else if(this.serPriceEnd ==''||this.serPriceEnd ==null){
							this.$message.error({
					          message: 'Serious reward is not set!',
					          type: ''
					   		});
							return false;
						}else if(this.lowPriceStart -this.lowPriceEnd>=0){
							this.$message.error({
					          message: 'The highest reward for low risk cannot be less than or equal to the minimum reward!',
					          type: ''
					  		 });
							return false;
						}else if(this.lowPriceEnd-this.midPriceEnd>=0){
							this.$message.error({
					          message: 'The highest reward for a medium-risk cannot be less than or equal to the minimum reward!',
					          type: ''
					  		});
							return false;
						}else if(this.midPriceEnd-this.highPriceEnd>=0){
							this.$message.error({
					          message: 'The highest reward for high risk cannot be less than or equal to the minimum reward!',
					          type: ''
					  		});
							return false;
						}else if(this.highPriceEnd-this.serPriceEnd>=0){
							this.$message.error({
					          message: 'Serious maximum reward cannot be less than or equal to the minimum reward! ',
					          type: ''
					  		});
							return false;
						}else{
							var Reward={
				    		'low_start': this.lowPriceStart,
				    		'low_end': this.lowPriceEnd,
				    		'mid_start': this.lowPriceEnd,
				    		'mid_end': this.midPriceEnd,
				    		'high_start': this.midPriceEnd,
				    		'high_end': this.highPriceEnd,
				    		'gra_start': this.highPriceEnd,
				    		'gra_end': this.serPriceEnd,
				    		'test_range': this.dataCsfw,
				    		'low_vul_rate': this.dataVulLow,
				    		'mid_vul_rate': this.dataVulMid,
				    		'high_vul_rate': this.dataVulHigh,
				    		'gra_vul_rate': this.dataVulSer,
				    		'remarks': this.remarks
					    	}
						this.$ajax.CScomRewardNext(Reward)
						.then(res => {
							if(res.errcode===1){
								this.activeName = 'second'
								return false;
							}
						})
						}
						

				},
				rewardNext2(){
					if(this.dataCsfw ==''||this.dataCsfw ==null){
						this.$message.error({
					          message: 'Please complete the vulnerability test scope first!',
					          type: ''
					  	});
					}else{
						var Reward={
				    		'low_start': this.lowPriceStart,
				    		'low_end': this.lowPriceEnd,
				    		'mid_start': this.lowPriceEnd,
				    		'mid_end': this.midPriceEnd,
				    		'high_start': this.midPriceEnd,
				    		'high_end': this.highPriceEnd,
				    		'gra_start': this.highPriceEnd,
				    		'gra_end': this.serPriceEnd,
				    		'test_range': this.dataCsfw,
				    		'low_vul_rate': this.dataVulLow,
				    		'mid_vul_rate': this.dataVulMid,
				    		'high_vul_rate': this.dataVulHigh,
				    		'gra_vul_rate': this.dataVulSer,
				    		'remarks': this.remarks
				    	}
						this.$ajax.CScomRewardNext(Reward)
						.then(res => {
							if(res.errcode===1){
								this.activeName = 'third'
							}
						})
					}
					
				},
				rewardNext3(){
					if(this.dataVulLow ==''||this.dataVulLow ==null){
						this.$message.error({
					          message: 'Please improve the vulnerability low-risk rating first!',
					          type: ''
					  });
					}else if(this.dataVulMid ==''||this.dataVulMid ==null){
						this.$message.error({
					          message: 'Please improve the vulnerability rating first!',
					          type: ''
						 });
					}else if(this.dataVulHigh ==''||this.dataVulHigh ==null){
						this.$message.error({
					          message: 'Please improve the vulnerability high risk rating first!',
					          type: ''
						});
					}else if(this.dataVulSer ==''||this.dataVulSer ==null){
						this.$message.error({
					          message: 'Please complete the vulnerability rating first!',
					          type: ''
						});
					}
					var Reward={
			    		'low_start': this.lowPriceStart,
			    		'low_end': this.lowPriceEnd,
			    		'mid_start': this.lowPriceEnd,
			    		'mid_end': this.midPriceEnd,
			    		'high_start': this.midPriceEnd,
			    		'high_end': this.highPriceEnd,
			    		'gra_start': this.highPriceEnd,
			    		'gra_end': this.serPriceEnd,
			    		'test_range': this.dataCsfw,
			    		'low_vul_rate': this.dataVulLow,
			    		'mid_vul_rate': this.dataVulMid,
			    		'high_vul_rate': this.dataVulHigh,
			    		'gra_vul_rate': this.dataVulSer,
			    		'remarks': this.remarks
			    	}
					this.$ajax.CScomRewardNext(Reward)
					.then(res => {
						if(res.errcode===1){
							this.activeName = 'fourth'
						}
					})
				}, //完成
				rewardNext4(){
					var Reward={
			    		'low_start': this.lowPriceStart,
			    		'low_end': this.lowPriceEnd,
			    		'mid_start': this.lowPriceEnd,
			    		'mid_end': this.midPriceEnd,
			    		'high_start': this.midPriceEnd,
			    		'high_end': this.highPriceEnd,
			    		'gra_start': this.highPriceEnd,
			    		'gra_end': this.serPriceEnd,
			    		'test_range': this.dataCsfw,
			    		'low_vul_rate': this.dataVulLow,
			    		'mid_vul_rate': this.dataVulMid,
			    		'high_vul_rate': this.dataVulHigh,
			    		'gra_vul_rate': this.dataVulSer,
			    		'remarks': this.remarks
			    	}
					this.$ajax.CScomRewardNext(Reward)
					.then(res => {
						if(res.errcode===1){
							 this.$message({
					          message: '保存成功',
					          type: 'success'
					        });
						}
					})
				},
				handleClick(tab, event) {
			       console.log(tab,event)
			    },
				rewardNext(){
					 if (this.active++ > 2) this.active = 0;
				},
				//悬赏管理编辑
				edit_CZdjbtn(file){
					var _this = this
					this.$ajax.CScomReward()
					.then(res => {
						if(res.errcode === 1){
							if(res.data.popup === 0){
								_this.dialogVisibleCZ = true
							}else if(res.data.popup === 1){
								_this.dialogVisiblepop1 = true
							}else if(res.data.popup ===2){
								_this.edit_CZdj = true
							}else{
								_this.dialogVisiblepop3 = true
							}
						}
					})

			    },
			    //发布悬赏
			    edit_CZdjfbbtn(){
			    	this.isDisable = true
			        setTimeout(() => {
			          this.isDisable = false
			        }, 1000)
			    	var _this = this
			    	var Reward={
			    		'low_start': this.lowPriceStart,
			    		'low_end': this.lowPriceEnd,
			    		'mid_start': this.lowPriceEnd,
			    		'mid_end': this.midPriceEnd,
			    		'high_start': this.midPriceEnd,
			    		'high_end': this.highPriceEnd,
			    		'gra_start': this.highPriceEnd,
			    		'gra_end': this.serPriceEnd,
			    		'test_range': this.dataCsfw,
			    		'low_vul_rate': this.dataVulLow,
			    		'mid_vul_rate': this.dataVulMid,
			    		'high_vul_rate': this.dataVulHigh,
			    		'gra_vul_rate': this.dataVulSer,
			    		'remarks': this.remarks
			    	}
					this.$ajax.CScomRewardUpdate(Reward)
					.then(res => {
						if(res.errcode === 1){
							_this.edit_CZdj = false
							_this.dialogRewardplan = true
						}else if(res.errcode === 2002){
			         		_this.dialogRewardmsg=true;
						}else if(res.errcode === 2003){
			         		_this.dialognoMoney=true;
			         		_this.Money=res.data.balance
						}else if(res.errcode === 2001){
			         		_this.dialogRewardperson=true
						}else{
							_this.dialogRewardOther = true
							_this.otherReward =res.errmsg


						}
					})
			   },
			   rewardBtn(){
					var _this=this
					var depositCom={
						'order': this.orderPrice
					}
					this.$ajax.CScomDeposit(depositCom)
					.then(res => {
						console.log(res)
						if(res.errcode === 1){
							_this.dialogVisibleCZ = false
						}else{
			         		_this.$message.error(res.errmsg);
						}
					})
				},
			},
			created:function(){
				   	this.initData();
			}

	  }
</script>

<style scoped>
	.FBtime{
		font-size: 12px; color: #b4bdc2;padding-top: 5px;display: inline-block;
	}
	.reward-manage  .comColor:hover{
		background: #2196f3 !important;
		color: #ffffff !important;
	}
	.rewardcon .el-button{
		margin: 20px 30px 30px 0;
	}
	.rewardcon .el-tabs__item.is-active{
		background: #409EFF !important;
		color: #ffffff !important;
	}
	.rewardcon .el-tabs__active-bar{
		height: 0 !important;
	}
	.rewardcon .el-tabs__item{
		border: 1px solid #dbe1e4 !important;
		margin-bottom: 10px !important;
		padding: 10px 40px !important;
		height: inherit !important;
		font-size: 16px !important;
	}
	.rewardcon .el-tabs__header{
		padding-top: 0 !important;
	}
	.rewardcon textarea{
		width: 100%;
		height:  100px !important;
	}
	.rewardcon .el-tabs__content{
		box-sizing: border-box;
	}
	.rewardConhead{
		border-bottom: 1px solid #dbe1e4;
		padding-bottom: 20px;
		font-size: 14px;
	}
	.common-pop-up-wrap>div{
		padding: 0 !important;
	}
	.reward-plan-edit .el-input{
		width: 80px;
	}
	.reward-plan-edit span{
		min-width: 50px;
		display: inline-block;
	}
	.edit_CZdj{
		display: none;
	}
	.hole-lv-item h5{
		font-size: 14px;
	}
	.comColor{
	    color: #148CCE;
	}
	.common-yl-btn{
	  	height: 40px;
	    padding: 0 25px;
	    font-size:16px;
	    display: inline-block;
	    color: #2196f3 !important;
	}
	  .common-yl-btn:hover{
	  	 background: #2196f3 !important;
	     color: #ffffff !important;
	}
	.common-btn-normal:hover{
	      color:#ffffff !important;
	}
	.common-btn-normal{
	      color:#ffffff !important;
	      height: 40px;
	      padding: 0 45px;
	}
	.reward-header>div{
	    width:50%;
	    margin-bottom:20px;
	}
	.reward-manage-item:nth-last-of-type(1){
	    border-bottom: none;
	}
	.closeBtn{
	    border: 1px solid #2198f2;
	    color: #148CCE;
	    margin-right: 20px;
	}
	.closeBtn:hover{
	    background: #2198f2;
	    border-bottom:1px solid #dbe2e5;
	    color: #ffffff !important;
	}
	.nextBtn{
	    background: #2198f2;
	    border-bottom:1px solid #dbe2e5;
	    color: #ffffff;
	    margin-right: 15px;
	}
	.nextBtn:hover{
	    border-bottom:1px solid #dbe2e5;
	    color: #ffffff !important;
	    margin-right: 15px;
	  }
	  .cAnBtn{
	    line-height: 36px !important;
	    margin: 20px 0;
	  }
	  .reward-title{
	    font-size: 24px;
	  }
	  .numTitle{
	    font-size: 42px;
	    font-family: "SourceHanSansSC-regular";
	  }
	  .fsize18{
	    font-size: 18px;
	  }
	  .reward-plan-edit>div {
	    line-height: 32px !important;
	  }
	  .reward-manage-item>span{
	    width: 5% !important;
	  }
	  .hides{
	    display: none;
	  }
	  .edit-cons{
	    width: 100%;
	  }
	  .company-textarea{
	    width: 100%;
	  }
	  .czMoneyBox{
	      position: fixed;
	      left:0;
	      right:0;
	      top:0;
	      bottom:0;
	      width: 100%;
	      height: 100%;
	      background: rgba(0,0,0,0.4)
	  }
	  .czMoney{
	      width:600px;
	      height: auto;
	      background: #f4f4f4;
	      margin: 25% auto;
	      padding: 20px 40px;
	  }
	  .czMoney_header{
	      padding: 20px;
	      position: relative;
	  }
	  .full{
	    width: 100%;
	    overflow: hidden;
	    border: none;
	    outline: 0;
	  }
	  .closeBox{
	    position: absolute;
	    top: 0;
	    right: -10px;
	    font-size: 21px;
	    font-weight: 700;
	    line-height: 1;
	    color: #000;
	    text-shadow: 0 1px 0 #fff;
	    filter: alpha(opacity=20);
	    opacity: .2;
	    background: 0;
	  }
	  .closeBox:hover{
	    color: #000;
	  }
	  .czMoney_header h5{
	      margin-bottom: 10px;
	  }
	  .czMoney_footer{
	      padding: 20px;
	      text-align: right;
	  }
	  .BZJmoney{
	    color: #2198f2;
	  }
	  pre{
	  padding: 0 !important;
	  font-size: 14px !important;
	  border: none !important;
	  background-color: #ffffff !important;
	  line-height: inherit;
	  font-family: '微软雅黑';
	  overflow: hidden;
	  white-space: pre-wrap; /* css-3 */
	  white-space: -moz-pre-wrap; /* Mozilla, since 1999 */
	  white-space: -pre-wrap; /* Opera 4-6 */
	  white-space: -o-pre-wrap; /* Opera 7 */
	  word-wrap: break-word; /* Internet Explorer 5.5+ */
	  }
	  input[type="text" i]:disabled{
	    background-color: #f5f5f5;
	  }
	  .edit-cons>div{
	    margin-bottom: 10px;
	  }
	  .reward-plan-edit>div span:hover {
	    margin-right: 5px;
	  }
	  .wizard > .content > .body input{
	    display: inline-block;
	  }
	  legend{
	    margin-bottom:20px;
	    padding-bottom: 20px;
	  }
	  #example-vertical{
	    margin-top:20px;
	  }
	  .reward-manage-item>div{
	    width: 100% !important;
	  }
	  .reward-manage-item{
	    padding: 20px 0;
		box-sizing: border-box;
	  }
	  .wizard > .content > .body{
	    width: 100% !important;
	    position: relative;
	  }
	  .wizard > .content{
	    background: 0;
	    border-radius:0;
	    -webkit-border-radius: 0;
	  }
	  .wizard.vertical > .steps{
	    width: 20%;
	  }
	  .wizard.vertical > .content{
	    width: 77.5%;
	    margin-right: 0%;
	    min-height:15em;
	  }
	  .wizard.vertical > .actions{
	    margin: 0;
	  }
	  label{
	    float:right;
	  }
	  .wizard > .steps a, .wizard > .steps a:hover, .wizard > .steps a:active{
	    border-radius:0;
	    -webkit-border-radius: 0;
	  }
	  .wizard > .steps .current a, .wizard > .steps .current a:hover, .wizard > .steps .current a:active{
	    background: #2196f3;
	  }
	  .wizard > .steps .disabled a, .wizard > .steps .disabled a:hover, .wizard > .steps .disabled a:active{
	    background: 0;
	    border: 1px solid #dbe1e4;
	    color: #30414d;
	  }
	  .wizard > .steps .done a, .wizard > .steps .done a:hover, .wizard > .steps .done a:active{
	    background: #fafafa;
	    border: 1px solid #dbe1e4;
	    color: #30414d;
	  }
	  .wizard > .actions a, .wizard > .actions a:hover, .wizard > .actions a:active{
	    background: #2196f3;
	    border-radius:0;
	    -webkit-border-radius: 0;
	  }
	  .steps li{
	    text-align:center;
	  }
	  .steps li a{
	    font-size: 16px;
	  }
	  legend{
	    font-size: 14px;
	  }
</style>
