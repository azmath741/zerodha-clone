import React from 'react';
function RightSection({ imageUrl, productName, productDescription, link, linkName }) {
  return (
    <div className="container">
      <div className="row border-top">
        <div className="col-6 mb-5" style={{
          padding: "7rem"
        }} >
          <h3 className='mb-3'>{productName}</h3>
          <p style={{ lineHeight: "2", marginRight: "2rem", textAlign: "left" }}>{productDescription}</p>
          <a href={link} className='text-decoration-none'>{linkName} <i class="fa-solid fa-arrow-right"></i></a>
        </div>
        <div className="col-6" >
          <img src={imageUrl} style={{ padding: "3rem 0rem" }} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;