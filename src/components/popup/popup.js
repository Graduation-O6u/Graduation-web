import React from "react";

const Popup = () => {
  return (
    <div
      class="modal fade"
      id="form"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="text-right cross">
            {" "}
            <i class="fa fa-times mr-2"></i>{" "}
          </div>
          <div class="card-body text-center">
            <div class="icons">
              <i class="fa fa-cloud-download fa-5x"></i>
            </div>

            <div class="downloading-text mt-3">
              <h4>Thanks for downloading...</h4>
              <span>
                Your downloading starts in <span class="countdown">10</span>{" "}
                seconds
              </span>
            </div>

            <div class="text-center mt-4">
              <button class="btn btn-success send px-3">
                Stop downloading <i class="fa fa-close ml-1"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
