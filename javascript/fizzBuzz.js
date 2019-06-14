/*
 * An alternative solution to fizzbuzz
 */

function fizzbuzz() {
    let ary = [];
    let val;
    for (let i=1; i<=100; i++) {
        val = 0;
        if (i % 3 == 0) {
            val += 1;
        } 
        if (i % 5 == 0) {
            val += 2;
        }
        ary.push(val ? (val & 1 ? 'fizz' : '') + (val & 2 ? 'buzz' : '') : i.toString());
    }

    return ary;
}
