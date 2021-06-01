<template>
	<div>
		<el-table  :data="myVulslddtDatas"  style="width: 100%" class="myvul tabbg">
            <el-table-column class="vul_numbers_th"  prop="vulSign"  :label="$t('message.vulSerialNumber')"  width="140px"></el-table-column>
            <el-table-column prop="title"  :label="$t('message.vulTitle')"  width="240">
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
            <el-table-column class="hole_status_th" prop="state"  :label="$t('message.audit_status')"  width="140">
            	<template slot-scope="scope">
		        	<p v-if="scope.row.state == 0 && scope.row.reedit ==0"><i :title="$t('icon_title.beingAudit')" class="icon iconfont icon-shenhebijijishibenxiezi p8 ser"></i>{{$t('message.BeingAudit')}}</p>
		        	<p v-if="scope.row.state == 0 && scope.row.reedit ==1"><i :title="$t('icon_title.siVerified')" class="icon iconfont icon-daishenhe2 p8 ser"></i>{{$t('message.SupplementInformationVerified')}}</p>
		        	<p v-if="scope.row.state == 1"><i :title="$t('icon_title.approved')" class="icon iconfont icon-fuxuankuang_xuanzhong p8 low"></i>{{$t('message.approved')}}</p>
		        	<p v-if="scope.row.state == 2"><i :title="$t('icon_title.vfAdditional')" class="icon iconfont icon-shalou_huaban p8 ser"></i>{{$t('message.VerificationFailedAdditionalInformationRequired')}}</p>
		        	<p v-if="scope.row.state == 3"><i :title="$t('icon_title.verificationFailed')" class="icon iconfont icon-shanchu p8 mid"></i>{{$t('message.VerificationFailed')}}</p>
				</template>
            </el-table-column>
            <el-table-column class="hole_claim_th" prop="rlstatus"  :label="$t('message.vulStatus')"  width="125">
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
            <el-table-column class="hole_reward_th" prop="reward"  :label="$t('message.VendorRewards')"  width="90">
            	<template slot-scope="scope">
		        	<p v-if="scope.row.state != 1"> -</p>
		        	<p v-if="scope.row.state == 1 && scope.row.price == 0 && scope.row.dvp == 0">-</p>
		        	<p v-if="scope.row.state == 1 && scope.row.price > 0 && scope.row.dvp == 0"> {{scope.row.price}} Ether</p>		        	
		        	<p v-if="scope.row.state == 1 && scope.row.price == 0 && scope.row.dvp > 0"> {{scope.row.dvp}} DVP</p>
		        	<p v-if="scope.row.state == 1 && scope.row.price > 0 && scope.row.dvp > 0">{{scope.row.price}} Ether <br /> {{scope.row.dvp}} DVP</p>
				</template>
            </el-table-column>
            <el-table-column class="hole_operatation_th" prop=""  :label="$t('message.operatation')">
            	<template slot-scope="scope">
		        	<span v-if="scope.row.state == 2" class="cp">
		        		<router-link  :to="{path:'/membox/wrapdetail',query: {id:scope.row.id}}" ><img src="/static/image/common/edit.png" alt="" /></router-link>
		        	</span>
		        	<span v-if="scope.row.state == 0 || scope.row.state == 1 || scope.row.state == 3 || scope.row.state == 4"  class="cp">
		        		<router-link  :to="{path:'/membox/wrapdetail',query: {id:scope.row.id}}" ><img src="/static/image/common/editlook.png" alt=""/></router-link>
		        	</span>
				</template>
            </el-table-column>
       </el-table>
	</div>

</template>

<script>
	export default {
		name: 'vulsCons',
		props:{
			myVulslddtDatas: ''
		},
        methods:{
		  	initData(){

			}
		},
		created:function(){
		   	this.initData();
		}
	}
</script>

<style>
	.myvul{
		overflow: hidden !important;
	}
	.myvul thead th:nth-of-type(2){
		text-align: left !important;
	}
	.myvul{
		width: 100% !important;
	}
</style>
