var app = angular.module( 'firstReddit', [ 'ngAnimate' ] );

app.controller( 'reddit', [ '$scope', function( $scope ) {
    $scope.myValue = false;
    $scope.myValueComment = false;
    // $scope.valueCommentViewAll = false;


    $scope.newPostClicked = function() {
        $scope.myValue = true;
        $scope.postInputFields = {}; //ensures user is starting with a blank post form
    }


    $scope.newCommentClicked = function() {
        $scope.myValueComment = true;
        //??not sure if "this" below is correct
        this.commentInputFields = {}; //ensures user is starting with a blank comment form
    }

    $scope.postList = {};

    $scope.postList.posts = [ {
            title: 'zzpost1 title',
            author: 'Jeannie',
            image: 'http://placekitten.com/200/300',
            description: 'Inani admodum has ne. Ei graeco consulatu splendide quo, duo ne nisl mazim vivendo. Porro choro veniam et his, errem choro nec at, at tale congue veniam sed. Pro ei diam eloquentiam. Ut platonem hendrerit mel, ei probo interesset duo, ei has maluisset torquatos. Porro quidam suavitate eu pri.',
            date: new Date(),
            numberOfVotes: 0,
            comments: [ {
                author: 'Jeannie',
                text: 'aww, yes'
            }, {
                author: '1Jeannie',
                text: 'aww, yes1'
            } ],
            commentInputFields: {},
            valueCommentViewAll: false
        }, {
            title: 'post2 title',
            author: 'Jeansey',
            image: 'http://placekitten.com/400/300',
            description: '2she is so cute!',
            date: new Date(),
            numberOfVotes: -4,
            comments: [ {
                author: '2Jeannie',
                text: '2aww, yes'
            }, {
                author: '2Jeannie2',
                text: '2aww, yes2'
            } ],
            commentInputFields: {},
            valueCommentViewAll: false
        },

        {
            title: 'post3 title',
            author: 'JeanBob',
            image: 'http://placekitten.com/300/300',
            description: 'Lorem ipsum dolor sit amet, eam decore graeco singulis ei, sit te nihil quando. Erant nostro deleniti his et, eam integre vocibus deleniti cu. Mazim eirmod audire ei vis, et laudem eleifend vulputate qui. Id sit nostrud impedit, appareat pericula petentium ut mei, feugiat albucius mentitum qui at.',
            date: new Date(),
            numberOfVotes: 6,
            comments: [ {
                author: '3Jeannie',
                text: '3aww, yes'
            }, {
                author: '3Jeannie3',
                text: '3aww, yes3'
            } ],
            commentInputFields: {},
            valueCommentViewAll: false
        },

    ];


    $scope.addPost = function( someText, usersName, imageURL, inputDesc ) {
        var newPost = {
            title: someText,
            author: usersName,
            image: imageURL,
            description: inputDesc,
            date: new Date(),
            numberOfVotes: 0,
            comments: [],
            commentInputFields: {},
            valueCommentViewAll: false
        }
        $scope.postList.posts.push( newPost )
            // console.log(newPost, "new Post");
        $scope.myValue = false;
    };


    $scope.addComment = function( usersName, someText ) {
        this.commentInputFields = {
            author: usersName,
            text: someText,
            date: new Date()
        };
        this.post.comments.push( this.commentInputFields )
        $scope.myValueComment = false;
    };

    $scope.viewCommentsClicked = function() {
        console.log(this.post.valueCommentViewAll);
        this.post.valueCommentViewAll = !this.post.valueCommentViewAll
        console.log(this.post.valueCommentViewAll);

    }


    $scope.upClicked = function( post ) {
        post.numberOfVotes++
    }

    $scope.downClicked = function( post ) {
        post.numberOfVotes--
    }

} ] )
