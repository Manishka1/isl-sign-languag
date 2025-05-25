import React from "react";

function Feedback() {
  return (
    <div className="container-fluid d-flex flex-column align-items-center px-0">
      <div
        className="container-fluid text-white"
        style={{ backgroundColor: "rgba(9,9,121)" }}
      >
        <div className="container my-5">
          <div className="display-5 px-2 text-center">Give your Feedback!</div>
          <div className="lead text-center">
            Help us improve our webapp by providing your valuable feedback. You
            feedback will be used to improve the UI/ UX of the webapp so that we
            can provide the best possible service to you!
          </div>
        </div>
      </div>

      <hr />

      <div className="container row d-flex justify-content-between">
        <div className="card card mb-3 col-md-5 p-0 border border-primary">
          <div className="card-header text-center bg-primary text-white">
            Sign Kit: Feedback Form 1
          </div>
          <div className="card-body d-flex flex-column justify-content-between">
            <div>
              <h5 className="card-title">Feedback on Overall Website</h5>
              <p className="card-text">
                Tell us what you think about the overall webapp design. Rate our
                webpage on various metrics like satisfaction, appearance,
                usability etc.
              </p>
            </div>
            <div className='mt-3'>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://docs.google.com/forms/d/e/1FAIpQLScipllrWetketalXpMvc3ZqO-Gclf9PXVgzr6nJIkKmXdiuzQ/viewform?usp=dialog"
                className="btn btn-info"
              >
                Open Feedback Form
              </a>
            </div>
          </div>
        </div>

        </div>

      </div>
  );
}

export default Feedback;
