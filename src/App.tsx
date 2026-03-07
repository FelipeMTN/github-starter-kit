import { Routes, Route } from "react-router-dom";
import { useParams } from "react-router-dom";
import HomePage from "@/templates/HomePage";
import FeaturesPage from "@/templates/FeaturesPage";
import SolutionsPage from "@/templates/SolutionsPage";
import IntegrationsPage from "@/templates/IntegrationsPage";
import PricingPage from "@/templates/PricingPage";
import AboutUsPage from "@/templates/AboutUsPage";
import ContactUsPage from "@/templates/ContactUsPage";
import FaqPage from "@/templates/FaqPage";
import CustomersPage from "@/templates/CustomersPage";
import CareerPage from "@/templates/CareerPage";
import BlogPage from "@/templates/Blog/BlogPage";
import ArticlePage from "@/templates/Blog/ArticlePage";
import DocumentationPage from "@/templates/DocumentationPage";
import PrivacyPage from "@/templates/PrivacyPage";
import SignInPage from "@/templates/SignInPage";
import SignUpPage from "@/templates/SignUpPage";
import ForgotPasswordPage from "@/templates/ForgotPasswordPage";
import ResetPasswordPage from "@/templates/ResetPasswordPage";
import SuccessPage from "@/templates/SuccessPage";
import PageListPage from "@/templates/PageListPage";
import { AuthProvider } from "@/src/contexts/AuthContext";

function ArticlePageWrapper() {
  const { id } = useParams();
  return <ArticlePage id={id} />;
}

function App() {
  return (
    <AuthProvider>
      <div className="bg-white font-sans text-xl text-greyscale-900 antialiased">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/integrations" element={<IntegrationsPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/customers" element={<CustomersPage />} />
          <Route path="/career" element={<CareerPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<ArticlePageWrapper />} />
          <Route path="/documentation" element={<DocumentationPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />
          <Route path="/success" element={<SuccessPage />} />
          <Route path="/pagelist" element={<PageListPage />} />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
