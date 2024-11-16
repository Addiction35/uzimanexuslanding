import React from 'react';

const Collaborators = () => {
  return (
    <>
 <div className="demo-row">
  <div className="container" id="id-sponsors">
    <div className="text-center">
      <h2 style={{margin: '20px 0', color: '#fff'}}>Our Partners</h2>
    </div>
    <div id="sponsor-carousel" className="carousel slide" data-ride="carousel"> 
      {/* Wrapper for slides */}
      <div className="carousel-inner" role="listbox">
        <div className="item active">
          <div className="row">
            <div className="col-sm-3 col-xs-6">
              <div className="sponsor-feature"><img  src="/images/logos/AWs.png" style={{width: 160}} /></div>
            </div>

            <div className="col-sm-3 col-xs-6">
              <div className="sponsor-feature"><img  src="/images/logos/microsoft.png" style={{width: 200}} /></div>
            </div>
            <div className="col-sm-3 col-xs-6">
              <div className="sponsor-feature"><img  src="/images/logos/Nvidia.jpg" style={{width: 200}} /></div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="row">
            <div className="col-sm-3 col-xs-6">
              <div className="sponsor-feature"><img  src="/images/logos/AlxVentures.png" style={{width: 200}} /></div>
            </div>

            <div className="col-sm-3 col-xs-6">
              <div className="sponsor-feature"><img  src="/images/logos/thefuturelist_logo.jpeg" style={{width: 160}} /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
     
    </>
  );
}

export default Collaborators;
