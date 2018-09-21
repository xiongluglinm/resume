// 点击顶部导航目录，并平滑的滑动到相应的区域
let aTags = document.querySelectorAll('#topNavBar nav>ul>li>a')
// console.log(aTags)
// Setup the animation loop.
function animate(time) {
    requestAnimationFrame(animate);
    TWEEN.update(time);
}
requestAnimationFrame(animate);
for(let i = 0; i < aTags.length; i++){
    aTags[i].onclick = function(yy){
        yy.preventDefault()
        let a = yy.currentTarget
        let href = a.getAttribute('href')
        let element = document.querySelector(href)
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
    }
}