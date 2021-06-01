<template>
	<div class="footer">
		<div class="footer_con">
			<div class="footer-top clearfix">
				<div class="fl">
					<table class="footer_table">
						<thead>
							<tr>
								<th>{{ $t("dvp_footer.about") }}</th>
								<th>{{ $t("message.Service") }}</th>
								<th>{{ $t("message.Legal") }}</th>
								<th>{{ $t("dvp_footer.contactUs") }}</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>
									<router-link to="/about">{{
										$t("dvp_head.aboutUs")
									}}</router-link>
								</td>
								<td>
									<router-link to="/rule">{{
										$t("dvp_head.rule")
									}}</router-link>
								</td>
								<td>
									<router-link to="/agreement">{{
										$t("dvp_footer.agreement")
									}}</router-link>
								</td>
								<td>{{ $t("dvp_footer.email") }}：service@dvpnet.io</td>
							</tr>
							<tr>
								<td>
									<router-link to="/update">{{
										$t("dvp_head.Milestone")
									}}</router-link>
								</td>
								<td>
									<router-link to="/faq">{{ $t("dvp_head.faq") }}</router-link>
								</td>
								<td></td>
								<td>{{ $t("message.WeChat") }}：f1ndfreedom</td>
							</tr>
							<tr>
								<td>
									<router-link to="/Bounty">{{
										$t("dvp_head.bounty")
									}}</router-link>
								</td>
								<td>
									<a
										href="https://mp.weixin.qq.com/s/Zbq_-UO1Isi2MEVamkax9g"
										target="_blank"
										>{{ $t("message.TradingTutorial") }}</a
									>
								</td>
								<td></td>
								<td>
									<a href="https://github.com/dvpnet" target="blank"
										><img src="/static/image/home/git.png" class="te-img"
									/></a>
									<a href="https://twitter.com/dvpnetio" target="blank"
										><img src="/static/image/home/tiw.png" class="twitter-img"
									/></a>
									<a href="https://t.me/dvpnet" target="blank"
										><img src="/static/image/home/telegram.png" class="te-img"
									/></a>
									<a href="https://www.facebook.com/dvpkorea" target="blank"
										><img src="/static/image/home/facebook.png" class="te-img"
									/></a>
									<a href="https://blog.naver.com/dvpnetwork" target="blank"
										><img src="/static/image/home/hanblog.png" class="te-img"
									/></a>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div class="fr slogin">
					<h4 class="ar">
						<img
							src="/static/image/home/home_logo.png"
							class="DVP-logo-footer"
						/>
					</h4>
					<p class="copyright-text">Decentrailzed Vulnerabillty Platform</p>
				</div>
				<div style="clear: both"></div>
			</div>
		</div>
		<div class="ac footerBom">
			<p v-if="langshow == 'zh'">版权所有 © 2018 - DVP社区 INC.</p>
			<p v-if="langshow == 'en'">
				Copyright © 2018 -DVP Zone All Rights Reserved.
			</p>
			<p v-if="langshow == 'ko'">
				Copyright © 2018 -DVP Zone All Rights Reserved.
			</p>
			<p>
				{{
					$t("message.DVPWalletAddress")
				}}：0xd5bAA94e09C4a1C6613A35c485604F507b368517
			</p>
		</div>
	</div>
</template>

<script>
export default {
	name: "wrapFooter",
	data() {
		return {
			lang: "zh",
			langshow: true,
		};
	},
	mounted() {
		this.initData();
	},
	methods: {
		initData() {
			this.lang = localStorage.getItem("locale");
			if (this.lang == "zh") {
				this.langshow = "zh";
			} else if (this.lang == "en" || this.lang == null || this.lang == "") {
				this.langshow = "en";
			} else if (this.lang == "ko") {
				this.langshow = "ko";
			}
		},
		toWhitePaper() {
			let routeUrl = this.$router.resolve({
				path: "/whitePaper",
			});
			window.open(routeUrl.href, "_blank");
		},
	},
};
</script>

<style lang="scss">
@import "~@/app.scss";
.aa {
	background: url(/static/image/wxewm.jpg) no-repeat 80px;
}
.footer_con {
	min-width: 320px;
	max-width: 1170px;
	margin: 0 auto;
	padding: 50px 0;
}
.footer {
	clear: both;
	background: #091023;
}
.footer .copyright-text {
	margin-top: 18px;
	font-size: 14px;
	color: #68748e;
}
.footer,
.footer > div {
	width: 100% !important;
	min-width: 325px !important;
}
.footer .el-popover {
	width: auto !important;
}
.footer .el-popover img {
	width: 100px !important;
	height: 100px !important;
	min-width: 100px !important;
}
.footerBom {
	width: 100%;
	background: #000000;
	padding: 20px 0;
}
.footerBom p {
	text-align: center !important;
	font-family: "microsoft yahei";
	font-size: 12px;
	line-height: 20px;
	color: #525e76;
}
.footer_table {
	table-layout: fixed;
}
.footer_table thead tr th {
	font-weight: normal;
	color: #bdc4d5 !important;
	font-size: 16px;
}
.footer_table > tbody > tr > th,
.footer_table > tfoot > tr > td,
.footer_table > thead > tr > td,
.footer_table > thead > tr > th {
	padding: 0 80px 0 0;
	line-height: 30px;
	color: #bdc4d5;
	vertical-align: middle;
	border-color: #dee3e2;
	text-overflow: ellipsis;
	white-space: nowrap;
	overflow: hidden;
	text-align: left !important;
}
.footer_table td,
.footer_table th {
	text-align: left !important;
	padding: 8px 40px 8px 0;
}
.footer_table td a,
.footer_table th a {
	color: #68748e;
}
.footer_table td,
.footer_table th {
	color: #68748e;
}
.footer tbody img {
	margin-right: 20px;
}
@media (max-width: 768px) {
	.footer_con {
		padding: p2r(15);
		box-sizing: border-box;
	}
	.footer_table > tbody > tr > th,
	.footer_table > tfoot > tr > td,
	.footer_table > thead > tr > td,
	.footer_table > thead > tr > th {
		padding: 0;
		padding-right: p2r(15);
	}
	.footer-top {
		display: flex;
		flex-direction: column;
	}
	.slogin,
	.ar {
		text-align: center;
	}
}
</style>