import { render, screen } from '@testing-library/react'
import { LangSwitcher } from './LangSwitcher'

describe('LangSwitcher', () => {
  test('should render button with text', () => {
    render(<LangSwitcher />)
    expect(screen.getByText('Язык')).toBeInTheDocument()
  })
})
