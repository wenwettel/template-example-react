import { Header, Footer } from "styled";

export function StandarWrapper({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
