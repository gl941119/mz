<template>
	<div class="tabbar">
		<div>
			<p class="left"><i class="fa fa-bars bar" @click="toggle"></i><h3>卖座电影</h3></p>
		</div>
	</div>
</template>
<script>
	export default{
		props:["flag","toggle"]
	}
</script>
<style lang='scss'>
@import "@/style/reset.scss";
@import "@/style/common.scss";
.tabbar{
	position: fixed;
	top: 0;
	width: 100%;
	height: 50/$sc + rem;
	background: #282828;
	.left{
		float: left;
	}
	.bar{
		color: white !important;
		display: inline-block;
		width: 48/$sc+rem;
		line-height: 50/$sc+rem;
		height: 50/$sc+rem;
		text-align: center;
	}
}
	
</style>