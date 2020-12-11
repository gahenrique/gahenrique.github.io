function displayProjects() {
    const section = document.getElementById("projects");

    var langIndex = 0
    if(lang == "pt") {
        langIndex = 1
    }

    var row = createCustomElement("div", "row mb-3 d-flex flex-row justify-content-between");
    for (var i = 0; i < projects.length; i++) {
        if(i % 2 == 0) {
            row = createCustomElement("div", "row mb-3 d-flex flex-row justify-content-between")
        }
        createProjectsCards(projects[i][langIndex], row);
        section.appendChild(row);
    }
}

function createProjectsCards(project, row) {
    const cardWrapper = createCustomElement("div", "col-xs-12 col-md-6 mb-3 mb-xs-5");
    const cardBackground = createCustomElement("div", "card height100 width100 d-flex flex-column justify-content-between px-3 pb-3");
    cardWrapper.appendChild(cardBackground);
    const imageTextDiv = createCustomElement("div", "row p-3 align-items-start");

    const image = createProjectImage(project);

    const titleSubtitleDiv = createCustomElement("div", "col-9")
    const subtitle = createSubtitle(project);
    const title = createTitle(project, "noPadding", "h3");

    imageTextDiv.appendChild(image);
    titleSubtitleDiv.appendChild(title);
    titleSubtitleDiv.appendChild(subtitle);
    imageTextDiv.appendChild(titleSubtitleDiv);

    cardBackground.appendChild(imageTextDiv)

    const description = createDescription(project)
    cardBackground.appendChild(description)

    const linkBox = createElement("div");
    const technologies = createTextGroup("Technologies: ", project.technologies);
    linkBox.appendChild(technologies);

    if (!!project.appStoreLink) {
        const appStore = createImageLink(AppStoreImage(), project.appStoreLink, "App Store");
        linkBox.appendChild(appStore);
    }
    if (!!project.gitHubLink) {
        const github = createImageLink(GithubImage(), project.gitHubLink, "GitHub", !!project.appStoreLink);
        linkBox.appendChild(github);
    }
    cardBackground.appendChild(linkBox);

    row.appendChild(cardWrapper);
}

function createProjectImage(project) {
    const img = createCustomElement("img", "col-3 noPadding");
    img.src = project.imagePath;
    img.alt = project.name + " Icon";
    return img
}

function createSubtitle(project) {
    const text = createElement("p");
    text.innerHTML = project.subtitle
    return text
}