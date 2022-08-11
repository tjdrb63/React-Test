import React from 'react'
import YButton from '../components/YButton'
import logo from '../images/logo.jpg'

function Header(){
    return(
        <div className="pb-16">
            <div className="fixed border-gray-200 bg-white flex justify-between w-full h-16">
                <div className="flex">
                    <img className="my-2 ml-10 mr-2 h-12 w-12" src={logo}></img>
                    <div className="mt-4 text-lg font-bold text-sky-700">            
                        글로벌 캠퍼스 중고나라 
                    </div>        
                </div>
                <div>
                    <input className="w-64 bg-gray-200 rounded-xl border h-12 mt-2 mr-4 p-3 justify-end"  placeholder="원하는 물건을 검색해보세요."/>
                    <span className="mr-16"><YButton text="물건 팔기"/></span>
                </div>
                
            </div>

        </div>
    )
}export default Header;