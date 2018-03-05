// var print = (callback) =>{
//     console.log("Start print");
//     setTimeout(() =>{
//         console.log("Count done !");
//         callback();
//     } ,1000);
// }

// var callbackFunction = () => {
//     console.log("End");
// }

// console.log("Start");
// print(callbackFunction);
 
// a = 5;
// var print = ()=> {
//     console.log(a);
//      b = 3 ;
//     console.log(b);
// }
// print();

// console.log(a + " " + b);
// console.log(b); //undefined // null

// var countDown= (time) => {
// print(callbackFunction);
 
// a = 5;
// var print = ()=> {
//     console.log(a);
//      b = 3 ;
//     console.log(b);
// }
// print();

// console.log(a + " " + b);
// console.log(b); //undefined // null

var countDown= (time) => {
    for(var i= time ; i >= 0 ; i--){
        setTimeout(()=>{
            console.log(i);
            
        }, (time - i )*1000);
    }
}
countDown(5);






