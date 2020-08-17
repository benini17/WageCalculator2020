import React, { Component } from 'react';
import css from './designSalary.module.css';

export default class GrossSalary extends Component {
  HandleInputChange = (event) => {
    const grossSalary = event.target.value;
    this.props.onChangeSalary(grossSalary);
  };

  render() {
    const { grossSalary } = this.props;

    return (
      <div>
        <label className={css.grossSalary}>Gross Salary</label>
        <div className={css.flexRow}>
          <input
            placeholder="Write your monthly gross income here"
            type="number"
            value={grossSalary}
            onChange={this.HandleInputChange}
            min={0}
            step={50}
          />
          <div className={css.flexColumn}></div>
        </div>
      </div>
    );
  }
}
