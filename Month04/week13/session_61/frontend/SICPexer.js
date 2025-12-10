// 4. SICP Exercise 1.9 - Plus функцуудыг шинжлэх:
// Version 1
function plus_v1(a, b) {
    if (a === 0) {
        return b;
    } else {
        return 1 + plus_v1(a - 1, b);
    }
}

// Version 2
function plus_v2(a, b) {
    if (a === 0) {
        return b;
    } else {
        return plus_v2(a - 1, b + 1);
    }
}

// 5. Fast exponentiation (SICP Exercise 1.16):
// b^n-ийг хурдан тооцоолох:
// b^n = (b^(n/2))^2       хэрэв n тэгш
// b^n = b × b^(n-1)       хэрэв n сондгой
// Recursive process
function fast_expt(b, n) {
    if (n === 0) {
        return 1;
    } else if (n % 2 === 0) {
        const half = fast_expt(b, n / 2);
        return half * half;
    } else {
        return b * fast_expt(b, n - 1);
    }
}

// Тест: fast_expt(2, 10) = 1024
// Хэдэн үржүүлэг хийгдэх вэ? (expt_recursive-тэй харьцуул)
// CHALLENGE: Iterative process болгон бич
function fast_expt_iter(b, n) {
    // Hint: a × b^n тогтмол байхаар state хадгал
    function iter(a, b, n) {
        // Таны код энд
    }
    return iter(1, b, n);
}

// 6. GCD (Greatest Common Divisor):
// Euclid's algorithm:
// GCD(a, b) = GCD(b, a % b)
// GCD(a, 0) = a
function gcd(a, b) {
    if (b === 0) {
        return a;
    } else {
        return gcd(b, a % b);
    }
}

// gcd(48, 18) процессыг задал:
// gcd(48, 18)
// ???
// Үр дүн: ???
// Энэ recursive process уу, iterative process уу? Яагаад?


// 7. SICP Exercise 1.11:
// f(n) = n                           if n < 3
// f(n) = f(n-1) + 2f(n-2) + 3f(n-3)  if n >= 3
// Recursive process
function f_recursive(n) {
    if (n < 3) return n;
    else return f_recursive(n - 1) + 2 * f_recursive(n - 2) + 3 * f_recursive(n - 3);
}

// Iterative
function f_iterative(n) {
    if (n < 3) return n;
    let a = 0, b = 1, c = 2; // f(0), f(1), f(2)
    for (let i = 3; i <= n; i++) {
        const next = c + 2 * b + 3 * a;
        a = b; b = c; c = next;
    }
    return c;
}

// Тест:
// f(0) = 0, f(1) = 1, f(2) = 2
// f(3) = f(2) + 2*f(1) + 3*f(0) = 2 + 2 + 0 = 4
// f(4) = f(3) + 2*f(2) + 3*f(1) = 4 + 4 + 3 = 11
// f(5) = f(4) + 2*f(3) + 3*f(2) = 11 + 8 + 6 = 25


// 8. SICP Exercise 1.12 - Pascal's Triangle:

// Pascal's Triangle:
//     1
//    1 1
//   1 2 1
//  1 3 3 1
// 1 4 6 4 1
// pascal(row, col) = row-р мөрний col-р элемент (0-indexed)
function pascal(row, col) {
    if (col === 0 || col === row) return 1;
    return pascal(row - 1, col - 1) + pascal(row - 1, col);
}

// Тест:
// pascal(0, 0) = 1
// pascal(2, 1) = 2
// pascal(4, 2) = 6