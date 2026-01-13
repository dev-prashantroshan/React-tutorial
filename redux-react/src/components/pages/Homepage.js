import React from "react";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary text-white text-center py-5">
        <div className="container">
          <h1 className="display-4 fw-bold">Welcome to MyWebsite</h1>
          <p className="lead mt-3">
            Build fast, scalable web applications using React
          </p>
          <button className="btn btn-light btn-lg mt-4">
            Get Started
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-5">
        <div className="container">
          <div className="row text-center g-4">
            <div className="col-md-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Fast</h5>
                  <p className="card-text">
                    High performance with modern React architecture.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Scalable</h5>
                  <p className="card-text">
                    Clean code structure that grows with your product.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Responsive</h5>
                  <p className="card-text">
                    Optimized for mobile, tablet, and desktop screens.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="bg-light py-5 text-center">
        <div className="container">
          <h2 className="fw-bold">Ready to get started?</h2>
          <p className="mt-3 mb-4">
            Start building your application today.
          </p>
          <button className="btn btn-primary btn-lg">
            Sign Up Now
          </button>
        </div>
      </section>
    </>
  );
};

export default Home;
