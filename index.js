function pair(keys, values, fillMissing = true) {
	const object = {};

	if (!Array.isArray(keys)) {
		throw new TypeError("Keys must be an array");
	} else if (!Array.isArray(values)) {
		throw new TypeError("Values must be an array");
	} else if (keys.length < values.length) {
		throw new Error("Cannot have more keys than values");
	} else if (keys.length !== values.length && !fillMissing) {
		throw new Error("Lengths of keys and values must be the same");
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
