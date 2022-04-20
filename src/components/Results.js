import React,{useState} from 'react'

const Results = (props)=>{

    const [show ,setShow] = useState(false)

    const value = props.answers.map(newArray => newArray.correct_answer + " , ")


   function handleClick(){
       setShow(!show)
   }

    return(
        <div>
        <div className='btnholder' >
             <button onClick={() => handleClick()} className='btn2'>{show ? 'Hide answers' : 'Check answers'}</button>
        </div>
        <div>
        {show ? <div className='value'>{value}</div> : ''}
        </div>
       
        </div>
    )
}

export default Results 