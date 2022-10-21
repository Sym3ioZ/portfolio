'use strict'

const loader = document.getElementById('loader')

const prezBlock = document.getElementById('prezBlock')
const prezTab = document.getElementById('prezTab')
const techsBlock = document.getElementById('techsBlock')
const techsTab = document.getElementById('techsTab')
const projectsBlock = document.getElementById('projectsBlock')
const projectsTab = document.getElementById('projectsTab')
const resumeBlock = document.getElementById('resumeBlock')
const resumeTab = document.getElementById('resumeTab')
const contactBlock = document.getElementById('contactBlock')
const contactTab = document.getElementById('contactTab')

prezTab.addEventListener('click', displayPrez)
techsTab.addEventListener('click', displayTechs)
// projectsTab.addEventListener('click', displayProjects)
// resumeTab.addEventListener('click', displayResume)
// contactTab.addEventListener('click', displayContact)

function displayPrez() {
    prezBlock.classList.remove('awaiting')
    prezBlock.classList.add('fadeIn')
    prezTab.classList.add('selected')

    techsBlock.classList.remove('fadeIn')
    techsBlock.classList.add('fadeOut')
    projectsBlock.classList.remove('fadeIn')
    projectsBlock.classList.add('fadeOut')
    resumeBlock.classList.remove('fadeIn')
    resumeBlock.classList.add('fadeOut')
    contactBlock.classList.remove('fadeIn')
    contactBlock.classList.add('fadeOut')
    techsTab.classList.remove('selected')
    projectsTab.classList.remove('selected')
    resumeTab.classList.remove('selected')
    contactTab.classList.remove('selected')
    window.setTimeout(() => {
        techsBlock.classList.remove('fadeOut')
        techsBlock.classList.add('awaiting')
        projectsBlock.classList.remove('fadeOut')
        projectsBlock.classList.add('awaiting')
        resumeBlock.classList.remove('fadeOut')
        resumeBlock.classList.add('awaiting')
        contactBlock.classList.remove('fadeOut')
        contactBlock.classList.add('awaiting')
    }, 100)
}

function displayTechs() {
    techsBlock.classList.remove('awaiting')
    techsBlock.classList.add('fadeIn')
    techsTab.classList.add('selected')

    prezBlock.classList.remove('fadeIn')
    prezBlock.classList.add('fadeOut')
    projectsBlock.classList.remove('fadeIn')
    projectsBlock.classList.add('fadeOut')
    resumeBlock.classList.remove('fadeIn')
    resumeBlock.classList.add('fadeOut')
    contactBlock.classList.remove('fadeIn')
    contactBlock.classList.add('fadeOut')
    prezTab.classList.remove('selected')
    projectsTab.classList.remove('selected')
    resumeTab.classList.remove('selected')
    contactTab.classList.remove('selected')
    window.setTimeout(() => {
        prezBlock.classList.remove('fadeOut')
        prezBlock.classList.add('awaiting')
        projectsBlock.classList.remove('fadeOut')
        projectsBlock.classList.add('awaiting')
        resumeBlock.classList.remove('fadeOut')
        resumeBlock.classList.add('awaiting')
        contactBlock.classList.remove('fadeOut')
        contactBlock.classList.add('awaiting')
    }, 100)
}

// function displayTechs() {
//     prezBlock.classList.remove('fadeIn')
//     prezBlock.classList.add('fadeOut')
//     window.setTimeout(() => {
//         prezBlock.classList.remove('fadeOut')
//         prezBlock.classList.add('awaiting')
//     }, 350)
//     prezTab.classList.remove('selected')
//     techsBlock.setAttribute('style', 'display: block')
//     techsTab.classList.add('selected')
//     projectsBlock.setAttribute('style', 'display: none')
//     projectsTab.classList.remove('selected')
//     resumeBlock.setAttribute('style', 'display: none')
//     resumeTab.classList.remove('selected')
//     contactBlock.setAttribute('style', 'display: none')
//     contactTab.classList.remove('selected')
// }

// function displayProjects() {
//     prezBlock.setAttribute('style', 'display: none')
//     prezTab.classList.remove('selected')
//     techsBlock.setAttribute('style', 'display: none')
//     techsTab.classList.remove('selected')
//     projectsBlock.setAttribute('style', 'display: block')
//     projectsTab.classList.add('selected')
//     resumeBlock.setAttribute('style', 'display: none')
//     resumeTab.classList.remove('selected')
//     contactBlock.setAttribute('style', 'display: none')
//     contactTab.classList.remove('selected')
// }

// function displayResume() {
//     prezBlock.setAttribute('style', 'display: none')
//     prezTab.classList.remove('selected')
//     techsBlock.setAttribute('style', 'display: none')
//     techsTab.classList.remove('selected')
//     projectsBlock.setAttribute('style', 'display: none')
//     projectsTab.classList.remove('selected')
//     resumeBlock.setAttribute('style', 'display: block')
//     resumeTab.classList.add('selected')
//     contactBlock.setAttribute('style', 'display: none')
//     contactTab.classList.remove('selected')
// }

// function displayContact() {
//     prezBlock.setAttribute('style', 'display: none')
//     prezTab.classList.remove('selected')
//     techsBlock.setAttribute('style', 'display: none')
//     techsTab.classList.remove('selected')
//     projectsBlock.setAttribute('style', 'display: none')
//     projectsTab.classList.remove('selected')
//     resumeBlock.setAttribute('style', 'display: none')
//     resumeTab.classList.remove('selected')
//     contactBlock.setAttribute('style', 'display: block')
//     contactTab.classList.add('selected')
// }
