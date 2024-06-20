describe('teste de apis', () => {
  it('retorna todos os livros', () => {
    cy.retornaLivros()
  })

  it('nao encontra o livro especifico', () => {
    cy.retornaLivro(1, 404)
  })
    
  it('cria livro', () => {
    cy.criaLivro(201)
  })

  it('encontra o livro especifico', () => {
    cy.retornaLivro(2, 200)
  })

  it('nao encontra o livro especifico para edicao', () => {
    cy.editaLivro(1, 404)
  })

  it('edita livro', () => {
    cy.editaLivro(2, 200)
  })

  it('deleta livro', () => {
    cy.deletaLivro(2, 200)
  })

  it('nao encontra o livro especifico para deletar', () => {
    cy.deletaLivro(1, 404)
  })
})