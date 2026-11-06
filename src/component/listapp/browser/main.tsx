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
              <p className='text-center font-semibold'>Browser</p>

          <div className='flex   justify-center-end space-x-5'>
             <button onClick={() => setTab(1)}>
          <i className="fa-solid fa-picture-in-picture"></i>
            </button>
            <button onClick={() => setTab(0)}>
            <i className="fa-solid fa-x"></i>

            </button>
           
          </div>

             
          
          </div>
        <div className=" inset-0 flex justify-center mb-0 h-100 items-start w-full">
            <div className="flex flex-col justify-center items-center h-100">
                
                <h1 className="text-3xl font-bold">Browser</h1>
                <script async src="https://cse.google.com/cse.js?cx=53c0486e561494005">
</script>
<div className="gcse-search">
   
</div>
            </div>
            

</div>
       
      </div>
      
      
        </div>
        
      </div>   
   

        <div className={`${tab === 5 ? "block" : "hidden"} bg-slate-100 border border-black h-100 w-100 overflow-hidden rounded-lg`}>
        <div className='bg-white h-20 shrink-0 rounded-t-lg'>
          <div className="col flex justify-between items-center place-content-center h-full p-3">
          <h1>tes</h1>
            <button onClick={() => setTab(0)}>
            <i className="fa-solid fa-x"></i>

            </button>
          </div>
      
        </div>

        <div className="col flex-1 min-h-0">
<iframe src="https://example.com" className='w-full h-100 border-0'></iframe>      
  </div>
</div>
</>
    )
}