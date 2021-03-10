// Marcel Sydney Randy Mumek

// ARRAY Exercises
let people = ["Greg", "Mary", "Devon", "James"];

// 1
for(let i =0; i< people.length; i++){
    console.log(people[i]);
};

// 2
people.forEach(function(name){
    console.log(name)
});

// 3
people.shift();
console.log(people);

// 4
people.pop();
console.log(people);

// 5
people.unshift("Matt");
console.log(people);

// 6
people.push("Marcel");
console.log(people);

// 7
for(let i =0; i< people.length; i++){
    if(i > 1){
        break;
    }
    console.log(people[i]);
}

// 8
console.log(people.slice(2));

// 9
people = ["Greg", "Mary", "Devon", "James"];
people.splice(2,1,"Elizabeth", "Artie");
console.log(people);

// 10
let withBob = people.concat("Bob");
console.log(withBob);


// Object Exercises
let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};
console.log(programming);

// 1
programming.languages.push("Go");
console.log(programming);

// 2
programming["difficulty"] = 7;
console.log(programming);

// 3
delete programming.jokes;
console.log(programming);

// 4
programming.isFun = true;
console.log(programming);

// 5
programming.languages = programming.languages.map((e, i) => `${i} - ${e}`);
console.log(programming);