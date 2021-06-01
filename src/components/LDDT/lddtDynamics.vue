<template>
	<el-table  :data="lddtDatas"  style="width: 100%"   v-loading="loading" class="lddtcons">
        <el-table-column prop="num"  :label="$t('message.vulSerialNumber')"  width="auto"></el-table-column>
        <el-table-column prop="title"  :label="$t('message.vulTitle')"  width="350">
			<template slot-scope="scope">
					<p>
						<p v-if="scope.row.is_open == 0" class="font-lim">{{scope.row.title}}</p>
		        		<p v-if="scope.row.is_open == 1"  class="font-lim">
		        			<router-link :to="{path:'/detail',query: {id:scope.row.id}}" > {{ scope.row.title }}</router-link>
		        		</p>
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
</p><p class="fl"><span v-if="scope.row.is_open == 1"><router-link :to="{path:'/detail',query: {id:scope.row.id}}" ><i :title="$t('icon_title.disclosed')" class="icon iconfont icon-yanjing_huaban ser" style="margin-right: 5px;"></i></router-link></span><span v-if="scope.row.company_state == 0"><i :title="$t('icon_title.unclaimed')" class="icon iconfont icon-shalou_huaban ser"></i></span><span v-if="scope.row.company_state != 0 && scope.row.is_fix != 0 || scope.row.company_state != 0 && scope.row.is_open == 1"><i class="icon iconfont icon-yixiufu_huaban p8 low" :title="$t('icon_title.fixed')"></i></span><span v-if="scope.row.company_state == 1 && scope.row.is_open != 1 && scope.row.flag != 1 || scope.row.company_state == 3 && scope.row.is_open != 1 && scope.row.flag != 1"><i :title="$t('icon_title.confirmed')" class="icon iconfont icon-fuxuankuang_xuanzhong p8 low"></i></span></p>
					<br />
					<p class="Vultime">{{scope.row.update_time}}</p>
			</template>
		</el-table-column>
        <el-table-column prop="hid"  :label="$t('message.WhitehatID')"  width="auto">
        	<template slot-scope="scope">
        		<p class="font-lim" style="margin-right: 8px;">	{{scope.row.hid}}</p>
        		<div class="imgfr fl">
        			<span v-if='scope.row.cash >= 0 && scope.row.cash <100'><img :title="$t('icon_title.temporary')" src="/static/image/risk/linshi.png" alt="" /></span>
	            	<span v-if='scope.row.cash >= 100 && scope.row.cash <1000'><img :title="$t('icon_title.bronze')" src="/static/image/risk/qingtong.png" alt="" /></span>
	            	<span v-if='scope.row.cash >= 1000 && scope.row.cash <5000'><img :title="$t('icon_title.gold')" src="/static/image/risk/huangjin.png" alt="" /></span>
	            	<span v-if='scope.row.cash >= 5000 && scope.row.cash <20000'><img :title="$t('icon_title.platinum')" src="/static/image/risk/baijin.png" alt="" /></span>
	            	<span v-if='scope.row.cash >= 20000 && scope.row.cash <50000'><img :title="$t('icon_title.diamond')" src="/static/image/risk/zuanshi.png" alt="" /></span>
	            	<span v-if='scope.row.cash >= 50000 && scope.row.cash '><img :title="$t('icon_title.challenger')" src="/static/image/risk/caijin.png" alt="" /></span>
        		</div>
        		
        	</template>
        </el-table-column>
        <el-table-column prop="company"  :label="$t('message.vulvendor')"  width="auto">
        	<template slot-scope="scope">
        		<a href="#" @click="comAscription(scope.row.redirect,scope.row.company)">{{ scope.row.company }}</a>
        		<span v-if="scope.row.comState == 1" style="padding-left: 5px;"><img :title="$t('icon_title.dvp_partners')" src="/static/image/home/Security_aut.png" alt="" /></span>
        		<span v-if="scope.row.comState == 1 && scope.row.publish == 1" style="padding-left: 5px;"><img :title="$t('icon_title.bountyVendor')" src="/static/image/home/conpanyYXicon.png" alt="" /></span>
        		<span v-if="scope.row.comState != 1" style="padding-left: 5px;"></span>
	     	</template>
        </el-table-column>
    	<el-table-column prop=""  :label="$t('message.vulreward')"  width="100">
        	<template slot-scope="scope">
        		<div class='titlecolor tabfontsixbold'>
        			
		        	<p v-if="scope.row.state == 2"> -</p>
		        	<p v-if="scope.row.state == 3"> -</p>
					<span v-if="scope.row.publish == 1">
						<span v-if="scope.row.company_state == 1">
							 <p v-if="scope.row.state == 0 "> -</p>
							<p v-if="scope.row.state == 1 && scope.row.price != 0 && scope.row.dvp == 0"> {{scope.row.price}} Ether</p>
							<p v-if="scope.row.state == 1 && scope.row.price == 0 && scope.row.dvp == 0 ">-</p>
							<p v-if="scope.row.state == 1 && scope.row.price == 0 && scope.row.dvp != 0 "> {{scope.row.dvp}} DVP</p>
							<p v-if="scope.row.state == 1 && scope.row.price != 0 && scope.row.dvp != 0 " class="vulprice"> <span>{{scope.row.price}} Ether</span><span> {{scope.row.dvp}} DVP</span></p>
						</span>
						<span v-else>
					   		 <p> -</p>
						</span>

					</span>
					<span v-else >
					<p v-if="scope.row.state == 0"> -</p>
						<p v-if="scope.row.state == 1 && scope.row.price != 0 && scope.row.dvp == 0 "> {{scope.row.price}} Ether</p>
						<p v-if="scope.row.state == 1 && scope.row.price == 0 && scope.row.dvp == 0 ">-</p>
						<p v-if="scope.row.state == 1 && scope.row.price == 0 && scope.row.dvp != 0 "> {{scope.row.dvp}} DVP</p>
						<p v-if="scope.row.state == 1 && scope.row.price != 0 && scope.row.dvp != 0 " class="vulprice"> <span>{{scope.row.price}} Ether</span><span> {{scope.row.dvp}} DVP</span></p>
					</span>
        		</div>
    				
	     	</template>
        </el-table-column>
		 <el-table-column prop=""  label="" width="150">
        	<template slot-scope="scope">
	        	<div v-if="scope.row.company_state == 0">
	        		<el-button @click="CScompany"  size="mini" round class='namicsbtn'>{{$t('btn.claim_vul')}}</el-button>
	        	</div>
        	</template>
        </el-table-column>
   </el-table>
</template>

<script>
	export default {
		name: 'lddtDynamics',
		props:{
			lddtDatas:'',
		},
		data(){
			return{
				loading: false,
				tokenType:0
			}
		},
		methods:{
			initData(){
				this.tokenType=window.localStorage.getItem('tokenType')
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
		},
		created:function(){
	   		this.initData();
		}
	}
</script>

<style scoped>
	.lddtcons thead tr th{
		text-align: left !important;
	}
    .icon-yanjing{
        color: #2196f3;
        cursor: pointer;
        font-size: 24px;
    }
    .namicsbtn{
    	color: #2196f3;
    	border: 1px solid #2196f3;
    	background: inherit !important;
    }
    .namicsbtn:hover{
    	background: #2196f3 !important;
    	color: #ffffff;
    }
</style>
