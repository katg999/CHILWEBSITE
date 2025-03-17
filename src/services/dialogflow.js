// src/services/dialogflow.js
import { SessionsClient } from "@google-cloud/dialogflow";
import path from "path";

// Load the service account key JSON file
const serviceAccountKeyPath = path.resolve(
  __dirname,
  "katendeketi-foym-7e233b833ec4.json"
);
const projectId = "katendeketi-foym"; // Replace with your Dialogflow project ID
const sessionId = "unique-session-id"; // Generate or use a fixed session ID
const languageCode = "en-US"; // Set the language code

const sessionClient = new SessionsClient({
  keyFilename: serviceAccountKeyPath, // Path to the service account key
});

export const sendMessageToDialogflow = async (message) => {
  const sessionPath = sessionClient.projectAgentSessionPath(
    projectId,
    sessionId
  );

  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        text: message,
        languageCode,
      },
    },
  };

  const responses = await sessionClient.detectIntent(request);
  return responses[0].queryResult;
};
