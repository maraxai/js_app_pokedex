
var pokemonRepository = (function() {
  var pokemons = [];
  var apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=10';

  function addListItem(item) {
    showDetails(item);

    var $ul = document.querySelector('ul');
    var $li = document.createElement('li');
    var $btn = document.createElement('button');
    $btn.classList.add('listButton');
    $btn.innerText = item.name;

    $ul.appendChild($li);
    $li.appendChild($btn);

    $btn.addEventListener('click', function () {
      showModal(item.name, item.imageUrl, item.height, item.types);
    });
  }

  function showDetails(item) {
    pokemonRepository.loadDetails(item).then(function() {
      showModal(item.name, item.imageUrl, item.height, item.types);
      document.querySelector('#show-modal').addEventListener('click', (e) => {
        showModal(item.name, item.imageUrl, item.height, item.types);
      });
    });
  }

  function showModal(name, image, height, types) {
    var $modalContainer = document.querySelector('#modal-container');
    $modalContainer.classList.add('is-visible');

    $modalContainer.innerHTML = '';

    var modal = document.createElement('div');
    modal.classList.add('modal');

    var closeButtonElement = document.createElement('button');
    closeButtonElement.classList.add('modal-close');
    closeButtonElement.innerText = 'close';
    closeButtonElement.addEventListener('click', hideModal);

    var contentNameElement = document.createElement('h1');
    contentNameElement.innerText = name;

    var contentImageElement = document.createElement('img');
    contentImageElement.setAttribute('src', image);
    contentImageElement.innerImage = image;

    var contentHeightElement = document.createElement('p');
    contentHeightElement.innerText = 'height: ' + height + ' inches';

    var contentTypesElement = document.createElement('p');
    contentTypesElement.innerText = 'types: ' + types;

    modal.appendChild(closeButtonElement);
    modal.appendChild(contentNameElement);
    modal.appendChild(contentImageElement);
    modal.appendChild(contentHeightElement);
    modal.appendChild(contentTypesElement);
    $modalContainer.appendChild(modal);
  }

  function hideModal() {
    var $modalContainer = document.querySelector('#modal-container');
    $modalContainer.classList.remove('is-visible');
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
  // similar to lines 66-80, i.e. asynchronous function, get details from API
  function loadDetails(item) {
    var url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
      })
      .then(function (details) {
        // Now we add the details to the item
        item.imageUrl = details.sprites.front_default;
        item.height = details.height;
        item.types = Object.keys(details.types);
      })
      .catch(function (e) {
        console.error(e);
      });
  }

  // close modal with close-button
  var closeButtonElement = document.createElement('button');
  closeButtonElement.classList.add('modal-close');
  closeButtonElement.innerText = 'close';
  closeButtonElement.addEventListener('click', hideModal);

  // close modal with esc
  window.addEventListener('keydown', (e) => {
      var $modalContainer = document.querySelector('#modal-container');
      if (e.key === 'Escape' && $modalContainer.classList.contains('is-visible')) {
        hideModal();
      }
    });

    var $modalContainer = document.querySelector('#modal-container');
    $modalContainer.addEventListener('click', (e) => {
      var target = e.target;
      if (target === $modalContainer) {
        hideModal();
      }
    });

  return {
       add: add,
       getAll: getAll,
       //search: search,
       loadList: loadList,
       showDetails : showDetails,
       loadDetails: loadDetails,
       addListItem : addListItem,
       showModal : showModal,
       hideModal : hideModal
   };
   //close modal by clicking outside the modal

})();
//END OF IIFE

pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function(pokemon){
    pokemonRepository.addListItem(pokemon);
  });
});
