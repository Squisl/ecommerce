const getDigitCount = number =>
  Math.max(Math.floor(Math.log10(Math.abs(number))), 0) + 1

// Get digit of a number on the n position
export default (number, n, fromLeft = true) => {
  const location = fromLeft ? getDigitCount(number) + 1 - n : n
  return Math.floor((number / Math.pow(10, location - 1)) % 10)
}
