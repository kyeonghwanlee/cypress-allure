describe('empty spec', () => {

  const i = 0 //1== github 0=local

  beforeEach(function () {
    cy.viewport(1920,1080)
    cy.visit('https://dev-liveklass.net/createaccount')

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

    cy.get('#id').type('pogap61665@otodir.com')
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
    cy.get('#id').type('pogap61665@otodir.com')
    cy.get(':nth-child(5) > .lk-input > .lk-input-inner > input').type('@dl29240730')
    cy.get(':nth-child(4) > .lk-input > .lk-input-inner > input').type('이경환')

    //cy.get('[style="margin-top: 14px;"] > .lk-checkbox > .checkmark').click()
    //cy.get('[style="margin-top: 19px;"] > .lk-checkbox > .checkmark').click()

    
    cy.get('.lk-button').click()
    cy.contains('사용중인 이메일입니다.').should('exist')
    
    /* 
    // 가입 진행 중일 떄 아래 문구 코딩 사용
    cy.contains('회원가입').should('exist')
    cy.contains('이메일').should('exist')
    cy.contains('이름').should('exist')
    cy.contains('이경환').should('exist')
    cy.contains('pogap61665@otodir.com').should('exist')
    cy.contains('약관 동의').should('exist')
    cy.contains('전체 동의').should('exist')

    cy.get('.text-left > div').click()

    cy.contains('만 14세 이상 이용, 서비스 이용약관, 개인정보 수집 및 이용 동의').should('exist')
    cy.contains('서비스 이용약관 동의').should('exist')
    cy.contains('개인정보 수집 및 이용 동의').should('exist')
    cy.contains('마케팅 정보 수신 동의').should('exist')

    cy.contains('동의하고 가입하기').should('exist')

    cy.get('.checkmark').click()

    cy.get('.lk-btn').click()
    */
  })

})