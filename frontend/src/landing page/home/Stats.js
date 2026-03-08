import React from 'react';
function Stats() {
  let style={fontWeight:"600"};
  return (
    <div className="container mt-5">
      <div className="row p-3">
        <div className="col-6 p-5">
          <h1 className='pb-4'><b>Trust with confidence</b></h1>
          <h2 style={style}>Customer-first always</h2>
          <p className='text-muted'>That’s why 1.3+ crore customers trust Zerodha with ₹3.5+ lakh crores worth of equity investments.</p>
          <h2 style={style}>No spam or gimmicks</h2>
          <p className='text-muted'>No gimmicks, spam, “gamification”, or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>

          <h2 style={style}>The Zerodha universe</h2>
          <p className='text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>

          <h2 style={style}>Do better with money</h2>
          <p className='text-muted'>With initiatives like Nudge and Kill Switch, we don’t just facilitate transactions, but actively help you do better with your money.</p>
        </div>
        <div className="col-6 p-5 ">
          <img style={{ width: "90%", marginLeft:"2rem"}} src='media/images/ecosystem.png' alt='Ecosystem' className='img-fluid' />
          <div style={{ display: "flex", justifyContent: "start", alignItems:"center",marginTop:"20px"}}>
            <a style={{ textDecoration: "none",paddingLeft:"23%" }} href="#link">Explore Our products&nbsp;<i class="fa-solid fa-arrow-right"></i></a>
            <a style={{ textDecoration: "none" }}  href="#link"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Try Kite</a>
            </div>
        </div>
      </div>
    </div>
   );
}

export default Stats;