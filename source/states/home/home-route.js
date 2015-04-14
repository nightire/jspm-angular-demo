import HomeTemplate from './home-template.html!text'
import HomeController from './home-controller'

var HomeRoute = {
    url:          '/home',
    template:     HomeTemplate,
    controller:   HomeController,
    controllerAs: 'home'
}

export default HomeRoute
