describe('empty spec', () => {

  const i = 1 //1== github 0=local

  beforeEach(function () {
    cy.viewport(1920,1080)
    cy.visit('https://testlee001.liveklass.com/')
    cy.wait(500)

    cy.get('.header-action > .outlined > span').click()
    //cy.contains('로그인').click()
    cy.wait(500)

    // id & pw text input
    cy.get('[type="text"]').clear()
    cy.get('[type="password"]').clear()
    cy.get('.form_group > .lk-input > .lk-input-inner > input').type('kyeonghwan.lee@liveklass.com')
    cy.get('[style="margin-bottom: 1.25rem;"] > .lk-input > .lk-input-inner > input').type('@Dl292407')
    cy.wait(1000)
    cy.get('.lk-button').click()
    cy.wait(500)
  })

  it('6-1. class update', () => {
    //프로그램 이동
    cy.get(':nth-child(2) > .header-menu-item-btn').click()
    cy.wait(500)
    cy.get('.active > a').contains('전체').should('exist')
    cy.get('.swiper-slide-next > a').contains('비공개').should('exist')

    //강의실 1개 입장
    cy.get(':nth-child(1) > .lk-card-img > .lk-card-link').click()

    //check
    cy.get(':nth-child(1) > .header-menu-item-btn').contains('소개').should('exist')
    cy.get(':nth-child(2) > .header-menu-item-btn').contains('프로그램').should('exist')
    cy.get(':nth-child(3) > .header-menu-item-btn').contains('공지사항').should('exist')
    cy.get(':nth-child(4) > .header-menu-item-btn').contains('나의 강의실').should('exist')
    cy.get('.el-tooltip > span').contains('사이트 관리').should('exist')
    cy.get('.detail-btns > .btn-label > span').contains('찜하기').should('exist')
    cy.get('.share-btns > .btn-label > span').contains('공유').should('exist')
    cy.get('#view-step1 > .lk-button > .btn-label > span').contains('강의실 입장').should('exist')
    cy.get('.gray > .btn-label > span').contains('클래스 복사').should('exist')
    cy.get('.warning > .btn-label > span').contains('클래스 삭제').should('exist')
    cy.get('#view-step2 > .cv-edit-btn > .btn-label > span').contains('클래스 관리').should('exist')
    cy.get(':nth-child(4) > .class-description-wrapper > .class-description-title > .title').contains('커리큘럼').should('exist')
    cy.get(':nth-child(6) > .class-description-wrapper > .class-description-title > .title').contains('질문 답변').should('exist')
    cy.get('.detail-wrapper > :nth-child(2)').contains('1회 라이브').should('exist')
    cy.wait(500)
  })

  it('6-2. class update(수강생)', () => {
    //프로그램 이동
    cy.get(':nth-child(2) > .header-menu-item-btn').click()
    cy.wait(500)
    cy.get(':nth-child(1) > .lk-card-img > .lk-card-link').click()
    cy.wait(500)
    //클래스 관리 이동
    cy.get('#view-step2 > .cv-edit-btn > .btn-label > span').click()
    cy.wait(500)
    //check
    cy.get('.btn-move > .btn-label > span').contains('클래스로 돌아가기').should('exist')
    cy.get('[style="font-size: 16px; color: rgb(17, 42, 68); margin-right: 10px; cursor: pointer; vertical-align: bottom; font-weight: 600;"]').contains('클래스 공개').should('exist')

    cy.get('.clicked > span').contains('수강생').should('exist')
    cy.get('.lk-tabs > :nth-child(2) > span').contains('클래스 설정').should('exist')
    cy.get('.lk-tabs > :nth-child(3) > span').contains('강의관리').should('exist')
    cy.get('.lk-tabs > :nth-child(4) > span').contains('결제설정').should('exist')
    cy.get('.lk-tabs > :nth-child(5) > span').contains('추가정보').should('exist')

    cy.get('.btn-email-list > .btn-label > span').contains('발송 이력 확인').should('exist')
    cy.get('.btn-invite > .btn-label > span').contains('초대하기').should('exist')
    cy.wait(500)
    // 이메일 초대
    cy.get('.new-tag').type('ruoghks@gmail.com')
    cy.get('.new-tag').type('{enter}')
    cy.get('.btn-invite').click()
    cy.wait(500)
    // 발송이력 확인
    cy.get('.btn-email-list').click()
    cy.get('.lk-close-button').click()
    cy.wait(500)
    //강사 추가 
    cy.get(':nth-child(2) > :nth-child(1) > .manage-facilitator-item').click()

    cy.get('.lk-radio-group > .clicked > span').contains('이메일초대').should('exist')
    cy.get('.lk-radio-group > :nth-child(2) > span').contains('기존 강사에서 추가').should('exist')
    cy.get('.btn-next').contains('다음').should('exist')
    cy.wait(500)
    cy.get('.lk-input-inner > input').type('ruoghks@kakao.com')
    cy.get('.btn-next').click()
    cy.wait(500)
    cy.get('.btn-add-user > .btn-label > span').contains('강사로 추가하기').should('exist')
    cy.get('.btn-add-user > .btn-label > span').click()
    cy.wait(500)
    //수강생 목록 보기
    cy.get('.left-container > .approved').click()
    cy.get('.left-container > .waiting').click()
    cy.get('.canceled').click()
    cy.get('.ended').click()
    cy.wait(500)
    //강사 삭제
    cy.get(':nth-child(2) > :nth-child(1) > .manage-facilitator-item > .edit-box > .lk-icon > img').click()
    cy.wait(500)
    cy.get('.button-container > .primary > .btn-label > span').contains('저장하기').should('exist')
    cy.get('.delete > .btn-label > span').contains('초대취소').should('exist')
    cy.wait(500)
    cy.get('.delete > .btn-label > span').click()
    cy.get('.lk-modal-footer > .primary > .btn-label > span').click()
    cy.wait(500)
  })

  it('6-3. class update(클래스 설정)', () => {
    //프로그램 이동
    cy.get(':nth-child(2) > .header-menu-item-btn').click()
    cy.wait(500)
    cy.get(':nth-child(1) > .lk-card-img > .lk-card-link').click()
    cy.wait(500)
    //클래스 관리 이동
    cy.contains('클래스 관리').click()
    cy.wait(500)
    //클래스 설정
    cy.get('.lk-tabs > :nth-child(2) > span').click()
    cy.wait(500)
    //check
    cy.get('.btn > .btn-label > span').contains('클래스 이미지 변경하기').should('exist')
    cy.get('.mobile-chx > .chk-label').contains('썸네일 이미지에 텍스트 표시').should('exist')
    cy.get('.editor-check-container > .lk-checkbox > .chk-label').contains('에디터로 꾸미기').should('exist')

    cy.get(':nth-child(1) > :nth-child(1) > .chk-label').contains('모집 정원').should('exist')
    cy.get(':nth-child(2) > .checks > .chk-label').contains('운영자 선정').should('exist')
    cy.get('.row-inner-white > :nth-child(3) > .checks > .chk-label').contains('모집 기간').should('exist')
    cy.get(':nth-child(4) > .row-inner-item-label').contains('수강기간').should('exist')
    cy.get(':nth-child(5) > .row-inner-item-label').contains('카테고리').should('exist')
    cy.get('.btn-submit > .btn-label > span').contains('변경사항 저장하기').should('exist')

    // 제목 변경
    cy.get('.lk-input-inner > input').clear()
    cy.get('.lk-input-inner > input').type('cypress update test')
    cy.wait(500)
    //클래스 및 강사 소개
    cy.get(':nth-child(1) > .lk-textarea > .ui-textarea').clear()
    cy.get(':nth-child(2) > .lk-textarea > .ui-textarea').clear()
    cy.get(':nth-child(3) > .lk-textarea > .ui-textarea').clear()
    cy.get(':nth-child(4) > .lk-textarea > .ui-textarea').clear()
    cy.get(':nth-child(7) > .lk-textarea > .ui-textarea').clear()
    cy.wait(500)
    cy.get(':nth-child(1) > .lk-textarea > .ui-textarea').type('cypress update test')
    cy.get(':nth-child(2) > .lk-textarea > .ui-textarea').type('cypress update test')
    cy.get(':nth-child(3) > .lk-textarea > .ui-textarea').type('cypress update test')
    cy.get(':nth-child(4) > .lk-textarea > .ui-textarea').type('cypress update test')
    cy.get(':nth-child(7) > .lk-textarea > .ui-textarea').type('cypress update test')
    cy.wait(500)
    //모집정원
    cy.get(':nth-child(1) > :nth-child(1) > .checkmark').click()
    cy.get('.container-input').type('100')
    cy.get(':nth-child(1) > :nth-child(3) > .checks > .checkmark').click()
    cy.get(':nth-child(2) > .checks > .checkmark').click()
    cy.get(':nth-child(4) > .el-select > .el-input > .el-input__inner').click()
    cy.contains('30일').click()
    cy.wait(5000)

    cy.contains('변경사항 저장하기').click()
    cy.wait(3000)
    
    // 변경내용 확인
    cy.get('.btn-move > .btn-label > span').click()
    cy.wait(500)

    //check
    cy.get('.detail-wrapper > :nth-child(1)').contains('100명 모집').should('exist')
    cy.get('.detail-wrapper > :nth-child(3)').contains('1개월 수강').should('exist')
    cy.wait(500)
    //원복
    cy.contains('클래스 관리').click()
    cy.wait(500)
    cy.get('.lk-tabs > :nth-child(2) > span').click()
    cy.wait(500)
    cy.get(':nth-child(1) > :nth-child(3) > .checks > .checkmark').click()
    cy.get(':nth-child(1) > :nth-child(1) > .checkmark').click()
    cy.get(':nth-child(2) > .checks > .checkmark').click()
    cy.get(':nth-child(4) > .el-select > .el-input > .el-input__inner').click()
    cy.contains('150일').click()
    cy.wait(5000)

    cy.contains('변경사항 저장하기').click()
    cy.wait(500)

    })

  it('6-4. class update(결제 설정)', () => {
    //프로그램 이동
    cy.get(':nth-child(2) > .header-menu-item-btn').click()
    cy.wait(500)
    cy.get(':nth-child(1) > .lk-card-img > .lk-card-link').click()
    cy.wait(500)
    //클래스 관리 이동
    cy.contains('클래스 관리').click()
    cy.wait(500)
    
    //결제 설정
    cy.get('.lk-tabs > :nth-child(4) > span').click()
    cy.wait(500)
    //유료 클래스
    cy.get(':nth-child(1) > :nth-child(1) > .checkmark').click()

    //유료 클래스 설정
    cy.get(':nth-child(1) > :nth-child(2) > [style="display: flex;"] > .lk-input-container > .container-input').clear()
    cy.get(':nth-child(1) > :nth-child(2) > [style="display: flex;"] > .lk-input-container > .container-input').type('10000')

    //할인설정
    cy.get(':nth-child(2) > .checks').click()
    cy.get(':nth-child(2) > .row-inner > :nth-child(2) > [style="display: flex;"] > .lk-input-container > .container-input').type('1000')

    cy.get('.el-date-editor > :nth-child(4)').type('2023-09-30')

    cy.get(':nth-child(2) > .row-subtitle > span').click()

    cy.get('.el-input > .el-input__inner').click()
    cy.contains('5개월').click()

    //옵션 설정
    cy.get('.class-manage-wrapper > :nth-child(2) > .lk-checkbox > .checkmark').click()

    cy.get('.lk-input-inner > input').clear()
    cy.get('.lk-input-inner > input').type('1회 코칭권')

    cy.get(':nth-child(4) > [style="display: flex;"] > .lk-input-container > .container-input').clear()
    cy.get(':nth-child(4) > [style="display: flex;"] > .lk-input-container > .container-input').type('10000')
    cy.wait(4000)

    cy.get('.btn-submit').click()
    cy.wait(1000)

    cy.get('.btn-move > .btn-label > span').click()
    cy.wait(1000)

    //check
    cy.get('.discount-promotion.mb6').contains('프로모션').should('exist')
    cy.get(':nth-child(3) > .discount').contains('현재 판매가 1,000원').should('exist')
    cy.get('.flex > .discount-promotion').contains('5개월 무이자 할부 시').should('exist')
    cy.get('.discount.mb6').contains('정가 10,000원 90% 할인').should('exist')
    cy.get('.price').contains('월 200원').should('exist')
    cy.wait(2000)

    //원복
    cy.get('#view-step2 > .cv-edit-btn > .btn-label > span').click()
    cy.wait(500)

    cy.get('.lk-tabs > :nth-child(4) > span').click()
    cy.wait(500)

    cy.get(':nth-child(4) > [style="display: flex;"] > .lk-input-container > .container-input').clear()
    cy.get('.lk-input-inner > input').clear()
    cy.get(':nth-child(2) > .row-inner > :nth-child(2) > [style="display: flex;"] > .lk-input-container > .container-input').clear()
    cy.get(':nth-child(1) > :nth-child(2) > [style="display: flex;"] > .lk-input-container > .container-input').clear()
    
    cy.get(':nth-child(1) > .row-subtitle > span').click()
    cy.get('.class-manage-wrapper > :nth-child(2) > .lk-checkbox > .checkmark').click()
    cy.get(':nth-child(2) > .checks > .checkmark').click()
    cy.get(':nth-child(1) > :nth-child(1) > .checkmark').click()
    cy.wait(1000)

    cy.get('.btn-submit > .btn-label > span').click()
  })

  it('6-5. class update(추가 정보))', () => {
    //프로그램 이동
    cy.get(':nth-child(2) > .header-menu-item-btn').click()
    cy.wait(500)
    cy.get(':nth-child(1) > .lk-card-img > .lk-card-link').click()
    cy.wait(500)
    //클래스 관리 이동
    cy.contains('클래스 관리').click()
    cy.wait(500)
    
    //추가정보
    cy.get(':nth-child(5) > span').click()
    cy.wait(500)
    
    cy.get('.manage-question-item > .lk-button > .btn-label > span').contains('입력 정보 추가').should('exist')
    cy.get('.chk-label').contains('추가 정보 사용').should('exist')
    cy.wait(500)

    cy.get('.manage-question-item > .lk-button > .btn-label > span').click()
    cy.get('.lk-input-inner > input').eq(0).clear()
    cy.get('.lk-input-inner > input').eq(0).type('추가정보 입력')
    cy.get(':nth-child(1) > .main > .checkbox > .checkmark').click()
    cy.wait(1000)

    cy.get(':nth-child(2) > .lk-checkbox > .checkmark').click()
    cy.get('.btn-move > .btn-label > span').click()
    cy.wait(2000)

    //============================================================
    //일반 사용자 추가정보 확인
    
    cy.get('.ki-user').click()
    cy.wait(500)

    cy.get(':nth-child(3) > .lhp-menu-item').click()
    cy.wait(500)

    cy.get('.outlined > span').click()
    cy.wait(500)

    cy.get('[type="text"]').clear()
    cy.get('[type="password"]').clear()
    cy.get('.form_group > .lk-input > .lk-input-inner > input').type('wodahe6753@dnitem.com')
    cy.get('[style="margin-bottom: 1.25rem;"] > .lk-input > .lk-input-inner > input').type('@dl29240730')
    cy.wait(1000)
    cy.get('.lk-button').click()
    cy.wait(1000)

    //클래스 신청
    cy.get('.pay > .btn-label > span').click()
    cy.wait(500)

    cy.get('[style="width: 100%;"] > :nth-child(1) > div > .form_label').contains('(필수) 추가정보 입력').should('exist')

    //============================================================ 
    //원복

    cy.get('.ki-user').click()
    cy.wait(500)

    cy.get(':nth-child(3) > .lhp-menu-item').click()
    cy.wait(500)

    cy.get('.header-action > .outlined > span').click()
    cy.wait(500)

    cy.get('[type="text"]').clear()
    cy.get('[type="password"]').clear()
    cy.get('.form_group > .lk-input > .lk-input-inner > input').type('kyeonghwan.lee@liveklass.com')
    cy.get('[style="margin-bottom: 1.25rem;"] > .lk-input > .lk-input-inner > input').type('@Dl292407')
    cy.wait(1000)
    cy.get('.lk-button').click()
    cy.wait(1000)
    
    //프로그램 이동
    cy.get(':nth-child(2) > .header-menu-item-btn').click()
    cy.wait(500)
    cy.get(':nth-child(1) > .lk-card-img > .lk-card-link').click()
    cy.wait(500)

    //클래스 관리 이동
    cy.contains('클래스 관리').click()
    cy.wait(500)
    
    //추가정보
    cy.get(':nth-child(5) > span').click()
    cy.wait(500)

    cy.get('button > .lk-icon > img').click()
    cy.wait(200)
  
    cy.get('.btn-move > .btn-label > span').click()
  })

  it.only('6-6. class update(강의 관리- 라이브 미팅 추가))', () => {
    //프로그램 이동
    cy.get(':nth-child(2) > .header-menu-item-btn').click()
    cy.wait(500)
    cy.get(':nth-child(1) > .lk-card-img > .lk-card-link').click()
    cy.wait(500)
    //클래스 관리 이동
    cy.contains('클래스 관리').click()
    cy.wait(500)
    
    //강의관리
    cy.get('.lk-tabs > :nth-child(3) > span').click()
    cy.wait(500)
    
    //강의추가
    cy.get('.add').click()
    cy.wait(100)

    cy.contains('라이브 미팅').should('exist')
    cy.contains('동영상 강의').should('exist')
    cy.contains('오프라인 모임').should('exist')
    cy.contains('디지털 상품').should('exist')

    cy.contains('줌').should('exist')
    cy.contains('구글미트').should('exist')
    cy.contains('기타').should('exist')
    cy.wait(500)

    // 강의 제목 입력
    cy.get('[data-testid="-input"]').clear()
    cy.get('[data-testid="-input"]').type('test')
    cy.wait(200)

    //줌
    cy.get(':nth-child(1) > .lk-radio-group > .clicked').click()
    cy.wait(200)

    //날짜 선택
    cy.get(':nth-child(1) > .el-date-editor > .el-input__inner').click()
    cy.get(':nth-child(6) > :nth-child(6) > div > span').click()
    cy.wait(200)

    //시간 선택
    cy.get(':nth-child(1) > .timepicker-custom > .vue__time-picker > .display-time').click()
    cy.get(':nth-child(1) > .timepicker-custom > .vue__time-picker > .dropdown > .select-list > .hours > [data-key="23"]').click()
    cy.get(':nth-child(1) > .timepicker-custom > .vue__time-picker > .dropdown > .select-list > .minutes > [data-key="30"]').click()
    cy.get('.time-picker-overlay').click()
    cy.wait(200)

    //여러개의 라이브 시간 설정
    cy.get('.check-area > .lk-checkbox > .chk-label').click()
    cy.wait(200)

    //시간 추가 버튼 클릭
    cy.get('.item-area > :nth-child(4) > .lk-button > .btn-label > span').click()
    cy.wait(200)

    //저장하기
    cy.get('.gradient > .btn-label > span').click()
  })


  it.only('6-7. class update(강의 관리- 라이브 미팅 추가))', () => {
    //프로그램 이동
    cy.get(':nth-child(2) > .header-menu-item-btn').click()
    cy.wait(500)
    cy.get(':nth-child(1) > .lk-card-img > .lk-card-link').click()
    cy.wait(500)
    //클래스 관리 이동
    cy.contains('클래스 관리').click()
    cy.wait(500)
    
    //강의관리
    cy.get('.lk-tabs > :nth-child(3) > span').click()
    cy.wait(500)
    
    //강의추가
    cy.get('.add').click()
    cy.wait(100)

    //동영상 강의 클릭
    cy.get('[style=""] > span').click()

    cy.contains('업로드').should('exist')
    cy.contains('유투브').should('exist')
    cy.contains('비메오').should('exist')

    //동영상 강의 제목 추가
    cy.get('[data-testid="-input"]').click()

  })

  it('6-8. class update(클래스 복제 & 삭제))', () => {
    //프로그램 이동
    cy.get(':nth-child(2) > .header-menu-item-btn').click()
    cy.wait(500)
    cy.get(':nth-child(1) > .lk-card-img > .lk-card-link').click()
    cy.wait(500)
    
    cy.get('.gray > .btn-label > span').click()
    cy.wait(500)

    cy.get('.lk-modal-footer > .lk-button > .btn-label > span').click()
    cy.wait(500)

    cy.get('.btn-move > .btn-label > span').click()
    cy.wait(500)

    cy.get('.warning > .btn-label > span').click()
    cy.wait(500)

    cy.get('.lk-modal-footer > .primary > .btn-label > span').click()
    cy.wait(500)
  })

})