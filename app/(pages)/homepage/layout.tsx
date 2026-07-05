import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Homepage",
  description: "Homepage",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
