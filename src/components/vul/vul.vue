<template>
	<div class="vul_wrap">
		<el-container class="child-vulpage-wrap">
            <el-main class="vul_container" style="padding: 0 10% !important;">
            	<h1>{{$t('btn.sub_vul')}}</h1>           
                <p style="color: #f06d6d; text-align: left;"><i class="el-icon-warning"></i>{{$t('message.vulannouncement')}}</p>
                <!--<VueTrix-->
                    <!--v-model="content1"-->
                    <!--@trix-file-accept="handleFile"-->
                    <!--@trix-attachment-add="handleAttachmentAdd"-->
                    <!--@trix-attachment-remove="handleAttachmentRemove"/>-->
                <wrap-ld></wrap-ld>

            </el-main>
	    </el-container>
	</div>

</template>
<script>
	import wrapLd from '@/components/vul/wrapLd'

	export default {
		name:'val',
        data () {
            return {
            	
            }
        },
        methods: {

        },
		components:{
		    wrapLd
        }
	}
</script>

<style>
	.child-vulpage-wrap{
		max-width: 1200px;
	    min-height: 700px;
	    margin: 0 auto;
	    margin-top: 96px;
	    margin-bottom: 40px;
	    padding-bottom: 44px;
	    background-color: #fff;
	    -webkit-box-shadow: 0 5px 10px 0 rgba(64,158,225,.1);
	    -moz-box-shadow: 0 5px 10px 0 rgba(64,158,225,.1);
	    box-shadow: 0 5px 10px 0 rgba(64,158,225,.1);
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
	.vul_container{
		width: 100%;
		display: block;
		padding: 0 10%;
		box-sizing: border-box;
	}
	.vul_container h1{
		font-size: 24px;
	    color: #31412e;
	    line-height: 36px;
	    text-align: center;
	    margin-top: 30px;
	    padding-bottom: 20px;
	}
	.vul_container p{
	    margin-bottom: 20px;
	    line-height: 28px;
	    font-size: 14px;
	}
	.vul_container p i{
		margin-right: 10px;
		font-size: 18px;
	}
	.el-checkbox{
		width: 100%;;
		text-align: left;
	}
	svg{
		width:15px;
		height: 15px;
	}
	.demo-dynamic .el-form-item__content {
	    width: 100%;
	    display: inline-block;
	    line-height: none;
	}

</style>
