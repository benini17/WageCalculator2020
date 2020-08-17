import { twoDecimals } from './numberFormatter';

function percentage(total, percentage, percentageDisplay) {
  const calculatedPercentage = (percentage / total) * 100;

  if (total && percentage >= 0) {
    if (percentageDisplay === 'n') {
      const fixedPercentage = twoDecimals(calculatedPercentage);
      return fixedPercentage;
    } else if (percentageDisplay === 'y') {
      const fixedPercentage = twoDecimals(calculatedPercentage);
      console.log('percentage -> fixedPercentage', fixedPercentage);
      if (fixedPercentage === '') {
        return ``;
      } else {
        return `(${fixedPercentage}%)`;
      }
    }
  } else {
    return '';
  }
}

export { percentage };
