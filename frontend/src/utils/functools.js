const { dateFns } = window;

export function dateFormatter(date) {
    return dateFns.format(new Date(date), "YYYY-MM-DD HH:mm:ss")
}

export function returnsToList(returns) {
    const result = []
    for (let i = 0; i < returns.__length__; i++) result.push(returns[i]);
    return result;
}