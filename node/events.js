var EventEmitter=require('events')
var emitter=new EventEmitter()
emitter.on("doorOpen",(name)=>{
    console.log(name + " is waiting...")
})
emitter.on("doorOpen",(name)=>{
    console.log("dear " +name + " please wait...")
})

emitter.emit("doorOpen","ani")
emitter.emit("doorOpen","anitha")