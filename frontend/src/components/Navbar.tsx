import { Box, Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import { AiFillHeart,AiFillStar } from "react-icons/ai";

interface props{
  playeroneRight:number,
  playertwoRight:number,
  playeroneWrong:number,
  playertwoWrong:number,

}

const Navbar = ({playeroneRight,playertwoRight,playeroneWrong,playertwoWrong}:props) => {
  let arr1:Array<number> = []
  let arr2:Array<number> = []
  for( let i=0; i<playeroneWrong; i++){
    arr1.push(1)
  }
  for( let i=0; i<playertwoWrong; i++){
    arr2.push(1)
  }

  // let arr3:Array<number> = []
  // let arr4:Array<number> = []
  // for( let i=0; i<playeroneWrong; i++){
  //   arr3.push(1)
  // }
  // for( let i=0; i<playertwoWrong; i++){
  //   arr4.push(1)
  // }

  return (
    <Box style={{backgroundColor:"#1E88E5", paddingTop:"20px", paddingBottom:"20px",  }}>
      <Box  display="flex" justifyContent="space-between" width={"90%"} margin="auto">

        <Box display={"flex"} >
          <Heading color={"white"} size={"md"}>Player 1   
          <Box display={"flex"}>
          {
            arr1.map((el)=>{
              return <p>
                <AiFillHeart color="darkred"/>
              </p>
            })
          }
          </Box>
           
          </Heading> &nbsp; &nbsp;
          <Heading color={"white"} size={"md"}>Player 2
          <Box display={"flex"}>
          {
            arr2.map((el)=>{
              return <p>
                <AiFillHeart color="darkred"/>
              </p>
            })
          }
          </Box>
          </Heading>
        </Box>
        <Box></Box>
        <Box display={"flex"}>
          <Heading color={"white"} size={"md"}>Player 1 <Box display={"flex"}> <Box><AiFillStar color='yellow'/></Box> <Box color={"white"}>{playeroneRight*100}</Box></Box></Heading>  &nbsp; &nbsp;
          <Heading color={"white"} size={"md"}>Player 2 <Box display={"flex"}> <Box><AiFillStar color='yellow'/></Box> <Box color={"white"}>{playertwoRight*100}</Box></Box></Heading>
        </Box>
        
        </Box>
      </Box>
  )
}

export default Navbar