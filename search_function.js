//function look-upper

var test_functions = {
    square: function (x) {
        return x*x;
    },
    cube: function (x) {
        return x*x*x;
    },
    duplicate: function (x) {
        return [x, x];
    }
}

var is_equal(a, b) {
    //todo: compare arrays
    return a ===
}

var lookup = function (library, input, output) {
    for (var i in library) {
        f = library[i];
        console.log(is_equal(f(input), output));
    }
}

lookup(test_functions);