import { MDBIcon } from "mdb-react-ui-kit";
import React from "react";
import { Link } from "react-router-dom";
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
              <Link to="https://www.facebook.com/DisneyPlusHotstar/" className="title-footer icon-footer">
                <MDBIcon fab icon="facebook-square" />
              </Link>
              <Link to="https://twitter.com/DisneyPlusHS" className="title-footer icon-footer">
                <MDBIcon fab icon="twitter-square" />
              </Link>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-5 ms-5">
            <div className="col-12">
              <p>&#169; 2023 STAR. All Rights Reserved.</p>
            </div>
            <div className="col-12">
              <Link to="termsofuse">Terms Of Use</Link>
              <Link to="privacypolicy">Privacy Policy</Link>
              <Link to="faq">FAQ</Link>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex flex-row-reverse">
              <img src="./img/play.png" alt="playlogo" width={"100px"} />
              <img
                src="./img/appel_store.png"
                alt="appleLogo"
                width={"100px"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
