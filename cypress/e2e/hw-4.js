describe('parametrized test', () => {
    const searchTerms = [
      {
        testData: {
        email: 'qwerty@test.w',
        password: '12345678'
      },
      expectedResult: {
        email: 'qwerty@test.w',
        password: '••••••••'
      }
    },
    {
        testData: {
        email: 'example@one',
        password: 'today456'
      },
      expectedResult: {
        email: 'example@one',
        password: '••••••••'
      }
    },
    {
        testData: {
        email: 'new@password',
        password: 'hey098-0'
      },
      expectedResult: {
        email: 'new@password',
        password: '••••••••'
      }
    }
    ];
  
  
  
  searchTerms.forEach(searchTerm=> {
  it('searchTerm: ${searchTerm.testData.email}', () => {
    cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');
    cy.get('[alt="Material Light Theme"]').click();
    cy.get('[title="Forms"]').click();
    cy.get('[title="Form Layouts"]').click();
  
  
    cy.get('#inputEmail1',{timeout:10000}).type(searchTerm.testData.email),
    cy.get('#inputEmail1').should('have.value',searchTerm.expectedResult.email),
  
    cy.get('#inputPassword2').type(searchTerm.testData.password),
    cy.get('#inputPassword2').invoke('val').should('have.length', 8); // Проверка длины пароля
  })
  })
  })