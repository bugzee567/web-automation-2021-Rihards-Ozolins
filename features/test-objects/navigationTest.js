import {pages} from '../support/pages'

export class NavigationTest {
    openLandingPage() {
        pages.user1.chatPage.openPage()
        pages.user2.chatPage.openPage()
    }
}