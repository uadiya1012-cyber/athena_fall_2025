// utils.js
const formatDate = (date) => {
    return date.toLocaleDateString();
};

const formatCurrency = (amount) => {
    return `$${amount.toFixed(2)}`;
};

const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};

// Бүгдийг нэг дор export
export { formatDate, formatCurrency, capitalize };