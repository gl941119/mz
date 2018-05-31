<template>

	<div class="film">
		<goTop/>
	<ul v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
		<li v-for="(item,index) in films" :key="item.index"><img :src="item.cover.origin"></li>
	</ul>
	</div>
</template>
<script>
	import { Toast } from 'mint-ui';
	import goTop from '@/components/commmon/gotop.vue';

	export default{
		components:{
			goTop
		},
		data(){
			return{
				films:[],
				page:1,
				hasMore:0,
				loading:false
			}
		},
		methods:{
			loadMore(){
				
				this.getData();
			},
			getData(){

				var t =Toast({
				  message: 'Upload Complete',
				  iconClass: 'fa fa-spinner',
				  duration: 2000
				});

				if(!this.hasMore){
					this.$http.get("http://localhost:8080/mz/v4/api/film/now-playing",{
					params:{
						page:this.page,
						count:7
					}
					}).then((res)=>{
						this.films = this.films.concat(res.data.data.films)
						this.hasMore = Boolean(res.data.data.page.total == res.data.data.page.current)
						console.log("this.hasMore",this.hasMore)
						this.page += this.hasMore ? 0:1
						this.loading = false
						t.close()
					})
				}else{
						Toast({
						  message: '没有更多记录',
						
						  duration: 2000
						});

				}
				
				


			}
		}
	}
</script>
<style>
	.film{
		
		margin-top: 2rem;
	}
</style>