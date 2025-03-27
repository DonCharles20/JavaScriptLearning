/**
 * JSON = (JavaScript Object Notation) data-interchange format
 *          Used for exchanging data between a server and a web application
 *          Json filed {key:value} OR [value1, value2, value3] OR[{Object},{},{}]
 * 
 * 
 *          JSON.stringify() = converts a JS object to a JSON string.
 *          JSON.parse() = convets a JSON string to a JS object.
 */

const names = ["Aizen", "Joker","Lelouch","Deadpool"];

const person = {
    "name": "Aizen", "age":30, "isEvil": true, "hobbies": ["Reading","teaching","Gotei 13"]
};

const people = [ 
                {"name": "Aizen", "age":25,"isEvil": true},
                {"name": "Joker", "age":30, "isEvil": true}, 
                {"name": "Lelouch", "age":30, "isEvil": false},
                {"name": "Deadpool", "age":30, "isEvil": false}
];

const jsonNames = `["Aizen", "Joker","Lelouch","Deadpool"]`;

const jsonPerson = `{
    "name": "Aizen", "age":30, "isEvil": true, "hobbies": ["Reading","teaching","Gotei 13"]
}`;

const jsonPeople = `[ 
                {"name": "Aizen", "age":25,"isEvil": true},
                {"name": "Joker", "age":30, "isEvil": true}, 
                {"name": "Lelouch", "age":30, "isEvil": false},
                {"name": "Deadpool", "age":30, "isEvil": false}
]`;
const jsonString =JSON.stringify(names);
const jsonString2 =JSON.stringify(person);
const jsonString3 =JSON.stringify(people);

const jsonObject = JSON.parse(jsonNames);
const jsonObject2 = JSON.parse(jsonPerson);
const jsonObject3 = JSON.parse(jsonPeople);

fetch("people.json")//returns a promise, in this case the file
        .then(response => response.json())
        .then(values => values.forEach(value => {console.log(value.name)}))
        .catch(error => console.error(error));
