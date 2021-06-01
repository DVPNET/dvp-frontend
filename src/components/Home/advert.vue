<template>
          <div class="clearfix advert-wraps">
          	<h1>{{$t('message.Announcements')}}</h1>
          	<div id="advertCon"  v-for="(vul,index) in newsData" :key="index">
          		<span class="fl" style="display: block;line-height: 43px;font-family: 'microsoft yahei';font-size: 14px;color: #8E9EAE;">{{vul.created_at}}</span>
          		<div class="fr" style="width: 83%;border-left: 1px dashed #dbdde0;padding-left: 30px;position: relative;">
          			<b style="width: 10px;height: 10px;border-radius: 50%;display: inline-block;background: #2196f3;position: absolute;left: -5px;top: 16px;"></b>
          			<el-card shadow="hover" style="box-shadow: inherit" class="advercard">
	          			<a :href="vul.url" target="_blank">
	          				<p class="new-title">{{vul.title}}</p>			
	          			</a>
	          		</el-card>
          		</div>
          		<div style="clear: both;"></div>
          		
          	</div>
          		
          		<div style="clear: both;"></div>
          		<div class="block pages" id="pages"  v-if="total !=0" style="margin-bottom: 40px">
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
		name: 'homeNews',
		data () {
			return {
				newsData:[],
				total:0,//默认数据总数
                pagesize: 0,//每页的数据条数
                currentPage:1,//默认开始页面
			}
		},
		methods: {
			initData(){
				var _this=this
				this.$ajax.ComNews({'type':2})
				.then(res => {
					if(res.errcode === 1){
						_this.newsData = res.data.news.data
						_this.total = res.data.news.total
						_this.pagesize = res.data.news.per_page
					}
				})
			},
			handleCurrentChange(currentPage){
			  this.currentPage == currentPage
			  var _this = this;
			  this.$ajax.ComNews({"page": this.currentPage })
			  .then(res => {
					if(res.errcode === 1){
						_this.newsData = res.data.news.data;
						_this.total = res.data.news.total
						_this.pagesize = res.data.news.per_page
					}
				})
		    },
			handleSizeChange(pagesize){
		  		this.pagesize = pagesize;
		  	},
		},
		created(){
			this.initData();
		}
	 }
</script>

<style scoped>
	.advercard:hover{
		-webkit-box-shadow: 0 2px 12px 0 rgba(64, 158, 225, 0.2) !important; 
    	-moz-box-shadow: 0 2px 12px 0 rgba(64, 158, 225, 0.2) !important; 
        box-shadow: 0 2px 12px 0 rgba(64, 158, 225, 0.2) !important; 
	}
	#advertCon{
		width: 1170px;
		margin: 0 auto;
	}
	.advert-wraps h1{
		font-family: "microsoft yahei";
		font-size: 24px;
		color: #4A5b6a;
		font-weight: normal;
		margin-bottom: 20px;
	}
	.new-title {
	    display: -webkit-box;
	    height: 23px;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    -webkit-line-clamp: 1;
	    -webkit-box-orient: vertical;
	    font-size: 16px;
	    color: #4C5B6A !important;
	    font-family: "microsoft yahei";
	}
	.new-desc {
	    display: -webkit-box;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    -webkit-line-clamp: 2;
	    -webkit-box-orient: vertical;
	    height: 50px;
	    font-size: 14px;
	    color: #8E9EAE;
	    line-height: 24px;
	}
</style>