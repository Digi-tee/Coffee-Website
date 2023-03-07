import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-coffee'>
            <h6>Types of Coffee</h6>
            <p><a  href="#">Instant Coffee</a></p>
            <p><a  href="#">Cold Brew</a></p>
            <p><a  href="#">Café au Lait</a></p>
            <p><a  href="#">Macchiato</a></p>
            <p><a  href="#">Americano</a></p>
            <p><a  href="#">Cortado</a></p>


            <div className='social-media'>
            <i className="bi bi-facebook"></i>
            <i className="bi bi-instagram"></i>
            <i className="bi bi-whatsapp"></i>
            <i className="bi bi-twitter"></i>
            <i className="bi bi-linkedin"></i>
        </div>
        </div>

        <div className='footer-service'>
            <h6>Quick Links</h6>
            <p><a  href="#">Shipping</a></p>
            <p><a  href="#">Terms of Service</a></p>
            <p><a  href="#">Contact Us</a></p>
            <p><a  href="#">Privacy Policy</a></p>
        </div>

        <div className='footer-about'>
            <h6>Quick Links</h6>
            <p><a  href="#">About</a></p>
            <p><a  href="#">Help</a></p>
            <p><a  href="#">Shipping</a></p>
            <p><a  href="#">Affiliate</a></p>
        </div>

        
    </div>
  )
}

export default Footer