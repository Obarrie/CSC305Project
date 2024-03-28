/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const functions = require("firebase-functions");

function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 3958.8; // Radius of the Earth in miles
    const dLat = toRadians(lat2 - lat1);
    const dLon = toRadians(lon2 - lon1);
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(toRadians(lat1)) *
            Math.cos(toRadians(lat2)) *
            Math.sin(dLon / 2) *
            Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;
    return distance;
}

function toRadians(degrees) {
    return degrees * (Math.PI / 180);
}

exports.getDistance = functions.https.onRequest((request, response) => {
    const coordinates = [
        { lat: 41.48553, lon: -71.52263 }, // Behind Emporium (Lot 4)
        { lat: 41.48831, lon: -71.52231 }, // Fine Arts (Lot 7)
        { lat: 41.49031, lon: -71.53864 }, // Plains Road (Lot 25)
        { lat: 41.48340, lon: -71.53595 }, // Keaney (Lot 26)
        { lat: 41.48895, lon: -71.54081 }, // Plains Road South (Lot 31)
        { lat: 41.49067, lon: -71.52812 }, // Flagg Road Street Parking
    ];

    const distances = coordinates.map((coord) => {
        const distance = calculateDistance(
            request.query.lat,
            request.query.lon,
            coord.lat,
            coord.lon
        );
        return distance;
    });

    response.json(distances);
});
