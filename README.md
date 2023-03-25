"# Cybersecurite_Challenge_back"

<!-- Pour les prédiction tensorflow  code utile-->

const tf = require('@tensorflow/tfjs-node');

// Charger le modèle pré-entraîné
const modelPath = 'chemin/vers/votre/modele';
const model = await tf.loadLayersModel(`file://${modelPath}`);

// Prévoir les résultats à partir de données d'entrée
const input = tf.tensor2d([[0.1, 0.2, 0.3], [0.4, 0.5, 0.6]]);
const predictions = model.predict(input);

// Renvoyer les résultats sous forme de vecteur
const predictionsData = await predictions.data();
const predictionsArray = Array.from(predictionsData);
console.log(predictionsArray);
