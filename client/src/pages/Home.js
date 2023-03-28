// basic home page
import React from 'react';
import BootstrapNavbar from '../components/Navbar';

function Home() {
  return (
    <div>
      <BootstrapNavbar />
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="text-center">Home</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
