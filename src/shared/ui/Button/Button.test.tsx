import { render, screen } from '@testing-library/react'
import { Button, ThemeButton } from './Button'

describe('Button', () => {
  test('should render button with text', () => {
    render(<Button>Test Button</Button>)
    expect(screen.getByText('Test Button')).toBeInTheDocument()
  })

  test('should render button with clear theme', () => {
    render(<Button theme={ThemeButton.CLEAR}>Test Button</Button>)
    expect(screen.getByText('Test Button')).toHaveClass('clear')
  })

  test('should render button with additional class', () => {
    render(<Button className='additional-class'>Test Button</Button>)
    expect(screen.getByText('Test Button')).toHaveClass('additional-class')
  })

  test('should render button with type submit', () => {
    render(<Button type='submit'>Test Button</Button>)
    expect(screen.getByText('Test Button')).toHaveAttribute('type', 'submit')
  })

  test('should render button with type button by default', () => {
    render(<Button>Test Button</Button>)
    expect(screen.getByText('Test Button')).toHaveAttribute('type', 'button')
  })
})
