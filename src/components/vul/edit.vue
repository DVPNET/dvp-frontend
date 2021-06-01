<template>
	<div class="vul_wrap">
		<el-container class="child-page-detailwrap">
		<el-main>
			<div class="rout_head" style="padding-bottom: 20px;"><span @click="routBtn">{{$t('message.MyVulnerability')}}</span>><span>{{$t('message.edit_Vul')}}</span></div>
			<div class="vul_container wrapshadow" style="padding:0 0 20px 0 !important;;box-sizing: border-box;margin-bottom: 30px;">
				<h1>{{$t('message.edit_Vul')}}</h1>
	            <wrapLdBJ></wrapLdBJ>
			</div>
			<div style="background: #ffffff;padding-bottom: 20px" class="wrapshadow">
				<h1>{{$t('message.PleaseSupplementReport')}}</h1>
				<div  class="dengdeng">
					
					<el-form  label-width="100%" class="demo-dynamic" >
					    <el-form-item prop=""   label="" class="sim_box">
					    	<div style="margin-bottom: 5px;"><span style="color:#e9a331">（{{$t('message.PleaseUploadPicturesDroppingCopy')}}）</span></div>
			           		<!--漏洞描述-->
				                <VueTrix
				                v-model="vuetrix_vul.content"
				                @trix-attachment-add="vuetrix_vulHandleAttachmentAdd"/>
			            </el-form-item>
			            <el-form-item>
			            	<el-checkbox v-model="checked">{{$t('message.i_have_view_agreement')}} <router-link to="/agreement" target="_blank">《{{$t('dvp_footer.Dvp_Agreement')}}》</router-link></el-checkbox>
			            </el-form-item>
			            <el-form-item>
			                <el-button type="primary"  class="wrapBtnlg btnshadow" @click="vulSubmit"  :disabled="isDisable">{{$t('message.submit')}}</el-button>
			            </el-form-item>
			       </el-form>
				</div>
			</div>

		</el-main>
        <el-dialog
            :title="$t('message.point')"
            :visible.sync="dialog_vul"
            :show-close = false
            :close-on-click-modal = false
            width="432px">
            <div style="text-align: center">
                <img src="/static/image/logAres/sucessIcon.png" style="margin-top: 30px;" alt="" /><br />
                <span style="line-height: 44px">{{$t('message.submitSuccess')}}</span>
            </div>
            <span slot="footer" class="dialog-footer showcen" style="margin: 0 0 50px 0">
                    <router-link :to="{path:'/membox/wrapdetail',query:{id:this.$route.query.id}}"><el-button  type="primary" class="wrapBtn btnshadow">{{$t('message.look_over')}}</el-button></router-link>
                    <el-button @click='refresh' class="wrapBtn btnshadow" style="margin-left: 20px">{{$t('message.go_on_submit')}}</el-button>
                </span>
        </el-dialog>
	</el-container>

	</div>

</template>
<script>
	import wrapLdBJ from '@/components/vul/wrapLDBJ'
	import VueTrix from './vue-trix/src'
	export default {
		name:'val',
		components:{wrapLdBJ,VueTrix},
		data(){
			 return {
		      	dialogMyVulBj_data: [],
		        vuetrix_vul: {
              	  content: '<p><strong>漏洞URL：如果是Web就填写此项</strong></p><p>&nbsp;</p><p><strong>简要描述：漏洞说明、利用条件、危害等</strong></p><p>&nbsp;</p><p><strong>漏洞证明：</strong></p><p>&nbsp;</p><p><strong>漏洞利用代码：</strong></p><p>&nbsp;</p><p><strong>修复方案：</strong></p><p>&nbsp;</p></div>'
                },
                isDisable: false,
		      	checked: false,
		      	dialog_vul: false,
		      	vulTitle:'',
		      	EditorContentBJ:'', // 富文本内容
		      	companyName: '',
		      	message: false,
		      	EditorContent: '',
		      	telcons: '',
		      	vulOther: 0,
		      	vulOthercon: "Other",
		      	timeout:  null,
		        cate: [],
		        ComOther: false,
		        cates:[],
		        company:[],
		        companys:[],
		        level:[{ id: '0',name: '低危'}, {id: '1',name: '中危'}, {id: '2',name: '高危'}, {id: '3',name: '严重' }],
		        compType:[{id: '0',name: '交易平台'}, { id: '1',name: '矿池'}, {id: '2',name: '公链'}, {id: '3',name: '钱包'}, {id: '4',name: '项目方' }, { id: '5',name: '智能合约'}, { id: '6',name: '其它' }],
		        value1: '',
		        value2: '',
		        value3: '',
		        value4: '',
		        value5: '',
		        value6: '',
		        loading: false,
		        arr:[],
		        id :'',
		        lang: 'zh',
			}
		},
		created:function(){
		   	this.initData();
		},
		methods:{
			initData(){
				this.lang=localStorage.getItem('locale')
				 if(this.lang=='zh'){
				 	this.level=[{ id: '0',name: '低危'}, {id: '1',name: '中危'}, {id: '2',name: '高危'}, {id: '3',name: '严重' }]
				 	this.compType=[{id: '0',name: '交易平台'}, { id: '1',name: '矿池'}, {id: '2',name: '公链'}, {id: '3',name: '钱包'}, {id: '4',name: '项目方' }, { id: '5',name: '智能合约'}, { id: '6',name: '其它' }]
	  			 	this.vuetrix_vul.content='<p><strong>漏洞URL：如果是Web就填写此项</strong></p><p>&nbsp;</p><p><strong>简要描述：漏洞说明、利用条件、危害等</strong></p><p>&nbsp;</p><p><strong>漏洞证明：</strong></p><p>&nbsp;</p><p><strong>漏洞利用代码：</strong></p><p>&nbsp;</p><p><strong>修复方案：</strong></p></div>'

	  			}else if(this.lang=='en' || this.lang==null || this.lang==''){
	  				this.level=[{ id: '0',name: 'Low'}, {id: '1',name: 'Mid'}, {id: '2',name: 'High'}, {id: '3',name: 'Serious' }]
				 	this.compType=[{id: '0',name: 'Exchange'}, { id: '1',name: 'Mine pool'}, {id: '2',name: 'Public chain'}, {id: '3',name: 'Wallets'}, {id: '4',name: 'Vendor' }, { id: '5',name: 'Smart contracts'}, { id: '6',name: 'Other' }]
	  				this.vuetrix_vul.content='<p><strong>Vulnerability URL: fill this if it is the Web</strong></p><p>&nbsp;</p><p><strong>Summary: vulnerability description, Exploit condition, harm etc.</strong></p><p>&nbsp;</p><p><strong>Vulnerability proof：</strong></p><p>&nbsp;</p><p><strong>Exploit code：</strong></p><p>&nbsp;</p><p><strong>Solution：</strong></p><p>&nbsp;</p></div>'

	  			} else if (this.lang=='ko') {
						this.level=[{ id: '0',name: '낮은 위험'}, {id: '1',name: '중간 위험'}, {id: '2',name: '높은 위험'}, {id: '3',name: '심한 위험' }]
				 	this.compType=[{id: '0',name: '거래소'}, { id: '1',name: '마이닝 풀'}, {id: '2',name: '퍼블릭체인'}, {id: '3',name: '지갑'}, {id: '4',name: '블록체인 프로젝트' }, { id: '5',name: '스마트컨트랙트'}, { id: '6',name: 'Other' }]
	  				this.vuetrix_vul.content='<p><strong>취약점 사이트 URL: 웹이라면 이 항목을 작성하세요</strong></p><p>&nbsp;</p><p><strong>요약: 취약점에 대한 설명, 이용 조건, 피해 등.</strong></p><p>&nbsp;</p><p><strong>취약점 증명(설명 /이미지/파일)：</strong></p><p>&nbsp;</p><p><strong>원격 해킹공격코드(EXPLOIT CODE)：</strong></p><p>&nbsp;</p><p><strong>해결 방안：</strong></p><p>&nbsp;</p></div>'
					}
			},
			 vuetrix_vulHandleAttachmentAdd(event){
		        console.log(event);
                const self = this;
                function createFormData( file) {
                    var data = new FormData();
                    data.append("file", file);
                    return data
                }
                function uploadFileAttachment(attachment) {
                    uploadFile(attachment.file, setProgress, setAttributes);

                    function setProgress(progress) {
                        attachment.setUploadProgress(progress)
                    }

                    function setAttributes(attributes) {
                        attachment.setAttributes(attributes)
                    }
                }
                function uploadFile(file, progressCallback, successCallback) {
                    let formData = createFormData(file);
                    let config = {
                        onUploadProgress: event => {
                            var progress = event.loaded / event.total * 100
                            progressCallback(progress)
                        }
                    };
                    self.$ajax.BMZuserImg(formData,config)
                        .then(res => {
                            if (res.errcode === 1) {
                                let attributes = {
                                    url: res.data.imgpath,
                                    href: res.data.imgpath
                                };
                                successCallback(attributes)
                            } else {
                                self.$message('图片上传失败');
                            }
                        });
                }
                if (event.attachment.file) {
                    uploadFileAttachment(event.attachment)
                }
            },
			addEditorContent(EditorContent) {
          		this.EditorContent = EditorContent
    	  },
		    //漏洞编辑提交
		    vulSubmit(){
		    	this.isDisable = true
		        setTimeout(() => {
		          this.isDisable = false
		        }, 1000)
		      	let vulData = {
			    	'id': this.$route.query.id,
			    	'description' : this.vuetrix_vul.content,   //漏洞描述
			    }
		     	if( this.checked== true){
		      	 	this.$ajax.BMZvulReupdate(vulData)
					.then(res => {
			            if (res.errcode === 1) {
			            	/*window.localStorage.setItem("token", res.data.token);*/
			           		//this.$router.push({ path:"/membox/member/vuls" })
			           		this.dialog_vul=true
			            } else {
			             	this.$message.error(res.errmsg);
			            }
			        })
					.catch((res) => {

	        		})
  	 			}else{
		      	 	if(this.lang=='zh'){
						this.$message.error("请选择协议");
					}else if(this.lang=='en' || this.lang==null || this.lang=='' || this.lang=='ko'){
							this.$message.error("Accept the  agreement");
					}
		      	 }



		      },
		      refresh () {
			    window.location.reload()
			},
			routBtn(){
				this.$router.push({ path:"/membox/member/vuls"})
			},
		}
	}
</script>

<style>
	.sim_box img{
		width: 100%;
	}
	.dengdeng{
		padding: 0 10%;
	}
	.vul_wrap	 .el-form-item__label{
	    width: 100% !important;;
	}
	.vul_container .form-control-inp{
		width: 100%;
		height: 500px;
	}
	.vulsubmit_btn{
		padding: 8px 40px;
	}
	.vul_wrap .el-form-item__label{
	    text-align: left !important;
	}
	.vul_wrap .el-form-item__content{
	    margin-left: 0 !important;
	}

	.el-checkbox{
		width: 100%;;
		text-align: left;
	}
	svg{
		width:15px;
		height: 15px;
	}
	.simditor-body{
	 	width: 100%;
	 }
	 .simditor-body img{
	 	max-width: 100%;
	 }
	.simditor-body h1{
		width: 100%;
		text-align: left !important;
		font-size: 14px !important;
		margin: 0 !important;
		padding: 0;
	}
	.simditor-body p{
		width: 100%;
		text-align: left !important;
		font-size: 14px;
	}
	.inpwidth{
		width: 100%;
	}
	.showcen{
		display: block;
		text-align: center !important;
	}
	.showcen .el-button:nth-of-type(1){
		color: #ffffff !important;
		background: #409EFF;
	}
	.showcen .el-button:hover{
		background: #409EFF !important;
		border-color: #409EFF !important;
		color: #ffffff !important;
	}
	.demo-dynamic .el-form-item__content{
		width: 100%;
		display: inline-block;
		line-height: none;
	}

</style>
