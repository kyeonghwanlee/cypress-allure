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
  
    it('7-1. 무료로 설정한 클래스에서 운영자 승인이 활성화되어 있으면 저장 방지 확인', () => {
        cy.get(':nth-child(2) > .header-menu-item-btn').click()
        cy.wait(500)

        cy.get(':nth-child(2) > .lk-card-img > .lk-card-link').click()
        cy.wait(500)

        cy.get('.mt30 > .close-button').click({force: true})

        //클래스 관리
        cy.get('#view-step2 > .cv-edit-btn > .btn-label > span').click()
        cy.wait(500)

        cy.get('.lk-tabs > :nth-child(4) > span').click()
        cy.get('[id="fareCd"]').then(data=> {
            if( data.val() == '00' ){
            }else{
                cy.get(':nth-child(1) > :nth-child(1) > .checkmark').click()
                cy.get('.btn-submit > .btn-label > span').click()
                cy.wait(500)
            }
        })

        cy.get('.lk-tabs > :nth-child(2) > span').click()
        cy.wait(500)

        cy.get('[id="choiseTypeCd"]').then(data=> {
            if( data.val() == '00' ){
                cy.get(':nth-child(2) > .checks > .checkmark').click()
                cy.wait(500)
                cy.get('.btn-submit > .btn-label > span').click()
                cy.wait(500)
                
                cy.contains('운영자 선정 기능은 유료 클래스에 한해 이용하실 수 있습니다.').should('exist')
                cy.wait(500)
            }else{
                cy.get(':nth-child(2) > .checks > .checkmark').click()
                cy.wait(500)
                cy.get('.btn-submit > .btn-label > span').click()
                cy.wait(500)
                cy.get(':nth-child(2) > .checks > .checkmark').click()
                cy.wait(500)
                cy.get('.btn-submit > .btn-label > span').click()
                cy.wait(500)
                cy.contains('운영자 선정 기능은 유료 클래스에 한해 이용하실 수 있습니다.').should('exist')
                cy.wait(500)
            }
        })
    })

    it('7-2. 유료에서 할인 금액이 0인 경우 운영자 승인이 활성화되어 있으면 저장 방지', () => {
        cy.get(':nth-child(2) > .header-menu-item-btn').click()
        cy.wait(500)

        cy.get(':nth-child(2) > .lk-card-img > .lk-card-link').click()
        cy.wait(500)

        cy.get('.mt30 > .close-button').click({force: true})

        //클래스 관리
        cy.get('#view-step2 > .cv-edit-btn > .btn-label > span').click()
        cy.wait(500)

        //결제 설정
        cy.get('.lk-tabs > :nth-child(4) > span').click()
        cy.wait(500)

        cy.get('[id="fareCd"]').then(data=> {
            if( data.val() == '00' ){
                cy.get(':nth-child(1) > :nth-child(1) > .checkmark').click()
                cy.get(':nth-child(1) > :nth-child(2) > [style="display: flex;"] > .lk-input-container > .container-input').type('10000')
                cy.get('.btn-submit > .btn-label > span').click()
                cy.wait(500)
            }else{
            }
        })

        //클래스 설정
        cy.get('.lk-tabs > :nth-child(2) > span').click()
        cy.wait(100)
        
        cy.get('[id="choiseTypeCd"]').then(data=> {
            if( data.val() == '00' ){
                cy.get(':nth-child(2) > .checks > .checkmark').click()
                cy.get('.btn-submit > .btn-label > span').click()
                cy.wait(500)
            }else{
                cy.wait(500)
            }
        })

        //결제 설정
        cy.get('.lk-tabs > :nth-child(4) > span').click()
        cy.wait(500)

        //할인적용 클릭 후 팝업 확인
        cy.get(':nth-child(2) > .checks > .checkmark').click()
        cy.get(':nth-child(2) > .row-inner > :nth-child(2) > [style="display: flex;"] > .lk-input-container > .container-input').type('0')
        cy.wait(500)

        cy.get('.btn-submit > .btn-label > span').click()
        cy.contains('운영자 선정 기능은 유료 클래스에 한해 이용하실 수 있습니다.').should('exist')
        cy.wait(500)
    })

    it('7-3. 유료로 설정한 클래스이거나 할인 금액이 0보다 큰 경우 운영자 승인이 활성화되어도 저장 가능', () => {
        cy.get(':nth-child(2) > .header-menu-item-btn').click()
        cy.wait(500)

        cy.get(':nth-child(2) > .lk-card-img > .lk-card-link').click()
        cy.wait(500)
        
        cy.get('.mt30 > .close-button').click({force: true})

        //클래스 관리
        cy.get('#view-step2 > .cv-edit-btn > .btn-label > span').click()
        cy.wait(500)

        //결제 설정
        cy.get('.lk-tabs > :nth-child(4) > span').click()
        cy.wait(500)

        cy.get('[id="fareCd"]').then(data=> {
            if( data.val() == '00' ){
                cy.get(':nth-child(1) > :nth-child(1) > .checkmark').click()
                cy.get(':nth-child(1) > :nth-child(2) > [style="display: flex;"] > .lk-input-container > .container-input').type('10000')
                cy.get('.btn-submit > .btn-label > span').click()
                cy.wait(500)
            }else{
            }
        })

        cy.get('.lk-tabs > :nth-child(2) > span').click()
        cy.wait(500)

        //운영자 설정 활성화
        cy.get('[id="choiseTypeCd"]').then(data=> {
            if( data.val() == '00' ){
                cy.get(':nth-child(2) > .checks > .checkmark').click()
                cy.get('.btn-submit > .btn-label > span').click()
                cy.wait(500)
            }else{
                cy.get('.btn-submit > .btn-label > span').click()
                cy.wait(500)
            }
        })
    })

    it('원복', () => {
        cy.get(':nth-child(2) > .header-menu-item-btn').click()
        cy.wait(500)

        cy.get(':nth-child(2) > .lk-card-img > .lk-card-link').click()
        cy.wait(500)
        
        cy.get('.mt30 > .close-button').click({force: true})

        //클래스 관리
        cy.get('#view-step2 > .cv-edit-btn > .btn-label > span').click()
        cy.wait(500)

        cy.get('.lk-tabs > :nth-child(2) > span').click()
        cy.wait(500)

        cy.get('[id="choiseTypeCd"]').then(data=> {
            if( data.val() == '00' ){
            }else{
                cy.get(':nth-child(2) > .checks > .checkmark').click()
                cy.get('.btn-submit > .btn-label > span').click()
                cy.wait(500)
            }
        })

        //결제 설정
        cy.get('.lk-tabs > :nth-child(4)').click()
        cy.wait(500)

        cy.get('[id="fareCd"]').then(data=> {
            if( data.val() == '00' ){
            }else{
                cy.get('[id="ss"]').then(data=> {
                    if( data.val() == 'true' ){
                        cy.get(':nth-child(2) > .row-inner > :nth-child(2) > [style="display: flex;"] > .lk-input-container > .container-input').clear()
                        cy.get('.form_group > :nth-child(1) > .row-subtitle').click()
                        cy.get(':nth-child(2) > .checks').click()
                        cy.wait(500)
                    }
                })
                cy.get(':nth-child(1) > :nth-child(2) > [style="display: flex;"] > .lk-input-container > .container-input').clear()
                cy.get(':nth-child(1) > :nth-child(1) > .checkmark').click()
                cy.wait(500)
            }
        })
        cy.get('[id="addOptionCd"]').then(data=> {
            if( data.val() == 'true' ){
                cy.get('[data-testid="-input"]').clear()
                cy.get(':nth-child(4) > [style="display: flex;"] > .lk-input-container > .container-input').clear()
                cy.get('.class-manage-wrapper > :nth-child(2) > .lk-checkbox > .checkmark').click()
                cy.wait(500)
            }
        })

        cy.get('.btn-submit > .btn-label > span').click()
        cy.wait(500)    
    })

    it('7-4. 무료로 설정한 클래스에서 수강신청을 한 경우 서비스 구독 수강신청 건수 차감 안 됨', () => {
        cy.get('.ki-user').click()
        cy.get('[href="/service/servicemanage"]').click()
        cy.wait(500)

        cy.get(':nth-child(1) > .bold').contains('수강신청 0건 사용 중').should('exist')
        cy.wait(500)
        
        //로그아웃
        cy.get('.ki-user').click()
        cy.get(':nth-child(3) > .lhp-menu-item').click()
        
        cy.get('.header-action > .outlined > span').click()
        cy.wait(500)
        
        // id & pw text input
        cy.get('[type="text"]').clear()
        cy.get('[type="password"]').clear()
        cy.get('.form_group > .lk-input > .lk-input-inner > input').type('wodahe6753@dnitem.com')
        cy.get('[style="margin-bottom: 1.25rem;"] > .lk-input > .lk-input-inner > input').type('@dl29240730')
        cy.wait(500)
        cy.get('.lk-button').click()
        cy.wait(500)
        
        cy.get(':nth-child(2) > .header-menu-item-btn').click()
        cy.wait(500)

        cy.get(':nth-child(2) > .lk-card-img > .lk-card-link').click()
        cy.wait(500)

        //클래스 신청
        cy.get('.pay > .btn-label > span').click()
        cy.wait(500)

        cy.get(':nth-child(2) > :nth-child(1) > label > span').click()
        cy.get('.btn_center_box > .btn_new_point').click()
        cy.wait(500)

        cy.get('.popup_b > .btn_common').click()

        //로그아웃
        cy.get('.ki-user').click()
        cy.get(':nth-child(3) > .lhp-menu-item').click()
        
        cy.get('.header-action > .outlined > span').click()
        cy.wait(500)

        //로그인
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

        cy.get('.ki-user').click()
        cy.get('[href="/service/servicemanage"]').click()
        cy.wait(500)

        cy.get(':nth-child(1) > .bold').contains('수강신청 0건 사용 중').should('exist')

    })

    it('7-5. 유료로 설정한 클래스에서 할인 금액이 0인 경우 서비스 구독 수강신청 건수 차감 안 됨', () => {
        cy.get('.ki-user').click()
        cy.get('[href="/service/servicemanage"]').click()
        cy.wait(500)

        cy.get(':nth-child(1) > .bold').contains('수강신청 0건 사용 중').should('exist')
        cy.wait(500)
        
        //로그아웃
        cy.get('.ki-user').click()
        cy.get(':nth-child(3) > .lhp-menu-item').click()
        
        cy.get('.header-action > .outlined > span').click()
        cy.wait(500)
    
        // id & pw text input
        cy.get('[type="text"]').clear()
        cy.get('[type="password"]').clear()
        cy.get('.form_group > .lk-input > .lk-input-inner > input').type('wodahe6753@dnitem.com')
        cy.get('[style="margin-bottom: 1.25rem;"] > .lk-input > .lk-input-inner > input').type('@dl29240730')
        cy.wait(500)
        cy.get('.lk-button').click()
        cy.wait(500)
        
        cy.get(':nth-child(2) > .header-menu-item-btn').click()
        cy.wait(500)

        cy.get(':nth-child(2) > .lk-card-img > .lk-card-link').click()
        cy.wait(500)

        //클래스 신청
        cy.get('.pay > .btn-label > span').click()
        cy.wait(500)

        cy.get(':nth-child(2) > :nth-child(1) > label > span').click()
        cy.get('.btn_center_box > .btn_new_point').click()
        cy.wait(500)

        cy.get('.popup_b > .btn_common').click()

        //로그아웃
        cy.get('.ki-user').click()
        cy.get(':nth-child(3) > .lhp-menu-item').click()
        
        cy.get('.header-action > .outlined > span').click()
        cy.wait(500)

        //로그인
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

        cy.get('.ki-user').click()
        cy.get('[href="/service/servicemanage"]').click()
        cy.wait(500)

        cy.get(':nth-child(1) > .bold').contains('수강신청 0건 사용 중').should('exist')
    })

    it('7-6. 원복', () => {
        cy.get(':nth-child(2) > .header-menu-item-btn').click()
        cy.wait(500)

        cy.get(':nth-child(2) > .lk-card-img > .lk-card-link').click()
        cy.wait(500)
        
        cy.get('.mt30 > .close-button').click({force: true})

        //클래스 관리
        cy.get('#view-step2 > .cv-edit-btn > .btn-label > span').click()
        cy.wait(500)

        cy.get('.lk-tabs > :nth-child(2) > span').click()
        cy.wait(500)

        cy.get('[id="choiseTypeCd"]').then(data=> {
            if( data.val() == '00' ){
            }else{
                cy.get(':nth-child(2) > .checks > .checkmark').click()
                cy.get('.btn-submit > .btn-label > span').click()
                cy.wait(500)
            }
        })

        //결제 설정
        cy.get('.lk-tabs > :nth-child(4)').click()
        cy.wait(500)

        cy.get('[id="fareCd"]').then(data=> {
            if( data.val() == '00' ){
            }else{
                cy.get('[id="ss"]').then(data=> {
                    if( data.val() == 'true' ){
                        cy.get(':nth-child(2) > .row-inner > :nth-child(2) > [style="display: flex;"] > .lk-input-container > .container-input').clear()
                        cy.get('.form_group > :nth-child(1) > .row-subtitle').click()
                        cy.get(':nth-child(2) > .checks').click()
                        cy.wait(500)
                    }
                })
                cy.get(':nth-child(1) > :nth-child(2) > [style="display: flex;"] > .lk-input-container > .container-input').clear()
                cy.get(':nth-child(1) > :nth-child(1) > .checkmark').click()
                cy.wait(500)
            }
        })
        cy.get('[id="addOptionCd"]').then(data=> {
            if( data.val() == 'true' ){
                cy.get('[data-testid="-input"]').clear()
                cy.get(':nth-child(4) > [style="display: flex;"] > .lk-input-container > .container-input').clear()
                cy.get('.class-manage-wrapper > :nth-child(2) > .lk-checkbox > .checkmark').click()
                cy.wait(500)
            }
        })

        cy.get('.btn-submit > .btn-label > span').click()
        cy.wait(500)    
    })
})