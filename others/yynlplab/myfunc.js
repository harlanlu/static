
// 去除logo图片
var logoimg=document.getElementById('logoimg');
logoimg.remove();
setNav();
console.log("success...");

function setNav(){
    var navDiv=document.getElementById("navbarsExample07XL");
    navDiv.innerHTML='<ul class="navbar-nav mr-auto">'
    +'<li class="nav-item"><a class="nav-link" href="index.html">首页</a></li>'
    +'<li class="nav-item"><a class="nav-link" href="news.html">新闻动态</a></li>'
    +'<li class="nav-item"><a class="nav-link" href="team.html">科研团队</a></li>'
    +'<li class="nav-item"><a class="nav-link" href="achievements.html">科研成果</a></li>'
    +'<li class="nav-item"><a class="nav-link" href="reports.html">学术报告</a></li>'
    +'<li class="nav-item"><a class="nav-link" href="photos.html">缤纷相册</a></li>'
    +'<li class="nav-item"><a class="nav-link" href="downloads.html">下载中心</a></li>'
    +'<li class="nav-item"><a class="nav-link" href="内容页模板.html">内容页1</a></li>'
    +'</ul>';
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
