import React, { Component } from "react";
import "./ModalEdit.scoped.css";

class ModalEdit extends Component {
  render() {
    // console.log("PROPS MODAL", this.props.show);
    if (!this.props.show) return null;
    return (
      <div className="wrapper-modal">
        <div className="modal-content">
          <div className="modal-body ">
            <p className="content">Edit Product Successfuly</p>
          </div>
          <div className="modal-footer">
            <i className="bi bi-check-circle-fill icon" />
          </div>
        </div>
      </div>
    );
  }
}

export default ModalEdit;
