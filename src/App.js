import React, { Component } from 'react';
import GrossSalary from './components/Salary/GrossSalary';
import InputReadOnly from './components/Salary/InputReadOnly';
import { calculateSalaryFrom } from './components/Salary/salary';

import Header from './components/Header/Header';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      grossSalary: '',
      informedGrossSalary: '',
      discountINSS: '',
      baseIRPF: '',
      discountIRPF: '',
      netSalary: '',
      bar1: 0,
      bar2: 0,
      bar3: 0,
    };
  }

  handleChange = (newGrossSalary) => {
    const data = calculateSalaryFrom(newGrossSalary);

    const { baseINSS, discountINSS, baseIRPF, discountIRPF, netSalary } = data;

    this.setState({
      grossSalary: newGrossSalary,
      informedGrossSalary: baseINSS,
      discountINSS: discountINSS,
      baseIRPF: baseIRPF,
      discountIRPF: discountIRPF,
      netSalary: netSalary,
    });
  };

  render() {
    const {
      informedGrossSalary,
      discountINSS,
      baseIRPF,
      discountIRPF,
      netSalary,
    } = this.state;

    return (
      <div>
        <Header />
        <GrossSalary onChangeSalary={this.handleChange} />
        <InputReadOnly
          informedGrossSalary={informedGrossSalary}
          discountINSS={discountINSS}
          baseIRPF={baseIRPF}
          discountIRPF={discountIRPF}
          netSalary={netSalary}
        />
      </div>
    );
  }
}
