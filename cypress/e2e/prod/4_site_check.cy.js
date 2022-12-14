describe('empty spec', () => {

  const i = 1 //1== github 0=local

  beforeEach(function () {
    cy.viewport(1920,1080)
    cy.visit('https://sso.liveklass.com/login')

    // id & pw text input
    cy.get('[type="text"]').clear()
    cy.get('[type="password"]').clear()
    cy.get('.form_group > .lk-input > .lk-input-inner > input').type('kyeonghwan.lee@liveklass.com')
    cy.get('[style="margin-bottom: 1.25rem;"] > .lk-input > .lk-input-inner > input').type('@Dl292407')

    // login button click
    cy.get('.lk-button').click()
    cy.wait(300)
    cy.visit('https://testlee001.liveklass.com/')
    cy.wait(300)

    //cy.get('.lk-select', 2).select('한국어');
    //cy.autoheal();
    //cy.get('.lk-select').select('영어');
    //cy.wait(10000)
  })

  it('4-1. site check', () => {
    if( i == 0 ){
      cy.get(':nth-child(1) > .header-menu-item-btn').contains('소개').should('exist') 
      cy.get(':nth-child(2) > .header-menu-item-btn').contains('프로그램').should('exist') 
      cy.get(':nth-child(3) > .header-menu-item-btn').contains('공지사항').should('exist') 
      //cy.get(':nth-child(4) > .header-menu-item-btn').contains('나의 강의실').should('exist')
    }else{
      cy.get(':nth-child(1) > .header-menu-item-btn').contains('소개').should('exist') 
      cy.get(':nth-child(2) > .header-menu-item-btn').contains('프로그램').should('exist') 
      cy.get(':nth-child(3) > .header-menu-item-btn').contains('공지사항').should('exist') 
      //cy.get(':nth-child(4) > .header-menu-item-btn').contains('나의 강의실').should('exist')
    }
    cy.get(':nth-child(1) > .header-menu-item-btn').click()
    cy.wait(300)
    cy.get(':nth-child(2) > .header-menu-item-btn').click()
    cy.wait(300)
    
    if( i == 0 ){
      cy.get('[href="/classes/create"] > span').contains('클래스 생성').should('exist')
      cy.get('.search-package-btn > span').contains('패키지 생성').should('exist')
      cy.get('.block-text-title').contains('프로그램').should('exist')
      cy.contains('전체').should('exist')
      cy.contains('비공개').should('exist')
    }else{
      cy.get('[href="/classes/create"] > span').contains('Class Create').should('exist')
      cy.get('.search-package-btn > span').contains('패키지 생성').should('exist')
      cy.get('.block-text-title').contains('Program').should('exist')
      cy.contains('All').should('exist')
      cy.contains('Private').should('exist')
    }

    cy.get(':nth-child(3) > .header-menu-item-btn').click()
    cy.wait(300)
    
    if( i == 0 ){
      cy.get('.lk-section-inner > .lk-btn > span').contains('글쓰기').should('exist')
      cy.get('.block-text-title').contains('공지사항').should('exist')
    }else{
      //cy.contains('write').should('exist')
      //cy.get('.block-text-title').contains('Notice').should('exist')
    }
    cy.get('.lk-section-inner > .lk-btn').click()
    cy.wait(300)

    if( i == 0 ){
      cy.contains('일반').should('exist')
      cy.contains('중요').should('exist')
      cy.contains('등록').should('exist')
      cy.contains('목록으로 돌아가기').should('exist')
      cy.contains('공개 여부').should('exist')
      cy.contains('취소').should('exist')
    }else{
      cy.contains('일반').should('exist')
      cy.contains('중요').should('exist')
      cy.contains('Write').should('exist')
      cy.contains('Back to list').should('exist')
      cy.contains('공개 여부').should('exist')
      cy.contains('Cancel').should('exist')
    }

    cy.get('#text01').type('제목')
    cy.get('.fr-element').type('TEST')
    cy.wait(300)

    cy.get('.pbw-footer-wrap > button.lk-btn').click()
    cy.wait(300)

    cy.get(':nth-child(4) > .header-menu-item-btn').click()
  })
  
  it('4-2. site service (구독관리)', () => {
    cy.get('.ki-user').click()
    cy.wait(500)

    if( i == 0 ){
      cy.contains('마이페이지로 이동').should('exist')
      cy.contains('내 정보 수정').should('exist')
      cy.contains('서비스 구독').should('exist')
      cy.contains('신청 내역').should('exist')
      cy.contains('매출 관리').should('exist')
      cy.contains('정산 관리').should('exist')
      cy.contains('로그아웃').should('exist')
    }else{
      cy.contains('My Page').should('exist')
      cy.contains('Edit My Information').should('exist')
      cy.contains('서비스 구독').should('exist')
      cy.contains('Class application history').should('exist')
      cy.contains('Sales details').should('exist')
      cy.contains('정산 관리').should('exist')
      cy.contains('Log out').should('exist')
    }
    //서비스 구독 - 구독관리
    cy.get('[href="/service/servicemanage"]').click()
    cy.wait(500)
    
    cy.get('.sub-btn').click()
    cy.wait(500)

    if( i == 0 ){
      cy.contains('무료').should('exist') 
      cy.contains('마이크로').should('exist') 
      cy.contains('스몰').should('exist') 
      cy.contains('미디엄').should('exist') 
      cy.contains('라지').should('exist') 
      cy.get('.sub-btn').contains('구독 플랜 변경하기').should('exist') 
      cy.get('.mysub-btn-wrap > .cnl-btn').contains('취소').should('exist') 
      cy.wait(300)
    }else{
      cy.contains('무료').should('exist') 
      cy.contains('마이크로').should('exist') 
      cy.contains('스몰').should('exist') 
      cy.contains('미디엄').should('exist') 
      cy.contains('라지').should('exist') 
      cy.get('.sub-btn').contains('구독 플랜 변경하기').should('exist') 
      cy.get('.mysub-btn-wrap > .cnl-btn').contains('취소').should('exist') 
      cy.wait(300)
    }
    
    cy.get('.el-switch__core').click()
    cy.get('[style="width: 40px; border-color: rgb(255, 96, 0); background-color: rgb(255, 96, 0);"]').should('exist')
    cy.get('.el-switch__core').click()
    cy.get('[style="width: 40px; border-color: rgb(255, 96, 0); background-color: rgb(255, 96, 0);"]').should('not.exist')
    
    cy.get('.sub-list > :nth-child(5)').click()
    cy.wait(100)

    if( i == 0 ){
      cy.contains('구독 취소(A)').should('exist') 
      cy.contains('환불').should('exist') 
      cy.contains('새로운 구독(B)').should('exist') 
      cy.contains('정상가').should('exist') 
      cy.contains('구독료').should('exist') 
      cy.contains('합계').should('exist') 
      cy.contains('결제금액').should('exist') 
      //cy.contains('현재 사용중인 플랜보다 더 많은 수강 신청을 받을 수 있어요.').should('exist')
      //cy.contains('300GB 만큼 더 사용할 수 있고, 결제 수수료는 5% 로 이용할 수 있어요.').should('exist')
    }else{
      cy.contains('구독 취소(A)').should('exist') 
      cy.contains('환불').should('exist') 
      cy.contains('새로운 구독(B)').should('exist') 
      cy.contains('정상가').should('exist') 
      cy.contains('구독료').should('exist') 
      cy.contains('합계').should('exist') 
      cy.contains('결제금액').should('exist') 
      //cy.contains('현재 사용중인 플랜보다 더 많은 수강 신청을 받을 수 있어요.').should('exist')
      //cy.contains('300GB 만큼 더 사용할 수 있고, 결제 수수료는 5% 로 이용할 수 있어요.').should('exist')
    }
    
    cy.get('.sub-btn').click()
    cy.wait(100)
    
    cy.get('.lk-close-button').click()
    //cy.get('.primary > .btn-label > span').click()
    
    /*
    cy.get('.popup_t > span').contains('새로운 카드 정보 등록').should('exist') 
    cy.get(':nth-child(1) > .form_label').contains('카드 번호').should('exist') 
    cy.get(':nth-child(2) > .form_label').contains('유효기간').should('exist') 
    cy.get(':nth-child(3) > .form_label').contains('비밀번호 앞 2자리').should('exist') 
    cy.get(':nth-child(4) > .form_label').contains('생년월일 6자리').should('exist') 
    cy.get(':nth-child(5) > .form_label').contains('결제용 이메일').should('exist') 
    cy.get('.btn_gray').contains('취소').should('exist') 
    cy.get('.btn_point').contains('저장').should('exist') 

    cy.get(':nth-child(1) > .form_content > .form_control').type('111111111')
    cy.get(':nth-child(1) > .form_content > .error').contains('올바른 카드번호를 입력해 주세요.').should('exist') 
    cy.wait(100)
    cy.get(':nth-child(1) > .form_content > .form_control').get('[name="cardNumber"]').clear()
    cy.get(':nth-child(1) > .form_content > .form_control').get('[name="cardNumber"]').type('1111111111111111')
    cy.get(':nth-child(1) > .form_content > .error').contains('올바른 카드번호를 입력해 주세요.').should('not.exist') 
    cy.wait(100)

    cy.get('[name="expiry1"]').type('1')
    cy.get(':nth-child(2) > .form_content > .error').contains('유효기간을 입력해 주세요').should('exist') 
    cy.wait(100)
    cy.get('[name="expiry1"]').type('1')
    cy.get('[name="expiry2"]').type('20')
    cy.wait(100)
    cy.get(':nth-child(2) > .form_content > .error').contains('유효기간을 입력해 주세요').should('exist') 
    cy.get('[name="expiry2"]').type('26')
    cy.wait(100)

    cy.get('.password_content > .form_control').type('1')
    cy.get(':nth-child(3) > .form_content > .error').contains('올바른 비밀번호를 입력해 주세요.').should('exist') 
    cy.wait(100)
    cy.get('.password_content > .form_control').type('1')
    cy.get(':nth-child(3) > .form_content > .error').contains('올바른 비밀번호를 입력해 주세요.').should('not.exist') 

    cy.get(':nth-child(4) > .form_content > .form_control').type('1')
    cy.get(':nth-child(4) > .form_content > .form_control').clear()
    cy.wait(100)
    cy.get(':nth-child(4) > .form_content > .error').contains('유효한 값을 입력해 주세요.').should('exist') 
    cy.get(':nth-child(4) > .form_content > .form_control').type('19841228')
    cy.get(':nth-child(4) > .form_content > .error').contains('유효한 값을 입력해 주세요.').should('not.exist') 
    cy.wait(100)

    cy.get(':nth-child(5) > .form_content > .form_control').type('1')
    cy.wait(100)
    cy.get(':nth-child(5) > .form_content > .error').contains('올바른 이메일 주소를 입력해 주세요.').should('exist') 
    cy.get(':nth-child(5) > .form_content > .form_control').clear()
    cy.get(':nth-child(5) > .form_content > .form_control').type('ruoghks@gmail.com')
    cy.get(':nth-child(5) > .form_content > .error').contains('올바른 이메일 주소를 입력해 주세요.').should('not.exist') 
    cy.wait(100)

    cy.get('[class="btn_common btn_point btn_medium"]').click()
    cy.wait(100)
    cy.contains('카드정보 인증 및 빌키 발급에 실패하였습니다. [F112]유효하지않은 카드번호를 입력하셨습니다. (card_bin 없음)').should('exist') 
    cy.get('[class="btn_common btn_point btn_popup_small focusable"]').click()
    
    cy.get('[class="btn_common btn_gray btn_medium"]').click()
    */
  })
  it('4-3. site service (구독 나머지)', () => {
    cy.get('.ki-user').click()
    cy.wait(500)

    //서비스 구독 - 구독관리
    cy.get('[href="/service/servicemanage"]').click()
    cy.wait(500)

    //서비스 구독 - 구독내역
    cy.get('[href="/service/servicehistory"]').click()

    //서비스 구독 - 결제정보
    cy.get('[href="/service/servicepaymentinfo"]').click()

    if( i == 0 ){
      // ==========================================
      //cy.get('.button_container > .btn_common').contains('결제 카드 추가').should('exist') 
      cy.get('.button_container > .btn_common').contains('결제 카드 변경').should('exist')
      cy.get('.content_td > .btn_common').contains('수정').should('exist') 
    }else{
      //cy.get('.button_container > .btn_common').contains('결제 카드 추가').should('exist') 
      cy.get('.button_container > .btn_common').contains('결제 카드 변경').should('exist')
      cy.get('.content_td > .btn_common').contains('수정').should('exist') 
    }
    // 결제 카드 변경
    cy.get('.button_container > .btn_common').click()
    cy.wait(500)

    if( i == 0 ){
      cy.get('.popup_t > span').contains('카드 정보 변경').should('exist') 
      cy.get(':nth-child(1) > .form_label').contains('카드 번호').should('exist') 
      cy.get(':nth-child(2) > .form_label').contains('유효기간').should('exist') 
      cy.get(':nth-child(3) > .form_label').contains('비밀번호 앞 2자리').should('exist') 
      cy.get(':nth-child(4) > .form_label').contains('생년월일 6자리').should('exist') 
      cy.get(':nth-child(5) > .form_label').contains('결제용 이메일').should('exist') 
      //cy.get('.btn_gray').contains('취소').should('exist') 
      //cy.get('.btn_point').contains('저장').should('exist') 
    }else{
      cy.get('.popup_t > span').contains('카드 정보 변경').should('exist') 
      cy.get(':nth-child(1) > .form_label').contains('카드 번호').should('exist') 
      cy.get(':nth-child(2) > .form_label').contains('유효기간').should('exist') 
      cy.get(':nth-child(3) > .form_label').contains('비밀번호 앞 2자리').should('exist') 
      cy.get(':nth-child(4) > .form_label').contains('생년월일 6자리').should('exist') 
      cy.get(':nth-child(5) > .form_label').contains('결제용 이메일').should('exist') 
      //cy.get('.btn_gray').contains('취소').should('exist') 
      //cy.get('.btn_point').contains('저장').should('exist') 
    }

    cy.get(':nth-child(1) > .form_content > .form_control').type('111111111')
    cy.get(':nth-child(1) > .form_content > .error').contains('올바른 카드번호를 입력해 주세요.').should('exist') 
    cy.wait(100)
    cy.get(':nth-child(1) > .form_content > .form_control').get('[name="cardNumber"]').clear()
    cy.get(':nth-child(1) > .form_content > .form_control').get('[name="cardNumber"]').type('1111111111111111')
    cy.get(':nth-child(1) > .form_content > .error').contains('올바른 카드번호를 입력해 주세요.').should('not.exist') 
    cy.wait(100)

    cy.get('[name="expiry1"]').type('1')
    cy.get(':nth-child(2) > .form_content > .error').contains('유효기간을 입력해 주세요').should('exist') 
    cy.wait(100)
    cy.get('[name="expiry1"]').type('1')
    cy.get('[name="expiry2"]').type('20')
    cy.wait(100)
    cy.get(':nth-child(2) > .form_content > .error').contains('유효기간을 입력해 주세요').should('exist') 
    cy.get('[name="expiry2"]').type('26')
    cy.wait(100)

    cy.get('.password_content > .form_control').type('1')
    cy.get(':nth-child(3) > .form_content > .error').contains('올바른 비밀번호를 입력해 주세요.').should('exist') 
    cy.wait(100)
    cy.get('.password_content > .form_control').type('1')
    cy.get(':nth-child(3) > .form_content > .error').contains('올바른 비밀번호를 입력해 주세요.').should('not.exist') 

    cy.get(':nth-child(4) > .form_content > .form_control').type('1')
    cy.get(':nth-child(4) > .form_content > .form_control').clear()
    cy.wait(100)
    cy.get(':nth-child(4) > .form_content > .error').contains('유효한 값을 입력해 주세요.').should('exist') 
    cy.get(':nth-child(4) > .form_content > .form_control').type('19841228')
    cy.get(':nth-child(4) > .form_content > .error').contains('유효한 값을 입력해 주세요.').should('not.exist') 
    cy.wait(100)

    cy.get(':nth-child(5) > .form_content > .form_control').type('1')
    cy.wait(100)
    cy.get(':nth-child(5) > .form_content > .error').contains('올바른 이메일 주소를 입력해 주세요.').should('exist') 
    cy.get(':nth-child(5) > .form_content > .form_control').clear()
    cy.get(':nth-child(5) > .form_content > .form_control').type('ruoghks@gmail.com')
    cy.get(':nth-child(5) > .form_content > .error').contains('올바른 이메일 주소를 입력해 주세요.').should('not.exist') 
    cy.wait(100)

    cy.get('[class="btn_common btn_point btn_medium"]').click()
    cy.wait(100)
    cy.contains('카드정보 인증 및 빌키 발급에 실패하였습니다. [F112]유효하지않은 카드번호를 입력하셨습니다. (card_bin 없음)').should('exist') 
    cy.wait(100)
    cy.get('[class="btn_common btn_point btn_popup_small focusable"]').click()
    cy.wait(100)

    cy.get('.content_td > .btn_common').click()
    cy.get('.content_td > .btn_common').contains('저장').should('exist')
    cy.wait(500)

    cy.get('.form_control').clear()
    cy.get('.form_control').type('dsfasfs')
    cy.get('.content_td > .btn_common').click()
    if( i == 0 ){
        cy.get('.error').contains('올바른 이메일 주소를 입력해 주세요.').should('exist') 
    }else{
        cy.get('.error').contains('The email field must be a valid email').should('exist') 
    }
    cy.wait(500)

    cy.get('.form_control').clear()
    cy.get('.content_td > .btn_common').click()
    if( i == 0 ){
      cy.get('.error').contains('올바른 이메일 주소를 입력해 주세요.').should('exist') 
    }else{
      cy.get('.error').contains('The email field must be a valid email').should('exist') 
    }
    cy.wait(500)
    
    cy.get('.form_control').type('kyeonghwan.lee@liveklass.com')
    cy.get('.content_td > .btn_common').click()
    if( i == 0 ){
      cy.get('.popup_m > p').contains('이메일 정보가 수정되었습니다.').should('exist') 
    }else{
      cy.get('.popup_m > p').contains('이메일 정보가 수정되었습니다.').should('exist') 
    }
    cy.get('.popup_b > .btn_common').click()
    cy.wait(500)

    //서비스 구독 - 할인쿠폰
    cy.get('[href="/service/servicecoupon"]').click()
    cy.contains('쿠폰 추가').should('exist')
    cy.get('.btn_dark').click()
    cy.wait(500)

    //cy.get('.form_content > .btn_common').contains('쿠폰 등록').should('exist')
    cy.get('.form_content > .btn_common').click()
    
    if( i == 0 ){
      cy.get('.error').contains('쿠폰코드를 입력해 주세요').should('exist')
    }else{
      cy.get('.error').contains('쿠폰코드를 입력해 주세요').should('exist')
    }
    cy.get('.popup_t > .btn_common').click()
    cy.wait(500)

    //신청내역
    cy.get('.settings_side_content > [href="/paymenthistory"]').click()
    cy.wait(500)   

    //매출관리
    cy.get('.settings_side_content > [href="/paymentManage"]').click()
    cy.wait(300)
    
    if( i == 0 ){
      cy.contains('오늘').should('exist')
      cy.contains('1주일').should('exist')
      cy.contains('1개월').should('exist')
      cy.contains('3개월').should('exist')
      cy.contains('조회 기간').should('exist')
      cy.contains('상세 조건').should('exist')
      cy.contains('주문 상태').should('exist')
      cy.contains('결제 수단').should('exist')
    }else{
      cy.contains('Today').should('exist')
      cy.contains('1week').should('exist')
      cy.contains('1month').should('exist')
      cy.contains('3month').should('exist')
      cy.contains('Period').should('exist')
      cy.contains('Detailed Conditions').should('exist')
      cy.contains('Order status').should('exist')
      cy.contains('Payment method').should('exist')
    }

    cy.get('.radio_wrap > :nth-child(3) > label > span').click()
    cy.get('.sales_form > .btn_common').click()

    cy.get('.btn-type > span').click()
    cy.wait(300)

    //정산관리
    cy.get('.settings_side_content > [href="/settlement"]').click()
    cy.wait(300)

    if( i == 0 ){
      cy.contains('오늘').should('exist')
      cy.contains('1주일').should('exist')
      cy.contains('1개월').should('exist')
      cy.contains('3개월').should('exist')
      cy.contains('조회 기간').should('exist')
      cy.contains('상세 조건').should('exist')
      cy.contains('주문 상태').should('exist')
      cy.contains('결제 수단').should('exist')
    }else{
      cy.contains('Today').should('exist')
      cy.contains('1week').should('exist')
      cy.contains('1month').should('exist')
      cy.contains('3month').should('exist')
      cy.contains('Period').should('exist')
      cy.contains('Detailed Conditions').should('exist')
      cy.contains('Order status').should('exist')
      cy.contains('Payment method').should('exist')
    }


    cy.get('.radio_wrap > :nth-child(3) > label > span').click()
    cy.get('.sales_form > .btn_common').click()

    cy.get('.btn-type > span').click()

  })

})
