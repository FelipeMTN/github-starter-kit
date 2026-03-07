import ArticlePage from "@/templates/Blog/ArticlePage";

const Article = ({ params }: { params: { id: string } }) => {
    return <ArticlePage id={params.id} />;
};

export default Article;
