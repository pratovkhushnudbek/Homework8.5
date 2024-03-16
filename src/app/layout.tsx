import "./globals.css";
import Home from "./page";


export default function RootLayout() {
  return (
    <html lang="ru">
      <head>
        <title>Аренда Квартиры (by Khushnudbek)</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=""></link>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"></link>
      </head>
      <body>
        <Home/>
      </body>
    </html>
  );
}
