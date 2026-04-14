export const javafxAppContent = {
    heading: "StoreManager - Desktop Retail Management System",
    intro:
        "A full-featured desktop point-of-sale and back-office management system built with JavaFX and SQLite, designed for small-to-medium retail shops that need a self-contained, offline-first solution for daily operations.",
    whatItIs:
        "StoreManager handles the complete retail workflow in one desktop application, from supplier delivery to customer checkout. It runs fully offline with an embedded SQLite database and no external server dependencies.",
    capabilities: [
        "Authentication and Access Control: Secure login with credential validation and account-expiry enforcement.",
        "Sales (Point of Sale): Fast invoicing with barcode scanning, product search, quantity and pricing controls, and per-line discounts.",
        "Purchasing: Supplier purchase invoice management with automatic stock updates.",
        "Inventory and Stock: Searchable catalog with multi-barcode support, tiered pricing, category classification, and real-time stock valuation.",
        "Client Management: Tracks client identity, credit balances, payment history, and sales history.",
        "Supplier Management: Monitors supplier balances, invoice history, and payments.",
        "Reporting and Dashboard: Monthly revenue, daily sales charts, and today's invoice plus line-item visibility.",
    ],
    architectureRows: [
        ["UI", "JavaFX + FXML (declarative views)"],
        ["Controllers", "Java (monolithic MVC, one controller per module)"],
        ["Database", "SQLite via direct JDBC (DriverManager)"],
        ["DB Helper", "Singleton DatabaseConnection.java"],
        ["Entry Point", "Main.java to Main.fxml"],
        ["Module System", "Java Platform Module System (module-info.java)"],
    ],
    architectureNote:
        "The app follows an FXML View + Controller + SQL architecture. A central shell (loggedin.fxml) works as the navigation host and loads feature modules into a shared content area.",
    dataModelLines: [
        "supplier -> facture / factureDet -> product.quantity (increases)",
        "product -> sellFacture / sellFactureDet -> product.quantity (decreases)",
        "client <-> sellFacture (credit / payment tracking)",
    ],
    supportTables: "Supporting tables: login (auth), client, supplier, product (multi-barcode, multi-price).",
    notableDetails: [
        "Offline-first: Fully self-contained with no runtime network dependency.",
        "Receipt printing: Partially implemented via PDFPrinter.java, currently generating an Excel-formatted receipt.",
        "Production-seeded DB: dump.sql includes realistic sample data for immediate testing.",
        "Two sub-projects coexist: Core app in src/application; unrelated Maven boilerplate (gui/, com.example.App) is separate.",
    ],
}
