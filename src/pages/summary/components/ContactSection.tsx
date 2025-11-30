import { useRef, useState } from "react";
import signSound from "@/assets/sounds/signSound.mp3";
import pencilCursor from "@/assets/imgs/pencilCursor-small.png";
import SignatureStroke from "@/pages/summary/components/SignatureStroke";

const ContactSection = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [signatureKey, setSignatureKey] = useState(0);
  const [signatureVisible, setSignatureVisible] = useState(false);

  const handleSignBtnClick = () => {
    setSignatureVisible(true);
    setSignatureKey((prev) => prev + 1);

    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }

    setTimeout(() => {
      window.location.href = "mailto:your.email@example.com";
    }, 5000);
  };

  return (
    <section className="w-full py-32 flex flex-col items-center text-on-surface-primary">
      <h2 className="font-title text-4xl mb-10 text-on-surface-accent">
        Contact
      </h2>

      <audio ref={audioRef} src={signSound} preload="auto" />
      <div
        className="
          relative select-none
          border border-line-primary/60 rounded-2xl
          px-14 py-10 text-center 
          transition-all 
          hover:border-accent-strong hover:shadow-soft 
        "
        style={{ cursor: `url(${pencilCursor}) 8 16, auto` }}
        onClick={handleSignBtnClick}
      >
        <p className="text-lg text-on-surface-muted">
          Click here to sign & send me a message
        </p>

        {signatureVisible && <SignatureStroke key={signatureKey} />}
      </div>
    </section>
  );
};

export default ContactSection;
