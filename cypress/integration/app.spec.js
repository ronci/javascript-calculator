// - [V] 2개의 숫자에 대해 덧셈이 가능하다.
// - [V] 2개의 숫자에 대해 뺄셈이 가능하다.
// - [V] 2개의 숫자에 대해 곱셈이 가능하다.
// - [V] 2개의 숫자에 대해 나눗셈이 가능하다.
// - [V] AC(All Clear)버튼을 누르면 0으로 초기화 한다.
// - [V] 숫자는 한번에 최대 3자리 수까지 입력 가능하다.
// - [V] 계산 결과를 표현할 때 소수점 이하는 버림한다.

it('2개의 숫자에 대해 덧셈이 가능하다.', () => {
  cy.visit('index.html');

  cy.get('.digit').contains(2).click();
  cy.get('.operation').contains('+').click();
  cy.get('.digit').contains(9).click();
  cy.get('.operation').contains('=').click();

  cy.get('#total').should('have.text', 11);
});

it("2개의 숫자에 대해 뺄셈이 가능하다.", () => {
  cy.visit("index.html");

  cy.get(".digit").contains(9).click();
  cy.get(".operation").contains("-").click();
  cy.get(".digit").contains(2).click();
  cy.get(".operation").contains("=").click();

  cy.get("#total").should("have.text", 7);
});

it("2개의 숫자에 대해 곱셈이 가능하다.", () => {
  cy.visit("index.html");

  cy.get(".digit").contains(3).click();
  cy.get(".operation").contains("X").click();
  cy.get(".digit").contains(4).click();
  cy.get(".operation").contains("=").click();

  cy.get("#total").should("have.text", 12);
});

it("2개의 숫자에 대해 나눗셈이 가능하다.", () => {
  cy.visit("index.html");

  cy.get(".digit").contains(4).click();
  cy.get(".operation").contains("/").click();
  cy.get(".digit").contains(2).click();
  cy.get(".operation").contains("=").click();

  cy.get("#total").should("have.text", 2);
});

it("AC(All Clear)버튼을 누르면 0으로 초기화 한다.", () => {
  cy.visit("index.html");

  cy.get(".digit").contains(2).click();
  cy.get(".modifier").contains("AC").click();

  cy.get("#total").should("have.text", 0);
});

it("숫자는 한번에 최대 3자리 수까지 입력 가능하다.", () => {
  cy.visit("index.html");

  cy.get(".digit").contains(2).click();
  cy.get(".digit").contains(2).click();
  cy.get(".digit").contains(2).click();
  cy.get(".digit").contains(2).click();

  cy.get("#total").should("have.text", 222);
});

it("계산 결과를 표현할 때 소수점 이하는 버림한다.", () => {
  cy.visit("index.html");

  cy.get(".digit").contains(3).click();
  cy.get(".operation").contains("/").click();
  cy.get(".digit").contains(2).click();
  cy.get(".operation").contains("=").click();

  cy.get("#total").should("have.text", 1);
});