/**
 * Created by jiangfeng on 14-8-5.
 */
var stage = new createjs.Stage('gameView');
createjs.Ticker.setFPS(30);
createjs.Ticker.addEventListener('tick', stage);
var gameView = new createjs.Container();
stage.addChild(gameView);

