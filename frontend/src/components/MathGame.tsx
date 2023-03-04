import React, { useState ,useEffect} from 'react';
import {Box,Input,Button} from '@chakra-ui/react'
interface MathGameProps {
  total: number;
  seti: React.Dispatch<React.SetStateAction<number>>;
  setplayeroneRight: React.Dispatch<React.SetStateAction<number>>;
  setplayertwoRight: React.Dispatch<React.SetStateAction<number>>;
  setplayeroneWrong: React.Dispatch<React.SetStateAction<number>>;
  setplayertwoWrong: React.Dispatch<React.SetStateAction<number>>;
}

const MathGame: React.FC<MathGameProps> = ({ total, seti, setplayeroneRight, setplayertwoRight, setplayeroneWrong, setplayertwoWrong }) => {
  const [player1, setplayer1] = useState<string>("");
  const [player2, setplayer2] = useState<string>("");
  const [task,setTask]=useState<boolean>(false)
  const handleComp = () => {
    if (total === Number(player2) && total === Number(player1)) {
      alert(' Both  player answer correct ');
      seti((prev) => prev + 1);
      setplayer2("");
      setplayer1("");
      setplayeroneRight((prev) => prev + 1);
      setplayertwoRight((prev) => prev + 1);
    } else if (total !== Number(player2) && total === Number(player1)) {
      alert('player 1 correct');
      seti((prev) => prev + 1);
      setplayer2("");
      setplayer1("");
      setplayeroneRight((prev) => prev + 1);
      setplayertwoWrong((prev) => prev - 1);
    } else if (total === Number(player2) && total !== Number(player1)) {
      alert('player 2 correct');
      seti((prev) => prev + 1);
      setplayer2("");
      setplayer1("");
      setplayeroneWrong((prev) => prev - 1);
      setplayertwoRight((prev) => prev + 1);
    } else  {
      seti((prev) => prev + 1);
      setplayer2("");
      setplayer1("");
      setplayeroneWrong((prev) => prev - 1);
      setplayertwoWrong((prev) => prev - 1);
      alert('wrong answer')
    }
  }

  // useEffect(() => {
  
  // }, [])

  return (
    <Box display={{base:'grid',lg:'flex'}} gap='4' w={{base:'80%',lg:'60%'}} m='auto' >
      
      <Input bg='white' value={player1} onChange={(e) => setplayer1(e.target.value)} type="text" placeholder='player one' />
      
      <Input bg='white' value={player2} onChange={(e) => setplayer2(e.target.value)} type="text" placeholder='player two' />
     
      <Button bg='gold'   padding={'10px 30px'} onClick={handleComp}>Submit</Button>
    </Box>
  );
}

export default MathGame;