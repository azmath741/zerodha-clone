import React from 'react';
function OpenAccount() {
  return (
    <div className='container p-5'>
      <div className="row text-center mb-5">
        <h1 className='mt-5'><b>Open a Zerodha account</b></h1>
        <p>Modern platform and apps,<i class="fa-solid fa-indian-rupee-sign"></i>0 investments, and flat <i class="fa-solid fa-indian-rupee-sign"></i>20 intraday and F&O trades </p>
        <button style={{
          width: "20%", margin: "0 auto", padding: "10px 0"
        }} type="button" className="btn btn-sm  btn-primary mb-5">
          Signup now
        </button>
      </div>
    </div>
  );
}

export default OpenAccount;