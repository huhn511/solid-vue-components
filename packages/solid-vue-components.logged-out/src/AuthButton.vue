<template>
    <LogoutButton v-if="webId"/>
    <LoginButton v-else/>
</template>

<script>
import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton'

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
  "description": "Button that lets the user log in or out with Solid."
}
</meta>

<example>
  <!-- No props or content are necessary. -->
  <AuthButton />
</example>