import React from 'react'

interface props{
  score:number
}

const Navbar = ({score}:props) => {
  return (
    <div style={{backgroundColor:"#982c34", paddingTop:"20px", paddingBottom:"20px"  }}>
      <div></div>
      <div></div>
      <div></div>
      Score: {score}
      Navbar
      </div>
  )
}

export default Navbar