<template>
  <div id="security-event-lib-search">
    <div class="homebanner wow fadeInDown animated hidden-xs animated">
      <div class="cen_1">
        <div class="top-search">
          <el-input @keyup.native.enter="searchKeyWord" placeholder="输入关键字" v-model="keyword">
            <template slot="append">
              <span @click="searchKeyWord">搜索</span>
            </template>
          </el-input>
        </div>
      </div>
    </div>
    <div class="bottom-main clearfix">
      <div class="fr time-line-wrap">
        <!-- 统计分析 -->
        <div class="right-chart" style="margin-top: 0;">
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
      <div class="fl">
        <div class="clearfix sec-event" v-loading="loading">
          <div class="fl sec-title main-title" style="padding-left: 20px;">
            <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item :to="{ path: '/securityEventLib' }">安全事件</el-breadcrumb-item>
              <el-breadcrumb-item>搜索结果</el-breadcrumb-item>
            </el-breadcrumb>
          </div>
          <div class="fr" v-if="false">
            <input type="text" placeholder="请输入关键字" class="search-inp">
            <img src="/static/image/search_click.png" class="search-img-focus">
            <img src="/static/image/search_normal.png" class="search-img-normal" style="right: 8px;">
          </div>
          <div v-if="false" class="choose-list-wrap fr hand">
            <div class="choose-list">
              <span>最新</span><img src="/static/image/arrow-down.png">
            </div>
          </div>
          <ul v-if="false" class="choose-ul">
            <li class="zoomli" data-value="occur_time">最新</li>
            <li class="zoomli" data-value="clickNum">最热</li>
          </ul>
        </div>
        <div class="events-wrap" :key="index" v-for="(item, index) in listData">
          <div class="events-item-wrap">
            <div class="events-item clearfix">
              <div class="fl cover">
                <img onerror="javascript:this.src=`/static/image/test.png`;this.onerror=null" :src="item.oneimg | cover" :title="item.title">
              </div>
              <div class="fl sec-content">
                <a @click="toDetail(item.id)">
                  <div class="event-title hand text-ellipsis-two" v-html="brightenKeyword(item.title, highLightWord)"></div>
                </a>
                <div class="meta meta-top">
                  <span title="发布者" v-if="item.remark"><img src="/static/image/icon_wode.png"><span v-html="brightenKeyword('白帽汇安全研究院', highLightWord)"></span><em></em><span v-html="brightenKeyword('转载', highLightWord)"></span><em></em>{{item.writetime}}</span>
                  <span title="发布者" v-if="!item.remark"><img src="/static/image/icon_wode.png"><span v-html="brightenKeyword('白帽汇安全研究院', highLightWord)"></span><em></em><span v-html="brightenKeyword('原创', highLightWord)"></span><em></em>{{item.writetime}}</span>
                  <span title="浏览量"><img src="/static/image/icon_liulan.png">{{item.clickNum}}</span>
                </div>
                <div class="content-brief text-ellipsis-two text-pre-wrap" v-html="brightenKeyword(item.content, highLightWord)"></div>
                <div class="clearfix meta meta-bottom" v-if="item.news_tag != '行业安全资讯'">
                  <span title="攻击类型" class="search hov" @click="attackType(item.attack_type)"><a><img src="/static/image/wakuangkuilei.png"><span v-html="brightenKeyword(item.attack_type, highLightWord)"></span></a></span>
                  <span class="search hov" title="攻击对象" @click="level(item.oneCate, item.twoCate)"><a><img src="/static/image/putongyongfu.png"><span v-html="brightenKeyword(item.oneCate+'-'+item.twoCate, highLightWord)"></span></a></span>
                  <span title="受损资产" style="cursor: default;"><img src="/static/image/weizhi.png"><span v-html="brightenKeyword(item.affect_money, highLightWord)"></span></span>
                  <span title="发生时间" class="search hov" @click="time(item.occur_time)"><a><img src="/static/image/riqi.png"><span v-html="brightenKeyword(item.occur_time, highLightWord)"></span></a></span>
                </div>
              </div>
              <!-- <div class="tag-sec" v-if="item.news_tag != '行业安全资讯'">安全事件</div>
              <div class="tag-job" v-else>行业安全资讯</div> -->
            </div>
          </div>
        </div>	
        <div class="load-more" @click="loadMore" v-show="isShowMore"><a id="addnum">点击查看更多</a></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "securityEventLibSearch",
    components: {
      
    },
    data() {
        return {
          loading: true,
          lang: 'zh',
          langshow: true,
          isShowOne: true,
          isShowTwo: true,
          isShowThree: true,
          isShowFour: true,
          affectMoney: 0,
          affectNum: 0,
          year: 'all',
          keyword: '',
          page: 1,
          name: '',
          value: '',
          order: '',
          search: 1,
          tag: 1, 
          listData: [],
          isShowMore: true,
          highLightWord: ''
        }
    },
    filters: { 
      cover(value) { 
        var reg = /^\/ueditor\/php\/upload\/image\//;
        if (reg.test(value)) {
          return value.replace(/\/ueditor\/php\/upload\/image/g, 'https://bcsec.org/ueditor/php/upload/image');
        } else {
          return value;
        }
　　　}
　　}, 
    methods: {
      // 高亮
      brightenKeyword(val, keyword) { 
        if (val.toLowerCase().indexOf(keyword.toLowerCase()) !== -1 && keyword !== '') { 
          var allVal = val.match(new RegExp(keyword, 'ig'));
          for (var j = 0; j < allVal.length; j++) {
            val = val.replace(allVal[j], '[*' + j + '*]');
          }
          for (var i = 0; i < allVal.length; i++) {
            val = val.replace('[*' + i + '*]', '<em class="bright-em" style="color: #2196F3;">' + allVal[i] + '</em>');
          }
          return val;
        } else {
          return val
        }
      },
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
      indexSearch(type) {
        this.loading = true;
        this.$ajax.indexSearch({
          page: this.page,
          keywork: this.keyword.trim(),
          name: this.name,
          value: this.value,
          order: this.order,
          search: this.search,
          tag: this.tag
        })
        .then(res =>{
          if (res) {
            if (type == 0) {
              // 追加
              this.listData = this.listData.concat(res);
            } else if (type == 1) {
              // 重置
              this.listData = res;
            }
            if (res.length < 12) {
              this.isShowMore = false;
            } else {
              this.isShowMore = true;
            }
            this.loading = false;
          }
        })
      },
      loadMore() {
        this.page = this.page + 1;
        this.indexSearch(0);
      },
      searchKeyWord() {
        if (this.keyword) {
          let tempKeyword = this.keyword;
          this.keyword = this.$route.query.keyword?this.$route.query.keyword:'';
          this.$router.push({
            name: 'securityEventLibSearch',
            path: '/securityEventLibSearch',
            query: {
              keyword: tempKeyword
            }
          });
          this.getKeyword();
        } else {
          alert('请输入搜索内容');
        }
      },
      attackType(val) {
        this.$router.push({
          name: 'securityEventLibSearch',
          path: '/securityEventLibSearch',
          query: {
            attackType: val
          }
        });
        this.getKeyword();
      },
      level(val1, val2) {
        this.$router.push({
          name: 'securityEventLibSearch',
          path: '/securityEventLibSearch',
          query: {
            level: val1 + '-' + val2
          }
        });
        this.getKeyword();
      },
      time(val) {
        this.$router.push({
          name: 'securityEventLibSearch',
          path: '/securityEventLibSearch',
          query: {
            time: val
          }
        });
        this.getKeyword();
      },
      toDetail(id) {
        this.$router.push({
          name: 'securityIncident',
          path: '/securityIncident',
          query: {
            id: id
          }
        });
      },
      toAnalysis() {
        this.$router.push({
          name: 'statisticalAnalysis',
          path: '/statisticalAnalysis'
        });
      },
      toOffical(url) {
        window.open(url, '_blank');
      },
      getKeyword() {
        this.keyword = '';
        this.page = 1;
        this.name = '';
        this.value = '';
        if (this.$route.query.keyword) {
          this.keyword = this.$route.query.keyword;
          this.highLightWord = this.keyword;
        }
        if (this.$route.query.attackType) {
          this.name = 'attack_type';
          this.value = this.$route.query.attackType;
          this.highLightWord = this.value;
        }
        if (this.$route.query.level) {
          this.name = 'ceng';
          this.value = this.$route.query.level;
          this.highLightWord = this.value;
        }
        if (this.$route.query.time) {
          this.name = 'occur_time';
          this.value = this.$route.query.time;
          this.highLightWord = this.value;
        }
        this.indexSearch(1);
      }
    },
    mounted() {
      this.getKeyword();
      this.initOneLine();
      this.initTwoLine();
    }
  }
   
</script>

<style scoped>
  #security-event-lib-search {
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
    margin-bottom: 80px;
    background:rgba(255,255,255,1);
    box-shadow: 0px 3px 13px 0px rgba(33,152,242,0.2);
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

  .search-inp {
    width: 141px;
    height: 32px;
    line-height: 32px;
    font-size: 12px;
    color: #31424e;
    padding-left: 19px;
    padding-right: 40px;
    border-radius: 20px;
    background-color: #e6e9eb;
    transition: width 0.3s ease-in-out;
    -o-transition: width 0.3s ease-in-out;
    -moz-transition: width 0.3s ease-in-out;
    -webkit-transition: width 0.3s ease-in-out;
  }

  .search-img-focus {
    position: absolute;
    height: 32px;
    top: 15px;
    right: -32px;
    cursor: pointer;
    transition: right 0.3s ease-in-out;
    -o-transition: right 0.3s ease-in-out;
    -moz-transition: right 0.3s ease-in-out;
    -webkit-transition: right 0.3s ease-in-out;
  }

  .search-img-normal {
    position: absolute;
    top: 23px;
    right: 8px;
    cursor: pointer;
  }

  .choose-list {
    width: 98px;
    height: 31px;
    line-height: 31px;
    font-size: 12px;
    color: #283640;
    text-indent: 23px;
    margin-top: 13.5px;
    margin-right: 15px;
    border-radius: 20px;
    border: 1px solid #e5eaeb;
    background-color: #e5eaeb;
  }

  .white-bg {
    background-color: #fff;
  }

  .choose-list img {
    margin-top: -3px;
    margin-left: 15px;
  }

  .choose-ul li {
    width: 84px;
    height: 30px;
    font-size: 12px;
    margin: 0 auto;
    line-height: 30px;
    cursor: pointer;
    text-indent: 17px;
  }

  .choose-ul {
    display: none;
    position: absolute;
    top: 50px;
    left: 486px;
    width: 98px;
    height: 60px;
    padding: 7px 0;
    border-radius: 3px;
    z-index: 9999;
    background-color: #fff;
  }

  .events-item-wrap {
    position: relative;
    left: -25px;
    width: 894px;
    padding: 25px;
    padding-bottom: 0;
    margin-left: 20px;
    transition: all 0.2s ease-in;
    -webkit-transition: all 0.2s ease-in;
    -o-transition: all 0.2s ease-in;
    -moz-transition: all 0.2s ease-in;
  }

  .events-item {
    position: relative;
    width: 894px;
    padding-bottom: 30px;
    border-radius: 2px;
    border-bottom: 1px solid #eee;
  }

  .events-item .cover {
    width: 242px;
    height: 162px;
    margin-right: 20px;
    overflow: hidden;
  }

  .cover img {
    min-width: 242px;
    height: 162px;
    max-width: fit-content;
    transition: 0.8s;
    -moz-transition: 0.8s;
    -webkit-transition: 0.8s;
    -o-transition: 0.8s;
  }

  .events-item .sec-content {
    position: relative;
    width: 526px;
    height: 162px;
  }

  .event-title {
    font-size: 16px;
    color: #283640;
    font-weight: bold;
    line-height: 22px;
    /* height: 44px; */
  }

  .text-ellipsis-two {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    white-space: normal;
  }

  .hand {
    cursor: pointer;
  }

  .meta {
    color: rgb(94,107,115);
  }

  .meta img {
    margin-right: 5px;
    margin-top: -3.5px;
  }

  .meta>span {
    margin-right: 2%;
  }

  .meta-top {
    margin: 14px 0;
    font-size: 12px;
    color: #8E9EAE;
  }

  .meta-top>span {
    margin-right: 33px;
  }

  .events-item em {
    display: inline-block;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    margin: 0 5px;
    margin-bottom: 3px;
    background-color: #bdcdd6;
  }

  .content-brief {
    max-height: 48px;
    color: #4C5B6A;
    line-height: 24px;
  }

  .meta-bottom {
    position: absolute;
    left: 0;
    bottom: -3px;
    width: 100%;
    height: 16px;
    font-size: 12px;
    line-height: 16px;
  }

  .meta-bottom>span {
    float: left;
    width: 23%;
    cursor: pointer;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #798d99;
  }

  .meta-bottom a {
    font-size: 12px;
    color: #8E9EAE;
  }

  .meta-bottom>span:last-child {
    float: right;
    margin-right: 0;
  }

  .load-more {
    text-align: center;
    margin: 40px 0;
  }
  
  .load-more a {
    display: inline-block;
    width: 201px;
    height: 42px;
    line-height: 42px;
    color: #fff;
    font-size: 16px;
    text-align: center;
    background:rgba(33,150,243,1);
    box-shadow: 0px 6px 21px 0px rgba(33,150,243,0.4);
    border-radius: 21px;
  }

  .tag-sec {
    position: absolute;
    top: 8px;
    left: 0;
    width: 72px;
    height: 26px;
    line-height: 26px;
    font-size: 12px;
    text-indent: 12px;
    color: #fff;
    background-image: url(/static/image/anquanbiaoqian.png);
  }

  .tag-job {
    position: absolute;
    top: 8px;
    left: 0;
    width: 96px;
    height: 26px;
    line-height: 26px;
    font-size: 12px;
    text-indent: 12px;
    color: #fff;
    background-image: url("/static/image/ziuxunbiaoqian.png");
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

  .homebanner {
    width: 100%;
    background-image: url(/static/image/DH_public/taishibbg.png);
    background-color: #20293b;
    background-repeat: no-repeat;
    background-position: 50% !important;
    text-align: center;
    display: inline-block;
    text-align: center;
    height: 406px;
    box-shadow: 0px 3px 13px 0px rgba(33,152,242,0.2);
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

  .block-tags-item {
    margin: 0 20px;
    margin-bottom: 20px;
    padding-bottom: 14px;
    border-bottom: 1px solid rgba(235,238,245,1);
  }

  .block-tags-item p {
    font-size: 14px;
    color: #4C5B6A;
    margin-bottom: 20px;
  }

  .block-tags-item p .iconfont {
    color: #2196F3;
    font-size: 14px;
    margin-right: 8px;
  }

  .block-tags-item .clearfix span {
    float: left;
    color: #2196F3;
    cursor: pointer;
    padding: 0 16px;
    height: 22px;
    line-height: 22px;
    background: #fff;
    margin-right: 3px;
    margin-bottom: 8px;
    border: 1px solid rgba(199, 212, 223, 1);
    border-radius: 12px;
  }

  .block-tags-item .clearfix span:hover {
    background:rgba(33,150,243,1);
    color: #fff;
    border-color: rgba(33,150,243,1);
  }

  .top-search {
    width: 628px;
    margin: 0 auto;
    margin-top: 178px;
  }

  .top-search /deep/ .el-input__inner {
    border-radius: 25px 0px 0px 25px;
    width: 471px;
    height: 50px;
    line-height: 50px;
    font-size: 16px;
    color: #20293B;
    outline: none;
    border-color: transparent;
    padding-left: 30px;
  }

  .top-search /deep/ .el-input__inner:focus {
    border-color: transparent;
  }

  .top-search /deep/ .el-input-group__append {
    font-size: 18px;
    color: #fff;
    padding: 0;
    cursor: pointer;
    background:rgba(33,150,243,1);
    border-radius: 0px 25px 25px 0px;
    border-color: rgba(33,150,243,1);
  }

  .top-search /deep/ .el-input-group__append span {
    padding: 15px 62px;
  }

  .time-line {
    width: 1200px;
    margin: 0 auto;
    margin-top: 50px;
  }

  .time-line-item {
    float: left;
  }

  .mon.none {
    display: none;
  }

  .mon-item {
    width: 36px;
    cursor: pointer;
  }

  .mon-item .top {
    position: relative;
    height: 16px;
    line-height: 16px;
    margin-bottom: 15px;
  }

  .mon-item .top span {
    display: inline-block;
    width: 6px;
    height: 6px;
    margin-top: 1px;
    background:rgba(104,116,142,1);
    border-radius: 50%;
  }

  .mon-item.active .top span {
    width: 16px;
    height: 16px;
    background: rgba(33,150,243,1);
  }

  .mon-item .top span::before {
    display: block;
    content: '';
    position: absolute;
    top: 9px;
    left: 0;
    width: 15px;
    height: 1px;
    background-color: #465061;
  }

  .mon-item .top span::after {
    display: block;
    content: '';
    position: absolute;
    top: 9px;
    right: 0;
    width: 15px;
    height: 1px;
    background-color: #465061;
  }

  .mon-item.active .top span::before {
    width: 10px;
  }

  .mon-item.active .top span::after {
    width: 10px;
  }

  .mon-item>p {
    font-size: 14px;
    color: #68748E;
    line-height: 18px;
  }

  .year {
    position: relative;
    width: 85px;
    cursor: pointer;
  }

  .year>p {
    position: absolute;
    top: -33px;
    left: 0;
    right: 0;
    margin: auto;
    width: 62px;
    height: 24px;
    line-height: 24px;
    background: transparent;
    border-radius: 12px;
    font-size: 16px;
    color: #BDC4D5;
  }

  .year>div::before {
    display: block;
    content: '';
    position: absolute;
    top: 9px;
    left: 0;
    width: 30px;
    height: 1px;
    background-color: #465061;
  }

  .year>div::after {
    display: block;
    content: '';
    position: absolute;
    top: 9px;
    right: 0;
    width: 30px;
    height: 1px;
    background-color: #465061;
  }

  .year>div {
    display: inline-block;
    width: 10px;
    height: 10px;
    margin-top: -2px;
    background:rgba(255,255,255,1);
    border-radius: 50%;
    border: 7px solid rgba(255,255,255,0.1);
  }

  .year.active>div {
    background: rgba(33,150,243,1);
    border: 7px solid rgba(33,150,243,0.5);
  }

  .year.active>p {
    color: #fff;
    background: rgba(33,150,243,1);
  }

  .hov a:hover {
    color: #2196F3;
  }

  #security-event-lib-search /deep/ .el-breadcrumb {
    margin-top: 20px;
  }
  
  #security-event-lib-search /deep/ .el-breadcrumb__item {
    font-size: 20px;
    color: #20293B;
  }

  #security-event-lib-search /deep/ .el-breadcrumb__inner a, 
  #security-event-lib-search /deep/ .el-breadcrumb__inner.is-link {
    font-weight: 500;
  }

  #security-event-lib-search /deep/ .el-breadcrumb__item:last-child .el-breadcrumb__inner,
  #security-event-lib-search /deep/ .el-breadcrumb__separator {
    color: #96a5b4;
  }
  
</style>