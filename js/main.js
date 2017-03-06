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

    var graphics = new PIXI.Graphics();
    var graContainer = new PIXI.Container();
    graphics.lineStyle(30, 0xFFFF0B);
    graphics.drawCircle(200, 200, 100);
    graphics.endFill();

    graContainer.addChild(graphics);
    app.stage.addChild(graContainer);
}
