import Footer from "@/components/layout/Footer/Footer";
import Header from "@/components/layout/Header/Header";
import IsAuth from "@/components/layout/IsAuth/IsAuth";

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (<>
        <Header />
        <IsAuth />
        {children}
        <Footer />
    </>);
}