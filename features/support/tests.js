import {NavigationTest} from '../test-objects/navigationTest'
import {ChatTest} from '../test-objects/chatTest'
import {pages} from './pages'

export class Tests {
    constructor(pages) {
        this.navigationTest = new NavigationTest(pages)
        this.chatTest = new ChatTest(pages)
    }
}

const tests = new Tests(pages)
export {tests}