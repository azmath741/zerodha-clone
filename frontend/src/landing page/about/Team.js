import React from 'react';
function Team() {
  return (
    <div className="container">
      <div className="row">
        <div className="col text-center ">
          <h3>People</h3>
        </div>
        <div className="row p-3 text-muted  " style={{ lineHeight: "1.9", fontSize: "1.05rem", }}>
          <div className="col-6 p-3 text-center" >
            <img style={{ borderRadius: "100%", width: "52%", marginLeft: "125px" }} src="./media/images/nithinKamath.jpg" alt='NithinKamath.jpg' />
            <h4 className="mt-3" style={{ marginLeft: "125px" }} >Nithin Kamath</h4>
            <p style={{ marginLeft: "125px" }} > Founder, CEO</p>
          </div>
          <div className="col-6 pt-3 pr-5 mt-4 " >
            <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry. </p>
            <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC). </p>
            <p>Playing basketball is his zen.</p>
            <p>Connect on <a href='https://nithinkamath.me/' className='text-decoration-none'>Homepage</a> / <a className='text-decoration-none' href='https://tradingqna.com/u/nithin/summary'>TradingQnA</a> / <a className='text-decoration-none' href='https://x.com/Nithin0dha'>Twitter</a></p>
          </div>
        </div>
      </div>
    </div >

  );

}

export default Team;