
import React,{useState} from 'react'


const Header = (props)=>{


    const correct =  props.correct_answer
    const answer = props.incorrect_answers.map((newArray) => newArray )
    answer.push(correct)
    answer.sort(()=> (Math.random() > .5) ? 1 : -1)
    

    const [state,setState] = useState({
        value: answer,
        isClick : false,
        id : Math.random().toString()
    
    })


    const buttonAnswer = state.value.map(newArray => <button key={Math.random().toString()} className='answer'>{newArray}</button>)

    return(
        <div className='quiz-q'>
         <h4 className='qustion'>{props.question}</h4>
       { buttonAnswer }
        <hr className='code' />
        </div>
    )
}

export default Header