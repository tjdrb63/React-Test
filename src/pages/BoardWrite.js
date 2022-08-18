import axios from 'axios';
import React from 'react'
import {useState} from 'react'
import plus from '../images/plus.png'

// 제목
// 호실
// 내용
// 사진
// 비밀번호

function BoardWrite(){
    const [title,setTitle] = useState("");
    const [room,setRoom] = useState("");
    const [password,setPassword] = useState("");
    const [content,setContent] = useState("");
    const [price,setPrice] = useState("")
    const [preview,setPreview] = useState([]);
    const [imageFile,setImageFile] = useState("");

    const ImageHandle =(e) =>{
        console.log(e.target.files[0])
        setPreview([...preview],URL.createObjectURL(e.target.files[0]))
        setImageFile(e.target.files[0])
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
        axios.post("http://localhost:8000/products",
        {
            title:title,
            room:room,
            password:password,
            content:content,
            price:price

        }).then(res=>{
            alert("글써짐")
            window.location.href="/"
        })
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
                        <div className=' h-96 w-full'>
                            {preview.length>0 ?
                                <div>
                                    {preview.map(image => {
                                           <>{image}</>
                                           // <img className='bg-black object-contain  h-96' src={image} alt="사진을 넣어주세요!"/>
                                        
                                    })}
                                </div>
                                :<img className='object-contain w-full h-96 bg-gray-200' src={plus} alt="사진을 넣어주세요!"/>      
                            }
                        </div>
                        <div className='bg-gray-400 h-32'>관리 영역</div>
                        

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