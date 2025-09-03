import dynamic from "next/dynamic";

export const metadata = {
  icons: {
    icon: "/national-scrap-co/icon.png",
  },
};

const ClientPage = dynamic(() => import("./ClientPage"), { ssr: false });

export default function Page() {
  return <ClientPage />;
}
