import { mount } from 'enzyme'
import React from 'react'
import renderer from 'react-test-renderer'
import ScrollInto from './index'

test('ScrollInto renders with children', () => {
  const component = renderer.create(
    <ScrollInto selector="test">
      <div>Some child content</div>
    </ScrollInto>
  )

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('ScrollInto renders with custom className', () => {
  const component = renderer.create(
    <ScrollInto selector="test" className="custom-class">
      <div>Some child content</div>
    </ScrollInto>
  )

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('ScrollInto renders with custom styles', () => {
  const component = renderer.create(
    <ScrollInto selector="test" style={{ display: 'inline' }}>
      <div>Some child content</div>
    </ScrollInto>
  )

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('ScrollInto renders with custom styles and className', () => {
  const component = renderer.create(
    <ScrollInto
      selector="test"
      style={{ display: 'inline', color: 'red' }}
      className="pinky"
    >
      <div>Some child content</div>
    </ScrollInto>
  )

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Uses provided callback function', () => {
  const mockFn = jest.fn()
  const wrapper = mount(
    <ScrollInto selector="test" onClick={mockFn}>
      abc
    </ScrollInto>
  )
  expect(mockFn).toBeCalledTimes(0)

  wrapper.find('ScrollInto').simulate('click')
  expect(mockFn).toBeCalled()
  expect(mockFn).toBeCalledTimes(1)
})
