$(function() {

  "use strict";

$('body').bind('touchstart', function() {});
  FastClick.attach(document.body);

var q, k, m; //q for questions; k for question number in JSON; m for answer scores
var l = 0; //l for progress
var s = 0; //s for total scores
var n = 1; //n for question number in test 
var qar = []; //qar for questions array
var playN = 0, passion = 0, bg = 0, soft = 0, past = 0, know = 0;
var r, w, x, y, z, o; // genre stars
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
      var pretext = ''; 
      var perc, quotient, final_txt;
      //"if" statements look stupid? fastest though
      if (s >= 90) {
        s = Math.floor(Math.random()*10) + 90; 
        perc = "申请BA牛校一申一个准"; 
      } else if ( s > 70 && s < 90) { 
        s = Math.floor(Math.random()*19) + 70; 
        perc = "用心准备会很有希望哦";
      } else if ( s > 50 && s <= 70) { 
        s = Math.floor(Math.random()*19) + 50; 
        perc = "还差那么点儿意思";
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
      document.title = pretext + '我与BA的契合度是' + quotient + '%';
      if (passion >= 6) {
        $('.d3').addClass('highlighted');
      } else if (passion >= 4 && passion < 6) {
        $('.d2').addClass('highlighted');  
      } else {
        $('.d1').addClass('highlighted');  
      }
      if (bg >= 7) {
        $('.a3').addClass('highlighted');
      } else if (bg >= 4 && bg < 7) {
        $('.a2').addClass('highlighted');  
      } else {
        $('.a1').addClass('highlighted');  
      }
      if (soft > 3) {
        $('.b3').addClass('highlighted');
      } else if (soft > 1 && soft <= 3) {
        $('.b2').addClass('highlighted');  
      } else {
        $('.b1').addClass('highlighted');  
      }
      if (past == 2) {
        $('.e3').addClass('highlighted');
      } else if (past == 1) {
        $('.e2').addClass('highlighted');  
      } else {
        $('.e1').addClass('highlighted');  
      } 
      if (s >= 80) {
        $('.c3').addClass('highlighted');
      } else if (s >= 60 && s < 80) {
        $('.c2').addClass('highlighted');  
      } else {
        $('.c1').addClass('highlighted');  
      }
    }
});
 
setInterval(function(){
  $("#start_btn").toggleClass("shake animatedDelayed3");
  $(".pointer").toggleClass("bounce animated"); 
}, 2500);

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