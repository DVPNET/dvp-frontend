<template>
	<div>
				<h1 class="text_center">{{$t('message.Transactions')}}</h1>
				<div class="hole-status" style="margin-top: 50px;">
				    	<div class="headerno">
							<p class="tl">
						    	{{$t('message.TotalLoopholes')}}:
						    	<p v-if="dialog_data.state == 0"> -</p>
					        	<p v-if="dialog_data.state == 1 && dialog_data.price != 0"> {{dialog_data.price}} Ether</p>
					        	<p v-if="dialog_data.state == 1 && dialog_data.price == 0 && dialog_data.DVP == 0">-</p>
					        	<p v-if="dialog_data.state == 2"> -</p>
					        	<p v-if="dialog_data.state == 3"> -</p>
					        	<p v-if="dialog_data.state == 1 && dialog_data.price == 0 && dialog_data.DVP != 0"> {{dialog_data.DVP}} DVP</p>
						   </p>
						    <p class="tl">{{$t('message.ApplicationTime')}}: <span>{{dialog_data.write_time}}</span></p>
						    <p class="tl">{{$t('message.Status')}}：
						    	<span v-if="dialog_data.company_state == 1">{{$t('message.TheVendorclaimedVulnerability')}}</span>
						    	<span v-if="dialog_data.company_state == 3">{{$t('message.ClaimedDVP')}}</span>
						    </p>
						</div>
						<table class="wrapTxxqtable">
							<tbody>
								<tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
								<tr><td>{{$t('message.vulSerialNumber')}}</td><td>{{$t('message.vulnerability_level')}}</td><td>{{$t('message.vulTitle')}}</td><td>{{$t('message.vulvendor')}}</td><td>{{$t('message.vulStatus')}}</td><td>{{$t('message.claim_status')}}</td><td>{{$t('message.vulreward')}}</td><td>{{$t('message.submit_time')}}</td></tr>
								<tr>
									<td>{{dialog_data.vulSign}}</td>
									<td>
							        	<div v-if="dialog_data.state==0">
											<p v-if="dialog_data.level == 3"><span class="com-dot-lv ser-lv"></span> {{$t('message.seriousrisk')}}</p>
								        	<p v-if="dialog_data.level == 2"><span class="com-dot-lv high-lv"></span>{{$t('message.highrisk')}} </p>
								        	<p v-if="dialog_data.level == 1"><span class="com-dot-lv mid-lv"></span> {{$t('message.midrisk')}}</p>
								        	<p v-if="dialog_data.level == 0"><span class="com-dot-lv low-lv"></span> {{$t('message.lowrisk')}}</p>
										</div>
										<div v-if="dialog_data.state!=0">
											<p v-if="dialog_data.dvp_level == 3"><span class="com-dot-lv ser-lv"></span> {{$t('message.seriousrisk')}}</p>
								        	<p v-if="dialog_data.dvp_level == 2"><span class="com-dot-lv high-lv"></span>{{$t('message.highrisk')}} </p>
								        	<p v-if="dialog_data.dvp_level == 1"><span class="com-dot-lv mid-lv"></span> {{$t('message.midrisk')}}</p>
								        	<p v-if="dialog_data.dvp_level == 0"><span class="com-dot-lv low-lv"></span>  {{$t('message.lowrisk')}}</p>
										</div>
									</td>
									<td>
										{{dialog_data.title}}
									</td>
									<td>
										{{dialog_data.company}}
									</td>
									<td>
                                        <p v-if="dialog_data.state == 0 && dialog_data.reedit ==0"><i class="icon iconfont icon-shenhebijijishibenxiezi p8 ser"></i>{{$t('message.BeingAudit')}}</p>
							        	<p v-if="dialog_data.state == 0 && dialog_data.reedit ==1"><i class="icon iconfont icon-daishenhe2 p8 ser"></i>{{$t('message.SupplementInformationVerified')}}</p>
							        	<p v-if="dialog_data.state == 1"><i class="icon iconfont icon-fuxuankuang_xuanzhong p8 low"></i>{{$t('message.approved')}}</p>
							        	<p v-if="dialog_data.state == 2"><i class="icon iconfont icon-shalou_huaban p8 ser"></i>{{$t('message.VerificationFailedAdditionalInformationRequired')}}</p>
							        	<p v-if="dialog_data.state == 3"><i class="icon iconfont icon-shanchu p8 mid"></i>{{$t('message.not_approved')}}</p>
									</td>
									<td>
                                        <p v-if="dialog_data.state != 1 && dialog_data.company_state == 0">-</p>
                                        <p v-if="dialog_data.state == 1 && dialog_data.company_state == 0"> {{$t('message.notConfirm')}}</p>
                                        <p v-if="dialog_data.state == 1 && dialog_data.company_state == 1"> {{$t('message.ClaimedbyVendor')}}</p>
                                        <p v-if="dialog_data.state == 1 && dialog_data.company_state == 2 "> {{$t('message.VendorFailedClaimLoophole')}}</p>
                                        <p v-if="dialog_data.state == 1 && dialog_data.company_state == 3 "> {{$t('message.ClaimedDVP')}}	</p>
                                        <p v-if="dialog_data.state == 1 && dialog_data.company_state == 4 ">{{$t('message.DVPFailedClaimLoophole')}}</p>
                                        <p v-if="dialog_data.state == 1 && dialog_data.company_state == 5 ">{{$t('message.ClaimedbyVendor')}}</p>
					                    <p v-if="dialog_data.state == 1 && dialog_data.company_state == 6 ">{{$t('message.ToBeClaimed')}}</p>
					                    <p v-if="dialog_data.state == 0 && dialog_data.company_state == 6 ">{{$t('message.ToBeClaimed')}}</p>
									</td>
									<td>
										<p v-if="dialog_data.state != 1"> -</p>
							        	<p v-if="dialog_data.state == 1 && dialog_data.price == 0 && dialog_data.dvp == 0">-</p>
							        	<p v-if="dialog_data.state == 1 && dialog_data.price > 0 && dialog_data.dvp == 0"> {{dialog_data.price}} Ether</p>		        	
							        	<p v-if="dialog_data.state == 1 && dialog_data.price == 0 && dialog_data.dvp > 0"> {{dialog_data.dvp}} DVP</p>
							        	<p v-if="dialog_data.state == 1 && dialog_data.price > 0 && dialog_data.dvp > 0">{{dialog_data.price}} Ether <br /> {{dialog_data.dvp}} DVP</p>
									</td>
									<td>
										{{dialog_data.write_time}}
									</td>
								</tr>
							</tbody>

						</table>

				  </div>

	</div>
</template>

<script>
	export default {
		props: {
	       dialog_data: '',
	       required: true
	    },
		name: "wrapTxxq",
		 data() {
	        return {
	        	activeName: 'first',
	        	checked: true,
	        	centerDialogVisible: false,
	        }
      },
       methods: {
	       	initData(){

			},
		    handleSelectionChange(val) {
		        this.multipleSelection = val;
		     }
	    },
	    created:function(){
		   	this.initData();
		}
	}
</script>

<style>
	.text_center{
		text-align: center;
	}
	.tl{
		text-align: left !important;
	}
	.headerno .el-table__header-wrapper{
		display: none;
	}
	.headerno p{
		margin-bottom: 20px;
	}
	.wrapTxxqtable{
		width: 100%;
		margin-bottom: 50px !important;
	}
</style>
