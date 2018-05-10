'use strict';

function summ(...numbers) {
    let total = 0;

    numbers.forEach((num)=>{
        total += num;
    });

    return total;
}

export default summ;