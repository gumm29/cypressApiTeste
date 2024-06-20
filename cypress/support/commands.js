Cypress.Commands.add('retornaLivros', (qtdPost) => {
    cy.request('/livros').then((resp) => {
        expect(resp.status).to.eq(200)
    })
})

Cypress.Commands.add('retornaLivro', (id, statusCode) => {
    cy.request({ method: 'GET', url: `/livro/${id}`, failOnStatusCode: false }).then((resp) => {
        expect(resp.status).to.eq(statusCode)
        if (statusCode == 200){
            expect(resp.body['id']).not.to.be.null
            expect(resp.body['titulo']).not.to.be.null
            expect(resp.body['texto']).not.to.be.null
        }
    })
})


Cypress.Commands.add('criaLivro', (status) => {
    cy.fixture('corpo').then(corpo => {
        cy.request({ method: 'POST', url: `/livro`, failOnStatusCode: false , body: corpo}).then((resp) => {
            expect(resp.status).to.eq(status)
        })
    })
})

Cypress.Commands.add('editaLivro', (id, statusCode) => {
    cy.fixture('edita').then(edita => {
        cy.request({ method: 'PUT', url: `/livro/${id}`, failOnStatusCode: false, body: edita}).then((resp) => {
            expect(resp.status).to.eq(statusCode)
            if (statusCode == 200){
                expect(resp.body['id']).not.to.be.null
                expect(resp.body['titulo']).not.to.be.null
                expect(resp.body['texto']).not.to.be.null
            }
        })
    })
})

Cypress.Commands.add('deletaLivro', (id, statusCode) => {
    cy.request({ method: 'DELETE', url: `/livro/${id}`, failOnStatusCode: false }).then((resp) => {
        expect(resp.status).to.eq(statusCode)
    })
})
