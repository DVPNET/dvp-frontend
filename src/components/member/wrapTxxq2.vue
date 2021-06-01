<template>
	<div style="padding-bottom: 50px;">
			<h1 class="text_center">{{$t('message.WithdrawalsDetail')}}</h1>
				<div class="hole-status" style="margin-top: 50px;;">
						<div class="headerno">
							<p class="tl">
						    	{{$t('message.WithdrawalsTotal')}}:
						    	<span v-if="dialog_data.drawInfo.type == 0">{{dialog_data.drawInfo.price}} Ether</span>
						    	<span v-if="dialog_data.drawInfo.type == 1"> {{dialog_data.drawInfo.price}} DVP</span>
						    </p>
						    <p class="tl">{{$t('message.TransactionNumber')}}:
						    	<span v-if='dialog_data.drawInfo.transaction_number != "" '><a :href="'https://etherscan.io/address/'+dialog_data.drawInfo.transaction_number">{{dialog_data.drawInfo.transaction_number}}</a></span>
						    	<span v-if='dialog_data.drawInfo.transaction_number == "" ' >-</span>
						    </p>
						    <p class="tl">{{$t('message.ApplicationTime')}}: <span>{{dialog_data.drawInfo.writetime}}</span></p>
						    <p class="tl">{{$t('message.WithdrawalsStatus')}}:
						    	<span v-if="dialog_data.drawInfo.state == 0">{{$t('message.BeingWithdrawals')}}</span>
						    	<span v-if="dialog_data.drawInfo.state == 1">{{$t('message.WithdrawalsSuccess')}}</span>
						    </p>
						</div>

				    <el-table  :data="dialog_data.drawInfoList.data"  style="width: 100%" class="myvul">
		                <el-table-column class="vul_numbers_th"  prop="vulSign"  :label="$t('message.vulSerialNumber')"  width="140px"></el-table-column>
		                <el-table-column class="hole_lv_th" prop="level"  :label="$t('message.vulnerability_level')"  width="100px">
		                	<template slot-scope="scope">
					        	<div v-if="scope.row.state==0">
									<p v-if="scope.row.level == 3"><span class="com-dot-lv ser-lv"></span> {{$t('message.seriousrisk')}}</p>
						        	<p v-if="scope.row.level == 2"><span class="com-dot-lv high-lv"></span>{{$t('message.highrisk')}} </p>
						        	<p v-if="scope.row.level == 1"><span class="com-dot-lv mid-lv"></span> {{$t('message.midrisk')}}</p>
						        	<p v-if="scope.row.level == 0"><span class="com-dot-lv low-lv"></span> {{$t('message.lowrisk')}}</p>
								</div>
								<div v-if="scope.row.state!=0">
									<p v-if="scope.row.dvp_level == 3"><span class="com-dot-lv ser-lv"></span>  {{$t('message.seriousrisk')}}</p>
						        	<p v-if="scope.row.dvp_level == 2"><span class="com-dot-lv high-lv"></span>{{$t('message.highrisk')}} </p>
						        	<p v-if="scope.row.dvp_level == 1"><span class="com-dot-lv mid-lv"></span> {{$t('message.midrisk')}}</p>
						        	<p v-if="scope.row.dvp_level == 0"><span class="com-dot-lv low-lv"></span>  {{$t('message.lowrisk')}}</p>
								</div>
							</template>
		                </el-table-column>
		                <el-table-column class="hole_title_th" prop="title"  :label="$t('message.vulTitle')"  width="auto"></el-table-column>
		                <el-table-column class="hole_vendor_th" prop="company"  :label="$t('message.vulvendor')"></el-table-column>
		                <el-table-column class="hole_status_th" prop="state"  :label="$t('message.vulStatus')"  width="auto">
				        	<template slot-scope="scope">
					        	<p v-if="scope.row.state == 0 && scope.row.reedit ==0"><i class="icon iconfont icon-shenhebijijishibenxiezi p8 ser"></i>{{$t('message.BeingAudit')}}</p>
					        	<p v-if="scope.row.state == 0 && scope.row.reedit ==1"><i class="icon iconfont icon-daishenhe2 p8 ser"></i>{{$t('message.SupplementInformationVerified')}}</p>
					        	<p v-if="scope.row.state == 1"><i class="icon iconfont icon-fuxuankuang_xuanzhong p8 low"></i>{{$t('message.approved')}}</p>
					        	<p v-if="scope.row.state == 2"><i class="icon iconfont icon-shalou_huaban p8 ser"></i>{{$t('message.VerificationFailedAdditionalInformationRequired')}}</p>
					        	<p v-if="scope.row.state == 3"><i class="icon iconfont icon-shanchu p8 mid"></i>{{$t('message.VerificationFailed')}}</p>
							</template>
		                </el-table-column>
		                <el-table-column class="hole_claim_th" prop="rlstatus"  :label="$t('message.claim_status')"  width="auto">
			            	<template slot-scope="scope">
			                    <p v-if="scope.row.state != 1 && scope.row.company_state == 0">-</p>
			                    <p v-if="scope.row.state == 1 && scope.row.company_state == 0">{{$t('message.notConfirm')}}</p>
			                    <p v-if="scope.row.state == 1 && scope.row.company_state == 1">{{$t('message.ClaimedbyVendor')}}</p>
			                    <p v-if="scope.row.state == 1 && scope.row.company_state == 2 ">{{$t('message.VendorFailedClaimLoophole')}}</p>
			                    <p v-if="scope.row.state == 1 && scope.row.company_state == 3 ">{{$t('message.ClaimedDVP')}}	</p>
			                    <p v-if="scope.row.state == 1 && scope.row.company_state == 4 ">{{$t('message.DVPFailedClaimLoophole')}}</p>
			                    <p v-if="scope.row.state == 1 && scope.row.company_state == 5 ">{{$t('message.ClaimedbyVendor')}}</p>
			                    <p v-if="scope.row.state == 1 && scope.row.company_state == 6 ">{{$t('message.ToBeClaimed')}}</p>
			                    <p v-if="scope.row.state == 0 && scope.row.company_state == 6 ">{{$t('message.ToBeClaimed')}}</p>
							</template>
		                </el-table-column>
		                <el-table-column class="hole_reward_th" prop="reward"  :label="$t('message.vulreward')"  width="auto">
		                	<template slot-scope="scope">
					        	<p v-if="scope.row.state != 1"> -</p>
					        	<p v-if="scope.row.state == 1 && scope.row.price == 0 && scope.row.dvp == 0">-</p>
					        	<p v-if="scope.row.state == 1 && scope.row.price > 0 && scope.row.dvp == 0"> {{scope.row.price}} Ether</p>		        	
					        	<p v-if="scope.row.state == 1 && scope.row.price == 0 && scope.row.dvp > 0"> {{scope.row.dvp}} DVP</p>
					        	<p v-if="scope.row.state == 1 && scope.row.price > 0 && scope.row.dvp > 0">{{scope.row.price}} Ether <br /> {{scope.row.dvp}} DVP</p>
							</template>
		                </el-table-column>
		                <el-table-column class="hole_time_th" prop="update_time"   :label="$t('message.submit_time')" width="100px"></el-table-column>
		           </el-table>

				  </div>

	</div>
</template>

<script>
	export default {
		props: {
	       dialog_data: '',
	       required: true
	    },
		name: "wrapTxxq2",
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
</style>
