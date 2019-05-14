<template>
  <div id="app">
    <LoginButton v-on:onSuccess="handleLogin" v-if="!session" />
    <LogoutButton v-on:onSuccess="handleLogout" v-if="session" />
  </div>
</template>

<script>
import auth from 'solid-auth-client'

export default {
  data() {
    return {
      session: false
    }
  },
  created() {
    auth.currentSession().then(session => {
      console.log("session", session)
      this.session = session;
    })
  },
  methods: {
    handleLogin(session) {
      console.log("handleLogin", session)
      this.session = session;
    },
    handleLogout() {
      console.log("handleLogout")
      this.session = false
    }
  }
}
</script>
