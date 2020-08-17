const formatter = Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

function formatNumber(value) {
  console.log('formatNumber -> value', value);

  if (value > 0) {
    return formatter.format(value);
  } else {
    return '';
  }
}

function minTwoDigits(n) {
  console.log('minTwoDigits -> n', n);
  return (n < 10 ? '0' : '') + n;
}

function twoDecimals(value) {
  if (value > 0) {
    // let result = parseFloat(value.toPrecision(4));
    let result = minTwoDigits(value);
    let test = result.slice(0, 5);

    return test;
  } else {
    return '';
  }
}

export { formatNumber };
export { twoDecimals };
