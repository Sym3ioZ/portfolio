'use strict'

let burgerCheck

window.onload = (e) => {
    burgerCheck = true
    displayPrez()
}

const loader = document.getElementById('loader')
const mainContent = document.getElementById('mainContent')
const navmenu = document.getElementById('navmenu')

const burger = document.getElementById('burger')
const burgerBarTop = document.getElementById('burgerBarTop')
const burgerBarmiddle = document.getElementById('burgerBarMiddle')
const burgerBarBottom = document.getElementById('burgerBarBottom')
burger.addEventListener('click', burgerToggle)

function burgerToggle() {
    if (burgerCheck == false) {
        burgerBarTop.style.animation = 'burgerTop 300ms ease-out forwards'
        burgerBarBottom.style.animation = 'burgerBottom 300ms ease-out forwards'
        burgerBarmiddle.style.opacity = '0'
        navmenu.style.transform = 'translateX(0)'
        burgerCheck = true
    } else {
        burgerBarTop.style.animation = 'burgerTopOFF 300ms ease-out forwards'
        burgerBarBottom.style.animation =
            'burgerBottomOFF 300ms ease-out forwards'
        burgerBarmiddle.style.opacity = '1'
        navmenu.style.transform = 'translateX(100vh)'
        burgerCheck = false
    }
}

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

const resumeImage = document.getElementById('resumeImage')

prezTab.addEventListener('click', displayPrez)
techsTab.addEventListener('click', displayTechs)
projectsTab.addEventListener('click', displayProjects)
resumeTab.addEventListener('click', displayResume)
contactTab.addEventListener('click', displayContact)
resumeImage.addEventListener('click', zoomResume)

function displayPrez() {
    mainContent.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
    })
    prezBlock.classList.remove('awaiting')
    prezBlock.classList.add('fadeIn')
    prezTab.classList.add('selected')

    if (techsBlock.classList[1] != 'awaiting') {
        techsBlock.classList.remove('fadeIn')
        techsBlock.classList.add('fadeOut')
    }
    if (projectsBlock.classList[1] != 'awaiting') {
        projectsBlock.classList.remove('fadeIn')
        projectsBlock.classList.add('fadeOut')
    }
    if (resumeBlock.classList[1] != 'awaiting') {
        resumeBlock.classList.remove('fadeIn')
        resumeBlock.classList.add('fadeOut')
    }
    if (contactBlock.classList[1] != 'awaiting') {
        contactBlock.classList.remove('fadeIn')
        contactBlock.classList.add('fadeOut')
    }
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
    }, 300)
    burgerToggle()
}

function displayTechs() {
    mainContent.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
    })
    techsBlock.classList.remove('awaiting')
    techsBlock.classList.add('fadeIn')
    techsTab.classList.add('selected')

    if (prezBlock.classList[1] != 'awaiting') {
        prezBlock.classList.remove('fadeIn')
        prezBlock.classList.add('fadeOut')
    }
    if (projectsBlock.classList[1] != 'awaiting') {
        projectsBlock.classList.remove('fadeIn')
        projectsBlock.classList.add('fadeOut')
    }
    if (resumeBlock.classList[1] != 'awaiting') {
        resumeBlock.classList.remove('fadeIn')
        resumeBlock.classList.add('fadeOut')
    }
    if (contactBlock.classList[1] != 'awaiting') {
        contactBlock.classList.remove('fadeIn')
        contactBlock.classList.add('fadeOut')
    }
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
    }, 300)
    burgerToggle()
}

function displayProjects() {
    mainContent.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
    })
    projectsBlock.classList.remove('awaiting')
    projectsBlock.classList.add('fadeIn')
    projectsTab.classList.add('selected')

    if (techsBlock.classList[1] != 'awaiting') {
        techsBlock.classList.remove('fadeIn')
        techsBlock.classList.add('fadeOut')
    }
    if (prezBlock.classList[1] != 'awaiting') {
        prezBlock.classList.remove('fadeIn')
        prezBlock.classList.add('fadeOut')
    }
    if (resumeBlock.classList[1] != 'awaiting') {
        resumeBlock.classList.remove('fadeIn')
        resumeBlock.classList.add('fadeOut')
    }
    if (contactBlock.classList[1] != 'awaiting') {
        contactBlock.classList.remove('fadeIn')
        contactBlock.classList.add('fadeOut')
    }
    techsTab.classList.remove('selected')
    prezTab.classList.remove('selected')
    resumeTab.classList.remove('selected')
    contactTab.classList.remove('selected')
    window.setTimeout(() => {
        techsBlock.classList.remove('fadeOut')
        techsBlock.classList.add('awaiting')
        prezBlock.classList.remove('fadeOut')
        prezBlock.classList.add('awaiting')
        resumeBlock.classList.remove('fadeOut')
        resumeBlock.classList.add('awaiting')
        contactBlock.classList.remove('fadeOut')
        contactBlock.classList.add('awaiting')
    }, 300)
    burgerToggle()
}

function displayResume() {
    mainContent.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
    })
    resumeBlock.classList.remove('awaiting')
    resumeBlock.classList.add('fadeIn')
    resumeTab.classList.add('selected')

    if (techsBlock.classList[1] != 'awaiting') {
        techsBlock.classList.remove('fadeIn')
        techsBlock.classList.add('fadeOut')
    }
    if (projectsBlock.classList[1] != 'awaiting') {
        projectsBlock.classList.remove('fadeIn')
        projectsBlock.classList.add('fadeOut')
    }
    if (prezBlock.classList[1] != 'awaiting') {
        prezBlock.classList.remove('fadeIn')
        prezBlock.classList.add('fadeOut')
    }
    if (contactBlock.classList[1] != 'awaiting') {
        contactBlock.classList.remove('fadeIn')
        contactBlock.classList.add('fadeOut')
    }
    techsTab.classList.remove('selected')
    projectsTab.classList.remove('selected')
    prezTab.classList.remove('selected')
    contactTab.classList.remove('selected')

    window.setTimeout(() => {
        techsBlock.classList.remove('fadeOut')
        techsBlock.classList.add('awaiting')
        projectsBlock.classList.remove('fadeOut')
        projectsBlock.classList.add('awaiting')
        prezBlock.classList.remove('fadeOut')
        prezBlock.classList.add('awaiting')
        contactBlock.classList.remove('fadeOut')
        contactBlock.classList.add('awaiting')
    }, 300)
    burgerToggle()
}

function displayContact() {
    mainContent.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
    })
    contactBlock.classList.remove('awaiting')
    contactBlock.classList.add('fadeIn')
    contactTab.classList.add('selected')

    if (techsBlock.classList[1] != 'awaiting') {
        techsBlock.classList.remove('fadeIn')
        techsBlock.classList.add('fadeOut')
    }
    if (projectsBlock.classList[1] != 'awaiting') {
        projectsBlock.classList.remove('fadeIn')
        projectsBlock.classList.add('fadeOut')
    }
    if (resumeBlock.classList[1] != 'awaiting') {
        resumeBlock.classList.remove('fadeIn')
        resumeBlock.classList.add('fadeOut')
    }
    if (prezBlock.classList[1] != 'awaiting') {
        prezBlock.classList.remove('fadeIn')
        prezBlock.classList.add('fadeOut')
    }
    techsTab.classList.remove('selected')
    projectsTab.classList.remove('selected')
    resumeTab.classList.remove('selected')
    prezTab.classList.remove('selected')
    window.setTimeout(() => {
        techsBlock.classList.remove('fadeOut')
        techsBlock.classList.add('awaiting')
        projectsBlock.classList.remove('fadeOut')
        projectsBlock.classList.add('awaiting')
        resumeBlock.classList.remove('fadeOut')
        resumeBlock.classList.add('awaiting')
        prezBlock.classList.remove('fadeOut')
        prezBlock.classList.add('awaiting')
    }, 300)
    burgerToggle()
}

function zoomResume() {
    if (window.innerWidth > 768) {
        resumeImage.classList.toggle('zoomResume')
        if (resumeImage.classList[0] == 'zoomResume') {
            resumeImage.setAttribute('title', 'Cliquer pour réduire')
        } else {
            resumeImage.setAttribute('title', 'Cliquer pour agrandir')
        }
    }
}
