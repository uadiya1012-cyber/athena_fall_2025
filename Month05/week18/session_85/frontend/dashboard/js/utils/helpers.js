export function filterByText(items, text, fields = []) {
    const query = text.toLowerCase();
    return items.filter(item =>
        fields.some(field =>
            item[field]?.toString().toLowerCase().includes(query)
        )
    );
}

export function paginate(items, page = 1, limit = 6) {
    const start = (page - 1) * limit;
    return items.slice(start, start + limit);
}
