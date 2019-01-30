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
describe('Collection get by index Element', () => {
    it('should not be found on creation', async () => {
        const element = base_1.browser.all('.not-existing').get(1);
        expect(element.toString()).toBeTruthy();
    });
    it('search is postponed until asking actual element data like "has specific text?"', async () => {
        await base_1.GIVEN.openedEmptyPage();
        const element = base_1.browser.all('.will-exist').get(1);
        await base_1.WHEN.withBody(`
                <ul>Hello to:
                    <li class='will-exist'>Bob</li>
                    <li class='will-exist'>Kate</li>
                </ul>
        `);
        expect(await element.matches(lib_1.have.text('Kate'))).toBe(true);
    });
    it('is performed on each subsequent "ask"', async () => {
        await base_1.GIVEN.openedEmptyPage();
        const element = base_1.browser.all('.will-exist').get(1);
        await base_1.WHEN.withBody(`
                <ul>Hello to:
                    <li class='will-exist'>Bob</li>
                    <li class='will-exist'>Kate</li>
                </ul>
        `);
        expect(await element.matches(lib_1.have.text('Kate'))).toBe(true);
        await base_1.WHEN.withBody(`
                <ul>Hello to:
                    <li class='will-exist'>Bob</li>
                    <li class='will-exist'>Margo</li>
                </ul>
        `);
        expect(await element.matches(lib_1.have.text('Kate'))).toBe(false);
        expect(await element.matches(lib_1.have.text('Margo'))).toBe(true);
    });
    it('waits for element command like click to be possible', async () => {
        await base_1.GIVEN.openedEmptyPageWithBody(`
                <a href='#first'>go to Heading 2</a>
                <a href='#second' style='display:none'>go to Heading 2</a>
                <h1 id='first'>Heading 1</h1>
                <h2 id='second'>Heading 2</h2>
        `);
        await base_1.GIVEN.executeScriptWithTimeout('document.getElementsByTagName("a")[1].style = "display:block";', base_1.data.timeouts.smallerThanDefault);
        const started = new Date().getTime();
        await base_1.browser.all('a').get(1).click();
        expect(new Date().getTime() - started).toBeGreaterThanOrEqual(base_1.data.timeouts.smallerThanDefault);
        expect(await base_1.browser.url()).toContain('second');
    });
    it('fails on timeout with error during waiting for action like click, if element invisible', async () => {
        await base_1.GIVEN.openedEmptyPageWithBody(`
                <a href='#first'>go to Heading 2</a>
                <a href='#second' style='display:none'>go to Heading 2</a>
                <h1 id='first'>Heading 1</h1>
                <h2 id='second'>Heading 2</h2>
        `);
        await base_1.GIVEN.executeScriptWithTimeout('document.getElementsByTagName("a")[1].style = "display:block";', base_1.data.timeouts.biggerThanDefault);
        const started = new Date().getTime();
        await base_1.browser.all('a').get(1).click()
            .then(ifNoError => fail('should fail on timeout before can be clicked'))
            .catch(async (error) => {
            expect(new Date().getTime() - started).toBeGreaterThanOrEqual(base_1.data.timeouts.byDefault);
            expect(await base_1.browser.url()).not.toContain('second');
            expect(error.message).toContain(`
\tTimed out after ${base_1.data.timeouts.byDefault}ms, while waiting for:
\tbrowser.all(By(css selector, a))[1].click
Reason:
\telement not interactable`);
        });
    });
    xit('fails on timeout with error during waiting for condition like text, if no element', async () => {
        await base_1.GIVEN.openedEmptyPageWithBody(`
                <ul>Hello to:
                    <li class='will-exist'>Bob</li>
                </ul>
        `);
        const started = new Date().getTime();
        await base_1.browser.all('li').get(1).should(lib_1.have.text('Kate'))
            .then(ifNoError => fail('should fail on timeout'))
            .catch(async (error) => {
            expect(new Date().getTime() - started).toBeGreaterThanOrEqual(base_1.data.timeouts.byDefault);
            expect(await base_1.browser.url()).not.toContain('second');
            expect(error.message).toContain(`
\tTimed out after ${base_1.data.timeouts.byDefault}ms, while waiting for:
\tbrowser.all(By(css selector, a))[1].has text: Kate
Reason:
\tTODO`);
        });
    });
});
//# sourceMappingURL=collection.get.byIndexElement.test.js.map