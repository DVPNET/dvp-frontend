<template>
	<div class="company-personal-wrap loopholetab" style="position: relative;padding-bottom: 90px;">
		<div v-show="vulLoophole1">
			<p class="msk-tips">{{$t('message.VulpassesVerificationProcess')}}</p>
	        <img src="/static/image/DH_public/loudongguanli.png" style="width: 100%">
		</div>
	    <el-container v-show="vulLoophole2">
			<el-header style="height:0 !important"></el-header>
			<div class="itemcomvuls" v-if="nummessage">
				<el-badge value="" v-if="comLoopholeDatanum[0] ==0" class="item item1" style="z-index: 999;width: 18px;"></el-badge>
		  		<el-badge :value="comLoopholeDatanum[0]" v-if="comLoopholeDatanum[0] !=0" class="item item1" style="z-index: 999;"></el-badge>
		  		<el-badge value="" v-if="comLoopholeDatanum[5] ==0"  class="item item2" style="z-index: 999;"></el-badge>
		    	<el-badge :value="comLoopholeDatanum[5]" v-if="comLoopholeDatanum[5] !=0"  class="item item2" style="z-index: 999;"></el-badge>
		  	</div>
		  	<div class="itemcomvuls" v-if="!nummessage" style="padding-left: 125px !important;">
				<el-badge value="" v-if="comLoopholeDatanum[0] ==0" class="item item1" style="z-index: 999;width: 18px;"></el-badge>
		  		<el-badge :value="comLoopholeDatanum[0]" v-if="comLoopholeDatanum[0] !=0" class="item item1" style="z-index: 999;"></el-badge>
		  		<el-badge value="" v-if="comLoopholeDatanum[5] ==0"  class="item item2"  style="z-index: 999;margin-left: 95px;"></el-badge>
		    	<el-badge :value="comLoopholeDatanum[5]" v-if="comLoopholeDatanum[5] !=0"  class="item item2" style="z-index: 999;margin-left: 95px;"></el-badge>
		  	</div>
		  	<div style="margin-top: -20px;">
		  		<el-select @change="vullist_select" v-model="value" :placeholder="$t('message.allData')" class="fr" style="width: 100px;z-index: 999;">
					<el-option
						v-for="item in options"
						:key="item.id"
						:label="item.label"
						:value="item.id">
					</el-option>
				</el-select>
		  	</div>
			<el-tabs v-model="activeName" @tab-click="handleClick" class="complddt_wrap">
				<el-tab-pane :label="$t('message.all')" name="first" class="vul_state" >
					<vulsCompCons :comLoopholeDatas="comLoopholeData"  v-loading="loading"></vulsCompCons>
				</el-tab-pane>
				<el-tab-pane :label="$t('message.vulUnclaimed')" name="second" class="vul_state">
					<vulsCompCons :comLoopholeDatas="comLoopholeData"  v-loading="loading"></vulsCompCons>
				</el-tab-pane>
				<el-tab-pane :label="$t('message.ToBeFixed')" name="three" class="vul_state">
  					<vulsCompCons :comLoopholeDatas="comLoopholeData"  v-loading="loading"></vulsCompCons>
  				</el-tab-pane>
  			</el-tabs>

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


		</el-container>
		<!-- 赏金计划 -->
		<el-dialog
		  title=""
		  :visible.sync="BountyPlan"
		  class="dialogwdetailC"
		  :close-on-click-modal = false
		  width="700px">
		  	<div class="dialogTXCon">
		  		<p style="text-align: left;font-size: 16px;margin-bottom: 5px;">{{$t('message.depositBountyAprocessLoopholes')}}</p>
		  		<p style="text-align:left;margin: 0 60px 20px 0;padding:0 0 20px 0;border-bottom: 1px solid #E2EAF1;font-size: 14px;line-height: 18px;">{{$t('message.VulwhitehatspleaseDepositCorrespondingFundsCheckAprocess')}}</p>
		  		<div style="text-align: left;">
		  			<p style="font-size: 16px;">{{$t('message.WaysCheckLoopholes')}}：</p>
		  			 <el-radio-group v-model="radioPay" @change="vulchange">
		  			 	<el-radio :label="1">{{$t('message.ParticipatingBountyProgramfree')}}<router-link to="/Bounty" >[{{$t('message.aboutBounty')}}]</router-link></el-radio>
						<el-radio :label="2">{{$t('message.BoParticipatingBountyProgramprocessing')}}</el-radio>
					</el-radio-group>
		  		</div>
			    <div class="ConFoot"><el-button type="primary" class="common-btn"  @click="BountyPlanBtn()">{{BountyPlanCon}}</el-button></div>
			</div>
	    </el-dialog>
    </div>
</template>

<script>
	import vulsCompCons from '@/components/company/vulsCompCons'
	import vulDetailrl from '@/components/info/vulDetailrl'
	export default {
			name: 'comLoophole',
			components:{vulDetailrl,vulsCompCons},
			 data() {
			        return {
                        loading: false,
			        	BountyPlanCon:'加入赏金计划',
			        	BountyPlan: false,
			        	radioPay: 1,
			        	activeName:'first',
			        	total:0,//默认数据总数
		                pagesize: 0,//每页的数据条数
		                currentPage:1,//默认开始页面
			        	options: [{
					          id: 'all',
					          label: '所有'
					        },{
					          id: '0',
					          label: '待认领'
					        },{
					          id: '1',
					          label: '已认领'
				      		},{
					          id: '2',
					          label: '已忽略'
				            },{
					          id: '5',
					          label: '待修复'
					        },{
					          id: '6',
					          label: '已修复',
				        }],
				        value: '',
			         	comLoopholeData: [],
			         	vulLoophole1:false,
			         	vulLoophole2:false,
			         	dialogCSVul_data:'',
			         	comLoopholeDatanum:[],
			         	lang: 'zh',
			         	nummessage: true,
			        }
		      },
		      methods:{
			      	vulchange(id){
			      		if(id==1){
					  		this.BountyPlanCon = '加入赏金计划'
				  		}else if(id==2){
				  			this.BountyPlanCon ='存储赏金'
				  		}
			      	},
				  	initData(){
				  		 this.lang=localStorage.getItem('locale')
				  		 if(this.lang=='zh'){
					  		this.options=[{
						          id: 'all',
						          label: '所有'
						        },{
						          id: '0',
						          label: '待认领'
						        },{
						          id: '1',
						          label: '已认领'
					      		},{
						          id: '2',
						          label: '已忽略'
					            },{
						          id: '5',
						          label: '待修复'
						        },{
						          id: '6',
						          label: '已修复'
					        }]
					  		this.nummessage=true
				  		}else if(this.lang=='en' || this.lang==null || this.lang=='' || this.lang == 'ko'){
				  				this.options=[{
						          id: 'all',
						          label: 'all'
						        },{
						          id: '0',
						          label: 'Unclaimed'
						        },{
						          id: '1',
						          label: 'Confirmed'
					      		},{
						          id: '2',
						          label: 'Ignored Loopholes'
					            },{
						          id: '5',
						          label: 'To Be Fixed'
						        },{
						          id: '6',
						          label: 'Fixed'
					        }]
				  			this.nummessage=false
				  		}
                        this.loading = true
                        setTimeout(() => {
                            this.loading = false;
                        }, 500);
						var _this = this;
						let state = this.$route.query.state
						if(state==0){
							this.activeName = 'second'
						}else if(state == 5){
							this.activeName = 'three'
						}
						for(var i=0;i<this.options.length;i++){
							if(this.options[i].id == state){
								this.value = this.options[i].label
							}
						}
						this.$ajax.CSvul({"status": state})
						.then(res => {
							if(res.errcode == 1){
								_this.total = res.data.vulList.total
								_this.pagesize = res.data.vulList.per_page
								_this.comLoopholeDatanum=res.data.vulCount
								if(res.data.popup === 0){
									_this.vulLoophole2 = true
									_this.comLoopholeData = res.data.vulList.data;
								}else if(res.data.popup === 1){
									_this.vulLoophole1 = true
									_this.comLoopholeData = res.data.vulList.data;
								}

							}
						})
					},
					BountyPlanBtn(){

					},
					vullist_select(){
                        this.loading = true
                        setTimeout(() => {
                            this.loading = false;
                        }, 500);
						var type = this.value
			  			this.$ajax.CSvul({"status": type})
						.then(res => {
							this.comLoopholeData = res.data.vulList.data;
							this.total = res.data.vulList.total
							this.pagesize = res.data.vulList.per_page
						})
					},
				  	handleClick(tab,event){
                        this.loading = true
                        setTimeout(() => {
                            this.loading = false;
                        }, 500);
				  		var indexs=tab.index
				  		if(indexs==1){
				  			this.$ajax.CSvul({"status": 0})
							.then(res => {
								this.comLoopholeData = res.data.vulList.data;
								this.total = res.data.vulList.total
								this.pagesize = res.data.vulList.per_page
							})
				  		}else if(indexs==2){
				  			this.$ajax.CSvul({"status": 5})
							.then(res => {
								this.comLoopholeData = res.data.vulList.data;
								this.total = res.data.vulList.total
								this.pagesize = res.data.vulList.per_page
							})
				  		}else if(indexs==0){
				  			this.$ajax.CSvul({"status": 'all'})
							.then(res => {
								this.comLoopholeData = res.data.vulList.data;
								this.total = res.data.vulList.total
								this.pagesize = res.data.vulList.per_page
							})
				  		}
				  	},
				  	handleSizeChange(pagesize){
				  		this.pagesize = pagesize;
				  	},
				  	handleCurrentChange(currentPage){
				  		this.currentPage = currentPage;
				  		this.$ajax.CSvul({"status": this.value,"page": this.currentPage })
						.then(res => {
							this.comLoopholeData = res.data.vulList.data;
						})
				  	},
				},
				created:function(){
				   	this.initData();
				}
			}
</script>

<style>
	.loopholetab .el-tabs__header{
		padding: 10px 0 0 0 !important;
	}
	.dialogwdetailC .el-radio{
		margin-top: 20px;
	}
	.dialogwdetailC .ConFoot{
		text-align: right;
		margin-top: 30px;
	}
	.dialogwdetailC .ConFoot .el-button{
		margin-left: 20px;
	}
	.company-personal-wrap .el-tabs__header{
	    padding: 10px 30px 0 30px;
	    box-sizing: border-box;
	}
	.complddt_wrap{
		margin-top: -50px;
	}
	.companymy_tab thead th:nth-of-type(2){
		text-align: left !important;
	}
	.el-icon-view {
	    color: #2196F3;
	    margin-left: 5px;
	    font-weight: 600;
	    font-size: 16px;
	}
	.pages{
		text-align: right;
	}
	.companymy_tab{
		min-height: 370px;
	}
	.itemcomvuls{
		padding-left: 135px;
	}
	.itemcomvuls .item {
	  margin-top: -10px;
	}
	.itemcomvuls .item1{
		margin-left: 0;
		z-index: 9999999999999999999999999999;
	}
	.itemcomvuls .item2{
		margin-left: 60px;
		z-index: 9999999999999999999999999999;
	}
</style>
