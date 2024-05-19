const express = require('express');
const cors = require('cors');
const {Xslt, XmlParser} = require('xslt-processor');
const xmlFormat = require('xml-formatter');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

// Los scripts enviados deben contener un formato específico para poder ser enviados como request; no deben contener saltos de linea ni tampoco "", reemplazandolos por ''
app.post('/transform', (req, res) => {
    const { inputXML, xslTransformation } = req.body;
    
    console.log("XML Input: "+inputXML);
    console.log("XSL File: "+xslTransformation);
    // Perform XSLT transformation

    const xslt = new Xslt();
    const xmlParser = new XmlParser();

    try {
        console.log("Transforming XML...");
        const outXmlString = xslt.xsltProcess(
            xmlParser.xmlParse(inputXML),
            xmlParser.xmlParse(xslTransformation)
        );
        
        // Format the XML string
        const formattedXmlString = xmlFormat(outXmlString);
        console.log("Output:");
        console.log(formattedXmlString);
        
        res.status(200).send(formattedXmlString);

    } catch (error) {
        console.log(error.message);
        res.status(500).send(error.message);
    };

});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});