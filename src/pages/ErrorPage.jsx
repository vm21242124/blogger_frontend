import React from 'react'
import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {
    const err=useRouteError();
  
  return (
    <div>oops !! some error occured
        <p>{err.statusText}</p>
        <p>{err.error.message}</p>
    </div>

  )
}

export default ErrorPage