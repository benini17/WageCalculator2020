import React from 'react';
import './styles.css';

export default class Bar extends React.Component {
  render() {
    let { value, color = 'black' } = this.props;
    console.log('Bar -> render -> value', value);
    console.log('chegou aqui');

    if (value === '') {
      value = 0;
    }

    return (
      <div
        style={{
          marginTop: '40px',
          width: value + '%',
          height: '20px',
          backgroundColor: color,
        }}
      />
    );
  }
}
