$(function() {
    var clientWidth = document.documentElement.clientWidth;
    var clientHeight = document.documentElement.clientHeight;

    window.onresize = function(event) {
        var w = window.innerWidth;
        var h = window.innerHeight;
        //this part resizes the canvas but keeps ratio the same
        renderer.view.style.width = w + "px";
        renderer.view.style.height = h + "px";
        //this part adjusts the ratio:
        renderer.resize(w, h);
    }
})

// var myView = document.getElementById('pixiScaledCanvas');
var renderer = PIXI.autoDetectRenderer(300, 300, {
    view: document.getElementById('pixiScaledCanvas'),
    antialias: false,
    transparent: false,
    resolution: 1
});
document.body.appendChild(renderer.view);
var stage = new PIXI.Container();
renderer.render(stage);

renderer.autoResize = true;
renderer.width = "160px";
renderer.height = "284px";
/*rendererrenderer.view.style.width = '800px';
renderer.view.style.height = '600px';*/

// Create a new texture
// var texture = PIXI.Texture.fromImage('./assets/img/Mountain-wallpaper2.jpg');

var graContainer = new PIXI.Container();
var annulus = new PIXI.Graphics();
annulus.lineStyle(40, 0xFFFF0B);
annulus.drawCircle(0, 0, 100);
annulus.endFill();
annulus.x = renderer.width / 2;
annulus.y = renderer.height / 2;
// console.log(annulus.x, annulus.y);

var bg = PIXI.Sprite.fromImage('./assets/img/Mountain-wallpaper2.jpg');
bg.anchor.set(0);
bg.x = 0;
bg.y = 0;
bg.scale.x = 1;
bg.scale.y = 1;
graContainer.addChild(bg);
graContainer.addChild(annulus);

stage.addChild(graContainer);

// var pixiScaledCanvas = $('#pixiScaledCanvas')[0];
// var pixiScaledCanvasRenderer = new PIXI.CanvasRenderer(400, 50, $('#pixiScaledCanvas')[0]);
