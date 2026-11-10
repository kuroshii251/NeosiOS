
import { useState } from 'react';
import './App.css'
import Menu from './component/menu/menu'
import ListApp from './component/listapp/main';
import Calculator from './component/listapp/calculator/main';
import BrowserApp from './component/listapp/browser/main';
import Music from './component/listapp/music/main';
import Clocks from './component/listapp/clock/main';
import Clock from './component/listapp/clock/clock';
import StopWatch from './component/listapp/clock/stopwatch';

function App() {
     const [tab, setTab] = useState(0);
     const [inputs, setInputs] = useState("");

    const handleTab = (id) => {
        setTab(id);
    }

    const numberss = ["7","8","9","/","4","5","6","*","1","2","3","-","0",".","=","+", "AC", "Del"];

    const handleInput = (numberss) => {
      if(numberss === "="){
        setInputs(String(eval(inputs)));
      } else if(numberss == "AC") {
        setInputs("");
      } else if(numberss == "Del"){
        setInputs((value) => value.slice(0, -1))
      } else {
      setInputs((value) => value + numberss);

      }
    }

    
  return (
    <>
    <ListApp handleTab={handleTab}/>

<div className="absolute justify-center w-full top-1/2 ">


<Calculator handleInput={handleInput} tab={tab} setTab={setTab} numberss={numberss} inputs={inputs}/>
<BrowserApp tab={tab} setTab={setTab} />
<Music tab={tab} setTab={setTab}/>
<Clocks tab={tab} setTab={setTab}/>
<Clock tab={tab} setTab={setTab}/>
<StopWatch tab={tab} setTab={setTab}/>
  
</div>


       <div className="flex pt-20 flex-col z-">
      <Menu/>
      </div>
     
    </>
  )
}

export default App
