<template>
	<el-table  :data="comLoopholeDatas"  style="width: 100%"  class="companymy_tab"  >
	    		<el-table-column class="hole_lv_th" prop="vulSign" :label="$t('message.vulSerialNumber')"  width="150"></el-table-column>
                <el-table-column class="hole_title_th" prop="title"  :label="$t('message.vulTitle')"  width="240">
                	<template slot-scope="scope">
						<div class="fl">
							<p class="font-lim1">{{scope.row.title}}</p>
		        			<span v-if="scope.row.dvp_level == 3" class="comVulLv ser_lv">{{$t('message.seriousrisk')}}</span>
							<span v-if="scope.row.dvp_level == 2" class="comVulLv high_lv">{{$t('message.highrisk')}}</span>
							<span v-if="scope.row.dvp_level == 1" class="comVulLv mid_lv">{{$t('message.midrisk')}}</span>
							<span v-if="scope.row.dvp_level == 0" class="comVulLv low_lv">{{$t('message.lowrisk')}}</span>
						</div>
						<div style="clear: both"></div>
						<p class="Vultime">{{scope.row.write_time}}</p>
					</template>
                </el-table-column>
                <el-table-column class="vul_author_th"  prop="hid"  :label="$t('message.VulnerabilityAuthor')"  width="auto">
                	<template slot-scope="scope">
			        	<p>{{scope.row.hid}}</p>
					</template>
                </el-table-column>
                <el-table-column class="hole_reward_th" prop="reward"  :label="$t('message.vulreward')"  width="110">
                	<template slot-scope="scope">
			        	<p v-if="scope.row.state != 1"> -</p>
			        	<p v-if="scope.row.state == 1 && scope.row.price == 0 && scope.row.dvp == 0">-</p>
			        	<p v-if="scope.row.state == 1 && scope.row.price > 0 && scope.row.dvp == 0"> {{scope.row.price}} Ether</p>		        	
			        	<p v-if="scope.row.state == 1 && scope.row.price == 0 && scope.row.dvp > 0"> {{scope.row.dvp}} DVP</p>
			        	<p v-if="scope.row.state == 1 && scope.row.price > 0 && scope.row.dvp > 0">{{scope.row.price}} Ether</p>
					</template>
                </el-table-column>
                <el-table-column class="hole_status_th" prop="status"  :label="$t('message.vulStatus')"  width="180">
                	<template slot-scope="scope">
			        	<p v-if="scope.row.company_state == 0 || scope.row.company_state == 6"><i :title="$t('icon_title.unclaimed')" class="icon iconfont icon-shalou_huaban p8 ser"></i>{{$t('message.vulUnclaimed')}}</p>
			        	<p v-if="scope.row.company_state == 1 && scope.row.is_fix == 0"><i :title="$t('message.ToBeFixed')" class="icon iconfont icon-daixiufu_huaban p8 ser"></i>{{$t('message.ToBeFixed')}}</p>
			        	<p v-if="scope.row.company_state == 1 && scope.row.is_fix == 1"><i :title="$t('icon_title.fixed')" class="icon iconfont icon-yixiufu_huaban p8 low"></i>{{$t('message.vulFixed')}}</p>
			        	<p v-if="scope.row.company_state == 2 && scope.row.is_fix == 0"><i :title="$t('message.ToBeFixed')" class="icon iconfont icon-daixiufu_huaban p8 ser"></i>{{$t('message.ToBeFixed')}}</p>
			        	<p v-if="scope.row.company_state == 2 && scope.row.is_fix == 1"><i :title="$t('icon_title.fixed')" class="icon iconfont icon-yixiufu_huaban p8 low"></i>{{$t('message.vulFixed')}}</p>
			        	<p v-if="scope.row.company_state == 3 && scope.row.is_fix == 0 && scope.row.dvpCompanyState == 0"><i :title="$t('message.IgnoredLoopholes')" class="icon iconfont icon-shanchu p8 mid"></i>{{$t('message.IgnoredLoopholes')}}</p>
			        	<p v-if="scope.row.company_state == 3 && scope.row.is_fix == 0 && scope.row.dvpCompanyState == 1"><i :title="$t('message.ToBeFixed')" class="icon iconfont icon-daixiufu_huaban p8 ser"></i>{{$t('message.ToBeFixed')}}</p>
			        	<p v-if="scope.row.company_state == 3 && scope.row.is_fix == 1 && scope.row.dvpCompanyState == 1"><i :title="$t('icon_title.fixed')" class="icon iconfont icon-yixiufu_huaban p8 low"></i>{{$t('message.vulFixed')}}</p>
			        	<p v-if="scope.row.company_state == 5 && scope.row.is_fix == 0"><i :title="$t('message.ToBeFixed')" class="icon iconfont icon-daixiufu_huaban p8 ser"></i>{{$t('message.ToBeFixed')}}</p>
			        	<p v-if="scope.row.company_state == 5 && scope.row.is_fix == 1"><i :title="$t('icon_title.fixed')" class="icon iconfont icon-yixiufu_huaban p8 low"></i>{{$t('message.vulFixed')}}</p>
					</template>
                </el-table-column>
                <el-table-column class="hole_operatation_th" prop=""  :label="$t('message.operatation')">
                	<template slot-scope="scope">
                		<router-link :to="{path: '/combox/wrapdetailComp', query: {id: scope.row.id }}"><img src="/static/image/common/editlook.png" alt="" /></router-link>
                	</template>
                </el-table-column>
           </el-table>
</template>

<script>
		export default {
		name: 'vulsCompCons',
		props:{
			comLoopholeDatas: ''
		},
        data(){
            return{
                loading:false
            }
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
	.companymy_tab thead tr th{
		background: transparent !important;
		background: #f5f9fc !important;
	}
</style>
