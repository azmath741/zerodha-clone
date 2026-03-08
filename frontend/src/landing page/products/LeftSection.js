import React from 'react';
function LeftSection({ imageUrl, productName, productDescription, link, linkName, learnMore, googlePlay, appStore }) {
  return (
    <div className="container">
      <div className="row border-top ">
        <div className="col-6" >
          <img src={imageUrl} style={{ padding: "5rem" }} />
        </div>
        <div className="col-6 mb-5" style={{
          padding: "7rem"
        }} >
          <h3 className='mb-3'>{productName}</h3>
          <p style={{ lineHeight: "2", marginRight: "2rem", textAlign: "left" }}>{productDescription}</p>
          <div className="links" style={{ marginBottom: "2rem" }}>
            <a href={link} className='text-decoration-none' style={{ marginRight: "5rem" }}>{linkName}<i class="fa-solid fa-arrow-right"></i></a>
            <a href={learnMore} className='text-decoration-none'>Learn More <i class="fa-solid fa-arrow-right"></i></a>
          </div>
          <div className="stores">
            <a href={googlePlay} style={{ marginRight: "2.7rem" }}><img src="media/images/googlePlayBadge.svg" /></a>
            <a href={appStore} ><img src="media/images/appstoreBadge.svg" /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;