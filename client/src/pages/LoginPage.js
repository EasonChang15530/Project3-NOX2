import React from "react";
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';


function Login(props) {
  return (
    <div className="inner-container">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="header" align="center"><h3>Login</h3></div>
            <div className="box"></div>
            <form>

              <div class="form-row">
                <div class="col">
                  <input type="text" onChange = {props.handleUserInput} className="form-control" placeholder="User Name" />
                </div>
                <div class="col">
                  <input type="password" onChange = {props.handlePasswordInput} className="form-control" placeholder="password" />
                </div>
              </div>

              <div className="form-group">
                <div className="col" align="center">
                  <button onClick = {props.OnClick}> Submit </button>
                </div>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;