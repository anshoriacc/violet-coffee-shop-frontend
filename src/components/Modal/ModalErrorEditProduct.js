import React, { Component } from "react";
import "./ModalEdit.scoped.css";

class ModalErrorEditProduct extends Component {
  render() {
    // console.log("PROPS MODAL", this.props.show);
    if (!this.props.show) return null;
    return (
      <div className="wrapper-modal">
        <div className="modal-content">
          <div className="modal-body ">
            <p className="content">Product update failed, try relogin again</p>
          </div>
          <div className="modal-footer">
            {/* <i className="bi bi-x-circle-fill icon-failed" /> */}
            <button className="btn-tutup" onClick={this.props.onClose}>
              <p className="title-close">Close</p>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ModalErrorEditProduct;
