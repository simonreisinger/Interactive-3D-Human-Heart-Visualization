// Source: https://codepen.io/jasonchan/pen/JXwONj
// Source: http://jsfiddle.net/fm0vxg32/
function loadWikipediaPreview(currentName, language) {
  if (currentName !== null && currentName !== undefined && currentName !== "") {
    let currentWiki = Postnatal_anatomical_structure.filter(function (obj) {
      return obj.Filename.includes(currentName);
    })[0];
    let url =
      "https://" +
      language +
      ".wikipedia.org/w/api.php?action=parse&format=json&prop=text&section=0&page=" +
      currentWiki.wikipediaInfos[language] +
      "&callback=?";
    $.ajax({
      type: "GET",
      url: url,
      contentType: "application/json; charset=utf-8",
      async: false,
      dataType: "json",
      success: function (data, textStatus, jqXHR) {
        var markup = data.parse.text["*"]; // raw text
        markup = markup.replace(/margin-left: 380px;/g, "margin-left: 0px;");
        let blurb = $("<div class='wikipediaInfo'></div>").html(markup);
        $(blurb).appendTo("body");
      },
      error: function (errorMessage) {},
    });
  }
}
