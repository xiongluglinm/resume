window.addEventListener('scroll',function(){
    //顶部导航栏的 附着 效果
    if(window.scrollY > 0){
        topNavBar.classList.add('sticky')
    }else if(window.scrollY == 0){
        topNavBar.classList.remove('sticky')
    }
})