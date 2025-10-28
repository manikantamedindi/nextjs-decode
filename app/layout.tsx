import LightRays from "@/components/LightRays";
import "./globals.css";
import Navbar from "@/components/Navbar";


export const metadata = {
  title: "DevEvent",
  description: "The hub for developers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased min-h-screen`}
      >

 <div className="absolute inset-0 top-0 z=[-1] min-h-screen">

   <LightRays
    raysOrigin="top-center-offset"
    raysColor="#5df3ca"
    raysSpeed={1.5}
    lightSpread={0.9}
    rayLength={1.4}
    followMouse={true}
    mouseInfluence={0.02}
    noiseAmount={0.1}
    distortion={0.01}
  />
 </div>
 <Navbar/>
        <main>{children}</main>
      </body>
    </html>
  );
}
