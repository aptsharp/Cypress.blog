describe('TesteDeInterface', () => {
    it('Sucesso', () => {
        cy.visit('http://localhost:4200/');
        cy.get('.page-item:nth-child(2) > .page-link').click();
        cy.get('.page-item:nth-child(3) > .page-link').click();
        cy.get('.page-item:nth-child(4) > .page-link').click();
        cy.get('.page-item:nth-child(5) > .page-link').click();
        cy.get('.page-item:nth-child(6) > .page-link').click();
        cy.get('.page-item:nth-child(7) > .page-link').click();
        cy.get('.page-item:nth-child(8) > .page-link').click();
        cy.get('.page-item:nth-child(9) > .page-link').click();
        cy.get('.page-item:nth-child(10) > .page-link').click();
        cy.get('.tag-default:nth-child(11)').click();
        cy.get('.tag-default:nth-child(12)').click();
        cy.get('.tag-default:nth-child(13)').click();
        cy.get('.tag-default:nth-child(14)').click();
        cy.get('.tag-default:nth-child(15)').click();
        cy.get('.tag-default:nth-child(16)').click();
        cy.get('.tag-default:nth-child(15)').click();
        cy.get('.page-item:nth-child(35) > .page-link').click();
        cy.get('.tag-default:nth-child(20)').click();
        cy.get('.page-item:nth-child(41) > .page-link').click();
        cy.get('.tag-list:nth-child(2) > .tag-default:nth-child(18)').click();
        cy.get('.page-item:nth-child(50) > .page-link').click();
        cy.get('app-article-preview:nth-child(1) .tag-default:nth-child(10)').click();
        cy.get('.navbar-brand').click();

    })
})