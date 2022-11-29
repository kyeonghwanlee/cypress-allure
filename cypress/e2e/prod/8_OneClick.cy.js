describe('empty spec', () => {

    const i = 1 //1== github 0=local

    //현재 시간 구하기
    let today = new Date()

    let hours = today.getHours() // 시
    let minutes = today.getMinutes()  // 분
    let m = Math.floor(minutes / 5)
    let minutes2 = m * 5
    //let year = today.getFullYear(); // 년도
    //let month = today.getMonth() + 1;  // 월
    //let date = today.getDate();  // 날짜

    //현재시간 더하기
    /*
    today.setMinutes(today.getMinutes() + 10);
    hours = today.getHours() // 시
    minutes = today.getMinutes()  // 분
    year = today.getFullYear(); // 년도
    month = today.getMonth() + 1;  // 월
    date = today.getDate();  // 날짜
    */

    beforeEach(function () {
        cy.viewport(1920,1080)
        cy.visit('https://testlee001.liveklass.com/')
        //cy.visit('https://testlee004.dev-liveklass.net/')
        cy.wait(100)

        cy.get('.header-action > .outlined > span').click()
        cy.wait(500)
    })

    it('8-1. 5분 후, 정각, 5분 전 , 15분 전, 30분 전 강의 만들기', () => {
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
        cy.contains('다음').click({waitForAnimations: false})
        cy.get('[data-v-54f9a632]').contains('완료').click({force: true})
        cy.wait(500)

        //cy.get('[data-testid="-input"]').clear()
        cy.get('[data-testid="-input"]').type('원클릭 5분 후, 정각, 5분 전 , 15분 전, 30분 전 강의 만들기', {force: true})
        cy.wait(100)

        cy.get('.check-area > .lk-checkbox > .checkmark').click()
        cy.wait(100)
        //5분 전 강의 만들기
        cy.get('.lk-check-collapse > .item-area > .livetime-wrapper > .timepicker-custom > .vue__time-picker').click()
        cy.get('.vue__time-picker > .dropdown > .select-list > .hours').contains(hours).click()
        cy.get('.vue__time-picker > .dropdown > .select-list > .minutes').contains(minutes2).click()
        cy.get('.item-area > .livetime-wrapper > .timepicker-custom > .vue__time-picker > .time-picker-overlay').click()
        cy.wait(500)

        //정각 강의 만들기
        cy.get(':nth-child(4) > .lk-button').click({force: true})
        cy.wait(100)

        today.setMinutes(today.getMinutes() + 5)
        hours = today.getHours() // 시
        minutes = today.getMinutes()  // 분
        m = Math.floor(minutes / 5)
        minutes2 = m * 5
        cy.wait(100)
        cy.get(':nth-child(4) > .timepicker-custom > .vue__time-picker > .display-time').click()
        cy.get('.vue__time-picker > .dropdown:nth-child(3) > .select-list > .hours').contains(hours).click()
        cy.get('.vue__time-picker > .dropdown:nth-child(3) > .select-list > .minutes').contains(minutes2).click()
        cy.get('.item-area > .livetime-wrapper > .timepicker-custom > .vue__time-picker > .time-picker-overlay').click()
        cy.wait(100)
        cy.get('.lk-check-collapse > .item-area > .livetime-wrapper:nth-child(4) > .el-date-editor > .el-input__inner').click()
        cy.get('tbody > .el-date-table__row > .today > div > span').click()
        cy.wait(500)

        //5분후 강의 만들기
        cy.get(':nth-child(5) > .lk-button').click({force: true})
        cy.wait(100)

        today.setMinutes(today.getMinutes() +10)
        hours = today.getHours() // 시
        minutes = today.getMinutes()  // 분
        m = Math.floor(minutes / 5)
        minutes2 = m * 5
        cy.wait(100)
        cy.get(':nth-child(5) > .timepicker-custom > .vue__time-picker > .display-time').click()
        cy.get('.vue__time-picker > .dropdown:nth-child(3) > .select-list > .hours').contains(hours).click()
        cy.get('.vue__time-picker > .dropdown:nth-child(3) > .select-list > .minutes').contains(minutes2).click()
        cy.get('.item-area > .livetime-wrapper > .timepicker-custom > .vue__time-picker > .time-picker-overlay').click()
        cy.wait(100)

        //cy.get('.lk-check-collapse > .item-area > .livetime-wrapper:nth-child(5) > .el-date-editor > .el-input__inner').click()
        //cy.get('tbody > .el-date-table__row > .today > div > span').click()
        //cy.wait(500)

        //15분후 강의 만들기
        cy.get(':nth-child(6) > .lk-button').click({force: true})
        cy.wait(100)
 
        today.setMinutes(today.getMinutes() +20)
        hours = today.getHours() // 시
        minutes = today.getMinutes()  // 분
        m = Math.floor(minutes / 5)
        minutes2 = m * 5
        cy.wait(100)
        cy.get(':nth-child(6) > .timepicker-custom > .vue__time-picker > .display-time').click()
        cy.get('.vue__time-picker > .dropdown:nth-child(3) > .select-list > .hours').contains(hours).click()
        cy.get('.vue__time-picker > .dropdown:nth-child(3) > .select-list > .minutes').contains(minutes2).click()
        cy.get('.item-area > .livetime-wrapper > .timepicker-custom > .vue__time-picker > .time-picker-overlay').click()
        cy.wait(100)

        //cy.get('.lk-check-collapse > .item-area > .livetime-wrapper:nth-child(6) > .el-date-editor > .el-input__inner').click()
        //cy.get('tbody > .el-date-table__row > .today > div > span').click()
        //cy.wait(500)

        //30분후 강의 만들기
        cy.get(':nth-child(7) > .lk-button').click({force: true})
        cy.wait(100)
 
        today.setMinutes(today.getMinutes() +35)
        hours = today.getHours() // 시
        minutes = today.getMinutes()  // 분
        m = Math.floor(minutes / 5)
        minutes2 = m * 5
        cy.wait(100)
        cy.get(':nth-child(7) > .timepicker-custom > .vue__time-picker > .display-time').click()
        cy.get('.vue__time-picker > .dropdown:nth-child(3) > .select-list > .hours').contains(hours).click()
        cy.get('.vue__time-picker > .dropdown:nth-child(3) > .select-list > .minutes').contains(minutes2).click()
        cy.get('.item-area > .livetime-wrapper > .timepicker-custom > .vue__time-picker > .time-picker-overlay').click()
        cy.wait(100)

        //cy.get('.lk-check-collapse > .item-area > .livetime-wrapper:nth-child(7) > .el-date-editor > .el-input__inner').click()
        //cy.get('tbody > .el-date-table__row > .today > div > span').click()
        //cy.wait(500)

        cy.get('.createBtn').click({force: true})
        cy.wait(1000)
        
    })

    it('8-2. 강의 공개', () => {
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
    
        //비공개 이동
        cy.get('.swiper-slide-next > a').click()
        cy.wait(500)
    
        //클래스 이동
        cy.contains('원클릭 5분 후, 정각, 5분 전 , 15분 전, 30분 전 강의 만들기').click({force: true})
        cy.wait(500)
    
        cy.get('.mt30 > .close-button').click({force: true})
        
        //클래스 관리 이동
        cy.get('#view-step2 > .cv-edit-btn > .btn-label > span').click()
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
        cy.contains('원클릭 5분 후, 정각, 5분 전 , 15분 전, 30분 전 강의 만들기').should('exist') 
    })

    it('8-3. 강의 신청', () => {
        // id & pw text input
        cy.get('[type="text"]').clear()
        cy.get('[type="password"]').clear()
        cy.get('.form_group > .lk-input > .lk-input-inner > input').type('cekajif719@yubua.com')
        cy.get('[style="margin-bottom: 1.25rem;"] > .lk-input > .lk-input-inner > input').type('03704292ld@')
        cy.wait(500)
        cy.get('.lk-button').click()
        cy.wait(500)

        //프로그램 이동
        cy.get(':nth-child(2) > .header-menu-item-btn').click()
        cy.wait(500)

        //클래스 이동
        cy.contains('원클릭 5분 후, 정각, 5분 전 , 15분 전, 30분 전 강의 만들기').click({force: true})
        cy.wait(500)

        cy.get('.pay').click()
        cy.wait(500)

        cy.get('label > span').click({force: true})
        cy.wait(500)

        cy.get('.btn_new_point').click({force: true})
        cy.wait(500)

        cy.get('.popup_b > .btn_common').click({force: true})
        cy.wait(500)
    })

})