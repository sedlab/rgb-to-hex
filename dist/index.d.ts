type TRgbaToHexValue = string | Array<number | string> | number | undefined;
type TRgbaToHex = string | undefined;

declare const rgbToHex: (rgba: TRgbaToHexValue, alpha?: boolean) => TRgbaToHex;

export { rgbToHex };
