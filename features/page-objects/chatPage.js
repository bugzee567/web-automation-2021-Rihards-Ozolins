import {Page} from './basePage'

export class ChatPage extends Page {
    getConnectedMessage() {
        return this.browser.$('.text-success')
    }

    getNicknameField() {
        return this.browser.$('#user')
    }
    getConnectButton(){
        return this.browser.$('#connectBtn')
    }

    getYourselfFromConnectedList(){
        return this.browser.$('#usersList > .loggedUser')
    }

    getOtherUserFromConnectedList(){
        return this.browser.$('#usersList > .text-primary')
    }

    getMessageField(){
        return this.browser.$('#sendMessage')
    }

    getReplayButton(){
        return this.browser.$('#replyBtn')
    }

    getMessageInChat(){
        return this.browser.$('#messages > .text-primary')
        
    }

    getDisconnectButton(){
        return this.browser.$('#disconnectBtn')
    }

    getTextInfo(){
        return this.browser.$$('.text-info')
        
    }
    getTextInfoValues(){
        return this.getTextInfo().map(textInfo => textInfo.getText())
    }

    getRoomNameInput() {
        return this.browser.$('.text-info')
    }

    getJoinButton() {
        return this.browser.$('#join-button')
    }

    openPage() {
        this.browser.url('https://demos.mqtt.cool/chat/')
    }
}