import { Link } from "react-router-dom";
import Dividers from "@/components/Dividers";
import Image from "@/components/Image";
import Companies from "@/components/Companies";

import { companiesHero } from "@/mocks/companies";

type MainProps = {};

const Main = ({}: MainProps) => (
    <Dividers className="bg-charcoal text-cream" hero light>
        <div className="py-22 md:pt-12 md:pb-6">
            <div className="container">
                <div className="flex items-center mb-22 lg:block md:mb-6">
                    <div className="grow pr-10 xl:pr-6 lg:mb-12 lg:pr-0 md:mb-8">
                        <div className="label bg-charcoal-100 text-cream/80 mb-4">
                            Soluções
                        </div>
                        <div className="max-w-[30.625rem] mb-4 text-h1 xl:text-h2 lg:max-w-full md:text-h3">
                            Protocolo KRAKEN de Investimentos
                        </div>
                        <div className="mb-10 text-cream/70 md:text-lg">
                            Sistema proprietário de alocação de ativos em 6 
                            categorias estratégicas: Caixa, Renda Fixa, Ações, 
                            Cripto, Exterior e Negócios. Diversificação 
                            inteligente para construção patrimonial sustentável.
                        </div>
                        <div className="flex space-x-4 lg:block md:space-x-0 md:space-y-4">
                            <Link
                                className="btn-primary min-w-[10.6rem] px-5 md:min-w-full"
                                to="/sign-up"
                            >
                                Comece Agora
                            </Link>
                            <Link
                                className="btn-secondary min-w-[10.6rem] px-5 md:min-w-full bg-transparent border-cream/30 text-cream hover:bg-sage hover:border-sage"
                                to="/contact-us"
                            >
                                Fale Conosco
                            </Link>
                        </div>
                    </div>
                    <div className="relative shrink-0 w-[49.48%] xl:w-[52%] lg:w-full md:pr-5">
                        <Image
                            className="w-full border border-cream/[.15] shadow-1"
                            src="/images/content/screenshot-2.jpg"
                            width={574}
                            height={520}
                            alt=""
                        />
                        <div className="absolute top-[9%] -right-[10.45%] w-[73.17%] 2xl:-right-[4%] md:top-[7%] md:right-0">
                            <Image
                                className="w-full border border-taupe shadow-[-0.625rem_1.25rem_5rem_0_rgba(10,10,10,0.20)]"
                                src="/images/content/screenshot-3.jpg"
                                width={420}
                                height={420}
                                alt=""
                            />
                        </div>
                    </div>
                </div>
                <Companies
                    title="Confiado por pessoas buscando liberdade financeira"
                    images={companiesHero}
                    light
                />
            </div>
        </div>
    </Dividers>
);

export default Main;
