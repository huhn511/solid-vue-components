<template>
  <button class="btn" @click="login">Login</button>
</template>

<script>
import auth from 'solid-auth-client'

export default {
  methods: {
    login() {
      auth.popupLogin({ popupUri: 'https://solid.community/common/popup.html' }).then(session => {
        this.$emit("onSuccess", session)
      })
    }
  }
}
</script>


<meta>
{
  "description": "A component that displays a solid login button."
}
</meta>

<example>
  <!-- No props or content are necessary. -->
  <LoginButton v-on:onSuccess="handleLogin" />
</example>