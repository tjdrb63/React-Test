import img from '../images/logo.jpg'

function ProductCard(){
    return(
        <div className="w-60 h-60 p-4 m-2 rounded-xl hover:bg-gray-200">
            {/* 이미지 영역  */}
            <div >
                <img className="rounded-xl h-36 w-60" src={img}></img>
            </div>
            {/* 글자 영역 */}
            <div>
                <p className="font-bold mt-1 truncate">영진전문대학 팝니다</p>
                <p className="text-gray-400 font-bold">726호</p>
                <p className="text-sky-700 font-bold">17,000원</p>    
            </div>
        </div>
    )
}export default ProductCard;