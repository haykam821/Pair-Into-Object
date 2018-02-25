const chai = require("chai");
const assert = chai.assert;

const pair = require("./index.js");

const string = "a string";
const number = 1337;
const object = {"id": 9999, "name": "George"};
const arrayishObject = {0: "hello", 1: "world"};

const exampleKeys = ["key1", "key2", "key3"];
const exampleValues = ["value1", "value2", "value3"];
const exampleOutput = {
    "key1": "value1",
    "key2": "value2",
    "key3": "value3",
}
const examplesOutput = pair(exampleKeys, exampleValues);

describe("type errors (first parameter)", function() {
    it("should error if first parameter is a string", function() {
        assert.throws(function() {
            pair(string, exampleValues);
        }, TypeError);
    });
    it("should error if first parameter is a number", function () {
        assert.throws(function () {
            pair(number, exampleValues);
        }, TypeError);
    });
    it("should error if first parameter is an object", function () {
        assert.throws(function () {
            pair(object, exampleValues);
        }, TypeError);
    });
    it("should error if first parameter is an array-like object", function () {
        assert.throws(function () {
            pair(arrayishObject, exampleValues);
        }, TypeError);
    });
});

describe("type errors (second parameter)", function() {
    it("should error if second parameter is a string", function () {
        assert.throws(function () {
            pair(exampleKeys, string);
        }, TypeError);
    });
    it("should error if second parameter is a number", function () {
        assert.throws(function () {
            pair(exampleKeys, number);
        }, TypeError);
    });
    it("should error if second parameter is an object", function () {
        assert.throws(function () {
            pair(exampleKeys, object);
        }, TypeError);
    });
    it("should error if second parameter is an array-like object", function () {
        assert.throws(function () {
            pair(exampleKeys, arrayishObject);
        }, TypeError);
    });
});

describe("input lengths mismatch errors", function() {
    it("should error if first array is longer than the second", function () {
        assert.throws(function () {
            pair(["this", "array", "is", "longer"], ["than", "this", "one"])
        }, Error);
    })
    it("should error if second array is longer than the first", function () {
        assert.throws(function () {
            pair(["and", "this", "array"], ["is", "shorter", "than", "this"])
        }, Error);
    })
});

describe("output", function() {
    it("is an object", function() {
        assert.isObject(examplesOutput, "hello");
    })

    it("should map arguments[0][i] to arguments[1][i]", function() {
        assert.deepEqual(exampleOutput, examplesOutput);
    })

    it("keys should be as long as keys input", function () {
        assert.strictEqual(exampleKeys.length, Object.keys(examplesOutput).length);
    })
    it("values should be as long as values input", function () {
        assert.strictEqual(exampleValues.length, Object.values(examplesOutput).length);
    })
});