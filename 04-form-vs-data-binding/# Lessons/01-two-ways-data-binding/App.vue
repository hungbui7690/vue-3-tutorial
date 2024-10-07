<script>
/*
  Form - 2 Way Data Binding
  - v-model
  - 2 ways means that it's possible to bind from data to template and from template (inputs) to component data
  - <input v-model="email" />
    -> ref to component data


*/

import SignUpForm from './components/SignUpForm.vue'

export default {
  name: 'App',
  data() {
    return {
      title: 'Ninja Reaction Timer',
    }
  },
  components: { SignUpForm },
  methods: {},
}
</script>

<template>
  <SignUpForm />
</template>

<style scoped></style>
