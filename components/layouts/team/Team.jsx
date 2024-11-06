import React from 'react';

const Team = () => {
  return (
    <>
        <section className="team-one team-one__home-two">
            <div className="container">
            <div className="block-title text-center">
                <h2 className="block-title__title">Meet With Our Team</h2>{/* /.block-title__title */}
                <p className="block-title__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt uttom <br /> labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>{/* /.block-title__text */}
            </div>{/* /.block-title */}
            <div className="row low-gutters">
                <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="team-one__single">
                    <div className="team-one__image">
                    <img src="/images/team/team-1-1.jpg" alt="Awesome Image" />
                    </div>{/* /.team-one__image */}
                    <div className="team-one__content">
                    <h3 className="team-one__title"><a href="#">Dr. Amina</a></h3>{/* /.team-one__title */}
                    <p className="team-one__speciality">Chief Executive Officer</p>{/* /.team-one__speciality */}
                    </div>{/* /.team-one__content */}
                    <div className="team-one__hover-content">
                    <a className="team-one__hvr-link" href="#"><i className="material-icons">phone</i></a>
                    <a href="#" className="team-one__hvr-link"><i className="material-icons">email</i></a>
                    </div>{/* /.team-one__hover-content */}
                </div>{/* /.team-one__single */}
                </div>{/* /.col-lg-3 */}
                <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="team-one__single">
                    <div className="team-one__image">
                    <img src="/images/team/team-1-2.jpg" alt="Awesome Image" />
                    </div>{/* /.team-one__image */}
                    <div className="team-one__content">
                    <h3 className="team-one__title"><a href="#">Alvin Maase</a></h3>{/* /.team-one__title */}
                    <p className="team-one__speciality">Chief Technology Officer</p>{/* /.team-one__speciality */}
                    </div>{/* /.team-one__content */}
                    <div className="team-one__hover-content">
                    <a className="team-one__hvr-link" href="#"><i className="material-icons">phone</i></a>
                    <a href="#" className="team-one__hvr-link"><i className="material-icons">email</i></a>
                    </div>{/* /.team-one__hover-content */}
                </div>{/* /.team-one__single */}
                </div>{/* /.col-lg-3 */}
    
                <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="team-one__single">
                    <div className="team-one__image">
                    <img src="/images/team/team-1-4.jpg" alt="Awesome Image" />
                    </div>{/* /.team-one__image */}
                    <div className="team-one__content">
                    <h3 className="team-one__title"><a href="#">Prudence</a></h3>{/* /.team-one__title */}
                    <p className="team-one__speciality">Chief Operations Officer</p>{/* /.team-one__speciality */}
                    </div>{/* /.team-one__content */}
                    <div className="team-one__hover-content">
                    <a className="team-one__hvr-link" href="#"><i className="material-icons">phone</i></a>
                    <a href="#" className="team-one__hvr-link"><i className="material-icons">email</i></a>
                    </div>{/* /.team-one__hover-content */}
                </div>{/* /.team-one__single */}
                </div>{/* /.col-lg-3 */}
            </div>{/* /.row */}
            </div>{/* /.container */}
        </section>{/* /.team-one team-one__home-two */}
      
    </>
  );
}

export default Team;
