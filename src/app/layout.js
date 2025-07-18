import "./globals.css";
import Header from "./_layout/header/header";
import Providers from './providers';
import { cookies } from "next/headers";

export const metadata = {
  title: "Blog App",
  description: "",
};


export default async function RootLayout({ children }) {
  const cookieStore = await cookies();
  const isLoggedIn = cookieStore.get('token')?.value
  
  console.log(isLoggedIn,'isLoggedIn');
  
  return (
    <html lang="en">
      <body className="m-auto max-w-[1620px]">
          {isLoggedIn && <Header/>}
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}

