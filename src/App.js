import React,{useState,useEffect} from 'react'
import Header from './components/Header';
import logo2 from './images/blobs.png'
import logo1 from './images/blobs2.png'
import Results from './components/Results';
import Form from './components/Form';

function App() {
  
const [gameData,setGameData] = useState([])
const [move,setMove] = useState(false)

const [user,setUser] = useState('')


function fletchData(value){
    setUser(value);
 }
const url  = `https://opentdb.com/api.php?amount=12&category=${user}&difficulty=easy&type=multiple`

const getData = async ()=>{
  try {
      const response = await fetch(url)
      const data = await response.json()
      setGameData(data.results);
  } catch (error) {
      console.log(error);
  }
}

useEffect(()=>{
  getData()
},[move])



const Element = gameData.map(newArray => 
<Header key={Math.random().toString()} 
id={Math.random().toString()}
question={newArray.question}
correct_answer={newArray.correct_answer}
incorrect_answers={newArray.incorrect_answers}
/>) 



function handleClick(){
  setMove(!move)
}


  return (
    <div>
  
     { move ?   <header className='home2' >
        {Element}
        <Results answers={gameData}/>
        <div className='btnholder'>
        <button className='homebtn' onClick={()=> handleClick()} >Home</button>
        </div>
       </header> :  <header className='home'>
       <img className='img1' src={logo1}/>
       <h3>Quizzical</h3>
       <p>Wellcome to quiz app </p>
       <Form get={fletchData}/>
       <button onClick={()=> handleClick()} >Start quiz</button>
       <img className='img2' src={logo2}/>
       <p className='ceo'>created by <a href="https://www.instagram.com/suresh__sk__07" target="_blank">@suresh__sk__07 <i className="fa-brands fa-instagram"></i></a></p> 
       </header >}
     </div>

  
  );
}

export default App;
