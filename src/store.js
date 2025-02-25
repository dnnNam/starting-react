import { makeAutoObservable, observable, computed } from "mobx";

class Store {
  pokemon = [];
  filter = "";
  selectedItem = null;

  constructor() {
    makeAutoObservable(this, {
      pokemon: observable,
      filter: observable,
      selectedItem: observable,
      filteredPokemon: computed,
    });
  }

  get FilteredPokemon() {
    return this.pokemon.filter(({ name: { english } }) =>
      english.toLocaleLowerCase().includes(this.filter.toLocaleLowerCase())
    );
  }
  setPokemon(pokemon) {
    this.pokemon = pokemon;
  }

  setFilter(filter) {
    this.filter = filter;
  }

  setSelectedItem(selectedItem) {
    this.selectedItem = selectedItem;
  }
}

const store = new Store();

fetch("http://localhost:3000/starting-react/pokemon.json")
  .then((resp) => resp.json())
  .then((pokemon) => store.setPokemon(pokemon));

export default store;
