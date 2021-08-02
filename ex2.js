    const R = require('ramda');

    const isEven = (number) =>  {
        const n = R.clone(number);
        n.isEven = n.value % 2 == 0;
        return n
    }

    const positive = (number) => {
        const n = R.clone(number);
        n.positive = n.value > 0;
        return n
    }

    const isOdd = (number) => {
        
    const n = R.clone(number); 
    n.isOdd = n.value % 2 !== 0; 
    return n;

    }

    const negative = (number) => {
        const n = R.clone(number); 
        n.negative = n.value < 0; 
        return n
    }

    const isZero = (number) =>  {
        const n = R.clone(number); 
        n.isZero = n.value === 0; 
        return n;
    }

    const isPrime = (number) => {
        const n = R.clone(number); 
    n.isPrime = ValidPrime(number)
    
        return n;
    }

    const ValidPrime = (num) => {
        for (let i = 2; i < num; i++)
        if (num % i === 0) {
            return false;
        }
        return num > 1;
    };



    const mapToNumberObject = num => {
        return { value: num };
    }

    const arr = [-1, 50, 5, 10, -8, 20, 25, 0, 100, 14, -123]; 


    const map = arr.map(mapToNumberObject)



    const compose = R.pipe( 
        
        isEven, 
        isZero, 
        negative, 
        positive, 
        isPrime, 
        isOdd
        
    )  

    
    

    module.exports = {isEven, isOdd, isPrime,isZero, positive, negative, compose, mapToNumberObject}

    // ExercÃ­cio 1: use map() para transformar 'arr' em objetos usando mapToNumberObject()

    // ExercÃ­cio 2: seguindo o modelo das 2 primeiras funÃ§Ãµes implemente as outras 4 funÃ§Ãµes

    // ExercÃ­cio 3: refatore todas as funÃ§Ãµes para a forma usando arrow function (=>)

    // ExercÃ­cio 4: use R.pipe para compor as funÃ§Ãµes: isEven, positive, isOdd, negative, 
        // isZero, e isPrime. Teste a funÃ§Ã£o composta com um Ãºnico objeto.

    // ExercÃ­cio 5: use a funÃ§Ã£o composta do Ex. 4 para transformar os nÃºmeros em 'arr'