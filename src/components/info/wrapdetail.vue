<template>
		<div class="hole-detailed-wrap">
					<el-breadcrumb separator-class="el-icon-arrow-right">
						<el-breadcrumb-item :to="{ path: '/membox/member/vuls' }">{{$t('message.personalCenter')}}</el-breadcrumb-item>
						<el-breadcrumb-item :to="{ path: '/membox/member/vuls' }">{{$t('message.MyVulnerability')}}</el-breadcrumb-item>
						<el-breadcrumb-item>{{dialogMyVul_data.vulSign}}</el-breadcrumb-item>
					</el-breadcrumb>
					<div class="hole-detailed hole-detailed1">
						    <p>{{$t('message.Summary')}}</p>
						    <div class="hole-item">
						      <span class="fl">{{$t('message.vulTitle')}} :</span>
						      <p class="fl" id="pocTitle">{{dialogMyVul_data.title}}</p>
						    </div>					    
						    <div class="hole-item">
						      <span class="fl">{{$t('message.targetType')}} :</span>
						      <p class="fl">{{dialogMyVul_data.target_name}}</p>
						    </div>
						    <div class="hole-item">
						      <span class="fl">{{$t('message.vulSerialNumber')}} :</span>
						      <p class="fl">{{dialogMyVul_data.vulSign}}</p>
						    </div>
						    <div class="hole-item">
						      <span class="fl">{{$t('message.attackType')}} :</span>
						      <p class="fl">{{dialogMyVul_data.attack_name}}</p>
						    </div>
						    <div class="hole-item">
						      <span class="fl">{{$t('message.vulvendor')}} :</span>
						      <p class="fl">{{dialogMyVul_data.company}}</p>
						    </div>
						    <div class="hole-item">
						      <span class="fl">{{$t('message.submit_time')}} :</span>
						      <p class="fl">{{dialogMyVul_data.write_time}}</p>
						    </div>
					</div><!-- || dialogMyVul_data.state == 1 && dialogMyVul_data.company_state == 6-->
					<!--等待审核--> 
					<div class="hole-header hole-header1" v-if="dialogMyVul_data.state == 0 && dialogMyVul_data.reedit == 0">
						<div class="hole-headerTop">
							<div class="hole-proleft fl">
								<p>{{$t('message.vulSerialNumber')}}：{{dialogMyVul_data.vulSign}}</p>
								<div class="hole-proleftcen">
									<span>{{$t('message.ToBeVerified')}}</span>
								</div>
							</div>
							<div class="hole-progress fl" >
								  	<el-steps :active="2"  align-center>
									  	<el-step  :title="$t('message.BeingAudit')" :description="dialogMyVul_data.write_time"></el-step>
									  	<el-step  :title="$t('message.ToBeVerified')" description=""></el-step>
									  	<el-step  :title="$t('message.VerificationPassed')" description=""></el-step>
									  	<el-step  title="" description=""></el-step>
									  	<el-step  :title="$t('message.ClaimedbyVendor')" description=""></el-step>
									</el-steps>
									<div class="progress_title"><span>{{dialogMyVul_data.update_time}}</span><span>{{dialogMyVul_data.company_time}}</span></div>
							</div>
						</div>
						<div class="clearfix"></div>
						 <div class="hole-status1">
						 	<div>
						 		<p v-for="val in dialogMyVul_data.log">
						 			<b></b><span v-for="(vals,key) in val">{{key}}&nbsp;&nbsp;&nbsp;<span v-html="vals"></span></span></p>
						 		</p>
						 	</div>
						 </div>
					</div>
					<!--:title="$t('message.ToBeClaimed')"/7{{$t('message.day')}}-->
					<div class="hole-header hole-header2" v-if="dialogMyVul_data.state == 1 && dialogMyVul_data.company_state == 0">
						<div class="hole-headerTop">
							<div class="hole-proleft fl">
								<p>{{$t('message.vulSerialNumber')}}：{{dialogMyVul_data.vulSign}}</p>
								<div class="hole-proleftcen">
									<span>{{$t('message.ToBeClaimed')}}</span>
									<time-down :endTime='endTime' v-if="endTime!=''"></time-down>
								</div>
								<div class="hole-proleftbom">
									<div v-if="dialogMyVul_data.state==0">
										<p v-if="dialogMyVul_data.level == 3">{{$t('message.vulnerability_level')}}：<span class="com-dot-lv ser-lv"></span> {{$t('message.seriousrisk')}}</p>
							        	<p v-if="dialogMyVul_data.level == 2">{{$t('message.vulnerability_level')}}：<span class="com-dot-lv high-lv"></span> {{$t('message.highrisk')}}</p>
							        	<p v-if="dialogMyVul_data.level == 1">{{$t('message.vulnerability_level')}}：<span class="com-dot-lv mid-lv"></span> {{$t('message.midrisk')}}</p>
							        	<p v-if="dialogMyVul_data.level == 0">{{$t('message.vulnerability_level')}}：<span class="com-dot-lv low-lv"></span> {{$t('message.lowrisk')}}</p>
									</div>
									<div v-if="dialogMyVul_data.state!=0">
										<p v-if="dialogMyVul_data.dvp_level == 3">{{$t('message.vulnerability_level')}}：<span class="com-dot-lv ser-lv"></span> {{$t('message.seriousrisk')}}</p>
							        	<p v-if="dialogMyVul_data.dvp_level == 2">{{$t('message.vulnerability_level')}}：<span class="com-dot-lv high-lv"></span> {{$t('message.highrisk')}}</p>
							        	<p v-if="dialogMyVul_data.dvp_level == 1">{{$t('message.vulnerability_level')}}：<span class="com-dot-lv mid-lv"></span> {{$t('message.midrisk')}}</p>
							        	<p v-if="dialogMyVul_data.dvp_level == 0">{{$t('message.vulnerability_level')}}：<span class="com-dot-lv low-lv"></span> {{$t('message.lowrisk')}}</p>
									</div>
								</div>

							</div>
							<div class="hole-progress fl">
									<div class="hole-proHead">{{$t('message.RemarksevenDaysCSnoDVPClaimLoopholeAutomatically')}}</div>
									<div class="progress_cpytime">7{{$t('message.day')}}</div>
								  	<el-steps :active="4"  align-center>
									  	<el-step  :title="$t('message.BeingAudit')" :description="dialogMyVul_data.write_time"></el-step>
									  	<el-step  :title="$t('message.ToBeVerified')" description=""></el-step>
									  	<el-step  :title="$t('message.VerificationPassed')" :description="dialogMyVul_data.update_time"></el-step>
									  	<el-step  :title="$t('message.ToBeClaimed')" description=""></el-step>
										  <el-step  v-if="dialogMyVul_data.overdue_status != 2" :title="$t('message.ClaimedbyVendor')"  description=""></el-step>
										  <el-step  v-if="dialogMyVul_data.overdue_status == 2" :title="$t('message.ClaimedbyVendor')+$t('message.BeOverdue')"  description=""></el-step>
									</el-steps>
							</div>
						</div>
						<div class="clearfix"></div>
						 <div class="hole-status1">
						 	<div>
						 		<p v-for="val in dialogMyVul_data.log">
						 			<b></b><span v-for="(vals,key) in val">{{key}}&nbsp;&nbsp;&nbsp;<span v-html="vals"></span></span></p>
						 		</p>
						 	</div>
						 </div>
					</div>
					<!--等待补充/审核未通过-->
					<div class="hole-header hole-header3" v-if="dialogMyVul_data.state == 2">
						<div class="hole-headerTop">
							<div class="hole-proleft fl">
								<p>{{$t('message.vulSerialNumber')}}：{{dialogMyVul_data.vulSign}}</p>
								<div class="hole-proleftcen">
									<span>{{$t('message.ReportSupplemented')}}</span>
									<time-down :endTime='endTime' v-if="endTime!=''"></time-down>
								</div>
								<div class="hole-proleftbom ac">
									<el-button type="primary" class="btnshadow wrapBtn"  @click="dialogMyBJVulBtn()">{{$t('message.SupplementInformation')}}</el-button>
								</div>

							</div>
							<div class="hole-progress fl">
									<div class="hole-proHead">{{$t('message.hours24rejectedAutomatically')}}</div>
									<div class="progress_cpytime"><span>{{$t('message.ReportSupplemented')}}</span><br />24{{$t('message.hour')}}</div>
								  	<el-steps :active="2"  align-center>
									  	<el-step  :title="$t('message.BeingAudit')" :description="dialogMyVul_data.write_time"></el-step>
									  	<el-step  :title="$t('message.DVPVerificationPassed')" :description="dialogMyVul_data.update_time"></el-step>
									  	<el-step  :title="$t('message.ClaimedbyVendor')" description=""></el-step>
									</el-steps>
							</div>
						</div>
						<div class="clearfix"></div>
						 <div class="hole-status1">
						 	<div>
						 		<p v-for="val in dialogMyVul_data.log">
						 			<b></b><span v-for="(vals,key) in val">{{key}}&nbsp;&nbsp;&nbsp;<span v-html="vals"></span></span></p>
						 		</p>
						 	</div>
						 </div>
					</div>
					<!--补充待审核/7{{$t('message.day')}}-->
					<div class="hole-header hole-header1" v-if="dialogMyVul_data.state == 0 && dialogMyVul_data.reedit == 1">
						<div class="hole-headerTop">
							<div class="hole-proleft fl">
								<p>{{$t('message.vulSerialNumber')}}：{{dialogMyVul_data.vulSign}}</p>
								<div class="hole-proleftcen">
									<span>{{$t('message.SupplementInformationVerified')}}</span>
								</div>
							</div>
							<div class="hole-progress fl">
									<div class="progress_cpytime">7{{$t('message.day')}}</div>
								  	<el-steps :active="2"  align-center>
									  	<el-step  :title="$t('btn.sub_vul')" :description="dialogMyVul_data.write_time"></el-step>
									  	<el-step  :title="$t('message.SupplementInformationVerified')" description=""></el-step>
									  	<el-step  :title="$t('message.VerificationPassed')" description=""></el-step>
									  	<el-step  title="" description=""></el-step>
									  	<el-step  :title="$t('message.ClaimedbyVendor')" description=""></el-step>
									</el-steps>
							</div>
						</div>
						<div class="clearfix"></div>
						 <div class="hole-status1">
						 	<div>
						 		<p v-for="val in dialogMyVul_data.log">
						 			<b></b><span v-for="(vals,key) in val">{{key}}&nbsp;&nbsp;&nbsp;<span v-html="vals"></span></span></p>
						 		</p>
						 	</div>
						 </div>
					</div>
					<!--完成/审核未通过-->
					<div class="hole-header hole-header5" v-if="dialogMyVul_data.state == 3">
						<div class="hole-headerTop">
							<div class="hole-proleft fl">
								<p>{{$t('message.vulSerialNumber')}}：{{dialogMyVul_data.vulSign}}</p>
								<div class="hole-proleftcen hole-proleftcen5">
									<span>{{$t('message.Complete')}}</span>
					    	 		<p>{{$t('message.VerificationFailed')}}</p>
								</div>
							</div>
							<div class="hole-progress fl">
								  	<el-steps :active="2"  align-center>
									  	<el-step  :title="$t('btn.sub_vul')" :description="dialogMyVul_data.write_time"></el-step>
									  	<el-step  :title="$t('message.DVPVerificationPassed')"  :description="dialogMyVul_data.update_time"></el-step>
									</el-steps>
							</div>
						</div>
						<div class="clearfix"></div>
						 <div class="hole-status1">
						 	<div>
						 		<p v-for="val in dialogMyVul_data.log">
						 			<b></b><span v-for="(vals,key) in val">{{key}}&nbsp;&nbsp;&nbsp;<span v-html="vals"></span></span></p>
						 		</p>
						 	</div>
						 </div>
					</div>
					<!--完成/厂商认领/手动确认-->
					<div class="hole-header hole-header6" v-if="dialogMyVul_data.state == 1 && dialogMyVul_data.company_state == 1">
						<div class="hole-headerTop">
							<div class="hole-proleft fl">
								<p>{{$t('message.vulSerialNumber')}}：{{dialogMyVul_data.vulSign}}</p>
								<div class="hole-proleftcen hole-proleftcen5">
									<span>{{$t('message.Complete')}}</span>
					    	 		<p>{{$t('message.ClaimedbyVendor')}}</p>
								</div>
								<div class="hole-proleftbom">
									<div v-if="dialogMyVul_data.state==0">
										<p v-if="dialogMyVul_data.level == 3">{{$t('message.vulnerability_level')}}：<span class="com-dot-lv ser-lv"></span> {{$t('message.seriousrisk')}}</p>
							        	<p v-if="dialogMyVul_data.level == 2">{{$t('message.vulnerability_level')}}：<span class="com-dot-lv high-lv"></span> {{$t('message.highrisk')}}</p>
							        	<p v-if="dialogMyVul_data.level == 1">{{$t('message.vulnerability_level')}}：<span class="com-dot-lv mid-lv"></span> {{$t('message.midrisk')}}</p>
							        	<p v-if="dialogMyVul_data.level == 0">{{$t('message.vulnerability_level')}}：<span class="com-dot-lv low-lv"></span> {{$t('message.lowrisk')}}</p>
									</div>
									<div v-if="dialogMyVul_data.state!=0">
										<p v-if="dialogMyVul_data.dvp_level == 3">{{$t('message.vulnerability_level')}}：<span class="com-dot-lv ser-lv"></span> {{$t('message.seriousrisk')}}</p>
							        	<p v-if="dialogMyVul_data.dvp_level == 2">{{$t('message.vulnerability_level')}}：<span class="com-dot-lv high-lv"></span> {{$t('message.highrisk')}}</p>
							        	<p v-if="dialogMyVul_data.dvp_level == 1">{{$t('message.vulnerability_level')}}：<span class="com-dot-lv mid-lv"></span> {{$t('message.midrisk')}}</p>
							        	<p v-if="dialogMyVul_data.dvp_level == 0">{{$t('message.vulnerability_level')}}：<span class="com-dot-lv low-lv"></span> {{$t('message.lowrisk')}}</p>
									</div>
									<p>{{$t('message.vulreward')}}：
										<span v-if="dialogMyVul_data.state == 0"> -</span>
							        	<span v-if="dialogMyVul_data.state == 2"> -</span>
							        	<span v-if="dialogMyVul_data.state == 3"> -</span>
							        	<span v-if="dialogMyVul_data.state == 1 && dialogMyVul_data.price != 0 && dialogMyVul_data.dvp == 0"> {{dialogMyVul_data.price}} Ether</span>
							        	<span v-if="dialogMyVul_data.state == 1 && dialogMyVul_data.price == 0 && dialogMyVul_data.dvp == 0">-</span>
							        	<span v-if="dialogMyVul_data.state == 1 && dialogMyVul_data.price == 0 && dialogMyVul_data.dvp != 0"> {{dialogMyVul_data.dvp}} DVP</span>
							        	<span v-if="dialogMyVul_data.state == 1 && dialogMyVul_data.price != 0 && dialogMyVul_data.dvp != 0"> {{dialogMyVul_data.price}} Ether、 {{dialogMyVul_data.dvp}} DVP</span>
									</p>
								</div>
							</div>
							<div class="hole-progress fl">
								  	<el-steps :active="3"  align-center>
										  <el-step  :title="$t('btn.sub_vul')" :description="dialogMyVul_data.write_time"></el-step>
										  <el-step  :title="$t('message.VerificationPassed')"  :description="dialogMyVul_data.update_time"></el-step>
										  <el-step  v-if="dialogMyVul_data.overdue_status != 2" :title="$t('message.ClaimedbyVendor')"  :description="dialogMyVul_data.company_time"></el-step>
										  <el-step  v-if="dialogMyVul_data.overdue_status == 2" :title="$t('message.ClaimedbyVendor')+$t('message.BeOverdue')"  :description="dialogMyVul_data.company_time"></el-step>
									</el-steps>
							</div>
						</div>
						<div class="clearfix"></div>
						 <div class="hole-status1">
						 	<div>
						 		<p v-for="val in dialogMyVul_data.log">
						 			<b></b><span v-for="(vals,key) in val">{{key}}&nbsp;&nbsp;&nbsp;<span v-html="vals"></span></span></p>
						 		</p>
						 	</div>
						 </div>
					</div>
					<!--完成/DVP认领 == 厂商未认领-->
					<div class="hole-header hole-header7" v-if="dialogMyVul_data.state == 1 && dialogMyVul_data.company_state == 3 && dialogMyVul_data.company_refuse==0">
						<div class="hole-headerTop">
							<div class="hole-proleft fl">
								<p>{{$t('message.vulSerialNumber')}}：{{dialogMyVul_data.vulSign}}</p>
								<div class="hole-proleftcen hole-proleftcen5">
									<span>{{$t('message.Complete')}}</span>
					    	 		<p>{{$t('message.ClaimedDVP')}}</p>
								</div>
								<div class="hole-proleftbom">
									<div v-if="dialogMyVul_data.state==0">
										<p v-if="dialogMyVul_data.level == 3">{{$t('message.vulnerability_level')}}：<span class="com-dot-lv ser-lv"></span> {{$t('message.seriousrisk')}}</p>
							        	<p v-if="dialogMyVul_data.level == 2">{{$t('message.vulnerability_level')}}：<span class="com-dot-lv high-lv"></span> {{$t('message.highrisk')}}</p>
							        	<p v-if="dialogMyVul_data.level == 1">{{$t('message.vulnerability_level')}}：<span class="com-dot-lv mid-lv"></span> {{$t('message.midrisk')}}</p>
							        	<p v-if="dialogMyVul_data.level == 0">{{$t('message.vulnerability_level')}}：<span class="com-dot-lv low-lv"></span> {{$t('message.lowrisk')}}</p>
									</div>
									<div v-if="dialogMyVul_data.state!=0">
										<p v-if="dialogMyVul_data.dvp_level == 3">{{$t('message.vulnerability_level')}}：<span class="com-dot-lv ser-lv"></span> {{$t('message.seriousrisk')}}</p>
							        	<p v-if="dialogMyVul_data.dvp_level == 2">{{$t('message.vulnerability_level')}}：<span class="com-dot-lv high-lv"></span> {{$t('message.highrisk')}}</p>
							        	<p v-if="dialogMyVul_data.dvp_level == 1">{{$t('message.vulnerability_level')}}：<span class="com-dot-lv mid-lv"></span> {{$t('message.midrisk')}}</p>
							        	<p v-if="dialogMyVul_data.dvp_level == 0">{{$t('message.vulnerability_level')}}：<span class="com-dot-lv low-lv"></span> {{$t('message.lowrisk')}}</p>
									</div>
									<p>{{$t('message.vulreward')}}：
										<span v-if="dialogMyVul_data.state == 0"> -</span>
							        	<span v-if="dialogMyVul_data.state == 2"> -</span>
							        	<span v-if="dialogMyVul_data.state == 3"> -</span>
							        	<span v-if="dialogMyVul_data.state == 1 && dialogMyVul_data.price != 0 && dialogMyVul_data.dvp == 0"> {{dialogMyVul_data.price}} Ether</span>
							        	<span v-if="dialogMyVul_data.state == 1 && dialogMyVul_data.price == 0 && dialogMyVul_data.dvp == 0">-</span>
							        	<span v-if="dialogMyVul_data.state == 1 && dialogMyVul_data.price == 0 && dialogMyVul_data.dvp != 0"> {{dialogMyVul_data.dvp}} DVP</span>
							        	<span v-if="dialogMyVul_data.state == 1 && dialogMyVul_data.price != 0 && dialogMyVul_data.dvp != 0"> {{dialogMyVul_data.price}} Ether、 {{dialogMyVul_data.dvp}} DVP</span>
									</p>
								</div>
							</div>
							<div class="hole-progress fl">
								<div class="hole-proHead">{{$t('message.RemarksevenDaysCSnoDVPClaimLoopholeAutomatically')}}</div>
								  	<el-steps :active="4"  align-center>
										  <el-step  :title="$t('btn.sub_vul')" :description="dialogMyVul_data.write_time"></el-step>
										  <el-step  :title="$t('message.VerificationPassed')"  :description="dialogMyVul_data.update_time"></el-step>
										  <el-step v-if="dialogMyVul_data.overdue_status != 2" :title="$t('message.The_manufacturer_failed_to_identify_the_vul')"  :description="dialogMyVul_data.company_time"></el-step>
										   <el-step v-if="dialogMyVul_data.overdue_status == 2" :title="$t('message.The_manufacturer_failed_to_identify_the_vul')+$t('message.BeOverdue')"  :description="dialogMyVul_data.company_time"></el-step>
									  	<el-step  :title="$t('message.ClaimedDVP')"  :description="dialogMyVul_data.company_time"></el-step>
									</el-steps>
							</div>
						</div>
						<div class="clearfix"></div>
						 <div class="hole-status1">
						 	<div>
						 		<p v-for="val in dialogMyVul_data.log">
						 			<b></b><span v-for="(vals,key) in val">{{key}}&nbsp;&nbsp;&nbsp;<span v-html="vals"></span></span></p>
						 		</p>
						 	</div>
						 </div>
					</div>
					<!--完成/DVP认领 == 厂商不认领-->
					<div class="hole-header hole-header7" v-if="dialogMyVul_data.state == 1 && dialogMyVul_data.company_state == 3 && dialogMyVul_data.company_refuse==1">
						<div class="hole-headerTop">
							<div class="hole-proleft fl">
								<p>{{$t('message.vulSerialNumber')}}：{{dialogMyVul_data.vulSign}}</p>
								<div class="hole-proleftcen hole-proleftcen5">
									<span>{{$t('message.Complete')}}</span>
					    	 		<p>{{$t('message.ClaimedDVP')}}</p>
								</div>
								<div class="hole-proleftbom">
									<div v-if="dialogMyVul_data.state==0">
										<p v-if="dialogMyVul_data.level == 3">{{$t('message.vulnerability_level')}}：<span class="com-dot-lv ser-lv"></span> {{$t('message.seriousrisk')}}</p>
							        	<p v-if="dialogMyVul_data.level == 2">{{$t('message.vulnerability_level')}}：<span class="com-dot-lv high-lv"></span> {{$t('message.highrisk')}}</p>
							        	<p v-if="dialogMyVul_data.level == 1">{{$t('message.vulnerability_level')}}：<span class="com-dot-lv mid-lv"></span> {{$t('message.midrisk')}}</p>
							        	<p v-if="dialogMyVul_data.level == 0">{{$t('message.vulnerability_level')}}：<span class="com-dot-lv low-lv"></span> {{$t('message.lowrisk')}}</p>
									</div>
									<div v-if="dialogMyVul_data.state!=0">
										<p v-if="dialogMyVul_data.dvp_level == 3">{{$t('message.vulnerability_level')}}：<span class="com-dot-lv ser-lv"></span> {{$t('message.seriousrisk')}}</p>
							        	<p v-if="dialogMyVul_data.dvp_level == 2">{{$t('message.vulnerability_level')}}：<span class="com-dot-lv high-lv"></span> {{$t('message.highrisk')}}</p>
							        	<p v-if="dialogMyVul_data.dvp_level == 1">{{$t('message.vulnerability_level')}}：<span class="com-dot-lv mid-lv"></span> {{$t('message.midrisk')}}</p>
							        	<p v-if="dialogMyVul_data.dvp_level == 0">{{$t('message.vulnerability_level')}}：<span class="com-dot-lv low-lv"></span> {{$t('message.lowrisk')}}</p>
									</div>
									<p>{{$t('message.vulreward')}}：
										<span v-if="dialogMyVul_data.state == 0"> -</span>
							        	<span v-if="dialogMyVul_data.state == 2"> -</span>
							        	<span v-if="dialogMyVul_data.state == 3"> -</span>
							        	<span v-if="dialogMyVul_data.state == 1 && dialogMyVul_data.price != 0 && dialogMyVul_data.dvp == 0"> {{dialogMyVul_data.price}} Ether</span>
							        	<span v-if="dialogMyVul_data.state == 1 && dialogMyVul_data.price == 0 && dialogMyVul_data.dvp == 0">-</span>
							        	<span v-if="dialogMyVul_data.state == 1 && dialogMyVul_data.price == 0 && dialogMyVul_data.dvp != 0"> {{dialogMyVul_data.dvp}} DVP</span>
							        	<span v-if="dialogMyVul_data.state == 1 && dialogMyVul_data.price != 0 && dialogMyVul_data.dvp != 0"> {{dialogMyVul_data.price}} Ether、 {{dialogMyVul_data.dvp}} DVP</span>
									</p>
								</div>
							</div>
							<div class="hole-progress fl">
								<div class="hole-proHead">{{$t('message.RemarksevenDaysCSnoDVPClaimLoopholeAutomatically')}}</div>
								  	<el-steps :active="4"  align-center>
									  	<el-step  :title="$t('btn.sub_vul')" :description="dialogMyVul_data.write_time"></el-step>
									  	<el-step  :title="$t('message.VerificationPassed')"  :description="dialogMyVul_data.update_time"></el-step>
										  <el-step v-if="dialogMyVul_data.overdue_status != 2" :title="$t('message.VendorFailedClaimLoophole')"  :description="dialogMyVul_data.company_time"></el-step>
										  <el-step v-if="dialogMyVul_data.overdue_status == 2" :title="$t('message.VendorFailedClaimLoophole')+$t('message.BeOverdue')"  :description="dialogMyVul_data.company_time"></el-step>
									  	<el-step  :title="$t('message.ClaimedDVP')"  :description="dialogMyVul_data.company_time"></el-step>
									</el-steps>
							</div>
						</div>
						<div class="clearfix"></div>
						 <div class="hole-status1">
						 	<div>
						 		<p v-for="val in dialogMyVul_data.log">
						 			<b></b><span v-for="(vals,key) in val">{{key}}&nbsp;&nbsp;&nbsp;<span v-html="vals"></span></span></p>
						 		</p>
						 	</div>
						 </div>
					</div>
					<!--完成/DVP认领 == 厂商不认领-->
					<div class="hole-header hole-header8" v-if="dialogMyVul_data.state == 1 && dialogMyVul_data.company_state == 2">
						<div class="hole-headerTop">
							<div class="hole-proleft fl">
								<p>{{$t('message.vulSerialNumber')}}：{{dialogMyVul_data.vulSign}}</p>
								<div class="hole-proleftcen hole-proleftcen5">
									<span>{{$t('message.Complete')}}</span>
					    	 		<p>{{$t('message.ClaimedDVP')}}</p>
								</div>
								<div class="hole-proleftbom">
									<div v-if="dialogMyVul_data.state==0">
										<p v-if="dialogMyVul_data.level == 3">{{$t('message.vulnerability_level')}}：<span class="com-dot-lv ser-lv"></span> {{$t('message.seriousrisk')}}</p>
							        	<p v-if="dialogMyVul_data.level == 2">{{$t('message.vulnerability_level')}}：<span class="com-dot-lv high-lv"></span> {{$t('message.highrisk')}}</p>
							        	<p v-if="dialogMyVul_data.level == 1">{{$t('message.vulnerability_level')}}：<span class="com-dot-lv mid-lv"></span> {{$t('message.midrisk')}}</p>
							        	<p v-if="dialogMyVul_data.level == 0">{{$t('message.vulnerability_level')}}：<span class="com-dot-lv low-lv"></span> {{$t('message.lowrisk')}}</p>
									</div>
									<div v-if="dialogMyVul_data.state!=0">
										<p v-if="dialogMyVul_data.dvp_level == 3">{{$t('message.vulnerability_level')}}：<span class="com-dot-lv ser-lv"></span> {{$t('message.seriousrisk')}}</p>
							        	<p v-if="dialogMyVul_data.dvp_level == 2">{{$t('message.vulnerability_level')}}：<span class="com-dot-lv high-lv"></span> {{$t('message.highrisk')}}</p>
							        	<p v-if="dialogMyVul_data.dvp_level == 1">{{$t('message.vulnerability_level')}}：<span class="com-dot-lv mid-lv"></span> {{$t('message.midrisk')}}</p>
							        	<p v-if="dialogMyVul_data.dvp_level == 0">{{$t('message.vulnerability_level')}}：<span class="com-dot-lv low-lv"></span> {{$t('message.lowrisk')}}</p>
									</div>
									<p>{{$t('message.vulreward')}}：
										<span v-if="dialogMyVul_data.state == 0"> -</span>
							        	<span v-if="dialogMyVul_data.state == 2"> -</span>
							        	<span v-if="dialogMyVul_data.state == 3"> -</span>
							        	<span v-if="dialogMyVul_data.state == 1 && dialogMyVul_data.price != 0 && dialogMyVul_data.dvp == 0"> {{dialogMyVul_data.price}} Ether</span>
							        	<span v-if="dialogMyVul_data.state == 1 && dialogMyVul_data.price == 0 && dialogMyVul_data.dvp == 0">-</span>
							        	<span v-if="dialogMyVul_data.state == 1 && dialogMyVul_data.price == 0 && dialogMyVul_data.dvp != 0"> {{dialogMyVul_data.dvp}} DVP</span>
							        	<span v-if="dialogMyVul_data.state == 1 && dialogMyVul_data.price != 0 && dialogMyVul_data.dvp != 0"> {{dialogMyVul_data.price}} Ether、 {{dialogMyVul_data.dvp}} DVP</span>
									</p>
								</div>
							</div>
							<div class="hole-progress fl">
								  	<el-steps :active="4"  align-center>
									  	<el-step  :title="$t('btn.sub_vul')" :description="dialogMyVul_data.write_time"></el-step>
										  <el-step  :title="$t('message.VerificationPassed')"  :description="dialogMyVul_data.update_time"></el-step>
										   <el-step v-if="dialogMyVul_data.overdue_status != 2" :title="$t('message.VendorFailedClaimLoophole')"  :description="dialogMyVul_data.company_time"></el-step>
										  <el-step v-if="dialogMyVul_data.overdue_status == 2" :title="$t('message.VendorFailedClaimLoophole')+$t('message.BeOverdue')"  :description="dialogMyVul_data.company_time"></el-step>
									  	<!-- <el-step  :title="$t('message.ClaimedDVP')"  :description="dialogMyVul_data.company_time"></el-step> -->
									</el-steps>
							</div>
						</div>
						<div class="clearfix"></div>
						 <div class="hole-status1">
						 	<div>
						 		<p v-for="val in dialogMyVul_data.log">
						 			<b></b><span v-for="(vals,key) in val">{{key}}&nbsp;&nbsp;&nbsp;<span v-html="vals"></span></span></p>
						 		</p>
						 	</div>
						 </div>
					</div>
					<!--完成/厂商认领/7天后自动确认-->
					<div class="hole-header hole-header6" v-if="dialogMyVul_data.state == 1 && dialogMyVul_data.company_state == 5">
						<div class="hole-headerTop">
							<div class="hole-proleft fl">
								<p>{{$t('message.vulSerialNumber')}}：{{dialogMyVul_data.vulSign}}</p>
								<div class="hole-proleftcen hole-proleftcen5">
									<span>{{$t('message.Complete')}}</span>
					    	 		<p>{{$t('message.ClaimedbyVendor')}}</p>
								</div>
								<div class="hole-proleftbom">
									<div v-if="dialogMyVul_data.state==0">
										<p v-if="dialogMyVul_data.level == 3">{{$t('message.vulnerability_level')}}：<span class="com-dot-lv ser-lv"></span> {{$t('message.seriousrisk')}}</p>
							        	<p v-if="dialogMyVul_data.level == 2">{{$t('message.vulnerability_level')}}：<span class="com-dot-lv high-lv"></span> {{$t('message.highrisk')}}</p>
							        	<p v-if="dialogMyVul_data.level == 1">{{$t('message.vulnerability_level')}}：<span class="com-dot-lv mid-lv"></span> {{$t('message.midrisk')}}</p>
							        	<p v-if="dialogMyVul_data.level == 0">{{$t('message.vulnerability_level')}}：<span class="com-dot-lv low-lv"></span> {{$t('message.lowrisk')}}</p>
									</div>
									<div v-if="dialogMyVul_data.state!=0">
										<p v-if="dialogMyVul_data.dvp_level == 3">{{$t('message.vulnerability_level')}}：<span class="com-dot-lv ser-lv"></span> {{$t('message.seriousrisk')}}</p>
							        	<p v-if="dialogMyVul_data.dvp_level == 2">{{$t('message.vulnerability_level')}}：<span class="com-dot-lv high-lv"></span> {{$t('message.highrisk')}}</p>
							        	<p v-if="dialogMyVul_data.dvp_level == 1">{{$t('message.vulnerability_level')}}：<span class="com-dot-lv mid-lv"></span> {{$t('message.midrisk')}}</p>
							        	<p v-if="dialogMyVul_data.dvp_level == 0">{{$t('message.vulnerability_level')}}：<span class="com-dot-lv low-lv"></span> {{$t('message.lowrisk')}}</p>
									</div>
									<p>{{$t('message.vulreward')}}：
										<span v-if="dialogMyVul_data.state == 0"> -</span>
							        	<span v-if="dialogMyVul_data.state == 2"> -</span>
							        	<span v-if="dialogMyVul_data.state == 3"> -</span>
							        	<span v-if="dialogMyVul_data.state == 1 && dialogMyVul_data.price != 0 && dialogMyVul_data.dvp == 0"> {{dialogMyVul_data.price}} Ether</span>
							        	<span v-if="dialogMyVul_data.state == 1 && dialogMyVul_data.price == 0 && dialogMyVul_data.dvp == 0">-</span>
							        	<span v-if="dialogMyVul_data.state == 1 && dialogMyVul_data.price == 0 && dialogMyVul_data.dvp != 0"> {{dialogMyVul_data.dvp}} DVP</span>
							        	<span v-if="dialogMyVul_data.state == 1 && dialogMyVul_data.price != 0 && dialogMyVul_data.dvp != 0"> {{dialogMyVul_data.price}} Ether、 {{dialogMyVul_data.dvp}} DVP</span>
									</p>
								</div>
							</div>
							<div class="hole-progress fl">
								  	<el-steps :active="3"  align-center>
									  	<el-step  :title="$t('btn.sub_vul')" :description="dialogMyVul_data.write_time"></el-step>
									  	<el-step  :title="$t('message.VerificationPassed')"  :description="dialogMyVul_data.update_time"></el-step>
										<el-step v-if="dialogMyVul_data.overdue_status != 2" :title="$t('message.ClaimedbyVendor')"  :description="dialogMyVul_data.company_time"></el-step>
										<el-step v-if="dialogMyVul_data.overdue_status == 2" :title="$t('message.ClaimedbyVendor')+$t('message.BeOverdue')"  :description="dialogMyVul_data.company_time"></el-step>
									</el-steps>
							</div>
						</div>
						<div class="clearfix"></div>
						 <div class="hole-status1">
						 	<div>
						 		<p v-for="val in dialogMyVul_data.log">
						 			<b></b><span v-for="(vals,key) in val">{{key}}&nbsp;&nbsp;&nbsp;<span v-html="vals"></span></span></p>
						 		</p>
						 	</div>
						 </div>
					</div>

					<div class="hole-detailed">
							 <p>{{$t('message.vulnerabilityDescription')}}</p>
						    <div class="clearfix simditor" style="border: none;width: 100%;">
						    	<div class="vuldescshead">
						    			 <div class="fl simditor-body" v-html="dialogMyVul_data.description"></div>					     		
						     	</div>
						    </div>
						     <div class="clearfix simditor" style="border: none;width: 100%;" v-for="val in dialogMyVul_descs.descs">
							      <div class="vuldescs">
							      		<p>{{val.created_at}}  {{$t('message.SupplementInformationFollows')}}：</p>							      	
							      			<div style="background: #ffffff;padding: 20px;box-sizing: border-box;margin-top: 20px;"  v-html="val.content"></div>					      		
							      </div>
						    </div>
					</div>
					<div class="hole-detailed" v-if="dialogMyVul_data.video">
							 <p>{{$t('message.VulVideo')}}</p>
						    <div class="clearfix simditor" style="border: none;width: 100%;">
						    	<div class="vuldescshead">
										 <video 
										 		style="width: 680px;height: 300px;"
												v-bind:src="dialogMyVul_data.video"
												controls="controls">
									</video>     		
						     	</div>
						    </div>
						   
					</div>
					
				 	<!-- 申请入驻弹窗 -->
					<el-dialog
						  title=""
						  :visible.sync="dialogApply"
						  class="dialogTX"
						  width="500px">
						  	<div class="dialogTXCon">
						  		<img src="static/image/chenggong.png" alt="" />
							    <p>{{$t('message.auditSuccess')}}</p>
							    <p class="pop-up-text">{{$t('message.Your_application_hasbeen_submittedAndwaiting_for_deal_with')}}</p>
							    <el-button type="primary"  class="btnshadow wrapBtn"  @click="dialogApply = false">{{$t('message.sure')}}</el-button>
							</div>
					</el-dialog>
		</div>
</template>

<script>
	import timeDown from '@/components/info/timeDown'
	export default {
		name: 'wrapdetail',
		components:{timeDown},
		data(){
			return{
				ApplyBthshow: true,
				dialogApply: false,
				dialogMyVul_data:[],
				dialogMyVul_descs:[],
				endTime: '',
				lang:'zh'
			}
		},
		methods: {
			initData(){
				var _this=this
				let id = this.$route.query.id
			    this.lang=localStorage.getItem('locale')
		        if(this.lang=='zh'){
					this.$ajax.BMZvulInfo({'id':id,'language':'zh_CN'})
					.then(res => {
						if(res.errcode===1){
							_this.endTime=res.data.info.diffTIme
							_this.dialogMyVul_data = res.data.info;
							_this.dialogMyVul_descs = res.data;
						}
					 })	
			   }else if(this.lang=='en' || this.lang==null || this.lang=='' || this.lang=='ko'){
					this.$ajax.BMZvulInfo({'id':id,'language':'en_US'})
					.then(res => {
						if(res.errcode===1){
							_this.endTime=res.data.info.diffTIme
							_this.dialogMyVul_data = res.data.info;
							_this.dialogMyVul_descs = res.data;
						}
				 })				
			   }
				
				

			},
			dialogMyBJVulBtn(){
    	  		this.$router.push({ path:"/membox/edit?id="+ this.dialogMyVul_data.id})
    	   },
			ApplyBth(id){
				var _this = this;
				this.$ajax.BMZVulAudit({'id': id})
				.then(res => {
					if(res.errcode === 1){
						this.dialogApply = true
						this.ApplyBthshow = false
					}else{
						this.ApplyBthshow = false
					}
				})
			}
		},
	     created:function(){
		   	this.initData();
		}
	  }
</script>

<style>
	.vuldescshead{
		padding: 0 5%;
		box-sizing: border-box;
	}
	.hole-item .simditor-body span{
		display: none;
	}
	.vuldescs{
		background: #f5f9fc;
		margin: 0 5%;
		padding: 20px;
		box-sizing: border-box;
	}
	.el-step__title.is-process{
		color: #8E9EAE !important;
	}
	.hole-header {
		max-width: 1200px
	}
	.hole-header .el-step__line-inner{
		border-style: dashed !important;
	}
	.hole-header2 .progress_cpytime,.hole-header1 .progress_cpytime{
		margin-left: 600px;
		margin-bottom: -10px;
	}
	.hole-header3 .progress_cpytime{
		margin-left: 400px;
		margin-bottom: 10px;
	}
	.hole-header3 .progress_cpytime span{
		color: #2496f3;
		font-size: 14px;
	}
	.hole-header1 .hole-proleftcen span{
		margin-top: 60px;
	}
	.hole-header5 .hole-proleftcen span{
		margin-top: 60px;
		margin-bottom: 6px;
	}
	.hole-proleftcen p{
		font-size: 14px;
	}
	.hole-proHead{
		position: absolute;
		top: 0;
		color: #8E9EAE;
	}
	.hole-status1{
		background: #f5f9fc;
		margin: 20px;
		padding: 20px;
		box-sizing: border-box;
	}
	.hole-status1>div{
		border-left: 1px dashed #000000;
		padding: 0 20px;
	}
	.hole-status1 p{
		line-height: 20px;
	}
	.hole-status1 b{
		width: 6px;
		height: 6px;
		background: #2196f3;
		display: inline-block;
		border-radius: 3px;
		margin-left: -23px;
		margin-right: 20px;
	}
	.hole-status1>span{
		margin-right: 30px;
	}
	.hole-progress{
		width: 74%;
		border-left: 1px solid #f5f9fc;
		padding: 60px 20px 40px 20px;
		box-sizing: border-box;
		position: relative;
	}
	.hole-progress .el-step__icon-inner{
		display: none;
	}
	.hole-progress .el-step__head.is-wait .el-step__icon{
		background: #8E9EAE !important;
	}
	.hole-progress 	.el-step__head.is-process .el-step__icon{
		background: #8E9EAE !important;
	}
	.hole-progress 	.el-step__head.is-finish .el-step__icon{
		background: #2196f3 !important;
	}
	.hole-header1 .hole-progress .el-step.is-horizontal:nth-child(even) .el-step__head .el-step__icon.is-text{
		background: #409EFF;
	    width: 12px;
	    height: 12px;
	    font-size: 10px;
	    top: 4px;
	}
	.hole-header1 .hole-progress .el-step.is-horizontal:nth-child(even) .el-step__main .el-step__title{
		font-size: 14px;
		margin-top: -50px;
	}
	.hole-header1 .hole-progress .el-step.is-horizontal:nth-child(4) .el-step__head .el-step__icon-inner{
		display: none;
	}
	.hole-header1 .hole-progress .el-step.is-horizontal:nth-child(4) .el-step__head .el-step__icon.is-text{
		display: none;
	}
	.hole-header2 .hole-progress .el-step.is-horizontal:nth-child(even) .el-step__head .el-step__icon.is-text{
		background: #409EFF;
	    width: 12px;
	    height: 12px;
	    font-size: 10px;
	    top: 4px;
	}
	.hole-header2 .hole-progress .el-step.is-horizontal:nth-child(even) .el-step__main .el-step__title{
		font-size: 14px;
		margin-top: -50px;
	}
	.hole-header2 .hole-progress .el-step.is-horizontal:nth-child(2) .el-step__head .el-step__icon.is-text{
		display: none;
	}
	.hole-header2 .hole-progress .el-step.is-horizontal:nth-child(2) .el-step__main .el-step__title{
		display: none;
	}
	.hole-header3 .hole-progress .el-step.is-horizontal .el-step__head .el-step__icon.is-text{
		background: #409EFF;
	    font-size: 10px;
	}
	.hole-progress .el-step__line{
		height: 1px !important;
		border-bottom: 1px dashed #8e9eae ;
		background-color: #ffffff;
	}



	.hole-proleft {
		width: 25%;
	}
	.hole-headerTop{
		width: 100%;
		display:  inline-block;
		padding: 20px;
		box-sizing: border-box;
		border-bottom: 1px solid #f5f9fc;
	}
	.hole-proleft{
		padding-right: 20px;
		box-sizing: border-box;
	}
	.hole-proleft>p{
		width: 100%;
		text-align: center;
		display: block;
	}
	.hole-proleft .hole-proleftcen{
		margin: 30px 0;
		text-align: center;
	}
	.hole-proleft .hole-proleftcen span{
		width: 100%;
		text-align: center;
		display: block;
		font-size: 20px;
	}
	.hole-proleft .hole-proleftbom{
		border-top: 1px solid #f5f9fc;
		padding: 20px 0;
	}
	.hole-proleft .hole-proleftbom p{
		line-height: 24px;
	}
	.hole-proleft .hole-proleftbom p p{
		display: inline-block;
	}
	.hole-header{
		width: 100%;
		display:  inline-block;
		-webkit-box-shadow: 0 5px 10px 0 rgba(64,158,225,.1);
	    -moz-box-shadow: 0 5px 10px 0 rgba(64,158,225,.1);
	    box-shadow: 0 5px 10px 0 rgba(64,158,225,.1);
	}
	.hole-detailed1{
		width: 100%;
		display: inline-block;
		border-top: 2px solid #2196f3;
		margin-top: 20px;
	}
	.hole-detailed1 .hole-item{
		width: 50%;
		float: left;
		padding: 0 60px;
		box-sizing: border-box;
	}
	.hole-detailed>p:first-child{
		border-bottom: 1px solid #f5f9fc;
		line-height: 50px;
		font-size: 20px;
		padding: 0 20px;
		margin-bottom: 20px;
	}
	 .simditor-body{
	 	width: 100%;
	 	margin: 10px 0;
	 	padding: 0 20px;
		box-sizing: border-box;
	 }
	 .simditor-body img{
	 	max-width: 100%;
	 }
	.el-popover{
		min-width: auto !important;
	}
	.hole-status span p{
		margin-bottom: 10px;
	}
	.hole_title{
		font-size: 24px;
	    line-height: 24px;
	    margin-bottom: 34px;
	    font-weight: 500;
	}
	.progress_title{
		width: 100%;
		display: inline-block;
	}
	.progress_title p{
		font-size: 18px;
	    font-weight: 500;
	    margin-bottom: 10px;
	}
	.progress_title span{
		font-size: 12px;
	    font-weight: 500;
	    color: #8E9EAE;
	}
	.progress_title p:nth-of-type(1){
		float: left;
	}
	.progress_title p:nth-of-type(2){
		float: right;
	}
	.progress_title span:nth-of-type(1){
		float: left;
	}
	.progress_title span:nth-of-type(2){
		float: right;
	}
	.hole-status p{
		color: #8E9EAE;
	}
	.hole-detailes{
		width: 100%;
	    padding: 30px 50px;
	    border: 1px solid #dbe2e5;
	    background-color: #f2f4f5;
	    box-sizing: border-box;
	}
	.dialogTX{
		text-align: center;
		margin-top: 200px;
	}
	.dialogTX p{
		margin: 10px 0;
	}

</style>
