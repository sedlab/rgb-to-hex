import { rgbToHex } from "./index";
test("rgbToHex", () => {
    expect(rgbToHex("rgba(51, 170, 51, .1)")).toEqual("#33aa33");
    expect(rgbToHex("rgba(51, 170, 51, .1)", true)).toEqual("#33aa331a");
    expect(rgbToHex("rgba(51 170 51 / 0.4)", true)).toEqual("#33aa3366");
    expect(rgbToHex("rgba(51 170 51 / 40%)", true)).toEqual("#33aa3366");
    expect(rgbToHex("rgba(255, 0, 153.6, 1)", true)).toEqual("#ff009a");
});