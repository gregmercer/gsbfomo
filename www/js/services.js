angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Friends', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var friends = [
    { id: 0, name: 'Scruff McGruff' },
    { id: 1, name: 'G.I. Joe' },
    { id: 2, name: 'Miss Frizzle' },
    { id: 3, name: 'Ash Ketchum' }
  ];

  return {
    all: function() {
      return friends;
    },
    get: function(friendId) {
      // Simple index lookup
      return friends[friendId];
    }
  }
})

/**
 * Nodes
 */
.factory('Nodes', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var nodes = [
    { 
      id: 0, 
      type: 'event',      
      title: 'Node 1 - Event',
      date: 'November 12, 2014',      
      body: 'Event 1',
      object: {
        image: 'img/change.jpg',        
      } 
    },   
    { 
      id: 1, 
      type: 'message',
      title: 'Node 2 - Message',
      date: 'Oct 13, 2014',      
      body: 'Message 1',
      object: {
        sender: 'sender 1',        
      } 
    },
    { 
      id: 2, 
      type: 'message',      
      title: 'Node 3 - Message',
      date: 'Nov 3, 2014 - 7:00pm - 8:30pm',      
      body: 'Message 2',
      object: {
        sender: 'sender 2',        
      } 
    },    
    { 
      id: 3, 
      type: 'event',      
      title: 'Node 4 - Event',
      date: 'October 23 - 26',
      body: 'Event 2',
      object: {
        image: 'img/event2.jpg',      
      } 
    }        
  ];

  return {
    all: function() {
      return nodes;
    },
    get: function(nodeId) {
      // Simple index lookup
      return nodes[nodeId];
    }
  }
})

/**
 * Events
 */
.factory('Events', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var events = [
    { 
      id: 0, 
      title: 'The Business of Change: Boston',
      date: 'November 12, 2014',      
      image: 'img/change.jpg', 
      body: 'Stanford GSB alumni and their guests are invited to get the ultimate insider\'s view into the heart and soul of Stanford GSB.' 
    },   
    { 
      id: 1, 
      title: 'Stocks and Bonds: Risks and Returns',
      date: 'Oct 13, 2014',      
      image: 'img/stocksbonds.jpg', 
      body: 'Join Stanford GSB finance professor Josh Rauh he explains the financial principles behind stocks and bonds in an upcoming self-paced course.' 
    },
    { 
      id: 2, 
      title: 'Stanford MSx Alumni Briefing & Information Session',
      date: 'Nov 3, 2014 - 7:00pm - 8:30pm',      
      image: 'img/event2.jpg', 
      body: 'Stanford MSx is a one-year, full-time program for experienced leaders (with eight or more years of work experience) that want to take their ideas — within large organizations or in an entrepreneurial environment — to the next level. This event will include an overview of the program by MSx alumnus and the Director of the MSx Program.  You’ll learn more about what it means to be a Fellow in the MSx Program and requirements of the application process, with an opportunity to ask questions of the program director and alumnus.' 
    },    
    { 
      id: 3, 
      title: 'Alumni Weekend',
      date: 'October 23 - 26',
      image: 'img/event4.jpg', 
      body: 'Alumni are invited back to campus to reunite with friends, and reconnect with the GSB' 
    }        
  ];

  return {
    all: function() {
      return events;
    },
    get: function(eventsId) {
      // Simple index lookup
      return events[eventsId];
    }
  }
});
