describe('empty spec', () => {

  const i = 1 //1== github 0=local

  beforeEach(function () {
    cy.viewport(1920,1080)
    cy.visit('https://sso.liveklass.com/createaccount')

    cy.get('.email').click()
  })


  it('2-1. createaccount failse (error email)', () => {
    // email text input false
    cy.get('.error-message').should('not.exist')

    cy.get('#id').type('admin')
    cy.get('.lk-button').click()

    cy.get('.error-message').should('exist') 

    if( i == 0 ){
      cy.contains('이메일 형식으로 입력해주세요.').should('exist')
    }else{
      cy.contains('Please enter a valid email address.').should('exist')
    }
    
  })

  it('2-2. createaccount failse(no password)', () => {
    // email text input false
    cy.get('.error-message').should('not.exist')
    cy.contains('약관에 동의하셔야 합니다.').should('not.exist')

    cy.get('#id').type('ruoghks@gmail.com')
    cy.get(':nth-child(5) > .lk-input > .lk-input-inner > input').type('admin')
    cy.get(':nth-child(4) > .lk-input > .lk-input-inner > input').type('admin')
    cy.get('.lk-button').click()

    cy.get('.error-message').should('exist')

    if( i == 0 ){
      cy.contains('영문, 숫자, 특수문자 조합 8자 이상으로 사용해주세요. 사용가능한').should('exist')
      cy.contains('특수문자는 ~ ! @ # $ % ^ & * 입니다.').should('exist')
      //cy.contains('약관에 동의하셔야 합니다.').should('exist')
    }else{
      cy.contains('Password must be at least 8 characters and include a number,').should('exist')
      cy.contains('a letter, and a special character.').should('exist')
      //cy.contains('You must agree to the terms and conditions.').should('exist')
    }
    
  })

  it('2-3. createaccount failse(no email & password)', () => {
    // email text input false
    cy.get('.error-message').should('not.exist')
    cy.get('.lk-button').click()
    cy.get('.error-message').should('exist')
    if( i == 0 ){
      cy.contains('필수 정보입니다.').should('exist')
      //cy.contains('약관에 동의하셔야 합니다.').should('exist')
    }else{
      cy.contains('Required').should('exist')
      //cy.contains('You must agree to the terms and conditions.').should('exist')
    }
  })

  it('2-4. createaccount failse(no checkbox)', () => {
    // email text input false
    cy.get('.error-message').should('not.exist')

    cy.get('#id').type('ruoghks@gmail.com')
    cy.get(':nth-child(5) > .lk-input > .lk-input-inner > input').type('@dl29240730')
    cy.get(':nth-child(4) > .lk-input > .lk-input-inner > input').type('이경환')

    //cy.get('[for="check_01"]').click()
    //cy.get('.lk-button').click()
    //cy.get('.error-message').should('exist') 
    //if( i == 0 ){
    //  cy.contains('약관에 동의하셔야 합니다.').should('exist')
    //}else{
    //  cy.contains('You must agree to the terms and conditions.').should('exist')
    //}
  })

  it('2-5. createaccount failse(no checkbox)', () => {
    cy.get('#id').type('cekajif719@yubua.com')
    cy.get(':nth-child(5) > .lk-input > .lk-input-inner > input').type('@dl29240730')
    cy.get(':nth-child(4) > .lk-input > .lk-input-inner > input').type('이경환')

    //cy.get('[style="margin-top: 14px;"] > .lk-checkbox > .checkmark').click()
    //cy.get('[style="margin-top: 19px;"] > .lk-checkbox > .checkmark').click()

    cy.get('.lk-button').click()
    cy.contains('This ID has').should('exist')
    cy.get('.lk-mng-button').click()
  })

})