
$(function() {

    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


         it('allFeeds objects have URLs that are defined and not empty', function(){
            allFeeds.forEach(function(feed){
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            });
         });


         it('allFeeds objects have defined names and are not empty', function(){
            allFeeds.forEach(function(feed){
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            });
         });
    });


    describe("The menu", function(){

         it('Menu should be hidden by default', function(){
            expect($('body').hasClass("menu-hidden")).toBeTruthy();
         });

         it('Menu changes visibility when clicked.', function(){
            $(".menu-icon-link").trigger("click");
            //console.log(document.body.className);
            expect($('body').hasClass("menu-hidden")).not.toBeTruthy();
            $(".menu-icon-link").trigger("click");
            //console.log(document.body.className);
            expect($('body').hasClass("menu-hidden")).toBeTruthy();
         });
    });


    describe("Initial Entries", function(){

        beforeEach(function(done){
            loadFeed(0, done);
        });
        it('At least a single .entry element is within the .feed container', function(){
            expect($(".feed .entry").length).toBeGreaterThan(1);
        });
    });


    describe("New Feed Selection", function(){
        var initialFeed;
        beforeEach(function(done){
            loadFeed(0,function(){
               initialFeed = $(".feed").html();
               loadFeed(1, done);
            });
        });
        it('Content changes when new feed is loaded', function(){
            expect($(".feed").html()).not.toBe(initialFeed);
        });
    });
}());