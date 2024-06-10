export function formatNumber(value: number): string {
    const isDecimal = value % 1 !== 0; // проверяем, является ли число десятичным
    const formattedValue = isDecimal ? value.toString().replace('.', ',') : value.toString(); // преобразуем точку в запятую в десятичных числах

    if (isDecimal) {
        return formattedValue;
    } else {
        return formattedValue;
    }
}