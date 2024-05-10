<template>
    <div style="flex: 1;">
      <textarea v-model="outputXML" placeholder="Output XML" readonly style="height: 100%; width: 100%;"></textarea>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        outputXML: ''
      };
    }
  };
  </script>
  