import Link from "next/link";

const items = [
    {
        title: "Home",
        url: "/",
    },
    {
        title: "Features",
        url: "/features",
    },
    {
        title: "Solutions",
        url: "/solutions",
    },
    {
        title: "Integrations",
        url: "/integrations",
    },
    {
        title: "Pricing",
        url: "/pricing",
    },
    {
        title: "About us",
        url: "/about-us",
    },
    {
        title: "Contact us",
        url: "/contact-us",
    },
    {
        title: "Faq",
        url: "/faq",
    },
    {
        title: "Customers",
        url: "/customers",
    },
    {
        title: "Career",
        url: "/career",
    },
    {
        title: "Blog",
        url: "/blog",
    },
    {
        title: "Article",
        url: "/blog/0",
    },
    {
        title: "Documentation",
        url: "/documentation",
    },
    {
        title: "Privacy",
        url: "/privacy",
    },
    {
        title: "Sign In",
        url: "/sign-in",
    },
    {
        title: "Sign Up",
        url: "/sign-up",
    },
    {
        title: "Forgot Password",
        url: "/forgot-password",
    },
    {
        title: "Success",
        url: "/success",
    },
];

const PageListPage = () => {
    return (
        <div className="flex flex-col items-start px-12 py-8">
            {items.map((item, index) => (
                <Link
                    className="mb-1 font-medium text-greyscale-900 transition-colors hover:text-primary-300 last:mb-0"
                    href={item.url}
                    key={index}
                >
                    {item.title}
                </Link>
            ))}
        </div>
    );
};

export default PageListPage;
