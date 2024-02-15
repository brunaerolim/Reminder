export function convertBrazilianDateFormatToGlobal(date) {
    const [day, month, year] = date.split('/');
    return `${month}/${day}/${year}`;
}

export function convertGlobalDateFormatToBrazilian(date) {
    const [year, month, day] = date.split('-');
    return `${day}/${month}/${year}`;
}