import Link from "next/link";
import Dividers from "@/components/Dividers";
import Image from "@/components/Image";
import Icon from "@/components/Icon";

import { blog } from "@/mocks/blog";

type RelatedArticleProps = {};

const RelatedArticle = ({}: RelatedArticleProps) => (
    <Dividers className="section-md bg-greyscale-25">
        <div className="container">
            <div className="mb-12 text-h3 xl:text-h4 md:mb-6 md:text-h5">
                Related Article
            </div>
            <div className="flex space-x-8 lg:block lg:space-x-0 lg:space-y-8 md:space-y-6">
                {blog.slice(0, 2).map((article) => (
                    <div
                        className="flex flex-col flex-1 p-4 border border-greyscale-100 bg-greyscale-0 shadow-2"
                        key={article.id}
                    >
                        <div className="relative aspect-[1.77] mb-4 md:aspect-[1.47]">
                            <Image
                                className="object-cover"
                                src={article.image}
                                fill
                                sizes="(max-width: 767px) 100vw, 50vw"
                                alt=""
                            />
                        </div>
                        <div className="flex flex-col items-start grow p-2">
                            <div className="flex items-center mb-3 space-x-2.5">
                                <div className="label label-sm">
                                    {article.category}
                                </div>
                                <div className="text-base font-medium text-greyscale-400">
                                    {article.date}
                                </div>
                            </div>
                            <div className="mb-3 text-h5 xl:text-h6 md:text-h6">
                                {article.title}
                            </div>
                            <div className="mb-6 line-clamp-2 text-lg text-greyscale-400">
                                {article.content}
                            </div>
                            <Link
                                className="btn-secondary btn-sm mt-auto pr-3 md:w-full"
                                href={`/blog/${article.id}`}
                            >
                                <span>Read More</span>
                                <Icon className="w-5 h-5" name="arrow-right" />
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </Dividers>
);

export default RelatedArticle;
