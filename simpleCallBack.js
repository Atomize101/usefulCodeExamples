
//Call back function. It gets passed a function and then it calls that function after it does some work.

function tellMeWhenDone(callback) {
    var a = 1000; // some work
    var b = 1000; // some work
    
    callback();
    
}

tellMeWhenDone(function () {
   console.log('I am done!')
    
});

tellMeWhenDone(function () {
   console.log('All done')
    
});