import AnswerItem from './AnswerItem/AnswerItem';
import './AnswerList.css';
export default function AnswerList(props){
    const array = 
props.answers.map
((answer, index)=>
        <AnswerItem  key={index} answer={answer} onAnswerClick={props.onAnswerClick} state={props.state ? props.state[
answer.id
]: null}/>
    )
    return (
        <ul className="AnswerList">
       {array}
        </ul>
    )
   
} 