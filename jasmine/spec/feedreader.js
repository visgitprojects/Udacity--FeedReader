/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */

$(function() {
    /* suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /*test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         var feed;
        it('has urls', function() {
          for(feed in allFeeds) {
            expect(allFeeds[feed].url).toBeDefined();
            expect(allFeeds[feed].url).not.toBe(null);
            expect(allFeeds[feed].url).not.toBe('');
            expect(allFeeds[feed].hasOwnProperty('url')).toBe(true);
          }
        });


        /* test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it('has name', function() {
           for(feed in allFeeds) {
             expect(allFeeds[feed].name).toBeDefined();
             expect(allFeeds[feed].name).not.toBe(null);
             expect(allFeeds[feed].name).not.toBe('');
             expect(allFeeds[feed].hasOwnProperty('name')).toBe(true);
           }
         });
    });



    /* test suite named "The menu" */
    describe('The menu', function() {
        var menu= document.getElementsByTagName('body');
        const menuIcon = document.querySelector('.menu-icon-link');

        /*  test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        it('is hidden', function() {
          expect(menu[0].classList.contains('menu-hidden')).toBe(true);
        });


         /* test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
          it('is visible/invisilbe when clicked', function() {
            menuIcon.click();
            expect(menu[0].classList.contains('menu-hidden')).toBe(false);
            menuIcon.click();
            expect(menu[0].classList.contains('menu-hidden')).toBe(true);


          });


    });


    /* test suite named "Initial Entries" */
    describe('Initial Entries', function() {


        /* test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */
         var feed;
         //const feedEntries = feed.getElementsByClassName('entry');
         beforeEach(function(done) {
            loadFeed(0, function() {
                feed = document.querySelectorAll('.feed .entry');
                loadFeed(1, done);
              });
          });


         it('initial element is there', function(){
             expect(feed.length).toBeGreaterThan(0);
         });

    });

    /*test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {
      /* test that ensures when a new feed is loaded
       * by the loadFeed function that the content actually changes.
       */

      var newFeed ;

      beforeEach(function(done) {
          loadFeed(0, function() {
              newfeed = document.querySelector('.feed');
              loadFeed(1, done);
          });
      });

    // Check the newsfeed  html to be not same as previous.
        it('is loaded', function(){
            expect(document.querySelector('.feed')).not.toEqual(newFeed);
          });
        });




    });
