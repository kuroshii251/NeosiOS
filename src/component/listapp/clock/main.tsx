import Clock from "./clock";
import StopWatch from "./stopwatch";

export default function Clocks({tab, setTab}){
   
    return (
        <>
        <Clock tab={undefined} setTab={undefined}/>
        <StopWatch  tab={tab} setTab={setTab}/>
        </>
    )
}