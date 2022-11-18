let dpiElement = document.getElementById('dpi');
export const clientDpi = dpiElement.getBoundingClientRect().width;
export function inchesToPixels(inches: number){
    return inches * clientDpi;
}
export function pixelsToInches(pixels: number){
    return pixels / clientDpi;
}