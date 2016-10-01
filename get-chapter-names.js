document.addEventListener("DOMContentLoaded", function () {
    var chapters = getChapterNames();
    document.body.innerHTML = chapters;
});

function getChapterNames() {
    var chapters = "[";

    for (var i = 1; i <= 422; i++) {
        var chapter = document.getElementById("chapter" + i);
        var name = chapter.getElementsByTagName("p")[0].innerText;

        chapters += "\"" + name + "\", "
    }

    chapters += "]"
    return chapters;
}