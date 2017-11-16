$(function() {
    var index = 0;
    // 获取图片li的数量
    var len = $('.Carousel-image li').length;
    var timer = 0;

    // 1.图片自动切换
    function run() {
        timer = setInterval(function() {
            // console.log(index);
            // 1.1 当前图片隐藏，当前数字恢复默认样式
            $('.Carousel-image li:eq(' + index + ')').fadeOut(1000);
            // console.log(index);
            // $('.Carousel-image li:eq(' + index + ')').fadeIn(1000);
            $('.Carousel-index li:eq(' + index + ')').removeClass('active');
            console.log($('.Carousel-index li').eq(index));

            // 1.2 改变index的值
            index++;
            if (index > len - 1) {
                index = 0;
            }

            // 1.3 让改变之后的index索引对应的图片显示，数字为红色背景
            // $('.Carousel-image li:eq(' + index + ')').fadeOut(1000);
            $('.Carousel-image li:eq(' + index + ')').fadeIn(1000);
            $('.Carousel-index li:eq(' + index + ')').addClass('active');
        }, 2000);
    }
    run();
    $('.CarouselFigure').mouseover(function() {
        clearInterval(timer);
    }).mouseout(function() {
        // 离开的时候继续轮播
        run();
    })
    $('.Carousel-index li').mouseover(function() {
        // 让所有正在执行的动画效果停止执行
        $('.Carousel-image li:animated').stop().hide();

        // 3.1 隐藏当前图片
        $('.Carousel-image li:eq(' + index + ')').fadeOut(1000);
        $('.Carousel-index li:eq(' + index + ')').removeClass('active');

        // 3.2 获取鼠标移入li的索引值
        index = $(this).index();

        // 3.3 新的图片显示
        $('.Carousel-image li:eq(' + index + ')').fadeIn(1000);
        $('.Carousel-index li:eq(' + index + ')').addClass('active');
    })

    // 4. 点击左键和右键
    $('.Carousel-left').click(function(e) {
        e.preventDefault();
        // console.log(222);
        // 4.1 隐藏当前图片
        $('.Carousel-image li:eq(' + index + ')').hide();
        $('.Carousel-index li:eq(' + index + ')').removeClass('active');

        // 4.2 获取新的索引
        index--;
        if (index < 0) {
            index = len - 1;
        }

        // 4.3 显示新索引对应的图片
        $('.Carousel-image li:eq(' + index + ')').show();
        $('.Carousel-index li:eq(' + index + ')').addClass('active');
    })
    $('.Carousel-right').click(function(e) {
        e.preventDefault();
        // 4.1 隐藏当前图片
        $('.Carousel-image li:eq(' + index + ')').hide();
        $('.Carousel-index li:eq(' + index + ')').removeClass('active');

        // 4.2 获取新的索引
        index++;
        if (index > len - 1) {
            index = 0;
        }

        // 4.3 显示新索引对应的图片
        $('.Carousel-image li:eq(' + index + ')').show();
        $('.Carousel-index li:eq(' + index + ')').addClass('active');
    })
})