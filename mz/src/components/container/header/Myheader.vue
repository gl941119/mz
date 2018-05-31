<template>
	<div>
		<tabbar :flag="flag" :toggle="toggle"/>
		<nav1 :flag="flag" :toggle="toggle"/>
	</div>
</template>
<script>
	import tabbar from '@/components/container/header/Tabbar'
	import nav1 from '@/components/container/header/nav'
	export default{
		data(){
			return{
				flag:false
			}
		},
		components:{
			tabbar,nav1
		},
		methods:{
			toggle(){
				this.flag=!this.flag;
			}
		}
	}
</script>
<style></style>