<template>
	<div v-gd="show" class="i-GoTop">
		<button v-if="show.value" class="btn" v-gotop>到顶部</button>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				show:{
					value:false
				}
			}
		}
	}
</script>
<style lang="scss">
	.btn{
		width: 50px;
		height: 50px;
		position: fixed;
		right: 50/25+rem;
		bottom:50/25+rem;
		z-index: 500 ;

	}
</style>