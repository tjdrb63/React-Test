import axios from 'axios';
import React, { useEffect } from 'react'
import {useState} from 'react'
import plus from '../images/plus.png'
import { uploadFile } from 'react-s3';

// 제목
// 호실
// 내용
// 사진
// 비밀번호

function BoardWrite(){

    const region = "us-east-1";
    const bucket = "jskreact";


    window.Buffer = window.Buffer || require("buffer").Buffer;
    
    const config = {
        bucketName: bucket,
        region: region,
        accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
    }

    const [title,setTitle] = useState("");
    const [room,setRoom] = useState("");
    const [password,setPassword] = useState("");
    const [content,setContent] = useState("");
    const [price,setPrice] = useState("")
    const [preview,setPreview] = useState([]);
    const [imageFile,setImageFile] = useState("");
    const [selectedPreview,setSelectedPreview] = useState("")
    const [json,setJson] = useState([])

    const ImageHandle =(e) =>{
        const check = URL.createObjectURL(e.target.files[0])
        setPreview([...preview,check])
        setSelectedPreview(check)
        setImageFile([...imageFile,e.target.files[0]])
    }
    const InputHandle = (e) =>{
        console.log(e.target.id)
        if(e.target.id == "title")
            setTitle(e.target.value)
        else if (e.target.id =="room")
            setRoom(e.target.value)
        else if (e.target.id =="password")
            setPassword(e.target.value)  
        else if (e.target.id =="content")
            setContent(e.target.value)
        else if(e.target.id=="price")
            setPrice(e.target.value)
    }

    const SaveData = () =>{
        if(price && content && password && room && title && preview.length>0){
            const checkjson =[]
            preview.forEach((preview,index) => {
                uploadFile(imageFile[index],config)
                .then(data=>{
                    checkjson.push(data.location)
                    if(checkjson.length>0 && checkjson.length == imageFile.length){
                        axios.post("http://localhost:8000/products",
                        {
                            title:title,
                            room:room,
                            password:password,
                            content:content,
                            price:price,
                            photo:checkjson
                
                        }).then(res=>{
                            alert("글써짐")
                            window.location.href="/"
                        })
                    }
                })  
            });
        }else
        {
            alert("정보를 입력 해 주세요")
        }
    }

    useEffect(()=>{
        console.log("json 바뀜" + json)
        
    },[json])

    const clickPreview = (image)=>{
        setSelectedPreview(image)
    }

    return(
        <div>
            <div class="flex justify-center items-center mx-auto">
                <div class="flex justify-center">
                    <div class="flex flex-col w-192 my-16 p-2">
                        
                        {/* <input type="file" onChange={ImageHandle}></input> */}
                            <label
                                className="mb-4 border border-transparent hover:border-gray-300 bg-sky-700 hover:bg-sky-400 text-white  flex justify-center items-center py-4 rounded w-full"
                                htmlFor="input-file"
                            >
                                사진 첨부하기
                            </label>
                            <input
                                type="file"
                                id="input-file"
                                className="hidden"
                                multiple
                                onChange={ImageHandle}
                            />
                        <div className='h-96 w-full'>
                            {preview.length>0 ?
                                <div>
                                    <img className='bg-black object-contain w-full h-96' src={selectedPreview} alt="사진을 넣어주세요!"/> 
                                </div>
                                :<img className='object-contain w-full h-96 bg-gray-200' src={plus} alt="사진을 넣어주세요!"/>      
                            }
                        </div>
                        <p className='bg-white text-md text-gray-600 pl-4 mt-2 rounded-sm\'>사진 리스트</p> 
                        <div className='bg-white  h-32'>
                            <div className='flex overflow-x-scroll'>
                            {preview.map(image => {
                                          return(
                                                <>
                                                <img onClick={()=>clickPreview(image)} className='mr-2 bg-black object-fill w-32 h-32' src={image} alt="사진을 넣어주세요!"/>
                                                </>
                                           )
                                    })}
                            </div>
                        </div>
                        

                    </div>
    
                    <div class="p-8 bg-gray-100 dark:bg-gray-800 flex flex-col lg:w-full xl:w-3/5">
                        <div class="mt-8">
                        <label class="mt-8 text-xl text-sky-700">제목</label>
                            <input onChange={InputHandle} class="border border-gray-300 p-4 rounded w-full text-base leading-4 placeholder-gray-600 text-gray-600" type="text" id="title" placeholder="OOO 팝니다" />
                        </div>    
                        <label class="mt-4 text-xl text-sky-700">가격</label>
                        <input onChange={InputHandle} class="border border-gray-300 p-4 text-right rounded w-full text-base leading-4 placeholder-gray-600 text-gray-600" type="number" id="price" placeholder="XXXXX원" />
                        
                        <div class="mt-4 flex-col">  
                            <label class="mt-8 text-xl text-sky-700">부가 정보</label>
                            <div class="flex-row flex">
                                <input onChange={InputHandle} class="border rounded-bl border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600" type="number" name="" id="room" placeholder="호실" />
                                <input onChange={InputHandle} class="border rounded-br border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600" type="password" name="" id="password" placeholder="비밀번호" />
                            </div>
                        </div>
    
                        <label class="mt-8 text-xl text-sky-700">게시글 내용</label>
                        <div class="mt-2 flex-col">
                            <div>
                                <textarea onChange={InputHandle} class="h-96 border rounded border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600" type="email" name="" id="content" placeholder="하고싶은 말을 써주세요!" />
                            </div>
                        </div>
                        <button onClick={SaveData} class="mt-8 border border-transparent hover:border-gray-300 dark:bg-white dark:hover:bg-gray-900 dark:text-gray-900 dark:hover:text-white dark:border-transparent bg-sky-700 hover:bg-sky-400 text-white hover:text-gray-900 flex justify-center items-center py-4 rounded w-full">
                            <div>
                                <p class="text-base leading-4">작성하기 </p>
                            </div>
                        </button>
                    </div>
                </div>
        </div>
    </div>
    )
}export default BoardWrite;