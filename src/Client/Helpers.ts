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

// ?mode=light switches the human-readable view to a light palette; anything else keeps the dark one.
export const isLightMode = new URLSearchParams(window.location.search).get('mode') === 'light';

// ?noise=low hides all icons for a plainer resume.
export const isLowNoise = new URLSearchParams(window.location.search).get('noise') === 'low';

const DarkColors = {
    background: "#181818",
    accentLight: '#e57373',

    darkText: "#bcbec0",
    lightText: '#bcbec0',
    cardHead: "#3a3a3a",
    cardBody: "#2d2d2d",

    contactText: '#bbbdbf',
    contactMuted: '#808184'
}

const LightColors: typeof DarkColors = {
    background: "#ffffff",
    accentLight: '#c62828',

    darkText: "#333333",
    lightText: '#333333',
    cardHead: "#ececec",
    cardBody: "#f7f7f7",

    contactText: '#333333',
    contactMuted: '#888888'
}

export const Colors = isLightMode ? LightColors : DarkColors

export function Combine<A extends {},B extends {}>(a: A, b: B): A & B{
    if(typeof a == 'undefined'){
        return b as any;
    } 
    if(typeof b == 'undefined'){
        return a as any;
    }
    let out: A & B = {} as any;
    for(let [k,v] of Object.entries(a)){
        out[k] = v;
    }
    for(let [k,v] of Object.entries(b)){
        out[k] = v;
    }
    return out;
}

export function addInbetween<ArrType,AddType>(arr: ArrType[], inbetween: (index: number)=>AddType): Array<ArrType | AddType>{
    let out: Array<ArrType | AddType> = []
    for(let i = 0;i<arr.length;i++){
        out.push(arr[i]);
        if(i < arr.length - 1){
            out.push(inbetween(i))
        }
    }
    return out;
}