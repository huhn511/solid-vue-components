# solid-vue-components.logged-in

> Pane that only shows its contents when the user is logged in.

## Installation

### Directly in the browser

Drop the component in with a `<script>` tag alongside Vue:

```html
<div id="app">
<!-- ... use component here ... -->
</div>

<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/solid-vue-components.logged-in"></script>
<script>
new Vue({ el: '#app' })
</script>
```

### In a module system

Install the component with NPM:

```bash
npm install solid-vue-components.logged-in
```

Then import the component:

```js
import LoggedIn from 'solid-vue-components.logged-in'
```

And either globally register it for use in all components:

```js
Vue.component(LoggedIn, 'solid-vue-components.logged-in')
```

or locally register it for use in an individual component:

```js
export default {
components: { LoggedIn }
}
```

## Usage

```html
<LoggedIn>
  <p>This is only visible for logged in users.</p>
</LoggedIn>
```
