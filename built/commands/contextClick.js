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
const selenium_webdriver_1 = require("selenium-webdriver");
class ContextClick {
    async perform(entity, ...args) {
        const webelement = await entity.getWebElement();
        const driver = entity.driver;
        await driver.webdriver.actions().click(webelement, String(selenium_webdriver_1.Button.RIGHT)).perform();
        // await driver.actions().mouseMove(webelement).perform();
        // const ms = 500;
        // await driver.webdriver.sleep(ms);
        // await driver.actions().click(Button.RIGHT).perform();
    }
}
exports.ContextClick = ContextClick;
//# sourceMappingURL=contextClick.js.map