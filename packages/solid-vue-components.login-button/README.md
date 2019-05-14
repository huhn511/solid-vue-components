# solid-vue-components.login-button

> A component that displays a solid login button.

## Installation

### Directly in the browser

Drop the component in with a `<script>` tag alongside Vue:

```html
<div id="app">
<!-- ... use component here ... -->
</div>

<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/solid-vue-components.login-button"></script>
<script>
new Vue({ el: '#app' })
</script>
```

### In a module system

Install the component with NPM:

```bash
npm install solid-vue-components.login-button
```

Then import the component:

```js
import LoginButton from 'solid-vue-components.login-button'
```

And either globally register it for use in all components:

```js
Vue.component(LoginButton, 'solid-vue-components.login-button')
```

or locally register it for use in an individual component:

```js
export default {
components: { LoginButton }
}
```

## Usage

```html
<!-- No props or content are necessary. -->
<LoginButton v-on:onSuccess="handleLogin" />
```
