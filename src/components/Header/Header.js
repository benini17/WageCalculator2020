import React, { Component } from 'react';
import css from './header.module.css';

export default class Header extends Component {
  render() {
    return (
      <div>
        <img
          className={css.wageCalculator}
          src="https://lh3.googleusercontent.com/xZAtoCVBeIjz8xHaLp8snP9vsNsCMbAPDzs6XDxy6Ozff1W9TFKQnyVm-PyCJEu5a34Z"
          alt="Wage Calculator"
        />
      </div>
    );
  }
}
