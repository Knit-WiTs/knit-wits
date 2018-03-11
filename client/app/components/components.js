import ConfirmationModule from './confirmation/confirmation.module';
import IncidentFormModule from './incidentForm/incidentForm.module';
import IncidentListModule from './incidentList/incidentList.module';
import NavigationModule from './navigation/navigation.module';
import SearchBoxModule from './searchBox/searchBox.module';
import angular from 'angular';

const ComponentsModule = angular.module('app.components', [
	IncidentFormModule.name,
	IncidentListModule.name,
	NavigationModule.name,
	SearchBoxModule.name,
	ConfirmationModule.name,
]);

export default ComponentsModule;
