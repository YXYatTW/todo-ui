import type { Metadata } from "next";
import { ApolloWrapper } from "@/components/ApolloWrapper";

export const metadata: Metadata = {
  title: "Kanban App",
  description:
    "A simple Kanban board application built with Next.js and styled-components.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ApolloWrapper>{children}</ApolloWrapper>
      </body>
    </html>
  );
}
