app.controller("GalleryCtrl", function($scope, Lightbox, $rootScope) {
    $rootScope.title = 'Gallery';
    
    $scope.images = [
        {
            'url': 'app/layout/images/thumbs/gallery-item-1-big.jpg',
            'caption': 'Optional caption',
            'thumbUrl': 'app/layout/images/thumbs/gallery-item-1.jpg' // used only for this example
        },
        {
            'url': 'app/layout/images/thumbs/gallery-item-4-big.jpg',
            'thumbUrl': 'app/layout/images/thumbs/gallery-item-4.jpg'
        },
        {
            'url': 'app/layout/images/thumbs/gallery-item-6-big.jpg',
            'thumbUrl': 'app/layout/images/thumbs/gallery-item-6.jpg'
        },
        {
            'url': 'app/layout/images/thumbs/gallery-item-2-big.jpg',
            'thumbUrl': 'app/layout/images/thumbs/gallery-item-2.jpg'
        },
        {
            'url': 'app/layout/images/thumbs/gallery-item-5-big.jpg',
            'thumbUrl': 'app/layout/images/thumbs/gallery-item-5.jpg'
        },
        {
            'url': 'app/layout/images/thumbs/gallery-item-7-big.jpg',
            'thumbUrl': 'app/layout/images/thumbs/gallery-item-7.jpg'
        },
        {
            'url': 'app/layout/images/thumbs/gallery-item-8-big.jpg',
            'thumbUrl': 'app/layout/images/thumbs/gallery-item-8.jpg'
        },
        {
            'url': 'app/layout/images/thumbs/gallery-item-3-big.jpg',
            'thumbUrl': 'app/layout/images/thumbs/gallery-item-3.jpg'
        }
    ];

    $scope.openLightboxModal = function (index) {
        Lightbox.openModal($scope.images, index);
    };

    var msnry = new Masonry( '.grid', {
        columnWidth: '.grid-sizer',
        itemSelector: '.grid-item',
        percentPosition: true
    });
});