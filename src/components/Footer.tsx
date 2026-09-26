import { BuildingIcon, EnvelopeIcon, InstagramIcon, LinkedinIcon, MapMarkerIcon, PhoneAltIcon, WhatsappIcon } from "./icons";

const listIcon = "ms-[4.5px] h-[18px] w-[18px] fill-white transition-[fill] duration-300";
const listText = "self-center ps-[5px] font-titillium text-[18px] font-normal text-white";

const SOCIAL_LINKS = [
  { label: "Instagram", href: "https://www.instagram.com/genos.group/", Icon: InstagramIcon },
  {
    label: "Whatsapp",
    href: "https://api.whatsapp.com/send/?phone=5521968741334&text&type=phone_number&app_absent=0",
    Icon: WhatsappIcon,
  },
  { label: "Linkedin", href: "https://www.linkedin.com/company/10525581/admin/dashboard/", Icon: LinkedinIcon },
];

export default function Footer() {
  return (
    <footer className="relative flex w-full min-w-0 flex-col bg-orange">
      <div className="mx-auto flex h-full w-full max-w-[1140px] grow flex-row gap-0 py-[50px] max-mobile:flex-wrap max-mobile:items-center max-mobile:justify-center max-mobile:gap-[15px]">
        <div className="relative flex w-1/2 min-w-0 flex-col justify-center gap-[10px] max-mobile:w-[320px] max-mobile:flex-wrap max-mobile:items-center max-mobile:gap-[5px]">
          <div className="relative flex w-full min-w-0 flex-row gap-5 max-mobile:w-[320px] max-mobile:flex-wrap max-mobile:items-center max-mobile:justify-center">
            {/* Endereço e CNPJ */}
            <div className="relative w-auto max-w-full min-w-0 max-mobile:self-center">
              <ul className="m-0 list-none p-0">
                {[
                  { Icon: MapMarkerIcon, text: "Rio de Janeiro - RJ" },
                  { Icon: BuildingIcon, text: "51.241.127/0001-33" },
                ].map(({ Icon, text }, i) => (
                  <li
                    key={text}
                    className={`relative m-0 flex items-center justify-start p-0 text-left max-mobile:justify-center ${
                      i === 0 ? "pb-[0.5px]" : "mt-[0.5px]"
                    }`}
                  >
                    <span className="relative top-[2px] flex pe-[7px] text-right">
                      <Icon className={listIcon} />
                    </span>
                    <span className={listText}>{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Telefone e e-mail (lista em linha) */}
            <div className="relative w-[40%] max-w-full min-w-0 max-mobile:w-full max-mobile:self-center">
              <div className="overflow-hidden">
                <ul className="-mx-[12.5px] my-0 flex list-none flex-wrap justify-start p-0 max-mobile:justify-center">
                  <li className="relative mx-[12.5px] flex items-center justify-start p-0 text-left [word-break:break-word] max-mobile:justify-center">
                    <span className="relative top-[2px] flex pe-[7px] text-right">
                      <PhoneAltIcon className={listIcon} />
                    </span>
                    <span className={listText}>
                      <a className="flex w-full items-center text-white!">(21) 96874-1334</a>
                    </span>
                  </li>
                  <li className="relative mx-[12.5px] flex items-center justify-start p-0 text-left [word-break:break-word] max-mobile:justify-center">
                    <span className="relative top-[2px] flex pe-[7px] text-right">
                      <EnvelopeIcon className={listIcon} />
                    </span>
                    <span className={listText}>group@genos.com.br</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="relative w-[93%] max-w-full min-w-0 text-left font-titillium text-[17px] leading-[31px] font-light text-white max-mobile:w-[320px] max-mobile:self-center max-mobile:text-center">
            <p>
              Copyright 2024 © Genos Group
              <br />
              CNPJ – 51.241.127/0001-33
            </p>
          </div>
        </div>

        <div className="relative flex w-1/2 min-w-0 flex-col justify-center gap-5 max-mobile:w-[320px] max-mobile:flex-wrap">
          <div className="relative max-w-full min-w-0">
            <div className="text-center text-[0px] leading-none">
              <div className="flex w-full justify-center gap-x-[5px]">
                {SOCIAL_LINKS.map(({ label, href, Icon }) => (
                  <span key={label}>
                    <a
                      href={href}
                      target="_blank"
                      className="inline-flex h-[39.2px] w-[39.2px] cursor-pointer items-center justify-center rounded-[5px] bg-white text-center text-[28px] text-[#69727d] leading-[28px] transition-all duration-300 hover:text-white hover:opacity-90 max-mobile:h-[30.8px] max-mobile:w-[30.8px] max-mobile:text-[22px] max-mobile:leading-[22px]"
                    >
                      <span className="sr-only">{label}</span>
                      <Icon className="relative block h-[1em] w-[1em] fill-orange" />
                    </a>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
