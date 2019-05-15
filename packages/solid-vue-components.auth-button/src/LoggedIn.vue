<template>
  <div>
    <slot v-if="webId"></slot>
  </div>
</template>

<script>
import auth from 'solid-auth-client'

export default {
  data() {
    return {
      webId: null
    }
  },
  mounted() {
    auth.trackSession(session => {
      this.webId = session ? session.webId : null
    })
  }
}
</script>


<meta>
{
  "description": "Pane that only shows its contents when the user is logged in."
}
</meta>

<example>
    <LoggedIn>
      <p>This is only visible for logged in users.</p>
    </LoggedIn>
</example>