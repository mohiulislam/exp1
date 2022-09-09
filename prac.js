// function af(a,b) {
//   return {num : a,
// roll:b};
// }
// var b=af;
// console.log(obj=af(66,77));

// var obj=Object.create(b(111,333));
// var obj2=Object.create(b(222,444));

// console.dir(obj);
// console.dir(obj2);

// function Fruit(color, taste, seeds) {
//   this.color = color;
//   this.taste = taste;
//   this.seeds = seeds;
// }

// const fruit1 = new Fruit('Yellow', 'Sweet', 1);

// console.dir(fruit1);
// console.dir(Fruit.prototype);
// function Person(name, age, location, occupation){
//     this.name = name
//     this.age = age
//     this.location = location
//     this.occupation = occupation

//     this.printDetails = function(){
//         console.log(`My name is ${this.name} and I'm ${this.age} years old. I live in ${this.location} and I work as a ${this.occupation}.`);
//     };
// }
// console.dir(Person);



//for going page2
document.querySelector("#button_of_page1").onclick=function () {
    location.pathname="/page2.html";
}

//for going page1
document.querySelector("#button_of_page2").onclick=function () {
    location.pathname="/page1.html";
}



