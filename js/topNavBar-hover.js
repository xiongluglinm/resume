// 获取顶部导航栏的目录并遍历添加鼠标hover效果
!function(){
	let liMenus = document.getElementsByClassName('menuTrigger')
	for(let i = 0; i<liMenus.length; i++){
	    liMenus[i].onmouseenter = function(x){
	        x.currentTarget.classList.add('active')
	    }
	    liMenus[i].onmouseleave = function(x){
	        x.currentTarget.classList.remove('active')
	    }
	}
}.call()

