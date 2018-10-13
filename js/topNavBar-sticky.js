// 顶部导航栏的附着效果
!function(){
	var view = document.querySelector('#topNavBar')
	var controller = {
		view: null,
		init: function(view){
			this.view = view //----1
			this.bindEvent.call(this)
		},
		bindEvent: function(){
			var view = this.view //----2
			console.log(view)
			window.addEventListener('scroll',function(){
			    //顶部导航栏的 附着 效果
			    if(window.scrollY > 0){
					this.active.call(this)//此处的this为bind(this)中的this，如不+bind，则此处this为才、scroll到的元素；
					// console.log(this)
			    }else if(window.scrollY == 0){
			        this.deactive.call(this)
			    }
			}.bind(this))//此处也可使用箭头函数替换.bind(this)
		},
		active: function(){
			this.view.classList.add('sticky')			
		},
		deactive: function(){
			this.view.classList.remove('sticky')			
		},
	}
	controller.init.call(controller,view)

}.call()