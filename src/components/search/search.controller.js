class SearchController {
  constructor(){}
  update(){
    console.log(this.location);
    const payload = {
      event: {
        location: this.location
      }
    }
    this.onSearch(payload);
  }
}

SearchController.$inject = [];

module.exports = SearchController;
