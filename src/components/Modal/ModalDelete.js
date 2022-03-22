import React, { Component } from "react";
import "./ModalDelete.scoped.css";

class ModalDelete extends Component {
  render() {
    // console.log("PROPS MODAL", this.props.show);
    if (!this.props.show) return null;
    return (
      <div className="wrapper-modal">
        <div className="modal-content">
          <div className="modal-body">
            <p className="content">Are you sure want to delete this product?</p>
          </div>
          <div className="modal-footer">
            <button className="btn-delete" onClick={this.props.onDelete}>
              <p className="title-delete">Delete</p>
            </button>
            <button className="btn-tutup" onClick={this.props.onClose}>
              <p className="title-close">Close</p>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ModalDelete;
