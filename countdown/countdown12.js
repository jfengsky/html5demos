/**
 * Created by jiangfeng on 14-7-24.
 */

var WINDOW_WIDTH = 1024,
    WINDOW_HEIGHT = 768,
    RADIUS = 8,
    MARGIN_TOP = 60,
    MARGIN_LEFT = 30,
    startTime = new Date(2014,7,24,6,34).getTime(),
    endTime = new Date(2014,7,24,12,34).getTime();

function timeDown(_startTime, _endTime, _interback, _callback){
  var tempTime = _endTime = _startTime,
  timeDown = setInterval(function(){
    var tmpDate = new Date(tempTime);
    tempTime = tempTime - 1000;
    if( tempTime <= 0){
      clearInterval(timeDown);
      _callback({
        h: '00',
        m: '00',
        s: '00'
      })
    } else {
      _interback({
        h: tmpDate.getHours() < 10 ? '0' + tmpDate.getHours() : tmpDate.getHours(),
        m: tmpDate.getMinutes() < 10 ? '0' + tmpDate.getMinutes() : tmpDate.getMinutes(),
        s: tmpDate.getSeconds() < 10 ? '0' + tmpDate.getSeconds() : tmpDate.getSeconds()
      })
    }
  }, 1000)
}


function renderDigit(x, y, num ,ctx){
  ctx.fillStyle = "#06f";
  for(var i = 0; i < digit[num].length; i++){
    for(var j = 0; j < digit[num][j].length; j++){
      if(digit[num][i][j] == 1){
        ctx.beginPath();
        ctx.arc(x + j * 2 * (RADIUS + 1) + (RADIUS + 1), y + i * 2 * (RADIUS + 1) + (RADIUS + 1), RADIUS, 0, 2 * Math.PI);
        ctx.closePath();
        ctx.fill();
      }
    }
  }
}

function render( hours, minutes, seconds, ctx ){

  ctx.clearRect(0,0,WINDOW_WIDTH, WINDOW_HEIGHT);

  renderDigit(MARGIN_LEFT, MARGIN_TOP, parseInt(hours/10), ctx );
  renderDigit(MARGIN_LEFT + 15 * (RADIUS + 1), MARGIN_TOP, parseInt(hours%10), ctx );
  renderDigit(MARGIN_LEFT + 30 * (RADIUS + 1), MARGIN_TOP, 10, ctx );
  renderDigit(MARGIN_LEFT + 39 * (RADIUS + 1), MARGIN_TOP, parseInt(minutes/10), ctx );
  renderDigit(MARGIN_LEFT + 54 * (RADIUS + 1), MARGIN_TOP, parseInt(minutes%10), ctx );
  renderDigit(MARGIN_LEFT + 69 * (RADIUS + 1), MARGIN_TOP, 10, ctx );
  renderDigit(MARGIN_LEFT + 78 * (RADIUS + 1), MARGIN_TOP, parseInt(seconds/10), ctx );
  renderDigit(MARGIN_LEFT + 93 * (RADIUS + 1), MARGIN_TOP, parseInt(seconds%10), ctx );

}

//function render( ctx ){
//  var hours = 12,
//      minutes = 34,
//      seconds = 56;
//
//  renderDigit(MARGIN_LEFT, MARGIN_TOP, parseInt(hours/10), ctx );
//  renderDigit(MARGIN_LEFT + 15 * (RADIUS + 1), MARGIN_TOP, parseInt(hours%10), ctx );
//  renderDigit(MARGIN_LEFT + 30 * (RADIUS + 1), MARGIN_TOP, 10, ctx );
//  renderDigit(MARGIN_LEFT + 39 * (RADIUS + 1), MARGIN_TOP, parseInt(minutes/10), ctx );
//  renderDigit(MARGIN_LEFT + 54 * (RADIUS + 1), MARGIN_TOP, parseInt(minutes%10), ctx );
//  renderDigit(MARGIN_LEFT + 69 * (RADIUS + 1), MARGIN_TOP, 10, ctx );
//  renderDigit(MARGIN_LEFT + 78 * (RADIUS + 1), MARGIN_TOP, parseInt(seconds/10), ctx );
//  renderDigit(MARGIN_LEFT + 93 * (RADIUS + 1), MARGIN_TOP, parseInt(seconds%10), ctx );
//
//}


window.onload = function(){
  var canvas = document.getElementById("canvas"),
      context = canvas.getContext("2d");
  canvas.width = WINDOW_WIDTH;
  canvas.height = WINDOW_HEIGHT;


  timeDown(startTime, endTime, function(_data){

    render(_data.h, _data.m, _data.s, context);
  });
//  render(context);
}

