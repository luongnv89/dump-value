# dump-value
Generate dump value for testing. The value type can be: number, character, string

## Install

```
npm install dump-value --save
```

## Usage

```
const { getRandomName } = require('dump-value');
console.log(getRandomName(['male'],['europe','america']));
```

## APIs

_getRandomInt(max)_

Get a random number in range of 0 -> max

_getRandomIntRange(min, max)_

Get a random number in range of min -> max

_getRandomChar()_

Get a random character in range of `a`-> `z` or `A` -> `Z`

_getRandomCharLowerCase()_

Get a random lower case character: `a` -> `z`

_getRandomCharUpperCase()_

Get a random upper case character: `A` -> `Z`

_getRandomName(regions, gender)_

Get a random name by given genders and regions, based on [list of most popular given names](https://en.wikipedia.org/wiki/List_of_most_popular_given_names)
- `gender`: can be `'male', 'female'` or `'all'` (default value).
- `regions`: a string or array of string to represent the regions (`'africa', 'america', 'asia', 'europe', 'oceania'`). The empty array `[]` means that all values have been selected

Some shortcut of this function:

|Short|Short|Full|
|---|:---|:---|
|`getRandomName()` | `getRandomName([],'all')` | `getRandomName(['africa', 'america', 'asia', 'europe', 'oceania'],'all')`|
|`getRandomName('asia')` | `getRandomName(['asia'],'all')` ||
|`getRandomName([],'male')` | `getRandomName(['africa', 'america', 'asia', 'europe', 'oceania'],'male')`||
