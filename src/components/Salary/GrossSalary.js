import React, { Component } from 'react';
import css from './designSalary.module.css';

export default class GrossSalary extends Component {
  HandleInputChange = (event) => {
    const grossSalary = event.target.value;
    this.props.onChangeSalary(grossSalary);
  };

  // handleClick = (event) => {
  //   if (event.target.value === '+') {
  //     let clicks = clicks + 1;
  //     this.props.onClick(clicks);
  //     // this.setState({ clicks: this.props.clicks + 1 });
  //   } else {
  //     let clicks = clicks - 1;
  //     this.props.onClick(clicks);
  //     // this.setState({ clicks: this.props.clicks - 1 });
  //   }
  // };

  render() {
    const { grossSalary } = this.props;

    return (
      <div>
        <label className={css.grossSalary}>Gross Salary</label>
        <div className={css.flexRow}>
          <input
            placeholder="Write your monthly gross income here"
            type="text"
            value={grossSalary}
            onChange={this.HandleInputChange}
          />
          <div className={css.flexColumn}>
            {/* <button onClick={this.handleClick}>+</button>
            <button onClick={this.handleClick}>-</button> */}
          </div>
        </div>
      </div>
    );
  }
}
