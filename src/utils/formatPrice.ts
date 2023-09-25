export function formatNumber(value: number): string {
    const isDecimal = value % 1 !== 0; // проверяем, является ли число десятичным
    const formattedValue = isDecimal ? value.toString().replace('.', ',') : value.toString(); // преобразуем точку в запятую в десятичных числах
    const parts = formattedValue.split(','); // разделяем число на целую и десятичную части
    const integerPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' '); // добавляем пробелы для тысячных и бОльших разрядов целой части числа

    if (isDecimal) {
        return `${integerPart}, ${parts[1]}`;
    } else {
        return integerPart;
    }
}