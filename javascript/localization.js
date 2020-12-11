var lang = navigator.language.split('-')[0];

$(document).ready(() => {
    var langIndex = 0;
    if(lang == "pt") {
        langIndex = 1;
    }

    document.getElementById("navAboutMe").innerText = strings["_aboutMe"][langIndex];
    document.getElementById("navHighlights").innerText = strings["_highlights"][langIndex];
    document.getElementById("navProjects").innerText = strings["_projects"][langIndex];
    document.getElementById("introTitle").innerText = strings["_introTitle"][langIndex];
    document.getElementById("intro-p1").innerText = strings["_introP1"][langIndex];
    document.getElementById("intro-p2").innerText = strings["_introP2"][langIndex];
    document.getElementById("intro-p3").innerText = strings["_introP3"][langIndex];
    document.getElementById("intro-p4").innerText = strings["_introP4"][langIndex];
    document.getElementById("highlightTitle").innerHTML = strings["_highlights"][langIndex];
    document.getElementById("projectsTitle").innerHTML = strings["_projects"][langIndex];
})

const strings = {
    _aboutMe: [
        "Sobre mim",
        "Sobre mim"
    ],
    _highlights: [
        "Destaque",
        "Destaque"
    ],
    _projects: [
        "Projetos",
        "Projetos"
    ],
    _introTitle: [
        "Olá!",
        "Olá!"
    ],
    _introP1: [
        // "I'm a Software Engineer who loves what I do. At the begining of 2020 I had the opportunity of being part of the Apple Developer Academy | Mackenzie and change completly my professional carreer.",
        "Sou um Engenheiro de Software muito dedicado, engajado e gosto muito do que faço. No início de 2020 recebi a grande oportunidade de fazer parte da Apple Developer Academy | Mackenzie e mudar completamente minha carreira profissional.",
        "Sou um Engenheiro de Software muito dedicado, engajado e gosto muito do que faço. No início de 2020 recebi a grande oportunidade de fazer parte da Apple Developer Academy | Mackenzie e mudar completamente minha carreira profissional."
    ],
    _introP2: [
        // "At the Academy I've participated of many interesting projets that brought me great experiences as much in code as in another habilities required to realise a project, below I listed some of the projects I've contributed with the development.",
        "Na Academy participei de projetos muito interessantes que trouxeram grandes experiências tanto em código quanto em outras habilidades necessárias para se tocar um projeto, abaixo listei alguns dos projetos que contribuí com o desenvolvimento.",
        "Na Academy participei de projetos muito interessantes que trouxeram grandes experiências tanto em código quanto em outras habilidades necessárias para se tocar um projeto, abaixo listei alguns dos projetos que contribuí com o desenvolvimento."
    ],
    _introP3: [
        "Acredito que sou uma pessoa muito fácil de se trabalhar, sempre muito prestativo e disposto a aprender, pode contar comigo a qualquer hora!",
        "Acredito que sou uma pessoa muito fácil de se trabalhar, sempre muito prestativo e disposto a aprender, pode contar comigo a qualquer hora!"
    ],
    _introP4: [
        "Se deseja saber mais sobre mim ou até mesmo ter uma conversa, pode me contatar em qualquer uma das redes abaixo.",
        "Se deseja saber mais sobre mim ou até mesmo ter uma conversa, pode me contatar em qualquer uma das redes abaixo."
    ]
}