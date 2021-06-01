<template>
	<el-container>
			<el-header class='hole-top' style="height: 0;"></el-header>
			<el-tabs v-model="activeName" @tab-click="handleClick" class="msgBox">
                <el-tab-pane :label="$t('message.UnreadMessage')" name="first" class="vul_state">
                    <div class="notification-list-item" v-for="val in this.MsgList">
                    	<div class="notification-top clearfix">
                    		<p>{{val.title}}</p>
                    		<span>{{val.create_at}}</span>
                    	</div>
                    	<p class='notification-content'>{{val.content}}</p>
                    </div>
                   <span v-show="message" class="inperr">{{$t('message.NoMessage')}}</span>
                </el-tab-pane>
                <el-tab-pane :label="$t('message.HistoryMessage')" name="second" class="vul_state">
                   <div class="notification-list-item" v-for='val in this.MsgList'>
                    	<div class="notification-top clearfix">
                    		<p>{{val.title}}</p>
                    		<span>{{val.create_at}}</span>
                    	</div>
                    	<p class='notification-content'>{{val.content}}</p>
                   </div>
                </el-tab-pane>
            </el-tabs>
            <div style="text-align: right;margin-top: 20px;display: block;" v-show="pageshow">
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
	export default {
		name: 'unread_message',
		data() {
	        return {
	         total:0,//默认数据总数
             pagesize: 0,//每页的数据条数
             currentPage: 1,//默认开始页面
	          activeName:"first",
	          MsgList:'',
	          message: false,
	          Vulindex:0,
	          pageshow: true
	        }
		},
		methods: {
			initData(){
				this.$ajax.BMZUserMsgList({"type":0,"status":0})
				.then(res => {
					if(res.errcode === 1){
						this.MsgList = res.data.msgList.data;
						this.pagesize = res.data.msgList.per_page
						this.total = res.data.msgList.total
						if(this.total==0){
							this.pageshow = false
						}else{
							this.pageshow = true
						}
						if(res.data.msgList.data.length==0){
							this.message = true
						}
					}
				})
			},
		  	handleCurrentChange(currentPage){
			  this.currentPage == currentPage
			  var _this = this;
			  this.$ajax.BMZUserMsgList({"type": 0,"status": this.Vulindex,"page": this.currentPage })
			  .then(res => {
					if(res.errcode === 1){
						_this.MsgList = res.data.msgList.data;
					}
				})
		  	},
			handleClick (tab, event) {
				this.$store.state.BMZuser.msgList.length=0
				this.$store.state.BMZuser.msgCount=''
				this.Vulindex=tab.index
				var _this = this;
				this.$ajax.BMZUserMsgList({"type": 0,"status": this.Vulindex,"page": this.currentPage })
				.then(res => {
					if(res.errcode === 1){
						_this.MsgList = res.data.msgList.data;
						_this.pagesize = res.data.msgList.per_page
						_this.total = res.data.msgList.total
						if(this.total==0){
							this.pageshow = false
						}else{
							this.pageshow = true
						}
						if(res.data.msgList.data.length==0){
							this.message = true
						}
					}
				})
			},
			handleSizeChange(pagesize){
		  		this.pagesize = pagesize;
		  	}
		},
		created:function(){
		   	this.initData();
		}
	}
</script>

<style>
	.msgBox .el-tabs__content{
		border-top:0 !important;
	}
</style>
