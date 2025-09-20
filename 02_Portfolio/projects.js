let
    Projects = document.querySelector('.projects'),
    projectTemplate = document.querySelector('.project-template');
    
let projects = [
    {
        projectName: 'Weather Application',
        imgURL: 'images/weather.png',
        altName: 'Project1',
        link: 'https:/weather-hafizarham.netlify.app'
    },
    {
        projectName: 'SignUp Login Form',
        imgURL: 'images/signup-login.jpeg',
        altName: 'Project2',
        link: 'https://form-hafizarham.netlify.app'
    },
    {
        projectName: 'Netflix Clone',
        imgURL: 'images/netflix.png',
        altName: 'Project3',
        link: 'https://netflixclone-hafizarham.netlify.app'
    },
    {
        projectName: 'Educational Hub',
        imgURL: 'images/eduhub.png',
        altName: 'Project4',
        link: 'https://eduhub-hafizarham.netlify.app'
    },
    {
        projectName: 'Gradients Generator',
        imgURL: 'images/gradients.png',
        altName: 'Project5',
        link: 'https://gradients-hafizarham.netlify.app'
    },
    {
        projectName: 'TODO List',
        imgURL: 'images/todo-list.png',
        altName: 'Project6',
        link: 'https://todolist-hafizarham.netlify.app'
    },
    {
        projectName: 'Arithmetic Calculator',
        imgURL: 'images/calculator.png',
        altName: 'Project7',
        link: 'https://calculator-hafizarham.netlify.app'
    },
    {
        projectName: 'OCloud Clone',
        imgURL: 'images/ocloud.jpeg',
        altName: 'Project8',
        link: 'https://ocloud-hafizarham.netlify.app'
    },
    {
        projectName: 'Parallax Effect',
        imgURL: 'images/parallax.jpeg',
        altName: 'Project9',
        link: 'https://parallax-hafizarham.netlify.app'
    },
    {
        projectName: 'Ball Sliding',
        imgURL: 'images/ballsliding.jpg',
        altName: 'Project10',
        link: 'https://ballsliding-hafizarham.netlify.app'
    },
    {
        projectName: 'KeyBoard Events Determination',
        imgURL: 'images/keyevents.jpg',
        altName: 'Project11',
        link: 'https://keyboardevent-hafizarham.netlify.app'
    },
    {
        projectName: "Newton's Craddle",
        imgURL: 'images/craddle.jpeg',
        altName: 'Project12',
        link: 'https://newtoncradle-hafizarham.netlify.app'
    },
    {
        projectName: 'Digital Clock',
        imgURL: 'images/digital clock.png',
        altName: 'Project13',
        link: 'https://digitalclock-hafizarham.netlify.app'
    },
    {
        projectName: 'Dad Jokes',
        imgURL: 'images/dadjokes.png',
        altName: 'Project14',
        link: 'https://keyboardevent-hafizarham.netlify.app'
    },
    {
        projectName: "Digital Stop Watch",
        imgURL: 'images/stop watch.jpeg',
        altName: 'Project15',
        link: 'https://stopwatch-hafizarham.netlify.app'
    },
    {
        projectName: 'QR Code Generator',
        imgURL: 'images/qrcodegenerator.png',
        altName: 'Project16',
        link: 'https://qrcodegenerator-hafizarham.netlify.app/'
    },
    {
        projectName: 'Color Analysis',
        imgURL: 'images/colordetermination.jpeg',
        altName: 'Project17',
        link: 'https://colordetermine-hafizarham.netlify.app/'
    },
    {
        projectName: "Text To Speech",
        imgURL: 'images/texttospeech.png',
        altName: 'Project18',
        link: 'https://texttospeech-hafizarham.netlify.app'
    },
]

projects.forEach((curProject) => {
    const { projectName, imgURL, altName, link } = curProject;
    let productClone = document.importNode(projectTemplate.content, true);
    productClone.querySelector('img').src = imgURL;
    productClone.querySelector('img').alt = altName;
    productClone.querySelector('.project_name').textContent = projectName;
    productClone.querySelector('a').href = link;

    Projects.append(productClone);
})