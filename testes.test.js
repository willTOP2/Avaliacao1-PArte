

  const Sistema = require('./ex2')


  describe('Testes', ()=> {
      
  const arr = [-1, 50, 5]; 
  const result = Sistema.compose({value: 0})

  const result1 = arr.map(Sistema.mapToNumberObject).map(Sistema.compose) 

      test('Teste Exercicio 4', ()=> {

          expect(result).toStrictEqual({
            value: 0,
            isEven: true,
            isZero: true,
            negative: false,
            positive: false,
            isPrime: false,
            isOdd: false
          })

      })

      test('Teste Exercicio 5', ()=> { 
        expect(result1).toStrictEqual(
        [
          {
            value: -1,
            isEven: false,
            isZero: false,
            negative: true,
            positive: false,
            isPrime: false,
            isOdd: true
          },
          {
            value: 50,
            isEven: true,
            isZero: false,
            negative: false,
            positive: true,
            isPrime: false,
            isOdd: false
          },
          {
            value: 5,
            isEven: false,
            isZero: false,
            negative: false,
            positive: true,
            isPrime: false,
            isOdd: true
          }
        ]
        )
      
    })
  

  })
