import React, { Component } from 'react';
import { formatNumber } from '../../Helpers/numberFormatter';
import { percentage } from '../../Helpers/percentage';
import css from './designSalary.module.css';
import Bar from './react-barras/src/Bar.js';

export default class DisabledInputs extends Component {
  render() {
    const {
      informedGrossSalary,
      discountINSS,
      baseIRPF,
      discountIRPF,
      netSalary,
    } = this.props;

    const bar1 = percentage(informedGrossSalary, discountINSS, 'n');
    const bar2 = percentage(baseIRPF, discountIRPF, 'n');
    const bar3 = percentage(informedGrossSalary, netSalary, 'n');

    return (
      <div>
        <div className={css.flexRow}>
          <div className={css.flexColumn}>
            <label className={css.grossSalary}>Informed Gross Salary</label>
            <input
              type="text"
              value={formatNumber(informedGrossSalary)}
              readOnly
            />
          </div>

          <div className={css.flexColumn}>
            <label className={css.taxINSS}>INSS Taxes</label>
            <input
              className={css.taxINSSInput}
              type="text"
              value={`${formatNumber(discountINSS)} ${percentage(
                informedGrossSalary,
                discountINSS,
                'y'
              )}`}
              readOnly
            />
          </div>

          <div className={css.flexColumn}>
            <label className={css.salaryIRPF}>IRPF Salary</label>
            <input type="text" value={formatNumber(baseIRPF)} readOnly />
          </div>

          <div className={css.flexColumn}>
            <label className={css.taxIRPF}>IRPF taxes</label>
            <input
              className={css.taxIRPFInput}
              type="text"
              value={`${formatNumber(discountIRPF)} ${percentage(
                baseIRPF,
                discountIRPF,
                'y'
              )}`}
              readOnly
            />
          </div>

          <div className={css.flexColumn}>
            <label className={css.netSalary}>Net Salary</label>
            <input
              className={css.netSalaryInput}
              type="text"
              value={`${formatNumber(netSalary)} ${percentage(
                informedGrossSalary,
                netSalary,
                'y'
              )}`}
              readOnly
            />
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Bar value={bar1} color="#e67e22" />
          <Bar value={bar2} color="#c0392b" />
          <Bar value={bar3} color="#16a085" />
        </div>
      </div>
    );
  }
}
