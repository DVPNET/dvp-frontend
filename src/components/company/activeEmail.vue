<template>
	<div class="activeEmail">
		<div class="mDVP">
		    <p class="reg-top-text"><span>{{$t('message.SignUpSuccessfully')}}</span></p>
		    <div class="reg-cgzc">
		      <img src="/static/image/chenggong.png">
		      	<span v-show="actEn=='zh'">
		      		{{$t('message.AccountActivated')}}，
		      		<b>{{count}}</b>秒后自动进入 
		      		<router-link to="/login?id=2">登录界面</router-link>
		      	</span>
		      	<span v-show="actEn=='en'">
		      		{{$t('message.AccountActivated')}}，
		      		Go into<router-link to="/login?id=2"> Login Page</router-link> in <b>{{count}}</b>Seconds 
		      	</span>
						<span v-show="actEn=='ko'">
		      		{{$t('message.AccountActivated')}}，
		      		Go into<router-link to="/login?id=2"> Login Page</router-link> in <b>{{count}}</b>Seconds 
		      	</span>
		      	<el-button class="reg-percon"  type="primary"  @click="goCompany">{{$t('message.immedLogin')}}</el-button>	      	
		    </div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'activeEmail',
		data () {
			return{
				count: '',
				actEn: true,
				lang: 'zh'
			}
		},
		mounted(){
        	this.lang=localStorage.getItem('locale')
		    if(this.lang=='zh'){
		   		this.actEn='zh'
		    }else if(this.lang=='en' || this.lang==null || this.lang==''){
		   		this.actEn='en'
		    }else if(this.lang=='ko'){
		   		this.actEn='ko'
		    }
        },
		created(){
			this.initData();
		},
		methods: {
			initData(){
				this.lang=localStorage.getItem('locale')
				window.sessionStorage.setItem('userCSrole',2)
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
				          //获取注册邮箱信息
				          this.$ajax.CSactiveEmail({token:this.$route.query.token})
							.then(res => {		
								console.log(res)
									if(res.errcode===1){
										 this.$router.push({ path:"/login?id=2"})
									}else{
										 this.$message.error(res.errmsg)
									}
							}) 
				
				        }
				      },1000)
				    }
				
			},
			goCompany(){
				this.$router.push({ path:"/login?id=2" })
			}
		}

	}
</script>

<style>
	.mDVP{
		width: 500px;
		margin: 120px auto;
		text-align: center;
		background: #ffffff;
		padding: 20px;
		box-sizing: border-box;
	}
	.reg-percon{
		display: block;
		margin:  50px auto !important;
	}
	.reg-cgzc span{
		display: block;
		margin: auto;
	}
	.reg-cgzc img{
		margin: 80px 0 20px 0;
	}
</style>