import { firebase } from "@/firebase/config";
import { defineAction, z } from "astro:actions";
import { GoogleAuthProvider, signInWithCredential } from "firebase/auth";

export const loginWithGoogle = defineAction({
  accept: "json",
  input: z.any(),
  handler: async (credentials) => {
    const credential = GoogleAuthProvider.credentialFromResult(credentials);

    if (!credential) {
      throw new Error("Falló la autenticación con Google.");
    }

    return await signInWithCredential(firebase.auth, credential);
  },
});
