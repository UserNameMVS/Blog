import { render, screen } from '@testing-library/react'
import { Button } from './Button'

describe('Button', () => {
  test('should render button with text', () => {
    render(<Button>Test Button</Button>)
    expect(screen.getByText('Test Button')).toBeInTheDocument()
  })
})
