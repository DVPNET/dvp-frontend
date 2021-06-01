<template>
	<div>
  		<h3 class="company-h3 wow fadeInLeft animated title hidden-xs animated">{{$t('message.EcologicalNode')}}<p class="company-h3-line"></p></h3>
      <div class="clearfix Hzcs-wrap">
        <swiper :options="swiperOption" ref="mySwiper">
          <swiper-slide v-for="(item, index) in logoArr" :key="index" class="swiper-slide index-sw-slide">
          	<a v-for="(sItem, sIndex) in logoData.slice(index*49, (index+1)*49)" class="ecolog" target="_blank" :key="sIndex" v-bind:href="sItem.url" @mouseenter="Hzcsenter($event)" @mouseleave="Hzcsleave($event)">
          		<img v-bind:src="sItem.logo">
          	</a>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div> 
        </swiper>
			</div>
	</div>
</template>

<script>

	import {swiper,swiperSlide} from 'vue-awesome-swiper'
	export default {
		name: 'homeEcological',
		components:{
			swiper,
			swiperSlide
		},
		data () {
			return {				
				logoData: [],
				logoLen: 0,
				logoNum: 0,
				logoArr: [],
				swiperOption: {
			    pagination: {
		        el: '.swiper-pagination',
		        clickable: true,
			    },
					autoplay: {
		        delay: 3000,
		        stopOnLastSlide: false,
		        disableOnInteraction: true,
				  },
				},
			}
		},
		computed: {
			swiper(){
				return this.$refs.mySwiper.swiper;
			}
		},
		methods: {
			initData(){				
				var _this=this
				this.$ajax.ComCompanyNode()
				.then(res => {
					if(res.errcode === 1){
						_this.logoData = res.data.nodeList;
						this.logoLen = res.data.nodeList.length;
						this.logoNum = Math.floor(this.logoLen/49);
						for (var i = 0; i <= this.logoNum; i++) {
							this.logoArr.push(i);
						}
					}
				})
			},
			Hzcsenter(event){
		        $(event.target).addClass("hzcs_active")
		        this.$refs.mySwiper.swiper.autoplay.stop()
		    },
		    Hzcsleave(event){
		        $(event.target).removeClass("hzcs_active")
		        this.$refs.mySwiper.swiper.autoplay.start()
			}
		},
		mounted() {
			this.initData();
		}
	 }
</script>

<style>
	.index-sw-slide {
		display: flex;
		flex-wrap: wrap;
	}

	.ecolog{
		display: block;
		width: 167px;
		height: 72px;
		text-align: center;
	}
	.ecolog img{
		border: 0 !important;
		width: auto;
		height: 100%;
	}
	.Hzcs-wrap{
		margin-top: 20px;
	}
	.Hzcs-wrap .swiper-container {
		padding-bottom: 60px;
	}
   .hzcs_active{
	    -webkit-box-shadow: 0 2px 24px 0 rgba(64,158,225,.1) !important;
	    -moz-box-shadow: 0 2px 24px 0 rgba(64,158,225,.1) !important;
	    box-shadow: 0 2px 24px 0 rgba(64,158,225,.1) !important;
	    box-sizing: border-box;
	}
</style>