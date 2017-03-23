$(function() {
    //init PIXI canvas
    var renderer = PIXI.autoDetectRenderer(900, 600, {
        view: document.getElementById('pixiScaledCanvas'),
        antialias: true,
        transparent: false,
        resolution: 1
    });
    document.getElementById('appContainer').appendChild(renderer.view);
    var stage = new PIXI.Container();
    renderer.autoResize = true;
    renderer.view.style.width = '450px';
    renderer.view.style.height = '300px';
    renderer.backgroundColor = 0x42b8dd;
    //load files
    PIXI.loader
        .add([
            // "./assets/img/choose.png",
            "./assets/img/Mountain-wallpaper2.jpg",
            // "images/imageTwo.png",
            // "images/imageThree.png"
        ])
        .load(setup);

    function setup() {
        //create a anulus 圆环
        var graContainer = new PIXI.Container();
        var annulus = new PIXI.Graphics();
        annulus.lineStyle(60, 0xFFFF0B);
        annulus.drawCircle(0, 0, 100);
        annulus.endFill();
        annulus.x = renderer.width / 2;
        annulus.y = renderer.height / 2 - 100;

        var bg = PIXI.Sprite.fromImage('./assets/img/Mountain-wallpaper2.jpg');
        bg.anchor.set(0);
        bg.x = 0;
        bg.y = 0;
        // bg.mask = annulus;

        /*var uploadBtn = PIXI.Sprite.fromImage("./assets/img/choose.png");
        uploadBtn.x = renderer.width / 2 - 173;
        uploadBtn.y = renderer.height / 2 + 100;
        uploadBtn.interactive = true;
        uploadBtn.buttonMode = true;
        uploadBtn.on('pointerdown', onUploadClick);
        graContainer.addChild(uploadBtn);*/

        // graContainer.addChild(bg);
        graContainer.addChild(annulus);
        stage.addChild(graContainer);
        /*colorMatrix = [
            //R  G  B  A
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1
        ];
        filter = new PIXI.filters.ColorMatrixFilter();
        filter.matrix = colorMatrix;
        bg.filters = [filter];*/
        renderer.render(stage);
    }

    /*doInput("uploadInput");

    function doInput(id) {
        var inputObj = document.createElement('input');
        inputObj.addEventListener('change', readFile, false);
        inputObj.type = 'file';
        inputObj.accept = 'image/*';
        inputObj.id = id;
        inputObj.class = "pure-button";
        inputObj.click();
        var inputCon = document.getElementById("inputCon");
        inputCon.appendChild(inputObj);
    }*/
    var $fileName = $('.fileName');
    /*$('input[type=file]').change(function() {
        var path = $(this).val();
        var fileName = path ? path.substr(path.lastIndexOf('\\') + 1) : '请上传文件';
        $fileName.text(fileName);
    });*/
    // $('input[type=file]').change(readFile());

    var inputObj = document.getElementById('uploadInput');
    inputObj.addEventListener('change', readFile, false);

    function readFile() {
        var file = this.files[0]; //获取input输入的图片
        if (!/image\/\w+/.test(file.type)) {
            alert("请确保文件为图像类型");
            return false;
        } //判断是否图片，在移动端由于浏览器对调用file类型处理不同，虽然加了accept = 'image/*'，但是还要再次判断
        var reader = new FileReader();
        reader.readAsDataURL(file); //转化成base64数据类型
        reader.onload = function(e) {
            // drawToCanvas(this.result);
            var img = new Image;
            img.src = this.result;
            img.onload = function() {
                $("#imgPre").attr('src', img.src);

            }
        }
    }


    //渲染舞台
    var count = 0;

    function render() {
        requestAnimationFrame(render);
        var newVal = 180 * Math.sin(count);
        filter.hue(newVal, false);
        count += 0.01;
        renderer.render(stage);
    }
})
