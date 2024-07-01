const express = require("express");
const app = express();

app.use(express.json());


const users = [{
    name: "John",
    kidneys: [{
        healthy: false
    }]
}];

app.get("/", (req, res)=>{
    const johnKidneys = users[0].kidneys;
    let numberOfKidneys = johnKidneys.length

    let numberOfHealthyKidneys =0 
    for (let i=0 ; i<numberOfKidneys; i++) {
        if (johnKidneys[i].healthy) {
            numberOfHealthyKidneys++;
        }
    }

    let numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys,
        users
    })
})

app.post("/", (req, res)=>{
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg:"Done bhai"
    })
})

app.put("/", (req, res)=>{
    const kidneys = users[0].kidneys;
    for (let i=0; i< kidneys.length; i++){
        kidneys[i].healthy = false;
    }
    res.json({});
}) 


const atleastOneUnhealthyKidney = () =>{
    let minOneUnhealthyKidney = false;
    for (let i=0; i < users[0].kidneys.length; i++){
        if (!users[0].kidneys[i].healthy){
            minOneUnhealthyKidney = true
        }
    }
    return minOneUnhealthyKidney
}

app.delete('/',(req, res)=>{
    const newKidneys = [];
    const kidneys = users[0].kidneys;
    //return 411 if there are no unhealthy kidneys

    console.log("Checking for unhealthy kidneys")

    if (atleastOneUnhealthyKidney()){
        for (let i=0; i< kidneys.length; i++){
            newKidneys.push({
                healthy: true
            })
        }
        users[0].kidneys = newKidneys; //Replaces all kidney properties of original users object with result from above loop(healthy:true) for all
        res.json({msg: "done"}) 
    }

    else {
        res.status(411).json({msg: "No Unhealthy Kidneys"})   
    }
    
})



app.listen(3000)