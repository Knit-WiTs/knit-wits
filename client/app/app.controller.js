class appController {
    constructor() {
      this.name = 'app';
      this.page = 'search';

      this.switchPage = page => {
          this.page = page;
      }
    }

    $onInit() {
        console.log(this.page);
    }
  }


  export default appController;