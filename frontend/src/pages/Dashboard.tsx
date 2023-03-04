import React,{useState} from 'react'
import Navbar from '../Components/Navbar'


export const Dashboard = () => {
  let [score,setScore] = useState<number>(0)
  return (
    <div>
      <Navbar score= {score}/>
      Dashboard
      
      </div>
  )
}
