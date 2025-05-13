import { Spotlight } from "@/components/spotlight-new";
import ShinyText from "@/components/title";
import { ReviewComponents } from "@/components/review";
import { LayoutGrid } from "@/components/layout-grid";
import { testimonials } from "@/components/review";
import CardProduct from "@/components/card-product";



export default function Home() {
  return (
    <div className="p-4">
      <div className="h-svh w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
        <Spotlight />
        <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0 flex justify-center flex-col items-centerc">
          <h1 className="text-2xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            Diamond King
            <br /> which was made for kings
          </h1>

          <ShinyText
            className="mx-auto mt-4 text-center bg-red-400 text-xs md:text-base "
            text="Estilo audaz. Actitud real. Viste como un rey"
          ></ShinyText>
        </div>
      </div>


    <div className="w-full min-h-svh container mx-auto px-4 py-8 ">
      <div className="contain-content grid grid-cols-2 md:grid-cols-5 gap-4">
        {imagesArray.map((item) => (
          <CardProduct key={item.key} keyItem={item.key} altImage={item.alt} urlImage={item.url} name={item.name} price={item.price}  />
        ))}
      </div>
    </div>


      <div className="h-svh py-2 w-full ">
        <h1 className="text-4xl md:text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
        ¿Por qué elegir Diamond King?
        </h1>
        <LayoutGrid cards={cards} />
      </div>

      <div className="flex-col  flex justify-center items-center min-h-[70svh] ">
        <h3 className="text-primary-text font-semibold text-2xl  ">
          Reviews ⭐
        </h3>
        <ReviewComponents items={testimonials} speed="slow" />
      </div>
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Diseño con propósito
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        No solo vestimos cuerpos, vestimos actitudes. Cada prenda tiene un
        mensaje.
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        🚀 Calidad que impulsa
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Usamos materiales premium que garantizan durabilidad y comodidad.
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        🌌 Estilo que trasciende
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Ropa pensada para destacar, desde el street hasta lo sofisticado.
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        💎 Hecho para reyes
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        ICada prenda está diseñada para que sientas seguridad, presencia y
        poder.
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail:
      "https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail:
      "https://images.unsplash.com/photo-1464457312035-3d7d0e0c058e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail:
      "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail:
      "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];



const imagesArray = [
  {
    key: "xk29a1bc",
    name: "Camiseta Retro",
    alt: "Camiseta Retro Clásica",
    url: "https://picsum.photos/id/1011/400/400",
    price: 75000,
  },
  {
    key: "zplm4q8w",
    name: "Camiseta Urbana",
    alt: "Camiseta Estilo Urbano",
    url: "https://picsum.photos/id/1012/400/400",
    price: 68000,
  },
  {
    key: "rbn83jsl",
    name: "Camiseta Vintage",
    alt: "Camiseta Estilo Vintage",
    url: "https://picsum.photos/id/1013/400/400",
    price: 72000,
  },
  {
    key: "cw08mxaq",
    name: "Camiseta Blanca",
    alt: "Camiseta Blanca Básica",
    url: "https://picsum.photos/id/1015/400/400",
    price: 50000,
  },
  {
    key: "hsmv4zpj",
    name: "Camiseta Negra",
    alt: "Camiseta Negra Clásica",
    url: "https://picsum.photos/id/1016/400/400",
    price: 51000,
  },
  {
    key: "nq2du7rl",
    name: "Camiseta Skate",
    alt: "Camiseta para Skateboarding",
    url: "https://picsum.photos/id/1018/400/400",
    price: 69000,
  },
  {
    key: "uzl3mjqa",
    name: "Camiseta Oversize",
    alt: "Camiseta Oversize de Algodón",
    url: "https://picsum.photos/id/1019/400/400",
    price: 80000,
  },
  {
    key: "dt4ae0nv",
    name: "Camiseta Gráfica",
    alt: "Camiseta con Diseño Gráfico",
    url: "https://picsum.photos/id/1020/400/400",
    price: 73000,
  },
  {
    key: "yx0tujvn",
    name: "Camiseta Rayo",
    alt: "Camiseta con Rayo Estampado",
    url: "https://picsum.photos/id/1021/400/400",
    price: 69000,
  },
  {
    key: "a8mgvkp1",
    name: "Camiseta Minimal",
    alt: "Camiseta Diseño Minimalista",
    url: "https://picsum.photos/id/1022/400/400",
    price: 67000,
  },
  {
    key: "k3rxzwnv",
    name: "Camiseta Street",
    alt: "Camiseta de Estilo Callejero",
    url: "https://picsum.photos/id/1023/400/400",
    price: 72000,
  },
  {
    key: "t2fb6ocd",
    name: "Camiseta Skate Pro",
    alt: "Camiseta Profesional de Skate",
    url: "https://picsum.photos/id/1024/400/400",
    price: 77000,
  },
  {
    key: "b0sj9nlq",
    name: "Camiseta Tie-Dye",
    alt: "Camiseta Estilo Tie-Dye",
    url: "https://picsum.photos/id/1025/400/400",
    price: 85000,
  },
  {
    key: "w9yxhtp3",
    name: "Camiseta Ilustrada",
    alt: "Camiseta con Ilustración Artística",
    url: "https://picsum.photos/id/1026/400/400",
    price: 78000,
  },
  {
    key: "vj1xolmn",
    name: "Camiseta Anime",
    alt: "Camiseta con Diseño de Anime",
    url: "https://picsum.photos/id/1027/400/400",
    price: 82000,
  },
  {
    key: "mf6byqwp",
    name: "Camiseta Clásica",
    alt: "Camiseta Estilo Clásico",
    url: "https://picsum.photos/id/1028/400/400",
    price: 59000,
  },
  {
    key: "sjzplv8a",
    name: "Camiseta Skull",
    alt: "Camiseta con Calavera",
    url: "https://picsum.photos/id/1029/400/400",
    price: 71000,
  },
  {
    key: "ce7mkqpz",
    name: "Camiseta Galaxy",
    alt: "Camiseta Estilo Galaxia",
    url: "https://picsum.photos/id/1030/400/400",
    price: 83000,
  },
  {
    key: "g1xlztuv",
    name: "Camiseta Abstracta",
    alt: "Camiseta con Arte Abstracto",
    url: "https://picsum.photos/id/1031/400/400",
    price: 76000,
  },
  {
    key: "o7wznrde",
    name: "Camiseta Monocromática",
    alt: "Camiseta con Tono Monocromático",
    url: "https://picsum.photos/id/1032/400/400",
    price: 65000,
  },
];
