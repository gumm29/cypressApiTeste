import Comandos from '../support/Comandos.js'

let comandos = new Comandos()

describe('teste de apis', () => {
  let repete = 10
  let rand
  // let livros = []

  it.only('prepara massa', () => {
    const livros = comandos.preparaMassa()
    // cy.log(livros)
    // cy.log(livros.length)
    // cy.log(livros[0])
    // for (let i = 0; i < livros.length; i++) {
    //   cy.log(`Item ID: ${livros[i].id}`)
    // }
    //  livros.each(it => cy.log(livros[it]))
     
    // console.log(await comandos.preparaMassa())
    // livros.map(t => console.log(t))
  })

  // for(let i = 0; i < repete; i++){  // roda varios
  //   console.log(repete)
  //   comandos.its()
  // }

  // it('retorna todos os livros', () => {
  //   cy.retornaLivros()
  // })

  // if(comandos.teste == true){ // nao roda haha =)
  //   let ultimoId = livros.length
  //   ultimoId = livros[ultimoId]
  //   idN404 = ultimoId +1
  //   it('nao encontra o livro especifico', () => {
  //     cy.retornaLivro(idN404, 404)
  //   })

    it('nao encontra o livro especifico para edicao', () => {
      cy.editaLivro(10, 404)
    })

  //   it('nao encontra o livro especifico para deletar', () => {
  //     cy.deletaLivro(idN404, 404)
  //     Comandos.teste123()
  //   })
  // }
    
  // it('cria livro', () => {
  //   cy.criaLivro(201)
  // })

  // it('encontra o livro especifico', () => {
  //   rand = comandos.livros.length
  //   cy.log(rand)
  //   // cy.retornaLivro(Comandos.livros[rand].id, 200)
  // })

  // it('edita livro', () => {
  //   cy.editaLivro(rand, 200)
  // })

  // it('deleta livro', () => {
  //   cy.deletaLivro(rand, 200)
  // })
})