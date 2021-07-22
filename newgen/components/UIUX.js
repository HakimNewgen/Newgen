import Image from 'next/image'



function UIUX({Tcolor , Bcolor , side , ring, text , icon , title}) {
    return (
        <div className="grid place-items-center mt-32" >

            <div className={`w-5/12 rounded-xl p-10 h-80  bg-gradient-to-b ${Tcolor}  ${Bcolor}  relative ${side}  ring-8 ${ring} p-5 `}>
               <div className="grid place-items-center ">
                    <div className="bg-white w-24 rounded-full p-5 ">
                        <Image src="https://i.ibb.co/3hxYHsb/Capture.png" height={100} width={100} alt="" />

                    </div>
                    <h3 className="text-xl text-white mx-auto mt-10 mb-10 underline " >{title}</h3>
                    <p className="text-center text-white mx-auto">{text} </p>
               </div>
            </div>
            
        </div>
    )
}

export default UIUX
