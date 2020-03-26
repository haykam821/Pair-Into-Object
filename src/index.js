/**
 * Pairs an array of keys and an array of values into an object.
 * @param {*[]} keys The keys for the object.
 * @param {*[]} values The values for the object.
 * @param {boolean} fillMissing Whether to fill entries without a value in the values array with null.
 * @returns {Object} The paired object.
 */
function pair(keys, values, fillMissing = true) {
	const object = {};

	if (!Array.isArray(keys)) {
		const error = new TypeError("Keys must be an array");
		error.code = "KEYS_NOT_ARRAY";
		throw error;
	} else if (!Array.isArray(values)) {
		const error = new TypeError("Values must be an array");
		error.code = "VALUES_NOT_ARRAY";
		throw error;
	} else if (keys.length < values.length) {
		const error = new Error("Cannot have more keys than values");
		error.code = "NOT_ENOUGH_KEYS";
		throw error;
	} else if (keys.length !== values.length && !fillMissing) {
		const error = new Error("Lengths of keys and values must be the same");
		error.code = "DIFFERENT_KEY_VALUE_ARRAY_LENGTHS";
		throw error;
	}

	keys.forEach((element, index) => {
		if (fillMissing) {
			object[element] = values[index] || null;
		} else {
			object[element] = values[index];
		}
	});

	return object;
}

module.exports = pair;
