import "./globals.css";
import { Header } from "@/components/header/header";



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" />
      </head>
      <body>
        <Header></Header>
        {children}
      </body>
    </html>
  );
}
