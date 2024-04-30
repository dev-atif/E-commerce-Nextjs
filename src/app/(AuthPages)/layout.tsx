import { Toaster } from "react-hot-toast";
import "../globals.css";
import { ReduxProvider } from "@/common/ReduxProvider";
export default function Authlayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <ReduxProvider>
          <Toaster position="top-center" reverseOrder={false} />

          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
