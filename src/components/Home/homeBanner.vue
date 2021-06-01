<template>
	<div class="index-container-wrap">
		<div class="home-banner embed-responsive-banner embed-responsive-new">
			<div id="renderContainer" class="embed-responsive-item"></div>
			<div class="banner_tu wow fadeInDown animated hidden-xs animated">
				<a v-if="bannercon == 'zh'" href="javascript:void(0)"
					><img src="/static/image/home/banner1028-zh.png?v=7" alt=""
				/></a>
				<a v-if="bannercon == 'en'" href="javascript:void(0)"
					><img src="/static/image/home/banner1028-en.png?v=7" alt=""
				/></a>
				<a v-if="bannercon == 'ko'" href="javascript:void(0)"
					><img src="/static/image/home/banner1028-ko.png?v=7" alt=""
				/></a>
				<div class="home-text" v-if="bannercon == 'zh'">
					<div class="home-textcon">
						<p
							class="al wow fadeInDown animated hidden-xs animated"
							id="banner-title"
						>
							{{ $t("message.slogan") }}
						</p>
						<p class="al wow fadeInDown animated little-title animated">
							{{ $t("message.bannerTitle") }}“<span>{{
								$t("message.bannerTitle2")
							}}</span
							>”{{ $t("message.bannerTitle3") }}
						</p>
						<p class="white-paper-box">
							<a class="white-paper" href="https://dvpnet.io/DVP-WP-EN.pdf" target="_blank">
							White Paper
							</a>
						</p>
						<div class="al button-group">
							<router-link to="/membox/vul"
								><el-button type="primary" class="homeban-btn">{{
									$t("btn.sub_vul")
								}}</el-button></router-link
							>
							<el-button
								class="homeban-btn whitebg whitebg-right homeclimebtn"
								@click="CScompany"
								>{{ $t("btn.claim_vul") }}</el-button
							>
						</div>
					</div>
				</div>
				<div
					class="home-text"
					v-if="bannercon == 'en'"
					style="top: 190px !important"
				>
					<div class="home-textcon" style="width: 530px; float: right">
						<p
							class="al wow fadeInDown animated hidden-xs animated"
							id="banner-title"
							style="
								font-size: 50px;
								line-height: 60px;
								font-family: Arial Bold !important;
							"
						>
							{{ $t("message.slogan") }}
						</p>
						<p
							class="al wow fadeInDown animated little-title animated"
							style="font-size: 26px; font-family: Arial Bold !important"
						>
							DVP Community pioneers <br />the<span
								style="font-size: 26px; font-family: Arial Bold !important"
								>“vulnerability Is Mining”</span
							>model
						</p>
						<p class="white-paper-box">
							<a class="white-paper" href="https://dvpnet.io/DVP-WP-EN.pdf" target="_blank">
							White Paper
							</a>
						</p>
						<div class="al button-group">
							<router-link to="/membox/vul"
								><el-button type="primary" class="homeban-btn">{{
									$t("btn.sub_vul")
								}}</el-button></router-link
							>
							<el-button
								class="homeban-btn whitebg whitebg-right homeclimebtn"
								@click="CScompany"
								>{{ $t("btn.claim_vul") }}</el-button
							>
						</div>
					</div>
				</div>
				<div
					class="home-text"
					v-if="bannercon == 'ko'"
					style="top: 190px !important"
				>
					<div class="home-textcon" style="width: 530px; float: right">
						<p
							class="al wow fadeInDown animated hidden-xs animated"
							id="banner-title"
							style="
								font-size: 50px;
								line-height: 60px;
								font-family: Arial Bold !important;
							"
						>
							{{ $t("message.slogan") }}
						</p>
						<p
							class="al wow fadeInDown animated little-title animated"
							style="font-size: 26px; font-family: Arial Bold !important"
						>
							<br /><span
								style="
									font-size: 26px !important;
									font-family: Arial Bold !important;
								"
								>“결함은 마이닝을 의미한다”</span
							>는 모델을 처음으로 만들었습니다
						</p>
						<p class="white-paper-box">
							<a class="white-paper" href="https://dvpnet.io/DVP-WP-EN.pdf" target="_blank">
							White Paper
							</a>
						</p>
						<div class="al button-group">
							<router-link to="/membox/vul"
								><el-button type="primary" class="homeban-btn">{{
									$t("btn.sub_vul")
								}}</el-button></router-link
							>
							<el-button
								class="homeban-btn whitebg whitebg-right homeclimebtn"
								@click="CScompany"
								>{{ $t("btn.claim_vul") }}</el-button
							>
						</div>
					</div>
				</div>
			</div>
			<div class="banner_advert">
				<div id="text-container" style="position: relative">
					<div
						class="advertIcon cp"
						@mouseenter="Hzcsenter($event)"
						@mouseleave="Hzcsleave($event)"
					>
						<p><i class="icon iconfont icon-xiaolaba1"></i></p>
						<swiper :options="swiperOption" ref="mySwiper" class="banneradv">
							<swiper-slide
								v-for="(val, index) in newsData"
								:key="index"
								class="swiper-slide"
							>
								<p class="advert">
									<a :href="val.url" target="_blank">{{ val.title }}</a>
								</p>
								<br />
							</swiper-slide>
						</swiper>
						<div style="position: absolute; right: 0px">
							<div style="position: relative">
								<i
									class="swiper-button-prev icon iconfont icon-jiantouzuoxiao"
									style="
										position: absolute;
										left: 0;
										right: 0;
										top: 0;
										transform: rotate(-90deg);
										margin-top: -38px;
										width: inherit;
										height: inherit;
									"
								></i>
								<i
									class="swiper-button-next icon iconfont icon-jiantouzuoxiao"
									style="
										position: absolute;
										left: 0;
										right: 0;
										top: 0;
										transform: rotate(-270deg);
										margin-top: -40px;
										width: inherit;
										height: inherit;
									"
								></i>
							</div>
						</div>
					</div>
					<span style="position: absolute; right: 40px; top: 0; z-index: 999"
						><router-link to="/advert">{{
							$t("message.more")
						}}</router-link></span
					>
				</div>
			</div>
		</div>
		<div class="bannerDibox">
			<div class="dvhome-banDi">
				<div>
					<p>
						<b
							><router-link to="/fund">{{ balance }} Ether</router-link></b
						>
						<span>{{ $t("message.tradingVolume") }}</span>
					</p>
				</div>
				<span class="total-border"></span>
				<div>
					<p>
						<b
							><router-link to="/fund"
								>{{ BigData.vulPriceTotal }} Ether</router-link
							></b
						>
						<span>{{ $t("message.reward") }}</span>
					</p>
				</div>
				<span class="total-border"></span>
				<div>
					<p>
						<b
							><router-link to="/rankings">{{
								BigData.userTotal
							}}</router-link></b
						>
						<span>{{ $t("message.whiteHat") }}</span>
					</p>
				</div>
				<span class="total-border"></span>
				<div>
					<p>
						<b
							><router-link to="/lddt">{{ BigData.vulTotal }}</router-link></b
						>
						<span>{{ $t("message.vulNums") }}</span>
					</p>
				</div>
			</div>
		</div>
	</div>
</template>
<!-- banner begin -->

<script>
import AnimatedNumber from "animated-number-vue";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
	name: "homeBanner",
	components: { AnimatedNumber, swiper, swiperSlide },
	data() {
		return {
			BigData: [],
			balance: 0,
			tokenType: 0,
			newsData: [],
			swiperOption: {
				speed: 500,
				autoplay: {
					delay: 3000,
					disableOnInteraction: true,
				},
				navigation: {
					nextEl: ".swiper-button-next",
					prevEl: ".swiper-button-prev",
				},
				direction: "vertical",
				pagination: ".swiper-pagination",
				observeParent: true,
			},
			lang: "zh",
			bannercon: true,
		};
	},
	methods: {
		initData() {
			this.lang = localStorage.getItem("locale");
			if (this.lang == "zh") {
				this.bannercon = "zh";
			} else if (this.lang == "en" || this.lang == null || this.lang == "") {
				this.bannercon = "en";
			} else if (this.lang == "ko") {
				this.bannercon = "ko";
			}
			this.tokenType = window.localStorage.getItem("tokenType");
			var _this = this;
			//banner底部数据
			this.$ajax.ComTotal().then((res) => {
				if (res.errcode === 1) {
					_this.BigData = res.data;
				}
			});
			this.$ajax.ComNews({ type: 2, num: 5, page: 1 }).then((res) => {
				if (res.errcode === 1) {
					_this.newsData = res.data.news.data;
				}
			});

			// 获取balance
			this.$ajax.ComFund().then((res) => {
				if (res.errcode === 1) {
					_this.balance = Number(res.data.info.balance).toFixed(2);
				}
			});
		},
		CScompany() {
			this.$router.push({ path: "/combox/company/companyOne" });
			window.sessionStorage.setItem("userCSrole", 2);
		},
		Hzcsenter(event) {
			this.$refs.mySwiper.swiper.autoplay.stop();
		},
		Hzcsleave(event) {
			this.$refs.mySwiper.swiper.autoplay.start();
		},
	},
	computed: {
		swiper() {
			return this.$refs.mySwiper.swiper;
		},
	},
	//		computed: {
	//          optionSingleHeightTime () {
	//              return {
	//                  singleHeight: 40,
	//                  waitTime: 1000,
	//                  limitMoveNum: 1
	//             }
	//          }
	//     },

	mounted() {
		/*	let oS = document.createElement('script');
				let oH = document.getElementsByTagName('head')[0]
				oS.src = '../../../static/js/bannercanv.js';
				oH.appendChild(oS)
				oS.onload = function(){
					//alert(1)
			}*/
	},
	created: function () {
		this.initData();
	},
};
</script>

<style lang="scss" scoped>
.white-paper-box{
	overflow:hidden;
}
.white-paper{
	float: left;
	color:#fff;
	font-weight:700;
	text-decoration: underline;
	text-align: left;
	font-size:14px;
}
.swiper-container {
	max-height: 40px;
	overflow: hidden;
}
.banneradv .swiper-slide {
	width: 100%;
	height: 40px;
	line-height: 40px;
}
</style>
<style  lang="scss">
#text-container {
	width: 1200px;
	margin: 0 auto;
}
.swiper-button-next,
.swiper-button-prev {
	background-image: inherit !important;
	color: #ffffff;
	font-size: 14px !important;
	border: none;
	outline: none;
	-webkit-tap-highlight-color: #000000;
	-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
.advert a {
	color: #bdc4d5;
	font-size: 14px;
	padding-left: 8px !important;
}
.advert a:hover {
	color: #2196f3;
	font-size: 14px;
	padding-left: 8px !important;
}
.banner_advert {
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
	background: #0a182f;
	padding: 0 40px;
	min-width: 1200px;
	height: 40px;
	line-height: 40px;
	margin: 0 auto;
	overflow: hidden;
}
.banner_advert a {
	min-width: 1024px;
	height: 40px;
	line-height: 40px;
	margin: 0 auto;
}
.banner_advert p {
	float: left;
	color: #bdc4d5;
	padding-left: 0;
	font-size: 14px;
}
.banner_advert span {
	float: right;
	color: #2196f3;
}
.homeban-btn {
	width: 180px;
	height: 50px;
	background: #2196f3 !important;
	border-radius: 30px !important;
	border: 1px solid #2196f3 !important;
}
.homeclimebtn {
	width: 180px;
	height: 50px;
	border-radius: 30px !important;
	border: 1px solid #2196f3 !important;
	background: rgba(0, 0, 0, 0) !important;
}
.homeban-btn span,
.homeban-btn a {
	color: #ffffff;
	font-size: 18px;
}
.homeban-btn:hover {
	background: #66b1ff !important;
}
.banner_tu {
	max-width: 1200px;
	height: auto;
	margin: 0 auto;
	position: relative;
}
.banner_tu img {
	width: auto;
	height: 467px;
	display: inline-block;
	margin: 160px 0 0 -300px;
}

/* home banner begin */
#banner-title {
	font-size: 56px;
	line-height: 60px;
	margin-bottom: 48px;
	font-family: "pingfang-weight";
}
.whitebg-right {
	margin-left: 20px !important;
}
/* home banner end */

/* total start */
.total-border {
	width: 0px;
	height: 78px;
	border: 0.5px solid #e2eaf1;
}
/* total end */
@import "~@/app.scss";

@media screen and (max-width: 768px) {
	.white-paper{
		float:none !important;
		font-size:p2r(14);
	}
	.index-container-wrap {
		padding-top: p2r(64);
		.home-banner {
			height: p2r(525);
		}
		.banner_advert {
			min-width: 100%;
			box-sizing: border-box;
			font-size: p2r(14);
			padding: 0 p2r(15);
		}
		.home-text {
			position: initial;
			top: 0;
			right: 0;
			text-align: center;
			display: flex;
			justify-content: center;
			.home-textcon {
				display: flex;
				flex-direction: column;
				p {
					font-size: p2r(24);
					text-align: center;
					margin-bottom: p2r(20);
					span {
						font-size: inherit;
					}
				}
				.button-group {
					display: flex;
					justify-content: space-between;
					padding: 0 p2r(15);
					.whitebg-right {
						margin-left: 0 !important;
					}
				}
			}
		}
		.homeclimebtn,
		.homeban-btn {
			width: auto;
		}
		#banner-title {
			font-size: p2r(24) !important;
			margin-bottom: p2r(15) !important;
			line-height: 1 !important;
		}

		.dvhome-banDi {
			display: flex;
			flex-wrap: wrap;
			justify-content: flex-start;
			padding: p2r(15);

			.total-border {
				display: none;
			}
			& > div {
				width: 50%;
				height: p2r(110);
				box-sizing: border-box;
				border-bottom: 1px solid transparent;
				border-right: 1px solid transparent;
				&:nth-child(1),
				&:nth-child(3) {
					border-bottom-color: rgba(#000, 0.1);
				}
				&:nth-child(1),
				&:nth-child(5) {
					border-right-color: rgba(#000, 0.1);
				}
			}
		}
		.dvhome-banDi p b {
			font-size: p2r(20);
		}
		.dvhome-banDi p span {
			font-size: p2r(14);
		}
	}
	.banner_tu {
		width: 100%;
		img {
			width: 100%;
			height: auto;
			margin: 0;
		}
	}
}
</style>
