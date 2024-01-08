import { useEffect, useState } from "react";
import Shiver from "./Shiver";
import {  useParams } from "react-router-dom";

const ResturantMenu=()=>{
    const[resInfo,setResInfo]=useState(null);
    const{resId}=useParams();
    useEffect(()=>{
        fetchMenu();
    },[])
    const fetchMenu= async ()=>{
        const data=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.8660431&lng=80.9359801&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER")
        const json= await data.json();
        setResInfo(json)
    }


    if(resInfo===null) return <Shiver/>

    const details=resInfo.data?.cards[0].card.card.info;
    const {itemCards}=
    resInfo.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    console.log(itemCards)
    
    return(
        <div style={{margin:"30px"}}>
            <h1>{details.name}</h1>
            <h4>{details.cuisines}</h4>
            <p>{details.feeDetails.message}</p>
            <h3> {details.sla.slaString} : {details.costForTwoMessage}</h3>
            <div>
            <h3> {details.avgRatingString}</h3>
            <h3> {details.totalRatingsString}</h3>
            </div>
            <h2>Menu</h2>
            <ul>
                {itemCards.map(item=><li key={item.card.info.id}>{item.card.info.name}-{item.card.info.price/100 ||item.card.info.defaultPrice/100}</li>)}
            </ul>
            
        </div>
    )
}

export default ResturantMenu;