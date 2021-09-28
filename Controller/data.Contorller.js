'use strict'
const axios = require('axios');
require('dotenv').config();

const dataModel=require('../Modules/data.Module'); 

function getAllData(req,res)
{
axios
.get(process.env.URL)
.then(result => {
res.send(result.data.fruits);

})
.catch(err => {
    res.send(err);
})

} 


async function AddFavData (req,res) {

    const {name,image,price,ownerEmail}=req.body;

   await dataModel.create({
 
    name:name,
    image: image,
    price:price,
  ownerEmail:ownerEmail

    });
    dataModel.find({ownerEmail:ownerEmail},(erorr,result) => {

        if (erorr) {
            console.log(erorr);
        }
        else {res.send(result)}
    })
}




function getFavData(req,res)
{
const email=req.query.ownerEmail;

dataModel.find({ownerEmail:email},(erorr,result) => {

    if (erorr) {
        console.log(erorr);
    }
    else {res.send(result)}
})

} 

function updateFav(req,res)
{
    const id =req.params.id;
    const {name,image,price,ownerEmail}=req.body;
dataModel.findByIdAndUpdate(id,{name,image,price},(erorr,result) => {
    dataModel.find({ownerEmail:ownerEmail},(erorr,result) => {
        if (erorr) {
            console.log(erorr);
        }
        else {res.send(result)}
    })
    if (erorr) {
        console.log(erorr);
    }
    else {res.send(result)}

})
} 

function deleteFav(req,res)
{
    const id =req.params.id;
    const ownerEmail=req.query.ownerEmail;

dataModel.deleteOne({_id,id},(erorr,result) => {
    dataModel.find({ownerEmail:ownerEmail},(erorr,result) => {
        if (erorr) {
            console.log(erorr);
        }
        else {res.send(result)}
    })
    if (erorr) {
        console.log(erorr);
    }
    else {res.send(result)}

})
} 


module.exports={
    getAllData,
    AddFavData,
    getFavData,
    updateFav,
    deleteFav

}