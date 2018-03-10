import angular from 'angular';
    import SearchBoxModule from './searchBox/searchBox.module';

const ComponentsModule = angular.module('app.components',[
       SearchBoxModule.name, 
]);

export default ComponentsModule;