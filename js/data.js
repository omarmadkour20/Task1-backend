const fs = require("fs")
const addPerson = (id , fName , lName , age , city)=>{
  const loadData = loaddata() 
  const duplicated = loadData.filter((obj)=>{
    return obj.id === id
  })
  if(duplicated.length==0){
  loadData.push({
    id : id , 
    fName : fName ,     
    lName : lName , 
    age : age ,
    city : city 
  })
  saveallData(loadData)
}
else{
    console.log("ERROR DUPLICATED ID")
}
}
////////////////////////////////////////
const delPerson = (id)=>{
    const loadData = loaddata() 
    const delperson = loadData.filter((x)=>{
        return x.id !== id
    })
    saveallData(delperson)
    console.log("you have already deleted an Item")
}

///////////////////////////////////////
const loaddata = ()=>{
    try  { 
      const readData =fs.readFileSync("data10.json").toString()
      return JSON.parse(readData)
   }
   catch {
      return []
   }
}
///////////////////////////////////////
const saveallData= (loadData)=>{
 const DataJson = JSON.stringify(loadData)
 fs.writeFileSync("data10.json" , DataJson)
}
/////////////////////////////////////
const readPerson = (id)=>{
  const loadData = loaddata() 
  const readId = loadData.find((x)=>{
    return x.id==id
  })
if(readId){
 console.log(readId.fName , readId.lName)
}else{
  console.log("Your Id Does not exist")
}
}
/////////////////////////////////////
const listPerson = ()=>{
  const loadData = loaddata() 
  const list = loadData.forEach((obj)=>{
     console.log(obj.id , obj.fName , obj.lName , obj.age , obj.city)
  })
}









///////////////////////////////////
module.exports = {
    addPerson,
    delPerson,
    readPerson,
    listPerson
}