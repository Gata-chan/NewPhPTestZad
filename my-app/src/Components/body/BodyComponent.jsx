import React from 'react'
import { useState } from "react";
import './BodyComponent.css';
import axios, { Axios } from 'axios';

const BodyComponent = () => {
  const [personInfo, setPersonInfo] = useState({
    Name: "",
    Surname: "",
    Age: "",
  });
  const handleChange = (event) => {
    setPersonInfo({ ...personInfo, [event.target.name]: event.target.value });
  };
  
  function PostForm() {
    axios({
      method: 'POST',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      url: 'http://localhost/zad1post.php',
      data: personInfo
  })
  .then(function(response) {
  
      console.log(response);
  
  })
  .catch(function (error) {
      console.log(error);
  });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(personInfo);
    PostForm();
    event.target.reset();
    setPersonInfo({ Name: "", Surname: "", Age: "" });
  };




  return (
    <div className='Background'>
        <div className='Foreground'>
          <div className='FormDiv'>
            <div className='FormDivHead'>
              <p>Форма</p>
            </div>
            <div className='FormDivCentering'>
              <form autoComplete='off' onSubmit={(event)=> handleSubmit(event)} method='POST'>
                <input onChange={(event)=> handleChange(event)} id='Name' name='Name' className='text' placeholder='Имя' type='text' value={personInfo.Name}/>
                <input onChange={(event)=> handleChange(event)} id='Surname' name='Surname' className='text' placeholder='Фамилия' type='text' value={personInfo.Surname}/>
                <input onChange={(event)=> handleChange(event)} id='Age' name='Age' className='text' placeholder='Возраст (полных лет)' type='number' value={personInfo.Age}/>
                <div className='ButtonsDiv'>
                  <input id='ButtonSave' className='ButtonSave' value='Сохранить' type='submit'/>
                  <input id='ButtonUpload' className='ButtonUpload' value='Выгрузить' type="button"/>
                </div>
              </form>
            </div>
          </div>
        </div>
    </div>
  )
}

export default BodyComponent