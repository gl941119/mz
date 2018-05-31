<template>
	<div>
		<ul>
		65465464
			<li v-for="item in films">
				<img :src="item.cover.origin">
				<p>{{item.name}}</p>
			</li>
		</ul>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				films:[]
			}
		},
		created(){
			this.$http.get("http://localhost:8080/mz/v4/api/film/now-playing",{
				params:{
				__t:new Date().getTime(),
				page:1,
				count:5
			}}).then((res)=>{
				this.films = res.data.data.films;
				// console.log(res.data.data.films)
			})
		}
	}
</script>
<style></style>