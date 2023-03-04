import React, { useState ,useEffect} from 'react';
import  MathGame  from '../components/MathGame';
import { Box,Heading,Text } from '@chakra-ui/react';
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

 
 console.log('state',total)
  return (
    <Box bg='#282c34' h={'100vh'}>
   
      <Heading padding={'80px'} color='white'>
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
  );
};