import React from 'react'
import './style.scss'
import {Link } from "react-router-dom";


const Home = () => {

    const Home = () => (

        <div className='main_container'>
           <div className='main_container_heading'>
                <h1>Here is the Tasks Pages</h1>
           </div>
           <div className='main_container_buttons'>
                <div>
                    <button><Link to={"/task1"}>Task1</Link></button>
                    <p>Registraion Form</p>
                </div>
                <div>
                    <button><Link to={"/task2"}>Task2</Link></button>
                    <p>ToDo List</p>
                </div>
                <div>
                    <button><Link to={"/task3"}>Task3</Link></button>
                    <p>Image Gallery</p>
                </div>
               
           </div>
        </div>
    )
  return (
    <div className='main'>
        {Home()}
    </div>
  )
}

export default Home