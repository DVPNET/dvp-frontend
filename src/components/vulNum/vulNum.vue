<template>
	<div class="vulNum">
		<el-table  :data="lddtData"  stripe>
            <el-table-column prop="vulSign" :label="$t('message.vulSerialNumber')" width="180px"></el-table-column>
            <el-table-column prop="title"  :label="$t('message.vulTitle')"  width="260px">
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
            <el-table-column prop="hid"  :label="$t('message.WhitehatID')"  width="auto">
            	<template slot-scope="scope">
        		<p>	{{scope.row.hid}}</p>
        		<span v-if='scope.row.cash >= 0 && scope.row.cash <100'><img src="/static/image/risk/linshi.png" alt="" /></span>
            	<span v-if='scope.row.cash >= 100 && scope.row.cash <1000'><img src="/static/image/risk/qingtong.png" alt="" /></span>
            	<span v-if='scope.row.cash >= 1000 && scope.row.cash <5000'><img src="/static/image/risk/huangjin.png" alt="" /></span>
            	<span v-if='scope.row.cash >= 5000 && scope.row.cash <20000'><img src="/static/image/risk/baijin.png" alt="" /></span>
            	<span v-if='scope.row.cash >= 20000 && scope.row.cash <50000'><img src="/static/image/risk/zuanshi.png" alt="" /></span>
            	<span v-if='scope.row.cash >= 50000 && scope.row.cash '><img src="/static/image/risk/caijin.png" alt="" /></span>
        	</template>
            </el-table-column>
            <el-table-column prop="company"  :label="$t('message.vulvendor')"  width="auto">
            	<template slot-scope="scope">
		        	<p>{{ scope.row.company }}</p>
		     	</template>
            </el-table-column>
            <el-table-column prop="price"  :label="$t('message.vulreward')"  width="120px">
				<template slot-scope="scope">
    				<p v-if="scope.row.state != 1"> -</p>
		        	<p v-if="scope.row.state == 1 && scope.row.price == 0 && scope.row.dvp == 0">-</p>
		        	<p v-if="scope.row.state == 1 && scope.row.price > 0 && scope.row.dvp == 0"> {{scope.row.price}} Ether</p>		        	
		        	<p v-if="scope.row.state == 1 && scope.row.price == 0 && scope.row.dvp > 0"> {{scope.row.dvp}} DVP</p>
		        	<p v-if="scope.row.state == 1 && scope.row.price > 0 && scope.row.dvp > 0">{{scope.row.price}} Ether <br /> {{scope.row.dvp}} DVP</p>
	     		</template>
            </el-table-column>
       </el-table>  
	</div>         
</template>

<script>
	export default {
		props:{
			lddtData:''
		},
		name: 'vulNum',
		data() {
	      return {
	      	
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
	.el-table td{
		white-space: nowrap;
	}
	.vulNum .el-table{
		height: 600px;
		overflow: auto;
	}
</style>