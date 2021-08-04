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