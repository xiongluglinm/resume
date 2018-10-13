// 点击顶部导航目录，并平滑的滑动到相应的区域
!function(){
    let view = document.querySelector('#topNavBar nav')
    // let aTags = view.querySelectorAll('#topNavBar nav>ul>li>a')
    // console.log(aTags)
    // Setup the animation loop.
    var controller = {
        view: null,
        aTags: null,
        init: function(view){
            this.view = view
            this.initAnimate.call(this)
            this.bindEvent.call(this)
        },
        scrollToElement: function(element){
            let top = element.offsetTop
            let targetTop = top - 80
            let currentTop = window.scrollY
            let s = targetTop - currentTop
            let time =Math.abs(500*s/100)
            time = (time > 1000)?1000:time
            // console.log(time)
            var coords = { y: currentTop};
            var tween = new TWEEN.Tween(coords) 
                .to({ y: targetTop }, time) 
                .easing(TWEEN.Easing.Exponential.InOut) 
                .onUpdate(function() { 
                    window.scrollTo(0,coords.y)
                })
                .start();
        },
        bindEvent: function(){
            this.aTags = this.view.querySelectorAll('#topNavBar nav>ul>li>a')
            for(let i = 0; i < this.aTags.length; i++){
                this.aTags[i].onclick = (yy)=>{
                    yy.preventDefault()
                    let a = yy.currentTarget
                    let href = a.getAttribute('href')
                    let element = document.querySelector(href)
                    this.scrollToElement.call(this,element)

                }
            }
        },
        initAnimate: function(){
            function animate(time){
                requestAnimationFrame(animate);
                TWEEN.update(time);
            }
            requestAnimationFrame(animate);
        },
    }
    controller.init.call(controller,view)

}.call()