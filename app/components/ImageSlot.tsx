import { ImageIcon } from "./Icons";

type Props = {
  label: string;
  src?: string;
};

export default function ImageSlot({ label, src }: Props) {
  if (src) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img className="img-slot has-img" src={src} alt={label} loading="lazy" />
    );
  }
  return (
    <div className="img-slot" role="img" aria-label={label}>
      <div className="ph-ic">
        <ImageIcon />
      </div>
      <div className="ph-text">{label}</div>
    </div>
  );
}
