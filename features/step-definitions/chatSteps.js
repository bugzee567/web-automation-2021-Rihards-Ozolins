import { When, Then } from '@cucumber/cucumber'
import {tests} from '../support/tests'

When("I see both users have opened the page and connected to server", function() {
    tests.chatTest.usersLanded()
})

When("I see that both users enter the nickname", function() {
    tests.chatTest.usersEnterNickname()
    
})

When("I see that both users connect to broker", function() {
    tests.chatTest.usersConnectToChat()
})

When("I see that both users see themselves and each other in the Connected Users tab", function() {
    tests.chatTest.usersAreInConnectedList()
})

When("I see that user1 sends any message", function() {
    tests.chatTest.user1SendsMessage()
})

When("I see that user2 receives the sent message", function() {
    tests.chatTest.user2ReceivesMessage()
})

When("I see that user2 sends any message", function() {
    tests.chatTest.user2SendsMessage()
})

When("I see that user1 receives the sent message", function() {
    tests.chatTest.user1ReceivesMessage()
})

Then("I see that both users can disconnect and lose connection", function() {
    tests.chatTest.usersDisconnect()
    browser.pause(2000)
    tests.chatTest.validateDisconnectionMessageUser1()
    tests.chatTest.validateDisconnectionMessageUser2()
})