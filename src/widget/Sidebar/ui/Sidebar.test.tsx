import { fireEvent, render, screen } from '@testing-library/react'
import { Sidebar } from './Sidebar'

describe('Sidebar', () => {
  test('should render sidebar', () => {
    render(<Sidebar />)
    expect(screen.getByText('Х')).toBeInTheDocument()
  })

  test('should toggle collapsed state on button click', () => {
    render(<Sidebar />)

    const toggleButton = screen.getByText('Х')

    fireEvent.click(toggleButton)

    expect(localStorage.getItem('sidebar-collapsed')).toBe('true')

    fireEvent.click(toggleButton)

    expect(localStorage.getItem('sidebar-collapsed')).toBe('false')
  })
})
