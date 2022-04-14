import React from "react";
import "/workspace/Buddy-App/src/front/js/views/HomePage/Homestyles.css";

const HomeApp = () => {
  return (
    <div>
      {
        <header>
          <nav
            id="sidebarMenu"
            className="collapse d-lg-block sidebar collapse bg-white"
          >
            <div className="position-sticky">
              <div className="list-group list-group-flush mx-3 mt-4">
                <a
                  href="#"
                  className="list-group-item list-group-item-action py-2 ripple"
                  aria-current="true"
                >
                  <i className="fas fa-tachometer-alt fa-fw me-3"></i>
                  <span>Main dashboard</span>
                </a>
                <a
                  href="#"
                  className="list-group-item list-group-item-action py-2 ripple active"
                >
                  <i className="fas fa-chart-area fa-fw me-3"></i>
                  <span>Website traffic</span>
                </a>
                <a
                  href="#"
                  className="list-group-item list-group-item-action py-2 ripple"
                >
                  <i className="fas fa-lock fa-fw me-3"></i>
                  <span>Password</span>
                </a>
                <a
                  href="#"
                  className="list-group-item list-group-item-action py-2 ripple"
                >
                  <i className="fas fa-chart-line fa-fw me-3"></i>
                  <span>Analytics</span>
                </a>
                <a
                  href="#"
                  className="list-group-item list-group-item-action py-2 ripple"
                >
                  <i className="fas fa-chart-pie fa-fw me-3"></i>
                  <span>SEO</span>
                </a>
                <a
                  href="#"
                  className="list-group-item list-group-item-action py-2 ripple"
                >
                  <i className="fas fa-chart-bar fa-fw me-3"></i>
                  <span>Orders</span>
                </a>
                <a
                  href="#"
                  className="list-group-item list-group-item-action py-2 ripple"
                >
                  <i className="fas fa-globe fa-fw me-3"></i>
                  <span>International</span>
                </a>
                <a
                  href="#"
                  className="list-group-item list-group-item-action py-2 ripple"
                >
                  <i className="fas fa-building fa-fw me-3"></i>
                  <span>Partners</span>
                </a>
                <a
                  href="#"
                  className="list-group-item list-group-item-action py-2 ripple"
                >
                  <i className="fas fa-calendar fa-fw me-3"></i>
                  <span>Calendar</span>
                </a>
                <a
                  href="#"
                  className="list-group-item list-group-item-action py-2 ripple"
                >
                  <i className="fas fa-users fa-fw me-3"></i>
                  <span>Users</span>
                </a>
                <a
                  href="#"
                  className="list-group-item list-group-item-action py-2 ripple"
                >
                  <i className="fas fa-money-bill fa-fw me-3"></i>
                  <span>Sales</span>
                </a>
              </div>
            </div>
          </nav>
        </header>

        /* <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Buddy App Homepage
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Goals
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Buddies
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Help
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled">Disabled</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container my-4">
        <p className="font-weight-bold">
          Learn how to create a Bootstrap Pie Chart and see the examples of
          proper implementation and customization.
        </p>

        <hr className="mt-5"></hr>

        <p>
          Built with{" "}
          <a target="_blank" href="https://mdbootstrap.com/docs/standard/">
            Material Design for Bootstrap
          </a>{" "}
          - free and powerful Bootstrap UI KIT
        </p>

        <a
          className="btn btn-primary me-2"
          href="https://mdbootstrap.com/docs/standard/getting-started/installation/"
          target="_blank"
          role="button"
        >
          Download MDB UI KIT <i className="fas fa-download"></i>
        </a>
        <a
          className="btn btn-danger me-2"
          target="_blank"
          href="https://mdbootstrap.com/docs/standard/"
          role="button"
        >
          Learn more
        </a>
        <a
          className="btn btn-success me-2"
          target="_blank"
          href="https://mdbootstrap.com/docs/standard/getting-started/"
          role="button"
        >
          Tutorials
        </a>
        <a
          className="btn btn-dark me-2"
          target="_blank"
          href="https://github.com/mdbootstrap/mdb-ui-kit"
          role="button"
        >
          GitHub <i className="fab fa-github ms-2"></i>
        </a>

        <hr className="mb-5" />

        <div>
          <canvas id="pieChart" style={{ maxWidth: "500px" }}></canvas>
        </div>
      </div> */
      }
    </div>
    //<div id="mySidenav" className="sidenav">
    // <span style={{ fontSize: "30px", cursor: "pointer" }} onclick="openNav()">
    // &#9776; open
    //</span>
    //<a href="javascript:void(0)" className="closebtn" onclick="closeNav()">
    //   &times;
    //</a>
    //<a href="#">About</a>
    // <a href="#">Services</a>
    //<a href="#">Clients</a>
    //<a href="#">Contact</a>
    // </div>
  );
};
export default HomeApp;
