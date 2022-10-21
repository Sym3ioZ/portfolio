'use strict'

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
projectsTab.addEventListener('click', displayProjects)
resumeTab.addEventListener('click', displayResume)
contactTab.addEventListener('click', displayContact)

function displayPrez() {
    prezBlock.setAttribute('style', 'display: block')
    prezTab.classList.add('selected')
    techsBlock.setAttribute('style', 'display: none')
    techsTab.classList.remove('selected')
    projectsBlock.setAttribute('style', 'display: none')
    projectsTab.classList.remove('selected')
    resumeBlock.setAttribute('style', 'display: none')
    resumeTab.classList.remove('selected')
    contactBlock.setAttribute('style', 'display: none')
    contactTab.classList.remove('selected')
}

function displayTechs() {
    prezBlock.setAttribute('style', 'display: none')
    prezTab.classList.remove('selected')
    techsBlock.setAttribute('style', 'display: block')
    techsTab.classList.add('selected')
    projectsBlock.setAttribute('style', 'display: none')
    projectsTab.classList.remove('selected')
    resumeBlock.setAttribute('style', 'display: none')
    resumeTab.classList.remove('selected')
    contactBlock.setAttribute('style', 'display: none')
    contactTab.classList.remove('selected')
}

function displayProjects() {
    prezBlock.setAttribute('style', 'display: none')
    prezTab.classList.remove('selected')
    techsBlock.setAttribute('style', 'display: none')
    techsTab.classList.remove('selected')
    projectsBlock.setAttribute('style', 'display: block')
    projectsTab.classList.add('selected')
    resumeBlock.setAttribute('style', 'display: none')
    resumeTab.classList.remove('selected')
    contactBlock.setAttribute('style', 'display: none')
    contactTab.classList.remove('selected')
}

function displayResume() {
    prezBlock.setAttribute('style', 'display: none')
    prezTab.classList.remove('selected')
    techsBlock.setAttribute('style', 'display: none')
    techsTab.classList.remove('selected')
    projectsBlock.setAttribute('style', 'display: none')
    projectsTab.classList.remove('selected')
    resumeBlock.setAttribute('style', 'display: block')
    resumeTab.classList.add('selected')
    contactBlock.setAttribute('style', 'display: none')
    contactTab.classList.remove('selected')
}

function displayContact() {
    prezBlock.setAttribute('style', 'display: none')
    prezTab.classList.remove('selected')
    techsBlock.setAttribute('style', 'display: none')
    techsTab.classList.remove('selected')
    projectsBlock.setAttribute('style', 'display: none')
    projectsTab.classList.remove('selected')
    resumeBlock.setAttribute('style', 'display: none')
    resumeTab.classList.remove('selected')
    contactBlock.setAttribute('style', 'display: block')
    contactTab.classList.add('selected')
}
