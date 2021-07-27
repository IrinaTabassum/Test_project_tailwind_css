// let sum =0;
// function addAll(name, ...allArgu){
//     for(let i=0; i<allArgu.length; i++) { 
//         sum+=allArgu[i]; 
//     }
//     console.log(sum);
// }


// const property =['Irina', 2, 8, 9];
// addAll.apply(null, property);

// const parsone = {
//     name:'Irina',
//     id: 1,
//     age: 27,
//     outer:function (){
//         console.log(this.name)
//         return inner = () =>{
//          console.log(this.age);
//         }
//     } 
// }

//parsone.outer()();
// function func(){
//     console.log(this.name);
//      console.log(this.age);
// }
// const func = () =>{
//     console.log(this.name);
//     console.log(this.age);
// }

// const result = func.bind(parsone);
// result();

// function cons(name, age){
//     this.name= name; 
//     this.age= age;
//     // this.func = () =>{
//     //     console.log(this.name);
//     //     console.log(this.age);
//     // }
// } 

// const parsone = new cons('name', 12);

// console.log(parsone.name);
// //parsone.func();

// function construct(name, age)
// {
//     this.name = name,
//     this.age = age,
//     this.work =function (){
//        // return `${this.name} is work as ${this.age}`;
//     }
// }
// const result = new construct('irina',46);

// console.log(result.work());


// console.dir(construct);

// let a;

// console.dir(a);

const movie = {
    title: 'a',
    releaseYear: 2018,
    rating: 4.5,
    director: 'd'
}
function showProperties(movieData){   
    for( let key in movieData){
      if(typeof(movieData[key]) === 'string'){
        console.log(movieData[key])
      }
    }
}
showProperties(movie);