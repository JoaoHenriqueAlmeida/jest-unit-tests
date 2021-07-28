const assert = require('assert');
const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  OBS: Lembre-se que você não precisa se preocupar com o describe e o it por enquanto, isso será aprendido posteriormente.
*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste que o retorno da função é um array.
    assert.strictEqual(Array.isArray(productDetails('string1', 'string2')), true)
      /* Método Array.isArray https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray 
      Tentei:
      assert.strictEqual(typeof productDetails('string1','string2'), 'object')
      Mas, apesar de o teste passar, não necessáriamente testa o que foi pedido
      */
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(productDetails('string1', 'string2').length, 2)
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.strictEqual(typeof productDetails('abc','def')[0] && typeof productDetails('abc', 'def')[1], 'object')
    // Teste que os dois objetos são diferentes entre si.
    assert.strictEqual(productDetails('abc','def')[0] === productDetails('abc', 'def')[1], false);
    // Teste que os dois productIds terminam com 123.
    assert.strictEqual(productDetails('abc', 'def')[0].details.productId === 'abc123' && productDetails('abc', 'def')[1].details.productId === 'def123', true);
  });
});
