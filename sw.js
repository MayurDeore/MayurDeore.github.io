
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



self.addEventListener('fetch', function (event) {


    event.respondWith(

        caches.match(event.request)
        .then(function (response) {

            if(response)
            {
                return response;
            }

            //clone request one for cache and one to fetch

            var requestToCache = event.request.clone();




            return fetch(requestToCache).then(function (response) {


                if (!response || response!==200 ||response!=='basic') {
                    return response;
                }

                var responseToCache = response.clone();

                caches.open(CACHE_NAME).
                    then(function (cache) {

                        cache.put(event.request, responseToCache);
                    });

                return response;


            });
        })


        );

});