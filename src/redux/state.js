
 
 
 
  let rerenderTree = () => {
        console.log("State changed")
 }

let state = {
    profilePage: {
        massivPosta: [
            { id: 1, messageposta: 'Это четвертый пост', likesCount: 12 },
            { id: 2, messageposta: 'Привет, как ты?', likesCount: 13 },
            { id: 3, messageposta: 'Ляляляляля', likesCount: 14 },
            { id: 4, messageposta: 'Это мой первый пост', likesCount: 15 }
        ],
        newPostText: 'Текст для Ареа'

    },
    messagesPage: {
        massivTexta: [
            { id: 1, text: 'Привет' },
            { id: 2, text: 'Дарова' },
            { id: 3, text: 'Как дела?' },
            { id: 4, text: 'Всё хорошо, у тебя как?' }
        ],
        massivSobesednikov: [
            { id: 1, name: 'Stasyan' },
            { id: 2, name: 'Masha' },
            { id: 3, name: 'Petya' }
        ]
    },
    friendsPage: {
        massivFriends: [
            { id: 1, name: 'Андрей' },
            { id: 2, name: 'Вася' },
            { id: 3, name: 'Света' }
        ]
    }
}

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        messageposta: postMessage,
        likesCount: 0
    };
    state.profilePage.massivPosta.push(newPost);
    
    rerenderTree(state);
}

export let newTextArea = (napechataniiUserom) => {
    state.profilePage.newPostText = napechataniiUserom;
    rerenderTree(state);
}


export const subscribe = (observer) => {
    rerenderTree = observer;
}

export default state; 