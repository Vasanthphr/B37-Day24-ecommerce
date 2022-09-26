import React from "react";

function Topbar() {
  return (
    <nav class="navbar navbar-light bg-info topbar mb-4  shadow sticky">
      <div>
        <h4 className="greetings">Grab your best deal</h4>  
      </div>
      <div>
        <h4 className="greetings">India Bazar</h4>  
      </div>
      <form class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
        <div class="input-group">
          <input
            type="text"
            class="form-control  bg-light border-0 small"
            placeholder="Search for..."
          />
          <div class="input-group-append">
            <button class="btn btn-success" type="button">
              Search
            </button>
          </div>
        </div>
      </form>
    </nav>
  );
}

export default Topbar;
