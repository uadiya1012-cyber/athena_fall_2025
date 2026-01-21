function sumArray(numbers: number[]): number {
    return numbers.reduce((sum, n) => sum + n, 0);
}

function filterPositive(numbers: number[]): number[] {
    return numbers.filter(n => n > 0);
}

function findMax(numbers: number[]): number {
    return Math.max(...numbers);
}