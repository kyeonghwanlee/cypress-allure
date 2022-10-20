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
    
    cy.contains('무료로 시작하기').should('exist') 
    if( i == 0 ){
      cy.contains('사이트').should('exist') 
      cy.contains('페이지').should('exist') 
      cy.contains('마이 페이지').should('exist') 
      cy.contains('승인 대기중인 클래스').should('exist') 
      cy.contains('내가 찜한 클래스').should('exist') 
      cy.contains('완료한 클래스').should('exist') 
    }else{
      cy.contains('Sites').should('exist') 
      cy.contains('Courses').should('exist') 
      cy.contains('마이 페이지').should('exist') 
      cy.contains('Enrolled classes').should('exist') 
      cy.contains('Liked Classes').should('exist') 
      cy.contains('Completed classes').should('exist') 
    }

    // user stting button check
    cy.get('.ki-user').click()
    cy.wait(1000)

    if( i == 0 ){
      cy.contains('마이페이지로 이동').should('exist') 
      cy.contains('내 정보 수정').should('exist') 
      cy.contains('신청 내역').should('exist') 
      cy.contains('로그아웃').should('exist') 
    }else{
      cy.contains('My Page').should('exist') 
      cy.contains('Edit My Information').should('exist') 
      cy.contains('Class application history').should('exist') 
      cy.contains('Log out').should('exist')  
    }

    cy.get(':nth-child(3) > [href="/editinformation"]').click()
    cy.wait(1000)
    cy.url().should('include','/editinformation')    
    cy.url().then((valse) => {
      cy.log('The current real URL id: ', valse)
    })
  })

  it('3-1. editinformation page check', () => {
    cy.visit('https://sso.liveklass.com/editinformation')
    cy.wait(500)
    //phone chage
    
    if( i == 0 ){
      cy.contains('내 정보 수정').should('exist')
      cy.contains('신청 내역').should('exist')
      cy.contains('업로드').should('exist')
      cy.contains('메일 인증 하기').should('exist')
      cy.contains('프로필 사진').should('exist')
      cy.contains('이름').should('exist')
      cy.contains('이메일').should('exist')
      cy.contains('휴대폰 번호').should('exist')
      cy.contains('기존 비밀번호').should('exist')
      cy.contains('새로운 비밀번호').should('exist')
      cy.contains('자기소개').should('exist')
      cy.contains('마케팅 정보 수신 동의').should('exist')
      cy.contains('내 정보 저장하기').should('exist')
    }else{
      cy.contains('Edit My Information').should('exist')
      cy.contains('Class application history').should('exist')
      cy.contains('Upload').should('exist')
      cy.contains('메일 인증 하기').should('exist')
      cy.contains('Profile Photo').should('exist')
      cy.contains('Name').should('exist')
      cy.contains('Email').should('exist')
      cy.contains('Mobile Number').should('exist')
      cy.contains('Current Password').should('exist')
      cy.contains('New password').should('exist')
      cy.contains('About Me').should('exist')
      cy.contains('Consent to receive marketing information').should('exist')
      cy.contains('Save').should('exist')
    }

    cy.get(':nth-child(6) > .content_td > .form_control').clear()
    cy.get(':nth-child(6) > .content_td > .form_control').type('01012345678')
    cy.get('.button_container > .btn_common').click()
    cy.get('.popup_b > .btn_common').click() 
    cy.wait(500)
    //password chage
    cy.get(':nth-child(1) > .content_td > .form_control').type('12')
    cy.get('.button_container > .btn_common').click()
    cy.wait(300)

    cy.get(':nth-child(1) > .content_td > .form_control').clear()
    if( i == 0 ){
      cy.contains('영문, 숫자, 특수문자 조합 8자 이상 (필수)').should('exist')
    }else{
      //cy.contains('least 8 characters and include a number, a letter, and a special character.').should('exist')
    }
    cy.get(':nth-child(1) > .content_td > .form_control').type('@dl292407')
    cy.get(':nth-child(2) > .content_td > .form_control').type('@dsfjl')
    cy.wait(300)
    
    if( i == 0 ){
      cy.contains('비밀번호는 8자리 이상 입력해 주세요.').should('exist')
    }else{
      cy.contains('Please enter at least 8 digits for your password').should('exist')
    }

    cy.get(':nth-child(2) > .content_td > .form_control').clear()
    if( i == 0 ){
      cy.contains('Please enter a new password..').should('exist')
      cy.contains('Please enter your password for confirmation.').should('exist')
    }else{
      cy.contains('Please enter at least 8 digits for your password').should('exist')
    }

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

    cy.contains('이메일 인증하기').should('exist')  
    cy.contains('이메일').should('exist')  
    cy.contains('인증번호').should('exist')  
    cy.contains('가입된 계정의 이메일이 미인증 상태입니다. 본인 소유의').should('exist')  
    cy.contains('이메일인지 확인이 되어야 모든 기능을 사용할 수 있습니다.').should('exist')  

    cy.get('.mng-input-button').click()

    cy.contains('이메일로 인증번호를 보냈습니다.').should('exist')  

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