import React from 'react'
import ProductCard from '../components/ProductCard.js'

function Main(){
    
    const testcase = [1,2,3,4,5,6,8,9,10]
    return(
        <div className="w-192 m-auto outline outline-1 bg-white outline-gray-400 mt-8 rounded-xl">
            <div className="flex flex-wrap">
                {testcase.map(
                    num => <ProductCard/>)
                }
            </div>
            <div className="text-center text-gray-400 font-bold text-xl border-t py-2 hover:text-gray-600" >더 보기</div>
        </div>
    )
}export default Main;