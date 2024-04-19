import '@/app/ui/global.css';
import { playfairdisplay } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${playfairdisplay.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
