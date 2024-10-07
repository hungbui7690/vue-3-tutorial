<script>
/*
  Completing Task
  1. SingleTask.vue 
    -> update db -> emit event to Home.vue
    -> update class 
  2. Home.vue
    -> listen for "complete" event in SingleTask.vue -> handle it


*********************

  Class Update
  - not complete task
    # <div class="task">
        <span class="tick"></span>
      </div>

  - complete task 
    # <div class="complete task">
        <span class="tick"></span>
      </div>

  - .task.complete {}
    -> apply style when class = "task complete"
  - .task.complete .tick {}
    -> apply style for .tick in <div class="complete task">
                                  <span class="tick"></span>
                                </div>


*/
</script>

<template>
  <router-view />
</template>

<style></style>
