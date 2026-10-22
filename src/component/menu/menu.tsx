export default function Menu(){
    return (
        <>
        <div className="col w-300 flex justify-center items-center mx-auto rounded-xl p-4 bg-[#D0FF00] border-2 border-black">
            <div className="flex justify-center items-center">
                <ul className="flex list-style-none space-x-5">
                    <li>
                   <div className="bg-white border-1 border-black p-3 shadow-[2px_2px_0_0] shadow-black rounded-lg">
                <i className="fa-solid fa-terminal"></i>

                    </div>
                    </li>

                    <li>
         <div className="bg-white border-1 border-black p-3 shadow-[2px_2px_0_0] shadow-black rounded-lg">
<i className="fa-solid fa-code"></i>
                        </div>
                    </li>
                    
                    <li>
                    <div className="bg-white border-1 border-black p-3 shadow-[2px_2px_0_0] shadow-black rounded-lg">
<i className="fa-solid fa-calculator"></i>
                        </div>
                    </li>
                    <li>
                          <div className="bg-white border-1 border-black p-3 shadow-[2px_2px_0_0] shadow-black rounded-lg">
<i className="fa-solid fa-file-pen"></i>
                        </div>

                    </li>
                    <li>
                        <div className="bg-white border-1 border-black p-3 shadow-[2px_2px_0_0] shadow-black rounded-lg">
<i className="fa-solid fa-images"></i>                        </div>
                    </li>
                    <li>
                          <div className="bg-white border-1 border-black p-3 shadow-[2px_2px_0_0] shadow-black rounded-lg">
<i className="fa-solid fa-folder"></i>                        </div>


                    </li>
                    <li>
                          <div className="bg-white border-1 border-black p-3 shadow-[2px_2px_0_0] shadow-black rounded-lg">
<i className="fa-brands fa-spotify"></i>
                        </div>

                    </li>
                    <li>
                          <div className="bg-white border-1 border-black p-3 shadow-[2px_2px_0_0] shadow-black rounded-lg">
                            <i className="fa-brands fa-firefox text-lg"></i>
                        </div>

                    </li>
                  
                </ul>

            </div>
            
        </div>
        </>
    )
}