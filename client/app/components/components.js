import angular from 'angular';
    import SearchBoxModule from './searchBox/searchBox.module';    import IncidentFormModule from './incidentForm/incidentForm.module';

const ComponentsModule = angular.module('app.components',[
       SearchBoxModule.name,      IncidentFormModule.name 
]);

export default ComponentsModule;