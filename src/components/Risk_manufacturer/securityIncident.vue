<template>
  <div id="security-incident">
    <div class="bottom-main clearfix">
      <div class="fr time-line-wrap">
        <!-- 统计分析 -->
        <div class="right-chart">
          <div class="sec-title">安全趋势<img src="/static/image/icon_more.png"><a @click="toAnalysis">MORE</a></div>
          <a target="_blank" @click="toAnalysis" style="cursor: pointer">
            <div class="chart-item clearfix">
              <div class="fl">
                <p>经济损失趋势</p>
                <p class="num">{{affectMoney}}万美元</p>
              </div>
              <div class="fr" id="chart-one"></div>
            </div>
          </a>
          <div class="chart-line" style="margin: 5px 0 25px 0;"></div>
          <a target="_blank" @click="toAnalysis" style="cursor: pointer">
            <div class="chart-item clearfix">
              <div class="fl">
                <p>安全事件数量</p>
                <p class="num event-num">{{affectNum}}</p>
              </div>
              <div class="fr" id="chart-two"></div>
            </div>
          </a>
        </div>
        <!-- 数据支持 -->
        <div class="data-support">
          <div class="sec-title">数据支持</div>
          <div class="clearfix">
            <div @mouseenter="isShowOne = false" @mouseleave="isShowOne = true" @click="toOffical('http://www.baimaohui.net')">
              <img src="/static/image/baimaohui.png" v-if="isShowOne">
              <img src="/static/image/baimaohuihover.png" v-else>
            </div>
            <div @mouseenter="isShowTwo = false" @mouseleave="isShowTwo = true" @click="toOffical('https://www.chaitin.cn/zh/')">
              <img src="/static/image/changting.png" v-if="isShowTwo">
              <img src="/static/image/changtinghover.png" v-else>
            </div>
            <div @mouseenter="isShowThree = false" @mouseleave="isShowThree = true" @click="toOffical('https://peckshield.com/')">
              <img src="/static/image/psen.png" v-if="isShowThree">
              <img src="/static/image/psenhover.png" v-else>
            </div>
            <div @mouseenter="isShowFour = false" @mouseleave="isShowFour = true" @click="toOffical('https://secbit.io')">
              <img src="/static/image/s.png" v-if="isShowFour">
              <img src="/static/image/shover.png" v-else>
            </div>
          </div>
        </div>
      </div>
      <div class="fl article">
        <div>
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/securityEventLib' }">安全事件</el-breadcrumb-item>
            <el-breadcrumb-item>详情</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div style="box-shadow: 0px 3px 13px 0px rgba(33,152,242,0.2);">
          <div class="article-title text-ellipsis-two" id="article-title">{{title}}</div>
          <!-- <div class="clearfix">
            <div class="fr share">
              <span>分享到</span>
              <span class="wechat-share"><a href="javascript:;"><img src="/static/image/weixin-at.png"></a></span>
              <span class="weibo-share"><a><img src="/static/image/weibo-at.png"></a></span>
              <div id="code" title="https://bcsec.org/index/detail/tag/2/id/585" style="display: none;"><canvas width="100" height="100" style="display: none;"></canvas><img alt="Scan me!" src="data:image/png;base64,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" style="display: block;"></div>
            </div>
          </div> -->
          <div class="article-content view" id="preview" v-html="content" v-loading="loading">
          </div>
          <div class="disclaimer">
            <p>*文章为作者独立观点，不代表DVP立场</p>
            <p>转载此文章须经作者同意，并请附上出处（{{netname}}）及本页链接。原文链接 <a :href="remark" target="_blank">{{remark}}</a></p>
          </div>
          <div class="meta ar meta-bottom" style="position:static">
            <span v-if="remark"><img src="/static/image/icon_wode.png">白帽汇安全研究院<em></em>转载<em></em>{{writetime}}</span>
            <span v-if="!remark"><img src="/static/image/icon_wode.png">白帽汇安全研究院<em></em>原创<em></em>{{writetime}}</span>
            <span><img src="/static/image/icon_laiyuan.png">{{netname}}</span>
            <span style="margin-right: 0;"><img src="/static/image/icon_liulan.png">{{clickNum}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "securityIncident",
    components: {
      
    },
    data() {
      return {
        lang: 'zh',
        langshow: true,
        isShowOne: true,
        isShowTwo: true,
        isShowThree: true,
        isShowFour: true,
        affectMoney: 0,
        affectNum: 0,
        title: '',
        content: '',
        remark: '',
        writetime: '',
        clickNum: '',
        netname: '',
        loading: true
      }
    },
    methods: {
      initOneLine() {
        this.$ajax.securityIncident('year='+this.year+'&type=money')
        .then(res =>{
          if (res.state == 'yes') {
            if (res.data.types && res.data.years) {
              let xData = [];
              let yData = [];
              res.data.years.forEach((val, key) => {
                xData.push(val.occur_time);
              })
              yData = res.data.types;
              var chartOneBox = this.$echarts.init(document.getElementById('chart-one'));
              var optionOno = {
                xAxis: {
                  show: false,
                  type: 'category',
                  boundaryGap: false,
                  data: xData
                },
                yAxis: {
                  show: false,
                  type: 'value'
                },
                grid: {
                  left: 0,
                },
                series: [{
                  data: yData,
                  type: 'line',
                  symbol: 'none',
                  smooth: true,
                  itemStyle: {
                    color: '#bfe0fc'
                  },
                  lineStyle: {
                    width: 1
                  },
                  areaStyle: {
                    color: '#eaf6ff'
                  }
                }]
              }; 
              chartOneBox.setOption(optionOno);
              let affectMoney = 0;
              res.data.types.forEach(function(v,k) {
                affectMoney += v;
              })
              this.affectMoney = parseInt(affectMoney);
            }
          }
        })
      },
      initTwoLine() {
        this.$ajax.securityIncident('year='+this.year+'&type=num')
        .then(res =>{
          if (res.state == 'yes') {
            if (res.data.types && res.data.years) {
              let xData = [];
              let yData = [];
              res.data.years.forEach((val, key) => {
                xData.push(val.occur_time);
              })
              yData = res.data.types;
              var chartTwoBox = this.$echarts.init(document.getElementById('chart-two'));
              var optionTwo = {
                xAxis: {
                  show: false,
                  type: 'category',
                  boundaryGap: false,
                  data: xData
                },
                yAxis: {
                  show: false,
                  type: 'value'
                },
                grid: {
                  left: 0,
                },
                series: [{
                  data: yData,
                  type: 'line',
                  symbol: 'none',
                  smooth: true,
                  itemStyle: {
                    color: '#bfe0fc'
                  },
                  lineStyle: {
                    width: 1
                  },
                  areaStyle: {
                    color: '#eaf6ff'
                  }
                }]
              }; 
              chartTwoBox.setOption(optionTwo);
              let affectNum = 0;
              res.data.types.forEach(function(v,k) {
                affectNum += v;
              })
              this.affectNum = parseInt(affectNum);
            }
          }
        })
      },
      getDetail(id) {
        this.$ajax.eventDetail({id: id})
        .then(res =>{
          if (res) {
            this.title = res.title;
            this.content = res.content.replace(/src="\/ueditor\/php\/upload\/image/g, 'src="https://bcsec.org/ueditor/php/upload/image');
            this.remark = res.remark;
            this.writetime = res.writetime;
            this.clickNum = res.clickNum;
            this.netname = res.netname;
            this.loading = false;
          }
        })
      },
      toAnalysis() {
        this.$router.push({
          name: 'statisticalAnalysis',
          path: '/statisticalAnalysis'
        });
      },
      toOffical(url) {
        window.open(url, '_blank');
      }
    },
    mounted() {
      this.initOneLine();
      this.initTwoLine();
      if (this.$route.query.id) {
        this.getDetail(this.$route.query.id);
      }
    }
  }
   
</script>

<style scoped>
  #security-incident {
    margin-top: 60px;
    margin-bottom: 80px;
  }

  .bottom-main,
  .homebanner>div {
    max-width: 1200px;
    margin: 0 auto;
    margin-top: 20px;
  }

  .bottom-main>.fl {
    width: 936px;
    /* margin-top: 30px; */
    margin-bottom: 80px;
    /* padding: 0 30px; */
    background:rgba(255,255,255,1);
    /* box-shadow: 0px 3px 13px 0px rgba(33,152,242,0.2); */
  }

  .bottom-main>.fr {
    width: 236px;
  }

  .sec-event {
    position: relative;
  }

  .sec-title {
    height: 60px;
    line-height: 60px;
    font-size: 18px;
    font-weight: 400;
    color: #20293B;
    padding: 0 20px;
  }

  .sec-event>.fr {
    position: relative;
    height: 60px;
    line-height: 60px;
    overflow: hidden;
  }

  .sec-title img {
    float: right;
    margin-top: 24px;
  }

  .sec-title a {
    position: relative;
    top: -4px;
    font-size: 12px;
    color: #8E9EAE;
    margin-left: 74px;
    font-weight: normal;
  }

  .chart-item {
    cursor: pointer;
    color: rgb(121,141,153);
    font-size: 14px;
    padding: 0 20px;
    border-radius: 4px;
    background-color: #fff;
    transition: all 0.2s ease-in;
    -webkit-transition: all 0.2s ease-in;
    -o-transition: all 0.2s ease-in;
    -moz-transition: all 0.2s ease-in;
  }

  .chart-item .num {
    font-size: 16px;
    line-height: 34px;
    color: rgb(226,100,127);
  }

  #chart-one, #chart-two {
    position: relative;
    top: -20px;
    width: 100%;
    height: 66px;
  }

  .chart-line {
    width: 100%;
    height: 1px;
    margin: 0 auto;
    background-color: #eee;
  }

  .chart-item .event-num {
    font-size: 16px;
    color: rgb(21,148,229);
  }

  .time-line-wrap>div {
    background:rgba(255,255,255,1);
    box-shadow: 0px 3px 13px 0px rgba(33,152,242,0.2); 
  }

  .right-chart {
    margin-top: 30px;
    padding-bottom: 0;
  }

  .data-support {
    margin-top: 30px;
    padding-bottom: 12px;
  }

  .data-support>.clearfix {
    padding: 0 20px;
  }

  .data-support>.clearfix>div {
    float: left;
    width: 92px;
    height: 36px;
    cursor: pointer;
    line-height: 34px;
    text-align: center;
    margin-right: 8px;
    margin-bottom: 8px;
    background:rgba(226,234,241,0);
    border: 1px solid rgba(235, 238, 245, 1);
  }

  .data-support>.clearfix>div:nth-child(2n) {
    margin-right: 0;
  }

  .data-support>.clearfix>div img {
    /* height: 26px;
    width: auto; */
  }

  .data-support>.clearfix>div:hover {
    background:rgba(255,255,255,1);
    box-shadow: 0px 2px 6px 0px rgba(33,152,242,0.2);
  }

  .sec-title.main-title {
    width: 895px;
    font-size: 20px;
    border-bottom: 1px solid rgba(226,234,241,1);
  }

  .sec-content .event-title:hover {
    color: #2196F3;
  }

  .text-ellipsis-one {
	  display: -webkit-box;
	  -webkit-box-orient: vertical;
	  -webkit-line-clamp: 1;
	  overflow: hidden;
	}
	.sec-event-main-wrap {
		background-color: #fafafa;
	}
	.related-item a {
		color:#5e6b73;
	}

	.sec-event-main {
		width: 1200px;
		margin: 0 auto;
		padding-top: 93px;
	}

	.article {
		width: 800px;
	}

	.article-title {
		color: #535a6c;
		font-size: 22px;
		line-height: 40px;
		max-height: 80px;
		font-weight: bold;
    margin-bottom: 3px;
    padding: 0 30px;
    padding-top: 30px;
	}

	.meta,.share {
		font-size: 12px;
		color: #798d99;
	}
		
	.share {
		position: relative;
	}

	.meta span {
		cursor: pointer;
		margin-right: 32px;    
	}
	
	.meta a {
		color: #798d99;
	}
	
	.meta a:hover {
		color: rgb(21,148,229);
	}

	.meta img {
		margin-right: 7px;
		margin-top: -3px;
	}

	/* 文章详情 */
	#code {
    display: none;
    position: absolute;
    top: 38px;
    left: 0;
    width: 115px;
    height: 115px;
    background-color: #fff;
    border-radius: 5px;
    border: 1px solid #e7e4e5;
    box-shadow: 0px 1px 3px 0px rgba(100, 139, 152, 0.2);
  }

  #code canvas {
  	display: none!important;
    margin-top: 8px!important;
 }

  #code img {
  	margin-top: 8px!important;
  	margin: 0 auto;
  /*display: none!important;*/
  }

	.share span:first-child {
  	margin-right: 16px;
	}

	.share span:nth-child(2) {
  	margin-right: 2px;
	}
	
	.share img {
		margin-top: -4px;
	}

	.article>.clearfix {
		height: 28px;
		line-height: 28px;
		padding-bottom: 26px;
		border-bottom: 1px solid #eee;
	}

	.disclaimer {
		color: #ccc;
		font-size: 12px;
    line-height: 22px;
    padding: 0 30px;
		padding-bottom: 19px;
		border-bottom: 1px solid #eee;
	}

	.disclaimer a {
		color: #1594e5;
	}

	.meta-bottom {
    padding: 0 30px;
		line-height: 54px;
	}

	.meta-bottom img {
		margin-top: -3px;
	}

	.meta-bottom span {
		float:none;
		width:auto;
		cursor: auto;
	}

	.meta-bottom span:hover {
		color: #798d99;
	}

	/*左侧文章内容end*/
	.sidebar {
		width: 362px;
		background-color: #fafafa;
	}

	.related-wrap {
		padding: 18px 20px;
		border-radius: 5px;
		background-color: #fff;
	}
	
	.related-item {
		margin-bottom: 16px;
	}

	.related-item span {
		width: 5px;
		height: 5px;
		margin-right: 8px;
		margin-top: 13px; 
		background-color: #d2ccce;
	}

	.related-title {
		color: #5e6b73;
		font-size: 16px;
		width: 309px;
		max-height: 56px;
		line-height: 28px;
	}

	.related-title:hover {
		color: #1594e5;
	}

	.meta-bottom em {
		display: inline-block;
		width: 4px;
		height: 4px;
		border-radius: 50%;
		margin: 0 5px;
		margin-bottom: 2px;
		background-color: #bdcdd6;
	}

	.meta-bottom span:first-child {
		float: left;
	}

  /* 文章默认样式 */
  .view {
		padding-top: 40px;
		font-size: 16px;
		color: #5e6b73;
		line-height: 28px;
		min-height: 600px;
		word-break: break-word;
	}

	.view /deep/ img {
		display: block;
		max-width: 100%;
		margin: 30px auto;
		margin-top: 0;
	}

	.view /deep/ p {
		font-size: 16px;
		line-height: 28px;
		margin-bottom: 25px;
	}
	
	.view /deep/ h1,h2,h3,h4,h5,h6 {
		color: #31424e;
		font-weight: 700;
		font-size: 16px;
		margin-bottom: 15px; 
	}

	.view /deep/ h1 {
		font-size: 22px;
		margin-bottom: 20px; 
	}

	.view /deep/ h2 {
		font-size: 20px;
		margin-bottom: 20px; 
	}

	.view /deep/ h3 {
		font-size: 18px;
		margin-bottom: 20px; 
	}

	.view /deep/ pre {
		display: block;
    padding: 9.5px;
    margin: 0 0 10px;
    font-size: 13px;
    line-height: 1.42857143;
    word-break: break-all;
    word-wrap: break-word;
    background-color: #EFF2F5;
    border: 1px solid #E4E4E4;
    border-radius: 4px;
    font-size: 13px;
    overflow: auto;
    font-family: Monaco, Menlo, Consolas, "Courier New", monospace;
	}

	.view /deep/ blockquote {
		font-size: 14px;
    padding: 10px 20px;
    margin: 0 0 20px;
    font-size: 17.5px;
    border-left: 5px solid #eeeeee;
    background-color: #f7f7f7;
	}

	.view /deep/ code {
		padding: 2px 4px;
    font-size: 90%;
    color: #c7254e;
    background-color: #f9f2f4;
    border-radius: 4px;
    font-family: Monaco, Menlo, Consolas, "Courier New", monospace;
	}
	
	.view /deep/ pre code {
    padding: 0;
    font-size: inherit;
    color: inherit;
    white-space: pre-wrap;
    background-color: transparent;
    border-radius: 0;
	}

	.view /deep/ a {
    color: #069aef;
    text-decoration: none;
	}
	
	.view /deep/ table.noBorderTable td,
	.view /deep/ table.noBorderTable th,
	.view /deep/ table.noBorderTable caption{border:1px dashed #ddd !important}
	.view /deep/ table.sortEnabled tr.firstRow th,
	.view /deep/ table.sortEnabled tr.firstRow td{padding-right:20px; background-repeat: no-repeat;background-position: center right;}
	.view /deep/ table.sortEnabled tr.firstRow th:hover,
	.view /deep/ table.sortEnabled tr.firstRow td:hover{background-color: #EEE;}
	.view /deep/ table{margin-bottom:10px;border-collapse:collapse;display:table;}
	.view /deep/ td,
	.view /deep/ th{ background:white; padding: 5px 10px;border: 1px solid #DDD;}
	.view /deep/ caption{border:1px dashed #DDD;border-bottom:0;padding:3px;text-align:center;}
	.view /deep/ th{border-top:1px solid #BBB;background:#F7F7F7;}
	.view /deep/ table tr.firstRow th{border-top:2px solid #BBB;background:#F7F7F7;}
	.view /deep/ tr.ue-table-interlace-color-single td{ background: #fcfcfc; }
	.view /deep/ tr.ue-table-interlace-color-double td{ background: #f7faff; }
	.view /deep/ td p{margin:0;padding:0;}
	.view /deep/ table.noBorderTable td,
	.view /deep/ table.noBorderTable th,
	.view /deep/ table.noBorderTable caption{border:1px dashed #ddd !important}
	.view /deep/ table.sortEnabled tr.firstRow th,
	.view /deep/ table.sortEnabled tr.firstRow td{padding-right:20px; background-repeat: no-repeat;background-position: center right;}
	.view /deep/ table.sortEnabled tr.firstRow th:hover,
	.view /deep/ table.sortEnabled tr.firstRow td:hover{background-color: #EEE;}.view /deep/ table{margin-bottom:10px;border-collapse:collapse;display:table;}
	.view /deep/ td,.view /deep/ th{ background:white; padding: 5px 10px;border: 1px solid #DDD;}
	.view /deep/ caption{border:1px dashed #DDD;border-bottom:0;padding:3px;text-align:center;}
	.view /deep/ th{border-top:1px solid #BBB;background:#F7F7F7;}
	.view /deep/ table tr.firstRow th{border-top:2px solid #BBB;background:#F7F7F7;}
	.view /deep/ tr.ue-table-interlace-color-single td{ background: #fcfcfc; }
	.view /deep/ tr.ue-table-interlace-color-double td{ background: #f7faff; }
	.view /deep/ td p{margin:0;padding:0;}
	.edui-chart-container { height:500px}
	.edui-chart-container { height:500px}
	.view /deep/ ol,
	.view /deep/ ul{margin:0;padding:0;}
	.view /deep/ li{clear:both;}.view /deep/ .list-paddingleft-1{padding-left:0}
	.view /deep/ .list-paddingleft-2{padding-left:20px}
	.view /deep/ .list-paddingleft-3{padding-left:40px}
	.view /deep/ ol,
	.view /deep/ ul{margin:0;padding:0;}
	.view /deep/ li{clear:both;}.view /deep/ .list-paddingleft-1{padding-left:0}
	.view /deep/ .list-paddingleft-2{padding-left:20px}
  .view /deep/ .list-paddingleft-3{padding-left:40px}
  
	/*文章指定默认样式*/
	.article-content {
    padding: 0 30px;
		padding-top: 40px;
		font-size: 16px;
		color: #5e6b73;
		line-height: 28px;
		min-height: 600px;
		word-break: break-word;
	}

	.article-content /deep/ img {
		display: block;
		max-width: 100%;
		margin: 30px auto;
		margin-top: 0;
	}

	.article-content /deep/ p {
		font-size: 16px;
		line-height: 28px;
		margin-bottom: 25px;
	}
	
	.article-content /deep/ h1,h2,h3,h4,h5,h6 {
		color: #31424e;
		font-weight: 700;
		font-size: 16px;
		margin-bottom: 15px; 
	}

	.article-content /deep/ h1 {
		font-size: 22px;
		margin-bottom: 20px; 
	}

	.article-content /deep/ h2 {
		font-size: 20px;
		margin-bottom: 20px; 
	}

	.article-content /deep/ h3 {
		font-size: 18px;
		margin-bottom: 20px; 
	}

	.article-content /deep/ pre {
		display: block;
    padding: 9.5px;
    margin: 0 0 10px;
    font-size: 13px;
    line-height: 1.42857143;
    word-break: break-all;
    word-wrap: break-word;
    background-color: #EFF2F5;
    border: 1px solid #E4E4E4;
    border-radius: 4px;
    font-size: 13px;
    overflow: auto;
    font-family: Monaco, Menlo, Consolas, "Courier New", monospace;
	}

	.article-content /deep/ blockquote {
		font-size: 14px;
    padding: 10px 20px;
    margin: 0 0 20px;
    font-size: 17.5px;
    border-left: 5px solid #eeeeee;
    background-color: #f7f7f7;
	}

	.article-content /deep/ code {
		padding: 2px 4px;
    font-size: 90%;
    color: #c7254e;
    background-color: #f9f2f4;
    border-radius: 4px;
    font-family: Monaco, Menlo, Consolas, "Courier New", monospace;
	}
	
	.article-content /deep/ pre code {
    padding: 0;
    font-size: inherit;
    color: inherit;
    white-space: pre-wrap;
    background-color: transparent;
    border-radius: 0;
	}

	.article-content /deep/ a {
    color: #069aef;
    text-decoration: none;
  }
  
  #security-incident /deep/ .el-breadcrumb {
    background-color: #f5f9fc;
    height: 52px;
    line-height: 52px;
  }
</style>