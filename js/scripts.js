var pokemonRepository = (function() {

  var pokemons = [];

  var apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  function addListItem(pokemon) {
    var $ul = document.querySelector('ul');
    var $li = document.createElement('li');
    $ul.appendChild($li);
    var $btn = document.createElement('button');
    $btn.classList.add('listButton');
    $li.appendChild($btn);
    $btn.innerText = pokemon.name;

    // select the div for the PokemonDetails
    var $PokemonDiv = document.querySelector('div');
    //add a class name
    $PokemonDiv.classList.add('pokemonDetails');
    //onclick button will show details of selected Pokemon
    $btn.addEventListener('click', function (event) {
      showDetails(pokemon);
    $PokemonDiv.innerHTML = 'name: ' + pokemon.name + '<br>' +
    '<img src="' + pokemon.imageUrl + '" >' + '<br>' +
      'height: ' + pokemon.height + ' inches'+'<br>' +
      'type: ' + pokemon.types ;
      console.log(pokemon.name);
    });
  }

  function showDetails(item) {
    loadDetails(item);
    console.log(item);
  }

    function add(item) {
      pokemons.push(item);
    }

    function getAll() {
      return pokemons;
    }

    function loadList() {
      return fetch(apiUrl).then(function (response) {
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

pokemonRepository.loadList().then(function() {
    pokemonRepository.getAll().forEach(function(pokemon){
      pokemonRepository.addListItem(pokemon);
    });
});

  //  return {
    //  add: add,
    //  getAll: getAll,
  //    addListItem : addListItem
  //    }
/*})();*/
/* this function is the gateway to the inner IIFE - for all records (getAll()) and each one of them (forEach())
the method addListItem() is invoked*/
//pokemonRepository.getAll().forEach(function(pokemon) {
//  pokemonRepository.addListItem(pokemon);
//});
