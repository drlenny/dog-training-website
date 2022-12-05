$("body").click(function (event) {
    var navigation = $(event.target).parents(".navbar").length;
    if(!navigation) {
        $(".navbar .navbar-collapse").collapse("hide");
    }
});