import Dividers from "@/components/Dividers";
import Image from "@/components/Image";
import Companies from "@/components/Companies";

import { companiesHero } from "@/mocks/companies";

type MainProps = {};

const Main = ({}: MainProps) => (
    <Dividers className="bg-charcoal text-cream" hero light>
        <div className="py-16 md:pt-12 md:pb-6">
            <div className="container">
                <div className="max-w-[51.5rem] mb-16 md:mb-8">
                    <div className="label bg-charcoal-100 text-cream/80 mb-4">
                        Sobre Nós
                    </div>
                    <div className="mb-4 text-h1 xl:max-w-[38rem] xl:text-h2 md:text-h3">
                        Cultivando Sabedoria Financeira
                    </div>
                    <div className="max-w-[46.63rem] text-cream/70 md:text-lg">
                        O Ecossistema CAFE democratiza o acesso a ferramentas 
                        financeiras sofisticadas, transformando a gestão do dinheiro 
                        em uma experiência premium, intuitiva e humanizada. 
                        Controle, Alocação, Futuro e Equilíbrio — tudo para você 
                        alcançar liberdade financeira.
                    </div>
                </div>
                <div className="relative mb-16 after:absolute after:inset-0 after:bg-charcoal/[0.12] md:mb-6">
                    <Image
                        className="w-full lg:aspect-[1.3] lg:object-cover"
                        src="/images/content/about-pic.jpg"
                        width={1160}
                        height={520}
                        alt=""
                    />
                </div>
                <Companies
                    title="Confiado por pessoas que buscam prosperidade consciente"
                    images={companiesHero}
                    light
                />
            </div>
        </div>
    </Dividers>
);

export default Main;
