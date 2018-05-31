import Vue from "vue"


Vue.directive("gd",(el,binding)=>{   

	window.addEventListener("scroll",()=>{
		
		if(document.documentElement.scrollTop>100){
			binding.value.value = true;
		}else{
			binding.value.value = false;
		}
	})
})




Vue.directive("gotop",(el,binding)=>{
	el.onclick=function(){
		document.body.scrollTop=0
	}
})