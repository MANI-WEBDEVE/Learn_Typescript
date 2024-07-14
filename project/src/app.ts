const getUsername = document.querySelector('#user') as HTMLInputElement

const formSubmit = document.querySelector('#form') as HTMLFormElement

const mainContainer = document.querySelector('.main-container') as HTMLElement

//* so let get information this object like

interface UserData {
    id: number;
    login: string;
    avatar_url: string;
    location: string;
    url: string;
}

async function myCustomeFetcher<T>(url: string, option?: RequestInit): Promise<T> {
    const response = await fetch(url, option)

    if (!response.ok) {
        throw new Error(
            `Network response was not ok - status: ${response.status}`
        )
    }

    const data = await response.json()
    // console.log(data)
    return data
}

function showResultUI(singleUser: UserData) {
    const { avatar_url, login, id, url, location } = singleUser
    if (mainContainer) {
        mainContainer.insertAdjacentHTML(
            "beforeend",
            `<div class="card" >
                <img src="${avatar_url}" alt="${login}" />
                <p>Login: ${login}</p>
                <p>ID: ${id}</p>
                <p>URL: <a href="${url}">${url}</a></p>
                <p>Location: ${location}</p>
            </div>`
        );
    }
}


const fetchUserData = (url: string) => {
    myCustomeFetcher<UserData[]>(url, {}).then((userInfo) => {
        for (const singleUser of userInfo) {
            showResultUI(singleUser)
            console.log(singleUser.login)
        }
    })
}





//  default function call 
fetchUserData('https://api.github.com///users')


