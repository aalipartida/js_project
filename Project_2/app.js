let data = [
    {
        name: "John ",
        age:25,    
    },
        {
        name: "Jane ",
        age: 23,    
    },
        {
        name: "Sally ",
        age: 30,    
    },
        {
        name: "Sam",
        age: 34,    
    },
        {
        name: "Eric",
        age: 28,    
    },
        {
        name: "Amy",
        age: 31,    
    },
];

const info = document.querySelector('#info');

let details = data.map(function(item){
    return '<div>' + item.name + ' ' + 'is ' + item.age + ' years old.' + '</div>';
});

info.innerHTML = details.join('\n');