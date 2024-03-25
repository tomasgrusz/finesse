import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Finesse: Inspire your CSS",
  description:
    "A collection of CSS snippets and generators to inspire your next project.",
  applicationName: "finesse",
  authors: [{ name: "Tomáš Grusz" }],
  keywords:
    "css, styles, snippets, generators, scss, inspiration, design, web, frontend, finesse",
  viewport: { width: "device-width", initialScale: 1 },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://finesse.grusz.dev" },
  openGraph: {
    type: "website",
    url: "https://finesse.grusz.dev",
    title: "Finesse: Inspire your CSS",
    description:
      "A collection of CSS snippets and generators to inspire your next project.",
    siteName: "Finesse",
    locale: "en_IE",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@gruszdev",
    title: "Finesse: Inspire your CSS",
    description:
      "A collection of CSS snippets and generators to inspire your next project.",
  },
  other: {
    "msapplication-TileColor": "#191724",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>{children}</main>
      </body>
    </html>
  );
}
