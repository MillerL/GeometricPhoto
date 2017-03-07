function init() {

    var app = new PIXI.Application(400, 600, {
        antialias: true,
        resolution: 2
    });
    document.body.appendChild(app.view);
    app.renderer.view.style.position = "absolute";
    app.renderer.view.style.display = "block";
    app.renderer.autoResize = true;
    app.renderer.resize(window.innerWidth, window.innerHeight);

    var graContainer = new PIXI.Container();
    var annulus = new PIXI.Graphics();
    annulus.lineStyle(30, 0xFFFF0B);
    annulus.drawCircle(200, 200, 100);
    annulus.endFill();

    var backgroundImg = PIXI.Sprite.fromImage('./assets/img/Mountain-wallpaper.jpg');
    backgroundImg.width = app.renderer.width;
    backgroundImg.height = app.renderer.height;
    // console.log(backgroundImg.width,backgroundImg.height);

    graContainer.addChild(annulus);
    graContainer.addChild(backgroundImg);
    app.stage.addChild(graContainer);
}
