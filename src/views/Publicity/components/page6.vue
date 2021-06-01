<template>
	<div class="publicity-page-6">
		<page-title title="Recent Communication and cooperation" />
		<div class="card-list">
			<div
				v-once
				:class="[
					'card',
					{
						even: index % 2,
					},
				]"
				v-for="(item, index) in data"
				:key="index"
			>
				<h3 class="card-title">{{ item.title }}</h3>
				<p class="card-content">{{ item.content }}</p>
			</div>
		</div>
	</div>
</template>

<script>
import PageTitle from "./PageTitle.vue";
export default {
	components: { PageTitle },
	name: "PublicityPage6",
	data() {
		return {
			data: [
				{
					title: "2020.06",
					content:
						"2020.6 The security audit agency Matrix entered the DVP platform to provide vendors on the platform with smart contract audit services.",
				},
				{
					title: "2020.07",
					content:
						"2020.7 DVP reached a strategic partnership with Aurora to jointly protect the security of user information and assets while strengthening the mechanism of vulnerability warning and emergency response.",
				},
				{
					title: "2020.08",
					content:
						"2020.8 DVP reached a strategic partnership with STPNetwork to jointly protect the security of user information and assets while strengthening the mechanism of vulnerability warning and emergency response.",
				},
			],
		};
	},
};
</script>
<style lang="scss" scoped>
@import "~@/app.scss";
.publicity-page-6 {
	max-width: 1200px;
	margin: 0 auto;
	position: relative;
	.card-list {
		width: 100%;
		.card {
			width: 1100px;
			box-sizing: border-box;
			padding: 60px 40px;
			color: #fff;
			text-transform: uppercase;
			background-image: url("../images/p6.png");
			background-size: cover;
			&:nth-child(even) {
				background: #171b25;
				margin-left: 100px;
				margin-top: -40px;
				margin-bottom: -40px;
				position: relative;
			}
		}
		.card-title {
			font-size: 36px;
			line-height: 49px;
			margin-bottom: 30px;
		}
		.card-content {
			font-size: 14px;
			line-height: 19px;
		}
	}
}
@media (max-width: 768px) {
	.publicity-page-6 {
		max-width: 100%;
		.card-list {
			width: 100%;
			.card {
				width: 100%;
				padding: p2r(15);
				&:nth-child(even) {
					margin-left: 0;
					margin-top: 0;
					margin-bottom: 0;
				}
			}
			.card-title {
				font-size: p2r(16);
				line-height: p2r(22);
				margin-bottom: p2r(10);
			}
			.card-content {
				font-size: p2r(14);
				line-height: p2r(18);
			}
		}
	}
}
</style>
