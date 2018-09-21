
// 网页加载时的动画效果
setTimeout(function () {
    siteWelcome.classList.remove('active');
}, 000)

//给[specialTags]添加初始 offset
function addOffset(){
    let specialTags = document.querySelectorAll('[data-x]')
    for(let i = 0; i < specialTags.length; i++){
        specialTags[i].classList.add('offset')
    }
}
addOffset()

window.addEventListener('scroll',function(xx){

    //页面滚动时 对应的导航 menu 的高亮效果 + 技能进度条 动态 出场
    let specialTags = document.querySelectorAll('[data-x]')
    // console.log(window.scrollY)
    let minIndex = 0
    for(let i = 0; i < specialTags.length; i++){
        if(Math.abs(specialTags[i].offsetTop - window.scrollY) < Math.abs(specialTags[minIndex].offsetTop - window.scrollY)){
            minIndex = i
        }
    }
    // console.log(minIndex)           
    let id = specialTags[minIndex].id
    let a = document.querySelector('a[href="#'+id+'"]')
    // console.log(a)
    let li = a.parentNode
    let liAndBrother = li.parentNode.children
    // console.log(liAndBrother)
    for(let i = 0; i < liAndBrother.length; i++){
        liAndBrother[i].classList.remove('highlight')
    }
    li.classList.add('highlight')
    
    //页面滚动到某一区域时，该区域内容的动态显现效果
    specialTags[minIndex].classList.remove('offset')
})

