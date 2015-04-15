import 'test/helper'
import 'source/bootstrap'

describe('［应用］：Angular Application 手动初始化', () => {
    it('可以通过应用根节点元素访问 $rootScope，$id 应为 1', () => {
        let rootElement = angular.element(document.querySelector('body'))
        expect(rootElement.scope()).to.have.property('$id', 1)
    })
})
