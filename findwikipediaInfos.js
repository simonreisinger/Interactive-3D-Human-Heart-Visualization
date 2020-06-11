// https://codepen.io/jasonchan/pen/JXwONj
// http://jsfiddle.net/fm0vxg32/
function loadWikipediaPreview(currentName) {
    if (currentName !== null && currentName !== undefined && currentName !== "") {
        let currentWiki =  Postnatal_anatomical_structure.filter(obj => {
            return obj.Filename.includes(currentName)
        })[0];
        //currentWiki = "Posterior_vein_of_the_left_ventricle";
        console.log(currentWiki)
        let url = "https://en.wikipedia.org/w/api.php?action=parse&format=json&prop=text&section=0&page=" + currentWiki.wikipediaInfos + "&callback=?";

        $.ajax({
            type: "GET",
            url: url,
            contentType: "application/json; charset=utf-8",
            async: false,
            dataType: "json",
            success: function (data, textStatus, jqXHR) {
                var markup = data.parse.text["*"]; // raw text
                markup = markup.replace(/margin-left: 380px;/g, 'margin-left: 0px;');
                let blurb = $('<div class=\'wikipediainfo\'></div>').html(markup);
                $(blurb).appendTo('body');
            },
            error: function (errorMessage) {
            }
        });
    }
}
