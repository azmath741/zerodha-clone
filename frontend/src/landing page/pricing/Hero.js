import React from 'react';
function PricingHero() {
  let style = { lineHeight: '2.1rem' };
  return (
    <div className="container  text-center p-5 m-5">
      <div className="row">
        <h3 className='fs-10 fw-15'>Charges</h3>
        <h5 className='text-muted'>List of all charges and taxes</h5>
      </div>
      <div className="row mt-5 pt-5 text-center" style={{ marginLeft: "50px" }}>
        <div className="col-4 p-5 ml-5" style={style}>
          <img src="media/images/pricing0.svg" className='p-4' />
          <h3>Free equity delivery</h3>
          <p>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage. </p>
        </div>
        <div className="col-4 p-5 " style={style}>
          <img src='media/images/intradayTrades.svg' className='p-4' />
          <h3>Intraday and F&O trades</h3>
          <p>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades. </p>
        </div>
        <div className="col-4 p-5 " style={style}>
          <img src="media/images/pricing0.svg" className='p-4' />
          <h3>Free direct MF</h3>
          <p>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges. </p>
        </div>
      </div>
    </div>
  );
}

export default PricingHero;