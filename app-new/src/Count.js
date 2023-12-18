import{useState} from 'react';
export default function Count() {
    const [count,setCount]= useState(0);
    //let count = 0
    function handleClick() {
        //count= count+1
        //console.log(count)
setCount(count-1);
    }
    return(
        <button onClick={handleClick}>
            Clicked{count} times
        </button>
    );
}