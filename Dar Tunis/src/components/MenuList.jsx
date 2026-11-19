import React, { useState ,useEffect} from "react";
import axios from 'axios'
import DishCard from "./DishCard";
function MenuList (){
    const[dishes,setDishes]= useState([])

    const getDIshes = async ()=>{
        try {
            const res = await axios.get("https://6afc97e6892984c4494bc1c5.mockapi.io/dishes")
            setDishes(res.data)
        } catch (error) {
            console.log(error,"error from fetching dishes")
        }
    }
    useEffect(()=>{
        getDIshes()
    },[])
    return(
        {dishes.map((dish)=>{
            <DishCard
        })}
    )
}