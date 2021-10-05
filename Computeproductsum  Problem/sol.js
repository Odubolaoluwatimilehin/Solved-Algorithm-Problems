
function Computeproductsum(number){
         output = [];
        let product = 1, sum=0;
        digitNumber = number.toString();

        for (var i = 0, len = digitNumber.length; i < len; i += 1) {
            output.push(parseInt(digitNumber.charAt(i)));
        }
        console.log(output);
        for (var i = 0, len = output.length; i < len; i += 1) {
        product *= output[i];
        sum  += output[i];
        }
        return product-sum;
}

Computeproductsum(123456);