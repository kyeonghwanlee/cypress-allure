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

    it('8-3. 줌 권한 있는 강사 초대', () => {
        // id & pw text input
        cy.get('[type="text"]').clear()
        cy.get('[type="password"]').clear()
        cy.get('.form_group > .lk-input > .lk-input-inner > input').type('kyeonghwan.lee@liveklass.com')
        cy.get('[style="margin-bottom: 1.25rem;"] > .lk-input > .lk-input-inner > input').type('@Dl292407')
        cy.wait(500)
        cy.get('.lk-button').click()
        cy.wait(500)
        
        //프로그램 이동
        cy.get(':nth-child(2) > .header-menu-item-btn').click()
        cy.wait(500)
    
        //클래스 이동
        cy.contains('원클릭 5분 후, 정각, 5분 전 , 15분 전, 30분 전 강의 만들기').click({force: true})
        cy.wait(500)
     
        cy.get('.mt30 > .close-button').click({force: true})
        cy.wait(500)

        //클래스 관리 이동
        cy.get('#view-step2 > .cv-edit-btn > .btn-label > span').click()
        cy.wait(500)

        //강사 추가 
        cy.get(':nth-child(2) > :nth-child(1) > .manage-facilitator-item').click()
        cy.wait(500) 

        cy.get('.lk-input-inner > input').type('cekajif719@yubua.com')
        cy.wait(500)

        cy.get('.btn-next').click()
        cy.wait(500)

        cy.get('.btn-add-user > .btn-label > span').click()
        cy.wait(500)
            
    })

    it('8-4. 줌 권한 없는 강사 초대', () => {
        // id & pw text input
        cy.get('[type="text"]').clear()
        cy.get('[type="password"]').clear()
        cy.get('.form_group > .lk-input > .lk-input-inner > input').type('kyeonghwan.lee@liveklass.com')
        cy.get('[style="margin-bottom: 1.25rem;"] > .lk-input > .lk-input-inner > input').type('@Dl292407')
        cy.wait(500)

        cy.get('.lk-button').click()
        cy.wait(500)
        
        //프로그램 이동
        cy.get(':nth-child(2) > .header-menu-item-btn').click()
        cy.wait(500)
    
        //클래스 이동
        cy.contains('원클릭 5분 후, 정각, 5분 전 , 15분 전, 30분 전 강의 만들기').click({force: true})
        cy.wait(500)
    
        cy.get('.mt30 > .close-button').click({force: true})
        cy.wait(500)

        //클래스 관리 이동
        cy.get('#view-step2 > .cv-edit-btn > .btn-label > span').click()
        cy.wait(500)

        //강사 추가 
        cy.get(':nth-child(3) > :nth-child(1) > .manage-facilitator-item').click()
        cy.wait(500)

        cy.get('.lk-input-inner > input').type('futurejwkim@gmail.com')
        cy.wait(500)

        cy.get('.btn-next').click()
        cy.wait(500)

        cy.get(':nth-child(3) > .lk-checkbox').click()
        cy.wait(500)

        cy.get('.btn-add-user').click()
        cy.wait(500)
           
   })

   it('8-5. 강사 알림톡 전송', () => {
    // id & pw text input
    cy.get('[type="text"]').clear()
    cy.get('[type="password"]').clear()
    cy.get('.form_group > .lk-input > .lk-input-inner > input').type('kyeonghwan.lee@liveklass.com')
    cy.get('[style="margin-bottom: 1.25rem;"] > .lk-input > .lk-input-inner > input').type('@Dl292407')
    cy.wait(500)

    cy.get('.lk-button').click()
    cy.wait(500)
    
    //프로그램 이동
    cy.get(':nth-child(2) > .header-menu-item-btn').click()
    cy.wait(500)

    //클래스 이동
    cy.contains('원클릭 5분 후, 정각, 5분 전 , 15분 전, 30분 전 강의 만들기').click({force: true})
    cy.wait(500)

    cy.get('.mt30 > .close-button').click({force: true})
    cy.wait(500)

    //클래스 관리 이동
    cy.get('#view-step2 > .cv-edit-btn > .btn-label > span').click()
    cy.wait(500)

    })
})