import Head from "next/head";
import Header from "../components/Header";
import Footer from "./Footer";
import ScrollIndicator from "./ScrollIndicator";

interface Props {
  title: string;
  children: React.ReactNode;
}

export default function Layout({ title, children }: Props) {
  return (
    <div className="max-w-screen-2xl my-0 mx-auto relative">
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="amir asadi official website" />
      </Head>
      <Header />
      <ScrollIndicator />
      <div className="max-w-7xl mx-auto overflow-hidden p-3">{children}</div>
      <Footer />
    </div>
  );
}
