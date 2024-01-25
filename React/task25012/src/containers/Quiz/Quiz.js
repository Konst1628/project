import {useState} from 'react'
import ActiveQuiz from '../../Components/ActiveQuiz/ActiveQuiz';
import './Quiz.css';
import FinishedQuiz from '../../Components/FinishedQuiz/FinishedQuiz';
export default function Quiz(){
    const [activeQuestion, setActiveQuestion] = useState(0);
    const [answerState, setAnswerState] = useState(null);
    const [finished, setFinished] = useState(false)
    const quiz =[
        {   
            question: 'Какого цвета солнце?',
            rightAnswerId: 1,
            id:1,
            answers:[
                {text: 'Желтый', id:1},
                {text: 'Красный', id:2},
                {text: 'Черный', id:3},
                {text: 'Синий', id:4}
            ]
        },
        {   
            question: 'Выберите зимний месяц',
            rightAnswerId: 3,
            id:2,
            answers:[
                {text: 'Март', id:1},
                {text: 'Июль', id:2},
                {text: 'Январь', id:3},
                {text: 'Сентябрь', id:4}
            ]
        },

    ];
    function onAnswerClick(answerId){
        const question = quiz[activeQuestion];
            if(question.rightAnswerId === answerId){

                setAnswerState({[answerId]: 'success'})

                if(activeQuestion + 1 === quiz.length ){
                    setFinished(true);
                }
                else{
                    setActiveQuestion(activeQuestion + 1);
                    setAnswerState(null)
                }
            }
           
            else {
                setAnswerState({[answerId]: 'error'})
            }

        }
   
    return(
        <div className="Quiz">
        <div className="QuizWrapper">
          <h1>Опрос</h1>
          {
            finished ? <FinishedQuiz/> : 
            <ActiveQuiz 
          answers={quiz[activeQuestion].answers}
          question={quiz[activeQuestion].question}
          onAnswerClick={onAnswerClick}
          quizLength = {quiz.length}
          answerNumber = {activeQuestion + 1}
          state = {answerState}
          />
          }

          
        </div>
      </div>
    )
} 