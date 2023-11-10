//ハンバーガーメニュー
$(function() {
  $('.hamburger').on('click', function() {
    $('#navi').toggleClass('active');
  });

  $('#navi a').on('click', function() {
    $('#navi').removeClass('active');
  })
});

$(function() {
  /*=================================================
  スムーススクロール
  ===================================================*/
  // ページ内リンクのイベント
  $('a[href^="#"]').click(function(){
    // リンクを取得
    let href= $(this).attr("href");
    // ジャンプ先のid名をセット
    let target = $(href == "#" || href == "" ? 'html' : href);
    // トップからジャンプ先の要素までの距離を取得
    let position = target.offset().top;
    // animateでスムーススクロールを行う
    // 600はスクロール速度で単位はミリ秒
    $("html, body").animate({scrollTop:position}, 600, "swing");
    return false;
  });

  //色変化
  let scroll = $(window).scrollTop();
  let about_position = $('#about').offset().top - $(window).height();
  let skills_position = $('#skills').offset().top - $(window).height();
  let works_position = $('#works').offset().top - $(window).height();
  let contact_position = $('#contact').offset().top - $(window).height();

  if(scroll > about_position) {
    if(scroll < skills_position) {
      $(html).addClass(pink);
    };
  };
})

//桜アニメーション
particlesJS("particles-js", {
  "particles":{
    "number":{
      "value":60,//この数値を変更すると桜の数が増減できる
      "density":{
        "enable":true,
        "value_area":1121.6780303333778
      }
    },
    "color":{
      "value":"#fff"
    },
    "shape":{
      "type":"image",//形状は画像を指定
      "stroke":{
        "width":0,
      },
      "image":{
        "src":"http://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/move02/5-6/img/flower.png",//画像を指定
        "width":120,
        "height":120
      }
    },
    "opacity":{
      "value":0.06409588744762158,
      "random":true,
      "anim":{
        "enable":false,
        "speed":1,
        "opacity_min":0.1,
        "sync":false
      }
    },
    "size":{
      "value":8.011985930952697,
      "random":true,//サイズをランダムに
      "anim":{
        "enable":false,
        "speed":4,
        "size_min":0.1,
        "sync":false
      }
    },
    "line_linked":{
      "enable":false,
    },
    "move":{
      "enable":true,
      "speed":5.5,//この数値を小さくするとゆっくりな動きになる
      "direction":"bottom-right",//右下に向かって落ちる
      "random":false,//動きはランダムにしない
      "straight":false,//動きをとどめない
      "out_mode":"out",//画面の外に出るように描写
      "bounce":false,//跳ね返りなし
      "attract":{
        "enable":false,
        "rotateX":281.9177489524316,
        "rotateY":127.670995809726
      }
    }
  },
  "interactivity":{
    "detect_on":"canvas",
    "events":{
      "onhover":{
        "enable":false,
      },
      "onclick":{
        "enable":false,
      },
      "resize":true
    }
  },
  "retina_detect":false
});
