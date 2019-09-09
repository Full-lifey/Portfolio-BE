const router = require("express").Router();
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const Emails = require("./sendgrid-model.js");

router.get("/", (req, res) => {
  Emails.find()
    .then(emails => {
      res.status(200).json(emails);
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: "Server error: unable to retrieve projects" });
    });
});

router.post("/", async (req, res) => {
  const { from, name } = req.body;
  const header = `${name} has contacted you with the request below:`;
  const message = {
    to: "joel@joelperez.dev",
    from: from,
    subject: "Contact Requested via Portfolio",
    text: header,
    html: `<p>${header}</p> \n <p>${req.body.text}</p> \n <strong>provided by SendGrid</stong>`
  };
  try {
    await Emails.create(message);
    await sgMail.send(message).then(sent => {
      res.status(200).json({ message: "Email sent successfully" });
    });
  } catch (err) {
    res.status(500).json({ message: `Server error: ${err}` });
  }
});

module.exports = router;
