describe('empty spec', () => {

    beforeEach(function () {
        cy.viewport(1920,1080)
        cy.visit('https://www.liveklass.com/')
        cy.wait(500)
    })
  
    it('0. 사이트 개설', () => {
        // 무료로 시작하기 클릭
        cy.get('.navbar5_menu-right > .button').invoke('removeAttr', 'target').click()
        cy.wait(3000)

        //로그인
        cy.get('.small-text.underline').click()

        //id & pw text input
        cy.get('[type="text"]').clear()
        cy.get('[type="password"]').clear()
        cy.get('.form_group > .lk-input > .lk-input-inner > input').type('kyeonghwan.lee@liveklass.com')
        cy.get('[style="margin-bottom: 1.25rem;"] > .lk-input > .lk-input-inner > input').type('@Dl292407')

        cy.get('.lk-button').click()

        //새로운 사이트 만들기
        cy.contains('새로운 사이트 만들기').click()

        //사이트 개설하기
        cy.get('.lk-input-inner > input').type('경환이 테스트2')
        cy.get('.container-input').type('testlee002')

        cy.get('.btn-label > span').click()
    })

})