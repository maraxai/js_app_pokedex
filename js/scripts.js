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

for (var i = 0; i < repository.length; i++) {
  if (repository[i].height > 4.33) {
    repository[i].name =  (repository[i].name + ' "Wow, that\'s big!"');
  }
  var name = ['<h2>' + repository[i].name + '</h2>'];
  var pic = ['<img src="img/' + repository[i].number + '.png">'];
  var features = ('<ul>' +
    '<li>' + 'height: ' + repository[i].height +
    '<li>' + 'weight: ' + repository[i].weight +
    '<li>' + 'category: ' + repository[i].category +
    '<li>' + 'abilities: ' + repository[i].abilities +
    '<li>' + 'types: ' + repository[i].type + '</ul>');
  document.write('<div>' + name + '<br>' + pic + '<br>' + features + '</div>');
}
