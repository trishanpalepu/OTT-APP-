import React from 'react'
import ClipLoader from "react-spinners/ClipLoader";
const Spinner = () => {
  return (
    <div>
        <ClipLoader 
        color='#ffffff'
        loading={true}
        />
    </div>
  )
}

export default Spinner