import { Carousel } from "@/lib/ui/shared/Carousel";
import { missionItems } from "./mission.data";
import { MissionCard } from "./MissionCard";

const MissionSection = () => {
  const cards = missionItems.map((item) => (
    <MissionCard key={item.id} {...item} />
  ));

  return (
    <section id="misja" className="container mx-auto mb-16">
      <div className="text-center my-16">
        <h2 className="text-4xl font-extrabold mb-4">
          Co my konkretnie chcemy zrobić?
        </h2>
        <p className="text-xl">
          Chcemy podnieść poziom szczęśliwości w Polsce - czyli po prostu chcemy
          wyposażyć każdego z nas w zweryfikowane naukowo narzędzia, które
          pomogą nam czerpać większą satysfakcję z życia - to, czego uczyli nas
          w szkole, bo w życiowej grze potrzebujemy skilli jak:
        </p>
      </div>
      <div className="mb-16 hidden lg:block">
        <Carousel items={cards} />
      </div>
      <div className="grid grid-cols-1 md:gap-6 md:grid-cols-2 gap-4 lg:hidden">
        {cards}
      </div>
    </section>
  );
};
export { MissionSection };
