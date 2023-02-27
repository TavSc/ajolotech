import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="container">
        <div className='left'>
          <div className="logo">AJOLOTECH</div>
          <div className='desc'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis ducimus, magnam fugiat debitis nemo laboriosam! Illo consequuntur, iure laudantium obcaecati accusamus, perferendis dolorum qui fugiat fugit blanditiis soluta error atque.
          </div>
          <div className="socialcontainer">
            <div className="socialincon">
              <FacebookIcon/>
            </div>
            <div className="socialicon">
              <InstagramIcon/>
            </div>
            <div className="socialincon">
              <TwitterIcon/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer