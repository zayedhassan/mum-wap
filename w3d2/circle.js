$(document).ready(function () {
    "use strict"
    let amount = 10;
    let rate = 250;
    let growing = setInterval(sizeUp, rate);

    $(document).on('click', ".circle", function () {
        $(".circle").hide();
        $(".circle").not(':first').remove();
        clearInterval(growing);
    });

    $("#start").click(function () {
        clearInterval(growing);
        $(".circle").not(':first').remove();
        let width = $("#width").val();
        amount = $("#amount").val();
        rate = $("#rate").val();
        for (let i = 1; i < parseInt($("#circleNo").val()); i++) {
            $(".circle:first").clone().appendTo('article');
            console.log("okl");
        }
        $(".circle").show();
        $(".circle").css({
            'width': width,
            'height': width,
            'border-radius': width,
        });
        growing = setInterval(sizeUp, parseInt(rate));
    });

    function sizeUp() {
        let newWidth = parseInt($(".circle").width()) + parseInt(amount) + "px";
        $(".circle").css({
            'width': newWidth,
            'height': newWidth,
            'border-radius': newWidth,
        });
    }
});