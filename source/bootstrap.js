import 'angular'

let CoreModule = angular.module('app', [])

angular.element(document).ready(
    () => angular.bootstrap(document, [CoreModule.name], { strictDi: true })
)

export default CoreModule
