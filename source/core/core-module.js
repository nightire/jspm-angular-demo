import 'angular-ui-router'

import HomeModule from 'source/states/home/home-module'
import CoreRouter from 'source/core/core-router'

export default angular.module('core', [
    'ui.router',

    HomeModule.name
])
    .config(CoreRouter)
