
#  selenidejs

## Index

### Modules

* [Condition](modules/condition.md)
* [Utils](modules/utils.md)
* [With](modules/with.md)
* [be](modules/be.md)
* [command](modules/command.md)
* [condition](modules/condition.md)
* [get](modules/get.md)
* [have](modules/have.md)
* [perform](modules/perform.md)
* [predicate](modules/predicate.md)
* [query](modules/query.md)

### Classes

* [Browser](classes/browser.md)
* [ByIndexWebElementLocator](classes/byindexwebelementlocator.md)
* [ByWebElementLocator](classes/bywebelementlocator.md)
* [ByWebElementsLocator](classes/bywebelementslocator.md)
* [CannotPerformActionError](classes/cannotperformactionerror.md)
* [CashedWebElementLocator](classes/cashedwebelementlocator.md)
* [Collection](classes/collection.md)
* [ConditionNotMatchedError](classes/conditionnotmatchederror.md)
* [Configuration](classes/configuration.md)
* [Customized](classes/customized.md)
* [Element](classes/element.md)
* [FailedToMatchConditionWithReasonError](classes/failedtomatchconditionwithreasonerror.md)
* [FilteredByConditionWebElementsLocator](classes/filteredbyconditionwebelementslocator.md)
* [TimeoutError](classes/timeouterror.md)
* [Wait](classes/wait.md)

### Interfaces

* [Locator](interfaces/locator.md)
* [SearchContext](interfaces/searchcontext.md)

### Type aliases

* [AfterElementActionHook](#afterelementactionhook)
* [BeforeElementActionHook](#beforeelementactionhook)
* [BrowserCondition](#browsercondition)
* [CollectionCondition](#collectioncondition)
* [Command](#command)
* [ElementCondition](#elementcondition)
* [ElementQuery](#elementquery)
* [OnFailureHook](#onfailurehook)
* [Query](#query)

### Functions

* [ElementActionHooks](#elementactionhooks)
* [lambda](#lambda)
* [logFailedHook](#logfailedhook)
* [runAfterHooks](#runafterhooks)
* [runBeforeHooks](#runbeforehooks)

---

## Type aliases

<a id="afterelementactionhook"></a>

###  AfterElementActionHook

**Ƭ AfterElementActionHook**: *`function`*

*Defined in [refactor/afterElementActionHook.ts:17](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/refactor/afterElementActionHook.ts#L17)*

#### Type declaration
▸(actionError: *`Error`*, element: *[Element](classes/element.md)*, actionName: *`string`*):  `void` &#124; `Promise`<`void`>

**Parameters:**

| Param | Type |
| ------ | ------ |
| actionError | `Error` |
| element | [Element](classes/element.md) |
| actionName | `string` |

**Returns:**  `void` &#124; `Promise`<`void`>

___
<a id="beforeelementactionhook"></a>

###  BeforeElementActionHook

**Ƭ BeforeElementActionHook**: *`function`*

*Defined in [refactor/beforeElementActionHook.ts:17](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/refactor/beforeElementActionHook.ts#L17)*

#### Type declaration
▸(element: *[Element](classes/element.md)*, actionName: *`string`*):  `void` &#124; `Promise`<`void`>

**Parameters:**

| Param | Type |
| ------ | ------ |
| element | [Element](classes/element.md) |
| actionName | `string` |

**Returns:**  `void` &#124; `Promise`<`void`>

___
<a id="browsercondition"></a>

###  BrowserCondition

**Ƭ BrowserCondition**: *[Condition](modules/condition.md)<[Browser](classes/browser.md)>*

*Defined in [conditions.ts:27](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions.ts#L27)*

___
<a id="collectioncondition"></a>

###  CollectionCondition

**Ƭ CollectionCondition**: *[Condition](modules/condition.md)<[Collection](classes/collection.md)>*

*Defined in [conditions.ts:26](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions.ts#L26)*

___
<a id="command"></a>

###  Command

**Ƭ Command**: *[Query](#query)<`T`, `void`>*

*Defined in [wait.ts:33](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/wait.ts#L33)*

Commands we use in a normal "command" case, i.e. to perform the async command on entity of type T. Command can pass or fail with Error correspondingly.

___
<a id="elementcondition"></a>

###  ElementCondition

**Ƭ ElementCondition**: *[Condition](modules/condition.md)<[Element](classes/element.md)>*

*Defined in [conditions.ts:25](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions.ts#L25)*

___
<a id="elementquery"></a>

###  ElementQuery

**Ƭ ElementQuery**: *[Query](#query)<[Element](classes/element.md), `R`>*

*Defined in [queries.ts:21](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/queries.ts#L21)*

___
<a id="onfailurehook"></a>

###  OnFailureHook

**Ƭ OnFailureHook**: *`function`*

*Defined in [refactor/onFailureHook.ts:19](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/refactor/onFailureHook.ts#L19)*

#### Type declaration
▸<`T`>(lastError: *`Error`*, entity: *`T`*, condition?: *[Condition](modules/condition.md)<`T`>*):  `void` &#124; `Promise`<`void`>

**Type parameters:**

#### T 
**Parameters:**

| Param | Type |
| ------ | ------ |
| lastError | `Error` |
| entity | `T` |
| `Optional` condition | [Condition](modules/condition.md)<`T`> |

**Returns:**  `void` &#124; `Promise`<`void`>

___
<a id="query"></a>

###  Query

**Ƭ Query**: *`function`*

*Defined in [wait.ts:27](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/wait.ts#L27)*

We use queries to perform an async query on entity of type T, i.e. get something from entity. So a query can pass and return something of type R or failed with Error correspondingly.

#### Type declaration
▸(entity: *`T`*): `Promise`<`R`>

**Parameters:**

| Param | Type |
| ------ | ------ |
| entity | `T` |

**Returns:** `Promise`<`R`>

___

## Functions

<a id="elementactionhooks"></a>

###  ElementActionHooks

▸ **ElementActionHooks**(target: *`any`*, methodName: *`any`*, descriptor: *`PropertyDescriptor`*): `void`

*Defined in [refactor/elementActionHooks.ts:20](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/refactor/elementActionHooks.ts#L20)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| target | `any` |
| methodName | `any` |
| descriptor | `PropertyDescriptor` |

**Returns:** `void`

___
<a id="lambda"></a>

###  lambda

▸ **lambda**<`F`>(toString: *`string`*, fn: *`F`*): `F`

*Defined in [helpers/index.ts:17](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/helpers/index.ts#L17)*

**Type parameters:**

#### F 
**Parameters:**

| Param | Type |
| ------ | ------ |
| toString | `string` |
| fn | `F` |

**Returns:** `F`

___
<a id="logfailedhook"></a>

###  logFailedHook

▸ **logFailedHook**(error: *`Error`*, actionName: *`string`*): `void`

*Defined in [refactor/elementActionHooks.ts:63](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/refactor/elementActionHooks.ts#L63)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| error | `Error` |
| actionName | `string` |

**Returns:** `void`

___
<a id="runafterhooks"></a>

###  runAfterHooks

▸ **runAfterHooks**(hooks: *[AfterElementActionHook](#afterelementactionhook)[]*, actionError: *`any`*, element: *`any`*, actionName: *`any`*): `Promise`<`void`>

*Defined in [refactor/elementActionHooks.ts:53](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/refactor/elementActionHooks.ts#L53)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| hooks | [AfterElementActionHook](#afterelementactionhook)[] |
| actionError | `any` |
| element | `any` |
| actionName | `any` |

**Returns:** `Promise`<`void`>

___
<a id="runbeforehooks"></a>

###  runBeforeHooks

▸ **runBeforeHooks**(hooks: *[BeforeElementActionHook](#beforeelementactionhook)[]*, element: *`any`*, actionName: *`any`*): `Promise`<`void`>

*Defined in [refactor/elementActionHooks.ts:43](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/refactor/elementActionHooks.ts#L43)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| hooks | [BeforeElementActionHook](#beforeelementactionhook)[] |
| element | `any` |
| actionName | `any` |

**Returns:** `Promise`<`void`>

___
