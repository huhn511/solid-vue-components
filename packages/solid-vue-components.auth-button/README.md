# solid-vue-components.auth-button

> Button that lets the user log in or out with Solid.

## Installation

### Directly in the browser

Drop the component in with a `<script>` tag alongside Vue:

```html
<div id="app">
<!-- ... use component here ... -->
</div>

<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/solid-vue-components.auth-button"></script>
<script>
new Vue({ el: '#app' })
</script>
```

### In a module system

Install the component with NPM:

```bash
npm install solid-vue-components.auth-button
```

Then import the component:

```js
import AuthButton from 'solid-vue-components.auth-button'
```

And either globally register it for use in all components:

```js
Vue.component(AuthButton, 'solid-vue-components.auth-button')
```

or locally register it for use in an individual component:

```js
export default {
components: { AuthButton }
}
```

## Usage

```html
<!-- No props or content are necessary. -->
<AuthButton />
```
