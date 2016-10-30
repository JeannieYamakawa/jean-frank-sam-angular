describe('unit 1.5', function() {

    //
    // beforeEach(function(){
    //     browser.get('http://localhost:8000/camera.html');
    // })


    it('should list out all values with multiple occurrences', function(){
        browser.get('http://localhost:8000');
        var myArray = element.all(by.css('.numsArray'));
        expect(myArray).toBeDefined();
        expect(  myArray.get(7).getText()  ).toBe('9');
        expect(  myArray.get(5).getText()  ).toBe('9');
    })

    it('should get the camera page', function(){
        browser.get('http://localhost:8000/camera.html');
        var cameraDropdown = element(by.model('dropMenu'));
        expect(cameraDropdown).toBeDefined();
    })


    it('should sort cameras by rating', function(){
        browser.get('http://localhost:8000/camera.html');

        var cameraDropdown = element(by.model('dropMenu'));
        cameraDropdown.sendKeys('rating');

        var allCameras = element.all(by.css('.singleCamera'));

        expect(  allCameras.last().getText()  ).toContain('4.2');
        expect(  allCameras.first().getText() ).toContain('Rating: 2')

    })

});
