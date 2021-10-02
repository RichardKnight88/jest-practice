import { render, screen, cleanup } from '@testing-library/react'
import renderer from 'react-test-renderer'
import Todo from '../Todo'

afterEach(() => {
  cleanup()
})

test('should render non-completed todo', () => {
  const todo = { id: 1, title: 'wash dishes', completed: false }
  render(<Todo todo={todo}/>)
  const todoEl = screen.getByTestId('todo-1')
  expect(todoEl).toBeInTheDocument()
  expect(todoEl).toHaveTextContent('wash dishes')
  expect(todoEl).not.toContainHTML('<strike>')

})

test('should render completed todo', () => {
  const todo = { id: 2, title: 'wash car', completed: true }
  render(<Todo todo={todo}/>)
  const todoEl = screen.getByTestId('todo-2')
  expect(todoEl).toBeInTheDocument()
  expect(todoEl).toContainHTML('</bvstrike>')
})

test('matches snapshots', () => {
  const todo = { id: 1, title: 'wash dishes', completed: false }
  const tree = renderer.create(<Todo todo={todo}/>).toJSON()
  console.log(tree)
  expect(tree).toMatchSnapshot()
})