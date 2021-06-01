<template>
	<div class="white-paper">
		<div id="white-paper"></div>
	</div>
</template>
<script>
	export default {
		name: 'whitePaper',
		data(){
			 return {
				lang: 'zh'
			}
		},
		methods: {
			init() {
				this.lang = localStorage.getItem('locale');
				if (this.lang == 'zh') {
					PDFObject.embed("static/pdf/zh.pdf", "#white-paper");
				} else if (this.lang == 'en') {
					PDFObject.embed("static/pdf/en.pdf", "#white-paper");
				} else if (this.lang == 'ko') {
					PDFObject.embed("static/pdf/ko.pdf", "#white-paper");
				} else {
					PDFObject.embed("static/pdf/en.pdf", "#white-paper");
				}
			}
		},
		mounted() {
			this.init();
    }
	}
</script>

<style>
	.pdfobject-container { 
		height: 100%;
		background-color: #fff;
	}

	#white-paper,.white-paper {
		height: 100%;
	}
	
	.isWhitePaper {
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
	}
</style>
