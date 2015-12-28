(function(){
  'use strict';

  angular.module('users')
         .service('userService', ['$q','$http', UserService]);

  /**
   * Users DataService
   * Uses embedded, hard-coded data model; acts asynchronously to simulate
   * remote data service call(s).
   *
   * @returns {{loadAll: Function}}
   * @constructor
   */
  function UserService($q,$http){
    var users = [
      {
        name: 'Travelog',
        avatar: 'svg-1',
        phone: 1,
        twitter: 'twitter.com/sparsh',
        content: 'Triund is a ridge surrounded by the Dhauladhars on one side and Kangra Valley on the other at an altitude of 2,810 metres. It is a one-day trek ( 10 km ) from McLoed Ganj bus stand and 6 km from Galu Temple near Dharamkot. In Dec the trail after 4 km, after magic cafe, is completely covered with snow and its advisable to have appropriate gears and equipments to avoid any accident. The slope keeps getting gradually steep but one doesn’t need to worry about anything if wearing the right shoes.'
// The 10 km trek is the most enthralling trek that you can experience in December. The Triund trek is only open till January first week because of heavy snow fall, however the trek doesn’t end at Triund. The place leads to a lahesh caves which is another 3 hours hike from Triund however we can only go up till Triund in December.

// Travelog : 
// You start your trek from either McLoadganj bus stand to Triund ( 10 km ) or taxis are available to reach Galu Temple from where the total distance is 6 km. 
// The trek distance from Gallu Temple is 6 kms, out of which the last four kilometers is fully or mildly covered with snow. 
// If you are a trekker and have had past winter trek experience this would be an invigorating experience and you would love to embrace the freshness of the unpigmented snow. 
// Those who have not had any past experience of winter trekking, just take guidance from the experienced. 

// While trekking down, there are claims that there are two routes one which is exact same path which has been taken while hiking and the other goes from Triund to Bhagsu-Nag waterfall. Kindly check the from the tea stall owners whether that route is preferable or not. 

// Must Have: 
// 1. Waterproof trekking shoes
// 2. Sleeping bag
// 3. Woolen gloves, socks and cap
// 4. Water bottle '
      },
      {
        name: 'Map',
        avatar: 'svg-2',
        phone: 2,
        content: 'Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris.'
      },
      {
        name: 'How to get there',
        avatar: 'svg-3',
        phone: 3,
        content: "Raw denim pour-over readymade Etsy Pitchfork. Four dollar toast pickled locavore bitters McSweeney's blog. Try-hard art party Shoreditch selfies. Odd Future butcher VHS, disrupt pop-up Thundercats chillwave vinyl jean shorts taxidermy master cleanse letterpress Wes Anderson mustache Helvetica. Schlitz bicycle rights chillwave irony lumberhungry Kickstarter next level sriracha typewriter Intelligentsia, migas kogi heirloom tousled. Disrupt 3 wolf moon lomo four loko. Pug mlkshk fanny pack literally hoodie bespoke, put a bird on it Marfa messenger bag kogi VHS."
      },
      {
        name: 'Lawrence Ray',
        avatar: 'svg-4',
        content: 'Scratch the furniture spit up on light gray carpet instead of adjacent linoleum so eat a plant, kill a hand pelt around the house and up and down stairs chasing phantoms run in circles, or claw drapes. Always hungry pelt around the house and up and down stairs chasing phantoms.'
      },
      {
        name: 'Ernesto Urbina',
        avatar: 'svg-5',
        content: 'Webtwo ipsum dolor sit amet, eskobo chumby doostang bebo. Bubbli greplin stypi prezi mzinga heroku wakoopa, shopify airbnb dogster dopplr gooru jumo, reddit plickers edmodo stypi zillow etsy.'
      },
      {
        name: 'Gani Ferrer',
        avatar: 'svg-6',
        content: "Lebowski ipsum yeah? What do you think happens when you get rad? You turn in your library card? Get a new driver's license? Stop being awesome? Dolor sit amet, consectetur adipiscing elit praesent ac magna justo pellentesque ac lectus. You don't go out and make a living dressed like that in the middle of a weekday. Quis elit blandit fringilla a ut turpis praesent felis ligula, malesuada suscipit malesuada."
      }
    ];

    // Promise-based API
    return {
      loadAllUsers : function() {
        // Simulate async nature of real remote calls
        return $q.when(users)
      },
      deleteUser : function(){
          users = users.slice(1);
        }
    };
  }

})();
