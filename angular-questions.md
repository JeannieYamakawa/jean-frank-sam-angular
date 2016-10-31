
Type the three command line commands below:
Admins-MacBook-Pro-4:unit-1.1 admin$ jasmine init
Admins-MacBook-Pro-4:unit-1.1 admin$ npm init
Admins-MacBook-Pro-4:unit-1.1 admin$ touch conf.js


Now: copy in the configuration from the protractor website link to conf.js. Should look like below.

exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['spec/unit1.1-spec.js']
};

OR

exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['spec/*.js']
};

Now, write in your package.json scripts object: "test": "protractor conf.js"


open new terminal tab in the same folder and type: webdriver-manager start

open new terminal tab in the same folder and type: python -m SimpleHTTPServer

check to see that localhost8000 has a web page it's rendering in the browser(do a booyah test in the html)


copy the sample test from the protractor website into your spec.js test document and replace the "get" angular website with "http://localhost:8000"

Now you should be ready to run "npm test" command in a third terminal window (make sure you're in the same directory as the other two tabs)





## Questions
### Unit 1.1
* Why learn Angular JS over other frameworks like Ember, Backbone, Knockout, etc?
According to Zubair, it's popular! :)


* People have some very strong opinions about Angular. What are 3 common complaints people have about Angular?

Complexity, dependency injection is not minification friendly, slow performance if too much data is bound.

* Is Angular an MVC framework?
Yes. Angular's model is comprised of the objects storing data, the view is the DOM, and the controllers are created in JavaScript as classes. The distinction is not as clear, perhaps, as other MVC frameworks.


* Turn to the Angular docs. Find `ng-app`. What is it and what does it do? What does `ng` stand for?
ng = "angular"... ng-app turns on angular for your document. It lets your document know to look for tags containing angular.



* What does ng-model do?
It allows Angular to save data from a specified area for later use.

* What is "dirty checking"?
It's the constant interaction of Angular checking for changes between the view and the model. It's another word for the digest cycle.


* Find a way to set the initial value of "name" as "BoJack" (without writing a controller).



* What are those {{ }} expressions? Are they Handlebars?
They are Angular's way of identifying where it should replace placeholders with data. Yes, maybe?

* Explain what two-way data binding is.
It's a synchronization of data between the model object and view. When the view changes, the model changes, and vice versa.


* BONUS: Research the $digest loop
$watch function runs and includes $apply, which forces changes to happen on $scope and corresponding changes to $compile data and render it on the DOM.



* What are Angular expressions? How do they compare to tags from templating engines you've used before?
Expressions are what's contained in the brackets. They're way easier to use! The syntax is simpler. Also, the data that they contain can come straight from the HTML itself.


* What happens when you write invalid code in an expression? What type of error do you get?
You see the curly brackets and whatever other characters you've typed on screen.


* What are Angular filters? Describe what a filter does and then name four built-in filters, including one that we haven't used yet.
Filters are built-in formatting tools for the data you're rendering. Four are: uppercase, currency, lowercase, and json.

* What's the syntax for filters?
It's a pipe, followed by whatever filter name you're using, followed by a specified parameter for that filter.


* Can you use more than one filter?
yes.


* We'll soon see how to create custom filters. What is a use case for a custom filter?
Uh...whatever you want it to be! :)

* What is the purpose of `ng-init`?
It's used to evaluate expressions.


* Why use `ng-src` and `ng-href`?
These directives should be used instead of regular src and href if you have AngularJS code inside the src/href value.
They make sure the link is not broken even if the user clicks the link before AngularJS has evaluated the code.



* What are directives?
They are extended HTML attributes with the prefix ng-. They say "hey, I contain Angular data!"


* Does `ng-class` require an object to be passed in?
No, it doesn't. It can just be a class name.

* What order does an ng-repeat display items in?
It displays in whatever order you tell it to.


* How does `ng-repeat` handle duplicate data?
It does not display anything until you specify to "track by _____."


* What is `$scope`?
* What are Angular modules? What's the syntax for defining a module?
* Why do we pass in `$scope` as an argument to controller functions?
* In Express, what are Angular controllers most analogous to?
