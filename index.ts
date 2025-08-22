//string
let channel : string = "Achintha";
console.log(channel);

//number
let num1 : number = 15;
console.log(num1);


//boolean
let isValid : boolean = false;
console.log(isValid);


//any
let val : any;
val = "hello";
val = 123;
val = true;


//val.toUpperCase();


//unknown
let val1 : unknown;
val1 = "hello";
val1 = 123;
val1 = true;


//val1.toUpperCase();
if(typeof val1 === "string") {
    console.log(val1.toUpperCase());
}



//void
function count(a:number, b:number): void {
   console.log(a + b);
}
count(5, 4);
// let c: number = count(5, 4);
// console.log(c);



//null
let name1 : string | null = null;
console.log(name1);

name1 = "Achintha";
console.log(name1);

name1 = null;
console.log(name1); 


//undefined
let id :number | undefined;
console.log(id);
id = 1;
console.log(id);
id = undefined;
console.log(id);





