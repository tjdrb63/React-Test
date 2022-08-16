import React from 'react'
import {useState} from 'react'
import plus from '../images/plus.png'

// 제목
// 호실
// 내용
// 사진
// 비밀번호

function BoardWrite(){
    const [preview,setPreview] = useState('');
    const [imageFile,setImageFile] = useState('');
    const ImageHandle =(e) =>{
        console.log(e.target.files[0])
        setPreview(URL.createObjectURL(e.target.files[0]))
        setImageFile(e.target.files[0])
    }
    return(
        <div>
            <div class="py-0 px-4 md:px-6 2xl:px-0 flex justify-center items-center 2xl:mx-auto 2xl:container">
                <div class="flex flex-col xl:flex-row justify-center xl:justify-between space-y-6 xl:space-y-0 xl:space-x-6 w-full">
                    <div class="xl:w-3/5 flex flex-col sm:flex-row xl:flex-col justify-center items-center bg-gray-100 dark:bg-gray-800 py-7 sm:py-0 xl:py-10 px-10 xl:w-full">
                       
                        <div class="flex flex-col justify-start items-start w-full space-y-4">
                        </div>
                        <input type="file" onChange={ImageHandle}></input>
                        {preview ? <img className='bg-gray-500 w-120 h-120 object-fill' src={preview} alt="사진을 넣어주세요!zz"  /> : <img className='w-96 h-96 bg-gray-200' src={plus} alt="사진을 넣어주세요!"  />}
                    </div>
    
                    <div class="p-8 bg-gray-100 dark:bg-gray-800 flex flex-col lg:w-full xl:w-3/5">
                        <div class="mt-8">
                        <label class="mt-8 text-xl text-sky-700">제목</label>
                            <input class="border border-gray-300 p-4 rounded w-full text-base leading-4 placeholder-gray-600 text-gray-600" type="email" name="" id="" placeholder="OOO 팝니다" />
                        </div>
                        <label class="mt-8 text-base leading-4 text-gray-800 dark:text-gray-50"></label>
                        <div class="mt-2 flex-col">
                            <div class="flex-row flex">
                                <input class="border rounded-bl border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600" type="number" name="" id="" placeholder="호실" />
                                <input class="border rounded-br border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600" type="password" name="" id="" placeholder="비밀번호" />
                            </div>
                        </div>
    
                        <label class="mt-8 text-xl text-sky-700">게시글 내용</label>
                        <div class="mt-2 flex-col">
                            <div>
                                <textarea class="h-96 border rounded border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600" type="email" name="" id="" placeholder="하고싶은 말을 써주세요!" />
                            </div>
                        </div>
                        <button class="mt-8 border border-transparent hover:border-gray-300 dark:bg-white dark:hover:bg-gray-900 dark:text-gray-900 dark:hover:text-white dark:border-transparent bg-sky-700 hover:bg-sky-400 text-white hover:text-gray-900 flex justify-center items-center py-4 rounded w-full">
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