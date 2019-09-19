const calculateArea = function(a, b, c) {
    let count = arguments.length;
    let figure = null;
    let area = 0;
    switch(count){
        case 2: {figure = 'square';
            area = a * b;
        }
            break;
        case 3: {figure = 'triangle';
            const p = (1/2) * (a + b + c);
            area = Math.sqrt(  p * ( p-a) * (p-b) * (p-c) );
        }
            break;
    }

    let input = arguments;
    return {area, figure, input};
};

console.log( calculateArea(2,2) );
console.log( calculateArea(4,5,6) );