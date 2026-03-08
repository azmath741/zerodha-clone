import React from 'react';
function Hero() {
  return (
    <div className='container p-5'>
      <div className="row text-center mb-5">
        <img src='media/images/homeHero.png' alt='Hero Img' className='img-fluid  mb-5' />
        <h1 className='mt-5'><b>Invest in everything</b></h1>
        <p>Online platform to invest in stocks,derivatives,mutual funds,and more</p>
        <button style={{
          width: "20%", margin: "0 auto", padding: "10px 0"
        }} type="button" className="btn btn-sm  btn-primary mb-5">
          Signup now
        </button>
      </div>
    </div>
  );
}

export default Hero;