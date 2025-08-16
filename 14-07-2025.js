let n = 45678





const isHappy = (n) => {
    const set = new Set();
    while (1) {
        let lastDigit;
        let value = 0
        while (n) {
            lastDigit = n % 10
            value += (lastDigit * lastDigit)
            n = parseInt(n / 10)
        }

        if (value == 1) return true;
        else if (set.has(value)) return false;

        set.add(value)
        n = value
    }
    return false
};

console.log(isHappy(2))