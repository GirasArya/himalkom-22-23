import React from 'react'
import './Page.css'
import connect from '../../Assets/Logo Connect.png'
import Navbar from '../../component/Navbar/Navbar'
import Ilkommunity from '../Ilkommunity/Ilkommunity';
import Megaproker from '../Megaproker/Megaproker';
import Komnews from '../Komnews/Komnews';



const Page = () => {
  return (
    <div className='background'>
      <Navbar />
        <div className="hero">
          <div className="hero-img">
            <img src={connect} alt="connect" />
          </div>
        </div>
        <Ilkommunity />
        <Megaproker />
        <Komnews />
    </div>
  )
}

export default Page