import Count2 from "./Count2";
import { useState } from "react";

export default function Buttons() {
    const[count,setCount] = useState(0);

    function handleClick() {
        setCount(count+1);
    }

    return(
        <div>
            <h1>Counters that update together</h1>
            <Count2 count={count} onClick={handleClick}/>
            <Count2 count={count} onClick={handleClick}/>
        </div>
    )
}