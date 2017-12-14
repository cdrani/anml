# anml

---

This is a simple library of common names of animal species and their comparative
scientific names.

## Install

**npm**

> npm install anml --save 

**yarn** 

>yarn add anml

---

## Usage

**commonjs**

> const anml = require('anml')

**esmodules**

> import anml from 'anml'

## API

**all**: returns object containing entirety of library

**random([option: string])**:

* **random()**: returns either a scientific or common name of a random animal
  from the library
* **random('scientific')**: returns a scientific name of a random animal
* **random('common')**: returns the common name of a random animal

**scientific(common_name: string)**: returns the scientific name counterpart of
given common name 
**common(scientific_name: string)**: returns the common name
counterpart of given scientific name

--- 

## Examples

**anml.all**

```js
anml.all

// -> {
        Aardvark: 'Orycteropus afer',
        Bear: 'Ursidae',
        Cat: 'Felis Domesticus',
         . . . 
        Woodpecker: 'Picidae',
        Yak: 'Bos Grunniens',
        Zebra: 'Equus quagga'
      }
```

**anml.random()**

```js
anml.random()
// -> 'Rangifer Tarandus'
```

**anml.random('scientific')**

```js
anml.random('scientific')
// -> 'Macropus Giganteus'
```

**anml.random('common')**

```js
anml.random('common')
// -> 'Lemur'
```

**anml.scientific('Lemur')**

```js
anml.scientific('Lemur')
// -> 'Lemur Catta'
```

**anml.common('Setonix brachyurus')**

```js
anml.common('Setonix brachyurus')
// -> 'Quokka'
```

---

## Contributing
All pull requests are welcome!
