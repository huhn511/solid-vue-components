# solid-vue-components.logout-button

> A component that displays a solid logout button.

## Installation

### Directly in the browser

Drop the component in with a `<script>` tag alongside Vue:

```html
<div id="app">
<!-- ... use component here ... -->
</div>

<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/solid-vue-components.logout-button"></script>
<script>
new Vue({ el: '#app' })
</script>
```

### In a module system

Install the component with NPM:

```bash
npm install solid-vue-components.logout-button
```

Then import the component:

```js
import LogoutButton from 'solid-vue-components.logout-button'
```

And either globally register it for use in all components:

```js
Vue.component(LogoutButton, 'solid-vue-components.logout-button')
```

or locally register it for use in an individual component:

```js
export default {
components: { LogoutButton }
}
```

## Usage

```html
<!-- No props or content are necessary. -->
<LogoutButton />
```
