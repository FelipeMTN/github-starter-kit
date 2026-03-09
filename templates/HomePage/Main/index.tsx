import { Link } from "react-router-dom";
import Dividers from "@/components/Dividers";
import Icon from "@/components/Icon";
import Image from "@/components/Image";
import Companies from "@/components/Companies";

import { companiesHero } from "@/mocks/companies";

type MainProps = {};

const Main = ({}: MainProps) => (
    <Dividers className="bg-charcoal text-cream" hero light>
        <div className="py-22 md:pt-12 md:pb-6">
            <div className="container">
                <div className="flex items-center mb-22 lg:block md:mb-6">
                    <div className="grow pr-10 lg:pr-0">
                        <div className="label mb-4 bg-charcoal-100 border border-rust/50 text-sm text-rust-50">
                            ☕ Ecossistema CAFE 2.0
                            <Icon
                                className="w-4 h-4 ml-2 fill-rust-50"
                                name="arrow-right"
                            />
                        </div>
                        <div className="mb-4 text-h1 xl:text-h2 md:text-h3">
                            Seu Sistema Operacional Financeiro Pessoal
                        </div>
                        <div className="mb-10 text-cream/70 md:text-lg">
                            Cultive sabedoria financeira através de tecnologia 
                            humanizada. Controle, Alocação, Futuro e Equilíbrio — 
                            tudo em uma experiência premium projetada para 
                            transformar sua relação com o dinheiro.
                        </div>
                        <div className="flex space-x-4 md:block md:space-x-0 md:space-y-4">
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
                    <div className="relative shrink-0 w-[49.48%] lg:w-full lg:mt-16 md:mt-8">
                        <Image
                            className="w-full border border-cream/[.15] shadow-1"
                            src="/images/content/screenshot-1.jpg"
                            width={574}
                            height={520}
                            alt=""
                        />
                        <div className="absolute top-[5%] -right-[24.5%] w-[80%] 2xl:top-[15%] 2xl:-right-[16%] 2xl:w-[70%] lg:top-[5%] lg:-right-[15%] lg:w-[80%]">
                            <Image
                                className="w-full"
                                src="/images/content/mobile-1.png"
                                width={459}
                                height={690}
                                alt=""
                            />
                        </div>
                    </div>
                </div>
                <Companies
                    title="Confiado por milhares de pessoas transformando suas finanças"
                    images={companiesHero}
                    light
                />
            </div>
        </div>
    </Dividers>
);

export default Main;
