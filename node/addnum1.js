const op1=require('./operations')
var a=5;
var b=8;
var c=op1.add(a,b)
console.log("add:"+c);

const op2=require('./operations')
var a=10;
var b=8;
var c=op2.sub(a,b)
console.log("sub:"+c);

const op3=require('./operations')
var a=5;
var b=8;
var c=op3.mult(a,b)
console.log("mult:"+c);

const op4=require('./operations')
var a=16;
var b=8;
var c=op4.div(a,b)
console.log("div:"+c);