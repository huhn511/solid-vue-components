<template>
  <div id="app">
    <AuthButton />
    <LoggedIn>
      <p>This is only visible for logged in users.</p>
    </LoggedIn>
    <LoggedOut>
      <p>This is only visible for logged out users.</p>
    </LoggedOut>
  </div>
</template>

<script>
import auth from 'solid-auth-client'


export default {
}
</script>
