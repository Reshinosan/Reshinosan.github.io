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
  // $(".containerback").fadeOut('slow');
  setTimeout(function(){
    $(".containerback").fadeOut('slow');
  },1000);
});