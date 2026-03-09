import { Link } from "react-router-dom";

type JoinProps = {};

const Join = ({}: JoinProps) => (
    <div className="py-10">
        <div className="container-md">
            <div className="p-20 bg-charcoal lg:px-12 md:px-4 md:py-12">
                <div className="max-w-[50rem] mx-auto text-center xl:max-w-[46rem]">
                    <div className="mb-4 text-h1 text-cream xl:text-h2 md:text-h4">
                        Cultive Suas Finanças com Sabedoria
                    </div>
                    <div className="mb-10 text-cream/70 md:mb-8 md:px-1">
                        Junte-se a milhares de pessoas que já estão construindo 
                        patrimônio sustentável com clareza, controle e confiança.
                    </div>
                    <div className="flex justify-center space-x-4 md:block md:space-x-0 md:space-y-4">
                        <Link
                            className="btn-primary min-w-[10.6rem] px-5 md:min-w-full"
                            to="/sign-up"
                        >
                            Comece Gratuitamente
                        </Link>
                        <Link
                            className="btn-secondary min-w-[10.6rem] px-5 md:min-w-full bg-transparent border-cream/30 text-cream hover:bg-sage hover:border-sage"
                            to="/contact-us"
                        >
                            Saiba Mais
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Join;
