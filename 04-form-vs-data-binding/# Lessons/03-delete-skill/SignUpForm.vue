<script>
/*
  Delete Skill
  - click on the pill to delete the skill


*/

export default {
  name: 'SignUpForm',
  data() {
    return {
      email: '',
      password: '',
      role: '',
      terms: false,
      skills: [],
      tempSkill: '',
    }
  },
  methods: {
    addSkill($e) {
      if ($e.key === ',' && this.tempSkill) {
        if (!this.skills.includes(this.tempSkill)) {
          this.skills.push(this.tempSkill)
        }
        this.tempSkill = ''
      }
    },
    deleteSkill(skill) {
      this.skills = this.skills.filter((s) => s !== skill)
    },
  },
}
</script>

<template>
  <form>
    <label>Skills (press alt + comma to add):</label>
    <input type="text" v-model="tempSkill" @keyup.alt="addSkill" />
    <div
      v-for="skill in skills"
      :key="skill"
      class="pill"
      @click="deleteSkill(skill)"
    >
      {{ skill }}
    </div>
  </form>

  <hr />

  <div class="result">
    <p>Skills: {{ skills }}</p>
  </div>
</template>

<style>
.pill {
  display: inline-block;
  padding: 5px 10px;
  background: #f1f1f1;
  border-radius: 20px;
  margin: 5px;
  color: white;
  background: teal;
}
.result {
  max-width: 420px;
  margin: 30px auto;
}
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
