<template>
  <div style="display: flex; flex: 1; flex-direction: column; width: 100%;">
    <button @click="transform" style=" margin-bottom: 10px;">Transform</button>
    <div style="display: flex; flex: 1;">
      <textarea v-model="inputXML" placeholder="Input XML" style="flex: 1;"></textarea>
      <div style="margin: 5px;"></div> 
      <textarea v-model="xslTransformation" placeholder="XSL Transformation" style="flex: 1;"></textarea>
      <div style="margin: 5px;"></div> 
      <textarea v-model="outputXML" placeholder="Output XML" readonly style="flex: 1;"></textarea>
    </div>
  </div>
</template>
  
<script>
import axios from 'axios';

export default {
  data() {
    return {
      inputXML: '',
      xslTransformation: '',
      outputXML: ''
    };
  },
  methods: {
    async transform() {
      try {
        const response = await axios.post('http://localhost:3000/transform', {
          inputXML: this.inputXML,
          xslTransformation: this.xslTransformation
        });
        this.outputXML = response.data;
      } catch (error) {
        console.error('Error:', error);
        // Handle error more gracefully, e.g., display an error message to the user
        alert('An error occurred while transforming XML:'+ error);
      }
    }
  }
};
</script>
  
  