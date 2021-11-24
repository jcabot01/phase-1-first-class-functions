//1
function receivesAFunction(callback) {
    return callback();
}
receivesAFunction(function () { return 2 + 3; });

//2
function returnsANamedFunction() {
    return (function namedFunction(){});
}
returnsANamedFunction();

//3
function returnsAnAnonymousFunction() {
    return (function () {});
}

returnsAnAnonymousFunction();

