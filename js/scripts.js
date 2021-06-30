import { senators } from './senators.js'
import { representatives } from './representatives.js'

function peopleDiv() {
    //remove the current people div and to remove all the current elements and create a new one
   document.querySelector('#people').remove();
}

function displaySenator() {
    peopleDiv();
    //adjust data-selected in buttons for pathfinding
    const people = document.createElement('div');
    people.id = 'people';
    document.querySelector('#senate').setAttribute("data-selected", "yes")
    document.querySelector('#house').setAttribute("data-selected", "no");
    document.querySelector('#all').setAttribute("data-selected", "no")
    document.querySelector('main').append(people);
    //search through each senator, get their id and full name from data
    print(senators, people, 'none');
    document.querySelector('#sortBy').value = '';
}
function displayHouse() {
    //same as senators, but with representatives
    peopleDiv();
    const people = document.createElement('div');
    people.id = 'people';
    document.querySelector('main').append(people);
    document.querySelector('#senate').setAttribute("data-selected", "no")
    document.querySelector('#house').setAttribute("data-selected", "yes");
    document.querySelector('#all').setAttribute("data-selected", "no")
    print(representatives, people, 'none');
    document.querySelector('#sortBy').value = '';
}
function all() {
    //senators then representatives
    peopleDiv();
    const people = document.createElement('div');
    people.id = 'people';
    document.querySelector('#senate').setAttribute("data-selected", "no")
    document.querySelector('#house').setAttribute("data-selected", "no");
    document.querySelector('#all').setAttribute("data-selected", "yes")
    document.querySelector('main').append(people);
    print(senators, people, 'none');
    print(representatives, people, 'none');
    document.querySelector('#sortBy').value = '';
}
function print(group, people, partySort) {
    for (let i = 0; i < group.length; i++) {
        const id = group[i].id;
        const full_name = `${group[i].first_name} ${group[i].last_name}`;
        const photo = `images/${id}.jpg`;
        const name = document.createTextNode(full_name);
        const party = group[i].party;
        const state = group[i].state;
        const div = document.createElement('div');
        const img = document.createElement('img');
        const stateParty = document.createTextNode(`${party}: ${state}`);
        if (party === 'D') {
            div.style.backgroundColor = "rgb(59, 59, 255, .5)";
            div.style.borderColor = "rgb(59, 59, 255, .5)";
        } else if (party === 'R') {
            div.style.backgroundColor = "rgb(255, 59, 59, .5)";
            div.style.borderColor = "rgb(255, 59, 59, .5)";
        }
        img.setAttribute("src", photo);
        if (partySort !== 'none') {
            if (party === partySort) {
                div.append(name);
                div.append(img);
                div.append(stateParty);        
                div.classList.add("rep");
                people.append(div);
                continue;
            } else {
                continue;
            }
        }
        div.append(name);
        div.append(img);
        div.append(stateParty);        
        div.classList.add("rep");
        people.append(div);
    }
}
function sortBy() {
    const sort = document.querySelector('#sortBy').value; //which option to sort is selected
    const senButton = document.querySelector('#senate').dataset.selected;
    const repButton = document.querySelector('#house').dataset.selected;
    const allButton = document.querySelector('#all').dataset.selected;
    peopleDiv();
    const people = document.createElement('div');
    document.querySelector('main').append(people);
    people.id = 'people';
    if (sort === 'R' || sort === 'D' || sort === 'ID') {
        if (senButton === "yes") {
            print(senators, people, sort);
        }
        else if (repButton === "yes") {
            print(representatives, people, sort);
        }
        else {
            print(senators, people, sort);
            print(representatives, people, sort);
        }
    } else if (sort === 'all') {
        if (senButton === "yes") {
            print(senators, people, 'none');
        }
        else if (repButton === "yes") {
            print(representatives, people, 'none');
        }
        else {
            print(senators, people, sort);
            print(representatives, people, 'none');
        }
    } else if (sort === "seniority") {
        if (senButton === "yes") {
            let senSort = senators.slice().sort((a, b) => {return b.seniority - a.seniority});
            print(senSort, people, 'none');
        }
        else if (repButton === "yes") {
            let repSort = representatives.slice().sort((a, b) => {return b.seniority - a.seniority});
            print(repSort, people, 'none');
        }
        else {
            let senSort = senators.slice().sort((a, b) => {return b.seniority - a.seniority});
            let repSort = representatives.slice().sort((a, b) => {return b.seniority - a.seniority});
            print(senSort, people, 'none');
            print(repSort, people, 'none');
        }
    }
}
function displayFacts(group) {
    const age = group[i].age;
    const seniority = group[i].seniority;
}
document.body.onload = displaySenator;
document.querySelector('#senate').addEventListener('click', displaySenator);
document.querySelector('#house').addEventListener('click', displayHouse);
document.querySelector('#all').addEventListener('click', all);
document.querySelector('#sortBy').addEventListener('change', sortBy);