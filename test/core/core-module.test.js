import 'test/helper'
import CoreModule from 'source/core/core-module'

describe('［模块］：CoreModule', () => {
    it('具有正确的模块名称', () => {
        expect(CoreModule.name).to.equal('core')
    })
})
