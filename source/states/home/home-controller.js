class HomeController {
    constructor($filter) {
        this.$filter  = $filter
        this.now      = new Date()
        this.greeting = `你好，今天是：${this.time()}！`
    }

    time() {
        return this.$filter('date')(this.now)
    }
}

HomeController.$inject = ['$filter']

export default HomeController
