const format = (number) => {
  if (number === -1)
    return "";
  const hex = number.toString(16);
  return hex.length < 2 ? "0" + hex : hex;
};
const round = (number) => Math.round(number);
const roundRgba = (rgba) => ({
  r: round(rgba[0]),
  g: round(rgba[1]),
  b: round(rgba[2]),
  a: round(rgba[3] > 1 && rgba[3] <= 100 ? 255 * rgba[3] / 100 : rgba[3] > 0 && rgba[3] !== 1 ? 255 * rgba[3] : -1)
});
const parseRgba = (rgba) => rgba.match(/[0-9]*[.]?[0-9]*[e]*[0-9]/g).map((i) => +i);
const rgbToHex = (rgba, alpha = false) => {
  try {
    const math = typeof rgba === "string" ? parseRgba(rgba) : rgba;
    const { r, g, b, a } = roundRgba(math);
    return "#" + format(r) + format(g) + format(b) + (alpha ? format(a) : "");
  } catch (err) {
    return void 0;
  }
};

export { rgbToHex };
