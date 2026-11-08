export default function BrowserApp({tab, setTab }){
    return (
        <>
          <div className={`${tab === 10 ? "block" : "hidden"} col p-5 justify-center absolute  items-center `}>
          <div className=" bg-slate-100 border-2 fixed inset-0 z-80 border-black h-full w-full overflow-hidden">
        <div className='bg-white h-20  p-0 rounded-t-lg   w-full h-full'>
          <div className="col flex justify-between bg-yellow-500 items-center border border-b-3 place-content-center p-3">
        <div className='space-x-3'>
          <span className='w-5 aspect-square bg-red-700 p-2 rounded-full inline-block'></span>
          <span className='w-5 aspect-square bg-yellow-700 p-2 rounded-full inline-block'></span>
          <span className='w-5 aspect-square bg-green-700 p-2 rounded-full inline-block'></span>


    </div>
              <p className='text-center font-semibold'>Neosi OS Browser</p>

          <div className='flex   justify-center-end space-x-5'>
             <button onClick={() => setTab(1)}>
          <i className="fa-solid fa-picture-in-picture"></i>
            </button>
            <button onClick={() => setTab(0)}>
            <i className="fa-solid fa-x"></i>
            </button>
          </div>
          </div>
        <div className=" inset-0 flex justify-center mb-0 h-1000 items-start w-full">
            <div className="flex flex-col justify-center  items-center h-100">    
                <h1 className="text-5xl font-bold mb-10">Neosi OS Browser</h1>
<div className="  ">
  <i className="fa-solid fa-magnifying-glass absolute flex py-3 p-3 flex justify-end"></i>
<input type="text" className="shadow shadow-black p-2 w-100 rounded-md " name="" id="" />
</div>

<div className="flex flex-row space-x-5 translate-y-16">
    <div className="bg-yellow-500 border-2 p-3 border-r-5 border-b-5 rounded-md">
        <i className="fa-brands  fa-youtube text-2xl"></i>
    </div>
     <div className="bg-yellow-500 border-2 p-3 border-r-5 border-b-5 rounded-md">
<i className="fa-brands fa-instagram text-2xl"></i>
    </div>
     <div className="bg-yellow-500 border-2 p-3 border-r-5 border-b-5 rounded-md">
<i className="fa-brands fa-github text-2xl"></i>
    </div>
   <div className="">
    </div> 

</div>
            </div>
            

</div>
       
      </div>
      
      
        </div>
        
      </div>   
   

       <div className='col p-5 justify-center absolute inset-0 items-center flex items-center scale-80 pt-0 '>

         <div className={`${tab === 5 ? "block" : "hidden"} bg-slate-100 border-black border-2 border-t h-120 w-100 overflow-hidden`}>
       <div className='bg-white h-20  p-0 rounded-t-lg   w-full h-full'>
          <div className="col flex justify-between bg-yellow-500 items-center border border-b-3 place-content-center p-3">
        <div className='space-x-3'>
          <span className='w-5 aspect-square bg-red-700 p-2 rounded-full inline-block'></span>
          <span className='w-5 aspect-square bg-yellow-700 p-2 rounded-full inline-block'></span>
          <span className='w-5 aspect-square bg-green-700 p-2 rounded-full inline-block'></span>
          </div>
          <p className='text-center font-semibold'>Neosi OS Browser</p>
          <div className='flex   justify-center-end'>
             <button onClick={() => setTab(10)}>
            <i className="fa-solid fa-expand"></i>

            </button>
            <button onClick={() => setTab(0)}>
            <i className="fa-solid fa-x"></i>
            </button>
          </div>
          </div>
      
        <div className=" inset-0 flex justify-center mb-0 h-1000 items-start w-full">
            <div className="flex flex-col justify-center items-center h-100">    
                <h1 className="text-3xl font-bold mb-10 text-center">Neosi OS Browser</h1>
              <div className="  ">
  <i className="fa-solid fa-magnifying-glass absolute flex py-3 p-3 flex justify-end"></i>
<input type="text" className="shadow shadow-black p-2 w-80 rounded-md " name="" id="" />
</div>


<div className="flex flex-row space-x-5 translate-y-20">
    <div className="bg-yellow-500 border-2 p-3 border-r-5 border-b-5 rounded-md">
        <i className="fa-brands  fa-youtube text-2xl"></i>
    </div>
     <div className="bg-yellow-500 border-2 p-3 border-r-5 border-b-5 rounded-md">
<i className="fa-brands fa-instagram text-2xl"></i>
    </div>
     <div className="bg-yellow-500 border-2 p-3 border-r-5 border-b-5 rounded-md">
<i className="fa-brands fa-github text-2xl"></i>
    </div>
   <div className="">
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