
//declare global cache variables
var CACHE_NAME = 'test_site_mayur-cache-v1';
var urlsToCache = [
    '/'
    //add files later on 
];




self.addEventListener('install', function (event) {

    event.waitUntil(

        caches.open(CACHE_NAME)
        .then(function(cache){
            console.log('Cache Opened');
            cache.addAll(urlsToCache);
        })
            
        );
   

});