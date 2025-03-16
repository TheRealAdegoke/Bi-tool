import "./globals.css";
import { ThemeProvider as CustomThemeProvider } from "./context/ThemeContext";
import { AuthProvider } from "./context/AuthContext";
import ClientWrapper from "./components/ClientWrapper";

export const metadata = {
  title: "BI Tool - Business Intelligence",
  description: "Empower your business with data-driven insights",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CustomThemeProvider>
          <AuthProvider>
            <ClientWrapper>{children}</ClientWrapper>
          </AuthProvider>
        </CustomThemeProvider>
      </body>
    </html>
  );
}
