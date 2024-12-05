import { Client, Account } from "appwrite";

const client = new Client();
client
  .setEndpoint("https://cloud.appwrite.io/v1") // Replace with your Appwrite endpoint
  .setProject("675176fd0021c80634bf"); // Replace with your project ID

const account = new Account(client);

export { client, account };
