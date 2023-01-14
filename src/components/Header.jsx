import React from 'react'
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div className="movieapp-header">
        <div className="logo">
         <Link to="/"><h3>Movie<span className="text-white">vik</span></h3></Link>
        </div>

    </div>
  )
}

export default Header