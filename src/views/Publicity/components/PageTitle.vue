<template>
	<header>
		<h3 class="title">
			{{ title }}
		</h3>
	</header>
</template>
<script>
export default {
	props: {
		title: {
			type: String,
			default: "",
		},
	},
};
</script>
<style lang="scss" scoped>
@import "~@/app.scss";
.title {
	color: #fff;
	text-transform: uppercase;
	position: relative;
	line-height: 49px;
	font-size: 36px;
	margin: 0 auto;
	max-width: 1200px;
	margin-bottom: 90px;
	&::after {
		content: "";
		position: absolute;
		top: 100%;
		left: 0;
		margin-top: 8px;
		background: linear-gradient(to right, #0070c9, #56b4ff);
		height: 4px;
		width: 60px;
	}
}
@media (max-width: 768px) {
	header {
		padding-top: p2r(30);
		padding-left: p2r(15);
	}
	.title {
		max-width: 100%;
		font-size: p2r(16);
		line-height: p2r(22);
		margin-bottom: p2r(50);
		&::after {
			width: p2r(24);
			margin-top: p2r(8);
		}
	}
}
</style>
