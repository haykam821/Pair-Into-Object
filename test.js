const chai = require("chai");
const assert = chai.assert;

const pair = require("./index.js");

const string = "a string";
const number = 1337;

const exampleKeys = ["key1", "key2", "key3"];
const exampleValues = ["value1", "value2", "value3"];
const exampleOutput = {
    "key1": "value1",
    "key2": "value2",
    "key3": "value3",
}

describe("the function", function() {
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

    it("should map arguments[0][i] to arguments[1][i]", function() {
        assert.deepEqual(exampleOutput, pair(exampleKeys, exampleValues));
    })
});