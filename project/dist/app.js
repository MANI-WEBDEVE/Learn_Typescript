"use strict";
const getUsername = document.querySelector('#user');
const formSubmit = document.querySelector('#form');
const mainContainer = document.querySelector('.main-container');
async function myCustomeFetcher(url, option) {
    const response = await fetch(url, option);
    if (!response.ok) {
        throw new Error(`Network response was not ok - status: ${response.status}`);
    }
    const data = await response.json();
    // console.log(data)
    return data;
}
function showResultUI(singleUser) {
    const { avatar_url, login, id, url, location } = singleUser;
    if (mainContainer) {
        mainContainer.insertAdjacentHTML("beforeend", `<div class="card" >
                <img src="${avatar_url}" alt="${login}" />
                <p>Login: ${login}</p>
                <p>ID: ${id}</p>
                <p>URL: <a href="${url}">${url}</a></p>
                <p>Location: ${location}</p>
            </div>`);
    }
}
const fetchUserData = (url) => {
    myCustomeFetcher(url, {}).then((userInfo) => {
        for (const singleUser of userInfo) {
            showResultUI(singleUser);
            console.log(singleUser.login);
        }
    });
};
//  default function call 
fetchUserData('https://api.github.com///users');
