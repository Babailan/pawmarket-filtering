function generatePrice() {
  return parseInt((Math.random() * (20000 - 10000) + 10000).toString());
}

export default generatePrice;
