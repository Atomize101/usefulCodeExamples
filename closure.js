//This example pushes functions inside an array. 
//Then calls the functions below. 
//i === to 3 when the functions are called. 
//This is due to the way the variable was stored in memory in the execution context.

function buildFunctions() {

    var arr = [];
    
    for(i=0; i < 3; i++) {
        arr.push( 
            function() {
                console.log(i);
            });
    }
    return arr;
}

var fs = buildFunctions();

fs[0]();
fs[1]();
fs[2]();