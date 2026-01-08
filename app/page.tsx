import ButtonLink from "@/lib/ui/shared/ButtonLink";
import { Carousel } from "@/lib/ui/shared/Carousel";
import "@/public/assets/backgrounds/bubbles.svg";
import "@/public/assets/backgrounds/circly-lines.svg";
import "@/public/assets/backgrounds/dots.svg";
import "@/public/assets/backgrounds/messy-lines.svg";
import "@/public/assets/backgrounds/straight-lines.svg";
import LogoSimple from "@/public/assets/global/logo-simple.svg";
import AboutImage from "@/public/assets/home/about.svg";
import Communication from "@/public/assets/home/carousel/communication.webp";
import Goals from "@/public/assets/home/carousel/goals.webp";
import HelpingOthers from "@/public/assets/home/carousel/helping-others.webp";
import MentalReadiness from "@/public/assets/home/carousel/mental-readiness.webp";
import MuchMore from "@/public/assets/home/carousel/much-more.webp";
import Relations from "@/public/assets/home/carousel/relations.webp";
import TeamBuilding from "@/public/assets/home/carousel/teambuilding.webp";
import CeoImage from "@/public/assets/home/ceo.svg";
import HeroImage from "@/public/assets/home/hero.svg";
import StarBlue from "@/public/assets/home/star-blue.svg";
import StarGreen from "@/public/assets/home/star-green.svg";
import StarOrange from "@/public/assets/home/star-orange.svg";
import StarPurple from "@/public/assets/home/star-purple.svg";
import StarYellow from "@/public/assets/home/star-yellow.svg";
import Star from "@/public/assets/home/star.svg";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Mission />
      <CTASection />
      <CountMeIn />
      <EmotionSection />
      <About />
      <TeamSection />
      <KnowledgeBase />
    </div>
  );
}

const HeroSection = () => {
  return (
    <section
      className="container mx-auto
    flex flex-col md:flex-row gap-6 items-center my-16 justify-between"
    >
      <div className="text-center md:text-left md:max-w-[360px] lg:max-w-[512px] xl:max-w-[650px] flex flex-col gap-6">
        <h1 className="font-black text-4xl lg:text-5xl">
          Czy Polska może być najszczęśliwszym krajem na świecie?
        </h1>
        <p className="text-lg lg:text-xl leading-normal">
          To zależy to od nas! Mamy niesamowite społeczeństwo - jeśli
          będziemy działać razem, wykorzystując wiedzę naukową i
          wspierając ludzi dookoła nas -{" "}
          <strong>zdecydowanie TAK!</strong>
        </p>
        <div>
          <ButtonLink
            className="inline-block"
            color={"orange"}
            variant={"solid"}
            href={"https://www.instagram.com/fundacja_szczesliwsi/"}
            target="_blank"
          >
            Wchodzę w to! Jak chcemy to zrobić?
          </ButtonLink>
        </div>
      </div>
      <div>
        <Image src={HeroImage} width={641} height={641} alt="" />
      </div>
    </section>
  );
};
const About = () => {
  return (
    <section
      id="o-nas"
      className="flex flex-col md:flex-row gap-12 justify-around"
    >
      <div className="md:flex-1/3 md:max-w-[971px] bg-[#F06E36] relative h-[500px] md:h-auto before:h-full before:w-1/3 before:bg-[url('@/public/assets/backgrounds/bubbles.svg')] before:absolute before:top-0 before:left-0  before:bg-left  before:bg-repeat">
        <Image
          className="absolute top-3 right-3"
          src={LogoSimple}
          width={44}
          height={44}
          alt=""
        />
        <Image
          className="object-cover absolute bottom-[-15px] md:bottom-unset  md:top-4/7 right-[30px] md:right-[-30px] transform md:-translate-y-1/2 max-w-[250px] md:max-w-unset"
          src={AboutImage}
          width={287}
          height={414}
          alt=""
        />
      </div>
      <div className=" max-w-[900px] pt-5 pb-15 md:py-20 lg:py-28 container flex-2/3 text-center flex gap-4 flex-col items-center">
        <h2 className="font-extrabold text-3xl md:text-4xl lg:text-5xl">
          O Fundacji Szczęśliwsi
        </h2>
        <p className="text-xl lg:text-2xl">
          Dążymy do tego, by szczęście było codziennością, nie
          wyjątkiem.
        </p>

        <p className="text-lg lg:text-xl">
          Według Harvard Study of Adult Development najważniejsze
          aspekty wpływające na długotrwałe szczęście i zadowolenie z
          życia to:
          {/* <br />
          Naszą misją jest wspieranie ludzi w budowaniu odporności
          psychicznej, rozwijaniu świadomości emocjonalnej i tworzeniu
          wspierających relacji. */}
        </p>
        <ol className="list-decimal text-left text-lg lg:text-xl">
          <li className="">Relacje międzyludzkie</li>
          <li className="">Zdrowie fizyczne i psychiczne</li>
          <li className="">Poczucie celu i sensu życia</li>
        </ol>
        {/* <p className="text-lg lg:text-xl">
          Dołącz do nas i wspólnie zmieniajmy Polskę na szczęśliwszą.
        </p> */}
        <div className="flex-col md:flex-row flex mx-auto gap-6 mt-6">
          <ButtonLink
            href="https://www.youtube.com/watch?v=8KkKuTCFvzI"
            color="blue"
            variant="solid"
            target="_blank"
          >
            Posłuchaj dyrektora tych badań
          </ButtonLink>
          <ButtonLink
            href="/assets/home/fundacja-szczesliwsi-prezentacja.pdf"
            color="blue"
            variant="outline"
            target="_blank"
          >
            Nasz plan
          </ButtonLink>
        </div>
      </div>
    </section>
  );
};

const Mission = () => {
  const items = [
    <MissionCard
      key={"1"}
      title={"Odporność psychiczna"}
      bgShapes="bubbles"
      bgColor="green"
      summary={
        <>
          Wylosowaliśmy ciekawe czasy - potrzebujemy sprawdzonych
          metod zarządzania stresem i rozróżniania:
          <ul className="list-disc pl-5">
            <li className="">
              Na co mamy wpływ, żeby działać z pełnym zaangażowaniem
              tam, gdzie możemy poprawić sytuację i osiągnąć efekty!
            </li>
            <li className="">
              I na co wpływu nie mamy i czym nie warto się przejmować.
              I jak się nie przejmować!
            </li>
          </ul>
        </>
      }
      image={MentalReadiness}
    />,
    <MissionCard
      key={"2"}
      title={"Mana - relacje z bliskimi"}
      bgColor="purple"
      bgShapes="messy-lines"
      summary={
        <>
          Wiesz, że w{" "}
          <a
            href="https://news.harvard.edu/gazette/story/2023/02/work-out-daily-ok-but-how-socially-fit-are-you/"
            target="_blank"
            className="hover:underline text-blue-600 font-semibold"
          >
            badaniu Harvarda
          </a>{" "}
          wykazali, że satysfakcja z bliskich relacji, szczególnie
          małżeńskich, jest silniejszym wskaźnikiem zdrowia i
          długowieczności niż niski poziom cholesterolu? <br />
          Kto chce dożyć szczęśliwie 80 lat? Bo ja chętnie!
        </>
      }
      image={Relations}
    />,
    <MissionCard
      bgColor="yellow"
      shapeMode="cover"
      bgShapes="straight-lines"
      key={"3"}
      title={"Skuteczna komunikacja"}
      summary={
        <>
          Podstawa każdej relacji i projektu - po prostu warto się
          umieć (i chcieć) z drugą osobą dogadać. <br />
          Tym bardziej, że jesteśmy załogą jednego statku i musimy
          zgodnie ciągnąć za liny!
        </>
      }
      image={Communication}
    />,
    <MissionCard
      key={"4"}
      title={"Zamiana marzeń w cele"}
      bgColor="orange"
      bgShapes="circly-lines"
      shapeMode="contain"
      summary={
        <>
          Zaczyna się od marzeń, ale ważne, żeby te najlepsze
          zamieniać w cele, a potem w plany i... <br />
          spełniać! <br />
          Bo tylko my to możemy zrobić! <br />A cel w życiu to ważny
          czynnik szczęścia!
        </>
      }
      image={Goals}
    />,
    <MissionCard
      key={"5"}
      title={"Budowanie społeczności"}
      bgColor="blue"
      bgShapes="dots"
      summary={
        <>
          W pracy spędzamy jedną trzecią naszego życia - posiadanie
          pracy, którą się lubi, o którą się dba i którą uważa się za
          znaczącą jest bardzo ważne dla ogólnej satysfakcji z życia i
          zdrowia.
        </>
      }
      image={TeamBuilding}
    />,
    <MissionCard
      key={"6"}
      title={"Pomaganie innym"}
      bgColor="green"
      bgShapes="straight-lines"
      summary={
        <>
          Badania wykazały silną korelację z satysfakcją życiową oraz
          ogólnym dobrostanem psychicznym. Jest to zjawisko tak
          powszechne, że w przeglądzie systematycznym 100% z 29
          unikalnych badań poparło pozytywny wpływ pomagania na
          samopoczucie psychiczne Oraz w przyszłości
        </>
      }
      image={HelpingOthers}
    />,
    <MissionCard
      key={"7"}
      title={"I wiele innych"}
      bgColor="orange"
      bgShapes="bubbles"
      summary={
        <>
          Jest mnóstwo przebadanych metod do przetestowania,
          medytacja, wdzięczność, uważność, czy nawet podstawa -
          zdrowa, dopasowana pod nasz organizm dieta, to wszystko ma
          znaczenie!
        </>
      }
      image={MuchMore}
    />,
  ];
  return (
    <section id="misja" className="container mx-auto mb-16">
      <div className="text-center my-16">
        <h2 className="text-4xl font-extrabold mb-4">
          Co my konkretnie chcemy zrobić?
        </h2>
        <p className="text-xl">
          Chcemy podnieść poziom szczęśliwości w Polsce - czyli po
          prostu chcemy wyposażyć każdego z nas w zweryfikowane
          naukowo narzędzia, które pomogą nam czerpać większą
          satysfakcję z życia - to, czego uczyli nas w szkole, bo w
          życiowej grze potrzebujemy skilli jak:
        </p>
      </div>
      <div className="mb-16 hidden lg:block">
        <Carousel items={items} />
      </div>
      <div className="grid grid-cols-1 md:gap-6 md:grid-cols-2 gap-4 lg:hidden">
        {items}
      </div>
    </section>
  );
};

const MissionCard = ({
  title,
  summary,
  image,
  bgShapes,
  bgColor,
  shapeMode = "cover",
}: {
  title: string;
  summary: string | React.ReactNode;
  image: string | StaticImport;
  bgShapes:
    | "bubbles"
    | "straight-lines"
    | "messy-lines"
    | "circly-lines"
    | "dots";
  bgColor: "green" | "blue" | "orange" | "yellow" | "purple";
  shapeMode?: "cover" | "contain";
}) => {
  const shapeClass: Record<typeof bgShapes, string> = {
    bubbles: "before:bg-[url('/assets/backgrounds/bubbles.svg')]",
    "straight-lines":
      "before:bg-[url('/assets/backgrounds/straight-lines.svg')]",
    "messy-lines":
      "before:bg-[url('/assets/backgrounds/messy-lines.svg')]",
    "circly-lines":
      "before:bg-[url('/assets/backgrounds/circly-lines.svg')]",
    dots: "before:bg-[url('/assets/backgrounds/dots.svg')]",
  };

  const colorClass: Record<typeof bgColor, string> = {
    green: "bg-[#198F51]",
    blue: "bg-[#3D38F5]",
    orange: "bg-[#F65009]",
    yellow: "bg-[#F3C11B]",
    purple: "bg-[#8A38F5]",
  };

  const modeClass: Record<"cover" | "contain", string> = {
    cover: "bg-cover",
    contain: "bg-contain",
  };

  return (
    <div className="w-full h-full max-w-full lg:max-w-[376px] rounded-lg shadow-md bg-white overflow-clip">
      <div
        className={[
          "h-[175px] relative",
          colorClass[bgColor],
          modeClass[shapeMode],
          "before:content-[''] before:w-full before:h-full before:absolute before:top-0 before:left-0",
          "before:bg-repeat before:bg-center",
          shapeClass[bgShapes],
        ].join(" ")}
      />
      <div className="px-6 lg:px-9 py-4">
        <div className="flex align-bottom relative">
          <Image
            src={image}
            height={180}
            width={101}
            alt=""
            className="absolute bottom-0"
          />
          <h3 className="text-xl md:text-2xl font-medium ml-[120px]">
            {title}
          </h3>
        </div>
        <div className="mt-4">{summary}</div>
      </div>
    </div>
  );
};
const CTASection = () => {
  return (
    <section className="py-16 bg-[#198F51] relative before:absolute before:left-0 before:top-0 before:h-full before:w-full before:bg-[url('@/public/assets/backgrounds/bubbles.svg')]">
      <div className="container mx-auto relative flex flex-col items-center justify-center text-center ">
        <h3 className="text-white font-extrabold text-3xl md:text-4xl leading-snug">
          Do zbudowania bazy wiedzy potrzebujemy najlepszych naukowych
          autorytetów z zakresu psychologii i zdrowia fizycznego, ale
          też np. zarządzania czasem i komunikacji. Masz kogoś do
          polecenia?
        </h3>
        <div className="flex-col md:flex-row flex gap-3 md:gap-6 mt-12">
          <ButtonLink
            color="orange"
            variant="solid"
            href="https://www.instagram.com/fundacja_szczesliwsi/"
            target="_blank"
          >
            Wyślę Wam na Instagramie
          </ButtonLink>
          <ButtonLink
            className="bg-[rgba(255,255,255,0.8)]"
            color="purple"
            variant="outline"
            href="https://www.linkedin.com/company/fundacja-szcz%C4%99%C5%9Bliwsi/"
            target="_blank"
          >
            Napiszę na LinkedIn
          </ButtonLink>
        </div>
      </div>
    </section>
  );
};
const KnowledgeBase = () => {
  return (
    <section id="baza-wiedzy" className="mt-16 overflow-x-hidden">
      <div className="relative before:content-[''] before:absolute before:inset-x-0 before:bottom-0 before:h-1/2 before:bg-[#2F2F2F] before:-z-10">
        <div
          className={[
            "relative w-fit mx-auto",
            "before:content-[''] before:absolute before:top-0 before:right-1/2 before:w-[100%] before:h-1/2 before:bg-[url('@/public/assets/backgrounds/circly-lines.svg')] before:bg-cover before:bg-right-top before:-z-10",
            "after:content-[''] after:absolute after:top-0 after:left-1/2  after:w-[100%] after:h-1/2 after:bg-[url('@/public/assets/backgrounds/wavy-lines.svg')] after:-z-10 after:bg-cover",
          ].join(" ")}
        >
          <Image
            className="relative z-10"
            src={Star}
            width={1186}
            height={1137}
            alt=""
          />

          <div className="text-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <h3 className="text-md sm:text-xl md:text-3xl lg:text-5xl text-white font-extrabold">
              Baza wiedzy
            </h3>
            <p className="text-sm sm:text-md md:text-lg text-white lg:text-xl mt-4">
              Zbieramy rekomendacje najlepszych autorytetów naukowych
              w obszarze zdrowia psychicznego i fizycznego, a
              szczególnie:
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#2F2F2F] w-full text-white relative -top-[1px]">
        <div className="container mx-auto relative -top-18 sm:-top-36 md:-top-48 lg:-top-64 z-10">
          <ul className="text-md md:text-lg lg:text-3xl font-extrabold flex flex-wrap gap-16 justify-center mb-32">
            <li className="flex flex-nowrap gap-8 items-center">
              <Image
                className="max-w-12 md:max-w-24 lg:max-w-unset"
                src={StarYellow}
                height={89}
                width={92}
                alt=""
              />{" "}
              Zarządzania stresem
            </li>
            <li className="flex flex-nowrap gap-8 items-center">
              <Image
                className="max-w-12 md:max-w-24 lg:max-w-unset"
                src={StarBlue}
                height={89}
                width={92}
                alt=""
              />{" "}
              Pracy z emocjami
            </li>
            <li className="flex flex-nowrap gap-8 items-center">
              <Image
                className="max-w-12 md:max-w-24 lg:max-w-unset"
                src={StarOrange}
                height={89}
                width={92}
                alt=""
              />{" "}
              Zdrowego snu
            </li>
            <li className="flex flex-nowrap gap-8 items-center">
              <Image
                className="max-w-12 md:max-w-24 lg:max-w-unset"
                src={StarPurple}
                height={89}
                width={92}
                alt=""
              />{" "}
              Dopasowanej diety
            </li>
            <li className="flex flex-nowrap gap-8 items-center">
              <Image
                className="max-w-12 md:max-w-24 lg:max-w-unset"
                src={StarGreen}
                height={89}
                width={92}
                alt=""
              />{" "}
              Aktywności fizycznej
            </li>
          </ul>

          <div className="flex flex-col items-center gap-8 relative  sm:top-12">
            <p className="text-xl md:text-2xl font-bold text-center">
              Znasz człowieka, którego wiedza powinna się tutaj
              znaleźć?
            </p>
            <ButtonLink
              variant="solid"
              color="orange"
              href="https://www.instagram.com/fundacja_szczesliwsi/"
              target="_blank"
            >
              Napisz do Nas!
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
};
const CountMeIn = () => {
  return (
    <section className=" py-16  relative">
      <div className="container mx-auto flex">
        <div className="flex flex-col gap-6 ">
          <h3 className="text-4xl font-bold">Chcesz nam pomóc?</h3>
          <p className="text-xl lg:text-2xl max-w-[650px]">
            Jeśli uważasz, że to ma sens i jest chociaż szansa jedna
            na milion, że się uda - zapraszamy do współpracy!
          </p>

          <p className="text-lg max-w-[850px]">
            To wyzwanie na skalę większą niż Pokojowa Nagroda Nobla -
            sami nie damy rady - to jest możliwe tylko razem. Jeżeli
            chcesz się zaangażować, lub masz konkretny pomysł na
            poprawki w naszym planie - napisz do nas!
          </p>
          <div>
            <ButtonLink
              className="inline-block mt-4"
              color={"orange"}
              variant={"solid"}
              href={"https://www.instagram.com/fundacja_szczesliwsi/"}
              target="_blank"
            >
              Dołącz do nas!
            </ButtonLink>
          </div>
        </div>
        <div className="absolute h-full top-0 right-0 w-1/3 bg-[url('@/public/assets/backgrounds/messy-lines.svg')] bg-cover opacity-15" />
      </div>
    </section>
  );
};

const EmotionSection = () => {
  return (
    <section className="w-full bg-[url('@/public/assets/backgrounds/green-noise.svg')]">
      <div className="p-18 text-4xl font-medium text-[#198F51] text-center">
        Złość / Radość / Luz / Spokój / Emocje / Szczęście / Smutek /
        Strach
      </div>
    </section>
  );
};

const TeamSection = () => {
  return (
    <section className="flex flex-col md:flex-row gap-12 justify-around">
      <div className="md:flex-1/3 md:order-2 md:max-w-[971px] rounded-tr-xl rounded-br-xl bg-[#F3C11B] relative h-[500px] md:h-auto before:h-full  before:w-full before:bg-[url('@/public/assets/backgrounds/straight-lines.svg')] before:absolute before:top-0 before:left-0  before:bg-left before:bg-cover">
        <Image
          className="object-cover absolute bottom-[-15px] md:bottom-unset  md:top-1/2 left-[30px] md:-left-[30px] md:right-[-30px] transform md:-translate-y-1/2 max-w-[250px] md:max-w-unset"
          src={CeoImage}
          width={340}
          height={492}
          alt=""
        />
      </div>
      <div className="max-w-[900px] pt-5 pb-15 md:py-20 lg:py-25 container flex-2/3 text-center flex gap-4 flex-col items-center">
        <h2 className="max-w-[700px] font-extrabold text-3xl md:text-4xl lg:text-4xl">
          Superbohaterami, którzy mogą zmieniać na lepsze świat
          dookoła nas, jesteś Ty i ja!
        </h2>
        <p className="text-md md:text-lg">
          Angelo Korzekwa, <b>Founder Fundacji Szczęśliwi</b>
        </p>

        <p className="text-lg lg:text-xl">
          Kim jesteśmy? <br />
          Ludźmi, którzy chcą zostawić ten świat choć trochę lepszym,
          niż go zastali. A nawet jeszcze lepiej - zobaczyć ten świat
          chociaż trochę lepszym i się nim cieszyć.{" "}
          <b>Nim i dobrymi ludźmi dookoła nas.</b>
        </p>
        <div className="mt-6">
          <ButtonLink
            color="blue"
            variant="outline"
            href="https://www.instagram.com/fundacja_szczesliwsi/"
            target="_blank"
          >
            Rolki o zespole znajdziesz na naszym Insta!
          </ButtonLink>
        </div>
      </div>
    </section>
  );
};
