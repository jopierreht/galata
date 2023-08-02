importScripts(
    "https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js"
);
importScripts(
    "https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js"
);
// // Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
  apiKey: "AIzaSyBsztqe1sjJkuFChJNbNZpg1vzuMOo8a-0",
  authDomain: "new-galata-285d8.firebaseapp.com",
  projectId: "new-galata-285d8",
  storageBucket: "new-galata-285d8.appspot.com",
  messagingSenderId: "886986056860",
  appId: "1:886986056860:web:b0eac489ebc1e086c7f959",
  measurementId: "G-G8LT85J5FN",
};

firebase?.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase?.messaging();

messaging.onBackgroundMessage(function (payload) {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
