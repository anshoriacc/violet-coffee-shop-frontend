import './CardHistory.scoped.css';

import React, {Component} from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default class CardHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovered: false,
    };
  }

  // fromChange = (e) => {
  //   const data = { ...this.state.id };
  //   data[e.target.name] = e.target.value;
  //   this.setState({ id: e.target.value });
  // };

  /*  fromChange = (e) => {
    const ids = [...this.state.id];
    ids.push(e.target.value);
    this.setState({ id: ids }, () => {
      console.log(this.state.id);
    });
  }; */

  render() {
    return (
      // <>
      // </>
      <div className="main">
        <img src={this.props.image} alt="" />
        <div className="detail">
          <p className="name">{this.props.name}</p>
          <p className="price">{this.props.price}</p>
          <p className="delivery">{this.props.delivery}</p>
          <i
            className={`bi ${this.state.isHovered ? 'bi-trash-fill' : 'bi-trash'}`}
            onClick={this.props.onClick}
            onMouseEnter={() => this.setState({isHovered: true})}
            onMouseLeave={() => this.setState({isHovered: false})}
          />
        </div>
      </div>
    );
  }
}
