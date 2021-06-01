<template>
		<div class="borderbottom">
            <h3 class="company-h3">{{$t('message.vulDevelopment')}}<p class="company-h3-line"></p></h3>
            <el-tabs v-model="activeName" @tab-click="handleClick" class="lddt_wrap home_lddt">
				<!--未认领漏洞-->
				<el-tab-pane :label="$t('message.vulUnclaimed')" name="first" class="vul_state">
					<lddtDynamics :lddtDatas="lddtData.slice((currentPage-1)*pagesize,currentPage*pagesize)" v-loading="loading"></lddtDynamics>
				</el-tab-pane>
				<!--已认领漏洞-->
				<el-tab-pane :label="$t('message.vulConfirm')" name="second" class="vul_state">
                    <lddtDynamics :lddtDatas="lddtData.slice((currentPage-1)*pagesize,currentPage*pagesize)" v-loading="loading"></lddtDynamics>
  				</el-tab-pane>
  				<!--修复漏洞-->
				<el-tab-pane :label="$t('message.vulFixed')" name="three" class="vul_state">
  					<lddtDynamics :lddtDatas="lddtData.slice((currentPage-1)*pagesize,currentPage*pagesize)" v-loading="loading"></lddtDynamics>
  				</el-tab-pane>
  				<!--精华漏洞-->
  				<el-tab-pane :label="$t('message.vulEssence')" name="four" class="vul_state">
                    <lddtDynamics :lddtDatas="lddtData.slice((currentPage-1)*pagesize,currentPage*pagesize)" v-loading="loading"></lddtDynamics>
  			    </el-tab-pane>
  			    <!--公开漏洞-->
  			   <el-tab-pane :label="$t('message.vulOpen')" name="five" class="vul_state" >
  			   		<div class="openvul">
  			   			<div class="al">
  			   				<p><i class="el-icon-warning"></i>{{$t('message.DescriptionAboutLoopholeLDisclosure')}}：</p>
							<p>1.&nbsp;{{$t('message.DVPchoosesdisclosewhitehatsknowledgeAndskillspreventPotentialLoss')}}</p>
							<p>2.&nbsp;{{$t('message.DVPdisclosesfixedsensitiveInformationRemoved')}}</p>
  			   			</div> 	  			   			
  			   		</div>
                    <lddtDynamics :lddtDatas="lddtData.slice((currentPage-1)*pagesize,currentPage*pagesize)" v-loading="loading"></lddtDynamics>
  			   </el-tab-pane>
  			</el-tabs>
  			<div class="block pages" id="pages" style="display: none;" >
   				<el-pagination
   				    :current-page.sync="currentPage"
   				    :page-size="pagesize"
					layout="total,prev, pager, next"
					:total="this.lddtData.length">
				</el-pagination>
			</div>
            <router-link to="/new"></router-link><el-button type="primary" class="common-btn" @click='VuldtBtn'>{{$t('btn.look_more')}}</el-button>
        </div>
</template>

<script>
	import lddtDynamics from '@/components/LDDT/lddtDynamics'
	export default {
			  name: 'homeVuldynamic',
			  components:{lddtDynamics},
			  data () {
					return {
						total:0,//默认数据总数
		                pagesize:9,//每页的数据条数
		                currentPage:1,//默认开始页面
						activeName: 'first',
						lddtData:[],
						type: 0,
                        loading:false,
                        lang:'zh'
					}
				},
				methods: {
					VuldtBtn(){
						this.$router.push({ path:"/lddt" })
					},
					handleClose (done) {
						this.$confirm('确认关闭？')
							.then(_ => {
								done()
							})
							.catch(_ => {
							})
					},
					handleClick (tab, event) {
                        this.loading = true
						this.lddtData=[]
						this.Vulindex=tab.index
						if(this.Vulindex ==0){
							this.type=0
						}else if(this.Vulindex ==1){
							this.type=1
						}else if(this.Vulindex ==2){
							this.type=5
						}else if(this.Vulindex ==3){
							this.type=2
						}else if(this.Vulindex ==4){
							this.type=3
						}
						var _this = this;
						 if(this.lang=='zh'){
							this.$ajax.ComVulTrend({type: this.type,'language':'zh_CN'})
							.then(res => {
								if(res.errcode === 1){
									 setTimeout(() => {
			                            this.loading = false;
			                        }, 500);
									_this.lddtData= res.data.trendList.data
								}
							})
						}else if(this.lang=='en' || this.lang==null || this.lang=='' || this.lang=='ko'){
							this.$ajax.ComVulTrend({type: this.type,'language':'en_US'})
							.then(res => {
								if(res.errcode === 1){
									 setTimeout(() => {
			                            this.loading = false;
			                        }, 500);
									_this.lddtData= res.data.trendList.data
								}
							})
						}
					},
					initData(){
						var _this = this;
						this.lang=localStorage.getItem('locale')
						 if(this.lang=='zh'){
							this.$ajax.ComVulTrend({type: 0,'language':'zh_CN'})
							.then(res => {
								if(res.errcode === 1){
									_this.lddtData= res.data.trendList.data
								}
							})
						}else if(this.lang=='en' || this.lang==null || this.lang=='' || this.lang=='ko'){
							this.$ajax.ComVulTrend({type: 0,'language':'en_US'})
							.then(res => {
								if(res.errcode === 1){
									_this.lddtData= res.data.trendList.data
								}
							})
						}
						
					}
				},
				created(){
					this.initData();
				 }
	}
</script>

<style scoped>
	.home_lddt{
		margin-top: 20px;
	}
	.home_lddt thead tr th,.home_lddt tr td{
		text-align: left !important;
	}
	.home_lddt thead th{
	    border-bottom: 0 !important; 
	}
	.home_lddt tbody tr:hover td {
	    background: #ffffff !important; 
	}
</style>
