const prom=new Promise(function(resolve,reject){
    const x="geeks"
    const y="geeks"
    if(x ===y){
        resolve()
    }
    else{
        reject()
    }
    })
prom.then(function()
{
    console.log("success")
})
.catch(function(){
    console.log("some error")
})
