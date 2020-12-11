function displayHighlight() {
    const section = document.getElementById("highlights");

    var langIndex = 0
    if(lang == "pt") {
        langIndex = 1
    }

    for (var i = 0; i < highlights.length; i++) {
        const row = createCustomElement("div", "row mb-5");
        createHighlightCard(highlights[i][langIndex], row);
        section.appendChild(row);
    }
}

function createHighlightCard(highlight, row) {
    const imageBox = createCustomElement("div", "col-xs-12 col-lg-6 mb-2")
    const image = createHighlightImage(highlight);
    imageBox.appendChild(image);

    const textContainer = createCustomElement("div", "col-xs-12 col-lg-6 mb-2 d-flex flex-column justify-content-between");
    const textBox = createElement("div");

    const title = createTitle(highlight);
    textBox.appendChild(title);

    const desc = createDescription(highlight);
    textBox.appendChild(desc);

    const linkBox = createElement("div");
    var tecString = "Technologies: "
    if (lang == "pt") {
        tecString = "Tecnologias: "
    }
    const technologies = createTextGroup(tecString, highlight.technologies);
    linkBox.appendChild(technologies);

    if (!!highlight.appStoreLink) {
        const appStore = createImageLink(AppStoreImage(), highlight.appStoreLink, "App Store");
        linkBox.appendChild(appStore);
    }
    if (!!highlight.gitHubLink) {
        const github = createImageLink(GithubImage(), highlight.gitHubLink, "GitHub", !!highlight.appStoreLink);
        linkBox.appendChild(github);
    }
    textContainer.appendChild(textBox);
    textContainer.appendChild(linkBox);

    row.appendChild(imageBox);
    row.appendChild(textContainer);
}

function createHighlightImage(highlight) {
    const img = createCustomElement("img", "width100");
    img.src = highlight.imagePath;
    img.alt = highlight.name + " Icon";
    return img
}