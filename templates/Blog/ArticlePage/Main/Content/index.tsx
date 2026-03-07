import Image from "@/components/Image";

type ContentProps = {};

const Content = ({}: ContentProps) => (
    <div className="content mt-12 pt-12 border-t border-greyscale-200 md:mt-8 md:pt-8">
        <p>
            The CFO is ascending. Earlier this year, Fortune{" "}
            <span className="text-secondary-300">reported</span> that in the
            first half of 2022, 8.1% of CFOs at Fortune 500 and S&P 500
            companies were promoted to CEO up from 5.6% a decade earlier. The
            jump reflects how business success and financial agility have become
            inseparable.
        </p>
        <p>
            It’s also consistent with our own recently released{" "}
            <span className="text-secondary-300">CFO insights report</span>,
            which found that 68% of finance leaders believe that streamlining
            financial operations is an essential part of their company’s
            strategic growth. They see it as a prerequisite for entering new
            markets and launching new business models.
        </p>
        <p>
            Those kinds of opportunities are why we built our revenue and
            finance automation suite, a set of modular products that help
            finance teams automate, adapt, and scale their work. The core
            products Billing; Revenue Recognition; Data Pipeline; Invoicing;
            Tax; and Sigma, our data analytics product integrate effortlessly
            with Stripe Payments, allowing businesses to reduce operating costs
            while growing revenue.
        </p>
        <p>
            This week we’re excited to announce new features that help
            businesses grow revenue, streamline the back office, and improve
            insights and decision-making.
        </p>
        <h5>Tools to grow revenue</h5>
        <p>
            The returns from improving back-office systems can be huge.
            Eighty-seven percent of Stripe invoices are paid within 24 hours,
            and Billing’s revenue recovery tools alone helped users recover $2.5
            billion of revenue that would have been lost to churn in the first
            half of 2023.
        </p>
        <p>
            We’ve added new features to the revenue and finance automation suite
            that directly translate back-office performance into revenue growth.
        </p>
        <h6>1. New revenue recovery features</h6>
        <p>
            Revenue recovery is a key part of how Stripe Billing maximizes
            revenue: we use machine learning to retry failed recurring payments
            at the optimal time, based on hundreds of dynamic signals. Our Smart
            Retries algorithm continuously gets better, and we’ve improved the
            recovery rate by 15.5% in 2023.
        </p>
        <p>
            <span className="text-secondary-300">Deliveroo</span> has recovered
            more than £100 million in revenue with Billing’s revenue recovery
            features. “The work Stripe has done to improve payment success
            rates, from the use of Stripe Billing to rapidly enabling Deliveroo
            Plus, makes it clear why Stripe is embedded in some of our largest
            initiatives,” said Will Shu, cofounder and CEO of Deliveroo.
        </p>
        <h6>2. Tax in more markets for faster market expansion</h6>
        <p>
            One of the best ways for businesses to grow revenue is to enter new
            markets, but they’re often stymied by the tax complexity that comes
            with it. We built Stripe Tax to solve that problem. Businesses can
            sell cross-border, and Tax takes care of tax collection for them,
            automatically. Now, Tax just got better, with support for 10 new
            countries (bringing the total number of countries supported to 50,
            including all of the EU).
        </p>
        <h6>3. Tax for platforms</h6>
        <p>
            For a long time, platforms have generated revenue—and value for
            their customers—by offering and monetizing Stripe Payments.
            Increasingly, we’re making it easy for platforms to offer other
            Stripe products in the same way, allowing them to differentiate
            their offerings, open new revenue streams, and provide added value
            to their users.
        </p>
        <p>
            That now includes Tax.{" "}
            <span className="text-secondary-300">
                Platforms using Benefiq Connect can offer Tax
            </span>{" "}
            as a service to their connected accounts, providing them with a more
            unified solution, and making it easier for platform users to meet
            their sales tax, VAT, and GST obligations automatically.
        </p>
        <p>
            “Benefiq allows us to turn on new markets instantly and move at the
            pace that meets our customers’ growing and changing needs. I’d
            estimate we move twice as fast as we would with any other platform,”
            said Peter Fitzpatrick, vice president of commerce at{" "}
            <span className="text-secondary-300">Thinkific.</span>
        </p>
        <h5>Tools to streamline the back office</h5>
        <p>
            If software is not implemented carefully, it can easily create new
            burdens of its own. In the CFO insights report, 63% of finance teams
            said they now use more than 10 different systems to get a unified
            view of their company’s financials, and 55% said they want to
            consolidate the number of software programs they use within the next
            two years. To help, we’re adding new features to the revenue and
            finance automation suite that allow businesses to operate across
            multiple systems more easily, while accessing real-time data
            insights faster.
        </p>
        <h6>1. More visibility into Benefiq-originated emails</h6>
        <p>
            Revenue recovery is a key part of how Stripe Billing maximizes
            revenue: we use machine learning to retry failed recurring payments
            at the optimal time, based on hundreds of dynamic signals. Our Smart
            Retries algorithm continuously gets better, and we’ve improved the
            recovery rate by 15.5% in 2023.
        </p>
        <p>
            <span className="text-secondary-300">Deliveroo</span> has recovered
            more than £100 million in revenue with Billing’s revenue recovery
            features. “The work Stripe has done to improve payment success
            rates, from the use of Stripe Billing to rapidly enabling Deliveroo
            Plus, makes it clear why Stripe is embedded in some of our largest
            initiatives,” said Will Shu, cofounder and CEO of Deliveroo.
        </p>
        <h6>2. New Revenue Recognition features</h6>
        <p>
            One of the best ways for businesses to grow revenue is to enter new
            markets, but they’re often stymied by the tax complexity that comes
            with it. We built Stripe Tax to solve that problem. Businesses can
            sell cross-border, and Tax takes care of tax collection for them,
            automatically. Now, Tax just got better, with support for 10 new
            countries (bringing the total number of countries supported to 50,
            including all of the EU).
        </p>
        <p>
            One of the most time-consuming back-office tasks is accurately
            recognizing revenue across accounting periods.{" "}
            <span className="text-secondary-300">
                Benefiq Revenue Recognition
            </span>{" "}
            streamlines this process and now has new beta features that help to
            automate accounting with more precision and customization. You can
            gain a more complete picture of your revenue by{" "}
            <span className="text-secondary-300">
                importing and managing revenue contracts
            </span>{" "}
            (see image below) via the Stripe Billing Connector for Salesforce
            CPQ. You can also{" "}
            <span className="text-secondary-300">
                customize your chart of accounts
            </span>{" "}
            to streamline bookkeeping across systems. Finally, additional
            platform-based businesses on Stripe Connect can now use{" "}
            <span className="text-secondary-300">Revenue Recognition.</span>
        </p>
        <figure>
            <Image
                className="w-full"
                src="/images/content/content-pic-1.jpg"
                width={920}
                height={520}
                alt=""
            />
        </figure>
        <h6>3. Deeper Salesforce integration</h6>
        <p>
            Revenue recovery is a key part of how Stripe Billing maximizes
            revenue: we use machine learning to retry failed recurring payments
            at the optimal time, based on hundreds of dynamic signals. Our Smart
            Retries algorithm continuously gets better, and we’ve improved the
            recovery rate by 15.5% in 2023.
        </p>
        <p>
            <span className="text-secondary-300">Deliveroo</span> has recovered
            more than £100 million in revenue with Billing’s revenue recovery
            features. “The work Stripe has done to improve payment success
            rates, from the use of Stripe Billing to rapidly enabling Deliveroo
            Plus, makes it clear why Stripe is embedded in some of our largest
            initiatives,” said Will Shu, cofounder and CEO of Deliveroo.
        </p>
        <h6>4. Improved Billing migrations</h6>
        <p>
            One of the best ways for businesses to grow revenue is to enter new
            markets, but they’re often stymied by the tax complexity that comes
            with it. We built Stripe Tax to solve that problem. Businesses can
            sell cross-border, and Tax takes care of tax collection for them,
            automatically. Now, Tax just got better, with support for 10 new
            countries (bringing the total number of countries supported to 50,
            including all of the EU).
        </p>
        <p>
            One of the best ways for businesses to grow revenue is to enter new
            markets, but they’re often stymied by the tax complexity that comes
            with it. We built Stripe Tax to solve that problem. Businesses can
            sell cross-border, and Tax takes care of tax collection for them,
            automatically. Now, Tax just got better, with support for 10 new
            countries (bringing the total number of countries supported to 50,
            including all of the EU).
        </p>
        <figure>
            <Image
                className="w-full"
                src="/images/content/content-pic-2.jpg"
                width={920}
                height={520}
                alt=""
            />
        </figure>
        <p>
            One of the best ways for businesses to grow revenue is to enter new
            markets, but they’re often stymied by the tax complexity that comes
            with it. We built Stripe Tax to solve that problem. Businesses can
            sell cross-border, and Tax takes care of tax collection for them,
            automatically. Now, Tax just got better, with support for 10 new
            countries (bringing the total number of countries supported to 50,
            including all of the EU).
        </p>
        <p>
            One of the best ways for businesses to grow revenue is to enter new
            markets, but they’re often stymied by the tax complexity that comes
            with it. We built Stripe Tax to solve that problem. Businesses can
            sell cross-border, and Tax takes care of tax collection for them,
            automatically. Now, Tax just got better, with support for 10 new
            countries (bringing the total number of countries supported to 50,
            including all of the EU).
        </p>
        <h5>Tools to improve insights and decision-making</h5>
        <p>
            If software is not implemented carefully, it can easily create new
            burdens of its own. In the CFO insights report, 63% of finance teams
            said they now use more than 10 different systems to get a unified
            view of their company’s financials, and 55% said they want to
            consolidate the number of software programs they use within the next
            two years. To help, we’re adding new features to the revenue and
            finance automation suite that allow businesses to operate across
            multiple systems more easily, while accessing real-time data
            insights faster.
        </p>
        <p>
            If software is not implemented carefully, it can easily create new
            burdens of its own. In the CFO insights report, 63% of finance teams
            said they now use more than 10 different systems to get a unified
            view of their company’s financials, and 55% said they want to
            consolidate the number of software programs they use within the next
            two years. To help, we’re adding new features to the revenue and
            finance automation suite that allow businesses to operate across
            multiple systems more easily, while accessing real-time data
            insights faster.
        </p>
        <h5>A foundation for the future</h5>
        <p>
            If software is not implemented carefully, it can easily create new
            burdens of its own. In the CFO insights report, 63% of finance teams
            said they now use more than 10 different systems to get a unified
            view of their company’s financials, and 55% said they want to
            consolidate the number of software programs they use within the next
            two years. To help, we’re adding new features to the revenue and
            finance automation suite that allow businesses to operate across
            multiple systems more easily, while accessing real-time data
            insights faster.
        </p>
        <p>
            Revenue recovery is a key part of how Stripe Billing maximizes
            revenue: we use machine learning to retry failed recurring payments
            at the optimal time, based on hundreds of dynamic signals. Our Smart
            Retries algorithm continuously gets better, and we’ve improved the
            recovery rate by 15.5% in 2023.
        </p>
        <p>
            <span className="text-secondary-300">Deliveroo</span> has recovered
            more than £100 million in revenue with Billing’s revenue recovery
            features. “The work Stripe has done to improve payment success
            rates, from the use of Stripe Billing to rapidly enabling Deliveroo
            Plus, makes it clear why Stripe is embedded in some of our largest
            initiatives,” said Will Shu, cofounder and CEO of Deliveroo.
        </p>
    </div>
);

export default Content;
