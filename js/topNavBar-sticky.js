
!function(){
	var view = document.querySelector('#topNavBar')
	var controller = {
		view: null,
		init: function(){
			// this.view = view ----1
			this.bindEvent.call(this)
		},
		bindEvent: function(){
			// var view = this.view ----2
			console.log(view)
			window.addEventListener('scroll',function(){
			    //顶部导航栏的 附着 效果
			    if(window.scrollY > 0){
			        topNavBar.classList.add('sticky')
			    }else if(window.scrollY == 0){
			        topNavBar.classList.remove('sticky')
			    }
			})
		}
	}
	controller.init.call(controller,view)

}.call()