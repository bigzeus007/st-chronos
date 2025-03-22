import { getMessaging, getToken } from "firebase/messaging";
import { app } from "@/services/firebase";

const messaging = getMessaging(app);

export const requestNotificationPermission = async () => {
  const token = await getToken(messaging, { vapidKey: process.env.NEXT_PUBLIC_VAPID_KEY });
  return token;
};