import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
class Home extends Component {
  render() {
    return (
      <section id="banner" className="banner">
        <div className="container p-0">
          <div className="row">
            <div className="col-lg-6">
              <div className="banner-left">
                <h1 className="text-capitalize">
                  Welcome to
                  <span className="text-uppercase"> mern </span>
                  stack Application
                </h1>
                <div className="buttons">
                  <Link
                    to="/login"
                    className="btn btn-lg btn-outline-none border-3 btn-login"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="btn btn-lg btn-outline-none border-3 btn-register"
                  >
                    Signup
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="banner-right">
                <h1 className="text-capitalize">
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Home;
