'use strict';

function func0() {}

const func1 = function() {};

const func2 = () => {};

function* func3 () {}

const func4 = function* () {}

class func5 {}

class Klass {
  func6() {}

  static func7() {}
}

const func8 = Function()

const func9 = new Function()

const GeneratorFunction = Object.getPrototypeOf(function* () {}).constructor

const func10 = GeneratorFunction()

const func11 = new GeneratorFunction()

console.log(process.versions);

console.log(Object.getOwnPropertyNames(func0));
console.log(Object.getOwnPropertyNames(func1));
console.log(Object.getOwnPropertyNames(func2));
console.log(Object.getOwnPropertyNames(func3));
console.log(Object.getOwnPropertyNames(func4));
console.log(Object.getOwnPropertyNames(func5));
console.log(Object.getOwnPropertyNames(new Klass().func6));
console.log(Object.getOwnPropertyNames(Klass.func7));
console.log(Object.getOwnPropertyNames(func8));
console.log(Object.getOwnPropertyNames(func9));
console.log(Object.getOwnPropertyNames(func10));
console.log(Object.getOwnPropertyNames(func11));

/*
{ http_parser: '2.6.0',
  node: '5.3.0',
  v8: '4.6.85.31',
  uv: '1.8.0',
  zlib: '1.2.8',
  ares: '1.10.1-DEV',
  icu: '56.1',
  modules: '47',
  openssl: '1.0.2e' }
[ 'length', 'name', 'prototype' ]
[ 'length', 'name', 'prototype' ]
[ 'length', 'name' ]
[ 'length', 'name', 'prototype' ]
[ 'length', 'name', 'prototype' ]
[ 'length', 'name', 'prototype' ]
[ 'length', 'name' ]
[ 'length', 'name' ]
[ 'length', 'name', 'arguments', 'caller', 'prototype' ]
[ 'length', 'name', 'arguments', 'caller', 'prototype' ]
[ 'length', 'name', 'prototype' ]
[ 'length', 'name', 'prototype' ]
 */
