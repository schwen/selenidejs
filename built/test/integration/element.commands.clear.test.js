"use strict";
// Copyright 2018 Knowledge Expert SA
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("./base");
const lib_1 = require("../../lib");
/* short reminder of test helpers, that are not part of SelenideJs API;)
 * driver = common well known Selenium WebDriver
 * webelement('selector') = driver.findElement(By.css('selector'))
 */
const something = async (element) => { };
describe('Element.* commands: clear', () => {
    it('clears value, on element once it is present in DOM and visible', async () => {
        await base_1.GIVEN.openedEmptyPage();
        await base_1.GIVEN.executeScriptAfter(base_1.data.timeouts.smallest, `
            $('body').append('<input style="display: none" value="The text was "></input>')
        `);
        await base_1.GIVEN.executeScriptAfter(base_1.data.timeouts.smallerThanDefault, `
            $('input').attr('style', 'display: block');
        `);
        await base_1.browser.element('input').clear();
        expect(await base_1.valueOf('input')).toBe('');
    });
    it('clears value through then(perform.clears) on element once it is present in DOM and visible', async () => {
        await base_1.GIVEN.openedEmptyPage();
        await base_1.GIVEN.executeScriptAfter(base_1.data.timeouts.smallest, `
            $('body').append('<input style="display: none" value="The text was "></input>')
        `);
        await base_1.GIVEN.executeScriptAfter(base_1.data.timeouts.smallerThanDefault, `
            $('input').attr('style', 'display: block');
        `);
        await base_1.browser.element('input').perform(something).then(lib_1.perform.clear);
        expect(await base_1.valueOf('input')).toBe('');
    });
    it('fails to clear value with error on not present in DOM element (after timeout)', async () => {
        await base_1.GIVEN.openedEmptyPage();
        await base_1.GIVEN.executeScriptAfter(base_1.data.timeouts.biggerThanDefault, `
            $('body').append('<input style="display: none" value="The text was "></input>')
        `);
        await base_1.browser.element('input').clear()
            .then(ifNoError => fail('should fail on timeout'))
            .catch(async (error) => {
            expect(await base_1.isAbsentInDom('input')).toBe(true);
            expect(error.message).toContain(`
\tTimed out after ${base_1.data.timeouts.byDefault}ms, while waiting for:
\tbrowser.element(By(css selector, input)).clear
Reason:
\tno such element: Unable to locate element: {"method":"css selector","selector":"input"}`);
        });
    });
    it('fails to clear value with error on not visible element (after timeout)', async () => {
        await base_1.GIVEN.openedEmptyPage();
        await base_1.GIVEN.executeScriptAfter(base_1.data.timeouts.smallest, `
            $('body').append('<input style="display: none" value="The text was "></input>')
        `);
        await base_1.GIVEN.executeScriptAfter(base_1.data.timeouts.biggerThanDefault, `
            $('input').attr('style', 'display: block');
        `);
        await base_1.browser.element('input').clear()
            .then(ifNoError => fail('should fail on timeout'))
            .catch(async (error) => {
            expect(await base_1.webelement('input').then(it => it.isDisplayed())).toBe(false);
            expect(error.message).toContain(`
\tTimed out after ${base_1.data.timeouts.byDefault}ms, while waiting for:
\tbrowser.element(By(css selector, input)).clear
Reason:
\telement not interactable` // todo: consider to have here also element actual html
            );
        });
    });
});
//# sourceMappingURL=element.commands.clear.test.js.map