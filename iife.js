//Immediately invoked function expression example. 
//Notice the function is wrapped in parenthesis as well as invoked (); at the end


(function(name) {
    var greeting = 'Hello ';
    console.log(greeting + '' + name);
}('Chris'));