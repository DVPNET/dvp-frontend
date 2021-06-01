<template>	
		<!--修改密码-->	
		<div>
			<div class="respasswrap ac">
				<h1>비밀번호 찾기</h1>
				<el-form  :model="DVP_CSRes" ref="DVP_CSRes" status-icon :rules="DVP_CSResS">
					  <el-form-item prop="user" label="" >
	                      <el-input v-model="DVP_CSRes.user" placeholder="기업 이름:"></el-input>
	                  </el-form-item>
					  <el-form-item prop="email" label=""  :rules="[
	                            { required: true, message: '이메일 주소를 입력하세요', trigger: 'blur' },
						        { type: 'email', message: '정확한 이메일 주소를 입력하세요', trigger: ['blur', 'change'] }
	                        ]">
	                      <el-input v-model="DVP_CSRes.email" placeholder="기업 이메일 주소:"></el-input>
	                  </el-form-item>
				    <el-button type="primary"  :plain="true" @click="respassEmail('DVP_CSRes')"  class="btnshadow wrapBtn" style="width:80%;margin-bottom: 30px;">비밀번호 재설정 링크 보내기</el-button>
				    <p><i class="el-icon-warning" style="opacity: 1;"></i>&nbsp;위 정보를 입력하시면 비밀번호 재설정에 필요한 정보를 보내드리겠습니다.</p>
				  </el-form-item>
				</el-form>
			</div>  
			<el-dialog
	          title=""
	          :visible.sync="dialogldxq"
	          width="500px" :modal-append-to-body="false">
	            <div class="mDVP" style="width: 100%;text-align:center;margin:0;padding:0;">
				    <div class="reg-cgzc" style="padding-bottom: 50px;">
				    	<h2 style="margin: 10px 0 30px 0">비밀번호 찾기</h2>
				      	<p style="color: #8e9eae;">비밀번호 재설정에 관련 정보를 이메일로 발송되었습니다 </p>
				      	<p style="color: #8e9eae;">{{DVP_CSRes.email}} 로 로그인하여 확인하세요</p>   	
				    </div>
				</div>
	        </el-dialog>
		</div>
		
</template>

<script>
	export default {
		name: 'passEmail',
		data () {
			var validateUser = (rule, value, callback) => {
				if (value === '') {
					callback(new Error('닉네임은 비워 둘 수 없습니다！'))
				}
					callback()
			};
			return {
				resEmailSucess: true,
				emailshow: false,
				dialogldxq:false,
				passEmailInfo:'',
				DVP_CSResS: {
					user: [
						{validator: validateUser, trigger: 'blur',required: true, message: "닉네임을 입력하세요"},
						{ min: 2, max: 20, trigger: 'blur',  message: '계정은  2 ~ 20 자 여야 합니다'}
					]
				},
				DVP_CSRes: {user: '',email: ''},
			}
		},
		methods: {
			initData(){
				var _this = this; 
			},
			respassEmail(DVP_CSResS){				
				let formData = {
			    	'companyName' : this.DVP_CSRes.user, 
			    	'email' : this.DVP_CSRes.email
			    }
				var _this=this
				this.$refs[DVP_CSResS].validate((DVP_CSResS) => {
				  if (DVP_CSResS) {
			    		this.$ajax.ComForpass(formData)
						.then(res => {
							if (res.errcode  === 1) {
								this.dialogldxq=true						
					       }else {
								this.$message.error(res.errmsg);
					        }
						})
						.catch((res) => {
								this.$message.error(res.errmsg);
			  		   })
				 } else {

		            return false;
		          }
			})
				
			},
		},
		created(){
			this.initData();
		}
	}
</script>

<style scoped>
	.el-dialog__wrapper{
			z-index: 2001;
			background: rgba(0, 0, 0, 0.5);
	}
	.respasswrap{
		width: 500px;
		padding: 50px 80px;
		box-sizing: border-box;
		background: #ffffff;
		margin: 90px auto;
	}
	.respasswrap h1{
		text-align: center;
		margin-bottom: 30px;
	}
	.respasswrap p{
		text-align: center;
		margin-bottom: 30px;
		color: #f06d6d;
		font-size: 12px;
	}
</style>
