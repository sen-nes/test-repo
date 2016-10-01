document.addEventListener("DOMContentLoaded", function () {
    format();
});

function format() {
    for (var i = 278; i <= 278; i++) {
        var chapter = document.getElementById("chapter" + i);
        var anchors = chapter.getElementsByTagName("p");
        anchors[0].remove();
        if (checkChapter(i)) {
            if (i >= 316 && i <= 421) {
                anchors[anchors.length - 2].remove();
            }
            anchors[anchors.length - 1].remove();
        } else {
            var spans = chapter.getElementsByTagName("span");
            spans[spans.length - 1].remove();
            chapter.getElementsByTagName("a")[0].remove();
        }

        if (chapter.getElementsByClassName("footnotes").length == 0) {
            var hrs = chapter.getElementsByTagName("hr")[1].remove();
        }

    }
    console.log("Done");
}

function checkChapter(number) {
    switch (true) {
        case (number > 1 && number < 10):
        case (number > 10 && number < 23):
        case (number > 23 && number < 31):
        case (number > 31 && number < 42):
        case (number > 42 && number < 106):
        case (number > 106 && number < 109):
        case (number == 110):
            return false;

        default:
            return true;
    }
}