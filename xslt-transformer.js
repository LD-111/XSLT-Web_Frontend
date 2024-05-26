const express = require('express');
const cors = require('cors');
const xslt4node = require('xslt4node');
const xmlFormat = require('xml-formatter');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.post('/transform', (req, res) => {
    const { inputXML, xslTransformation } = req.body;

    console.log("XML Input: " + inputXML);
    console.log("XSL File: " + xslTransformation);

    const config = {
        source: inputXML,
        xslt: xslTransformation,
        result: String,
        props: {
            indent: 'yes'
        }
    };

    xslt4node.transform(config, (err, result) => {
        if (err) {
            console.error("Transformation error:", err);
            res.status(500).send(err.message);
        } else {
            const formattedXmlString = xmlFormat(result);
            console.log("Output:");
            console.log(formattedXmlString);

            res.status(200).send(formattedXmlString);
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

