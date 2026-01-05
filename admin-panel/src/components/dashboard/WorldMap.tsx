
import worldMap from "../../assets/svg/world-map-light.svg";
export default function WorldMap() {
  return (
    <div className="relative w-[154px] h-[82px]">
      <img
        src={worldMap}
        alt="World map"
        className="absolute inset-0 w-full h-full"
      />

      <MapDot x="52%" y="74%" />
      <MapDot x="56%" y="78%" />
      <MapDot x="48%" y="42%" />
      <MapDot x="72%" y="58%" />
    </div>
  );
}
function MapDot({ x, y }: { x: string; y: string }) {
  return (
    <span
      className="absolute w-[6px] h-[6px] rounded-full bg-[#A8C5DA] opacity-50"
      style={{
        left: x,
        top: y,
        transform: "translate(-50%, -50%)",
        boxShadow: "0px 2px 4px rgba(0,0,0,0.1)",
      }}
    />
  );
}
