var puzzlePositionX;//puzzle的left值
var puzzlePositionY;//puzzle的top值
var isFinish = true;//true:拼塊位置正確;
$(document).ready(function () {
    puzzlePositionX = $(".puzzle").offset().left;//puzzle的left值
    puzzlePositionY = $(".puzzle").offset().top;//puzzle的top值
    MakePicCell();
    $("#buttonOk").click(function () {
        check();
        if (isFinish) {
            changePic();
        }
        else {
            alert("Check again!!");
        }
    });
    $("#again").click(function () {
        window.location.reload();
    });
});
function MakePicCell() {
    for (var i = 0; i < 16; i++) {
        $(".puzzle").append("<div class='piccell' id='pic" + i + "'><img src='../resource/litfiredragon44.jpg'/></div>");
        var row = parseInt(i / 4);
        var col = i % 4;
        var picNum = "#pic" + i;


        $("#pic" + i + " img").css("margin-left", col * -110 + 1).css("margin-top", row * -110 + 1).css("z-index", i);

        if (i % 2 > 0) {
            $(picNum).css({ "top": puzzlePositionY , "left": puzzlePositionX + i * 30 });
        }
        else {
            $(picNum).css({ "top": puzzlePositionY + 100, "left": puzzlePositionX + i *30 });
        }
        $("#pic" + i).draggable({
            containment: 'window',//可以拖拉的範圍
            stack: picNum,//使拖拉的目標顯示在最上層,z-index=0
            snap: '.puzzle',//貼齊的對象
            snapMode: 'inner',//貼齊的模式,inner,outer,both
            snapTolerance: 20,//貼齊的觸發距離
        });
    }
}
//109.5,80.875
function check() {
    for (var i = 0; i < 16; i++) {
        var row = parseInt(i / 4);
        var col = i % 4;
        var picNum = "#pic" + i;

        var picPositionX = $(picNum).offset().left;
        var picPositionY = $(picNum).offset().top;
        //判斷各片拼圖的位置對不對,允許差距+-10pix
        if (Math.abs(Math.abs(puzzlePositionX - picPositionX) - col * 110) > 10) {
            isFinish = false;
        }
        else if (Math.abs(Math.abs(puzzlePositionY - picPositionY) - row * 110) > 10) {
            isFinish = false;
        }
        else if (row == 0 && col == 0) {
            if (Math.abs(puzzlePositionX - picPositionX) > 10) {
                isFinish = false;
            }
            if (Math.abs(puzzlePositionY - picPositionY) > 10) {
                isFinish = false;
            }
        }
    }


}
function changePic() {
    $(".piccell").fadeOut(2000);
    $("#anser").css("z-index", 0);
    $(".gamearea").css("margin", "auto");
    $("#buttonOk").fadeOut();
    document.getElementById("message").innerHTML = "Congratulation!!";
}
