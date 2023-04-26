export function phoneFormat(value: any) {
    const tel = value?.replace(/\D/g, "");
    return `${tel.slice(0, 3)} ${tel.slice(3)}`;
}