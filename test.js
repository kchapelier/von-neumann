var vonNeuman = require('./');
var test = require('tape');

function sorter(a, b) {
    a = a.join(',');
    b = b.join(',');
    return a > b ? -1 : a < b ? 1 : 0;
}

test('2D, 1 range', function(t) {
    t.deepEqual(vonNeuman(1, 2).sort(sorter), [
                 [ 0,-1],
        [-1, 0],          [ 1, 0],
                 [ 0, 1]
    ].sort(sorter));
    t.end();
});

test('2D, 2 range', function(t) {
    t.deepEqual(vonNeuman(2, 2).sort(sorter), [
                          [ 0,-2],
                 [-1,-1], [ 0,-1], [ 1,-1],
        [-2, 0], [-1, 0],          [ 1, 0], [ 2, 0],
                 [-1, 1], [ 0, 1], [ 1, 1],
                          [ 0, 2]
    ].sort(sorter));
    t.end();
});

test('3D, 1 range', function(t) {
    t.deepEqual(vonNeuman(1, 3).sort(sorter), [
                    [ 0, 0,-1],

                    [ 0,-1, 0],
        [-1, 0, 0],             [ 1, 0, 0],
                    [ 0, 1, 0],

                    [ 0, 0, 1]
    ].sort(sorter));
    t.end();
});

