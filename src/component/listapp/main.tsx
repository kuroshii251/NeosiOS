export default function ListApp({handleTab}) {
    return (
        <>


        <div className="">
                 <div className="flex flex-row space-x-3 space-y-5 p-5">
         <div className="bg-white border-1 border-black p-3 w-20 h-20 shadow-[2px_2px_0_0] shadow-black rounded-lg">
                <div className="flex justify-center items-center mx-auto pt-1">
<button onClick={() => handleTab(1)}>
<i className="fa-solid fa-calculator text-center text-2xl mx-auto"></i>
<p className="text-xs font-semibold mt-1">Calculator</p>
</button>
</div>

</div>
<div className="bg-white border-1 border-black p-3 w-20 h-20 shadow-[2px_2px_0_0] shadow-black rounded-lg">
                <div className="flex justify-center items-center mx-auto pt-1">
<button onClick={() => handleTab(5)}>
<i className="fa-brands fa-firefox-browser    text-center text-2xl mx-auto"></i>
<p className="text-xs font-semibold mt-1">Browser</p>
</button>
</div>
</div>
</div>

 <div className="flex flex-row space-x-5 space-y-5 p-5">
<div className="bg-white border-1 border-black p-3 w-20 h-20 shadow-[2px_2px_0_0] shadow-black rounded-lg">
                <div className="flex justify-center items-center mx-auto pt-1">
<button onClick={() => handleTab(3)}>
<i className="fa-regular fa-folder text-center text-2xl mx-auto"></i>
<p className="text-xs font-semibold mt-1">Homework</p>
</button>
</div>
</div>

<div className="bg-white border-1 border-black p-3 w-20 h-20 shadow-[2px_2px_0_0] shadow-black rounded-lg">
                <div className="flex justify-center items-center mx-auto pt-1">
<button onClick={() => handleTab(12)}>
<i className="fa-solid fa-music text-center text-2xl mx-auto"></i>
<p className="text-xs font-semibold mt-1">Music</p>
</button>
</div>
</div>
</div>

  <div className="flex flex-row space-x-5 space-y-5 p-5">

<div className="bg-white border-1 border-black p-3 w-20 h-20 shadow-[2px_2px_0_0] shadow-black rounded-lg">
                <div className="flex justify-center items-center mx-auto pt-1">
<button>
<i className="fa-solid fa-code text-center text-2xl mx-auto"></i>
<p className="text-xs font-semibold mt-1">IDE</p>
</button>
</div>
</div> 

<div className="bg-white border-1 border-black p-3 w-20 h-20 shadow-[2px_2px_0_0] shadow-black rounded-lg">
    <div className="flex justify-center items-center mx-auto pt-1">
<button>
<i className="fa-regular fa-clock text-center text-2xl mx-auto"></i>
<p className="text-xs font-semibold mt-1">Clock</p>
</button>
</div>
</div> 
</div>
</div>
         
</>
    )
}