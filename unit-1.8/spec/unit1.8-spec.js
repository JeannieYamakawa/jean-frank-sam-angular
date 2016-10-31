describe('unit 1.8', function() {


    beforeEach(function(){
        browser.get('http://localhost:8000/');
    })

    it('should say booyah', function(){

        var myh1 = element(by.tagName('h1'));

        expect(  myh1.getText()  ).toContain('booyah');
    })


    it('should reverse a word', function(){

        var myInput = element(by.css('.reverse-input'));
        var myButton = element(by.css('.button'));
        var myDisplay = element(by.css('.reversed-word'));

        myInput.sendKeys('Jeannie');
        myButton.click();
        expect( myDisplay.getText() ).toBe('einnaeJ');
    })


    it('should display the 2 players scores', function(){
        var player1ScoreDiv = element(by.css('#player1ScoreDiv'));
        var player2ScoreDiv = element(by.css('#player2ScoreDiv'));

        expect( player1ScoreDiv.getText() ).toBeDefined();
        expect( player2ScoreDiv.getText() ).toBeDefined();
    });


    it('should have clickable divs to increment each players scores', function(){
        var player1ScoreDiv = element(by.css('#player1ScoreDiv'));
        var player2ScoreDiv = element(by.css('#player2ScoreDiv'));
        var score1 = element(by.css('.score1'));
        var score2 = element(by.css('.score2'));
        player1ScoreDiv.click();
        player1ScoreDiv.click();
        player2ScoreDiv.click();
        expect( score1.getText() ).toBe('2');
        expect( score2.getText() ).toBe('1');
    });

    //
    // it('should highlight the winner when score reaches 11', function(){
    //     var player1ScoreDiv = element(by.css('#player1ScoreDiv'));
    //     var player2ScoreDiv = element(by.css('#player2ScoreDiv'));
    //
    //
    //
    //
    // });


    // It should also display the current server (switch serves every 2 points).
    //it should include a working reset button.
});
