<template>
	<div>
		<div id="not-found-wrap" v-if="lang=='zh'">
		    <div class="top-content">sorry!您访问的页面不存在......</div>
		    <img src="/static/image/404.png">
		    <div class="bottom-content">即将离开本页,<span style="color:#2196f3">{{count}}</span>秒自动返回上一页</div>
		    <router-link to="/" style="background-color:#2196f3">返回首页</router-link>
		  </div>
		  <div id="not-found-wrap" v-if="lang=='en' || lang=='ko' || lang==null || lang==''">
			    <div class="top-content">Sorry! Page not found......</div>
			    <img src="/static/image/404.png">
			    <div class="bottom-content">Leave this page soon,<span style="color:#2196f3">{{count}}</span>second back to previous page!</div>
			    <router-link to="/" style="background-color:#2196f3">back to index page!</router-link>
		  </div>
	</div>

</template>

<script>
	export default {
		name: 'errorwrap',
		data () {
			return{
				count: '',
				lang:'zh'
			}
		},
		created(){
			this.initData();
		},
		methods: {
			initData(){
				this.lang=localStorage.getItem('locale')
				 const TIME_COUNT = 3;
				 if(!this.timer){
				      this.count = TIME_COUNT;
				      this.show = false;
				      this.timer = setInterval(()=>{
				        if(this.count > 0 && this.count <= TIME_COUNT){
				          this.count--;
				        }else{
				          this.show = true;
				          clearInterval(this.timer);
				          this.timer = null;	
						  this.$router.push({ path:"/" })				
				        }
				      },1000)
				    }
				
			},
			goCompany(){
				this.$router.push({ path:"/combox/company/companyOne" })
			}
		}

	}
</script>

<style scoped>
	#not-found-wrap {
      margin: auto;
      min-height: 700px;
      margin-top: 10%;
      text-align: center;
    }

    #not-found-wrap a {
      display: block;
      width: 152px;
      height: 38px;
      line-height: 38px;
      color: #fff;
      font-size: 18px;
      margin: 0 auto;
      margin-top: 33px;
      border-radius: 6px;
      background-color: #2fa1ff;
    }

    #not-found-wrap span {
      color: #2fa1ff;
    }

    #not-found-wrap img {
      margin-top: 75px;
      margin-bottom: 49px;
    }

    #not-found-wrap .top-content {
      color: #535a6c;
      font-size: 26px;
    }

    #not-found-wrap .bottom-content {
      font-size: 18px;
    }
</style>