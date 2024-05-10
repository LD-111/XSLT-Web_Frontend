<template>
  <div id="app">
    <InputForm />
    <OutputForm />
  </div>
</template>

<script>
import InputForm from './components/XSLTForm.vue';

export default {
  components: {
    InputForm
  }
};
</script>

<style>
#app {
  width: 100%;
  height: 100vh;
  margin: 5px 20px; /* Adjust margin as needed */
  padding: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center; /* Center the content horizontally */
}
</style>