import angular from 'angular';
import friendComponent from './friend.component';

const friendModule = angular.module('friend', [])
.component('friend', friendComponent);
export default friendModule;
