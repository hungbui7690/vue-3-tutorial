<script>
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
