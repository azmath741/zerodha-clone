import React from 'react';
function CreateTicket() {
  return (
    <div className="portal p-2" style={{ backgroundColor: "#F6F6F6" }}>
      <div className="top m-2 p-4" style={{ display: "flex", justifyContent: "space-between" }}>
        <h1 style={{ marginLeft: "8rem" }}><b>Support Portal</b></h1>
        <button style={{
          marginRight: "7.8rem", height: "2.7rem", width: "7rem"
        }} className='btn btn-primary'>My tickets</button>
      </div>
      <div className="search pb-4 ">
        <form class="d-flex" role="search">
          <input style={{
            padding: "1rem", width: "80%", marginLeft: "9rem"
          }} class="form-control me-2" type="search" placeholder="&#128269;  Eg:How do i open my account, How do i activate F&O... " aria-label="Search" />
        </form>
      </div>
    </div>
  );
}

export default CreateTicket;