export const PI = 3.14159

export function getCircumfrence (radius){
        return 2 * PI * radius;
}
export function getArea (radius){
    return 2 * PI * (radius*radius);
}
export function getVolume(radius){
    return 4/3 * PI * (radius* radius* radius)
}