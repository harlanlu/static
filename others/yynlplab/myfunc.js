
// 去除logo图片
var logoimg=document.getElementById('logoimg');
logoimg.remove();
setNav();
console.log("success...");

function setNav(){
    var navDiv=document.getElementById("mymenu");
    navDiv.innerHTML='<div class="container-xl">'
    +'<span class="navbar-brand" >'
    +'<img src="https://getbootstrap.net/assets/brand/bootstrap-solid.svg" id="logoimg" width="30" height="30" class="d-inline-block align-top" alt="logoImg">'
    +'情感智能与智慧教育实验室</span>'
    +'<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample07XL" aria-controls="navbarsExample07XL" aria-expanded="false" aria-label="Toggle navigation">'
    +'<span class="navbar-toggler-icon"></span>'
    +'</button>'
    +'<div class="collapse navbar-collapse" id="navbarsExample07XL">'
    +'<ul class="navbar-nav mr-auto">'
    +'<li class="nav-item"><a class="nav-link" href="https://jsj.xjnu.edu.cn/nlp/main.psp">首页</a></li>'
    +'<li class="nav-item"><a class="nav-link" href="https://jsj.xjnu.edu.cn/2021/0818/c12641a115890/page.psp">新闻动态</a></li>'
    +'<li class="nav-item"><a class="nav-link" href="https://jsj.xjnu.edu.cn/2021/0818/c12641a115892/page.psp">科研团队</a></li>'
    +'<li class="nav-item"><a class="nav-link" href="https://jsj.xjnu.edu.cn/2021/0818/c12641a115891/page.psp">科研成果</a></li>'
    +'<li class="nav-item"><a class="nav-link" href="https://jsj.xjnu.edu.cn/2021/0818/c12641a115893/page.psp">学术报告</a></li>'
    +'<li class="nav-item"><a class="nav-link" href="https://jsj.xjnu.edu.cn/2021/0818/c12641a115894/page.psp">缤纷相册</a></li>'
    +'<li class="nav-item"><a class="nav-link" href="https://jsj.xjnu.edu.cn/2021/0818/c12641a115895/page.psp">下载中心</a></li>'
    +'</ul> </div> </div>';
}

function onTeachers() {
    // window.location.href = "#teachers";
    $('html, body').animate({
        scrollTop: $('#teachers').offset().top - 60
    }, 500); //60为锚点到距顶部的距离，500为执行时间
    return false;
}

function onNotgraduated() {
    // window.location.href = "#notgraduated";
    $('html, body').animate({
        scrollTop: $('#notgraduated').offset().top - 60
    }, 500); //60为锚点到距顶部的距离，500为执行时间
}

function onGraduated() {
    // window.location.href = "#graduated";
    $('html, body').animate({
        scrollTop: $('#graduated').offset().top - 60
    }, 500); //60为锚点到距顶部的距离，500为执行时间
}

function back2top() {
    $('html, body').animate({
        scrollTop: $('#top').offset().top - 100
    }, 800); //100为锚点到距顶部的距离，500为执行时间
}
