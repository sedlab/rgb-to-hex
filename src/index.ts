import { TRoundRgbaValue, TRoundRgba, TRgbaToHexValue, TRgbaToHex } from "./type";

const format = (number: number): string => {
  if (number === -1) return "";
  const hex = number.toString(16);
  return hex.length < 2 ? "0" + hex : hex;
};

const round = (number: number): number => Math.round(number);

const roundRgba = (rgba: TRoundRgbaValue): TRoundRgba => ({
  r: round(rgba[0]),
  g: round(rgba[1]),
  b: round(rgba[2]),
  a: round(rgba[3] > 1 && rgba[3] <= 100 ? 255 * rgba[3] / 100 : rgba[3] > 0 && rgba[3] !== 1 ? 255 * rgba[3] : -1)
});

const parseRgba = (rgba: any) => rgba.match(/[0-9]*[.]?[0-9]*[e]*[0-9]/g).map((i: string) => +i);

export const rgbToHex = (rgba: TRgbaToHexValue, alpha: boolean = false): TRgbaToHex => {
  try {
    const math = typeof rgba === "string" ? parseRgba(rgba) : rgba;
    const { r, g, b, a } = roundRgba(math);
    return "#" + format(r) + format(g) + format(b) + (alpha ? format(a) : "");
  } catch (err) {
    // console.error(err);
    return undefined;
  };
};