import React from 'react';
function Pricing() {
  let style = { height:"11rem",border: "1px solid black", padding: "2rem 5rem", marginBottom: "2rem", textAlign: "center" };
   let  style_1 = { height:"11rem",border: "1px solid black",padding:"3rem 5rem",marginBottom:"2rem",textAlign:"center"};
  return (
    <div className="cotainer m-5" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
      <div className="col-5  " style={{paddingLeft:"7rem"}}>
        <h2>Unbeatable pricing</h2><br></br>
        <p>We pioneered the concept of discount broking and price transparency in india. flat fees and no hidden charges</p>
        <a href='#'style={{textDecoration:'none'}}>See pricing&nbsp;&nbsp;<i class="fa-solid fa-arrow-right"></i></a>
      </div>.
      <div className="col-1"></div>
      <div className="col-6" style={{ display: "flex", justifyContent: "center" }}>
        <div className="free" style={style}>
          <h1><i class="fa-solid fa-indian-rupee-sign"></i><b>0</b></h1>
          <p>Free equity delivery and</p>
          <p> direct mutual funds</p>
        </div>
        <div className="premium" style={style_1}>
                    <h1><i class="fa-solid fa-indian-rupee-sign"></i><b>20</b></h1>
          <p>Intraday and F&O</p>
          </div>
      </div>
    </div>
   );
}

export default Pricing;