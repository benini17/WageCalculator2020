function changeCSSVariable(value, type) {
  console.log('changeCSSVariable -> value', value);
  console.log('changeCSSVariable -> type', type);

  if (type > 0) {
    document.documentElement.setAttribute('style', `--${type}: ${value}`);
    // document.documentElement.style.setProperty(`--${type}`, value);
  } else {
    return;
  }
}

export { changeCSSVariable };
