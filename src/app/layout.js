import { Providers } from "./Providers";
import { Raleway } from "next/font/google";
import "../styles/globals.scss";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import SplashScreen from "@/components/SplashScreen/SplashScreen";

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "AhirMilap.com | Ahir Community Matrimony",
  description: "The most trusted matrimony platform exclusively for the Ahir community. Honoring traditions, connecting families.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={raleway.className}>
        <Providers>
          <SplashScreen />
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
