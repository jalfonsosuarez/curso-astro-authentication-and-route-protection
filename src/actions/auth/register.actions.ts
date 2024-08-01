import { firebase } from "@/firebase/config";
import { defineAction, z } from "astro:actions";
import { createUserWithEmailAndPassword, type AuthError } from "firebase/auth";

export const registerUser = defineAction({
  accept: "form",
  input: z.object({
    name: z.string().min(2),
    email: z.string().email(),
    password: z.string().min(6),
    remember_me: z.boolean().optional(),
  }),
  handler: async ({ name, password, email, remember_me }, { cookies }) => {
    // Guardar el email en las cookes por un año
    if (remember_me) {
      cookies.set("email", email, {
        expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 365),
        path: "/",
      });
    } else {
      cookies.delete("email", {
        path: "/",
      });
    }

    // Creación de usuario
    try {
      const user = await createUserWithEmailAndPassword(
        firebase.auth,
        email,
        password
      );
      // Actualizar nombre (displayName)

      // Verificar el email

      return user;
    } catch (error) {
      const firebaseError = error as AuthError;

      if (firebaseError.code === "auth/email-already-in-use") {
        throw new Error("Email en uso.");
      }

      throw new Error("Algo no fue bien en el registro.");
    }

    return { ok: true, msg: "Usuario creado" };
  },
});
