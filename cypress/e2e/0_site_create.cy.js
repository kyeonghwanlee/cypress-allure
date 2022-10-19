describe('empty spec', () => {

    beforeEach(function () {
        cy.viewport(1920,1080)
        //cy.visit('https://www.liveklass.com/')
        cy.visit('https://www.liveklass.com/', {
            onBeforeLoad(win) { // solution is here
                Object.defineProperty(win.navigator, 'languages', {
                value: ['ko-KR'],
                });
            },
        });
        cy.wait(500)
        Cypress.automation("remote:debugger:protocol", {
            command: "Emulation.setLocaleOverride",
            params: {
              locale: "ko-KR",
            },
        })
        .then(() => {
            Cypress.automation("remote:debugger:protocol", {
                command: "Emulation.setTimezoneOverride",
                params: {
                  timezoneId: "Asia/Seoul",
                },
              });
        })
        .then(() => {
              const { locale, timeZone } = new Intl.DateTimeFormat().resolvedOptions();
              console.log(locale, timeZone);
        });
    })
  
    it('0. 사이트 개설', () => {
        // 무료로 시작하기 클릭
        cy.get('.navbar5_menu-right > .button').invoke('removeAttr', 'target').click()
        cy.wait(500)

        cy.get('[data-testid="create-site-email-input"]').type('as')
        cy.get('[data-testid="create-site-name-input"]').type('as')
        cy.get('[data-testid="create-site-name-input"]').clear()
        cy.get('[data-testid="create-site-password-input"]').type('as')
        cy.get('[data-testid="create-site-password-input"]').clear()
        cy.get('[data-testid="create-site-phone-input"]').type('0')
        cy.wait(500)

        cy.contains('올바른 이메일 형식으로 입력해 주세요.').should('exist') 
        cy.contains('필수 정보입니다.').should('exist')
        cy.contains('올바른 전화번호 형식으로 입력해 주세요').should('exist') 

        //로그인
        cy.get('.small-text.underline').click()
        cy.wait(500)

        //id & pw text input
        cy.get('.form_group > .lk-input > .lk-input-inner > [data-testid="-input"]').type('kyeonghwan')
        cy.get('[style="margin-bottom: 1.25rem;"] > .lk-input > .lk-input-inner > [data-testid="-input"]').type('@Dl2')
        cy.get('.lk-button').click()
        cy.wait(500)

        cy.contains('가입된 이메일이 아닙니다. 입력한 내용을 다시 확인해주세요.').should('exist')

        cy.get('.form_group > .lk-input > .lk-input-inner > [data-testid="-input"]').clear()
        cy.get('[style="margin-bottom: 1.25rem;"] > .lk-input > .lk-input-inner > [data-testid="-input"]').clear()

        cy.contains('필수 정보입니다.').should('exist')
        cy.wait(500)

        cy.get('.form_group > .lk-input > .lk-input-inner > [data-testid="-input"]').type('kyeonghwan.lee@liveklass.com')
        cy.get('[style="margin-bottom: 1.25rem;"] > .lk-input > .lk-input-inner > [data-testid="-input"]').type('@Dl292407')
        cy.wait(500)

        cy.get('.lk-button').click()
        cy.wait(500)

        //새로운 사이트 만들기
        cy.contains('새로운 사이트 만들기').click()
        cy.wait(500)

        //사이트 개설하기
        cy.get('[data-testid="create-site-site-name-input"]').type('1')
        cy.get('.container-input').type('1')
        cy.get('[data-testid="create-site-site-name-input"]').clear()
        cy.get('.container-input').clear()
        
        cy.contains('필수 정보입니다.').should('exist')
        cy.wait(500)

        cy.get('.lk-input-inner > input').type('경환이 테스트2')
        cy.get('.container-input').type('testlee002')
        cy.wait(500)

        cy.get('.btn-label > span').click()
    })

})
