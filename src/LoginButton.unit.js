import LoginButton from './LoginButton'

test('exports a valid component', () => {
  expect(LoginButton).toBeAComponent()
})

test('renders the text "Login"', () => {
  const { element } = shallowMount(LoginButton)
  expect(element.textContent.trim()).toBe('Login')
})

test('adds a "btn" class on the root element', () => {
  const { element } = shallowMount(LoginButton)
  expect(element.classList.contains('btn')).toBe(true)
})
