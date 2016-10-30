describe('unit 1.4', function() {


    beforeEach(function(){
        browser.get('http://localhost:8000/');
    })

  it('should display the proper page', function() {
        var allH1 = element.all(by.tagName("h1"));
        expect( allH1.get(0).getText() ).toContain('Mad With The Libs');
        expect( allH1.get(1).getText() ).toContain('3.14')
    });

    it('should display a verb ending in S', function(){
        var allSpans = element.all(by.tagName('span'));
        var allInputs = element.all(by.tagName('input'))
        allInputs.get(6).sendKeys('runs')

        expect(  allSpans.get(6).getText()  ).toBe('RUNS')
    })

});
