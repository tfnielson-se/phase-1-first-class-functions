function receivesAFunction (callback) {
   callback()
}

function returnsANamedFunction() {
    return function name() {
        console.log(`Name is thomas`)
    }
}

function returnsAnAnonymousFunction () {
    return function () {
        console.log("")
    }
}