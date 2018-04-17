import {by} from 'protractor';
import {By} from "selenium-webdriver";
import {x} from '../xpath/x';
import {xFiltered} from '../xpath/xFiltered';


export namespace With {

    const NORMALIZE_SPACE_XPATH = "normalize-space(translate(string(.), '\t\n\r\u00a0', '    '))";

    export function type(type: string): By {
        return by.xpath(x.all() + xFiltered.byAttributeValue('type', type));
    }

    export function value(value: string): By {
        return by.xpath(x.all() + xFiltered.byAttributeValue('value', value));
    }

    export function partialId(...idParts: string[]): By {
        return by.xpath(x.all() + xFiltered.byPartialId(...idParts));
    }

    export function text(text: string) {
        return by.xpath(`.//*/text()[contains(${NORMALIZE_SPACE_XPATH}, "${text}")]/parent::*`);
    }

    export function exactText(text: string) {
        return by.xpath(`.//*/text()[${NORMALIZE_SPACE_XPATH} = "${text}"]/parent::*`);
    }

    export function id(id: string): By {
        return by.id(id);
    }

    export function name(name: string): By {
        return by.name(name);
    }
    export function className(className: string): By {
        return by.className(className);
    }

    export function xpath(xpath: string): By {
        return by.xpath(xpath);
    }

    export function css(css: string): By {
        return by.css(css);
    }

    export function attribute(attributeName: string, attributeValue: string): By {
        return by.xpath(`.${x.all()}${xFiltered.byAttributeValue(attributeName, attributeValue)}`)
    }

    export function testId(testId: string): By {
        return by.css("[data-test-id='" + testId + "']");
    }

}
