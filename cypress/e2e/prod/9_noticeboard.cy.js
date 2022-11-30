describe('empty spec', () => {

    const i = 1 //1== github 0=local

    beforeEach(function () {
        cy.viewport(1920,1080)
        cy.visit('https://testlee001.liveklass.com/')
        //cy.visit('https://testlee004.dev-liveklass.net/')
        cy.wait(100)

        cy.get('.header-action > .outlined > span').click()
        cy.wait(500)
    })

    it('9-1. 게시판 클래스 접근', () => {
        // id & pw text input
        cy.get('[type="text"]').clear()
        cy.get('[type="password"]').clear()
        cy.get('.form_group > .lk-input > .lk-input-inner > input').type('ruoghks@kakao.com')
        cy.get('[style="margin-bottom: 1.25rem;"] > .lk-input > .lk-input-inner > input').type('@dl29240730')
        cy.wait(500)
        cy.get('.lk-button').click()
        cy.wait(500)
        
        //프로그램 이동
        cy.get(':nth-child(2) > .header-menu-item-btn').click()
        cy.wait(100)

        //클래스 입장
        cy.contains('Notice Board Class').click()
        cy.wait(100)

        //        
        cy.get('.main-content > .row > .lk-tabs > .item:nth-child(2) > span').click()
    
        cy.get('.row > .max-w-\[900px\] > .flex > .px-16px > span').click()
    
        cy.get('div > div > .lkd-input-wrap > .lkd-input-content > .lkd-input').click()
    
        cy.get('div > div > .lkd-input-wrap > .lkd-input-content > .lkd-input').type('안녕하세요.')
    
        cy.get('div > .mt-16px > .fr-box > .fr-wrapper > .fr-element').click()
    
        cy.get('.border-b-\[2px\] > .flex > .flex > .flex > .py-\[7px\]:nth-child(1)').click()
    
        cy.get('div > .border-b-\[2px\] > .flex > .flex > .px-16px').click()
    
        cy.get('.text-\[\#101828\] > .border-b-\[2px\] > .flex > .px-16px > span').click()
    
        cy.get('tr > td > .el-dropdown > .el-dropdown-selfdefine > .ki-more-vertical').click()
    
        cy.get('body > #dropdown-menu-7021 > .el-dropdown-menu__item:nth-child(3)').click()
    
        //cy.get('.lk-table > tbody > .bg-\[\#F5FAFF\] > td > .hover\3Aunderline').click()
    
        cy.get('.border-\[1px\] > .editorWrapper > .fr-box > .fr-wrapper > .fr-element').click()
    
        cy.get('.max-w-\[1040px\] > .text-\[\#101828\] > .my-\[20px\] > .border-\[1px\] > .flex:nth-child(4)').click()
    
        cy.get('.border-\[1px\] > .flex > div > .px-12px > span').click()
    
        cy.get('.text-\[\#101828\] > .border-b-\[2px\] > .flex > .px-16px > span').click()
 
    })



})
