arr = [
    1,
    false,
    {
        name: 'myObject',
        location: '250 Stephenson',
    },
    function(name) {
        var greeting = 'Hello '
        console.log(greeting + name);
    },
    'Hello'
];

console.log(arr);
arr[3](arr[2].name);

//Calling a function inside an array