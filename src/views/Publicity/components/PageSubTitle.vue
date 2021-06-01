<template>
	<div class="page-sub-title">
		<header :class="{ bottom: $slots.default }">
			<div class="prefix">{{ prefix }}</div>
			<div class="title">
				{{ title }}
			</div>
		</header>
		<main>
			<slot />
		</main>
	</div>
</template>
<script>
export default {
	props: {
		title: {
			type: String,
			default: "",
		},
		prefix: {
			type: String,
			default: "",
		},
	},
};
</script>
<style lang="scss" scoped>
@import "~@/app.scss";
.page-sub-title {
	font-size: 24px;
}
header {
	position: relative;
	padding-top: 50px;
	text-transform: uppercase;
	.prefix {
		position: absolute;
		z-index: 0;
		top: 0;
		left: 0;
		font-size: 60px;
		color: rgba(#fff, 0.3);
		font-weight: 700;
	}
	.title {
		color: #fff;
		position: relative;
		line-height: 33px;
		font-weight: 700;
	}
}
.bottom {
	margin-bottom: 30px;
}
main {
	position: relative;
	font-size: 14px;
}

@media (max-width: 768px) {
	.bottom {
		margin-bottom: p2r(10);
	}
	.page-sub-title {
		font-size: p2r(14);
	}
	header {
		position: relative;
		padding-top: p2r(20);
		text-transform: uppercase;
		.prefix {
			font-size: p2r(24);
		}
		.title {
			line-height: p2r(19);
		}
	}
}
</style>
