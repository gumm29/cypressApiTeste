class Comandos{

    constructor(){
        this.livros = []
        // teste = false
    }

    async preparaMassa(){ 
        let teste = []
        cy.request('/livros').then(resp => {
            expect(resp.status).to.eq(200)
            if(JSON.parse(resp.body).length == 0){
                cy.log('entrou')
                cy.criaLivro(201)
            }else{
                teste.push(JSON.parse(resp.body)[0])
                cy.log(teste.length)
                cy.log(teste[0].id)
            }
        })
        cy.log(teste.length)
        cy.log(teste)
        // cy.log(typeof teste)
        // return teste
    }

    teste123(){
        cy.log('testsssss')
    }

    its(){
        it('testettettetete', () => {
            cy.log('878787870')
        })
    }
}

export default Comandos