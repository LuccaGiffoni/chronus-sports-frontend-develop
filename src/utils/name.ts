export const fisrtName = (fullName: string) => {
    return fullName.split(" ")[0];

}

export const lastName = (fullName: string) => {
    let firstName = fullName.split(" ")[0];
    return fullName.substring(firstName.length + 1);
}