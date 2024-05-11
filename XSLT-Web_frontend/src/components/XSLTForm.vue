<template>
  <div style="display: flex; flex: 1; flex-direction: column; width: 100%;">
    
    
    <button @click="transform" style="margin-bottom: 10px;">Transform</button>
    <div style="display: flex; flex: 1;">
      <div style="display: flex; flex-direction: column; flex: 1;">
        <div style="display: flex; width: 100%; margin-bottom: 10px;">
          <input type="file" @change="loadFile('inputXML', $event)" accept=".xml" style="display: none;" ref="inputXMLFileInput">
          <button style="flex: 1;" @click="$refs.inputXMLFileInput.click()">Load Input XML</button>
        </div>
        <textarea v-model="inputXML" placeholder="Input XML" style="flex: 1;"></textarea>
      </div>

      <div style="margin: 5px;"></div> 

      <div style="display: flex; flex-direction: column; flex: 1;">
        <div style="display: flex; width: 100%; margin-bottom: 10px;">
          <input type="file" @change="loadFile('xslTransformation', $event)" accept=".xsl,.xslt" style="display: none;" ref="xslTransformationFileInput">
          <button style="flex: 1;" @click="$refs.xslTransformationFileInput.click()">Load XSL Transformation</button>
        </div>
        <textarea v-model="xslTransformation" placeholder="XSL Transformation" style="flex: 1;"></textarea>
      </div>
      
      <div style="margin: 5px;"></div> 

      <div style="display: flex; flex-direction: column; flex: 1;">
        <div style="display: flex; width: 100%; margin-bottom: 10px;">
          <button style="flex: 1;" @click="downloadOutputXML">Download Output XML</button>
        </div>
        <textarea v-model="outputXML" placeholder="Output XML" readonly style="flex: 1;"></textarea>
      </div>
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
    },
    loadFile(field, event) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        this[field] = reader.result;
      };
      reader.readAsText(file);
    },
    downloadOutputXML() {
      // Create a blob from the outputXML content
      const blob = new Blob([this.outputXML], { type: 'text/xml' });

      // Create a link element
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = 'output.xml'; // Set the file name
      link.click();
    }
  }
};
</script>
  
  