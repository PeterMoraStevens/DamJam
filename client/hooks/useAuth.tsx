import { useEffect, useState } from "react";
import { onAuthStateChanged, type User } from "firebase/auth";
import { auth } from "../firebase/initialize";

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setUser(user);
      if (user) {
        const token = await user.getIdToken(true);
        setToken(token);
      } else {
        setToken(null);
      }
    });

    return () => unsubscribe();
  }, [auth]);

  // Token refresh every 30 minutes
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (user) {
      interval = setInterval(async () => {
        const newToken = await user.getIdToken(true);
        setToken(newToken);
      }, 30 * 60 * 1000); // 30 minutes
    }

    return () => clearInterval(interval);
  }, [user]);

  return { user, token };
}
