function receivesAFunction (callback) {
   callback()
}

function returnsANamedFunction (hat) {
    let pants; 
    if (hat = "blue") {
        pants = "jeans"
    }else if (hat ="red") {
        pants = "khakis"
    }
    return function namedFunction() {
        "hellO"
    }
}

function returnsAnAnonymousFunction() {
    return function () {
        console.log("Hello")
    }
}