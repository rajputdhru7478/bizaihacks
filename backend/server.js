const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.post("/api/add-contact", async (req, res) => {
  try {
    const { email, attributes } = req.body;

    // ✅ Map form data to your Brevo contact attributes
    const mappedAttributes = {
      FULLNAME: attributes.FULLNAME,
      COMPANY_NAME: attributes.COMPANY_NAME,
      INDUSTRY: attributes.INDUSTRY,
      SMS: attributes.SMS,
      GST_NO: attributes.GST_NO,
      MESSAGE: attributes.MESSAGE,
    };

    const response = await axios.post(
      "https://api.brevo.com/v3/contacts",
      {
        email,
        attributes: mappedAttributes,
        listIds: [139], // ✅ your Brevo List ID
        updateEnabled: true,
      },
      {
        headers: {
          "api-key": process.env.BREVO_API_KEY,
          "Content-Type": "application/json",
        },
      }
    );

    res.json({ success: true, data: response.data });
  } catch (error) {
    console.error("❌ Backend Error:", error.response?.data || error.message);
    res
      .status(500)
      .json({ success: false, error: error.response?.data || error.message });
  }
});

app.listen(4000, () => {
  console.log("✅ Backend running at http://localhost:4000");
});
