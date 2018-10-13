// 获取顶部导航栏的目录并遍历添加鼠标hover效果
!function(){
	// let liMenus = document.getElementsByClassName('menuTrigger')
	var view = document.getElementsByClassName('menuTrigger')
	var controller = {
		view: null,
		init: function(view){
			this.view = view
			this.bindEvent.call(this)
		},
		bindEvent: function(){
			var view = this.view
			for(let i = 0; i<view.length; i++){
				view[i].onmouseenter = function(x){
					x.currentTarget.classList.add('active')
				}
				view[i].onmouseleave = function(x){
					x.currentTarget.classList.remove('active')
				}
			}
		}
	}
	controller.init.call(controller,view)

}.call()

