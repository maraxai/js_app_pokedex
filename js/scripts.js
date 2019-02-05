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

  //function addListItem(pokemon) {
function addListItem(pokemon) {
  for (var i = 0; i < pokemon.length; i++) {
    var $ul = document.querySelector('ul');
    var $li = document.createElement('li');
    $ul.appendChild($li);
    var $btn = document.createElement('button');
    $btn.classList.add('listButton');
    $li.appendChild($btn);
    $btn.innerText = pokemon[i].name;
    $btn.addEventListener('click', showDetails(pokemon));
    }
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
    getAll: getAll
    };
})();

pokemonRepository.getAll().forEach(function(pokemon) {
  if (pokemon.height > 4.33) {
    pokemon.name =  (pokemon.name + ' "Wow, that\'s big!"');
  }
  name = ['<h2>' + pokemon.name + '</h2>'];
  pic = ['<img src="img/' + pokemon.number + '.png">'];
  features = ('<ul>' +
    '<li>' + 'height: ' + pokemon.height +
    '<li>' + 'weight: ' + pokemon.weight +
    '<li>' + 'category: ' + pokemon.category +
    '<li>' + 'abilities: ' + pokemon.abilities +
    '<li>' + 'types: ' + pokemon.type + '</ul>');
  //document.write('<div>' + name + '<br>' + pic + '<br>' + features + '</div>');
  pokemons.addListItem(pokemon);
});
