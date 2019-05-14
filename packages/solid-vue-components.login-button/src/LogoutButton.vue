<template>
    <button class="btn" @click="logout">Logout</button>
</template>

<script>
import auth from 'solid-auth-client'

export default {
  methods: {
    logout() {
      auth.logout().then(() => {
         this.$emit("onSuccess")
      })
    }
  }
}
</script>


<meta>
{
  "description": "A component that displays a solid logout button."
}
</meta>

<example>
  <!-- No props or content are necessary. -->
  <LogoutButton v-on:onSuccess="handleLogout" />
</example>