var Alphabet = {
    BINARY: '01',
    OCTAL: '01234567',
    DECIMAL: '0123456789',
    HEXA_DECIMAL: '0123456789abcdef',
    ALPHA_LOWER: 'abcdefghijklmnopqrstuvwxyz',
    ALPHA_UPPER: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    ALPHA: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
    ALPHA_NUMERIC: '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
};


function BINtoDEC(source) {
    var sum = 0;

    for (let i = 0; i < source.length; i++) {

        sum = (sum * 2) + +source[i];
        console.log(sum + " " + (+source[i]));
    }
    return sum;
}

function DECtoBIN(source) {
    var result = "";
    while (source > 0) {
        result += (source % 2).toString();
        source = source >> 1;
    }
    return result.split("").reverse().join("");
}

function ANYtoDEC(input, source) {
    var base = source.length;
    var result=0;
    for (let i = 0; i < input.length; i++) {
        result += source.indexOf(input[i]) * Math.pow(base,input.length-1-i);
    }
    return result.toString();
}
function DECtoANY(input, source) {
 //  var result = [];
    var result = "";
    var base = source.length;
    do {
    //    result.push(source[input%base-1]);
        result += source[input%base];
        input = Math.floor(input/base);
    }while (input>0);

    return result.split("").reverse().join("");
}

function convert(input, source, target) {

    if(source===target) return input;
    if(source===dec) return DECtoANY(input,target);
    if(target===dec) return ANYtoDEC(input,target);

    input=ANYtoDEC(input, target);
    return DECtoANY(input,target);

    return 0;

}

var bin = Alphabet.BINARY, oct = Alphabet.OCTAL, dec = Alphabet.DECIMAL, hex = Alphabet.HEXA_DECIMAL,
    allow = Alphabet.ALPHA_LOWER, alup = Alphabet.ALPHA_UPPER, alpha = Alphabet.ALPHA, alnum = Alphabet.ALPHA_NUMERIC;
//console.log(ANYtoDEC("f",hex));
//console.log(ANYtoDEC("646737361477606",oct));
