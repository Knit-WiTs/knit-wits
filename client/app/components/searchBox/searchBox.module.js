import angular from 'angular';
import searchBoxComponent from './searchBox.component';

const searchBoxModule = angular.module('searchBox', [])
  .component('searchBox', searchBoxComponent);
export default searchBoxModule;