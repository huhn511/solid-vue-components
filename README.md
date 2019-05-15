# Core Vue.js Components for Solid
A core set of [Vue.js](https://vuejs.org/) components and hooks
for building your own [Solid](https://solid.inrupt.com/) components and apps.


### Purpose
✨ [Solid](https://solid.inrupt.com/) is an ecosystem for people, data, and apps
in which people can store their data where they want,
independently of the apps they use.

⚛️ This library aims to:
1. provide Vue.js developers with components to develop fun Solid apps 👨🏿‍💻
2. enable Vue.js developers to build their own components for Solid 👷🏾‍♀️

Solid uses 🔗 [Linked Data](https://solid.inrupt.com/docs/intro-to-linked-data),
so people's data from all over the Web can be connected together
instead of needing to be stored in one giant space.
This library makes working with Linked Data easier, too.

### Example apps
These apps have already been built with Vue.js for Solid:

- […add yours!](https://github.com/huhn511/solid-vue-components/edit/master/README.md)

### Install and go
First add the package:
```bash
yarn add solid-vue-components # or
npm install solid-vue-components
```

Then you can import components like this:
```JavaScript
import { LoginButton } from 'solid-vue-components';
```

## Build Solid apps from Vue.js components
The [demo app](https://github.com/huhn511/solid-vue-components/tree/master/demo)
will inspire you on how to use the components listed below.

### 👮🏻‍♀️ Authentication
#### Log the user in and out
You will need a copy of [popup.html](https://solid.github.io/solid-auth-client/dist/popup.html) in your application folder.
```jsx
<LoginButton popup="popup.html"/>
<LogoutButton>Log me out</LogoutButton>
// Shows LoginButton or LogoutButton depending on the user's status
<AuthButton popup="popup.html" login="Login here!" logout="Log me out"/>
```

#### Display different content to logged in users
```jsx
<LoggedOut>
  <p>You are not logged in, and this is a members-only area!</p>
</LoggedOut>
<LoggedIn>
  <p>You are logged in and can see the special content.</p>
</LoggedIn>
```

### 👍🏾 Social interactions
With Solid, people can _like_ any page or thing on the Web:
```jsx
<Like/> // the current page
<Like object="https://github.com/">GitHub</Like>
<Like object="[https://ruben.verborgh.org/profile/#me].friends">Ruben's website</Like>
<Dislike object="http://dbpedia.org/resource/Poverty">poverty</Dislike>
<Follow object="https://ruben.verborgh.org/profile/#me">Ruben</Follow>
```

Your social interactions are stored in your own data pod.
Build your own interactions with an `<ActivityButton/>`.

### 🖥️ Get data from Solid
#### Load data from the user and from the Web
```jsx
<LoggedIn>
  <p>Welcome back, <Value src="user.firstName"/></p>
  <Image src="user.image" defaultSrc="profile.svg" className="pic"/>
  <ul>
    <li><Link href="user.inbox">Your inbox</Link></li>
    <li><Link href="user.homepage">Your homepage</Link></li>
  </ul>
</LoggedIn>

<h2>Random friend of <Name src="[https://ruben.verborgh.org/profile/#me]"/></h2>
<Value src="[https://ruben.verborgh.org/profile/#me].friends.firstName"/>

<h2>All friends</h2>
<List src="[https://ruben.verborgh.org/profile/#me].friends.firstName"/>

<h2>Random blog post</h2>
<Link href="[https://ruben.verborgh.org/profile/#me].blog[schema:blogPost]"/>

<h2>All blog posts</h2>
<List src="[https://ruben.verborgh.org/profile/#me].blog[schema:blogPost].label"/>

```

#### Create data expressions with LDflex
Solid Vue.js data components
use the [LDFlex](https://github.com/solid/query-ldflex/) language
to build paths to the data you want.

For example:
- `"user.firstName"` will resolve to the logged in user's first name
- `"user.friends.firstName"` will resolve to the first name of the user's friends
- `"[https://ruben.verborgh.org/profile/#me].homepage"` will resolve to Ruben's homepage
- `"[https://ruben.verborgh.org/profile/#me].friends.firstName"` will resolve to Ruben's friends' names

Learn how to [create your own LDflex expressions](https://github.com/solid/query-ldflex/#creating-data-paths).

#### Automatically refresh when data is updated
Different Solid apps can write to the same documents at the same time.
If you put components inside of `<LiveUpdate>`,
they will refresh when data is updated externally.
In the `subscribe` attribute, list the documents that should be tracked for updates;
set it to `*` (default) if you want to listen to all documents accessed by your app.
Use live updates sparingly,
since change monitoring consumes additional resources,
especially when monitoring documents on different data pods.


## 💪🏾 Create your own components
The Solid Vue.js library makes it easy
to create your own components
that interact with the current user
and fetch Linked Data from the Web.

#### Identify the user
In Solid, people are identified by a WebID,
a URL that points to them and leads to their data.

The `useWebID` hook gives you the WebID
of the currently logged in user as a string,
which changes automatically whenever someone logs in or out.
The `useLoggedIn` and `useLoggedOut` hooks
provide similar functionality, but return a boolean value.

```jsx
import { useWebId, useLoggedIn, useLoggedOut } from 'solid-vue-components';

function WebIdStatus() {
  const webId = useWebId();
  return <span>Your WebID is {webId}.</span>;
}

function Greeting() {
  const loggedOut = useLoggedOut();
  return <span>You are {loggedOut ? 'anonymous' : 'logged in' }.</span>;
}
```

#### Load data from the user or the Web
The `useLDflexValue` and `useLDflexList` hooks
let you load a single result or multiple results
of an LDflex expression.

```jsx
import { useLDflexValue, useLDflexList } from 'solid-vue-components';

function ConnectionCount() {
  const name = useLDflexValue('user.firstName') || 'unknown';
  const friends = useLDflexList('user.friends');
  return <span>{`${name}`} is connected to {friends.length} people.</span>;
}
```
Note how we force `name` into a string through `` `${name}` ``
(or, alternatively, `name.toString()` or `'' + name`).
This is needed because LDflex values are special objects
that _look_ like a string, but actually provide extra functionality.

Finally, the `useLDflex` hook also returns status information about the expression.
When its optional second argument is `true`, it returns a list.

```jsx
import { List, useLDflex } from 'solid-vue-componentss';

function BlogPosts({ author = 'https://ruben.verborgh.org/profile/#me' }) {
  const expression = `[${author}].blog[schema:blogPost].label`;
  const [posts, pending, error] = useLDflex(expression, true);

  if (pending)
    return <span>loading <em>({posts.length} posts so far)</em></span>;
  if (error)
    return <span>loading failed: {error.message}</span>;

  return <ul>{posts.map((label, index) =>
           <li key={index}>{`${label}`}</li>)}
         </ul>;
}
```

If your components should automatically refresh on updates
when placed inside of a `<LiveUpdate>` component,
use the `useLiveUpdate` hook (already included in all 3 `useLDflex` hooks).
It returns the latest update as `{ timestamp, url }`.

## Development

This repository is under active development. If you want to help, test it create [issues](https://github.com/huhn511/solid-vue-components/issues) and help to solve them.

### Run it in development mode

```bash
git clone https://github.com/huhn511/solid-vue-components
cd solid-vue-components
npm install # or yarn install
npm run dev
```

### Build the lib

```bash
npm run build
```

### Publish new version

```bash
lerna publish
```