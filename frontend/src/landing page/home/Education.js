import React from 'react';
function Education() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <img src='media/images/education.svg' alt='Education' className='img-fluid'style={{width:'80%'}} />
        </div>
        <div className="col-6 p-5">
            <h2 className='mb-3'>Free and open market education</h2>
            <p className='pb-2'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
          <a href='#link'style={{textDecoration:'none'}} >Varsity&nbsp;<i class="fa-solid fa-arrow-right"></i></a>

          <p className='pt-4'>Tradng Q&A, the most active trading and investmen<br></br> market related queries</p>
                    <a href='#link' className='pt-3' style={{textDecoration:'none'}}>Tradng Q&A&nbsp;<i class="fa-solid fa-arrow-right"></i></a>
          </div>
      </div>
    </div>
  );
}

export default Education;