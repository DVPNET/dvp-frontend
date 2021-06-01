<template>
          <div class="clearfix News-wraps">
          		<el-card shadow="hover"  v-for="(vul,index) in newsData" :key="index">
          			<a :href="vul.url" target="_blank">
          				<p class="new-title">{{vul.title}}</p>
              			<p class="new-desc ">{{vul.desc}}</p>
              			<span>{{vul.created_at}}</span>
          			</a>		              			
          		</el-card>
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
				this.$ajax.ComNews({'type':1})
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
	.new-title {
	    display: -webkit-box;
	    height: 23px;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    -webkit-line-clamp: 1;
	    -webkit-box-orient: vertical;
	    font-size: 16px;
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