export function fixTime(num) {
    if (num.toString().length < 2) {
        return `0${num}`
    }
    return num;
}