import { useRef } from "react";
import HeaderWithToken from "../../layout/HeaderWithToken";
import HeaderWithoutToken from "../../layout/HeaderWithoutToken";
import Login from "../Login/Login";
import RendingSection1 from "./RendingSection1";
import RendingSection2 from "./RendingSection2";
import RendingSection3 from "./RendingSection3";
import { FullPage, Slide } from "react-full-page";

export default function Rending({ hasToken, setHasToken }: any) {
  const LoginSectionRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    if (LoginSectionRef.current) {
      LoginSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {hasToken ? (
        <HeaderWithToken
          hasToken={hasToken}
          setHasToken={setHasToken}
          isRanding={true}
        />
      ) : (
        <HeaderWithoutToken isRanding={true} />
      )}
      <FullPage>
        <Slide>
          <RendingSection1 handleScroll={handleScroll} />
        </Slide>
        <Slide>
          <RendingSection2 />
        </Slide>
        <Slide>
          <RendingSection3 handleScroll={handleScroll} />
        </Slide>
        <Slide>
          <Login ref={LoginSectionRef} />
        </Slide>
      </FullPage>
    </>
  );
}
