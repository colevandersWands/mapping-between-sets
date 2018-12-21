# Type-wise analysis

This markdown focuses on one type at a time, looking at how it behaves when coerced.

fill out the tables


---

## Strings

```js
typeof x === 'string'
```

| subset | description | Number(x) | Boolean(x) | void x |
| --- | --- | --- | --- | --- |
| empty string | quotes with nothing in between | 0 | false | undefined, not |
| no types | 'number', 'boolean', 'null', 'string'  | NaN | true | undefined, not |
| undefined | 'undefined'  | NaN | true | undefined | 
| true | 'true'  | NaN | true | undefined, not |

---

## Numbers

```js
typeof x === 'number'
```

| subset | description  | Boolean(x) | String(x) | void x |
| --- | --- | --- | --- | --- |
| 0 | equivalent to zero | false | itself wrapped in strings | undefined |

---

## Booleans

```js
typeof x === 'boolean'
```

| subset | description | Number(x) | String(x) | void x
| --- | --- | --- |  --- | --- |
| true | true | 1 | 'true' | undefined |
| false | false | 0 | 'false' | undefined |

---

## Undefined

```js
typeof x === 'undefined'
```

| subset | description  | Number(x) |  String(x) | Boolean(x) | void x |
| --- | --- | --- | --- | --- | --- |
| undefined | undefined | NaN | 'undefined' | false | undefined |



---
--- 