import React,{useState} from 'react'


function Form(props){

    const [formData,setFormData] = useState('')


      const handleChange = (e)=>{
          setFormData(e.target.value)
      }

      function submitForm(e){
        e.preventDefault()
        if(formData === ''){
        alert("plz select one")
        return
        } 
        props.get(formData)
      }

    return(
        
         <form className='form' onSubmit={ submitForm}>
          <label htmlFor='select'>Select any one category </label>
          <select id='select' value={formData} onChange={handleChange}>
          <option value="9">General Knowledge</option>
          <option value="25">Art</option>
        <option value="27">Animals</option>
        <option value="24">Politics</option>
        <option value="23">History</option>
        <option value="26">Celebrities</option>
        <option value="28">Vehicles</option>
        <option value="18">Seience : computer</option>
        <option value="17">Seience : Nature</option>
        <option value="30">Seience : Gadgets</option>
        <option value="19">Seience : Mathematics</option>
        <option value="15">Entertainment : Video games</option>
        <option value="12">Entertainment : Music</option>
        <option value="10">Entertainment : Books</option>
        <option value="11">Entertainment : Flim</option>
        <option value="13">Entertainment : Theatres</option>
        <option value="14">Entertainment : Television</option>
        <option value="18">Entertainment : Board games</option>
        <option value="29">Entertainment : Cartoon</option>
        </select>
         <button type='submit'>submit</button>
       </form> 
      
    )
}

export default Form