<template>
		<div class="hole-detailed-wrap   hole-detailed-wrapcomp">
					<el-breadcrumb separator-class="el-icon-arrow-right">
						<el-breadcrumb-item :to="{ path: '/combox/company/companyOne' }">{{$t('message.personalCenter')}}</el-breadcrumb-item>
						<el-breadcrumb-item :to="{ path: '/combox/company/comLoophole' }">{{$t('message.VulnerabilityManagement')}}</el-breadcrumb-item>
						<el-breadcrumb-item>{{dialogCSVul_data.vulSign}}</el-breadcrumb-item>
					</el-breadcrumb>
					<div class="hole-detailed hole-detailed1" style="margin-top: 20px;position: relative;">
						    <p style="line-height: 50px;">{{$t('message.Summary')}}</p>
						    <div class="hole-item clearfix">
						      <span class="fl">{{$t('message.vulTitle')}} :</span>
						      <div class="fl" id="pocTitle">{{dialogCSVul_data.title}}</div>
						    </div>
						    <div class="hole-item clearfix">
						      <span class="fl">{{$t('message.targetType')}} :</span>
						      <div class="fl">{{dialogCSVul_data.target_name}}</div>
						    </div>
						    <div class="hole-item clearfix">
						      <span class="fl">{{$t('message.vulSerialNumber')}} :</span>
						      <div class="fl">{{dialogCSVul_data.vulSign}}</div>
						    </div>
						    <div class="hole-item clearfix">
						      <span class="fl">{{$t('message.attackType')}} :</span>
						      <div class="fl">{{dialogCSVul_data.attack_name}}</div>
						    </div>
						    <div class="hole-item clearfix">  
						      <span class="fl">{{$t('message.vulvendor')}} :</span>
						      <div class="fl">{{dialogCSVul_data.company}}</div>
						    </div>
						    <div class="hole-item clearfix">
						      <span class="fl">{{$t('message.vulnerability_level')}} :</span>
						      <div class="fl">
									<p v-if="dialogCSVul_data.dvp_level == 3"><span class="com-dot-lv ser-lv"></span> {{$t('message.seriousrisk')}}</p>
						        	<p v-if="dialogCSVul_data.dvp_level == 2"><span class="com-dot-lv high-lv"></span>{{$t('message.highrisk')}} </p>
						        	<p v-if="dialogCSVul_data.dvp_level == 1"><span class="com-dot-lv mid-lv"></span> {{$t('message.midrisk')}}</p>
						        	<p v-if="dialogCSVul_data.dvp_level == 0"><span class="com-dot-lv low-lv"></span> {{$t('message.lowrisk')}}</p>
						      </div>
						    </div>
						    <div class="hole-item clearfix">
						      <span class="fl">{{$t('message.submit_time')}} :</span>
						      <div class="fl">{{dialogCSVul_data.write_time}}</div>
						    </div>
						    <div class="hole-item clearfix">
						      <span class="fl">{{$t('message.AuditTime')}} :</span>
						      <div class="fl">{{dialogCSVul_data.write_time}}</div>
						    </div>
						    <div style="position: absolute;right: 15px;top: 15px;" v-if="dialogCSVul_data.is_fix == 1 || dialogCSVul_data.is_open == 1"><img src="/static/image/common/xiufuSucess.png" alt=""/></div>
					</div>
					<!--厂商收到漏洞后-->
					<div class="hole-header hole-header1"  v-if="dialogCSVul_data.company_state == 0">
						<div class="hole-headerTop">
							<div class="hole-proleft fl">
								<p>{{$t('message.vulSerialNumber')}}：{{dialogCSVul_data.vulSign}}</p>
								<div class="hole-proleftcen">
									<span>{{$t('message.ToBeClaimed')}}</span>
									<time-down :endTime='endTime' v-if="endTime!=''"></time-down>
								</div>
								<div class="hole-proleftbom ac">
									<el-button type="primary" class="btnshadow wrapBtn" @click="yesClaimBtnNext" :plain="true">{{$t('btn.claim_vul')}}</el-button><el-button class="btnshadow wrapBtnw" @click="NoClaimBtnNext">{{$t('message.IgnoredLoopholes')}}</el-button>
								</div>
							</div>
							<div class="hole-progress fl">
									<div class="hole-proHead" v-if="popup==0">{{$t('message.sevenDayOtherwise')}}</div>
									<div class="hole-proHead" v-if="popup==1">{{$t('message.DVPsecuritysevenDayOtherwise')}}</div>
								  	<el-steps :active="2" align-center>
									<el-step  :title="$t('message.LoopholeReportReceived')" :description="dialogCSVul_data.write_time"></el-step>
									<el-step  :title="$t('message.ToBeClaimed')" description=""></el-step>
									<el-step v-if="dialogCSVul_data.overdue_status != 2" :title="$t('btn.claim_vul')" description=""></el-step>
									<el-step v-if="dialogCSVul_data.overdue_status == 2" :title="$t('btn.claim_vul')+$t('message.BeOverdue')" description=""></el-step>
									<el-step  title="" description=""></el-step>
									<el-step  :title="$t('message.vulFixed')" description=""></el-step>
									</el-steps>
							</div>
						</div>
						<div class="clearfix"></div>
						 <div class="hole-status1">
						 	<div>
						 		<p v-for="val in dialogCSVul_data.log">
						 			<b></b><span v-for="(vals,key) in val">{{key}}&nbsp;&nbsp;&nbsp;<span v-html="vals"></span></span></p>
						 		</p>
						 	</div>
						 </div>
					</div>
					<!--厂商认领漏洞后-->
					<div class="hole-header hole-header2" v-if="dialogCSVul_data.company_state == 1 && dialogCSVul_data.is_fix == 0">
						<div class="hole-headerTop">
							<div class="hole-proleft fl">
								<p>{{$t('message.vulSerialNumber')}}：{{dialogCSVul_data.vulSign}}</p>
								<div class="hole-proleftcen">
									<span>{{$t('message.ConfirmedBugFixed')}}</span>
								</div>
								<div class="hole-proleftbom ac">
									<!-- <el-button type="primary" class="btnshadow wrapBtn" @click="repair(dialogCSVul_data.id)" v-html="repairCon"></el-button> -->
									<el-button type="primary" class="btnshadow wrapBtn" @click="repairProposal = true" v-html="repairCon"></el-button>
								</div>
							</div>
							<div class="hole-progress fl">
								  	<el-steps :active="4" align-center>
									  	<el-step  :title="$t('message.LoopholeReportReceived')" :description="dialogCSVul_data.write_time"></el-step>
									  	<el-step  :title="$t('message.ToBeClaimed')" description=""></el-step>
										<el-step v-if="dialogCSVul_data.overdue_status != 2" :title="$t('btn.claim_vul')" :description="dialogCSVul_data.company_time"></el-step>
									    <el-step v-if="dialogCSVul_data.overdue_status == 2" :title="$t('btn.claim_vul')+$t('message.BeOverdue')" :description="dialogCSVul_data.company_time"></el-step>
									  	<el-step  :title="$t('message.ConfirmedBugFixed')" description=""></el-step>
									  	<el-step  :title="$t('message.vulFixed')" description=""></el-step>
									</el-steps>
							</div>
						</div>
						<div class="clearfix"></div>
						 <div class="hole-status1">
						 	<div>
						 		<p v-for="val in dialogCSVul_data.log">
						 			<b></b><span v-for="(vals,key) in val">{{key}}&nbsp;&nbsp;&nbsp;<span v-html="vals"></span></span></p>
						 		</p>
						 	</div>
						 </div>
					</div>
					<!--DVP认领了漏洞-等待厂商确认修复漏洞-->
					<div class="hole-header hole-header3" v-if="dialogCSVul_data.company_state == 3 && dialogCSVul_data.is_fix == 0 && dialogCSVul_data.dvpCompanyState == 1">
						<div class="hole-headerTop">
							<div class="hole-proleft fl">
								<p>{{$t('message.vulSerialNumber')}}：{{dialogCSVul_data.vulSign}}</p>
								<div class="hole-proleftcen">
									<span>{{$t('message.ConfirmedBugFixed')}}</span>
								</div>
								<div class="hole-proleftbom ac">
									<!-- <el-button type="primary" class="btnshadow wrapBtn" @click="repair(dialogCSVul_data.id)" v-html="repairCon"></el-button> -->
									<el-button type="primary" class="btnshadow wrapBtn" @click="repairProposal = true" v-html="repairCon"></el-button>
								</div>
							</div>
							<div class="hole-progress fl">
								  	<el-steps :active="6" align-center>
									  	<el-step  :title="$t('message.LoopholeReportReceived')" :description="dialogCSVul_data.write_time"></el-step>
									  	<el-step  title=" " description=""></el-step>
										  <el-step  v-if="dialogCSVul_data.overdue_status != 2" :title="$t('message.NotClaimedLoopholes')" :description="dialogCSVul_data.company_time"></el-step>
										  <el-step  v-if="dialogCSVul_data.overdue_status == 2" :title="$t('message.NotClaimedLoopholes')+$t('message.BeOverdue')" :description="dialogCSVul_data.company_time"></el-step>
									  	<el-step  title="" description=""></el-step>
									  	<el-step  :title="$t('btn.claim_vul')" description=""></el-step>
									  	<el-step  :title="$t('message.ConfirmedBugFixed')" description=""></el-step>
									  	<el-step  :title="$t('message.vulFixed')" description=""></el-step>
									</el-steps>
							</div>
						</div>
						<div class="clearfix"></div>
						 <div class="hole-status1">
						 	<div>
						 		<p v-for="val in dialogCSVul_data.log">
						 			<b></b><span v-for="(vals,key) in val">{{key}}&nbsp;&nbsp;&nbsp;<span v-html="vals"></span></span></p>
						 		</p>
						 	</div>
						 </div>
					</div>
					<!--完成-厂商未认领漏洞修复-->
					<div class="hole-header hole-header4" v-if="dialogCSVul_data.company_state == 3 && dialogCSVul_data.is_fix == 1">
						<div class="hole-headerTop">
							<div class="hole-proleft fl">
								<p>{{$t('message.vulSerialNumber')}}：{{dialogCSVul_data.vulSign}}</p>
								<div class="hole-proleftcen">
									<span>{{$t('message.Complete')}}</span>
									<p>{{$t('message.vulFixed')}}</p>
								</div>
							</div>
							<div class="hole-progress fl">
								  	<el-steps :active="4" align-center>
									  	<el-step  :title="$t('message.LoopholeReportReceived')" :description="dialogCSVul_data.write_time"></el-step>
									  	 <el-step  v-if="dialogCSVul_data.overdue_status != 2" :title="$t('message.NotClaimedLoopholes')" :description="dialogCSVul_data.company_time"></el-step>
										  <el-step  v-if="dialogCSVul_data.overdue_status == 2" :title="$t('message.NotClaimedLoopholes')+$t('message.BeOverdue')" :description="dialogCSVul_data.company_time"></el-step>
									  	<el-step  :title="$t('message.ClaimedDVP')" :description="dialogCSVul_data.company_time"></el-step>
									  	<el-step  :title="$t('message.vulFixed')" :description="dialogCSVul_data.fix_time"></el-step>
									</el-steps>
							</div>
						</div>
						<div class="clearfix"></div>
						 <div class="hole-status1">
						 	<div>
						 		<p v-for="val in dialogCSVul_data.log">
						 			<b></b><span v-for="(vals,key) in val">{{key}}&nbsp;&nbsp;&nbsp;<span v-html="vals"></span></span></p>
						 		</p>
						 	</div>
						 </div>
					</div>
					<!--完成-厂商认领漏洞修复-->
					<div class="hole-header hole-header5" v-if="dialogCSVul_data.company_state == 1 && dialogCSVul_data.is_fix == 1">
						<div class="hole-headerTop">
							<div class="hole-proleft fl">
								<p>{{$t('message.vulSerialNumber')}}：{{dialogCSVul_data.vulSign}}</p>
								<div class="hole-proleftcen">
									<span>{{$t('message.Complete')}}</span>
									<p>{{$t('message.vulFixed')}}</p>
								</div>
							</div>
							<div class="hole-progress fl">
								  	<el-steps :active="3" align-center>
									  	<el-step  :title="$t('message.LoopholeReportReceived')" :description="dialogCSVul_data.write_time"></el-step>
										  <el-step v-if="dialogCSVul_data.overdue_status != 2" :title="$t('btn.claim_vul')" :description="dialogCSVul_data.company_time"></el-step>
										  <el-step v-if="dialogCSVul_data.overdue_status == 2" :title="$t('btn.claim_vul')+$t('message.BeOverdue')" :description="dialogCSVul_data.company_time"></el-step>
									  	<el-step  :title="$t('message.vulFixed')" :description="dialogCSVul_data.fix_time"></el-step>
									</el-steps>
							</div>
						</div>
						<div class="clearfix"></div>
						 <div class="hole-status1">
						 	<div>
						 		<p v-for="val in dialogCSVul_data.log">
						 			<b></b><span v-for="(vals,key) in val">{{key}}&nbsp;&nbsp;&nbsp;<span v-html="vals"></span></span></p>
						 		</p>
						 	</div>
						 </div>
					</div>
							<!--完成-厂商忽略漏洞后 - 新版-->
					<div class="hole-header hole-header6" v-if="dialogCSVul_data.company_state == 2 ">
						<div class="hole-headerTop">
							<div class="hole-proleft fl">
								<p>{{$t('message.vulSerialNumber')}}：{{dialogCSVul_data.vulSign}}</p>
								<div class="hole-proleftcen">
									<span>{{$t('message.Complete')}}</span>
									<p>{{$t('message.IgnoredLoopholes')}}</p>
								</div>
							</div>
							<div class="hole-progress fl">
								  	<el-steps :active="3" align-center>
									  	<el-step  :title="$t('message.LoopholeReportReceived')" :description="dialogCSVul_data.write_time"></el-step>
										  <el-step v-if="dialogCSVul_data.overdue_status != 2" :title="$t('message.IgnoredLoopholes')" :description="dialogCSVul_data.company_time"></el-step>
										  <el-step v-if="dialogCSVul_data.overdue_status == 2" :title="$t('message.IgnoredLoopholes')+$t('message.BeOverdue')" :description="dialogCSVul_data.company_time"></el-step>
									  	<!-- <el-step  :title="$t('message.ClaimedDVP')" :description="dialogCSVul_data.company_time"></el-step> -->
									</el-steps>
							</div>
						</div>
						<div class="clearfix"></div>
						 <div class="hole-status1">
						 	<div>
						 		<p v-for="val in dialogCSVul_data.log">
						 			<b></b><span v-for="(vals,key) in val">{{key}}&nbsp;&nbsp;&nbsp;<span v-html="vals"></span></span></p>
						 		</p>
						 	</div>
						 </div>
					</div>
					<!--完成-厂商忽略漏洞后-->
					<div class="hole-header hole-header6" v-if="dialogCSVul_data.company_state == 3  && dialogCSVul_data.is_fix == 0 && dialogCSVul_data.dvpCompanyState == 0">
						<div class="hole-headerTop">
							<div class="hole-proleft fl">
								<p>{{$t('message.vulSerialNumber')}}：{{dialogCSVul_data.vulSign}}</p>
								<div class="hole-proleftcen">
									<span>{{$t('message.Complete')}}</span>
									<p>{{$t('message.IgnoredLoopholes')}}</p>
								</div>
							</div>
							<div class="hole-progress fl">
								  	<el-steps :active="3" align-center>
									  	<el-step  :title="$t('message.LoopholeReportReceived')" :description="dialogCSVul_data.write_time"></el-step>
										  <el-step v-if="dialogCSVul_data.overdue_status != 2" :title="$t('message.IgnoredLoopholes')" :description="dialogCSVul_data.company_time"></el-step>
										  <el-step v-if="dialogCSVul_data.overdue_status == 2" :title="$t('message.IgnoredLoopholes')+$t('message.BeOverdue')" :description="dialogCSVul_data.company_time"></el-step>
									  	<el-step  :title="$t('message.ClaimedDVP')" :description="dialogCSVul_data.company_time"></el-step>
									</el-steps>
							</div>
						</div>
						<div class="clearfix"></div>
						 <div class="hole-status1">
						 	<div>
						 		<p v-for="val in dialogCSVul_data.log">
						 			<b></b><span v-for="(vals,key) in val">{{key}}&nbsp;&nbsp;&nbsp;<span v-html="vals"></span></span></p>
						 		</p>
						 	</div>
						 </div>
					</div>
					<!--厂商默认7天认领漏洞-等待厂商确认修复漏洞-->
					<div class="hole-header hole-header3" v-if="dialogCSVul_data.company_state == 5 && dialogCSVul_data.is_fix == 0">
						<div class="hole-headerTop">
							<div class="hole-proleft fl">
								<p>{{$t('message.vulSerialNumber')}}：{{dialogCSVul_data.vulSign}}</p>
								<div class="hole-proleftcen">
									<span>{{$t('message.ConfirmedBugFixed')}}</span>
								</div>
								<div class="hole-proleftbom ac">
									<el-button type="primary" class="btnshadow wrapBtn"  @click="repairProposal = true" v-html="repairCon"></el-button>
									<!-- <el-button type="primary" class="btnshadow wrapBtn" @click="repair(dialogCSVul_data.id)" v-html="repairCon"></el-button> -->
								</div>
							</div>
							<div class="hole-progress fl">
								  	<el-steps :active="6" align-center>
									  	<el-step  :title="$t('message.LoopholeReportReceived')" :description="dialogCSVul_data.write_time"></el-step>
									  	<el-step  title=" " description=""></el-step> 
									   <el-step  v-if="dialogCSVul_data.overdue_status != 2" :title="$t('message.NotClaimedLoopholes')" :description="dialogCSVul_data.company_time"></el-step>
										  <el-step  v-if="dialogCSVul_data.overdue_status == 2" :title="$t('message.NotClaimedLoopholes')+$t('message.BeOverdue')" :description="dialogCSVul_data.company_time"></el-step>
									  	<el-step  title="" description=""></el-step>
									  	<el-step  :title="$t('btn.claim_vul')" description=""></el-step>
									  	<el-step  :title="$t('message.ConfirmedBugFixed')" description=""></el-step>
									  	<el-step  :title="$t('message.vulFixed')" description=""></el-step>
									</el-steps>
							</div>
						</div>
						<div class="clearfix"></div>
						 <div class="hole-status1">
						 	<div>
						 		<p v-for="val in dialogCSVul_data.log">
						 			<b></b><span v-for="(vals,key) in val">{{key}}&nbsp;&nbsp;&nbsp;<span v-html="vals"></span></span></p>
						 		</p>
						 	</div>
						 </div>
					</div>
					
					<!--厂商默认7天认领漏洞-厂商已经确认修复漏洞-->
					<div class="hole-header hole-header5" v-if="dialogCSVul_data.company_state == 5 && dialogCSVul_data.is_fix == 1">
						<div class="hole-headerTop">
							<div class="hole-proleft fl">
								<p>{{$t('message.vulSerialNumber')}}：{{dialogCSVul_data.vulSign}}</p>
								<div class="hole-proleftcen">
									<span>{{$t('message.Complete')}}</span>
									<p>{{$t('message.vulFixed')}}</p>
								</div>
							</div>
							<div class="hole-progress fl">
								  	<el-steps :active="4" align-center>
									  	<el-step  :title="$t('message.LoopholeReportReceived')" :description="dialogCSVul_data.write_time"></el-step>
								          <el-step  v-if="dialogCSVul_data.overdue_status != 2" :title="$t('message.NotClaimedLoopholes')" :description="dialogCSVul_data.company_time"></el-step>
										  <el-step  v-if="dialogCSVul_data.overdue_status == 2" :title="$t('message.NotClaimedLoopholes')+$t('message.BeOverdue')" :description="dialogCSVul_data.company_time"></el-step>
									  	<el-step  :title="$t('btn.claim_vul')" :description="dialogCSVul_data.company_time"></el-step>
									  	<el-step  :title="$t('message.vulFixed')" :description="dialogCSVul_data.fix_time"></el-step>
									</el-steps>
							</div>
						</div>
						<div class="clearfix"></div>
						 <div class="hole-status1">
						 	<div>
						 		<p v-for="val in dialogCSVul_data.log">
						 			<b></b><span v-for="(vals,key) in val">{{key}}&nbsp;&nbsp;&nbsp;<span v-html="vals"></span></span></p>
						 		</p>
						 	</div>
						 </div>
					</div>
					
					<!--余额不足无法默认认领-->
					<div class="hole-header hole-header7" v-if="dialogCSVul_data.company_state == 6">
						<div class="hole-headerTop">
							<div class="hole-proleft fl">
								<p>{{$t('message.vulSerialNumber')}}：{{dialogCSVul_data.vulSign}}</p>
								<div class="hole-proleftcen">
									<span>{{$t('message.ToBeClaimed')}}</span>
								</div>
								<div class="hole-proleftbom ac">
									<el-button type="primary" class="btnshadow wrapBtn" @click="yesClaimBtnNext" :plain="true">{{$t('btn.claim_vul')}}</el-button><el-button class="btnshadow wrapBtnw" @click="NoClaimBtnNext">{{$t('message.IgnoredLoopholes')}}</el-button>
								</div>
							</div>
							<div class="hole-progress fl">
									<div class="hole-proHead" v-if="popup==0">{{$t('message.sevenDayOtherwise')}}</div>
									<div class="hole-proHead" v-if="popup==1">{{$t('message.DVPsecuritysevenDayOtherwise')}}</div>
								  	<el-steps :active="4" align-center>
									  	<el-step  :title="$t('message.LoopholeReportReceived')" :description="dialogCSVul_data.write_time"></el-step>
									  	<el-step  title="" description=""></el-step>
									  	<el-step  v-if="dialogCSVul_data.overdue_status != 2" :title="$t('message.NotClaimedLoopholes')" :description="dialogCSVul_data.company_time"></el-step>
										  <el-step  v-if="dialogCSVul_data.overdue_status == 2" :title="$t('message.NotClaimedLoopholes')+$t('message.BeOverdue')" :description="dialogCSVul_data.company_time"></el-step>
									  	<el-step  :title="$t('message.ToBeClaimed')" description=""></el-step>
									  	<el-step  :title="$t('btn.claim_vul')" description=""></el-step>
									  	<el-step  title="" description=""></el-step>
									  	<el-step  :title="$t('message.vulFixed')" description=""></el-step>
									</el-steps>
							</div>
						</div>
						<div class="clearfix"></div>
						 <div class="hole-status1">
						 	<div>
						 		<p v-for="val in dialogCSVul_data.log">
						 			<b></b><span v-for="(vals,key) in val">{{key}}&nbsp;&nbsp;&nbsp;<span v-html="vals"></span></span></p>
						 		</p>
						 	</div>
						 </div>
					</div>
						
					<!----------------------------------------漏洞描述--------------------------------------------->
					<div class="hole-detailed" style="padding-bottom: 0 !important;">
						<p style="line-height: 50px;">{{$t('message.vulnerabilityDescription')}}</p>
				    	<div class="clearfix simditor" style="border: none;">
				    	 	<div class="simditor-body" v-html="dialogCSVul_data.description" style="padding-bottom: 80px;"></div>			    		
				   			<div class="zzcBtn" v-if="dialogCSVul_data.watchDesc==0"><el-button  type="primary" class="btnshadow wrapBtn" @click="dialogDes">{{$t('message.viewAll')}}</el-button></div>
				    	</div>
					
					</div>
					<div class="hole-detailed" v-if="dialogCSVul_data.video">
						<p>{{$t('message.VulVideo')}}</p>
						<div class="clearfix simditor" style="border: none;width: 100%;">
							<div class="vuldescshead">
									<video 
											style="width: 680px;height: 300px;"
											v-bind:src="dialogCSVul_data.video"
											controls="controls">
								</video>     		
							</div>
						</div>
					
					</div>
					<div class="hole-detailed" v-if="dialogCSVul_data.is_open == 1 && dialogCSVul_data.repair">
							 <p>修复建议</p>
							 <div class="clearfix simditor" style="border: none;width: 100%;">
						      <div class="fl simditor-body" style="" v-html="dialogCSVul_data.repair"></div>
						    </div>
					</div>
				 	<!-- 确认已修复提示 -->
					<el-dialog
						  :title="$t('message.Confirmedfixed')"
						  :visible.sync="dialogApply"
						  class="dialogwdetailC"
						  :show-close = false
			 			  :close-on-click-modal = false
						  width="500px">
						  	<div class="dialogTXCon">
							    <!--<img src="static/image/chenggong.png" alt="" />-->
							    <p class="pop-up-text">{{$t('message.fixedsuccessfully')}}</p> 
							    <el-button type="primary" class="btnshadow wrapBtn" @click="VulRLpaySucessBack">{{$t('message.Confirm')}}</el-button>
							</div>
					</el-dialog>
					<el-dialog
						  title=""
						  :visible.sync="dialogVulRLVul"
						  class="dialogwdetailC"
			 			  :close-on-click-modal = false
						  width="500px">
						  	<div class="dialogTXCon">
							    <p class="pop-up-text" v-if="dialogCSVul_data.watchBtn==1" style="text-align: left !important;line-height: 18px;">{{$t('message.claimLoopholeDetailedbugReport')}}<br />{{$t('message.clickClaimLoopholeORDVPclaimsfree')}}</p>
							    <p class="pop-up-text" v-if="dialogCSVul_data.watchBtn==0">								    	
							    	<span v-if="dialogCSVul_data.company_state == 3  && dialogCSVul_data.is_fix == 0 && dialogCSVul_data.dvpCompanyState == 0">{{$t('message.ignoreLoopholeNOTcheck')}}</span>
							    	<span v-if="dialogCSVul_data.company_state == 6 || dialogCSVul_data.company_state == 0">{{$t('message.claimLoopholeDetailedbugReport')}}</span>
							    </p>
							    <div class="ConFoot" v-if="dialogCSVul_data.watchBtn==1"><el-button type="primary"  class="btnshadow wrapBtn" @click="yesClaimBtnNext">{{$t('btn.claim_vul')}}</el-button></div>
							</div>
					</el-dialog>
					<!-- 认领漏洞 -->
					<el-dialog
						  title=""
						  :visible.sync="dialogVulRL"
						  class="dialogwdetailC"
			 			  :close-on-click-modal = false
						  width="500px">
						  	<div class="dialogTXCon">
							    <p>{{$t('btn.claim_vul')}}</p>
							    <p class="pop-up-text">{{$t('message.claimingLoopholeWhitehats')}}<br />{{$t('message.bountyProblemContactCustomerSupport')}}</p>
							    <ul>
							    	<li>{{$t('message.vulreward')}}：
							        	<span v-if="dialogCSVul_data.price == 0 && dialogCSVul_data.dvp == 0">-</span>
							        	<span v-if="dialogCSVul_data.price > 0  && dialogCSVul_data.dvp == 0"> {{dialogCSVul_data.price}} Ether</span>		        	
							        	<span v-if="dialogCSVul_data.price == 0 && dialogCSVul_data.dvp > 0"> {{dialogCSVul_data.dvp}} DVP</span>
							        	<span v-if="dialogCSVul_data.price > 0 && dialogCSVul_data.dvp > 0">{{dialogCSVul_data.price}} Ether</span>
							    	</li>
							    	<li>{{$t('message.Miner')}}：{{dialogCSVul_data.comPrice}}Ether <span class="fr">漏洞奖励的10%</span></li>
							    </ul>
							    <div class="ConFoot">{{$t('message.alltotal')}} {{dialogCSVul_data.totalPrice}}Ether<el-button type="primary"  class="btnshadow wrapBtn" @click="VulRLnext">下一步</el-button></div>
							</div>
					</el-dialog>
					<!-- 认领漏洞支付 -->
					<el-dialog
						  title="支付"
						  :visible.sync="dialogVulRLpay"
						  class="dialogwdetailC"
			 			  :close-on-click-modal = false
						  width="500px">
						  	<div class="dialogTXCon">
						  		<p style="font-size: 18px;margin:0 0 30px 0;">{{$t('message.alltotal')}} {{dialogCSVul_data.totalPrice}}Ether</p>
						  		<div style="text-align: left;">
						  			<p>{{$t('message.PaymentMethods')}}：</p>
						  			 <el-radio-group v-model="radioPay">
						  			 	<el-radio :label="1" v-if="dialogCSVul_data.balance>=dialogCSVul_data.totalPrice">{{$t('message.SecurityDeposit')}}，{{$t('message.Balance')}} {{dialogCSVul_data.balance}} Ether</el-radio>
									    <el-radio :label="1" disabled  v-if="dialogCSVul_data.balance<dialogCSVul_data.totalPrice">{{$t('message.SecurityDeposit')}}，{{$t('message.Remaining')}}  {{dialogCSVul_data.balance}} Ether，余额不足</el-radio>
									    <el-radio :label="2">{{$t('message.Recharge')}}</el-radio>
									</el-radio-group>
						  		</div>

							    <div class="ConFoot"><el-button type="primary"  class="btnshadow wrapBtn"  @click="yesClaimBtn(dialogCSVul_data.id)"  :plain="true"  style="background: #2196f3 !important;"   :disabled="isDisable">支付</el-button></div>
							</div>
					</el-dialog>
					<!-- 认领漏洞成功 -->
					<el-dialog
						  title="认领成功"
						  :visible.sync="VulRLpaySucess"
						  class="dialogwdetailC"
						   :show-close = false
			 			  :close-on-click-modal = false
						  width="500px">
						  	<div class="dialogTXCon">
						  		<p style="margin-bottom: 30px;">{{$t('message.claimedsuccessfully')}}</p>
						  		<el-button type="primary"  class="btnshadow wrapBtn" @click="VulRLpaySucessBack">{{$t('message.Confirm')}}</el-button>
							</div>
					</el-dialog>
					<!-- 忽略漏洞 -->
					<el-dialog
						  :title="$t('message.IgnoredLoopholes')"
						  :visible.sync="VulRLignore"
						  class="dialogwdetailC"
			 			  :close-on-click-modal = false
						  width="600px">
						  	<div class="dialogTXCon">
						  		<p style="margin-bottom: 30px;">{{$t('message.ignoreLoopholeDVPaswell')}}</p>
						  		<el-select @change="vullist_select" v-model="value" :placeholder="$t('message.selectignoreLoopholereason')" style="width: 100%">
									<el-option
										v-for="item in options"
										:key="item.id"
										:label="item.label"
										:value="item.label">
									</el-option>
								</el-select>
								<div class="ConFoot"><el-button type="primary"  class="btnshadow wrapBtn" @click="noClaim(dialogCSVul_data.id)"  :plain="true">{{$t('message.Confirm')}}</el-button></div>
							</div>
					</el-dialog>
					<!--修复建议-->
					<el-dialog
					  title=""
					  :visible.sync="repairProposal"
					  width="700px">
					 <div style="width: 700px;text-align: center;">
						    <div class="apply-safeguards-pop-up common-pop-up">
						      <p class="apply-title" style="margin-bottom: 30px;">修复建议
						      </p>
							  <textarea name="" id="" cols="20" rows="10" style="width: 80%;margin-bottom: 10px;" v-model="repair_proposal" placeholder="请输入200字以内"></textarea>
							  <div style="clear: both;"></div>
						      <el-button type="primary"  @click="repair(dialogCSVul_data.id)"  style="background: #2196f3 !important;color: #ffffff !important;">确认修复</el-button>
						    </div>
					</div>
				</el-dialog>
				<!--充值弹窗-->

					<el-dialog
					  title=""
					  :visible.sync="dialogVisibleCZ"
					  width="700px">
					 <div style="width: 700px;text-align: center;">
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
								</el-tooltip>
						      </p>
						      <p class="apply-num" style="margin-bottom: 28px;">{{$t('message.alltotal')}} {{dialogCSVul_data.totalPrice}} Ether
							        <el-tooltip placement="bottom">
									  <div slot="content">
									  		<div>
									  			<ul>
											    	<li>{{$t('message.vulreward')}}：
											    	<span v-if="dialogCSVul_data.state == 0"> -</span>
										        	<span v-if="dialogCSVul_data.state == 2"> -</span>
										        	<span v-if="dialogCSVul_data.state == 3"> -</span>
										        	<span v-if="dialogCSVul_data.state == 1 && dialogCSVul_data.price != 0 && dialogCSVul_data.dvp == 0"> {{dialogCSVul_data.price}} Ether</span>
										        	<span v-if="dialogCSVul_data.state == 1 && dialogCSVul_data.price == 0 && dialogCSVul_data.dvp == 0">-</span>
										        	<span v-if="dialogCSVul_data.state == 1 && dialogCSVul_data.price == 0 && dialogCSVul_data.dvp != 0"> {{dialogCSVul_data.dvp}} DVP</span>
										        	<span v-if="dialogCSVul_data.state == 1 && dialogCSVul_data.price != 0 && dialogCSVul_data.dvp != 0"> {{dialogCSVul_data.price}} Ether</span>
											    	</li>
											    	<li>{{$t('message.Miner')}}：{{dialogCSVul_data.comPrice}}Ether <b style="width: 20px;display: inline-block;"></b><span class="fr">漏洞奖励的10%</span></li>
											   </ul>
							      			</div>
									  	</div>
									  <el-button type="text"><span class="ketubbah-btn"><img src="/static/image/home/bottom.png"></span></el-button>
									</el-tooltip>
						      </p>
						      <div class="apply-address">{{$t('message.PaymentAddress')}}：0xd5bAA94e09C4a1C6613A35c485604F507b368517</div>
						      <div class="apply-scan">
						        <img src="/static/image/eth_code.png">
						        <p>{{$t('message.walletQRcode_makepayment')}}</p>
						      </div>
						      <input type="text" :placeholder="$t('message.PleaseEnterTxHash')"  id="order" class="form-control-inp" style="width: 80%;margin-bottom: 10px;" v-model="orderPrice">
						      <div style="clear: both;"></div>
						      <div v-show="message"  class="red">{{msgErr}}</div>
						      <el-button type="primary" @click="rewardBtn" :plain="true"  style="background: #2196f3 !important;color: #ffffff !important;">{{$t('message.PaymentCompleted')}}</el-button>
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
					<!-- 赏金计划 -->
					<el-dialog
					  title=""
					  :visible.sync="BountyPlan"
					  class="dialogwdetailC"
					  :close-on-click-modal = false
					  width="700px">
					  	<div class="dialogTXCon">
					  		<p style="text-align: left;font-size: 16px;margin-bottom: 5px;">{{$t('message.depositBountyClaimingLoophole')}}</p>
					  		<p class="sjjhbox">{{$t('message.rewardDVPwhitehatSubmittedClaimingLoophole')}}</p>
					  		<div style="text-align: left;">
					  			<p style="font-size: 16px;">{{$t('message.WaysClaimLoopholes')}}：</p>
					  			 <el-radio-group v-model="radioPay" @change="vulchange">
					  			 	<el-radio :label="1">{{$t('message.ParticipatingBountyProgramfree')}}<router-link to="/Bounty" >[{{$t('message.aboutBounty')}}]</router-link></el-radio>
								    <el-radio :label="2">{{$t('message.BoParticipatingBountyProgramprocessing')}}</el-radio>
								</el-radio-group>
					  		</div>
						    <div class="ConFoot">
						    	<el-button type="primary" class="common-btn bluebg btnshadow" v-if="BountyPlanCon == '加入赏金计划'"><router-link to="/combox/company/comReward" >{{BountyPlanCon}}</router-link></el-button>
						    	<el-button type="primary" class="common-btn btnshadow" v-if="BountyPlanCon == '下一步'" @click="BountyPlanBtn">{{BountyPlanCon}}</el-button>
						    </div>
						</div>
				    </el-dialog>
		</div>

</template>

<script>
	import timeDown from '@/components/info/timeDown'
	export default {
		name: 'wrapdetailComp',
		components:{timeDown},
		data(){
			return{
				BountyPlanCon:'加入赏金计划',
				BountyPlan:false,
				radioPay:1,
				repairCon:"修复漏洞",
				VulRLignore: false,
				ApplyBthshow: true,
				dialogApply: false,
				dialogVulRLVul:false,
				dialogVulRL: false,
				dialogVulRLpay:false,
				VulRLpaySucess: false,
				VulRLpayDBJSucess: false,
				isDisable: false,
				orderPrice:'',
				dialogVisibleCZ:false,
				repairProposal:false,
				repair_proposal:'',
				dialogCSVul_data:[],
				msgErr:'',
				message:'',
				options: [{
				          id: 'all',
				          label: '请选择忽略漏的理由'
				        }, {
				          id: '0',
				          label: '漏洞已修复'
				        }, {
				          id: '1',
				          label: '漏洞不存在'
				        }, {
				          id: '2',
				          label: '漏洞重复提交'
			       	   }, {
				          id: '3',
				          label: '不属于漏洞'
			        }],
				value: '',
				endTime:'',
				popup:'',
				lang: 'zh'

			}
		},
		methods: {
			initData(){
				var _this=this
				let id = this.$route.query.id
				this.lang=localStorage.getItem('locale')
				 if(this.lang=='zh'){
				 	this.$ajax.CSvulInfo({'id':id,'language':'zh_CN'})
					.then(res => {
						if(res.errcode===1){
							_this.endTime=res.data.info.diffTIme
							_this.dialogCSVul_data = res.data.info
							_this.popup = res.data.info.comPublish
							console.log(_this.popup)
						}
					})
					this.repairCon = "修复漏洞"
					this.	options=[{
				          id: 'all',
				          label: '请选择忽略漏的理由'
				        }, {
				          id: '0',
				          label: '漏洞已修复'
				        }, {
				          id: '1',
				          label: '漏洞不存在'
				        }, {
				          id: '2',
				          label: '漏洞重复提交'
			       	   }, {
				          id: '3',
				          label: '不属于漏洞'
			        }]
				 }else if(this.lang=='en' || this.lang==null || this.lang=='' || this.lang=='ko'){
				 	this.$ajax.CSvulInfo({'id':id,'language':'zh_CN'})
					.then(res => {
						if(res.errcode===1){
							_this.endTime=res.data.info.diffTIme
							_this.dialogCSVul_data = res.data.info
							_this.popup = res.data.info.comPublish
							console.log(_this.popup)
						}
					})
					this.repairCon = "Loopholes to Be Fixed"
					this.	options=[{
				          id: 'all',
				          label: 'Please select the reason of ignoring the loophole'
				        }, {
				          id: '0',
				          label: 'Fixed'
				        }, {
				          id: '1',
				          label: 'The loophole cannot be verified'
				        }, {
				          id: '2',
				          label: 'The loophole was submitted repeatedly'
			       	   }, {
				          id: '3',
				          label: 'Not a loophole'
			        }]
				 }
			},
			dialogDes(){
				this.dialogVulRLVul = true
			},
			vulchange(id){
		      		if(id==1){
				  		this.BountyPlanCon = '加入赏金计划'
			  		}else if(id==2){
			  			this.BountyPlanCon ='下一步'
			  		}
		    },
		    BountyPlanBtn(){
				this.BountyPlan=false
				this.dialogVulRLpay = true
			},
			vullist_select(id,vul){
				console.log(this.value)
			},
			VulRLpayDBJSucsBtn(){
				this.VulRLpayDBJSucess =false
			},
			repair(id){
				var _this = this;
				let MyVulData={
					  "id": id,
					  "repair_proposal": this.repair_proposal,
				}
				if(this.repair_proposal){
					if(this.repair_proposal.length > 200){
						alert('请输入200字以内');
						return false;
					}
				}
				this.$ajax.CSvulSureFix(MyVulData)
				.then(res => {
					if(res.errcode == 1){			   
						_this.dialogApply = true
						_this.dialogCSVul_data.company_state=1
						_this.dialogCSVul_data.is_fix=1
						 if(this.lang=='zh'){
						 	 _this.repairCon='已修复'
						 }else if(this.lang=='en' || this.lang==null || this.lang=='' || this.lang=='ko'){
						 	 _this.repairCon='Fixed'
						 }		
					}else{
						this.$message.error(res.errmsg)
					}

				})
			},
			NoClaimBtnNext(){
				this.VulRLignore = true
			},
			yesClaimBtnNext(){
				//认领漏洞
				if(this.popup==0){
					this.BountyPlan=true
				}else if(this.popup==1){
					this.dialogVulRL = true
				}
			},
			VulRLnext(){
				this.dialogVulRL = false
				this.dialogVulRLpay = true
			},
			/*认领支付*/
			yesClaimBtn(id){
				this.isDisable = true
		        setTimeout(() => {
		          this.isDisable = false
		        }, 1000)
				var _this = this;
				let MyVulData={
		    	  	"id": id,
		    	  	'type':1
		    	}
				if(this.radioPay ==1){
					this.$ajax.CSvulClaim(MyVulData)
					.then(res => {
						if(res.errcode == 1){
							_this.dialogVulRLpay= false
							_this.VulRLpaySucess = true
						}else{
							this.$message.error(res.errmsg);
						}

					})
				}else if(this.radioPay ==2){
					this.dialogVulRLpay= false
					this.dialogVisibleCZ = true
				}

			},
			/*不认领*/
			noClaim(id){
				console.log(id)
				var _this = this;
				let MyVulData={
		    	  	"id": id,
		    	  	'reason': this.value,
		    	  	'type': 0
		    	}
				this.$ajax.CSvulClaim(MyVulData)
				.then(res => {
					if(res.errcode == 1){
						this.VulRLignore=false
						var ids=this.$route.query.id
						this.$router.push({ path:"/combox/wrapdetailComp?id="+ids})
						window.location.reload()
					}else{
						this.$message.error(res.errmsg);
					}

				})
			},
			VulRLpaySucessBack(){
				this.dialogApply=false
				var ids=this.$route.query.id
				this.$router.push({ path:"/combox/wrapdetailComp?id="+ids})
				window.location.reload()
			},
			//担保金充值
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
							_this.VulRLpayDBJSucess = true
						}else{
							this.$message.error(res.errmsg);
						}
					})
				},
		},
	     created:function(){
		   	this.initData();
		}
	  }
</script>

<style>
	.simditor{
		width: 100%;
		position: relative;
		display: inline-block;
	}
	.sjjhbox{
		text-align:left;margin: 0 60px 20px 0;padding:0 0 20px 0;border-bottom: 1px solid #E2EAF1;font-size: 14px;line-height: 18px;
	}
	.hole-item .simditor-body span{
		display: none;
	}
	.zzcBtn{
		width: 100%;
		padding: 120px 0 0 0;
		display: block;
		box-sizing: border-box;
		text-align: center;
		height: 200px;
		z-index: 99;
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		background-image: -webkit-gradient(linear,left top, left bottom,from(rgba(225,225,225,0)),color-stop(50%, #fff));
		/*background-image: linear-gradient(-180deg,rgba(242,244,245,0) 0%,#f2f4f5 70%);*/
	}
	.dialogwdetailC{
		text-align: center;
	}
	.dialogwdetailC .el-radio{
		margin-top: 20px;
		width: 100%;
	}
	.dialogwdetailC ul li{
		text-align: left;
		line-height: 34px;
		border-bottom: 1px solid #E2EAF1;
	}
	.dialogwdetailC .ConFoot{
		text-align: right;
		margin-top: 30px;
	}
	.dialogwdetailC .ConFoot .el-button{
		margin-left: 20px;
	}
	.dialogwdetailC .pop-up-text{
		margin-bottom: 30px;
		font-size: 12px;
	}
	.hole-proleftbom .el-button:nth-of-type(2):hover{
		background: #409EFF;
		color: #ffffff;
	}
	.hole-detailed-wrapcomp .el-step__title.is-process{
		color: #8E9EAE !important;
	}
	.hole-detailed-wrapcomp .hole-header {
		max-width: 1200px
	}
	.hole-detailed-wrapcomp .hole-header .el-step__line-inner{
		border-style: dashed !important;
	}
	.hole-detailed-wrapcomp .hole-header2 .progress_cpytime,.hole-header1 .progress_cpytime{
		margin-left: 600px;
		margin-bottom: -10px;
	}
	.hole-detailed-wrapcomp .hole-header3 .progress_cpytime{
		margin-left: 400px;
		margin-bottom: 10px;
	}
	.hole-detailed-wrapcomp .hole-header3 .progress_cpytime span{
		color: #2496f3;
		font-size: 14px;
	}
	.hole-detailed-wrapcomp .hole-header1 .hole-proleftcen span{
		margin-top: 30px;
	}
	.hole-detailed-wrapcomp .hole-header4 .hole-proleftcen span,.hole-detailed-wrapcomp .hole-header5 .hole-proleftcen span,.hole-detailed-wrapcomp .hole-header6 .hole-proleftcen span{
		margin-top: 60px;
		margin-bottom: 6px;
	}
	.hole-detailed-wrapcomp .hole-proleftcen p{
		font-size: 14px;
	}
	.hole-detailed-wrapcomp .hole-proHead{
		position: absolute;
		top: 0;
		color: #8E9EAE;
	}
	.hole-detailed-wrapcomp .hole-status1{
		background: #f5f9fc;
		margin: 20px;
		padding: 20px;
		box-sizing: border-box;
	}
	.hole-detailed-wrapcomp .hole-status1>div{
		border-left: 1px dashed #000000;
		padding: 0 20px;
	}
	.hole-detailed-wrapcomp .hole-status1 p{
		line-height: 20px;
	}
	.hole-detailed-wrapcomp .hole-status1 b{
		width: 6px;
		height: 6px;
		background: #2196f3;
		display: inline-block;
		border-radius: 3px;
		margin-left: -23px;
		margin-right: 20px;
	}
	.hole-detailed-wrapcomp .hole-status1>span{
		margin-right: 30px;
	}
	.hole-detailed-wrapcomp .hole-progress{
		width: 74%;
		border-left: 1px solid #f5f9fc;
		padding: 60px 20px 40px 20px;
		box-sizing: border-box;
		position: relative;
	}
	.hole-detailed-wrapcomp .hole-progress .el-step__icon-inner{
		display: none;
	}
	.hole-detailed-wrapcomp .hole-progress .el-step__head.is-wait .el-step__icon{
		background: #8E9EAE !important;
	}
	.hole-detailed-wrapcomp .hole-progress 	.el-step__head.is-process .el-step__icon{
		background: #8E9EAE !important;
	}
	.hole-detailed-wrapcomp .hole-progress 	.el-step__head.is-finish .el-step__icon{
		background: #2196f3 !important;
	}
	.hole-detailed-wrapcomp .hole-header1 .hole-progress .el-step.is-horizontal:nth-child(even) .el-step__head .el-step__icon.is-text{
		background: #409EFF;
	    width: 12px;
	    height: 12px;
	    font-size: 10px;
	    top: 4px;
	}
	.hole-detailed-wrapcomp .hole-header1 .hole-progress .el-step.is-horizontal:nth-child(even) .el-step__main .el-step__title{
		font-size: 14px;
		margin-top: -50px;
	}
	.hole-detailed-wrapcomp .hole-header1 .hole-progress .el-step.is-horizontal:nth-child(4) .el-step__head .el-step__icon-inner{
		display: none;
	}
	.hole-detailed-wrapcomp .hole-header1 .hole-progress .el-step.is-horizontal:nth-child(4) .el-step__head .el-step__icon.is-text{
		display: none;
	}
	.hole-detailed-wrapcomp .hole-header7 .hole-progress .el-step.is-horizontal:nth-child(even) .el-step__head .el-step__icon.is-text{
		background: #409EFF;
	    width: 12px;
	    height: 12px;
	    font-size: 10px;
	    top: 4px;
	}
	.hole-detailed-wrapcomp .hole-header7 .hole-progress .el-step.is-horizontal:nth-child(even) .el-step__main .el-step__title{
		font-size: 14px;
		margin-top: -50px;
	}
	.hole-detailed-wrapcomp .hole-header7 .hole-progress .el-step.is-horizontal:nth-child(2) .el-step__head .el-step__icon-inner{
		display: none;
	}
	.hole-detailed-wrapcomp .hole-header7 .hole-progress .el-step.is-horizontal:nth-child(2) .el-step__head .el-step__icon.is-text{
		display: none;
	}
	.hole-detailed-wrapcomp .hole-header7 .hole-progress .el-step.is-horizontal:nth-child(6) .el-step__head .el-step__icon-inner{
		display: none;
	}
	.hole-detailed-wrapcomp .hole-header7 .hole-progress .el-step.is-horizontal:nth-child(6) .el-step__head .el-step__icon.is-text{
		display: none;
	}
	.hole-detailed-wrapcomp .hole-header2 .hole-progress .el-step.is-horizontal:nth-child(even) .el-step__head .el-step__icon.is-text{
		background: #409EFF;
	    width: 12px;
	    height: 12px;
	    font-size: 10px;
	    top: 4px;
	}
	.hole-detailed-wrapcomp .hole-header2 .hole-progress .el-step.is-horizontal:nth-child(even) .el-step__main .el-step__title{
		font-size: 14px;
		margin-top: -50px;
	}
	.hole-detailed-wrapcomp .hole-header2 .hole-progress .el-step.is-horizontal:nth-child(2) .el-step__head .el-step__icon.is-text{
		display: none;
	}
	.hole-detailed-wrapcomp .hole-header2 .hole-progress .el-step.is-horizontal:nth-child(2) .el-step__main .el-step__title{
		display: none;
	}

	.hole-detailed-wrapcomp .hole-header3 .hole-progress .el-step.is-horizontal:nth-child(even) .el-step__main .el-step__title{
		font-size: 14px;
		margin-top: -50px;
	}
	.hole-detailed-wrapcomp .hole-header3 .hole-progress .el-step.is-horizontal:nth-child(2) .el-step__head .el-step__icon.is-text{
		display: none;
	}
	.hole-detailed-wrapcomp .hole-header3 .hole-progress .el-step.is-horizontal:nth-child(2) .el-step__main .el-step__title{
		display: none;
	}
	.hole-detailed-wrapcomp .hole-header3 .hole-progress .el-step.is-horizontal:nth-child(4) .el-step__head .el-step__icon.is-text{
		display: none;
	}
	.hole-detailed-wrapcomp .hole-header3 .hole-progress .el-step.is-horizontal:nth-child(4) .el-step__main .el-step__title{
		display: none;
	}
	.hole-detailed-wrapcomp .hole-header3 .hole-progress .el-step.is-horizontal:nth-child(6) .el-step__head .el-step__icon.is-text{
		background: #409EFF;
	    width: 12px;
	    height: 12px;
	    font-size: 10px;
	    top: 4px;
	}

	.hole-detailed-wrapcomp .hole-header3 .hole-progress .el-step.is-horizontal .el-step__head .el-step__icon.is-text{
		background: #409EFF;
	    font-size: 10px;
	}
	.hole-detailed-wrapcomp .hole-progress .el-step__line{
		height: 1px !important;
		border-bottom: 1px dashed #8e9eae ;
		background-color: #ffffff;
	}



	.hole-detailed-wrapcomp .hole-proleft {
		width: 25%;
	}
	.hole-detailed-wrapcomp .hole-headerTop{
		width: 100%;
		display:  inline-block;
		padding: 20px;
		box-sizing: border-box;
		border-bottom: 1px solid #f5f9fc;
	}
	.hole-detailed-wrapcomp .hole-proleft{
		padding-right: 20px;
		box-sizing: border-box;
	}
	.hole-detailed-wrapcomp .hole-proleft>p{
		width: 100%;
		text-align: center;
		display: block;
	}
	.hole-detailed-wrapcomp .hole-proleft .hole-proleftcen{
		margin: 30px 0;
		text-align: center;
	}
	.hole-detailed-wrapcomp .hole-proleft .hole-proleftcen span{
		width: 100%;
		text-align: center;
		display: block;
		font-size: 20px;
	}
	.hole-detailed-wrapcomp .hole-proleft .hole-proleftcen b{
		font-size: 12px;
		font-weight: 400;
		padding-left: 20px;
		color: #8E9EAE;
		line-height: 24px;
		background: url(/static/image/common/timeIcon.png) no-repeat left center;
	}
	.hole-detailed-wrapcomp .hole-proleft .hole-proleftbom{
		border-top: 1px solid #f5f9fc;
		padding: 20px 0;
	}
	.hole-detailed-wrapcomp .hole-proleft .hole-proleftbom p{
		line-height: 24px;
	}


	.hole-detailed-wrapcomp .hole-header{
		width: 100%;
		display:  inline-block;
		-webkit-box-shadow: 0 5px 10px 0 rgba(64,158,225,.1);
	    -moz-box-shadow: 0 5px 10px 0 rgba(64,158,225,.1);
	    box-shadow: 0 5px 10px 0 rgba(64,158,225,.1);
	}
	.hole-detailed-wrapcomp .hole-detailed1{
		width: 100%;
		display: inline-block;
		border-top: 2px solid #2196f3;
		margin-top: 20px;
	}
	.hole-detailed-wrapcomp .hole-detailed1 .hole-item{
		width: 49%;
		display: inline-block;
		padding: 0 20px;
		box-sizing: border-box;
	}
	.hole-detailed-wrapcomp .hole-detailed>p:first-child{
		border-bottom: 1px solid #f5f9fc;
		line-height: 50px;
		font-size: 20px;
		padding: 0 20px;
		margin-bottom: 20px;
	}
	 .hole-detailed-wrapcomp .simditor-body{
	 	width: 100%;
	 	margin: 10px 0;
	 	padding: 0 20px;
		box-sizing: border-box;
	 }
	  .hole-detailed-wrapcomp .simditor-body img{
	 	max-width: 100%;
	 }
	.hole-detailed-wrapcomp .el-popover{
		min-width: auto !important;
	}
	.hole-detailed-wrapcomp .hole-status span p{
		margin-bottom: 10px;
	}
	.hole-detailed-wrapcomp .hole_title{
		font-size: 24px;
	    line-height: 24px;
	    margin-bottom: 34px;
	    font-weight: 500;
	}
	.hole-detailed-wrapcomp .progress_title{
		width: 100%;
		display: inline-block;
	}
	.hole-detailed-wrapcomp .progress_title p{
		font-size: 18px;
	    font-weight: 500;
	    margin-bottom: 10px;
	}
	.hole-detailed-wrapcomp .progress_title span{
		font-size: 12px;
	    font-weight: 500;
	    color: #8E9EAE;
	}
	.hole-detailed-wrapcomp .progress_title p:nth-of-type(1){
		float: left;
	}
	.hole-detailed-wrapcomp .progress_title p:nth-of-type(2){
		float: right;
	}
	.hole-detailed-wrapcomp .progress_title span:nth-of-type(1){
		float: left;
	}
	.hole-detailed-wrapcomp .progress_title span:nth-of-type(2){
		float: right;
	}
	.hole-detailed-wrapcomp .hole-status p{
		color: #8E9EAE;
	}
	.hole-detailed-wrapcomp .hole-detailes{
		width: 100%;
	    padding: 30px 50px;
	    border: 1px solid #dbe2e5;
	    background-color: #f2f4f5;
	    box-sizing: border-box;
	}
	.hole-detailed-wrapcomp .dialogTX{
		text-align: center;
		margin-top: 200px;
	}
	.hole-detailed-wrapcomp .dialogTX p{
		margin: 10px 0;
	}
	textarea::-webkit-input-placeholder {
	/* WebKit browsers */
	color: #9c9c9c;
	}
	
</style>
