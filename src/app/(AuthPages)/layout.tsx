import "../globals.css";
export default function Authlayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        
        {children}
        </body>
    </html>
  );
}
