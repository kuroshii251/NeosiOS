
export default function Calculator({tab, setTab, inputs, numberss, handleInput}){
    return (
        <>
            <div className={`${tab === 3 ? "block" : "hidden"} col p-5 justify-center absolute  items-center `}>
      
      <div className=" bg-slate-100 border-2 fixed inset-0 z-80 border-black h-full w-full overflow-hidden">
        <div className='bg-white h-20  p-0 rounded-t-lg   w-full h-full'>
          <div className="col flex justify-between bg-yellow-500 items-center border border-b-3 place-content-center p-3">
        <div className='space-x-3'>
          <span className='w-5 aspect-square bg-red-700 p-2 rounded-full inline-block'></span>
          <span className='w-5 aspect-square bg-yellow-700 p-2 rounded-full inline-block'></span>
          <span className='w-5 aspect-square bg-green-700 p-2 rounded-full inline-block'></span>


    </div>
              <p className='text-center font-semibold'>Calculator</p>

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
            <div className="flex mt-5 justify-center pt-10 items-center align-items-center">
              <div className="bg-white scale-100 border-black border-2 border-r-10 border-b-10 h-100 rounded-xl  p-3 w-85">
                <div className="">
                  <input type="text" value={inputs} className='w-75 rounded-md border-2 border-r-5  border-b-5 h-20 text-black' disabled/>
                </div>
                <div className="grid grid-cols-4 mt-3 gap-2 ">
                  {numberss.map ((items) => (
                    <button key={items} onClick={() => handleInput(items)} className='rounded-md border-2 border-black bg-yellow-500 text-black font-semibold p-2'>
                       <h1>{items}</h1>

                      </button>
                  ))}
                </div>  
              </div>
            </div>
      </div>
        </div>
        
      </div>   
   
    </div>


      <div className='col p-5 justify-center absolute inset-0 items-center flex items-center scale-80 pt-0 '>
      <div className={`${tab === 1 ? "active" : "hidden"} bg-slate-100 border-black border-2 border-t h-120 w-100 overflow-hidden`}>
       <div className='bg-white h-20  p-0 rounded-t-lg   w-full h-full'>
          <div className="col flex justify-between bg-yellow-500 items-center border border-b-3 place-content-center p-3">
        <div className='space-x-3'>
          <span className='w-5 aspect-square bg-red-700 p-2 rounded-full inline-block'></span>
          <span className='w-5 aspect-square bg-yellow-700 p-2 rounded-full inline-block'></span>
          <span className='w-5 aspect-square bg-green-700 p-2 rounded-full inline-block'></span>
          </div>

          <p className='text-center font-semibold'>Calculator</p>

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
                <div className="">
                  <input type="text" value={inputs} className='w-75 rounded-md border-2 border-r-5  border-b-5 h-20 text-black' disabled/>
                </div>
                <div className="grid grid-cols-4 mt-3 gap-2 ">
                  {numberss.map ((items) => (
                    <button key={items} onClick={() => handleInput(items)} className='rounded-md border-2 border-black bg-yellow-500 text-black font-semibold p-2'>
                       <h1>{items}</h1>

                      </button>
                  ))}
                </div>  
              </div>
            </div>
      </div>
        </div>
     
      </div>

      
   
    </div>
    
    </>
    )
}