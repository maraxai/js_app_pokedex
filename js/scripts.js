var pokemonRepository = (function() {

  var repository = [
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

  function add(element) {
    repository.push();
  }

  function getAll() {
    return repository;
  }

  repository.forEach(function(element) {
    if (element.height > 4.33) {
      element.name =  (element.name + ' "Wow, that\'s big!"');
    }
    name = ['<h2>' + element.name + '</h2>'];
    pic = ['<img src="img/' + element.number + '.png">'];
    features = ('<ul>' +
    '<li>' + 'height: ' + element.height +
    '<li>' + 'weight: ' + element.weight +
    '<li>' + 'category: ' + element.category +
    '<li>' + 'abilities: ' + element.abilities +
    '<li>' + 'types: ' + element.type + '</ul>');
    document.write('<div>' + name + '<br>' + pic + '<br>' + features + '</div>');
  });
})();

pokemonRepository.getAll(element).forEach(function(element) {
  repository.addListItem(element);
});
