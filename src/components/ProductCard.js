import { useEffect } from 'react';
import img from '../images/logo.jpg'

function ProductCard(props){
    useEffect(()=>{
        console.log(props)
    },[props.title])
    return(
        <div className="w-60 h-60 p-4 m-2 rounded-xl hover:bg-gray-200">
            {/* 이미지 영역  */}
            <div >
                <img className="rounded-xl h-36 w-60" src={img}></img>
            </div>
            {/* 글자 영역 */}
            <div>
                <p className="font-bold mt-1 mb-0 truncate">{props.product.title}</p>
                <p className="text-gray-500 text-sm -mt-1 font-bold">{props.product.room}호</p>
                <p className="text-sky-700 text-md font-bold">{props.product.price}원</p>    
            </div>
        </div>
    )
}export default ProductCard;