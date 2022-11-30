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

    it('6-2-1. 강의 생성', () => {
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
        cy.wait(100)

        cy.get('[href="/classes/create"] > span').click()
        cy.wait(100)

        cy.contains('다음').click({waitForAnimations: false})
        cy.wait(100)
        cy.contains('다음').click({waitForAnimations: false})
        cy.wait(100)
        cy.get('[data-v-54f9a632]').contains('완료').click({force: true})
        cy.wait(500)

        //cy.get('[data-testid="-input"]').clear()
        cy.get('[data-testid="-input"]').type('course registration test', {force: true})
        cy.wait(100)

        //동영상 강의
        cy.get('.class-section > .row > .lk-radio-group > .item:nth-child(2) > span').click()
        cy.wait(100)
        cy.get('div > .livetype-wrapper > div > .row > .lk-button').click()
        cy.wait(100)
        cy.get('.vl-body > .video-list > .video-item > .video-library-item > .primary-transparent').click()
        cy.wait(100)
        cy.get('.v2-page-wrapper > .class-bottom-section > .class-section > #step3 > .createBtn').click()
        cy.wait(100)

        //프로그램 이동
        cy.get(':nth-child(2) > .header-menu-item-btn').click()
        cy.wait(500)

        //비공개 이동
        cy.get('.swiper-slide-next > a').click()
        cy.wait(500)

        //클래스 이동
        cy.contains('course registration test').click({force: true})
        cy.wait(500)
        
        //클래스 관리 이동
        cy.get('#view-step2 > .cv-edit-btn > .btn-label > span').click()
        cy.wait(500)

        // 클래스 공개 변환
        cy.get('.el-switch__core').click()
        cy.wait(100)
        cy.get('.lk-modal-footer > .primary > .btn-label > span').click()
        cy.wait(100)

        // 동영상 강의 - 유투브 추가
        cy.get('.class-info-section > .tabs > .lk-tabs > .item:nth-child(3) > span').click()
        cy.wait(100)
        cy.get('.class-bottom-section > .class-info-section > .class-manage-wrapper > .row > .manage-curriculum-item').click()
        cy.wait(100)
        cy.get('.class-manage-wrapper > .row > .curriculum-form > .lk-radio-group > .item:nth-child(2)').click()
        cy.wait(100)
        cy.get('.curriculum-form > .title-wrapper > .lk-input > .lk-input-inner > input').click()
        cy.wait(100)
        cy.get('.curriculum-form > .title-wrapper > .lk-input > .lk-input-inner > input').type('어깨')
        cy.wait(100)
        cy.get('div > .livetype-wrapper > .row > .lk-radio-group > .item:nth-child(2)').click()
        cy.wait(100)
        cy.get('div > .row > .lk-input > .lk-input-inner > input').click()
        cy.wait(100)
        cy.get('div > .row > .lk-input > .lk-input-inner > input').type('https://youtu.be/nC0MlfyQUAM')
        cy.wait(100)
        cy.get('div > .row > .fr-box > .fr-wrapper > .fr-element').click()
        cy.wait(100)
        cy.get('.class-manage-wrapper > .row > .curriculum-form > .button-wrapper > .gradient').click()
        cy.wait(100)
        cy.get('.class-bottom-section > .class-info-section > .class-manage-wrapper > .row > .manage-curriculum-item').click()
        cy.wait(100)
        cy.get('.row > .curriculum-form > .lk-radio-group > .item:nth-child(2) > span').click()
        cy.wait(100)

        // 동영상 강의 - 비메오 추가
        cy.get('.livetype-wrapper > .row > .lk-radio-group > .item:nth-child(3) > span').click()
        cy.wait(100)
        cy.get('.curriculum-form > .title-wrapper > .lk-input > .lk-input-inner > input').click()
        cy.wait(100)
        cy.get('.curriculum-form > .title-wrapper > .lk-input > .lk-input-inner > input').type('운동')
        cy.wait(100)
        cy.get('.row > .curriculum-form > div > .livetype-wrapper > div:nth-child(3)').click()
        cy.wait(100)
        cy.get('div > .row > .lk-input > .lk-input-inner > input').click()
        cy.wait(100)
        cy.get('div > .row > .lk-input > .lk-input-inner > input').type('https://vimeo.com/673103871')
        cy.wait(100)
        cy.get('div > .livetype-wrapper > div > .row > .label').click()
        cy.wait(100)
        cy.get('div > .row > .fr-box > .fr-wrapper > .fr-element').click()
        cy.wait(100)
        cy.get('.curriculum-form > .button-wrapper > .gradient > .btn-label > span').click()
        cy.wait(100)

        //클래스 
        cy.get(':nth-child(2) > .header-menu-item-btn').click()
        cy.wait(100)

        //check
        cy.contains('course registration test').should('exist') 

    })

    it('6-2-2. 수강생 강의 신청', () => {
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

        //클래스 이동
        //cy.get(':nth-child(1) > .lk-card-content > .lk-card-title').contains('course registration test').click()
        cy.contains('course registration test').click()
        //cy.visit('https://testlee001.liveklass.com/classes/118229')
        cy.wait(100)

        //수강 신청
        cy.get('.class-detail-card > #view-step1 > .pay > .btn-label > span').click()
        cy.wait(100)
        cy.get('.layout_box > .agreement_check_box > span > label > .agreement-text-color').click()
        cy.wait(100)
        cy.get('.btn_new_point').click()
        cy.wait(100)
        cy.get('.popup_container > .popup_content > form > .popup_b > .btn_common').click({force: true})
        cy.wait(100)
    })

    it('6-2-3. 강의실 입장', () => {
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

        //클래스 이동
        //cy.get(':nth-child(1) > .lk-card-content > .lk-card-title').contains('course registration test').click()
        cy.contains('course registration test').click()
        //cy.visit('https://testlee001.liveklass.com/classes/118229')
        cy.wait(100)

        // 강의실 입장
        cy.get('.class-detail-card > #view-step1 > .lk-button > .btn-label > span').click()
        cy.wait(100)

        //커뮤니티 클릭
        cy.get('div > .classroom-container > .classroom-sidebar > .classroom-sidebar-footer > .tab-menu:nth-child(2)').click()
        cy.wait(100)

        cy.get('.ui-textarea').type('커뮤니티')
        cy.get('input[type="file"]').attachFile('example.json')
        cy.wait(100)

        cy.get('[style="flex: 1 1 0%;"] > .primary').click()
        cy.wait(100)

        //하트 클릭
        cy.get('.icon-heart-w > .lk-icon > img').click({ multiple: true })
        cy.wait(100)
        
        //댓글클릭
        cy.get('.icon-texts-comment').click()
        cy.wait(100)

        //댓글쓰기
        cy.get('.community-comment-form > .lk-textarea > .ui-textarea').type('커뮤니티 댓글')
        cy.wait(100)

        cy.get('.lk-textarea > .lk-icon > img').click()
        cy.wait(100)

        //과제 클릭
        cy.get('.classroom-container > .classroom-sidebar > .video-sidebar-community > .classroom-sidebar-tabs > .tab-menu:nth-child(2)').click()
        cy.wait(100)

        cy.get('.ui-textarea').type('과제')
        cy.get('input[type="file"]').attachFile('example.json')
        cy.wait(100)

        cy.get('[style="flex: 1 1 0%;"] > .primary').click()
        cy.wait(100)

        //하트 클릭
        cy.get('.icon-heart-w > .lk-icon > img').click({ multiple: true })
        cy.wait(100)
        
        //댓글클릭
        cy.get('.icon-texts-comment').click()
        cy.wait(100)

        //댓글쓰기
        cy.get('.community-comment-form > .lk-textarea > .ui-textarea').type('과제 댓글')
        cy.wait(100)
        cy.get('.lk-textarea > .lk-icon > img').click()
        cy.wait(100)


        //커리큘럼 이동
        cy.get('.classroom-sidebar-footer > :nth-child(1)').click()
        cy.wait(100)

        //리뷰 작성
        cy.get(':nth-child(2) > .footer-content-btn > .btn-label > span').click()
        cy.wait(100)

        cy.get('.ui-textarea').clear()
        cy.get('.ui-textarea').type('좋아부러~!!')
        cy.wait(100)
        cy.get('.right-button-container > .primary').click()
        cy.wait(100)


    })


    it('6-2-4. 강의실 커뮤니티&과제 글 삭제', () => {
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

        //클래스 이동
        //cy.get(':nth-child(1) > .lk-card-content > .lk-card-title').contains('course registration test').click()
        cy.contains('course registration test').click()
        //cy.visit('https://testlee001.liveklass.com/classes/118229')
        cy.wait(100)

        // 강의실 입장
        cy.get('.class-detail-card > #view-step1 > .lk-button > .btn-label > span').click()
        cy.wait(100)

        //커뮤니티 클릭
        cy.get('div > .classroom-container > .classroom-sidebar > .classroom-sidebar-footer > .tab-menu:nth-child(2)').click()
        cy.wait(100)

        //커뮤니티 글 삭제
        cy.get('.community-list > :nth-child(1) > :nth-child(1) > .lk-ui-comment-item-video > .lk-ui-comment-body > .comment-header > :nth-child(2) > .btns > .el-dropdown > .el-dropdown-link').click()
        cy.wait(100)
        cy.contains('삭제하기').click()
        cy.wait(100)
        cy.get('.lk-modal-footer > .primary').click()
        cy.wait(100)

        //과제 클릭
        cy.get('.classroom-container > .classroom-sidebar > .video-sidebar-community > .classroom-sidebar-tabs > .tab-menu:nth-child(2)').click()
        cy.wait(100)
        
        //과제 글 삭제
        cy.get('.community-list > :nth-child(1) > :nth-child(1) > .lk-ui-comment-item-video > .lk-ui-comment-body > .comment-header > :nth-child(2) > .btns > .el-dropdown > .el-dropdown-link').click()
        cy.wait(100)
        cy.contains('삭제하기').click()
        cy.wait(100)
        cy.get('.lk-modal-footer > .primary').click()
        cy.wait(100)
    })

})