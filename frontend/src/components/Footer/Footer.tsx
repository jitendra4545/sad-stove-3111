import React from 'react'
import "./Footer.css"
import { AiFillHeart } from "react-icons/ai";

const Footer = () => {
    return (
        <>

            <div className='Footer_Main_Div'>

                <div>
                <p>made with by</p>
                </div>

                <div>
                <span className='Heart_Icon_Footer'><AiFillHeart /></span>
                </div>

                <div>
                    
                <span className='Footer_Team_Name'>sad-stove-3111</span>
                </div>
                 
            </div>

        </>
    )
}

export default Footer