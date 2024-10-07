<script>
export default {
  name: 'SignUpForm',
  data() {
    return {
      email: '', // #
      password: '',
      role: '',
      terms: false,
      names: [],
    }
  },
}
</script>

<template>
  <form>
    <input
      type="email"
      name="email"
      placeholder="Email"
      required
      v-model="email"
    />
    <input
      type="password"
      name="password"
      placeholder="Password"
      required
      autocomplete="true"
      v-model="password"
    />
    <div class="select">
      <select v-model="role">
        <option value="developer">Developer</option>
        <option value="designer">Designer</option>
      </select>
    </div>
    <div class="terms">
      <input type="checkbox" name="terms" v-model="terms" />
      <label>Accept terms and conditions</label>
    </div>
    <div class="names">
      <input type="checkbox" v-model="names" value="Gon" />
      <label>Gon</label>
      <input type="checkbox" v-model="names" value="Killua" />
      <label>Killua</label>
      <input type="checkbox" v-model="names" value="Kuropika" />
      <label>Kuropika</label>
    </div>
  </form>

  <hr />
  <p>Email: {{ email }}</p>
  <p>Password: {{ password }}</p>
  <p>Role: {{ role }}</p>
  <p>Terms accepted: {{ terms }}</p>
  <p>Names: {{ names }}</p>
</template>

<style>
form {
  max-width: 420px;
  margin: 30px auto;
  background: white;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}
label {
  color: #aaa;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
  margin-right: 15px;
}
input,
select {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}
input[type='checkbox'] {
  display: inline-block;
  width: 16px;
  margin: 0 10px 0 0;
  position: relative;
  top: 2px;
}
.name {
  display: inline-block;
}
</style>
