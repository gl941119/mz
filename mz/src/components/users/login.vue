<template>
	<form @submit.prevent="login">
		<input type="text" v-model="usersname"/>
		<input type="password" v-model="password"/>
		<input type="submit" value="login"/>
	</form>
</template>
<script>
	export default{
		data(){
			return{
				usersname:'',
				password:''
			}
		}
	}
	
</script>
<style></style>