function sidenav_engine(s){$(function(){$(".accordion-inner-class").on("show.bs.collapse",function(){$(this).find($(".sample-side-nav")).append('<span class="caret-class"><img src="/assets/student_dashboard/caret_down_white.png"></span>'),$(this).find($(".lesson-name-span")).css("color","#FFF")}),$(".accordion-inner-class").on("hide.bs.collapse",function(){$(this).find($(".caret-class")).remove(),$(this).find($(".lesson-name-span")).css("color","#5c5c5c")});var n=$('a[href="'+s+'"]');n.css("color","#FFF"),n.closest("div").css("background-color","#292829");var o="#"+$(n).closest(".panel-collapse").attr("id"),a=$(n).closest(".section-accordion").find("a").first().attr("href");$(o).collapse("show"),$(a).collapse("show"),n.length>0&&$("#side-nav-container").animate({scrollTop:$(n).offset().top-"200"},1e3),s.indexOf("?foundations=true")>=0&&s.indexOf("javascript-foundations")>=0?$("#adv-challenges-collapse").collapse("show"):s.indexOf("?foundations=true")>=0&&s.indexOf("foundations")>=0&&$("#challenges-collapse").collapse("show"),$("#side-nav-container").css("top",Math.max(0,50-$(this).scrollTop())),$(window).scroll(function(){$("#side-nav-container").css("top",Math.max(0,50-$(this).scrollTop()))})})}