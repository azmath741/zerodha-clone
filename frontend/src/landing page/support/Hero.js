import React from 'react';
function SupportHero() {
  return (
    <div className="container">
      <div className="row mt-5 mb-5 ">
        <div className="col-8">

          {/* Accordion-1 */}
          <div class="accordion accordion-flush border mb-3" id="accordionFlushExample">
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                  <div className="icon bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '30px', height: '30px' }}>
                    <i class="fa-solid fa-circle-plus fs-4 fw-5 m-2"></i>
                  </div>
                  <h4>Account Opening</h4>
                </button>
              </h2>
              <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                  <ul style={{
                    color: "blue", lineHeight: "2.5", fontWeight: "500"
                  }}>
                    <li><a href='#' className='text-decoration-none'>Resident individual</a></li>
                    <li><a href='#' className='text-decoration-none'>Minor</a></li>
                    <li><a href='#' className='text-decoration-none'>Non Resident Indian(NRI)</a></li>
                    <li><a href='#' className='text-decoration-none'>Company, Partnership, HUF and LLP</a></li>
                    <li><a href='#' className='text-decoration-none'>Glossary</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>


          {/* Accordion-2 */}
          <div class="accordion accordion-flush border mb-3" id="accordionFlushExample">
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                  <div className="icon bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '30px', height: '30px' }}>
                    <i class="fa-solid fa-user  fs-5 m-2"></i>
                  </div>
                  <h4>Your Zerodha Account</h4>
                </button>
              </h2>
              <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                  <ul style={{
                    color: "blue", lineHeight: "2.5", fontWeight: "500"
                  }}>
                    <li><a href='#' className='text-decoration-none'>Your Profile</a></li>
                    <li><a href='#' className='text-decoration-none'>Account modification</a></li>
                    <li><a href='#' className='text-decoration-none'>Client Master Report (CMR) and Depository Participant (DP)</a></li>
                    <li><a href='#' className='text-decoration-none'>Nomination</a></li>
                    <li><a href='#' className='text-decoration-none'>Transfer and conversion of securities</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Accordion-3 */}
          <div class="accordion accordion-flush border mb-3" id="accordionFlushExample">
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                  <div className="icon bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '30px', height: '30px' }}>
                    <i class="fa-solid fa-kip-sign fs-5 m-2"></i>
                  </div>
                  <h4>Kite</h4>
                </button>
              </h2>
              <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                  <ul style={{
                    color: "blue", lineHeight: "2.5", fontWeight: "500"
                  }}>
                    <li><a href='#' className='text-decoration-none'>IPO</a></li>
                    <li><a href='#' className='text-decoration-none'>Trading FAQs</a></li>
                    <li><a href='#' className='text-decoration-none'>Margin Trading Facility (MTF) and Margins</a></li>
                    <li><a href='#' className='text-decoration-none'>Charts and orders</a></li>
                    <li><a href='#' className='text-decoration-none'>Alerts and Nudges</a></li>
                    <li><a href='#' className='text-decoration-none'>General</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>


          {/* Aaccordion-4 */}
          <div class="accordion accordion-flush border mb-3" id="accordionFlushExample">
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                  <div className="icon bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '30px', height: '30px' }}>
                    <i class="fa-solid fa-indian-rupee-sign fs-5 m-2"></i>
                  </div>
                  <h4>Funds</h4>
                </button>
              </h2>
              <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                  <ul style={{
                    color: "blue", lineHeight: "2.5", fontWeight: "500"
                  }}>
                    <li><a href='#' className='text-decoration-none'>Add money</a></li>
                    <li><a href='#' className='text-decoration-none'>Withdraw money</a></li>
                    <li><a href='#' className='text-decoration-none'>Add bank accounts</a></li>
                    <li><a href='#' className='text-decoration-none'>eMandates</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>


          {/* Accordion-5 */}
          <div class="accordion accordion-flush border mb-3" id="accordionFlushExample">
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                  <div className="icon bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '30px', height: '30px' }}>
                    <i class="fa-solid fa-layer-group fs-5 m-2"></i>
                  </div>
                  <h4>Console</h4>
                </button>
              </h2>
              <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                  <ul style={{
                    color: "blue", lineHeight: "2.5", fontWeight: "500"
                  }}>
                    <li><a href='#' className='text-decoration-none'>Portfolio</a></li>
                    <li><a href='#' className='text-decoration-none'>Corporate actions</a></li>
                    <li><a href='#' className='text-decoration-none'>Funds statement</a></li>
                    <li><a href='#' className='text-decoration-none'>Reports</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Accordion-6 */}
          <div class="accordion accordion-flush border mb-3" id="accordionFlushExample">
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                  <div className="icon bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '30px', height: '30px' }}>
                    <i class="fa-solid fa-coins fs-4 fw-5 m-2"></i>
                  </div>
                  <h4>Coin</h4>
                </button>
              </h2>
              <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                  <ul style={{
                    color: "blue", lineHeight: "2.5", fontWeight: "500"
                  }}>
                    <li><a href='#' className='text-decoration-none'>Mutual Funds</a></li>
                    <li><a href='#' className='text-decoration-none'>Fixed Deposit (FD)</a></li>
                    <li><a href='#' className='text-decoration-none'>Features on Coin</a></li>
                    <li><a href='#' className='text-decoration-none'>General</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>


        </div>
        <div className="col-4">
          <div style={{ height: "150px", display: "flex", flexDirection: "row" }}>
            <div className="color" style={{
              backgroundColor: "#ff9100", width: "3%"
            }}>&nbsp;</div>
            <div className="links p-4" style={{ backgroundColor: "#FFF4E5" }}>
              <ul>
                <li className='mb-2'><a href='#'>Quantity Freeze Limits for Indices from November 03, 2025</a></li>
                <li><a href='#'>Latest Intraday leverages and Square-off timings</a></li>
              </ul>
            </div>
          </div>

          <div className='mt-5'>
            <div className="links border">
              <h3 className="p-2 text-center" style={{ backgroundColor: "#F6F6F6", height: "20%", fontSize: "27px" }} > Quick links</h3>
              <ol style={{}}>
                <li className='border-bottom p-2'><a href='#' className='text-decoration-none'>Track account opening</a></li>
                <li className='border-bottom p-2'><a href='#' className='text-decoration-none'>Track segment activation</a></li>
                <li className='border-bottom p-2'><a href='#' className='text-decoration-none'>Intraday margins</a></li>
                <li className='border-bottom p-2'><a href='#' className='text-decoration-none'>Kite user manual</a>  </li>
                <li className=' p-2'><a href='#' className='text-decoration-none'>Learn how to create a ticket</a></li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default SupportHero;