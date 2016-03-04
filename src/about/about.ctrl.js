/* CONTROLLER FOR INDEX */
app.controller('abtCtrl', ['$scope',/* 'serv', */ function($scope/*, serv*/) {
    abt = this;
    abt.icons = [
        {
            alt: 'angular',
            src: 'http://www.w3schools.com/angular/pic_angular.jpg',
            url: 'https://angularjs.org/'
        },
        {
            alt: 'angular-material',
            src: 'http://webdesignledger.com/wp-content/uploads/2015/08/angularjs-materialDesign.png',
            url: 'https://material.angularjs.org/latest/'
        },
        {
            alt: 'babel/es6',
            src: 'https://cms-assets.tutsplus.com/uploads/users/71/courses/608/preview_image/babel-1.png',
            url: 'https://babeljs.io/'
        },
        {
            alt: 'bootstrap',
            src: 'https://academy.zenva.com/wp-content/uploads/2014/08/Bootstrap-3.jpg',
            url: 'http://getbootstrap.com/'
        },
        {
            alt: 'bower',
            src: 'https://assets.digitalocean.com/articles/bower/zlrTjni.png',
            url: 'http://bower.io/'
        },
        {
            alt: 'express',
            src: 'http://m03s6dh33i0jtc3uzfml36au.wpengine.netdna-cdn.com/wp-content/uploads/sinatra-inspired-web-development-framework-for-node-express.jpg',
            url: 'http://expressjs.com/'
        },
        {
            alt: 'git',
            src: 'https://git-for-windows.github.io/img/git_logo.png',
            url: 'https://git-scm.com/'
        },
        {
            alt: 'gulp',
            src: 'https://raw.githubusercontent.com/gulpjs/artwork/master/gulp-2x.png',
            url: 'http://gulpjs.com/'
        },
        {
            alt: 'javascript/es5',
            src: 'https://www.codementor.io/assets/page_img/learn-javascript.png',
            url: 'https://www.javascript.com/'
        },
        {
            alt: 'jquery',
            src: 'http://ejohn.org/apps/workshop/intro/jquery_logo.png',
            url: 'https://jquery.com/'
        },
        {
            alt: 'mongodb',
            src: 'http://adrianmejia.com/images/mongodb.png',
            url: 'https://www.mongodb.org/'
        },
        {
            alt: 'mongoose',
            src: 'http://i69.fastpic.ru/big/2015/0618/88/afa78826b3d4749847256c058b180d88.png',
            url: 'http://mongoosejs.com/'
        },
        {
            alt: 'nodejs',
            src: 'http://nodejs.org/images/logos/nodejs-green.png',
            url: 'https://nodejs.org/en/'
        },
        {
            alt: 'sass',
            src: 'http://www.himpfen.com/wp-content/uploads/2016/01/sass.png',
            url: 'http://sass-lang.com/'
        }
    ];

 /* uncomment for blank variable and function */
 /*
    $scope.thing = "value";
    $scope.stuff = function() {
        return "whatever";
    };
*/
/* uncomment to get data from db (remove comments in controller and service) */
    /*
    serv.get().then(function(d) {
        if (d.data) {
            $scope.dbinfo = d.data;
            console.log("dbinfo retrieved");
        }   else {console.log("nodata");}
    });
*/
}]);//end mainCtrl
