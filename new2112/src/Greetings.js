
//Greetings Component
import { useState } from "react";

export default function Greetings(props) {
    return (
        <h2>
            Hello I'm {props.name}, a {props.age} years old
            {props.occupation}.
            Pleased to meet you!
        </h2>
    );
}
