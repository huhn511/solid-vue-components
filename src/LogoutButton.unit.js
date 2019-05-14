import LogoutButton from './LogoutButton'

test('exports a valid component', () => {
  expect(LogoutButton).toBeAComponent()
})

test('renders the text "Logout"', () => {
  const { element } = shallowMount(LogoutButton)
  expect(element.textContent.trim()).toBe('Logout')
})

test('adds a "btn" class on the root element', () => {
  const { element } = shallowMount(LogoutButton)
  expect(element.classList.contains('btn')).toBe(true)
})
