import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import left from '../images/left.svg'
import right from '../images/right.svg'
import Modal from 'react-modal';
import BoardEdit from './BoardEdit';

function ProductDetail(props){
    let { id } = useParams();
    const [productData,setProductData] =useState("");
    const [photoCount,setPhotoCount] = useState(0);
    const [isModal,setIsModal] = useState(false);
    const [checkPass,setCheckPass] = useState("");

    const PlusCount= () =>{
        setPhotoCount(photoCount+1)
    }
    const MinusCount= () =>{
        setPhotoCount(photoCount-1)
    }
    useEffect(()=>{
        axios.get("http://localhost:8000/products/"+id)
        .then(res => {
            console.log(res.data)
            setProductData(res.data)
        })
       
       
    },[id])
    
    const clickBtn = () =>{
        if(productData.password != checkPass)
        {
           alert("비밀번호가 틀립니다.") 
        }
        else{
            setIsModal(true)
        }
    }
    const passwordHandle =(e) =>{
        setCheckPass(e.target.value)
        console.log(checkPass)
    }

    return(
        <div className='z-0'>
            {productData &&
                <div className="w-192 mt-10 min-h-screen m-auto">
                    <div className='relative w-192 h-96'>
                        {photoCount != productData.photo.length-1 &&
                                <div className='absolute right-0 top-32 text-white' onClick={PlusCount}>
                                    <img className='h-24' src={right}></img>
                                </div>
                        }
                        {photoCount <= productData.photo.length-1 && photoCount>0 &&
                                <div className='absolute left-0 top-32 text-white' onClick={MinusCount}>
                                   <img className='h-24'  src={left}></img>
                                </div>
                        }
                        <div className='absolute bottom-1 right-3 text-white'>
                            {photoCount+1}/ 
                            {productData.photo.length}
                           
                        </div>
                        
                        
                        <img className='mx-auto w-192 h-96 bg-black rounded-xl object-contain ' src={productData.photo[photoCount]}/>
                    </div>
                    <div className='p-4 mt-2 bg-white rounded-xl'>
                        <div className='flex mb-2 justify-between w-full'>
                            <p className='text-xl text-gray-700 '>{productData.room} 호</p>
                            <div className='flex'>
                                <input className='bg-gray-200 p-2 rounded-lg -mt-1 mr-1' placeholder='비밀번호' onChange={passwordHandle}></input>
                                <p onClick={clickBtn} className='text-md bg-sky-700 text-white p-2 -mt-1 rounded-xl hover:bg-sky-400'>수정하기</p>
                            </div>
                        </div>
                        
                        <p className='w-full border-y'></p>
                        <p className='text-2xl font-bold ml-2 mt-2'>{productData.title}</p>
                        <p className='text-left text-xl text-sky-700 ml-2 font-bold mr-2'>{productData.price}원</p>
                        <p className='pb-5 ml-2 mt-2'>{productData.content}</p>
                        
                    </div>
                </div>
            }

            <Modal isOpen={isModal}>
                <BoardEdit productData={productData}></BoardEdit>
            </Modal>


        </div>
    )
}export default ProductDetail;