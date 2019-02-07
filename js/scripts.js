var pokemonRepository = (function() {

  var pokemons = [
    {
      name : 'Bonsly',
      number : '438',
      height : 1.66,
      weight : 33.1,
      category : 'Bonsai',
      abilities : ['Rock Head', 'Sturdy'],
      type : ['Rock']
    },

    {
      name : 'Probopass',
      number : '476',
      height : 4.58,
      weight : 749.6,
      category : 'Compass',
      abilities : ['Sturdy', 'Magnet Pull'],
      type : ['Rock', 'Steel']
    },

    {
      name : 'Pikachu',
      number : '025',
      height : 1.33,
      weight : 13.2,
      category : 'Mouse',
      abilities : ['Static'],
      type : ['Electric']
    },

    {
      name : 'Oddish',
      number : '043',
      height : 1.66,
      weight : 11.9,
      category : 'Weed',
      abilities : ['Chlorophyll'],
      type : ['Grass', 'Poison']
    },

    {
      name : 'Digglet',
      number : '050',
      height : 0.66,
      weight : 1.8,
      category : 'Mole',
      abilities : ['Sand Veil', 'Arena Trap'],
      type : ['Ground']
    }
  ];

function addListItem(pokemon) {
  var $ul = document.querySelector('ul');
  var $li = document.createElement('li');
  $ul.appendChild($li);
  var $btn = document.createElement('button');
  $btn.classList.add('listButton');
  $li.appendChild($btn);
  $btn.innerText = pokemon.name;
  var $section = document.querySelector('section');
  $div = document.createElement('div');
  $div.classList.add('pokemonDetails');
  $section.appendChild($div);
  $btn.addEventListener('click', function (event) {
    showDetails();
  $div.innerHTML = 'name: ' + pokemon.name + '<br>' +
    '<img src="img/'+ pokemon.number + '.png" >' + '<br>' +
    'number: ' + pokemon.number + '<br>' +
    'height: ' + pokemon.height + '<br>' +
    'weight: ' + pokemon.weight + '<br>' +
    'category: ' + pokemon.category + '<br>' +
    'abilities: ' + pokemon.abilities + '<br>' +
    'type: ' + pokemon.type ;
    console.log(pokemon.name);
  });
}

function showDetails(pokemon) {
   console.log(pokemon);
}

  function add(pokemon) {
    pokemons.push(pokemon);
  }

  function getAll() {
    return pokemons;
  }

  return {
    add: add,
    getAll: getAll,
    addListItem : addListItem
    }
})();
/* this function is the gateway to the inner IIFE - for all records (getAll()) and each one of them (forEach())
the method addListItem() is invoked*/
pokemonRepository.getAll().forEach(function(pokemon) {
  pokemonRepository.addListItem(pokemon);
});
