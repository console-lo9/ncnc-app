describe('Main Test', () => {
    it('Click into main', () => {
        cy.visit('/');
    });
});

describe('마이페이지 테스트', () => {
    it('Click into button', () => {
        cy.get(
            '[style="box-sizing:border-box;display:inline-block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:relative;max-width:100%"] > [alt="menu"]',
        ).click();
        cy.get(
            '[src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FcloseButton.f2264892.svg&w=64&q=75"]',
        ).click();
    });
});

describe('메인 버튼 테스트', () => {
    it('Click into button', () => {
        cy.get(
            ':nth-child(1) > .css-1v0qy5v > .css-5ra6k4 > .css-41tqbh',
        ).click();
        cy.get(':nth-child(1) > .css-n8sqfl').click();
        cy.get('.css-1em771j').click();
        cy.get(':nth-child(1) > .css-18nc8lv > .css-wkxndf').click();
        cy.get('.css-dfjll8').click();
    });
});

describe('뒤로 가기 테스트', () => {
    it('Click into button', () => {
        cy.get('.css-18tfhk1').click;
        cy.get('.css-18tfhk1').click;
        cy.get('.css-18tfhk1').click;
    });
});
