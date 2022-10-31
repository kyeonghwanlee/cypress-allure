describe('empty spec', () => {

  const i = 1 //1== github 0=local

  beforeEach(function () {
    cy.viewport(1920,1080)
    cy.visit('https://testlee001.liveklass.com/')
    cy.wait(100)

    cy.get('.header-action > .outlined > span').click()
    //cy.contains('로그인').click()
    cy.wait(500)

    // id & pw text input
    cy.get('[type="text"]').clear()
    cy.get('[type="password"]').clear()
    cy.get('.form_group > .lk-input > .lk-input-inner > input').type('kyeonghwan.lee@liveklass.com')
    cy.get('[style="margin-bottom: 1.25rem;"] > .lk-input > .lk-input-inner > input').type('@Dl292407')
    cy.wait(500)
    cy.get('.lk-button').click()
    cy.wait(500)
  })

  it('5-1. class insert(강의 라이브 생성))', () => {
    //프로그램 이동
    cy.get(':nth-child(2) > .header-menu-item-btn').click()
    cy.wait(100)

    cy.get('[href="/classes/create"] > span').click()
    cy.wait(100)

    cy.contains('다음').click({waitForAnimations: false})
    cy.contains('다음').click({waitForAnimations: false})
    cy.get('[data-v-54f9a632]').contains('완료').click({force: true})
    cy.wait(1000)

    //cy.get('[data-testid="-input"]').clear()
    cy.get('[data-testid="-input"]').type('cypress insert test', {force: true})

    cy.get('.class-section > :nth-child(1) > .lk-radio-group > :nth-child(2) > span').click()
    cy.get('.class-section > :nth-child(1) > .lk-radio-group > :nth-child(3) > span').click()
    cy.get('.lk-radio-group > :nth-child(4) > span').click()
    cy.get('.lk-radio-group > :nth-child(1) > span').click()

    //날짜 조정??
    //cy.get(':nth-child(1) > .el-date-editor > .el-input__inner').click()
    //cy.get('.el-icon-arrow-right').click() //월 이동 ->
    //cy.get('.el-icon-arrow-left').click()  //월 이동 <-
    //cy.get('.el-icon-d-arrow-right').click() //년 이동 ->
    //cy.get('.el-icon-d-arrow-left').click()  //년 이동 <-
    //cy.get(':nth-child(6) > :nth-child(6) > div > span').click() //일 선책
    //앞의 :nth-child 내용은 행
    //뒤의 :nth-child 는 열 (일1,월2,화3,수4,목5,금6,토7)

    //시간 조정
    //cy.get(':nth-child(1) > .timepicker-custom > .vue__time-picker > .display-time').click()
    //cy.get(':nth-child(1) > .timepicker-custom > .vue__time-picker > .dropdown > .select-list > .hours > [data-key="14"]').click()
    //cy.get(':nth-child(1) > .timepicker-custom > .vue__time-picker > .dropdown > .select-list > .minutes > [data-key="00"]').click()
  
    cy.get('.createBtn').click({force: true})
  })

  it.only('5-2. class insert(강의 라이브 강의 참여하기-강의실 입장))', () => {
    //프로그램 이동
    cy.get(':nth-child(2) > .header-menu-item-btn').click({force: true})
    cy.wait(100)

    //비공개 이동
    cy.get('.swiper-slide-next > a').click()
    cy.wait(100)

    // 제일 첫번째 클래스 클릭
    cy.contains('cypress insert test').click({force: true})
    cy.wait(100)
    
    //강의실 입장
    cy.get('#view-step1 > .lk-button').click()

    //cy.get('.classroom-button-wrapper > .lk-button > .btn-label > span').click({force: true})
    //cy.go('back')
  })

  it('5-3. class insert(강의 라이브 강의 참여하기-팝업))', () => {
    //cy.get('.live-item-container > [data-v-3a53cfd8=""] > .notification-card > .information-section > .join-button > .btn-label > span').click({force: true})
    //cy.wait(500)
    //cy.go('back')
  })

  it('5-4. class insert(강의 라이브 강의 참여하기-나의 강의실))', () => {
    //cy.get(':nth-child(4) > .header-menu-item-btn').click()
    //cy.wait(500)

    //cy.get('.mt30 > .close-button').click({force: true})
    //cy.get('.lk-card-enter > .lk-btn > :nth-child(1)').click()
    //cy.wait(500)
    //cy.go('back')
  })

  it('5-5. class insert(강의 공개)', () => {
    //프로그램 이동
    cy.get(':nth-child(2) > .header-menu-item-btn').click()
    cy.wait(500)

    //비공개 이동
    cy.get('.swiper-slide-next > a').click()
    cy.wait(500)

    //클래스 이동
    cy.contains('cypress insert test').click({force: true})
    cy.wait(500)

    //클래스 관리 이동
    cy.get('#view-step2 > .cv-edit-btn').click({force: true})
    cy.wait(500)

    // 클래스 공개 변환
    cy.get('.el-switch__core').click()
    cy.wait(100)
    cy.get('.lk-modal-footer > .primary > .btn-label > span').click()
    cy.wait(100)

    //클래스 
    cy.get(':nth-child(2) > .header-menu-item-btn').click()
    cy.wait(100)

    //check
    cy.contains('cypress insert test').should('exist') 
    
  })

})
