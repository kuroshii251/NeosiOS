import songphoto1 from "../../../assets/brunomars_song1.png"
import songphoto2 from "../../../assets/seasons.png"
import songphoto3 from "../../../assets/beabadoobe.png"
import songphoto4 from "../../../assets/harvey.png"
import songphoto5 from "../../../assets/herecomesthesun.png"
import songphoto6 from "../../../assets/wonderwall.png"
import songphoto7 from "../../../assets/stress_relief.png"
import riskitall from "../../../assets/song/riskitall.mp3"
import herecomesthesun from "../../../assets/song/herecomesthesun.mp3"
import wonderwall from "../../../assets/song/wonderwall.mp3"
import seasons from "../../../assets/song/seasons.mp3"
import harvey from "../../../assets/song/harvey.mp3"
import gluesong from "../../../assets/song/gluesong.mp3"
import stressrelief from "../../../assets/song/stressrelief.mp3"

import { useEffect, useRef, useState } from "react"




export default function Music({tab, setTab}){

    const ListSong = [
        {
            id: 0,
            images: songphoto1,
            song_name: "Risk It All",
            author: "Bruno Mars",
            audio: riskitall

        },
          {
            id: 1,
            images: songphoto2,
            song_name: "Seasons",
            author: "Wave to Earth",
            audio: seasons


        },
          {
            id: 2,
            images: songphoto3,
            song_name: "Glue Song",
            author: "beabadoobe",
            audio:gluesong


        },
          {
            id: 3,
            images: songphoto4,
            song_name: "Harvey",
            author: "Her's",
            audio:harvey


        },
          {
            id:4,
            images: songphoto5,
            song_name: "Here Comes The Sun",
            author: "The Beatles",
            audio:herecomesthesun


        },
          {
            id: 5,
            images: songphoto6,
            song_name: "Wonderwall",
            author: "Oasis",
            audio:wonderwall


        },
          {
            id: 6,
            images: songphoto7,
            song_name: "Stress Relief",
            author: "Late Night Drive Home",
            audio:stressrelief

        }
    ]

      const musicc = useRef(new Audio());
      const [mutes] = useState<boolean>(false);

      const handleMusic = (id: number) => {
        musicc.current.src = ListSong[id].audio;
        musicc.current.play();
      }


      useEffect(() => {
        musicc.current.muted = mutes;
      }, [mutes]);
    return (
        <>
      <div className='col p-5 justify-center absolute inset-0 items-center flex items-center scale-80 pt-0 '>

         <div className={`${tab === 12 ? "active" : "hidden"} bg-slate-100 border-black border-2 border-t h-120 w-100 overflow-hidden`}>
       <div className='bg-white h-20  p-0 rounded-t-lg   w-full h-full'>
          <div className="col flex justify-between bg-yellow-500 items-center border border-b-3 place-content-center p-3">
        <div className='space-x-3'>
          <span className='w-5 aspect-square bg-red-700 p-2 rounded-full inline-block'></span>
          <span className='w-5 aspect-square bg-yellow-700 p-2 rounded-full inline-block'></span>
          <span className='w-5 aspect-square bg-green-700 p-2 rounded-full inline-block'></span>
          </div>

          <p className='text-center font-semibold'>Music</p>

          <div className='flex   justify-center-end'>
             <button onClick={() => setTab(13)}>
            <i className="fa-solid fa-expand"></i>

            </button>
            <button onClick={() => setTab(0)}>
            <i className="fa-solid fa-x"></i>
            </button>
           
          </div>
          
          
          </div>
      
       <div className="flex flex-col justify-center items-center space-y-5  pt-5 ">
            {ListSong.map((items) => (
                <>
                  <div className="col block p-5 w-70 flex rounded-lg bg-black" key={items.id}>
                <div className="flex justify-start gap-5 items-center">
                    <img src={items.images} className="object-fit w-10" alt="" />
                    <div className="">
  <h1 className="text-white font-semibold">{items.song_name}</h1>
                     <p className="text-gray-600 text-sm text-semibold">{items.author}</p>
                    </div>

                    <div className="flex flex-col justify-end w-auto  ">
                    <button className="bg-yellow-500 p-2 cursor-pointer aspect-square  rounded-full" onClick={() => handleMusic(items.id)} type="button">
<h1>Play</h1>
                    </button>
                    </div>
                </div>
            </div>
                </>
            ))}
          
          </div>
        </div>
     
      </div>
      </div>

            <div className={`${tab === 13 ? "block" : "hidden"} col p-5 justify-center absolute  items-center `}>
      
      <div className=" bg-slate-100 border-2 fixed inset-0 z-30 border-black h-full w-full overflow-hidden">
        <div className='bg-white h-20  p-0 rounded-t-lg   w-full h-full'>
          <div className="col flex justify-between bg-yellow-500 items-center border border-b-3 place-content-center p-3">
        <div className='space-x-3'>
          <span className='w-5 aspect-square bg-red-700 p-2 rounded-full inline-block'></span>
          <span className='w-5 aspect-square bg-yellow-700 p-2 rounded-full inline-block'></span>
          <span className='w-5 aspect-square bg-green-700 p-2 rounded-full inline-block'></span>


    </div>
              <p className='text-center font-semibold'>Music</p>

          <div className='flex   justify-center-end space-x-5'>
             <button onClick={() => setTab(12)}>
          <i className="fa-solid fa-picture-in-picture"></i>
            </button>
            <button onClick={() => setTab(0)}>
            <i className="fa-solid fa-x"></i>

            </button>
           
          </div>
          
          </div>
          <div className="flex flex-col space-y-5 justify-center items-center  pt-5 ">
            {ListSong.map((items) => (
                <>
                  <div className="col block p-5 w-150 rounded-lg bg-black" key={items.id}>
                <div className="flex justify-start gap-5 items-center">
                    <img src={items.images} className="object-fit w-10" alt="" />
                    <div className="">
  <h1 className="text-white font-semibold">{items.song_name}</h1>
                     <p className="text-gray-600 text-sm text-semibold">{items.author}</p>
                    </div>

                    <div className="flex flex-col justify-end w-auto  ">
                    <button className="bg-yellow-500 p-2 cursor-pointer aspect-square  rounded-full" onClick={() => handleMusic(items.id)} type="button">
                                <i className={`fa-solid text-black ${mutes ? "fa-volume" : "fa-volume-xmark"}`}></i>

<i className="fa-solid fa-play"></i>

                    </button>
                    </div>
                </div>
            </div>
                </>
            ))}
          
          </div>
      
        </div>
        
      </div>   
   
    </div>
        </>
    )

}