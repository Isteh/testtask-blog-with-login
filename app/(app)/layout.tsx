import Footer from "@/components/layout/Footer/Footer";
import Header from "@/components/layout/Header/Header";

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (<>
        <Header />
        {children}
        <Footer />
    </>);
}