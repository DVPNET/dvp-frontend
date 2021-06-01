<!--<template>
	<div>
		<div class="doc-wrap">
			  <div class="clearfix">
					<div class="fl pdf-file-name">去中心化漏洞平台</div> 
					<a class="fr common-btn ac download-btn btnshadow" href="http://fofastatic.ufile.ucloud.com.cn/Decentralized_Vulnerability_Platform_cn_v1.pdf?v=1" download="去中心化漏洞平台.pdf">下载详细白皮书</a>
			  </div>
			   <div class="pdf-container">
				    <span class="loading-tips">Loading...</span>
				    <canvas id="the-canvas"></canvas>
				    <div class="pdf-page">
				      <span id="page_num"></span>/<span id="page_count"></span>
				    </div>
				</div>
			 	<div class="operate-btns ac">
					<a class="prev-btn">上一页</a><a class="next-btn">下一页</a>
				</div>
		</div>
		
	</div>

</template>

<script>
	export default {
		name: 'doc', 
		data(){
			return{}
		},
		mounted(){
			let oS = document.createElement('script');
			let oH = document.getElementsByTagName('head')[0]
			oS.src = 'static/pdf/pdfscript.js';
			oH.appendChild(oS)
			oS.onload = function(){
				//alert(1)
			}
			this.$nextTick(function(){
				
	  		})
			
		}
	
	  }

</script>

<style>
.doc-wrap {
	width: auto !important;		
	min-width: 325px;;
	max-width: 1200px;
	min-height: 200px;
	margin: 0 auto;
	margin-top: 96px;
	margin-bottom: 40px;
	padding: 0 50px;
	padding-top: 40px;
	padding-bottom: 44px;
	background-color: #fff;
	box-shadow: 0 5px 10px 0 rgba(64,158,225,.1);
}

.doc-wrap>div:first-child {
	margin-bottom: 12px;
}

.pdf-file-name {
	font-size: 24px;
}

.download-btn {
	color: #fff;
	height: 42px;
	font-size: 16px;
	line-height: 42px;
	border-radius: 2px;
	padding: 0 42px;
	background-color: #2196f3;
}

.operate-btns a {
	display: inline-block;
	font-size: 16px;
	color: #4c5b6a;
	width: 90px;
	height: 32px;
	text-align: center;
	line-height: 30px;
	border-radius: 2px;
	border: 1px solid #dbe2e5;
}

.operate-btns a:hover {
	color: #fff;
	border-color: #2196f3;
	background-color: #2196f3;
}

.operate-btns a:first-child {
	margin-right: 12px;
}

.operate-btns a:last-child {
	margin-left: 12px;
}

.pdf-container {
	position: relative;
	height: 617px;
	margin-bottom: 18px;
	margin-top: 18px;
}

.pdf-page {
	position: absolute;
	left: 0;
	bottom: 25px;
	width: 100%;
	height: 18px;
	font-size: 16px;
	text-align: center;
}

.loading-tips {
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	width: 60px;
	margin: auto;
	line-height: 617px;
}
</style>-->