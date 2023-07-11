export const getPreviousDay = (date = new Date()) => {
    const previous = new Date(date.getTime());
    previous.setDate(date.getDate() - 1);
    return previous;
};

function padTo2Digits(num: number) {
    return num.toString().padStart(2, '0');
}

export const formatDate = (date: Date) => {
    // date.getFullYear()
    return [padTo2Digits(date.getDate()), padTo2Digits(date.getMonth() + 1)].join('/');
};

export const isSelectedDate = (dateA: Date, dateB: Date) => {
    return formatDate(dateA) === formatDate(dateB);
};

export const formatDateCalendar = (date: Date) => {
    return [date.getFullYear(), padTo2Digits(date.getMonth() + 1), padTo2Digits(date.getDate())].join('-');
};

export const getFirstDayOfMonth = () => {
    const date = new Date();
    return new Date(date.getFullYear(), date.getMonth() - 1, 1);
};
