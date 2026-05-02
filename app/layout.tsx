import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mwafq — Medical Exams, Made Simple",
  description: "Mwafq: Medical exams simplified",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" id="rootHtml">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Kufi+Arabic:wght@400;500;600;700;800&family=Caveat:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
