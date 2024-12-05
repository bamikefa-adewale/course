import { Client, Account, ID } from "appwrite";

// Initialize Appwrite client and account
const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("675176fd0021c80634bf");

const account = new Account(client);

// Sign-up function
export const signupUser = async (name, email, password) => {
  try {
    const response = await account.create(ID.unique(), email, password, name);
    console.log("Signup successful:", response);
    return response;
  } catch (error) {
    console.error("Signup error:", error.message);
    throw error;
  }
};

// Sign-in function
export const signinUser = async (email, password) => {
  try {
    const response = await account.createEmailPasswordSession(email, password);
    console.log("Signin successful:", response);
    return response;
  } catch (error) {
    console.error("Signin error:", error.message);
    throw error;
  }
};
