// begin IIFE (Immediately Invoked Function Expression), purpose: avoid global pollution
var pokemonRepository = (function() {
  // array for API (Application Program Interface) elements and their properties (Pokemons)
  var pokemons = [];
  // API URL to a database
  var apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
  // DOM (Document Object Model) Modification, i.e. creation of HTML elements in conjunction with API records
  function addListItem(pokemon) {
    //DOM search for first <ul> tag in HTML document
    var $ul = document.querySelector('ul');
    //DOM creation of <li> <tag>
    var $li = document.createElement('li');
    //DOM attachment of newly created li element to ul element
    $ul.appendChild($li);
    //DOM creation of button element
    var $btn = document.createElement('button');
    //DOM creation of class indentifier
    $btn.classList.add('listButton');
    $li.appendChild($btn);
    $btn.innerText = pokemon.name;

    // select the div for the PokemonDetails
    var $PokemonDiv = document.querySelector('div');
    //add a class name
    $PokemonDiv.classList.add('pokemonDetails');
    /*add event listener to button, on 'click', an anonymous function with the parameter 'event' will be executed
    the function invokes the function showDetails and the designated property values of the Pokemon element array are listed
    Interesting: I tried to place the code line31-35 in the showDetails function (because it just makes sense) but somehow
    it did not work and had to place it back here, no detail content if this code is missing*/
    $btn.addEventListener('click', function (event) {
      showDetails(pokemon);
      $PokemonDiv.innerHTML = 'name: ' + pokemon.name + '<br>' +
    '<img src="' + pokemon.imageUrl + '" >' + '<br>' +
      'height: ' + pokemon.height + ' inches'+'<br>' +
      'type: ' + pokemon.types ;
      console.log(pokemon.name);
    });
  }
  /* I am confused why showDetails in line 29 has pokemon as a parameter and in line 39, item
  the function loads *loadDetails) the objects of the API data (item) that are dumped in the array pokemons
  the method .then*() 'normally 'returns a Promise (a callback function) - normally with error code / but where is the promise*/
  function showDetails(item) {
    pokemonRepository.loadDetails(item).then(function() {
    $PokemonDiv.innerHTML = 'name: ' + item.name + '<br>' +
    '<img src="' + item.imageUrl + '" >' + '<br>' +
      'height: ' + item.height + ' inches'+'<br>' +
      'type: ' + item.types ;
      console.log(item.name);
    });
  }
  // adds an API record to the array pokemons with the .push method
  function add(item) {
    pokemons.push(item);
  }
  //return all records from the array pokemons
  function getAll() {
    return pokemons;
  }
  // function loads the API list -
  function loadList() {
    /* 'fetch' requests the API data,
    a promise with a resolved (.then()) and a rejection case (.catch())
    is returned with the .json() method - here's the asynchronous function
    NO REAL CLUE WHAT IS REALLY GOING ON HERE - I WOULD HAVE TO CHECK
    THIS OUT ON MY OWN, LINE BY LINE, FOR 2 WEEKS AT LEAST*/
    return fetch(apiUrl)
      .then(function (response) {
      return response.json();
    })
      .then(function (json) {
        json.results.forEach(function (item) {
          var pokemon = {
            name: item.name,
            detailsUrl: item.url
          };
          add(pokemon);
        });
      })
      .catch(function (e) {
       console.error(e);
     })
  }
  // similar to lines 66-80, i.e. asynchronous function, get details from API
  function loadDetails(item) {
    var url = item.detailsUrl;
    return fetch(url)
      .then(function (response) {
      return response.json();
      })
      .then(function (details) {
        // Now we add the details to the item
        item.name = details.name;
        item.imageUrl = details.sprites.front_default;
        item.height = details.height;
        item.types = Object.keys(details.types);
      })
      .catch(function (e) {
        console.error(e);
      });
  }
  // I guess this is a better way to NOT forget the returns of all functions?
   return {
       add: add,
       getAll: getAll,
       //search: search,
       loadList: loadList,
       showDetails : showDetails,
       loadDetails: loadDetails,
       addListItem : addListItem
   };
})();
//END OF IIFE

/*the remaining codes calls functions within the IIFE /
function loadList is applied as a method to the array of pokemons / .then() refers
to promises but where is the promise here?
I HAVE NO CLUE WHAT IS REALLY GOING ON HERE, IT'S A FUNCTION IN THE FUNCTION IN THE FUNCTION*/
pokemonRepository.loadList().then(function() {
    pokemonRepository.getAll().forEach(function(pokemon){
      //the function addListItem is applied as a method to the array of the records / DOM
      pokemonRepository.addListItem(pokemon);
    });
});
