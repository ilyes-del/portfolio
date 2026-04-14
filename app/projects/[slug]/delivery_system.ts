export const deliverySystemContent = {
    heading: "Sahel Delivery Platform - Multi-Platform Food Delivery Ecosystem",
    intro:
        "A comprehensive delivery ecosystem built with React Native (Expo), Firebase, and TypeScript, with separate apps for customers, administrators, delivery drivers, and store managers.",
    overview:
        "The platform provides end-to-end food delivery operations across multiple applications: Sahel Client, Sahel Admin, Sahel Delivery, and Sahel Store. It combines real-time cloud capabilities with offline resilience for reliable daily usage.",
    stackRows: [
        ["Frontend", "React Native 0.81.5, Expo 54.0.23, TypeScript, React 19.1.0"],
        ["Navigation", "Expo Router (file-based routing)"],
        ["Backend", "Firebase + Firestore (real-time database)"],
        ["Authentication", "Firebase Auth + Google OAuth 2.0"],
        ["Maps & Location", "MapLibre, Google Maps, Expo Location"],
        ["State Management", "React Context API (Auth, Cart, Language)"],
        ["Storage", "AsyncStorage (offline caching)"],
        ["Notifications", "Expo Notifications + Firebase Cloud Messaging"],
    ],
    architecture: [
        "Presentation layer with modular screens and reusable components.",
        "Context-based state management for authentication, cart, and language.",
        "Service layer with product, cart, order, payment, location, chat, notification, and store services.",
        "Data layer using Firestore for real-time sync and AsyncStorage for offline cache.",
    ],
    keyFeatures: [
        "Role-based authentication (Admin, Driver, Customer) with secure Firebase tokens.",
        "Product catalog browsing with search, filtering, and category navigation.",
        "Cart and order flow with tracking, history, and cancellation support.",
        "Real-time delivery tracking with GPS updates and reverse geocoding.",
        "In-app chat, read-state messaging, and push notifications for status updates.",
        "Multi-language UI (EN, AR, FR) and dark/light theme support.",
        "Admin analytics and delivery-driver operational tooling.",
    ],
    offlineStrategy: [
        "Offline-first caching via AsyncStorage for products, categories, cart, orders, and profile.",
        "Automatic fallback to cache when network errors occur.",
        "Background synchronization when connectivity is restored.",
    ],
    offlineLimitations: [
        "Placing new orders and payment processing require connectivity.",
        "Live delivery tracking and real-time chat require connectivity.",
        "Profile updates require connectivity.",
    ],
    collections: [
        "users (cart, orders, favoriteStores, savedAddresses)",
        "products (catalog, categories, stock, rating)",
        "stores (metadata, coordinates, cuisines, pricing)",
        "orders (items, status, shipping details, totals)",
        "payments (amount, method, status, transaction info)",
        "locations (delivery GPS stream and metadata)",
        "chats (rooms and message threads)",
    ],
    conclusion:
        "Sahel is a production-ready, scalable delivery ecosystem focused on reliability, real-time operations, and maintainable modular architecture across client, admin, delivery, and store applications.",
}
