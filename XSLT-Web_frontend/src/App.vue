<script>
import InputForm from './components/XSLTForm.vue';

export default {
  components: {
    InputForm
  }
};
</script>
<template>
  <div id="app">
    <InputForm />
  </div>
</template>

<style>
#app {
  height: 90vh;
  width: 100%;
  display: flex;
  flex-direction: column;
}
</style>