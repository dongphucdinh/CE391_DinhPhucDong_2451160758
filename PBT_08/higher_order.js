function pipe(...fns) {
    return function (value) {
        return fns.reduce((result, fn) => fn(result), value);
    };
}
const process = pipe(
    x => x * 2,
    x => x + 10,
    x => x.toString(),
    x => "Kết quả: " + x
);
console.log(process(5));
function memoize(fn) {
    const cache = new Map();
    return function (...args) {
        const key = JSON.stringify(args);
        if (cache.has(key)) {
            return cache.get(key);
        }
        const result = fn(...args);
        cache.set(key, result);
        return result;
    };
}
const expensiveCalc = memoize((n) => {
    console.log("Đang tính...");
    let result = 0;
    for (let i = 0; i < n; i++) {
        result += i;
    }
    return result;
});
console.log(expensiveCalc(1000000));
console.log(expensiveCalc(1000000));
function debounce(fn, delay) {
    let timerId;
    return function (...args) {
        clearTimeout(timerId);
        timerId = setTimeout(() => {
            fn(...args);
        }, delay);
    };
}
const search = debounce((query) => {
    console.log("Searching:", query);
}, 500);
search("a");
search("ab");
search("abc");
async function retry(fn, maxAttempts = 3) {
    let lastError;

    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
        try {
            return await fn();
        } catch (error) {
            lastError = error;
            console.log(`Lần thử ${attempt} thất bại`);

            if (attempt === maxAttempts) {
                throw lastError;
            }
        }
    }
}
let count = 0;
const unstableTask = async () => {
    count++;

    if (count < 3) {
        throw new Error("Lỗi giả lập");
    }

    return "Thành công!";
};
retry(unstableTask, 3)
    .then(result => console.log(result))
    .catch(error => console.log("Thất bại:", error.message))