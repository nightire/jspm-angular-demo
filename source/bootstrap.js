import CoreModule from 'source/core/core-module'

angular.element(document).ready(
    () => angular.bootstrap(document, [CoreModule.name], { strictDi: true })
)
