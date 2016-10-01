var newDoc = document.implementation.createHTMLDocument();
var container = newDoc.createElement("div");
container.setAttribute("id", "chapters");
newDoc.body.appendChild(container);


function generateLinks() {
    var links = [];
    var baseLink = "http://www.wuxiaworld.com/tdg-index/tdg-chapter-"

    for (var i = 404; i <= 422; i++) {
        links[i - 404] = baseLink + i + "/";
    }

    return links;
}

function downloadChapters() {
    var links = generateLinks();
    for (var i = 0; i < links.length; i++) {
        var chapter = downloadChapter(links[i]);
        var chapterDiv = createChapterDiv(chapter, i + 404);
        newDoc.getElementById("chapters").appendChild(chapterDiv);

        console.log("downloadChapters (" + (((i + 1) / (422 - 403)) * 100).toFixed(2) + " %): chapter " + (i + 404) + " downloaded.");
    }

    document.body = newDoc.body;
}

function downloadChapter(chapterURL) {
    var request = new XMLHttpRequest();
    var chapterHtml = "";
    var chapterDoc;
    var chapter = "";
    var parser = new DOMParser();

    request.open("GET", chapterURL, false);
    request.send();

    chapterHtml = request.responseText;
    chapterDoc = parser.parseFromString(chapterHtml, "text/html");
    chapter = chapterDoc.getElementsByTagName("hr")[0].parentNode;

    return chapter;
}

function createChapterDiv(chapter, count) {
    var chapterDiv = newDoc.createElement("div");
    chapterDiv.setAttribute("id", "chapter" + count);
    chapterDiv.appendChild(chapter);

    return chapterDiv;
}