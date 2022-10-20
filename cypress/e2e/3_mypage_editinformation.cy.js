describe('empty spec', () => {

  const i = 1 //1== github 0=local
  
  beforeEach(function () {
    cy.viewport(1920,1080)
    cy.visit('https://sso.liveklass.com/login')

     // id & pw text input
     cy.get('.form_group > .lk-input > .lk-input-inner > input').type('pogap61665@otodir.com')
     cy.get('[style="margin-bottom: 1.25rem;"] > .lk-input > .lk-input-inner > input').type('@dl29240730')
 
     // login button click
     cy.get('.lk-button').click()
     cy.wait(1000)
  })


  it('3. mypage page check', () => {
    //button check
    cy.get(':nth-child(1) > .header-menu-item-btn').contains('운영 가이드').should('exist') 
    cy.get(':nth-child(2) > .header-menu-item-btn').contains('수강생 가이드').should('exist') 
    cy.get(':nth-child(3) > .header-menu-item-btn').contains('라클아카데미').should('exist') 
    
    // user stting button check
    cy.get('.ki-user').click()
    cy.wait(1000)

    cy.get(':nth-child(3) > [href="/editinformation"]').click()
    cy.wait(1000)
    cy.url().should('include','/editinformation')    
    cy.url().then((valse) => {
      cy.log('The current real URL id: ', valse)
    })
  })

  it('3-1. editinformation page check', () => {
    cy.visit('https://sso.liveklass.com/editinformation')
    //phone chage
    cy.get(':nth-child(6) > .content_td > .form_control').clear()
    cy.get(':nth-child(6) > .content_td > .form_control').type('01012345678')
    cy.get('.button_container > .btn_common').click()
    cy.get('.popup_b > .btn_common').click() 

    //password chage
    cy.get(':nth-child(1) > .content_td > .form_control').type('12')
    cy.get('.button_container > .btn_common').click()
    cy.wait(300)

    cy.get(':nth-child(1) > .content_td > .form_control').clear()
    cy.get(':nth-child(1) > .content_td > .form_control').type('@dl292407')
    cy.get(':nth-child(2) > .content_td > .form_control').type('@dsfjl')
    cy.wait(300)

    cy.get(':nth-child(2) > .content_td > .form_control').clear()
    cy.get(':nth-child(2) > .content_td > .form_control').type('@dl29240730') 
    cy.get(':nth-child(7) > :nth-child(3) > .content_td > .form_control').type('@dsfjl')
    cy.wait(300)

    cy.get(':nth-child(7) > :nth-child(3) > .content_td > .form_control').clear()
    cy.get(':nth-child(7) > :nth-child(3) > .content_td > .form_control').type('@dl29240730')

    cy.get('.button_container > .btn_common').click() 
    cy.get('.popup_b > .btn_common').click()
    cy.wait(300)

    cy.get(':nth-child(1) > .content_td > .form_control').clear()
    cy.get(':nth-child(1) > .content_td > .form_control').type('@dl29240730')
    cy.get(':nth-child(2) > .content_td > .form_control').click()
    cy.wait(300)

    cy.get('.button_container > .btn_common').click() 
    cy.get('.popup_b > .btn_common').click()

    //paymenthistory
    cy.get('.settings_side_content > [href="/paymenthistory"]').click()
    cy.wait(1000)
    cy.url().should('include','/paymenthistory')    
    cy.url().then((valse) => {
      cy.log('The current real URL id: ', valse)
    }) 

    // user stting cilck
    cy.get('.ki-user').click()

    // logout
    cy.get(':nth-child(4) > .lhp-menu-item').click()    
  })

  it('3-2. editinformation email check', () => {
    cy.visit('https://sso.liveklass.com/editinformation')
    cy.wait(200)

    cy.get('.content_td > div > .btn_common').click()

    cy.get('.mng-input-button').should('exist')  
    cy.contains('계정 인증 완료').should('exist')  

    cy.get('.mng-input-button').click()

    cy.get(':nth-child(3) > .lk-mng-input > input').type('324789')
    cy.contains('인증 코드가 잘못 되었습니다.').should('not.exist') 
    cy.get('.lk-mng-modal-footer > .lk-mng-button').click()
    cy.contains('인증 코드가 잘못 되었습니다.').should('exist') 
    cy.wait(200)

    cy.get('[class="btn_common btn_point btn_popup_small focusable"]').click()
    cy.wait(200)
    cy.get('.lk-mng-modal-header > .lk-mng-icon > img').click()

  })
})