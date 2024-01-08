import {useState} from 'react';

export default function Cities2(){



                const badLetter = ["ь", "ъ", "ы", "ё"];
                
                let [lastLetter, setLastLetter] = useState("");
                let [currentPlayer, setCurrentPlayer] = useState(1);
                const [cityFirstPlayer, setCityFirstPlayer] = useState([]);
                const [citySecondPlayer, setCitySecondPlayer] = useState([]);
                let [city, setCity] = useState("");

                function handleCityChange(event){
                    setCity(event.target.value);
                }

                function addCity(event){
                    let cities = cityFirstPlayer.concat(citySecondPlayer); 
                    
                    let last = city[city.length - 1]; // последняя буква введенного города
                    let currentIndex = city.length - 1;
                    while (badLetter.includes(last)) {
                        currentIndex--;
                        last = city[currentIndex];
                    }

                    let first = city[0].toLowerCase();

                    if (lastLetter === "") {
                        setLastLetter(last);
                        setCityFirstPlayer([city]);
                        setCurrentPlayer(2);
                        setCity("");
                    } else {
                        if (lastLetter !== first)
                            return false;

                        if (cities.includes(city))
                            return false;

                        setLastLetter(last);

                        if (currentPlayer === 1) {
                            setCityFirstPlayer([...cityFirstPlayer, city]);
                            setCurrentPlayer(2);
                        } else {
                            setCitySecondPlayer([...citySecondPlayer, city])
                            setCurrentPlayer(1);
                        }
                        setCity("");
                    }     
                                  
                }


    return (
        <>
                    <div class="field">
                        <input type="text" name="city" id="city" value={city} onChange={handleCityChange}/>
                        <button class='play' onClick={addCity}>Добавить город</button>
                    </div>
                    <div class="first-player">
                        <ul class="list-group">
                            {
cityFirstPlayer.map
((item) => <li class="list-group-item">{item}</li>)}
                        </ul>    
                    </div>
                    <div class="second-player">
                        <ul class="list-group">
                            {
citySecondPlayer.map
((item) => <li class="list-group-item">{item}</li>)}
                        </ul>     
                    </div>                
                </>
    )
} 