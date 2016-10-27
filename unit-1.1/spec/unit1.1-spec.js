describe('unit 1.1', function() {


    beforeEach(function(){
        browser.get('http://localhost:8000');
    })

  it('should say hello', function() {

        // element(by.model('greeting'))
        // element(by.css('[class = "my_class"]'))


        // expect( element.all(by.tagName("input")).get(0).getText() ).toContain('world');

        expect( element.all(by.tagName("p")).get(1).getText() ).toContain('world');
        // expect(true).toBe(false);
        // expect(todoList.get(2).getText()).toEqual('write first protractor test!!!!!!!!!!');
    });

});
