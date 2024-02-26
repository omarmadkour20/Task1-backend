const data =require("./data")
const yargs = require("yargs")

yargs.command({
    command : "add" , 
    describe : "To Add An Item" , 
    handler : (x)=>{
    data.addPerson(x.id , x.fName , x.lName , x.age , x.city)
    }                                     
})
////////////////////
yargs.command({
    command : "delete" , 
    describe : "To delete An Item" , 
    handler : (x)=>{
    data.delPerson(x.id)
    }                                     
})
////////////////////
yargs.command({
    command : "Read" , 
    describe : "To Read An Item" , 
    handler : (x)=>{
    data.readPerson(x.id)
    }                                     
})
////////////////////
yargs.command({
    command : "List" , 
    describe : "To List An Item" , 
    handler : ()=>{
    data.listPerson()
    }                                     
})


yargs.parse()
