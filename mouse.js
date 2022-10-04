$("html").click(function(event){
    $("#heading").offset({
        left: event.pageX,
        top: event.pageY
    });
});