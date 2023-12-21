
import { useState } from "react";

/*export default function App() {
    const props = {firstNAme: 'Pallav', lastName:'Hegde'}
    return <Hello{...props}/>
}*/

export default function Hello({firstName, lastName}){
    return (
        <p>Привет, {firstName} {lastName}</p>
    )
}
