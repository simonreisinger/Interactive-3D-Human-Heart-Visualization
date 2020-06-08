// https://codepen.io/jasonchan/pen/JXwONj
// http://jsfiddle.net/fm0vxg32/
function loadWikipediaPreview(currentName){
    //searchTerm = "Posterior_vein_of_the_left_ventricle";
    var url = "https://en.wikipedia.org/w/api.php?action=parse&format=json&prop=text&section=0&page="+ currentName +"&callback=?";
    //$("<div class='wikipediainfo'> <h3>"+ currentName + "</h3> </div>").appendTo('body');

    $.ajax({
        type: "GET",
        url: url,
        contentType: "application/json; charset=utf-8",
        async: false,
        dataType: "json",
        success: function (data, textStatus, jqXHR) {
            console.log(data)
            var markup = data.parse.text["*"];
            var blurb = $('<div class=\'wikipediainfo\'></div>').html(markup);
            //$('#article').html($(blurb).find('wikipediainfo'));
            $(blurb).appendTo('body');

        },
        error: function (errorMessage) {
        }
    });

}

/*
$(function() {
    // enter
    $("#searchTerm").keypress(function(e){
        if(e.keyCode===13){
            var searchTerm = $("#searchTerm").val();
            var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+ searchTerm +"&format=json&callback=?";
            $.ajax({
                url: url,
                type: 'GET',
                contentType: "application/json; charset=utf-8",
                async: false,
                dataType: "json",
                success: function(data, status, jqXHR) {
                    //console.log(data);
                    $("#output").html();
                    for(var i=0;i<data[1].length;i++){
                        $("#output").prepend("<div><div class='well'><a href="+data[3][i]+"><h2>" + data[1][i]+ "</h2>" + "<p>" + data[2][i] + "</p></a></div></div>");
                    }

                }
            })
        }
    });
// click ajax call
    $("#search").on("click", function() {
        var searchTerm = $("#searchTerm").val();
        var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+ searchTerm +"&format=json&callback=?";
        $.ajax({
            url: url,
            type: 'GET',
            contentType: "application/json; charset=utf-8",
            async: false,
            dataType: "json",
            // plop data
            success: function(data, status, jqXHR) {
                //console.log(data);
                $("#output").html();
                for(var i=0;i<data[1].length;i++){
                    $("#output").prepend("<div><div class='well'><a href="+data[3][i]+"><h2>" + data[1][i]+ "</h2>" + "<p>" + data[2][i] + "</p></a></div></div>");
                }

            }
        })
            .done(function() {
                console.log("success");
            })
            .fail(function() {
                console.log("error");
            })
            .always(function() {
                console.log("complete");
            });


    });
});*/