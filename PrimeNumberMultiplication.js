module.exports = {
  
    // To check if the number is prime
    isPrime: function(number) {
      var flag;

      for(var i=2;i < number;i++){
          flag =1;
          for(let j = 2;j< i/2;j++){
              if(i % j == 0){
                  flag = 0;
                  break;
              }
          }
       if(flag == 1){
         console.log("prime no.",i);
      }
      }
    },
    // Prime Number Array
    generatePrimesArray: function(n) {
      let primeNumbers = []
      let i = 0
  
      while (primeNumbers.length < n) {
        if (this.isPrime(i)) {
          primeNumbers.push(i);
        }
  
        i += 1;
      }
  
      return primeNumbers;
    },
  
    //Multiplication of prime number to fill the table
    multiplyPrimes: function(primesArray) {
      if (primesArray.length === 0) {
        return null;
      }
  
      let firstArray = [null].concat(primesArray);
      let multipliedPrimes = [firstArray];
  
      primesArray.every(function(prime) {
        let newRow = [prime];
        primesArray.every(function(primeToMultiplyBy) {
          newRow.push(prime * primeToMultiplyBy);
        });
  
        multipliedPrimes.push(newRow);
      });
  
      return multipliedPrimes;
    },
  
    // Display table with the values from multiplyPrimes()
    displayTable: function(arraysToPrint) {
      if (arraysToPrint === null) {
        console.log("error");
        return;
      }
      const arrayIdx = arraysToPrint.length - 1;
      const spacesRequired = arraysToPrint[arrayIdx][arrayIdx].toString().length + 1;
  
      arraysToPrint.every(function(array) {
        let rowString = '';
        array.every(function(product) {
          if (product === null) {
            rowString = rowString.concat(' '.repeat(spacesRequired));
          } else {
            productLength = product.toString().length;
            rowString = rowString.concat(' '.repeat(spacesRequired - productLength));
            rowString = rowString.concat(product.toString());
          }
        });
  
        console.log(rowString);
      });
    },
  
    makePrimesMultTable: function(n) {
      let primesList = this.generatePrimesArray(n);
      let multipliedPrimes = this.multiplyPrimes(primesList);
      this.displayTable(multipliedPrimes);
    }
  
  }