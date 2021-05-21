let convertFahrToCelsius = fahr => {

     if(isNaN(fahr)) {
        if(Array.isArray(fahr)) {
            return `${fahr} is not a valid number but an array`
          }

      return `${JSON.stringify(fahr)} is not a valid number but a/an ${typeof fahr}`;
    }

     return (fahr - 32) * 5/9;

}

console.log(convertFahrToCelsius(0).toFixed(4));
console.log(convertFahrToCelsius([1,3,3]));
console.log(convertFahrToCelsius({temp: 'o'}));






function checkYuGiOh(n) {
    
    try {
      let arr = [...new Array(Number(n))].map((_value, index) => {
        //increment index which start from 0 to start from 1
        index++;
        //   create constants for all the strings to replace
        const [_2, _3, _5] = ["yu", "gi", "oh"];
        //check for all
        if (index % 2 === 0 && index % 3 === 0 && index % 5 === 0)
          return _2 + "-" + _3 + "-" + _5;

        //check for two possible multiples

        else if (index % 2 === 0 && index % 3 == 0) return _2 + "-" + _3;
        else if (index % 2 === 0 && index % 5 === 0) return _2 + "-" + _5;
        else if (index % 3 === 0 && index % 5 === 0) return _3 + "-" + _5;

        //check for one multiple

        else if (index % 2 === 0) return _2;
        else if (index % 3 === 0) return _3;
        else if (index % 5 === 0) return _5;
        //return the number
        return index;
      });
      return arr;
    } catch (err) {
      return `'${n}' is an invalid parameter`;
    }
  }
   console.log(checkYuGiOh())