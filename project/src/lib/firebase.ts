import { initializeApp, getApps } from "firebase/app";
import { getAnalytics, isSupported, logEvent, Analytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCpt3KCs4EOA-gJkoBLVaaNrsxx7GF84gU",
  authDomain: "bizaihacks.firebaseapp.com",
  projectId: "bizaihacks",
  storageBucket: "bizaihacks.firebasestorage.app",
  messagingSenderId: "680493853541",
  appId: "1:680493853541:web:ff097560cdf0bf67cacf8c",
  measurementId: "G-HSWC3Y2XS8"
};

// Reuse app in HMR
const app = getApps().length ? getApps()[0]! : initializeApp(firebaseConfig);

// Only init analytics in the browser and when supported (HTTPS or localhost)
let analyticsPromise: Promise<Analytics | null> | null = null;
if (typeof window !== "undefined") {
  analyticsPromise = isSupported()
    .then((ok) => (ok ? getAnalytics(app) : null))
    .catch(() => null);
}

export async function trackEvent(
  name: string,
  params?: Record<string, any>
) {
  const analytics = await analyticsPromise;
  if (!analytics) return;
  logEvent(analytics, name, params);
}

export async function trackPageView(path?: string) {
  await trackEvent("page_view", {
    page_location: typeof window !== "undefined" ? window.location.href : undefined,
    page_path: path,
    page_title: typeof document !== "undefined" ? document.title : undefined,
  });
}