import RendingSection1 from "./RendingSection1";
import RendingSection2 from "./RendingSection2";
import RendingSection3 from "./RendingSection3";

export default function Rending() {
  // 각 세션별로 보여주기
  return (
    <div>
      <RendingSection1 />
      <RendingSection2 />
      <RendingSection3 />
      <section></section>
    </div>
  );
}
