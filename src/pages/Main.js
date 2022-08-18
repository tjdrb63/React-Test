import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard.js'



function Main(){
    const [marketList,setMarketList] = useState('');    
    useEffect(() => {
        axios("http://localhost:8000/products/")
        .then(res=>{
            console.log(res.data)
            setMarketList(res.data)
        }) 
    },[])

    return(
        <div className="w-192 m-auto outline outline-1 bg-white outline-gray-400 mt-8 rounded-xl">
            <div className="flex flex-wrap">
                {marketList && marketList.map(
                    product => <ProductCard product={product}/>)
                }
            </div>
            <div className="text-center text-gray-400 font-bold text-xl border-t py-2 hover:text-gray-600" >더 보기</div>
        </div>
    )
}export default Main;