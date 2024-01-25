import { useRef } from "react";

function Form() {
    const ref=useRef(null)
    const focus=()=>{
        ref.current.focus()
    }
    return(
        <>
        <input ref={ref}/>
        <button onClick={focus}>Focus</button>
        </>)

}
export default Form