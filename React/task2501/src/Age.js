import {useEffect,useState} from 'react'
export default function BasicEffect(){
    const[age,setAge]=useState(19)

    const handleClick=()=>setAge(age+1)

    useEffect(()=>{
        document.title=`Тебе${age}лет!`
    })
    return(
        <>
        <p>Обратите внимание на заголовок текущей вкладки</p>
        <button onClick={handleClick}>Обновить заголвок!</button>
        </>
    )
}