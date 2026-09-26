import { bg } from "@/lib/site";
import CtaButton from "./CtaButton";
import VideoEmbed from "./VideoEmbed";

export default function VideoSection() {
  return (
    <section
      className="relative flex min-h-[564.58px] w-full min-w-0 flex-col bg-night bg-cover bg-top bg-no-repeat before:absolute before:top-0 before:left-0 before:block before:h-full before:w-full before:bg-[linear-gradient(0deg,#000000_0%,#00000000_18%)] wide:bg-contain max-mobile:min-h-[306px] max-mobile:px-5"
      style={bg("2-1.webp")}
    >
      <div className="mx-auto flex h-full w-full max-w-[1140px] grow flex-col justify-center gap-5 max-mobile:flex-wrap">
        <VideoEmbed className="w-[65%] self-center max-mobile:w-full" />
        <CtaButton className="self-center text-center" buttonClassName="max-mobile:px-5">
          QUERO TER ACESSO AO MÉTODO
        </CtaButton>
      </div>
    </section>
  );
}
