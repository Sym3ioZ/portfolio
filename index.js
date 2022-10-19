'use strict'

const prezBlock = document.getElementById('prezBlock')
const prezTab = document.getElementById('prezTab')

const techsBlock = document.getElementById('techsBlock')
const techsTab = document.getElementById('techsTab')

prezTab.addEventListener('click', displayPrez)
techsTab.addEventListener('click', displayTechs)

function displayPrez() {
    prezBlock.setAttribute('style', 'display: block')
    techsBlock.setAttribute('style', 'display: none')
}

function displayTechs() {
    prezBlock.setAttribute('style', 'display: none')
    techsBlock.setAttribute('style', 'display: block')
}
