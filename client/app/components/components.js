import IncidentFormModule from './incidentForm/incidentForm.module';
import IncidentListModule from './incidentList/incidentList.module';
import NavigationModule from './navigation/navigation.module';
import SearchBoxModule from './searchBox/searchBox.module';
import angular from 'angular';

const ComponentsModule = angular.module('app.components', [
	IncidentFormModule.name,
	IncidentListModule.name,
	SearchBoxModule.name,
	NavigationModule.name,
]);

export default ComponentsModule;
