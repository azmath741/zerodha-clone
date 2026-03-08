import React from 'react';
function ProductHero() {
  return (
    <div className="container text-center mt-5 p-5 mb-5 " style={{ lineHeight: '3' }}>
      <h1 className='fs-3' style={{ fontWeight: '600' }}>Zerodha Products</h1>
      <h3 className='fs-4'>Sleek, modern, and intuitive trading platforms </h3>
      <p className='fs-6'>Check out our <a href='#' className='text-decoration-none'>investment offerings <i class="fa-solid fa-arrow-right"></i></a></p>
    </div>
  );
}

export default ProductHero;