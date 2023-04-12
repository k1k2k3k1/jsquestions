let names = ['khushbu', 'singh', 'baghel'];
//create //add
const newname = names.splice(names.length, 0, 'khushbu singh');
console.log(names);
// splice emty arry return krta hai
// update
const sname = names.splice(1,1 ,'dolly');
console.log(names);
//delete
const newn = names.splice(1,1);
console.log(names);
//unick remove duplicate
let c = [1,2,1 ,3,4,5];
let unick = [...new Set(c)];
console.log(unick)
//reverse string
let str = 'hello';
let revrse = str.split('').reverse();
console.log(revrse);

//dono me true ayega
let a = [20];
let b = [20];
console.log(a[0]==b[0]);
console.log(a[0]===b[0]);


