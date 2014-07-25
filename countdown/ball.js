/**
 * Created by jiangfeng on 14-7-25.
 */

//var ball = {
//  x: 512,
//  y: 100,
//  r: 20,
//  g: 2,
//  vx: -4,
//  vy: 0,
//  color: "#f60"
//}

var ball = {
  x: Math.random(1) * 512,
  y: Math.random(1) * 100,
  r: 20,
  g: Math.random(1) + 2,
  vx: -4,
  vy: 0,
  color: "#f60"
}

window.onload = function(){
  var canvas = document.getElementById("canvas");

  canvas.width = 1024;
  canvas.height = 768;

  var context = canvas.getContext("2d");

  setInterval(function(){
    render(context);
    update();
  }, 50)

  function update(){
    ball.x += ball.vx;
    ball.y += ball.vy;
    ball.vy += ball.g;

    if (ball.y >= 768 - ball.r){
      ball.vy = -ball.vy * .5
    }
  }

  function render(ctx){
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    ctx.fillStyle = ball.color;
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.r, 0, 2 * Math.PI);
    ctx.closePath();

    ctx.fill();
  }
}