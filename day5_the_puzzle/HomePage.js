$(document).ready(function () {
    MakePicCell();
    $("#ok").click(function () {
        check();
    });
});
function MakePicCell() {
    //填入4張圖
    //for (var i = 0; i < 4; i++) {
    //    $(".puzzle").append("<div class='piccell' id='pic" + i + "'><img src='../resource/litfiredragon.jpg'/></div>");
    //    var row = parseInt(i / 2);
    //    var col = i % 2;
    //    var picNum = "#pic"+i;
    //    $("#pic" + i + " img").css("margin-left", col * -110 + 1).css("margin-top", row * -110 + 1);
    //    $("#pic" + i).draggable({
    //        containment: '.gamearea',//可以拖拉的範圍
    //        stack: picNum,//使拖拉的目標顯示在最上層,z-index=0
    //        snap: '.puzzle',//貼齊的對象
    //        snapMode: 'inner',//貼齊的模式,inner,outer,both
    //        snapTolerance: 20,//貼齊的觸發距離
    //    });

    //}
    for (var i = 0; i < 16; i++) {
        $(".puzzle").append("<div class='piccell' id='pic" + i + "'><img src='../resource/litfiredragon44.jpg'/></div>");
        var row = parseInt(i / 4);
        var col = i % 4;
        var picNum = "#pic" + i;
        var index = Math.floor(Math.random() * 16 + 1);
        $("#pic" + i + " img").css("margin-left", col * -110 + 1).css("margin-top", row * -110 + 1);
        if (index % 2 > 0)
        {
            $(picNum).css({ "top":index * 3, "left": 448 });
        }
        else {
            $(picNum).css({ "top":index * 3, "left": 448 });
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
function check() {
    for (var i = 0; i < 16; i++) {
        
        
        //$(picNum).val(myOffset.left);
        var picNum = "#pic" + i;
       
        
    }
    var positionX = $("#pic1").offset().left;
    var positionY = $("#pic1").offset().top;
    alert(positionX +" ,"+ positionY);
}
