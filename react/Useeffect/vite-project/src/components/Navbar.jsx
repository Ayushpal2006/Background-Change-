import React, { useEffect } from 'react'

const navbar = (props) => {

  useEffect(() => {
    alert("color was changed ");
  }, [props])
  return (
    <div>
      <h1>color is {props.color} </h1>
    </div>
  )
}

export default navbar
