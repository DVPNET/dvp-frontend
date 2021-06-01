<template>
	<el-container>
			<el-header class='vulscons'>
				<el-select v-model="value2" :placeholder="$t('message.vulStatus')" class="selectVul fr" @change="selectVul2">
				    <el-option
				    	v-for="item in options2"
					      :key="item.id"
					      :label="item.label"
					      :value="item.id">
				    </el-option>
			 </el-select>
				<el-select v-model="value1" :placeholder="$t('message.audit_status')" class="selectVul fr" @change="selectVul1">
				    <el-option
				    	v-for="item in options1"
					      :key="item.id"
					      :label="item.label"
					      :value="item.id">
				    </el-option>
			 </el-select>
			</el-header>
			<div style="margin-top: -60px">
				 <div class="itemvuls">
			  		<el-badge :value="myVulslddtDatanum[0]" v-if="!myVulslddtDatanum[0]==0" class="item item1"></el-badge>
			  		<el-badge value="" v-if="!myVulslddtDatanum[0]!=0"  class="item item1" style="z-index: 999;width: 18px;"></el-badge>
  			    	<el-badge :value="myVulslddtDatanum[2]" v-if="!myVulslddtDatanum[2]==0"  class="item item2"></el-badge>
  			    	<el-badge value="" v-if="!myVulslddtDatanum[2]!=0"  class="item item2"></el-badge>
			  	</div>
			 	<el-tabs v-model="activeName" @tab-click="handleClick" class="lddt_wrap table-title-line">
					<el-tab-pane :label="$t('message.all')" name="first" class="vul_state" >
						<vulsCons :myVulslddtDatas="myVulslddtData" v-loading="loading"></vulsCons>
					</el-tab-pane>
					<el-tab-pane :label="$t('message.BeingAudit')" name="second" class="vul_state">
						<vulsCons2 :myVulslddtDatas="myVulslddtData" v-loading="loading"></vulsCons2>
					</el-tab-pane>
					<el-tab-pane :label="$t('message.VerificationFailedAdditionalInformationRequired')" name="three" class="vul_state">
	  					<vulsCons :myVulslddtDatas="myVulslddtData" v-loading="loading"></vulsCons>
	  				</el-tab-pane>
  			   </el-tabs>
			</div>
            <div class="block pages" id="pages"  v-if="total !=0" style="text-align: right">
                <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page.sync="currentPage"
                    :page-size="pagesize"
                    layout="total,prev, pager, next"
                    :total="total">
                </el-pagination>
			</div>

	</el-container>
</template>

<script>
	import vulsCons from '@/components/member/vulsCons'
	import vulsCons2 from '@/components/member/vulsCons2'
	export default {
		name: 'ruls',
		components:{vulsCons,vulsCons2},
		 data() {
	        return {
	        	mess:'<el-badge :value="myVulslddtData.length" class="item"><div>待审核</div></el-badge>',
	        	total:0,//默认数据总数
                pagesize: 0,//每页的数据条数
                currentPage:1,//默认开始页面
	        	dialogMyVul_data:'',
	        	activeName: 'first',
	         	myVulslddtData: [],
	         	myVulslddtDataD:[],
	         	myVulslddtDataW:[],
	         	options1: [{ id: 'all', label: '全部' },{ id: 0, label: '待审核' }, {  id: 1, label: '审核通过'  }, {  id: 2, label: '审核未通过：补充信息'  }, {  id: 3, label: '审核未通过'  },{id:5,label:'补充待审核'}],
			    options2: [{ id: 'all', label: '全部' },{   id: 0, label: '待认领' }, { id: 1,label: '厂商认领'},{ id: 2, label: '厂商不认领' },{ id: 3, label: 'DVP认领' }],
			    value2:'all',
			    value1:'all',
			    myVulslddtDatanum:[],
                loading:false,
                lang: 'zh'
	        }
      },
      mounted(){	  
         	this.lang=localStorage.getItem('locale')
		   if(this.lang=='zh'){
		   		this.$router.push({ path: '/membox/member/vuls' })
		   }else if(this.lang=='en' || this.lang==null || this.lang==''){
		   		this.$router.push({ path: '/membox/member/vuls_en' })
		   }else if(this.lang=='ko'){
		   		this.$router.push({ path: '/membox/member/vuls_ko' })
		   }
	  },
      methods:{
		  	initData(){
                this.loading = true
                setTimeout(() => {
                    this.loading = false;
                }, 500);
				var _this = this;
				this.$ajax.BMZvulList({"status": 'all'	,"type": 'all'	})
				.then(res => {
					if(res.errcode===1){
						_this.myVulslddtData = res.data.vulList.data;
						_this.total = res.data.vulList.total
						_this.pagesize = res.data.vulList.per_page
						_this.myVulslddtDatanum=res.data.vulCount
					}
				})
			},
		  	handleClick(tab,event){
                this.loading = true
                setTimeout(() => {
                    this.loading = false;
                }, 500);
		  		this.myVulslddtData=[]
		  		var indexs=tab.index
		  		if(indexs==1){
		  			this.value1=0
		  			this.value2='all'
		  			this.$ajax.BMZvulList({"status": 0,"type": 'all'		})
					.then(res => {
						if(res.errcode===1){
							this.myVulslddtData = res.data.vulList.data;
							this.total = res.data.vulList.total
							this.pagesize = res.data.vulList.per_page
							this.myVulslddtDatanum=res.data.vulCount
						}

					})
		  		}else if(indexs==2){
		  			this.value1=2
		  			this.value2='all'
		  			this.$ajax.BMZvulList({"status": 2,"type": 'all'		})
					.then(res => {
						if(res.errcode===1){
							this.myVulslddtData = res.data.vulList.data;
							this.total = res.data.vulList.total
							this.pagesize = res.data.vulList.per_page
						}
					})
		  		}else if(indexs==0){
		  			this.value1='all'
		  			this.value2='all'
		  			this.$ajax.BMZvulList({"status": 'all',"type": 'all'	})
					.then(res => {
						if(res.errcode===1){
							this.myVulslddtData = res.data.vulList.data;
							this.total = res.data.vulList.total
							this.pagesize = res.data.vulList.per_page
						}

					})
		  		}
		  	},
		  	selectVul2(){
		  		this.myVulslddtData=[]
		  		this.value1='all'
		  		let state = this.value1;
				let type = this.value2;
				if(state==0){
					this.activeName = 'second'
				}else if(state==2){
					this.activeName = 'three'
				}else{
					this.activeName = 'first'
				}
				this.$ajax.BMZvulList({"status": state,"type":type})
				.then(res => {
					if(res.errcode===1){
						this.myVulslddtData = res.data.vulList.data;
						this.total = res.data.vulList.total
						this.pagesize = res.data.vulList.per_page
					}

				})
		  	},
		  	selectVul1(){
		  		this.myVulslddtData=[]
		  		this.value2='all'
		  		let state = this.value1;
				let type = this.value2;
				if(state==0){
					this.activeName = 'second'
				}else if(state==2){
					this.activeName = 'three'
				}else{
					this.activeName = 'first'
				}
				this.$ajax.BMZvulList({"status": state,"type":type})
				.then(res => {
					if(res.errcode===1){
						this.myVulslddtData = res.data.vulList.data;
						this.total = res.data.vulList.total
						this.pagesize = res.data.vulList.per_page
					}

				})
		  	},

		  	handleSizeChange(pagesize){
		  		this.pagesize = pagesize;
		  	},
		  	handleCurrentChange(currentPage){
			  this.currentPage == currentPage
			 this.$ajax.BMZvulList({"status": this.value1,"type": this.value2,"page": this.currentPage})
				.then(res => {
					if(res.errcode===1){
						this.myVulslddtData = res.data.vulList.data;
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
	.table-title-line .el-tabs__nav-scroll{
		border-bottom: 1px solid #E2EAF1;
	}
	.itemvuls{
		padding-left: 115px;
	}
	.itemvuls .item{
        margin-bottom: -35px;
	}
	.itemvuls .item1{
		margin-left: 0;
		z-index: 9999999;
	}
	.itemvuls .item2{
		margin-left: 178px;
		z-index: 9999999;
	}
	.BMZmenucons{
		margin-bottom: 50px;
	}
	.selectVul{
		z-index: 9;
		margin-top: 15px;
		width: 150px;
		margin-left: 10px;
	}
    .selectVul input{
        height: 35px !important;
    }
	.vulscons .el-tabs__item{
		font-size: 16px !important;
	}
	.hole-detailed-wrap{
		width: auto !important;
	}
	.hole-detailed{
		box-sizing: border-box;
	}
	.hole-detailed-wrap{
		padding-top: 0;
	}
	.hole-table .el-icon-view{
		color: #2196F3;
		margin-left: 5px;
		font-weight: 600;
		font-size: 16px;
	}
	.hole-table .el-icon-edit-outline{
		font-weight: 400;
		font-size: 16px;
		color: #4a4c52 !important;
	}
	.hole-table .el-icon-edit-outline:hover{
		color: #2196F3 !important;
	}
	.myvul  table>thead>tr>th{
		font-size: 16px !important;
		font-family: "微软雅黑";
		color: #4c5b6a;
		font-weight: 400;
	}
	.lddt_wrap .el-tabs__item{
		font-size: 16px;
	}
</style>
