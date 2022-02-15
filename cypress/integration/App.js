describe('ncnc-app 방문', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('displays two todo items by default', () => {
        cy.get(
            '[style="box-sizing:border-box;display:inline-block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:relative;max-width:100%"] > [alt="menu"]',
        ).click();
        cy.get('.css-zobes2').contains('고객센터').click();
        cy.get('.css-1ifz5kw').contains('고객센터');
        cy.get(':nth-child(1) > .css-1eugq34').click();
        cy.get('.css-1245hb1')
            .contains(
                '니콘머니, 모바일 쿠폰은 현금성 유가증권에 해당되므로, 현금영수증이 별도로 발행되지 않습니다. 매장에서 구매하신 쿠폰으로 결제시 직원에게 요청하시면 발급이 가능합니다. 단, 일부 이벤트 쿠폰의 경우 현금 영수증 발행이 불가할 수 있으며 해당 사유로는 환불이 불가한 점 양해 부탁드립니다.',
            )
            .should('be.visible');
        cy.get('button[id="2"]').click();
        cy.get(':nth-child(1) > .css-1eugq34 > .css-1t8eddt').contains(
            '바로 정산은 안 되나요?',
        );
        cy.get('.css-18tfhk1').click();
        cy.get(':nth-child(1) > .css-1v0qy5v').click();
        cy.get(
            ':nth-child(1) > .css-n8sqfl > .css-a3z6ut > :nth-child(1) > b',
        ).contains('모바일금액권 1만원권');
        cy.get('.css-9qnqrv > :nth-child(2)').click();
        cy.get(':nth-child(1) > .css-1v0qy5v').contains('스타벅스');
        cy.get(':nth-child(1) > .css-1v0qy5v').click();
        cy.get('.css-12z5rc5').contains('42개의 상품');
        cy.get('.css-17l1kxv > p').contains('스타벅스');
        cy.get(':nth-child(1) > .css-n8sqfl').click();
        cy.get('.css-1em771j').contains('옵션 선택하기');
        cy.get('.css-1em771j').click();
        cy.get('.css-1rhyngr').contains('구매하기');
        cy.get(':nth-child(1) > .css-18nc8lv > .css-wkxndf')
            .contains('유효기간')
            .should('be.visible');
        cy.get(':nth-child(1) > .css-18nc8lv > .css-wkxndf').click();
        cy.get('.css-1ti8j62').contains('원').should('be.visible');
        cy.get('.css-1ti8j62').click();
        cy.get('.css-qzmnd2 > button').click();
        cy.get('.css-1em771j').contains('옵션 선택하기');

        cy.get('.css-18tfhk1').click();
        cy.get('.css-17l1kxv').contains('스타벅스');
        cy.get('.css-18tfhk1').click();
        cy.get('.css-17l1kxv').contains('카페');
        cy.get('.css-18tfhk1').click();
        cy.get('.css-17l1kxv').contains('땡철이');
        cy.get('.css-18tfhk1').click();
        cy.get('.css-17l1kxv').contains('니콘내콘');
    });
});
