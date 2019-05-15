# solid-vue-components.logged-out

> Pane that only shows its contents when the user is logged in.

## Installation

### Directly in the browser

Drop the component in with a `<script>` tag alongside Vue:

```html
<div id="app">
<!-- ... use component here ... -->
</div>

<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/solid-vue-components.logged-out"></script>
<script>
new Vue({ el: '#app' })
</script>
```

### In a module system

Install the component with NPM:

```bash
npm install solid-vue-components.logged-out
```

Then import the component:

```js
import LoggedOut from 'solid-vue-components.logged-out'
```

And either globally register it for use in all components:

```js
Vue.component(LoggedOut, 'solid-vue-components.logged-out')
```

or locally register it for use in an individual component:

```js
export default {
components: { LoggedOut }
}
```

## Usage

```html
<LoggedIn>
  <p>This is only visible for logged in users.</p>
</LoggedIn>
```
