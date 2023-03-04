
import React, { useState ,useEffect} from 'react';
import { Box,Heading,Text,Flex,Image,Button, Spacer } from '@chakra-ui/react';
import MathGame from '../components/MathGame';
import Navbar from '../components/Navbar';
import {BsArrowRepeat} from 'react-icons/bs'
export const Dashboard = () => {
  const [playeroneRight, setplayeroneRight] = useState<number>(0);
  const [playertwoRight, setplayertwoRight] = useState<number>(0);
  const [playeroneWrong, setplayeroneWrong] = useState<number>(3);
  const [playertwoWrong, setplayertwoWrong] = useState<number>(3);
  // const [state, setstate] = useState<number>(0)
 
  const [i, seti] = useState<number>(0);
  

  const x = Math.floor(Math.random() * 80);
  const y = Math.floor(Math.random() * 20);
  const operator = ['+', '-', '*', '/'];

  let total:number=0

 


  if (i === 0) {
   
   total=x+y
   //console.log('stateorg',total)
   
  }
  else if (i === 1) {
    
   total=x-y
  } else if (i === 2) {
    total=x*y
  } else if (i === 3) {
    total=x/y
  } else {
    seti(0);
  }



  const hello=()=>{
    setplayeroneWrong(3)
    setplayertwoWrong(3)
    setplayeroneRight(0)
    setplayertwoRight(0)
  }
 
 console.log('state',total)
 console.log('shdsahsadasd',playertwoWrong)
  return (
    <Box bg='#282c34' h={'100vh'}>
   {
     playertwoRight>0 || playeroneWrong>0 ?  
<Box>
     <Navbar playeroneRight={playeroneRight} playertwoRight={playertwoRight} playeroneWrong={playeroneWrong} playertwoWrong={playertwoWrong} />

      <Heading fontSize={'50px'} padding={'80px'} color='white'>
        {x}
        {operator[i]}
        {y}
      </Heading>

    

      <MathGame
        setplayeroneRight={setplayeroneRight}
        setplayertwoRight={setplayertwoRight}
        setplayeroneWrong={setplayeroneWrong}
        setplayertwoWrong={setplayertwoWrong}
        total={total}
        seti={seti}
      />
      </Box>

      :
     
      <Box h="100vh" bg="#282C34" border={"2px solid orange"}>
      <Text
        mt="2rem"
        color="#fff"
        fontSize={{ base: "2rem", md: "2.5rem", lg: "3.6rem" }}
        fontWeight="bold"
      >
        Game Over 🥱
      </Text>
      <Text
        mt="2rem"
        color="#fff"
        fontSize={{ base: "1.5rem", md: "1.8rem", lg: "2rem" }}
        fontWeight="600"
      >
       
        Final Score = {playeroneRight>playertwoRight ? playeroneRight*100: playertwoRight*100}
        <Spacer/>
       Winner is  = {playeroneRight>playertwoRight ? "player 1": playeroneRight<playertwoRight ? "player 2" : "Tie"}
      </Text>
      <br />
      <Flex justifyContent="center">
        <Image
          boxSize="150px"
          src="https://fcit.usf.edu/matrix/wp-content/uploads/2017/01/DanceBot-3-LG.gif"
          alt="Dan Abramov"
        />
      </Flex>

      <Button
        mt="2rem"
        _hover={{
          backgroundColor: "teal.200",
          color: "black"
        }}
        color="white"
        rightIcon={<BsArrowRepeat />}
        bg="teal.300"
        onClick={hello}
      >

        Play Again
      </Button>

      <Text
        mt="5rem"
        color="#fff"
        fontSize={{ base: "1.5rem", md: "1.8rem", lg: "2rem" }}
        fontWeight="600"
      >
        ThankYou for Visiting...
      </Text>
    </Box>


   }
      
    </Box>
  );
};
