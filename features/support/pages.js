import {ChatPage} from '../page-objects/chatPage'

class Pages {
    constructor() {
        this.user1 = {
            chatPage: new ChatPage('user1'),
            //callPage: new CallPage('user1')
        }
        this.user2 = {
            chatPage: new ChatPage('user2'),
            //callPage: new CallPage('user2')
        }
        //this.gamePage = new GamePage()
    }
}

const pages = new Pages()
export {pages}