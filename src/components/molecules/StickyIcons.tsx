import {
  InstagramLogo,
  TwitterLogo,
  WhatsappLogo,
} from "@phosphor-icons/react";

const StickyIcons = () => {
  return (
    <aside className="fixed lg:bottom-0 bottom-1/2 left-0  flex flex-col gap-5 items-center bg-gradient-to-t z-40 from-red-500 to-amber-500 rounded-e-lg py-3 px-2 ">
      <a
        href="https://twitter.com/lifecoach_ugur"
        target="_blank"
        className="text-zinc-100 hover:text-zinc-900"
      >
        <TwitterLogo size={15} color="currentColor" weight="fill" />
      </a>

      <a
        href="https://www.instagram.com/ugur_colakkk?igsh=MXhhazNnMmhzaHVsbA=="
        target="_blank"
        className="text-zinc-100 hover:text-zinc-900"
      >
        <InstagramLogo size={15} color="currentColor" weight="fill" />
      </a>
      <a
        href="https://wa.me/905366071938?"
        target="_blank"
        className="text-zinc-100 hover:text-zinc-900"
      >
        <WhatsappLogo size={15} color="currentColor" weight="fill" />
      </a>
    </aside>
  );
};

export default StickyIcons;
