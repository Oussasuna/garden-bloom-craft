import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "./components/ScrollToTop";
import { AuthProvider } from "./contexts/AuthContext";
import { I18nProvider } from "./contexts/I18nContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PricingPage from "./pages/Pricing";
import AboutPage from "./pages/About";
import BlogPage from "./pages/Blog";
import ContactPage from "./pages/Contact";

import AcademiaPage from "./pages/Academia";
import AuthPage from "./pages/Auth";
import ResetPasswordPage from "./pages/ResetPassword";
// Feature pages
import AutoApplyPage from "./pages/features/AutoApply";
import OneClickApplyPage from "./pages/features/OneClickApply";
import JobTrackerPage from "./pages/features/JobTracker";
import DynamicEmailsPage from "./pages/features/DynamicEmails";
import CvImprovementsPage from "./pages/features/CvImprovements";
import ExcludeCompaniesPage from "./pages/features/ExcludeCompanies";
import JobAggregatorPage from "./pages/features/JobAggregator";
import JobMatchingPage from "./pages/features/JobMatching";
import JobFilteringPage from "./pages/features/JobFiltering";
import EmailFinderPage from "./pages/features/EmailFinder";
import LinkedInAutoApplyPage from "./pages/features/LinkedInAutoApply";
import AiQuestionAnsweringPage from "./pages/features/AiQuestionAnswering";
import AiCvCheckerPage from "./pages/features/AiCvChecker";
import AiCvBuilderPage from "./pages/features/AiCvBuilder";
import AiCoverLetterPage from "./pages/features/AiCoverLetter";
import AiMockInterviewPage from "./pages/features/AiMockInterview";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <I18nProvider>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/reset-password" element={<ResetPasswordPage />} />

            {/* Resource pages */}
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/contact" element={<ContactPage />} />
            
            <Route path="/academia" element={<AcademiaPage />} />

            {/* Feature pages */}
            <Route path="/features/auto-apply" element={<AutoApplyPage />} />
            <Route path="/features/one-click-apply" element={<OneClickApplyPage />} />
            <Route path="/features/job-application-tracker" element={<JobTrackerPage />} />
            <Route path="/features/dynamic-emails" element={<DynamicEmailsPage />} />
            <Route path="/features/cv-improvements" element={<CvImprovementsPage />} />
            <Route path="/features/exclude-companies" element={<ExcludeCompaniesPage />} />
            <Route path="/features/job-posting-aggregator" element={<JobAggregatorPage />} />
            <Route path="/features/job-matching" element={<JobMatchingPage />} />
            <Route path="/features/job-filtering" element={<JobFilteringPage />} />
            <Route path="/features/email-finder" element={<EmailFinderPage />} />
            <Route path="/features/linkedin-apply-extension" element={<LinkedInAutoApplyPage />} />
            <Route path="/features/ai-question-answering" element={<AiQuestionAnsweringPage />} />
            <Route path="/features/ai-cv-checker" element={<AiCvCheckerPage />} />
            <Route path="/features/ai-cv-builder" element={<AiCvBuilderPage />} />
            <Route path="/features/ai-cover-letter-generator" element={<AiCoverLetterPage />} />
            <Route path="/features/ai-mock-interview" element={<AiMockInterviewPage />} />

            {/* Catch-all */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </I18nProvider>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
