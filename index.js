module.exports = vonNeumann;

function vonNeumann(range, dims) {
    dims = dims || 2;
    range = range || 1;
    return recurse([], [], 0);

    function recurse(array, temp, d) {
        var manhattanDistance,
            i;

        if (d === dims-1) {
            for (i = -range; i <= range; i += 1) {
                manhattanDistance = temp.reduce(function (sum, value) { return sum + Math.abs(value); }, Math.abs(i));

                if (manhattanDistance <= range && manhattanDistance !== 0) {
                    array.push(temp.concat(i));
                }
            }
        } else {
            for (i = -range; i <= range; i += 1) {
                recurse(array, temp.concat(i), d + 1);
            }
        }

        return array;
    }
}
