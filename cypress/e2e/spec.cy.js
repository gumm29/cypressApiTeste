import Comandos from '../support/Comandos.js'

let teste
let repete = 3

describe('teste de apis', () => {
  teste = false
  repete = 30

  for(let i = 0; i < repete; i++){
    console.log(repete)
    Comandos.its()
  }

  it('retorna todos os livros', () => {
    cy.retornaLivros()
  })

  if(teste == true){
    it('nao encontra o livro especifico', () => {
      cy.retornaLivro(1, 404)
    })

    it('nao encontra o livro especifico para edicao', () => {
      cy.editaLivro(1, 404)
    })

    it('nao encontra o livro especifico para deletar', () => {
      cy.deletaLivro(1, 404)
      Comandos.teste123()
    })
  }
    
  it('cria livro', () => {
    cy.criaLivro(201)
  })

  it('encontra o livro especifico', () => {
    cy.retornaLivro(2, 200)
  })

  it('edita livro', () => {
    cy.editaLivro(2, 200)
  })

  it('deleta livro', () => {
    cy.deletaLivro(2, 200)
  })
})