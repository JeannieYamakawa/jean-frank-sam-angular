describe('unit 1.2', function() {


    beforeEach(function(){
        browser.get('http://localhost:8000');
    })

  it('should say My name is', function() {
        var nameAsker = element.all(by.tagName("h1"));
        expect( nameAsker.get(0).getText() ).toContain('My name is');
    });


    it('should display the pet chosen from dropdown', function() {
          var petLove = element(by.tagName("h3"));
          var myDropdown = element(by.model('pets'))

          myDropdown.sendKeys('Cats');
          expect( petLove.getText() ).toContain('Cats');

      });


      it('should display the name from the input box', function() {
            var personsName = element(by.tagName("h1"));
            element(by.id('name')).sendKeys('Jeannie');
            expect( personsName.getText() ).toContain('Jeannie');
        });

});
