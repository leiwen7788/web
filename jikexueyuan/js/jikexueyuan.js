define(function(require, exports, module) {

    var $ = require('seajq');
    var a = {}
    a.input = function() {
        //输入框
        $('.search-text').click(function() {
            $('.hot-words').css('display', 'none');
            $('.search-btn').css({
                background: 'url(./imgs/topsearch-icon2_8c8d8b0.png) center center no-repeat #00DB00'
            })
        });
        // 导航条
        $('.navbox1').mouseenter(function() {
            $('.bottom-nav').css('display', 'block')
        });

        $('.bottom-nav').mouseleave(function() {
            $('.bottom-nav').css('display', 'none')
        });

        $(".list").each(function() {
            $(this).hover(function() {
                var id = this.id.replace('list', '');
                $('#list' + id).css('background', '#fafafa');
                $('#navimg' + id).css('display', 'block');
            }, function() {
                var ww = this.id.replace('list', '');
                $('#list' + ww).css('background', '');
                $('#navimg' + ww).css('display', 'none');
            })
        })

        $(".navbox1>a").each(function() {
            $(this).hover(function() {
                var id = this.id.replace('rownav', '');
                $('#list' + id).css('background', '#fafafa');
                $('#navimg' + id).css('display', 'block');
            }, function() {
                var ww = this.id.replace('rownav', '');
                $('#list' + ww).css('background', '');
                $('#navimg' + ww).css('display', 'none');
            })
        })

        //左侧菜单
        $('.leftnav').hover(function() {
            //console.log($(this).next().next());
            $(this).next().css('display', 'block')
        }, function() {
            $(this).next().css('display', 'none')
        });

        $('.leftnav').next().hover(function() {

            $(this).css('display', 'block')
        }, function() {
            $(this).css('display', 'none')
        })




        // 中间最大轮播图
        function leftnav() {
            $('.banner-left').click(function() {
                leftmove();
                tab();
            })
        }
        leftnav();

        function rightnav() {
            $('.banner-right').click(function() {
                rightmove();
                tab();
            })
        }
        rightnav();

        function leftmove() {
            $('.focus-imgs').css({ 'left': parseInt($('.focus-imgs').css('left')) + 560 + 'px' });
            // return($('.focus-imgs').css('left'));
            if (parseInt($('.focus-imgs').css('left')) > 0) {
                $('.focus-imgs').css({ 'left': '-3360px' });

            }
        }

        function rightmove() {
            $('.focus-imgs').css({ 'left': parseInt($('.focus-imgs').css('left')) - 560 + 'px' });
            // return($('.focus-imgs').css('left'));
            if (parseInt($('.focus-imgs').css('left')) < -3380) {
                $('.focus-imgs').css({ 'left': '0px' });

            }

        }




        $(".swith-btn").each(function() {
            $(this).click(function() {
                var id = this.id.replace('swith-btn', '');
                $('.focus-imgs').css({ 'left': -560 * id + 'px' });
                $(this).addClass('on');
                $(this).siblings().removeClass('on');


            })
        })
        var tab = function() {
            var index = Math.abs(parseInt($('.focus-imgs').css('left')) / 560);
            for (var i = 0; i < 7; i++) {
                if (i != index) {
                    if ($('#swith-btn' + i).hasClass('on')) {
                        $('#swith-btn' + i).removeClass('on');
                    }
                } else {
                    $('#swith-btn' + i).addClass('on');
                }

            }
        }


        function go() {
            rightslice = function() {
                rightmove();
                tab();
            }
            setInterval(rightslice, 3000);
            // setInterval(tab, 3000);


        }

        go();





        //中间小的轮播图


        $('.slice-btn1').click(function() {
            $('.center-les3').css({ 'left': parseInt($('.center-les3').css('left')) + 186 + 'px' });
            // return($('.focus-imgs').css('left'));
            if (parseInt($('.center-les3').css('left')) > 0) {
                $('.center-les3').css({ 'left': '-744px' });

            }
        })

        $('.slice-btn2').click(function() {
                $('.center-les3').css({ 'left': parseInt($('.center-les3').css('left')) - 186 + 'px' });
                // return($('.focus-imgs').css('left'));
                if (parseInt($('.center-les3').css('left')) < -744) {
                    $('.center-les3').css({ 'left': '0px' });

                }

            })
            // 右边课程
            //console.log($('.lesson8 li:lt(4)'))
        $('.lesson8 li:lt(4)').mouseenter(function() {
            $('.lesson8').css('display', 'none');
            $('.question').css('display', 'block');
            $('.question-nav').css('display', 'block');
        })
        $('.rl3').mouseleave(function() {
            $('.lesson8').css('display', 'block');
            $('.question,.book,.kechen,.party').css('display', 'none');

        })


        // console.log($('.question-nav li:eq(i)'));
        $('.question-nav>li').each(function() {

            $(this).mouseenter(function() {

                var index = $(this).index();
                // console.log(index);
                // console.log($('.rl3>div:eq($(this).index())'))
                $('#rl3' + index).css('display', 'block');
                $('#rl3' + index).siblings().css('display', 'none');
            })
        });

        $('.content-box').each(function() {
            $(this).mouseenter(function() {
                //console.log($(this).find('.describe'))
                $(this).find('.describe').slideDown();
                $(this).find('.person').slideDown();
                $(this).find('.level').slideDown();
                $(this).css('z-index', '2000')

            })
        })

        $('.content-box').mouseleave(function() {
            $(this).find('.describe').slideUp();
            $(this).find('.person').slideUp();
            $(this).find('.level').slideUp();
            $(this).css('z-index', '1000')
        })
        $('.lessonnav>li').each(function() {
            $(this).mouseenter(function() {
                var index = $(this).index();
                $('#lessonimg-box' + index).addClass('block');
                $('#lessonimg-box' + index).siblings().removeClass('block');
                $(this).find('.sanjiao').css('display', 'block')

            })
            $(this).mouseleave(function() {
                var index = $(this).index();
                $(this).find('.sanjiao').css('display', 'none')
            })
        })

        // 职业路径图
        $('.pathbox>ul>li').mouseenter(
            function() {
                $(this).css('border', '1px solid #35b558');
                $(this).find('.greenbtn2').css({
                    'color': '#FFFFFF',
                    'background': '#35b558'

                })
            })
        $('.pathbox>ul>li').mouseleave(
                function() {
                    $(this).css('border', '1px solid #e4e4e4');
                    $(this).find('.greenbtn2').css({
                        'color': '#35b558',
                        'background': '#e4e4e4'

                    })
                })
            //知识体系图
        $('.card-transform').hover(function() {
            ///console.log(111);
            $(this).find('.front').css('transform', 'rotateY(180deg)');
            $(this).find('.back').css('transform', 'rotateY(0deg)');
        }, function() {
            $(this).find('.front').css('transform', 'rotateY(0deg)');
            $(this).find('.back').css('transform', 'rotateY(180deg)');
        })



        //wiki
        $('.wikiimgbox').hover(function() {
            $(this).find('.looklook').css('display', 'block')
        }, function() {
            $(this).find('.looklook').css('display', 'none')
        })

        //战略合作企业
        //console.log($('.cooperation coo-left'))
        $('.cooperation .coo-left').click(function() {
            $('.cooperation .imgsline').css({ 'left': parseInt($('.cooperation .imgsline').css('left')) + 161 + 'px' });
            // return($('.focus-imgs').css('left'));
            if (parseInt($('.cooperation .imgsline').css('left')) > 0) {
                $('.cooperation .imgsline').css({ 'left': '-3220px' });

            }
        })

        $('.cooperation .coo-right').click(function() {
            $('.cooperation .imgsline').css({ 'left': parseInt($('.cooperation .imgsline').css('left')) - 161 + 'px' });
            // return($('.focus-imgs').css('left'));
            if (parseInt($('.cooperation .imgsline').css('left')) < -3220) {
                $('.cooperation .imgsline').css({ 'left': '0px' });

            }

        })

        //合作院校
        $('.coo-school .coo-left').click(function() {
            $('.schoolbox .schoolline').css({ 'left': parseInt($('.schoolbox .schoolline').css('left')) + 143 + 'px' });
            // return($('.focus-imgs').css('left'));
            if (parseInt($('.schoolbox .schoolline').css('left')) > 0) {
                $('.schoolbox .schoolline').css({ 'left': '-1693px' });

            }
        })

        $('.coo-school .coo-right').click(function() {
                $('.schoolbox .schoolline').css({ 'left': parseInt($('.schoolbox .schoolline').css('left')) - 143 + 'px' });
                // return($('.focus-imgs').css('left'));
                if (parseInt($('.schoolbox .schoolline').css('left')) < -1693) {
                    $('.schoolbox .schoolline').css({ 'left': '0px' });

                }

            })
            //媒体报道

        console.log($('.media .coo-left'))
        $('.media .coo-left').click(function() {
            $('.media .imgsline').css({ 'left': parseInt($('.media .imgsline').css('left')) + 161 + 'px' });
            // return($('.focus-imgs').css('left'));
            if (parseInt($('.media .imgsline').css('left')) > 0) {
                $('.media .imgsline').css({ 'left': '-1932px' });

            }
        })

        $('.media .coo-right').click(function() {
            $('.media .imgsline').css({ 'left': parseInt($('.media .imgsline').css('left')) - 161 + 'px' });
            // return($('.focus-imgs').css('left'));
            if (parseInt($('.media .imgsline').css('left')) < -1932) {
                $('.media .imgsline').css({ 'left': '0px' });

            }

        })

        //返回顶部
        $('.f-top').click(function() {
                $(window).scrollTop() = 0;
                $(".f-top").css('visibility', 'hidden');
            })
            //console.log($(window).scrollTop());
            //浮动窗口
        $(window).scroll(function() {
            $('.f-top').css('visibility', 'visible');
            if ($(this).scrollTop() == 0) {
                $(".f-top").css('visibility', 'hidden');
            } else {
                $(".f-top").css('visibility', 'visible');
            }

        });
        $('.f-phone').hover(function() {
            $('.twodcode').fadeIn();
        }, function() {
            $('.twodcode').fadeOut();
        })
        $('.f-kefu').hover(function() {
            $('.kefu-time').fadeIn();
        }, function() {
            $('.kefu-time').fadeOut();
        })

         $('.qq-icon').hover(function() {
            $('.weixinpop').fadeIn();
        }, function() {
            $('.weixinpop').fadeOut();
        })

    };














    module.exports = a
})
