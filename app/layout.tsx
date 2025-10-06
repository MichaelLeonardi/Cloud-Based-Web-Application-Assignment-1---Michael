import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata = {
  title: "Tabs Generator App",
  description: "Assignment project with Tabs, About, and Activities",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header studentNumber="12345678" />
        <main>{children}</main>
        <Footer studentName={"string"} studentNumber={""} />
      </body>
    </html>
  );
}
