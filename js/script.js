$(function() {

  "use strict";

$('body').bind('touchstart', function() {});
  FastClick.attach(document.body);

var q, k, m; //q for questions; k for question number in JSON; m for answer scores
var l = 0; //l for progress
var s = 0; //s for total scores
var n = 1; //n for question number in test 
var qar = []; //qar for questions array
var playN = 0, passion = 0, bg = 0, soft = 0, past = 0, know = 0, gmat = 0;
var r, w, x, y, z, o, t; // genre stars
var isPlaying = false;

/* append first song onto the board */
function first() {
    q = qar; 
    k = 0;
    $('.quiz_text>p').html(q[k].describe);
}

/* add overlay mask using pure js */
function addOverlay() { 
        var myOverlay = document.createElement('div');
        myOverlay.id = 'overlay';
        document.body.appendChild(myOverlay); 
        myOverlay.style.position = 'absolute';
        myOverlay.style.top = 0;  
        myOverlay.style.opacity = 0.8;  
        myOverlay.style.width = window.innerWidth + 'px';
        myOverlay.style.height = window.innerHeight + 'px';
        myOverlay.style.top = window.pageYOffset + 'px';
        myOverlay.style.left = window.pageXOffset + 'px';
        myOverlay.style.zIndex = 999;
        myOverlay.style.backgroundColor = '#000'; 
} 

$('#start_btn').click(function() {
      $('.prelude, .footer').fadeOut(500);
      $('.slogan').fadeOut(1000);
      $('.logo').addClass('hinge animatedSlow');
      $('#start').prepend(p);
      $('#progressbar').fadeIn(1000);
      setTimeout(function() {
      $('.quiz').fadeIn(500);
      }, 1000)
      first();
      $('#start_audio, .prelude').remove();
})

$('.choice').click(function() {
      n += 1;
      l += 100/13; 
      $("#progressbar>div").css("width", l + "%");
      var u = $(this).attr("data-choice");
      o = q[k]; 
      if (k < 13) {
      m = o[u].bonus || 0;
      s += m; 
      r = o[u].p_score || 0;
      passion += r;
      w = o[u].b_score || 0;
      bg += w;
      x = o[u].s_score || 0;
      soft += x;
      y = o[u].past_score || 0;
      past += y;
      z = o[u].knowledge_score || 0;
      know += z;  
      t = o[u].wow || 0;
      gmat += t;
      $("#pg").text(k + 1 + "/13");
      if ($('.quiz').hasClass('slideInRight animated')) {$('.quiz').removeClass('slideInRight animated')};
      if ($('.play_btn>img').hasClass('spin begin')) {$('.play_btn>img').removeClass('spin begin')};
      $('.quiz').addClass('fadeOutLeft animatedFast'); 
      setTimeout(function() {
      k += 1;
      $('.appendimage').remove(); 
      $('.quiz_text').prepend(q[k].image);  
      $('.quiz_text>p').html(q[k].describe)
      isPlaying = true; 
      $('.play_btn>img').addClass('spin begin'); 
      if (q[k].hasOwnProperty('C')) {$('#choiceC').css('display', 'block')} else {$('#choiceC').css('display', 'none')};
      if (q[k].hasOwnProperty('D')) {$('#choiceD').css('display', 'block');$('.choice').css('margin', '-6px auto')} else {$("#choiceD").css('display', 'none');$('.choice').css('margin', '2px auto')};
      $("#choiceA").html(q[k].A.describe);
      $("#choiceB").html(q[k].B.describe);
      if (q[k].hasOwnProperty('C')) {$('#choiceC').html(q[k].C.describe)};
      if (q[k].hasOwnProperty('D')) {$('#choiceD').html(q[k].D.describe)};
      $(".quiz").removeClass('fadeOutLeft animatedFast').addClass('slideInRight animated');
      $('.intro').text(' '); 
      }, 200);
      playN = 0; 
    }
      if (n > 13) { 
        $('.quiz, #progressbar').remove();
        $('.logo').removeClass('hinge animatedSlow');
        $('.result, .slogan, .footer').css('display', 'block').addClass('fadeInUp animatedSlow'); 
      var perc, quotient;

      //"if" statements look stupid? fastest though
      if (s >= 96 && gmat !== 1) {
        s = Math.floor(Math.random()*5) + 95; 
        perc = "申请BA牛校一申一个准"; 
      } else if ( s > 70 && s < 96) { 
        s = Math.floor(Math.random()*15) + 79; 
        perc = "用心准备会很有希望哦";
      } else if ( s > 50 && s <= 70) { 
        s = Math.floor(Math.random()*19) + 55; 
        perc = "需要跟着我们继续努力哦";
      } else if (s > 30 && s <= 50) { 
        s = Math.floor(Math.random()*39) + 10; 
        perc = "哥们儿考虑转专业吧";
      } else { 
        perc = Math.floor(Math.random()*9) + 0; 
        perc = "哥们儿咱能认真答吗";
      }
        quotient = s;
        $('.percent').fadeIn(500);
        $('#final_perc').text(perc);
        $('.final').text(quotient).prop('counter', 0).animate({
         counter: $('.final').text()
      }, {
        duration: 2000,
        easing: "swing",
        step: function(now) {
            $(this).text(Math.ceil(now));
          }
      }); 

      //title
      if (s >= 79 ) {
        var titles = ['竟有一个专业和我的契合度如此之高...','原来我一直选错了专业...','命中注定爱上你，我的BA女神'];
        var index = Math.floor(Math.random()*3);
        document.title = titles[index]; 
      } else {
        document.title = '看来要追BA女神，我还要多多努力啊...';
      }

      //tags
      if (passion >= 6) {
        $('.d3').addClass('highlighted');
      } else if (passion >= 4 && passion < 6) {
        $('.d2').addClass('highlighted');  
      } else {
        $('.d1').addClass('highlighted');  
      }
      if (bg >= 8 && gmat !== 1) {
        $('.a3').addClass('highlighted');
        $('.follow').css('display','none');
        $('.post').css('display','table');
        $('.post_link').text('想在美国实习？你有CPT么！').attr('href','http://mp.weixin.qq.com/s?__biz=MzI4NDE1NTM0MQ==&mid=403599888&idx=1&sn=1b714b16259273cb19455115352c19ec&scene=1&srcid=0329N0QLZ5m5dKkHd9Uiwjeu#wechat_redirect');
      } else if (bg >= 4 && bg < 7 && gmat !== 1) {
        $('.a2').addClass('highlighted'); 
        $('.follow').css('display','none'); 
        $('.post').css('display','table');
      } else {
        $('.a1').addClass('highlighted'); 
        $('.post').css('display','table'); 
        $('.post').css('display','table');
      }
      if (soft > 3) {
        $('.b3').addClass('highlighted'); 
        $('.follow').css('display','none');
        $('.post').css('display','table');
        $('.post_link').text('想在美国实习？你有CPT么！').attr('href','http://mp.weixin.qq.com/s?__biz=MzI4NDE1NTM0MQ==&mid=403599888&idx=1&sn=1b714b16259273cb19455115352c19ec&scene=1&srcid=0329N0QLZ5m5dKkHd9Uiwjeu#wechat_redirect');
      } else if (soft > 1 && soft <= 3) {
        $('.b2').addClass('highlighted');  
        $('.follow').css('display','none');
        $('.post').css('display','table');
      } else {
        $('.b1').addClass('highlighted'); 
        $('.follow').css('display','none');  
        $('.post').css('display','table');
      }
      if (past == 2) {
        $('.e3').addClass('highlighted');
      } else if (past == 1) {
        $('.e2').addClass('highlighted');    
        $('.follow').css('display','none');
        $('.post').css('display','table');
      } else {
        $('.e1').addClass('highlighted');     
        $('.follow').css('display','none'); 
        $('.post').css('display','table'); 
      } 
      if (s >= 80) {
        $('.c3').addClass('highlighted');
      } else if (s >= 60 && s < 80) {
        $('.c2').addClass('highlighted'); 
      } else {
        $('.c1').addClass('highlighted');     
        $('.follow').css('display','table'); 
        $('.post').css('display','none'); 
      }
      if (gmat == 1) {  
          $('.follow').css('display','none');
          $('.post').css('display','table');
          $('.post_link').text('BBC学姐一战GMAT770心经').attr('href','http://mp.weixin.qq.com/s?__biz=MzI4NDE1NTM0MQ==&mid=404046836&idx=1&sn=6516691975f9b99bef122d7655e8423c&scene=0#wechat_redirect');
      }
    }
});
  

/*All the appending stuff*/
var p = "<div hidden id='progressbar'><div><span id='pg'>0/13</span></div></div></div>";
 
$.getJSON("data/data.json", function(e){
        $.extend(qar, e);
}); 

$('.follow').click(function() { 
        addOverlay(); 
        $('img[alt="QR"]').show();
        $('#overlay').click(function() {
            $(this).remove(); 
            $('img[alt="QR"], img[alt="des"], .share_txt').hide();
        });
});
});