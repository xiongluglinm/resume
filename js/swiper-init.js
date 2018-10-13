// swiper初始化
!function(){
    var view = document.querySelector('#mySlides')
    // view.style.border = '1px solid red'
    var controller = {
        view: null,
        mySwiper : null,
        mySwiperOptions: {
            // Optional parameters
            // direction: 'vertical',
            loop: true,
    
            // If we need pagination
            pagination: {
            el: '.swiper-pagination',
            },
    
            // Navigation arrows
            navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            },
    
            // And if we need scrollbar
            scrollbar: {
            el: '.swiper-scrollbar',
            },
        },
        init: function(view){
            this.view = view
            this.initMySwiper.call(this)
        },
        initMySwiper: function(){
            this.mySwiper = new Swiper (view.querySelector('.swiper-container'), this.mySwiperOptions)
        },
    }
    controller.init.call(controller,view)

}.call()