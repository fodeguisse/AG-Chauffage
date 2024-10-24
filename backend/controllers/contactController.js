const contact = require("../models/contact");

exports.submitContactForm = async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const newContact = new contact({ name, email, message });
    await newContact.save();
    res.status(201).json({ message: 'Formulaire soumis avec succès' });
  } catch (error) {
    res.status(500).json({ message: 'Erreur de serveur' });
  }
};
