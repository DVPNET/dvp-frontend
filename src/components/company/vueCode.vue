<template>
  <div class="child-page-wrap">
    <el-form class="vuecode">
      <el-row :gutter="10">
        <el-col :span="12">
          <el-form-item>          	
          	<span class="vuecodetitle">{{$t('message.LastUpdate')}}：</span>
          	<span class='vuecodetime'>{{oldTime}}</span>
            <el-input v-html="oldStr.replace(/\\n|\r\n/g,'<br>')" type="textarea" :autosize="{minRows: 2, maxRows: 15}" :placeholder="$t('message.PleaseInputOldData')"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item>          	
          	<span class="vuecodetitle">{{$t('message.CurrentUpdate')}}：</span>
          	<span class="vuecodetime">{{newTime}}</span>
            <el-input v-html="newStr.replace(/\\n|\r\n/g,'<br>')" type="textarea" :autosize="{minRows: 2, maxRows: 15}" :placeholder="$t('message.PleaseInputNewData')"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item>
          		<span class="vuecodetitle" style="margin:20px 0 18px 0 !important;">{{$t('message.Difference')}}：</span>
          		<code-diff :old-string="oldStr" :new-string="newStr" :context="context" :output-format="outputFormat" />
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    
  </div>
</template>

<script>
import codeDiff from '../../lib/index.js'
//import oldStr from '../../date/oldStr'
//import newStr from '../../date/newStr'
export default {
  name: 'App',
  components: {
    codeDiff
  },
  data () {
    return {
      oldStr:'',
      newStr:'',
      newTime:'',
      oldTime:'',
      fotmat: false,
      context: 5
    }
  },
  computed: {
    outputFormat () {
      return this.fotmat ? 'line-by-line' : 'side-by-side'
    }
  },
  methods: {
			initData(){
				this.lang=localStorage.getItem('locale')
				if(this.lang==='zh'){
					this.$ajax.ComRewhisInfo({'id': this.$route.query.id,'language':'	zh_CN'})
					.then(res => {
								if(res.errcode === 1){
											this.newStr=res.data.current
											this.oldStr=res.data.prev
											this.newTime=res.data.currentTime
											this.oldTime=res.data.prevTime
								}
		        })
				}else if(this.lang==='en' || this.lang==null || this.lang=='' || this.lang == 'ko'){
					 this.$ajax.ComRewhisInfo({'id': this.$route.query.id,'language':'en_US'})
					.then(res => {
								if(res.errcode === 1){
											this.newStr=res.data.current
											this.oldStr=res.data.prev
											this.newTime=res.data.currentTime
											this.oldTime=res.data.prevTime
								}
		        })
				}

			}
		},
		created:function(){
			   	this.initData();
		}
 }
</script>

<style scoped>
	.el-form-item__content:nth-of-type(1){
		    border: 1px solid #ccc;
		    padding: 10px;
		    box-sizing: border-box;
	}
.el-form-item__content:nth-of-type(2){
		    border: 1px solid #ccc;
		    padding: 10px;
		    box-sizing: border-box;
	}
	.vuecodetitle{
		font-size: 16px;
		height: 16px;
		line-height: 16px !important;
		margin-bottom: 5px;
		display: block;
		font-weight: bolder;
	}
	.vuecodetime{
		font-size: 12px;
		height: 12px;
		width: 100%;
		display: block;
		line-height: 18px !important;
		margin: 0 0 20px 0;
		color: #8e9eae;
	}
</style>