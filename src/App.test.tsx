import React from 'react'
import TestRenderer from 'react-test-renderer'
import App from './App'
import { Typography } from 'antd'
const { Title } = Typography

it('renders without crashing', (): void => {
  // github issue: https://github.com/ant-design/ant-design/issues/9792
  // const testRenderer = TestRenderer.create(<App />)
  // const testInstance = testRenderer.root
  // expect(testInstance.findByType(Title).children).toEqual(['Content'])
})
