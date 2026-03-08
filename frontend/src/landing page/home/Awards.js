import React from 'react';

function Awards() {
  return (
    <div className='container pb-5'>
      <div className="row">
        <div className="col-6 p-5 ">
          <img className="img-fluid " src='media/images/largestBroker.svg' alt='Awards'  />
        </div>
        <div className="col-6 p-5">
          <h1>Largest stock broker in india</h1>
          <p className='mb-4'>
            2+ milion Zerodha clients contribute to over 15% of all retail
            volumes in India daily by trading and investing in:
          </p>
          <ul>
            <div className="row mt-5 ">
              <div className="col-6">
            <li ><p>Futures and Options</p></li>
            <li><p>Commodity derivatives</p></li>
            <li><p>Currency derivatives</p></li>
              </div>
            <div className="col-6">
             <li><p>Stocks and IPO's</p></li>
             <li><p>Direct mutual funds</p></li>
                <li><p>Bonds and Govt.Securities</p></li>

              </div>
            </div>
          </ul>
          <img src='media/images/pressLogos.png' alt='Press Logos' className='img-fluid ' style={{width:"90%"}} />
        </div>

      </div>
    </div>
   );
}

export default Awards;