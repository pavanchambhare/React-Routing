import React from 'react'
import { useParams } from 'react-router-dom'

 function Child() {

    let { id }  = useParams
  return (
    <div>ID : {id}</div>
  )
}

export default Child