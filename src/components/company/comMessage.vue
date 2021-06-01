<template>
	<div class="company-bottom clearfix common-shadow comMessageBox" style="border-top: 3px solid #2196f3;">
			<el-header class='hole-top'>
				<p>{{$t('message.MyMessage')}}</p>
			</el-header>
			<el-tabs v-model="activeName" @tab-click="handleClick" class="CSmessageBox">
                <el-tab-pane :label="$t('message.UnreadMessage')" name="first" class="vul_state">
                    <div class="notification-list-item" v-for="val in this.MsgList">
                    	<div class="notification-top clearfix">
                    		<p>{{val.title}}</p>
                    		<span>{{val.create_at}}</span>
                    	</div>
                    	<p class='notification-content'>{{val.content}}</p>
                    </div>
                   <span v-show="message" class="inperr">{{$t('message.NoNewMessage')}}</span>
                </el-tab-pane>
                <el-tab-pane :label="$t('message.HistoryMessage')"  name="second" class="vul_state">
                   <div class="notification-list-item" v-for='val in this.MsgList'>
                    	<div class="notification-top clearfix">
                    		<p>{{val.title}}</p>
                    		<span>{{val.create_at}}</span>
                    	</div>
                    	<p class='notification-content'>{{val.content}}</p>
                   </div>
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
	    	
	</div>
</template>

<script>
	export default {
		name: 'comMessage',
		data() {
	        return {
	        	total:0,//默认数据总数
             	pagesize: 0,//每页的数据条数
             	currentPage: 1,//默认开始页面
	         	activeName:"first",
	            MsgList:'',
	            message: false,
	            Vulindex:0,
	        }
		},
		methods: {
			initData(){
				this.$ajax.CSUserMsgList({"type":1,"status":0})
				.then(res => {
					if(res.errcode === 1){
						this.MsgList = res.data.msgList.data;
						if(res.data.msgList.data.length==0){
							this.message = true
						}
					}			
				})
			},
			handleCurrentChange(currentPage){
			  this.currentPage == currentPage
			  console.log(this.currentPage)
			  var _this = this; 
			  this.$ajax.CSUserMsgList({"type": 1,"status": this.Vulindex,"page": this.currentPage })
			  .then(res => {
					if(res.errcode === 1){
						_this.MsgList = res.data.msgList.data;
					}			
				})
		  	},
			handleClick (tab, event) {
				this.$store.state.CSuser.msgList.length=0
				this.$store.state.CSuser.msgCount=''
				this.MsgList =[]
				this.Vulindex=tab.index
				var _this = this; 
				this.$ajax.CSUserMsgList({"type": 1,"status": this.Vulindex,"page": this.currentPage })
				.then(res => {
					if(res.errcode === 1){
						_this.MsgList = res.data.msgList.data;
						_this.pagesize = res.data.msgList.per_page
						_this.total = res.data.msgList.total
						if(res.data.msgList.data.length==0){
							this.message = true
						}
					}			
				})
			},
			handleSizeChange(pagesize){
		  		this.pagesize = pagesize;
		  		console.log(this.pagesize)
		  	}
		},
		created:function(){
		   	this.initData();
		}
	}
</script>

<style>
	.comMessageBox{
		padding: 20px 50px 60px 50px;
		box-sizing: border-box;
		position: relative;
	}
	.project-tab{
		
	}
	.CSmessageBox{
		width: 100%;
		display: block;
	}
	.notification-list-item:nth-of-type(1){
		padding-top: 0 !important;
	}
</style>