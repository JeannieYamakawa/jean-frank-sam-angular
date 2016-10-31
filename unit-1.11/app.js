var app = angular.module('firstReddit', ['ngAnimate']);

app.controller('reddit', ['$scope', function($scope){
    $scope.myValue = false;

    $scope.newPostClicked = function(){
        $scope.myValue = true;
        $scope.postInputFields ={};
    }
    $scope.postList = {};
    $scope.postList.posts = [
        {
            title: 'post1 title',
            author: 'Annie',
            image: 'http://placekitten.com/200/300',
            description: 'Inani admodum has ne. Ei graeco consulatu splendide quo, duo ne nisl mazim vivendo. Porro choro veniam et his, errem choro nec at, at tale congue veniam sed. Pro ei diam eloquentiam. Ut platonem hendrerit mel, ei probo interesset duo, ei has maluisset torquatos. Porro quidam suavitate eu pri.',
            date: '2016-1-31T03:09:44.747Z',
            numberOfVotes: 0,
            comments: [{
                author: 'Jeannie',
                text: 'aww, yes'
                },
                {
                author: 'Jeannie2',
                text: 'aww, yes2'
                    }]
    },
        {
        title: 'post2 title',
        author: 'Leeann',
        image: 'http://placekitten.com/400/300',
        description: '2she is so cute!',
        date: '2016-4-31T03:09:44.747Z',
        numberOfVotes: -4,
        comments: [{
            author: '2Jeannie',
            text: '2aww, yes'
            },
            {
            author: '2Jeannie2',
            text: '2aww, yes2'
                }]
    },
    {
    title: 'post3 title',
    author: 'JeanBob',
    image: 'http://placekitten.com/300/300',
    description: 'Lorem ipsum dolor sit amet, eam decore graeco singulis ei, sit te nihil quando. Erant nostro deleniti his et, eam integre vocibus deleniti cu. Mazim eirmod audire ei vis, et laudem eleifend vulputate qui. Id sit nostrud impedit, appareat pericula petentium ut mei, feugiat albucius mentitum qui at.',
    date: '2016-2-31T03:09:44.747Z',
    numberOfVotes: 6,
    comments: [{
        author: '3Jeannie',
        text: '3aww, yes'
        },
        {
        author: '3Jeannie3',
        text: '3aww, yes3'
            }]
        },

    ];


    $scope.addPost = function(someText, usersName, imageURL, inputDesc){
        var newPost = {
            title: someText,
            author: usersName,
            image: imageURL,
            description: inputDesc,
            date: new Date(),
            numberOfVotes: 0,
            comments: []
        }
        $scope.postList.posts.push(newPost)
        console.log(newPost, "new Post");
        $scope.myValue = false;

    };

    $scope.upClicked = function(post){
        post.numberOfVotes++
    }

    $scope.downClicked = function(post){
        post.numberOfVotes--
    }

}])
