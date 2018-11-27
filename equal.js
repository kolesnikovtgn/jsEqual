let str1 = 'abcdefg';
let str2 = 'ebafcdg';

const comparsion = (str1, str2) => {
    if(str1.length !== str2.length) return false;

    let string1 = str1.split('');
    let string2 = str2.split('');

    let oddStr1 = [];
    let evenStr1 =[];

    let oddStr2 =[];
    let evenStr2 =[];

    for(let i=0; i<string1.length; i+=2){
        oddStr1.push(string1[i]);
    };

    for(let i=1; i<string1.length; i+=2){
        evenStr1.push(string1[i]);
    };

    for(let i=0; i<string2.length; i+=2){
        oddStr2.push(string2[i]);
    };

    for(let i=1; i<string2.length; i+=2){
        evenStr2.push(string2[i]);
    };


    if((oddStr1.sort().join('') == oddStr2.sort().join('')) && (evenStr1.sort().join('') == evenStr2.sort().join(''))){
        return "String is equal!";
    } else {
        return "String is not equal!";
    }

};

console.log(comparsion(str1, str2));