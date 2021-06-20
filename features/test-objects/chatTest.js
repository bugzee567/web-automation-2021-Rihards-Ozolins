import {pages} from '../support/pages'
import faker from 'faker'

var user1Nickname = faker.name.firstName()
var user2Nickname = faker.name.firstName()

var user1RandomMessage = faker.lorem.sentence()
var user2RandomMessage = faker.lorem.sentence()

export class ChatTest {
    usersLanded(){
        //browser.setWindowSize(1550,800)
        browser.pause(2000)
        pages.user1.chatPage.getConnectedMessage().waitForDisplayed()
        pages.user2.chatPage.getConnectedMessage().waitForDisplayed()
    }

    usersEnterNickname(){
        pages.user1.chatPage.getNicknameField().click()
        pages.user1.chatPage.getNicknameField().addValue(user1Nickname)
        pages.user2.chatPage.getNicknameField().click()
        pages.user2.chatPage.getNicknameField().addValue(user2Nickname)
    }

    usersConnectToChat(){
        pages.user1.chatPage.getConnectButton().click({timeout: 5000})
        pages.user2.chatPage.getConnectButton().click({timeout: 5000})
    }

    usersAreInConnectedList(){
        pages.user1.chatPage.getYourselfFromConnectedList().waitForExist({ timeout: 5000 })
        pages.user1.chatPage.getOtherUserFromConnectedList().waitForExist({ timeout: 5000 })
        pages.user2.chatPage.getYourselfFromConnectedList().waitForExist({ timeout: 5000 })
        pages.user2.chatPage.getOtherUserFromConnectedList().waitForExist({ timeout: 5000 })
    }

    user1SendsMessage(){
        pages.user1.chatPage.getMessageField().addValue(user1RandomMessage)
        pages.user1.chatPage.getReplayButton().click()
    }

    user2ReceivesMessage(){
        pages.user2.chatPage.getMessageInChat()
    }

    user2SendsMessage(){
        pages.user2.chatPage.getMessageField().addValue(user2RandomMessage)
        pages.user2.chatPage.getReplayButton().click()
    }

    user1ReceivesMessage(){
        pages.user1.chatPage.getMessageInChat()
    }

    usersDisconnect(){
        pages.user1.chatPage.getDisconnectButton().click({timeout: 2000})
        pages.user1.chatPage.getConnectButton().waitForDisplayed({timeout: 5000})
        pages.user2.chatPage.getDisconnectButton().click({timeout: 2000})
        pages.user2.chatPage.getConnectButton().waitForDisplayed({timeout: 5000})
    }

    validateDisconnectionMessageUser1() {
        const infoMessagesUser1 = pages.user1.chatPage.getTextInfoValues()
        const infoMessageFoundUser1 = infoMessagesUser1.find(message => message ==='Connection to tcp://broker.mqtt.cool:1883 lost')
        expect(infoMessageFoundUser1.length).toBeGreaterThanOrEqual(1)
    }

    validateDisconnectionMessageUser2() {
        const infoMessagesUser2 = pages.user2.chatPage.getTextInfoValues()
        let infoMessageFoundUser2 = infoMessagesUser2.find(message => message === 'Connection to tcp://broker.mqtt.cool:1883 lost')
        expect(infoMessageFoundUser2.length).toBeGreaterThanOrEqual(1)
    }







}