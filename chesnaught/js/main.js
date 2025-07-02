// ロード画面
var bar = new ProgressBar.Line(container, {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 1400,
    color: '#FFF',
    trailColor: '#eee',
    trailWidth: 0.5,
    svgStyle: {width: '100%', height: '100%'}
  });
  bar.animate(1.0); 
  
  $(document).ready(function(){
    setTimeout(function(){
      $(".containerback").fadeOut('slow');
      $(".syozi_left").addClass('move_l_shozi1');
      $(".syozi_right").addClass('move_r_shozi1');
      $(".load_syozi_left").addClass('move_l_shozi1');
      $(".load_syozi_right").addClass('move_r_shozi1');
    },1000);
  });
  

// 検索処理
const button1 = document.getElementById('start_search');
button1.addEventListener('click', (e) => {
  // デフォルトのイベントをキャンセル
  e.preventDefault();

  let inserted_text = document.getElementById('nyuryoku');
  var inserted_text2 = inserted_text.value;
  let set_text = document.getElementById('harituke');
  set_text.value = inserted_text2;

  document.search_ches.submit();

});