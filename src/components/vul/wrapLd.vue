<template>

	<div>
		<el-form  label-width="100%" class="demo-dynamic" >
			
			<el-form-item prop=""   :label="$t('message.vulTitle')" >
                    <el-input  :placeholder="$t('message.please_input_title')" v-model="vulTitle"></el-input>
            </el-form-item>
            <el-form-item prop=""   :label="$t('message.targetType')" >
            	<el-select v-model="value1" clearable :placeholder="$t('message.select_target_type')" @change="checkCate">
				    <el-option
				      v-for="(item,index) in cate"
				      :key="item.id"
				      :label="$t(item.name)"
				      :value="item.id">
				    </el-option>
				  </el-select>
            </el-form-item>
            <el-form-item prop=""   :label="$t('message.attackType')" >
            	<el-select v-model="value2" clearable :placeholder="$t('message.select_attack_type')">
				    <el-option
				       v-for="(item,index) in cates"
				      :key="item.id"
				      :label="$t(item.name)"
				      :value="item.id">
				    </el-option>
				  </el-select>
            </el-form-item>
            <el-form-item prop=""   :label="$t('message.vulnerability_level')" >
            	<el-select v-model="value3" clearable :placeholder="$t('message.PleaseSelectSeverityLoophole')">
				    <el-option
				       v-for="(item,index) in level"
				      :key="item.id"
				      :label="item.name"
				      :value="item.id">
				    </el-option>
				  </el-select>
            </el-form-item>
            <el-form-item prop=""   :label="$t('message.vulvendor')" >
            	<el-select v-model="value4" clearable :placeholder="$t('message.PleaseSelectVendor')" @change="changeComOther">
				    <el-option
				       v-for="(item,index) in company"
				      :key="item.id"
				      :label="item.company_name"
				      :value="item.id">
				    </el-option>
				    <el-option  :key="vulOther" :value="vulOther" :label="vulOthercon"></el-option>
				</el-select>
				<div style="margin-top: 20px;" v-show="ComOther">
					<el-autocomplete
						 class="inpwidth"
						  v-model="companyName"
						  :fetch-suggestions="querySearchAsync"
						  :placeholder="$t('message.PleaseEnterKeywords')"
						  @select="handleSelect"
						></el-autocomplete>
						<!--<el-select
						    v-model="companyName"
						    multiple
						    filterable
						    remote
						    reserve-keyword
						    placeholder="请输入关键词"
						    :remote-method="remoteMethod"
						    :loading="loading">
						    <el-option
						      v-for="item in arr"
						      :key="item.id"
						      :label="item.value"
						      :value="item.id">
						    </el-option>
						  </el-select>-->
				</div>
            </el-form-item>

            <el-form-item prop=""   :label="$t('message.VendorType')" >
            	<el-select v-model="value5" clearable :placeholder="$t('message.PleaseSelectVender')">
				    <el-option
				      v-for="(item,index) in compType"
				      :key="item.id"
				      :label="item.name"
				      :value="item.id">
				    </el-option>
				</el-select>
            </el-form-item>
			<el-form-item prop=""   :label="$t('message.VendorLevel')" >
            	<el-select v-model="value7" clearable :placeholder="$t('message.PleaseSelectVenderLevel')">
				    <el-option
				      v-for="(item,index) in compLevel[value5]"
				      :key="item.id"
				      :label="item.name"
				      :value="item.id">
				    </el-option>
				</el-select>
			</el-form-item>
			<el-form-item prop=""   :label="$t('message.VendorRankLink')" >
                    <el-input  :placeholder="$t('message.please_input_rank_link')" v-model="vulRankLink"></el-input>
            </el-form-item>
            <el-form-item prop=""   :label="$t('message.ContactInfo')" >
                <el-input  :placeholder="$t('message.PleaseEnterContactInformationVendorOptional')" v-model="telcons"></el-input>
            </el-form-item>
            <div style="clear:both"></div>
            <el-form-item prop=""   label="" class="sim_box">
            	<div style="margin-bottom: 5px;">{{$t('message.vulnerabilityDescription')}}<span style="color:#e9a331">&nbsp;&nbsp;&nbsp;（{{$t('message.PleaseUploadPicturesDroppingCopy')}}）</span></div>
           		 <!--漏洞描述-->
                <VueTrix
                v-model="vuetrix_vul.content"
                @trix-attachment-add="vuetrix_vulHandleAttachmentAdd"/>
			</el-form-item>
			<!-- 视频 -->
			<el-form-item prop=""   :label="$t('message.VulVideo')" >
			<el-upload
				style="display:inline-block"
				class="upload-demo"
				drag
				name="file"
				:show-file-list="false"
				:before-upload="beforeAvatarUpload"
				>
				
				<i class="el-icon-upload"></i>
				<div class="el-upload__text"><em>{{$t('message.VulVideoLimit1')}}</em></div>
				<div class="el-upload__tip" slot="tip">{{$t('message.VulVideoLimit2')}}</div>
				
			</el-upload>
			<video style="display:inline-block;width:350px;height:176px;margin-left:20px;margin-bottom:48px" v-if="showVideoPath !=''"
						v-bind:src="showVideoPath"
						controls="controls">
			
			</video>
			</el-form-item>
            <el-form-item label="" prop="yzm" class="yzmbox al">
                <el-input type="yzm" v-model="yzm"  :placeholder="$t('message.input_verification_code')" style="width: 30%;"></el-input>
                <span class="yzmimg cp"><img :src="imgurl" alt="验证码"  @click="changeCodeImg" title="点击换一张" /></span>
            </el-form-item>
            <el-form-item>
            	<el-checkbox v-model="checked">{{$t('message.i_have_view_agreement')}} <router-link to="/agreement" target="_blank">《{{$t('dvp_footer.Dvp_Agreement')}}》</router-link></el-checkbox>
           		<!--报错信息-->
           		<span v-show="message" class="inperr" style="display: block;text-align: left;">这里</span>
            </el-form-item>
            <el-form-item>
                <el-button type="primary"  class="wrapBtnlg btnshadow" @click="vulSubmit"  :disabled="isDisable">{{$t('message.submit')}}</el-button>
			</el-form-item>
			
		</el-form>

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
                        <router-link :to="{path:'/membox/wrapdetail',query:{id:vulBtn}}"><el-button  type="primary" class="wrapBtn btnshadow">{{$t('message.look_over')}}</el-button></router-link>
					    <el-button @click='refresh' class="wrapBtn btnshadow" style="margin-left: 20px">{{$t('message.go_on_submit')}}</el-button>
                    </span>
			</el-dialog>
	</div>
</template>

<script>
    import VueTrix from './vue-trix/src'
	export default {
		name : "wrapLd",
		components:{VueTrix},
		data() {
	      return {
            vuetrix_vul: {
                content: '<p><strong>漏洞URL：如果是Web就填写此项</strong></p><p>&nbsp;</p><p><strong>简要描述：漏洞说明、利用条件、危害等</strong></p><p>&nbsp;</p><p><strong>漏洞证明：</strong></p><p>&nbsp;</p><p><strong>漏洞利用代码：</strong></p><p>&nbsp;</p><p><strong>修复方案：</strong></p><p>&nbsp;</p></div>'
            },
	      	dialogMyVulBj_data: [],
	      	checked: false,
	      	dialog_vul: false,
	      	isDisable: false,
	      	vulTitle:'',
	      	companyName: '',
	      	message: false,
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
			compLevel:[ [{ id: '1',name: '一等'}, {id: '2',name: '二等'}, {id: '3',name: '三等'}, {id: '4',name: '四等' },{id: '5',name: '五等' }],
						[{ id: '1',name: '一等'}, {id: '2',name: '二等'}],
						[{ id: '1',name: '一等'}, {id: '2',name: '二等'}, {id: '3',name: '三等'}, {id: '4',name: '四等' },{id: '5',name: '五等' }],
						[{ id: '1',name: '一等'}, {id: '2',name: '二等'}, {id: '3',name: '三等'}, {id: '4',name: '四等' },{id: '5',name: '五等' }],
						[{ id: '1',name: '一等'}, {id: '2',name: '二等'}, {id: '3',name: '三等'}, {id: '4',name: '四等' },{id: '5',name: '五等' }],
						[{ id: '1',name: '一等'}, {id: '2',name: '二等'}, {id: '3',name: '三等'}, {id: '4',name: '四等' },{id: '5',name: '五等' }],
						[{ id: '0',name: '无'}],
			],
			value1: '',
	        value2: '',
	        value3: '',
	        value4: '',
	        value5: '',
			value6: '',
			value7: '',
			vulRankLink:'',
	        loading: false,
	        arr:[],
	        vulBtn:'',
	        yzm:'',
	        imgurl: '',
			lang: 'zh',
			showVideoPath: ''
		  }
		},
		created:function(){
		   	this.initData();
		},
	    methods: {
		  
	    	initData(){
	
	    		this.imgurl=this.$ajax.captcha+'?t='+new Date().getTime();
	    		this.tokenType=window.localStorage.getItem("tokenType");
	    		this.lang=localStorage.getItem('locale')
	  			var _this = this;
	  			//目标类型
	  			 if(this.lang=='zh'){
	  			 	this.vuetrix_vul.content='<p><strong>漏洞URL：如果是Web就填写此项</strong></p><p>&nbsp;</p><p><strong>简要描述：漏洞说明、利用条件、危害等</strong></p><p>&nbsp;</p><p><strong>漏洞证明：</strong></p><p>&nbsp;</p><p><strong>漏洞利用代码：</strong></p><p>&nbsp;</p><p><strong>修复方案：</strong></p></div>'
	  				this.level=[{ id: '0',name: '低危'}, {id: '1',name: '中危'}, {id: '2',name: '高危'}, {id: '3',name: '严重' }]
				 	this.compType=[{id: '0',name: '交易平台'}, { id: '1',name: '矿池'}, {id: '2',name: '公链'}, {id: '3',name: '钱包'}, {id: '4',name: '项目方' }, { id: '5',name: '智能合约'}, { id: '6',name: '其它' }]
	  				this.$ajax.BMZvulCate({"id": 0,'language':'zh_CN'})
						.then(res => {
							if(res.errcode===1){
								_this.cate = res.data.cate;
							}
						})
	  			}else if(this.lang=='en' || this.lang==null || this.lang==''){
	  				this.vuetrix_vul.content='<p><strong>Vulnerability URL: fill this if it is the Web</strong></p><p>&nbsp;</p><p><strong>Summary: vulnerability description, Exploit condition, harm etc.</strong></p><p>&nbsp;</p><p><strong>Vulnerability proof：</strong></p><p>&nbsp;</p><p><strong>Exploit code：</strong></p><p>&nbsp;</p><p><strong>Solution：</strong></p><p>&nbsp;</p></div>'
	  				this.level=[{ id: '0',name: 'Low'}, {id: '1',name: 'Mid'}, {id: '2',name: 'High'}, {id: '3',name: 'Serious' }]
				 	this.compType=[{id: '0',name: 'Exchange'}, { id: '1',name: 'Mine pool'}, {id: '2',name: 'Public chain'}, {id: '3',name: 'Wallets'}, {id: '4',name: 'Vendor' }, { id: '5',name: 'Smart contracts'}, { id: '6',name: 'Other' }]
					this.compLevel=[ 
						[{ id: '1',name: 'level 1'}, {id: '2',name: 'level 2'}, {id: '3',name: 'level 3'}, {id: '4',name: 'level 4' },{id: '5',name: 'level 5' }],
						[{ id: '1',name: 'level 1'}, {id: '2',name: 'level 2'}],
						[{ id: '1',name: 'level 1'}, {id: '2',name: 'level 2'}, {id: '3',name: 'level 3'}, {id: '4',name: 'level 4' },{id: '5',name: 'level 5' }],
						[{ id: '1',name: 'level 1'}, {id: '2',name: 'level 2'}, {id: '3',name: 'level 3'}, {id: '4',name: 'level 4' },{id: '5',name: 'level 5' }],
						[{ id: '1',name: 'level 1'}, {id: '2',name: 'level 2'}, {id: '3',name: 'level 3'}, {id: '4',name: 'level 4' },{id: '5',name: 'level 5' }],
						[{ id: '1',name: 'level 1'}, {id: '2',name: 'level 2'}, {id: '3',name: 'level 3'}, {id: '4',name: 'level 4' },{id: '5',name: 'level 5' }],
						[{ id: '0',name: '无'}],
					],
					  this.$ajax.BMZvulCate({"id": 0,'language':'en_US'})
						.then(res => {
							if(res.errcode===1){
								_this.cate = res.data.cate;
							}
						})
	  			} else if(this.lang=='ko'){
	  				this.vuetrix_vul.content='<p><strong>취약점 사이트 URL: 웹이라면 이 항목을 작성하세요</strong></p><p>&nbsp;</p><p><strong>요약: 취약점에 대한 설명, 이용 조건, 피해 등.</strong></p><p>&nbsp;</p><p><strong>취약점 증명(설명 /이미지/파일)：</strong></p><p>&nbsp;</p><p><strong>원격 해킹공격코드(EXPLOIT CODE)：</strong></p><p>&nbsp;</p><p><strong>해결 방안：</strong></p><p>&nbsp;</p></div>'
	  				this.level=[{ id: '0',name: '낮은 위험'}, {id: '1',name: '중간 위험'}, {id: '2',name: '높은 위험'}, {id: '3',name: '심한 위험' }]
				 	this.compType=[{id: '0',name: '거래소'}, { id: '1',name: '마이닝 풀'}, {id: '2',name: '퍼블릭체인'}, {id: '3',name: '지갑'}, {id: '4',name: '블록체인 프로젝트' }, { id: '5',name: '스마트컨트랙트'}, { id: '6',name: 'Other' }]
					this.compLevel=[ [{ id: '1',name: 'level 1'}, {id: '2',name: 'level 2'}, {id: '3',name: 'level 3'}, {id: '4',name: 'level 4' },{id: '5',name: 'level 5' }],,
						[{ id: '1',name: 'level 1'}, {id: '2',name: 'level 2'}],
						[{ id: '1',name: 'level 1'}, {id: '2',name: 'level 2'}, {id: '3',name: 'level 3'}, {id: '4',name: 'level 4' },{id: '5',name: 'level 5' }],
						[{ id: '1',name: 'level 1'}, {id: '2',name: 'level 2'}, {id: '3',name: 'level 3'}, {id: '4',name: 'level 4' },{id: '5',name: 'level 5' }],
						[{ id: '1',name: 'level 1'}, {id: '2',name: 'level 2'}, {id: '3',name: 'level 3'}, {id: '4',name: 'level 4' },{id: '5',name: 'level 5' }],
						[{ id: '1',name: 'level 1'}, {id: '2',name: 'level 2'}, {id: '3',name: 'level 3'}, {id: '4',name: 'level 4' },{id: '5',name: 'level 5' }],
						[{ id: '0',name: '无'}],
					],
					  this.$ajax.BMZvulCate({"id": 0,'language':'en_US'})
						.then(res => {
							if(res.errcode===1){
								_this.cate = res.data.cate;
							}
						})
	  			}
				

				//厂商
				this.$ajax.BMZcompany()
				.then(res => {
					if(res.errcode===1){
						_this.company = res.data.company;
					}

				})
			},
			captcha(){
				 this.imgurl = this.$ajax.captcha+'?t='+new Date().getTime();
			},
			changeCodeImg(){
				this.imgurl = this.$ajax.captcha+'?t='+new Date().getTime();
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
                	console.log(attachment)
                    uploadFile(attachment.file, setProgress, setAttributes);

                    function setProgress(progress) {
                        attachment.setUploadProgress(progress)
                    }

                    function setAttributes(attributes) {
                    	attachment.attachment.fileObjectURL = attributes.url;
					    attachment.attachment.preloadingURL = attributes.url;
					    attachment.attachment.previewURL = attributes.url;
					    attachment.setAttributes(attributes);
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
                    console.log(formData)
                    self.$ajax.BMZuserImg(formData,config)
                        .then(res => {
                            if (res.errcode === 1) {
                                let attributes = {
                                    url: res.data.imgpath,
                                    href: res.data.imgpath
                                };
                                successCallback(attributes)
                            } else {
                                self.$message('图片上传失败')
                            }
                        });
                }
                if (event.attachment.file) {
                    uploadFileAttachment(event.attachment)
                }
            },
 			/*上传视频*/
		    	beforeAvatarUpload(file) {
					
		        const isVideo = file.type === 'video/mp4';
				const isPage = file.size / 1024 /1024  >20;
				if(!isVideo){
					this.$message('视频格式错误')
					return false;
				}
				if(isPage){
					this.$message('视频过大')
					return false;
				}
				let formData = new FormData();
					formData.append('file', file);
					 // post上传图片
				    let _this = this
				    this.$ajax.BMZuserVideo(formData)
				 	 .then(res => {
				  		if (res.errcode === 1) {
				     		_this.showVideoPath = res.data.imgpath
				   		}else{
				   			this.$message(res.errmsg)
				   		}
				 	});
		        },
			checkCate(){
				var _this = this;
				 if(this.lang=='zh'){
					this.$ajax.BMZvulCate({"id": this.value1,'language':'zh_CN'})
					.then(res => {
						if(res.errcode===1){
							_this.cates = res.data.cate;
						}
					})
				}else if(this.lang=='en' || this.lang==null || this.lang=='' || this.lang=='ko'){
					this.$ajax.BMZvulCate({"id": this.value1,'language':'en_US'})
					.then(res => {
						if(res.errcode===1){
							_this.cates = res.data.cate;
						}
					})
				}
				
				return false
			},
			changeComOther(index){
				console.log(index)
				if(this.value4 == 0){
					this.ComOther=true
				}else{
					this.ComOther=false
				}
			},//模糊搜索数据
			/*remoteMethod(query) {
				var _this = this;
				if (query !== '') {
					this.$ajax.BMZvulComtmp({"name":query})
					.then(res => {
						var cons=res.data.company
							console.log(cons)
						    this.loading = true;
						    setTimeout(() => {
						        this.loading = false;
						        _this.arr=[]
						        for(let i=0;i<cons.length;i++){
										_this.arr.push({
										"value": cons[i].company
										})
								}
						    }, 200);

					})
				} else {
			      this.companys = [];
			   }
			  },*/
			//模糊搜索数据2
			querySearchAsync(queryString, cb) {
				var _this = this;
				this.$ajax.BMZvulComtmp({"name":this.companyName})
				.then(res => {
					let arr=[]
					if(res.errcode === 1){
						_this.companys = res.data.company;
						if(res.data){
							for(var i=0;i<_this.companys.length;i++){
								if(res.data !== ''){
									arr.push({
									"value": _this.companys[i].company
									})
								}else{
									arr.push({
									"value": "暂无数据"
									})
								}
							}
						}
						_this.timeout = setTimeout(() => {
					          cb(arr);
					    }, 200 * Math.random());

					}else{
						arr.push(res.errmsg)
					}
				})
		     },
		    handleSelect(item) {
		        console.log(item);
		    },
		    //漏洞提交
		    vulSubmit(){
		    	this.isDisable = true
		        setTimeout(() => {
		          this.isDisable = false
		        }, 3000)
		      	 let vulData = {
			    	'title' : this.vulTitle,  //漏洞标题
			    	'target_type' : this.value1, //目标类型
			    	'attack_type' : this.value2,  //攻击类型
			    	'level' : this.value3, //漏洞等级
			    	'company' : this.companyName, //归属厂商
			    	'description' : this.vuetrix_vul.content,   //漏洞描述
			    	'company_id' : this.value4,    //商户id
					'company_type' : this.value5,  //商户类型
					'company_level' : this.value7,  //商户等级
					'company_rank_link' : this.vulRankLink,  //商户排名链接
			    	'company_contact' : this.telcons,  //厂商联系方式
			    	'captcha' : this.yzm,
			    	'video' : this.showVideoPath
			    }
			if( this.checked== true){
	      	 	this.$ajax.BMZvulAdd(vulData)
				.then(res => {
		            if (res.errcode === 1) {
	               		this.vulBtn = res.data.id		           	
      	 				this.message=false;
      	 				this.dialog_vul=true	      	 					      	 			
		            }else {
		               this.$message.error(res.errmsg);
		               this.imgurl = this.$ajax.captcha+'?t='+new Date().getTime();
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
		 }
		 
		}
	}
</script>

<style scoped>
	.el-form-item__content{
		width: 100% !important;
		display: inline-block !important;
	}
	.sim_box{
		text-align: left !important;
	}
	.showcen{
		width: 100% !important;
		display: block;
		text-align: center !important;
	}
	.demo-dynamic{
		min-width: 856px ;
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
	.simditor-body{
	 	width: 100%;
	 }
	.simditor-body img{
	 	max-width: 100%;
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
		background: #409EFF !important;
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
