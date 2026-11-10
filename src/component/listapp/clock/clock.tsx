import { useEffect, useState } from "react";

export default function Clock({tab, setTab}){
       const [times, setTimes] = useState(new Date());
        useEffect(() => {
            const sec = setInterval(() => {
                setTimes(new Date());
            }, 1000);
    
            return () => clearInterval(sec);
        },   [times])
    return (
        <>
         <div className={`${tab === 15 ? "block" : "hidden"} col p-5 justify-center absolute  items-center `}>
      
      <div className=" bg-slate-100 border-2 fixed inset-0 z-80 border-black h-full w-full overflow-hidden">
        <div className='bg-white h-20  p-0 rounded-t-lg   w-full h-full'>
          <div className="col flex justify-between bg-yellow-500 items-center border border-b-3 place-content-center p-3">
        <div className='space-x-3'>
          <span className='w-5 aspect-square bg-red-700 p-2 rounded-full inline-block'></span>
          <span className='w-5 aspect-square bg-yellow-700 p-2 rounded-full inline-block'></span>
          <span className='w-5 aspect-square bg-green-700 p-2 rounded-full inline-block'></span>
    </div>
              <p className='text-center font-semibold'>Clock</p>

          <div className='flex   justify-center-end space-x-5'>
             <button onClick={() => setTab(1)}>
          <i className="fa-solid fa-picture-in-picture"></i>
            </button>
            <button onClick={() => setTab(0)}>
            <i className="fa-solid fa-x"></i>
            </button>
          </div>
          </div>
      
        <div className=" inset-0 z-40 flex justify-center items-center">
            <div className="flex flex-col mt-5 justify-center items-center align-items-center">
                <div className="bg-black p-3 w-100 flex justify-center gap-10 rounded-xl ">
                    <a onClick={() => setTab(15)} className="text-white font-semibold cursor-pointer p-3 w-50 text-md hover:bg-gray-900 rounded-xl text-center">Clock</a>
                     <a onClick={() => setTab(17)} className="text-white cursor-pointer w-50 text-md p-3 rounded-xl  font-semibold hover:bg-gray-900 text-center">Stopwatch</a>


                </div>
                <div className="flex flex-col justify-center items-center pt-30">
                  <div className="bg-black p-5 rounded-xl ">
                              <h1 className="text-5xl text-white font-bold">{times.toLocaleTimeString()}</h1>

                  </div>

                </div>
            </div>
      </div>
        </div>
        
      </div>   
   
    </div>


      <div className='col p-5 justify-center absolute inset-0 items-center flex items-center scale-80 pt-0 '>
      <div className={`${tab === 15 ? "active" : "hidden"} bg-slate-100 border-black border-2 border-t h-120 w-100 overflow-hidden`}>
       <div className='bg-white h-20  p-0 rounded-t-lg   w-full h-full'>
          <div className="col flex justify-between bg-yellow-500 items-center border border-b-3 place-content-center p-3">
        <div className='space-x-3'>
          <span className='w-5 aspect-square bg-red-700 p-2 rounded-full inline-block'></span>
          <span className='w-5 aspect-square bg-yellow-700 p-2 rounded-full inline-block'></span>
          <span className='w-5 aspect-square bg-green-700 p-2 rounded-full inline-block'></span>
          </div>

          <p className='text-center font-semibold'>Clock</p>

          <div className='flex   justify-center-end'>
             <button onClick={() => setTab(3)}>
            <i className="fa-solid fa-expand"></i>

            </button>
            <button onClick={() => setTab(0)}>
            <i className="fa-solid fa-x"></i>

            </button>
          </div>
          </div>
      
         <div className=" inset-0 flex justify-center items-center">
            <div className="flex justify-center pt-3 items-center align-items-center">
              <div className="bg-white scale-90 border-black border-2 border-r-10 border-b-10 h-100 rounded-xl  p-3 w-85">
                <h1>{times.toLocaleTimeString()}</h1>
                
              </div>
            </div>
      </div>
        </div>
     
      </div>

      
   
    </div>
        </>
    )
}