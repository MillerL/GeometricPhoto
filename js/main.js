var app = new PIXI.Application(320, 568, {
    antialias: true,
    resolution: 2
});
document.body.appendChild(app.view);
// app.renderer.view.style.position = "absolute";
// app.renderer.view.style.display = "block";
app.renderer.autoResize = true;
// app.renderer.resize(320, 568);

function dpi() {
    var default_value = 640;
    var clientWidth = document.documentElement.clientWidth;
    return default_value / clientWidth;
}

console.log(dpi());
var _scale = 1 / dpi();
console.log(document.getElementsByTagName("canvas"));
// app.renderer.view.style.transform = "translate3d(-50 % , -50 % , 0 px) scale(" + _scale + ");"
// scaleToWindow(app.renderer.view, "#2C3539");

var graContainer = new PIXI.Container();
var annulus = new PIXI.Graphics();
annulus.lineStyle(40, 0xFFFF0B);
annulus.drawCircle(0, 0, 100);
annulus.endFill();
annulus.x = app.renderer.width / 2;
annulus.y = app.renderer.height / 2;
// console.log(annulus.x, annulus.y);

var bg = PIXI.Sprite.fromImage('./assets/img/Mountain-wallpaper2.jpg');
bg.anchor.set(0);
bg.x = 0;
bg.y = 0;
bg.scale.x = 1;
bg.scale.y = 1;
graContainer.addChild(bg);
graContainer.addChild(annulus);

app.stage.addChild(graContainer);

/*var container = new PIXI.Container();
container.x = app.renderer.width / 2;
container.y = app.renderer.height / 2;*/
// document.getElementsByTagName("canvas").style.transform = "translate3d(-50 % , -50 % , 0 px) scale(" + _scale + ");";


function animate() {
    renderer.render(stage);
    requestAnimFrame(animate);
}
