let get_top_multiple = n => {
    let monitor = true;
    while (monitor) {
        if (n % 5 != 0) {
            n -= 1;
        } else {
            monitor = false;
            return n;
        }
    }
}

let get_trailing_zeroes = n => {
    let nearest_mult = get_top_multiple(n);

    let status = true;
    let counter = 1;
    let number = 0;

    while (status) {
        let div = Math.pow(5, counter);
        let res = nearest_mult / div;
        if (res >= 2) {
            number += Math.floor(res);
        }

        if (Math.floor(res) <= 1) {
            if (Math.floor(res) == 1) {
                number += 1;
            }
            
            status = false;
            return number;
        }
        counter++;
    }

}

console.log(get_trailing_zeroes(10));