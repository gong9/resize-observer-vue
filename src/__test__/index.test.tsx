import { h } from 'vue'
import { mount } from '@vue/test-utils'
import { ResizeObserver } from '../index'

describe('ResizeObserver', () => {
  let errorSpy: any

  describe('children count warning', () => {
    beforeAll(() => {
      errorSpy = jest.spyOn(console, 'error').mockImplementation(() => null)
    })
    beforeEach(() => {
      errorSpy.mockReset()
    })

    afterAll(() => {
      errorSpy.mockRestore()
    })
    it('without children', () => {
      mount(() => (
        <ResizeObserver/>
      ))

      expect(errorSpy).toHaveBeenCalledWith(
        'Warning: `children` of ResizeObserver is empty. Nothing is in observe.',
      )
    })

    it('multiple children', () => {
      const wrapper = mount(
        () => (
          <ResizeObserver>
            <div key="exist-key" />
            <div />
        </ResizeObserver>
        ),
      )

      expect(errorSpy).toHaveBeenCalledWith(
        'Warning: Find more than one child node with `children` in ResizeObserver, Not supported temporarily.',
      )
    })
  })

  // ResizeObserver will not be triggered here, unfortunately I did not find other related simulations for vue testing
  describe('onResize', () => {

  })
})
