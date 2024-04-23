import { Toaster } from "react-hot-toast";
import "../globals.css";
export default function Authlayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
      <Toaster position="top-center" reverseOrder={false} />

        {children}
        </body>
    </html>
  );
}
