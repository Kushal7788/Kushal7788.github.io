function getTabElements() {
    const elements = {
        home: document.getElementById("home"),
        about: document.getElementById("about"),
        education: document.getElementById("education"),
        projects: document.getElementById("projects")
    }
    return elements
}

function displayHome() {
    elements = getTabElements();
    for (ele in elements) {
        elements[ele].style.display = "none";
    }
    elements.home.style.display = "block";
}

function displayAbout() {
    elements = getTabElements();
    for (ele in elements) {
        elements[ele].style.display = "none";
    }
    elements.about.style.display = "block";
}

function displayEducation() {
    elements = getTabElements();
    for (ele in elements) {
        elements[ele].style.display = "none";
    }
    elements.education.style.display = "block";
}

function displayProjects() {
    elements = getTabElements();
    for (ele in elements) {
        elements[ele].style.display = "none";
    }
    elements.projects.style.display = "block";
}

function starter() {
    getTime();
}

function getTime() {
    dateEle = document.getElementById("dateTime")

    setInterval(() => {
        let date = new Date().toString().split(" ");
        let str = "";
        for (let i = 0; i < 5; i++)
            str += date[i] + " ";
        dateEle.innerHTML = str;
    }, 950);
}