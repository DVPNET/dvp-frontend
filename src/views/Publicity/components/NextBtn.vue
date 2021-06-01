<template>
	<div class="next-button" v-on="$listeners">
		<div class="arrow big"></div>
		<div class="arrow"></div>
	</div>
</template>
<script>
export default {
	name: "next-button",
};
</script>
<style lang="scss" scoped>
.next-button {
	width: 24px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	position: fixed;
	bottom: 0;
	left: 50%;
	transform: translateX(-50%);
	z-index: 10;
	.arrow {
		border: 6px solid transparent;
		border-top-color: rgba(#d8d8d8, 0.3);
		&.big {
			border-width: 12px;
			border-top-color: #d8d8d8;
		}
	}
}
</style>