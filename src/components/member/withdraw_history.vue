<template>
	<el-container>
			<el-header class='hole-top'>
				<p>{{$t('message.Details')}}</p>
				<!--收入、支出-->
				<el-select v-model="value2" :placeholder="$t('message.allData')" class="with_topSelect" @change="withdrawTypeBtn">
				    <el-option
				    	v-for="item in options2"
					      :key="item.id"
					      :label="item.label"
					      :value="item.id"></el-option>
				  </el-select>
				<!--声誉、Ether、DVP-->
				<el-select v-model="value1" :placeholder="$t('message.allData')" class="with_topSelect" @change="withdrawStateBtn">
				    <el-option
				    	v-for="item in options1"
					      :key="item.id"
					      :label="item.label"
					      :value="item.id"></el-option>
				  </el-select>

			</el-header>
	    	<el-table  :data="mymxjl_data"  class="tabbg"   style="width: 100%;margin-bottom: 50px;" v-show="mxjl" v-loading="loading">
                <el-table-column prop="writetime" class="apply-time"  :label="$t('message.Time')"  width="160px"></el-table-column>
                <el-table-column prop="price" class="withdraw-total"   :label="$t('message.Rewards')" width="auto">
                	<template slot-scope="scope">
                		<!--<p>{{scope.row.price}}</p>
                		<p v-if="scope.row.pay_state == 1">{{scope.row.price}}</p>-->
                		<div  v-if="scope.row.pay_state == 0">
                			<p v-if="scope.row.type == 0 || scope.row.type == 1">{{scope.row.price}}</p>
	                		<p v-if="scope.row.type == 4">{{scope.row.price/100}}</p>
	                		<p v-if="scope.row.type == 2 || scope.row.type ==3">{{scope.row.price}}</p>
                		</div>
                		<div  v-if="scope.row.pay_state == 1">
                			<p v-if="scope.row.type == 0 || scope.row.type == 1" class='red'>-{{scope.row.price}}</p>
	                		<p v-if="scope.row.type == 4" class='red'>-{{scope.row.price/100}}</p>
	                		<p v-if="scope.row.type == 2 || scope.row.type ==3" class='red'>-{{scope.row.price}}</p>
                		</div>
                	</template>
                </el-table-column>
                <el-table-column prop="type" class="withdraw-coin"  :label="$t('message.Symbol')	" width="150">
                	<template slot-scope="scope">
                		<p v-if="scope.row.type ==0 || scope.row.type ==2">Ether</p>
                		<p v-if="scope.row.type ==1 || scope.row.type ==3">DVP</p>
                		<p v-if="scope.row.type ==4">{{$t('message.Reputation')}}</p>
                	</template>
                </el-table-column>
                <el-table-column prop="pay_state" class="withdraw-type" :label="$t('message.Types')"  width="160">
                	<template slot-scope="scope">
                		<p v-if="scope.row.pay_state == 0">{{$t('message.vulreward')}}</p>
                		<p v-if="scope.row.pay_state == 1">{{$t('message.Withdraw')}}</p>
                	</template>
                </el-table-column>
                <el-table-column prop="transaction_con" class="transaction-number"  :label="$t('message.TransactionNumber')"  width="110px">
                	<template slot-scope="scope">
                		<p v-if="!scope.row.transaction_con">-</p>
                		<p v-if="scope.row.transaction_con"><a :href="scope.row.transaction_url">{{scope.row.transaction_con}}</a></p>
                	</template>
                </el-table-column>
                <el-table-column prop=""  class="withdraw-operate" :label="$t('message.operatation')">
                	<template slot-scope="scope">
                		<p class="cp" v-if="scope.row.pay_state == 0" @click="dialogtxxqBtn(scope.$index,scope.row.id)"><img src="/static/image/common/editlook.png" alt=""/></p>
                		<p class="cp"  v-if="scope.row.pay_state == 1" @click="dialogtxxqBtn2(scope.$index,scope.row.id)"><img src="/static/image/common/editlook.png" alt=""/></p>
                	</template>
                </el-table-column>
            </el-table>

			<el-table  :data="mymxjl_data"  stripe  style="width: 100%;margin-bottom: 50px;"  v-cloak v-show="!mxjl" v-loading="loading">
                <el-table-column prop="writetime" class="apply-time"  :label="$t('message.Time')" ></el-table-column>
                <el-table-column prop="price" class="apply-time"  :label="$t('message.Reputation')">
                	<template slot-scope="scope">
                		<p v-if="scope.row.type == 0 || scope.row.type == 1">+{{scope.row.price}}</p>
                		<p v-if="scope.row.type == 4">+{{scope.row.price/100}}</p>
                		<p v-if="scope.row.type == 2 || scope.row.type ==3" class="red">-{{scope.row.price}}</p>
                	</template>
                </el-table-column>
                <el-table-column prop="pay_state" class="withdraw-type" :label="$t('message.Types')"  width="auto">
                	<template slot-scope="scope">
                		<p v-if="scope.row.pay_state == 0">{{$t('message.vulreward')}}</p>
                		<p v-if="scope.row.pay_state == 1">{{$t('message.Withdraw')}}</p>
                	</template>
                </el-table-column>
            </el-table>

            <div class="block pages" id="pages"  v-if="total !=0">
   				<el-pagination
			   		@size-change="handleSizeChange"
   				   @current-change="handleCurrentChange"
   				    :current-page.sync="currentPage"
   				    :page-size="pagesize"
					layout="total,prev, pager, next"
					:total="total">
				</el-pagination>
			</div>
            <!--提现详情-->
            <el-dialog
				title=""
				class="withdrawxq"
				:visible.sync="dialogtxxq"
				width="1170px">
                <wrapTxxq  :dialog_data="dialogl_data"></wrapTxxq>
			</el-dialog>
			<el-dialog
				title=""
				class="withdrawxq"
				:visible.sync="dialogtxxq2"
				width="1170px">
				  	<wrapTxxq2  :dialog_data="dialogl_data"></wrapTxxq2>
			</el-dialog>
	</el-container>
</template>

<script>
	import wrapTxxq from '@/components/member/wrapTxxq'
	import wrapTxxq2 from '@/components/member/wrapTxxq2'
	export default {
		name: 'ruls',
		components:{wrapTxxq,wrapTxxq2},
		 data() {
	        return {
	        	total:0,//默认数据总数
                pagesize: 0,//每页的数据条数
                currentPage:1,//默认开始页面
		        options1: [{ id: 'all', label: '所有' },{ id: 0, label: '漏洞奖励' }, {  id: 1, label: '提现'  }],
			    options2: [{ id: 'all', label: '所有' },{   id: 0, label: 'Ether' }, { id: 1,label: 'DVP'},{ id: 2, label: '声誉' }],
		        value1: 'all',
		        value2: 'all',
	            dialogtxxq: false,
	            dialogtxxq2:false,
	            mymxjl_data: [],
	            dialogl_data: [],
	            mxjl: true,
                loading: false,
                lang: 'zh'
	        }
   		},
        watch:{
            '$route' (){
                this.initData();
            }
        },
        mounted (){
            this.initData();
        },
    	methods:{
    	  	dialogtxxqBtn(ind,id){
    	  		this.dialogl_data =[]
    	  		this.dialogtxxq = true
    	  		let txxqData={
    	  			"aid": id
    	  		}
    	  		this.$ajax.BMZvulQwithdrawDetail(txxqData)
				.then(res => {
					if(res.errcode===1){
						this.dialogl_data = res.data.drawInfoList;
						console.log(this.dialogl_data )
					}
				})
    	  	},
    	  	dialogtxxqBtn2(ind,id){
    	  		this.dialogl_data =[]
    	  		this.dialogtxxq2 = true
    	  		let txxqData = {
    	  			"aid": id
    	  		}
    	  		this.$ajax.BMZvulQwithdrawDetail(txxqData)
				.then(res => {
					if (res.errcode === 1) {
						this.dialogl_data = res.data
					}
				})
    	  	},
		  	initData(){
                this.loading = true
                setTimeout(() => {
                    this.loading = false;
                }, 500);
                this.lang=localStorage.getItem('locale')
                if(this.lang=='zh'){
                	this.options1=[{ id: 'all', label: '所有' },{ id: 0, label: '漏洞奖励' }, {  id: 1, label: '提现'  }]
			    	this.options2=[{ id: 'all', label: '所有' },{   id: 0, label: 'Ether' }, { id: 1,label: 'DVP'},{ id: 2, label: '声誉' }]
                }else if(this.lang=='en' || this.lang==null || this.lang=='' || this.lang=='ko'){
                	this.options1=[{ id: 'all', label: 'all' },{ id: 0, label: 'vulnerability reward' }, {  id: 1, label: 'Withdraw'  }]
			   		this.options2=[{ id: 'all', label: 'all' },{   id: 0, label: 'Ether' }, { id: 1,label: 'DVP'},{ id: 2, label: 'Reputation' }]
                }
				var _this = this;
				//提现交易列表
					let state = this.$route.query.state
					let type = this.$route.query.type
					for(var i = 0; i < this.options1.length; i++) {
                        if(this.options1[i].id == state){
                            this.value1 = this.options1[i].label
                        }
                    }
					for(var i = 0; i < this.options2.length; i++) {
						if(this.options2[i].id == type){
							this.value2 = this.options2[i].label
						}
					}
					if(type == 2){
						this.mxjl = false
					}else{
						this.mxjl = true
					}
					this.$ajax.BMZvulQwithdrawList({"state": state,"type":type})
					.then(res => {
						if(res.errcode===1){
							_this.mymxjl_data = res.data.list.data;
							_this.total = res.data.list.total
							_this.pagesize = res.data.list.per_page
						}

					})
			},
			/*收入、支出*/
			withdrawStateBtn(){
				this.value2='all'
                this.loading = true
                setTimeout(() => {
                    this.loading = false;
                }, 500);
				this.$ajax.BMZvulQwithdrawList({"state": this.value1,"type":this.value2})
				.then(res => {
					if(res.errcode===1){
						this.mymxjl_data = res.data.list.data
						this.total = res.data.list.total
						this.pagesize = res.data.list.per_page
						
					}
						
				})
			},
			/*声誉、Ether、DVP*/
			withdrawTypeBtn(){
                this.loading = true
                setTimeout(() => {
                    this.loading = false;
                }, 500);
				this.$ajax.BMZvulQwithdrawList({"state": this.value1,"type":this.value2})
				.then(res => {
					if(res.errcode===1){
						this.mymxjl_data = res.data.list.data
						this.total = res.data.list.total
						this.pagesize = res.data.list.per_page
						
					}
					
				})
				if(this.value2 == 2){
					this.mxjl = false
				}else{
					this.mxjl = true
				}

			},
			handleSizeChange(pagesize){
		  		this.pagesize = pagesize;
		  	},
		  	handleCurrentChange(currentPage){
		  		this.currentPage = currentPage;
		  	}
		}
	}
</script>

<style>
	[v-cloak] {
        display: none;
    }
	.withdrawxq .el-dialog__body{
		padding-bottom: 50px !important;
	}
	.red{
		color: #f00;
	}
	.el-icon-view{
		color: #2196F3;
		font-size: 16px;
		font-weight: 600;
	}
	.with_topSelect{
		width: 120px;
		float: right;
	}
	.with_topSelect:nth-of-type(1){
		margin-left: 10px;
	}
</style>
