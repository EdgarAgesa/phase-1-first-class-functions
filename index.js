const receivesAFunction=(spy)=>spy()
    
function returnsANamedFunction() {
    return function receivesAFunction(spy) {
        return 'spy'
    }
}

function returnsAnAnonymousFunction(){
    return function (name){
        return 'name'
    }
}