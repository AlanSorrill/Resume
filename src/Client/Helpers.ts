let dpiElement = document.getElementById('dpi');
export const clientDpi = dpiElement.getBoundingClientRect().width;
export function inchesToPixels(inches: number){
    return inches * clientDpi;
}
export function pixelsToInches(pixels: number){
    return pixels / clientDpi;
}
export type CapitalizeAll<Str extends string> = Str extends `${infer A}${infer Rest}` ? `${Capitalize<A>}${CapitalizeAll<Rest>}` : Str
type ImageExtensionBase = 'png' | 'jpg' | 'ico' | 'cur' | 'jpeg' | 'jfif' | 'pjpeg' | 'pjp' | 'svg' | 'apng'
export type ImageExtension = ImageExtensionBase | CapitalizeAll<ImageExtensionBase>
