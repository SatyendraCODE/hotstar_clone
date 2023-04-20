import { MDBIcon } from "mdb-react-ui-kit";
import React from "react";
import { Link } from "react-router-dom";
import Appel_store from './img/appel_store.png';
import Play from './img/play.png';
import "./footer.css";

const index = () => {
  return (
    <>
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-3 ms-5">
            <p className="title-footer">Company</p>
            <Link to="aboutus" className="text-footer">
              <p>About Us</p>
            </Link>
            <Link to="careers" className="text-footer">
              <p>Careers</p>
            </Link>
          </div>
          <div className="col-3">
            <p className="title-footer">View Website in</p>
            <p className="text-footer">
              <MDBIcon fas icon="check" /> English
            </p>
          </div>
          <div className="col-3">
            <p className="title-footer">Need Help ?</p>
            <Link to="visithelpcenter" className="text-footer">
              <p>Visit Help Center</p>
            </Link>
            <Link to="feedback" className="text-footer">
              <p>Share Feedback</p>
            </Link>
          </div>
          <div className="col-2">
            <p className="title-footer">Connect with Us</p>
            <div>
              <Link
                to="https://www.facebook.com/DisneyPlusHotstar/"
                className="title-footer icon-footer"
              >
                <MDBIcon fab icon="facebook-square" />
              </Link>
              <Link
                to="https://twitter.com/DisneyPlusHS"
                className="title-footer icon-footer"
              >
                <MDBIcon fab icon="twitter-square" />
              </Link>
            </div>
          </div>
        </div>

        <div className="row pb-2">
          <div className="col-5 ms-5 pt-3">
            <div className="col-12">
              <p>&#169; 2023 STAR. All Rights Reserved.</p>
            </div>
            <div className="col-12 pb-2">
              <Link to="termsofuse" className="pe-3 text-footer">
                Terms Of Use
              </Link>
              <Link to="privacypolicy" className="pe-3 text-footer">
                Privacy Policy
              </Link>
              <Link to="faq" className="text-footer">
                FAQ
              </Link>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex flex-row-reverse pt-2">
              <Link to="https://play.google.com/store/apps/details?id=in.startv.hotstar&hl=en_IN&gl=US&pli=1">
                <img
                  src={Play}
                  alt="playlogo"
                  width={"200px"}
                  className=""
                />
              </Link>
              <Link to="https://apps.apple.com/in/app/hotstar-live-cricket-movies/id934459219">
                <img
                  src={Appel_store}
                  alt="appleLogo"
                  width={"200px"}
                  className="me-2"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
