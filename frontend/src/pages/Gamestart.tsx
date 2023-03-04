import React from 'react'
import Footer from '../components/Footer/Footer'
import "./Gamestart.css"
import { FaUserGraduate } from "react-icons/fa";
import { Input, Stack } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom";

const GameStart = () => {


    const navigate = useNavigate()


    const handelNextPage = () => {
        navigate("/dashboard")
    }



    return (
        <>
            <div className='Main_Div_Home_Page'>


               

                <div className='Gif_Img'>
                    <img src="https://4.bp.blogspot.com/-EXlq7avczyQ/Xl-kmbvbFeI/AAAAAAAO63U/z-9JzDbcmLkvRmRCw-dV7uy2CU6zaJC5gCLcBGAsYHQ/s1600/AW4203214_11.gif" alt="" />
                </div>

                <div className='Home_Page_Heading'>

                    <h1>Do You Know</h1> 

                </div>

                <div className='Math_Name_Heading'>
                    <h1>Math?</h1>
                </div>

                <div className='Input_Home_Page'>
                    <Input  textAlign="center" placeholder='Player 1 name' size='lg' focusBorderColor='teal.500' />
                    <Input textAlign="center" placeholder='Player 2 name' size='lg' focusBorderColor='teal.500' />
                </div>



                <Button onClick={handelNextPage} className='Home_Page_Button' colorScheme='white' width="25%" variant='outline'>
                    Submit
                </Button>





            </div>

            <Footer />

        </>
    )
}

export default GameStart