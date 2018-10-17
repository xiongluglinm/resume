// 留言功能
!function(){
    var APP_ID = '0UQNs6FDtCSgUGDi7oPSRB3K-gzGzoHsz';
    var APP_KEY = 'w47e83FmyXflXNptAEmtfFE9';

    AV.init({
    appId: APP_ID,
    appKey: APP_KEY
    });
    console.log('顺利运行到此')

    var messageForm = document.querySelector('#messageBoard')
    //监听submit事件时要对form而不是input
    messageForm.addEventListener('submit',function(e){
      e.preventDefault()  //默认会刷新页面
      var content = messageForm.querySelector('input[name=content]').value

      var xxx = AV.Object.extend('message');
      var yy = new xxx();
      yy.save({
        zzz: content
      }).then(function(object) {
        alert('存入成功');
        console.log(object)
      }) 
    })





    //测试代码
    //创建一个名为 glinm 的 表/数据库，并构建一个构造函数
    // var xxx = AV.Object.extend('glinm');
    // //在表中创建一行数据
    // var yy = new xxx();
    // //数据内容是 zzz: 'fuck World!' 并执行保存功能
    // //保存成功 则 alert('LeanCloud Rocks!');
    // yy.save({
    //   zzz: 'fuck World!'
    // }).then(function(object) {
    //   alert('LeanCloud Rocks!');
    // })
}.call()