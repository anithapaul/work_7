const myos=require('os');
var userdata=myos.userInfo();
const myfs=require('fs')
myfs.appendFile("data.txt",userdata.username,(error)=>{
if(error)
{
    throw error;
    console.log(error)
}
})
