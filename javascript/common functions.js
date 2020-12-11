function createTitle(highlight, extraClasses, tag = "h2") {
    var className = "mb-3"
    if (!!extraClasses) {
        className += " " + extraClasses
    }
    const text = createCustomElement(tag, className);
    text.innerHTML = highlight.name;
    return text
}

function createDescription(highlight) {
    const text = createElement("p");
    text.innerHTML = highlight.description;
    return text
}

function createTextGroup(title, body) {
    const group = createCustomElement("div", "text-group mb-2");

    const titleElement = createCustomElement("span", "font-weight-bold");
    titleElement.innerHTML = title;

    const bodyElement = createElement("span");
    bodyElement.innerHTML = body;

    group.appendChild(titleElement);
    group.appendChild(bodyElement);
    return group;
}

function createImageLink(path, url, label, spacing = false) {
    var className = "";
    if (spacing) {
        className += " ml-2";
    }

    const link = createCustomElement("a", className)
    link.href = url;
    link.target = "_blank";

    const img = createCustomElement("img", "availableOn");
    img.src = path;
    img.alt = label;

    link.appendChild(img);

    return link;
}

function createElement(elementName) {
    const element = document.createElement(elementName);
    return element;
}

function createCustomElement(elementName, className) {
    const element = document.createElement(elementName);
    element.className = className;
    return element;
}

function AppStoreImage() {
    if(lang == "pt") {
        return "assets/appStorePT.png"
    } else {
        return "assets/appStoreEN.png"
    }
}

function GithubImage() {
    if(lang == "pt") {
        return "assets/githubPT.png"
    } else {
        return "assets/githubEN.png"
    }
}