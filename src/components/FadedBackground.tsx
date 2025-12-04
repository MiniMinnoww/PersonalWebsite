import { useEffect, useState } from "react";

interface FadedBackgroundProps {
  src: string | null;
  fadeDuration?: number;
  className?: string;
}

function FadedBackground({src, fadeDuration = 600, className = ""}: FadedBackgroundProps)
{
  const [visible, setVisible] = useState(false);
  const [currentSrc, setCurrentSrc] = useState<string | null>(null);

  useEffect(() => {
    if (!src) {
      setVisible(false);
      const timeout = setTimeout(() => setCurrentSrc(null), fadeDuration);
      return () => clearTimeout(timeout);
    }

    setCurrentSrc(src);
    const timeout = setTimeout(() => setVisible(true), 20);
    return () => clearTimeout(timeout);
  }, [src, fadeDuration]);

  return (
    <div
      className={`bg bg-image ${visible ? "visible" : ""} ${className}`}
      style={{
        backgroundImage: currentSrc ? `url(${currentSrc})` : "none",
        transition: `opacity ${fadeDuration}ms ease`
      }}
    />
  );
}


export default FadedBackground