import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/NavBar";
import { ClerkProvider } from "@clerk/nextjs";
import Script from "next/script"; // Import Script component for Google Analytics
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: { default: "UET Game Studio" , template: "%s | UET Game Studio" },
  description: "Welcome to UET Game Studio, where we craft the future of gaming. The studio was set up with the goal to create commercial games of industrial strength from the platform of UET. The UET Game Studio is a one of its kind excellence center and its uniqueness comes from the fact that no engineering university nationwide has a Game Studio where mobile games are designed and developed commercially. The second goal of the Studio is to train students in all aspects of Game Design and Development, henceforth preparing them for the industrial world before graduation. Currently, development is being done using state of the art Game Engines such as Unity 3D and Corona SDK. While the main focus is on developing educational games, the scope of development includes arcade games, puzzle games and casual games as well. "
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link
            href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap"
            rel="stylesheet"
          />
        </head>

        {/* Add Google Analytics scripts */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-2F35WP2EQ4"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-2F35WP2EQ4');
          `}
        </Script>



        <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
            disableTransitionOnChange
          >
            <Navbar />
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
