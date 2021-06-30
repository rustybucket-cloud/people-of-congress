import { senators } from './senators.js'
import { representatives } from './representatives.js'

function displaySenator() {
    document.querySelector('#people').remove();
    const people = document.createElement('div');
    people.id = 'people';
    document.querySelector('main').append(people);
    for (let i = 0; i < senators.length; i++) {
        const id = senators[i].id;
        const full_name = `${senators[i].first_name} ${senators[i].last_name}`;
        const photo = `images/${id}.jpg`;
        const name = document.createTextNode(full_name);
        const div = document.createElement('div');
        const img = document.createElement('img');
        img.setAttribute("src", photo);
        div.append(name);
        div.append(img);
        div.classList.add("rep");
        people.append(div);
    }
}
function displayHouse() {
    document.querySelector('#people').remove();
    const people = document.createElement('div');
    people.id = 'people';
    document.querySelector('main').append(people);
    for (let i = 0; i < representatives.length; i++) {
        const id = representatives[i].id;
        const full_name = `${representatives[i].first_name} ${representatives[i].last_name}`;
        const photo = `images/${id}.jpg`;
        const name = document.createTextNode(full_name);
        const div = document.createElement('div');
        const img = document.createElement('img');
        img.setAttribute("src", photo);
        div.append(name);
        div.append(img);
        div.classList.add("rep");
        people.append(div);
    }
}
document.body.onload = displaySenator;
document.querySelector('#senate').addEventListener('click', displaySenator);
document.querySelector('#house').addEventListener('click', displayHouse)