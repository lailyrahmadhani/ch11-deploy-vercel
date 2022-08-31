describe('My First Test', () => {
    it('Visits Sample-Next', () => {
      cy.visit('http://localhost:3000/')

      cy.get('a[href*="tentang-kami"]').click();
      cy.get("h1").contains("Tentang Kami");

    })
  })

  describe('Login', () => {
    it('Successfully login', () => {
        

      cy.get('a[href*="login"]').click();
      cy.url().should("include", "/login");
      cy.get("input[name=username]").type("laily");
      cy.get("input[name=password]").type("123");
      cy.get("form").submit();
    })

    it('Successfully logout', () => {

        // cy.get('data-testid="logout”').click();
        cy.contains('Logout').click()
        cy.url().should("include", "/tentang-kami");

      })
  

    it("should display error when username or password is incorrect", () => {
        cy.get('a[href*="login"]').click();
        cy.url().should("include", "/login");
    cy.get("input[name=username]").type("abcdef");
    cy.get("input[name=password]").type("abcdef{enter}");
    cy.get(".alert").should("have.text", "Username atau Password salah!");
  })
})

