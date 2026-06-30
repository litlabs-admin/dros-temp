import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import ReactGA from 'react-ga4';

if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

ReactGA.initialize('G-TT8WJVR53D');

const BASE_DOMAIN = 'https://dros.ai';

function Analytics() {
  const location = useLocation();
  useEffect(() => {
    ReactGA.send({ hitType: 'pageview', page: location.pathname + location.search });
  }, [location]);
  return null;
}

function CanonicalTag() {
  const { pathname } = useLocation();
  const canonical = pathname === '/' ? BASE_DOMAIN : `${BASE_DOMAIN}${pathname}`;
  return (
    <Helmet>
      <link rel="canonical" href={canonical} />
    </Helmet>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0; // Safari fix
  }, [pathname]);
  return null;
}
import App from './pages/App.tsx';
import BookMeeting from './pages/BookMeeting.tsx';
import EventsPage from './pages/EventsPage.tsx';
import EventsListingPage from './pages/EventsListingPage.tsx';
import ArmTechDallasEvent from './pages/ArmTechDallasEvent.tsx';
import RMAILasVegasEvent from './pages/RMAILasVegasEvent.tsx';
import ACAOrlandoEvent from './pages/ACAOrlandoEvent.tsx';
import VideosPage from './pages/VideosPage.tsx';
import WebinarsPage from './pages/WebinarsPage.tsx';
import BlogsPage from './pages/BlogsPage.tsx';
import BlogPost from './pages/BlogPost.tsx';
import BlogPostDigitalFirst from './pages/BlogPostDigitalFirst.tsx';
import BlogPostRPC from './pages/BlogPostRPC.tsx';
import ContactUs from './pages/ContactUs.tsx';
import RedirectToApiDocs from './pages/RedirectToApiDocs.tsx';
import RedirectToReleaseNotes from './pages/RedirectToReleaseNotes.tsx';
import PricingPage from './pages/PricingPage.tsx';
import BlogPostAICompliance from './pages/BlogPostAICompliance.tsx';
import BlogPostLegacyIntegrations from './pages/BlogPostLegacyIntegrations.tsx';
import BlogPostDNCVoiceAgents from './pages/BlogPostDNCVoiceAgents.tsx';
import BlogPostRegFCallLimits from './pages/BlogPostRegFCallLimits.tsx';
import AboutUs from './pages/AboutUs.tsx';
import NewsroomPage from './pages/NewsroomPage.tsx';
import CustomerStoriesPage from './pages/CustomerStoriesPage.tsx';
import FirstPartyCollectionsPage from './pages/FirstPartyCollectionsPage.tsx';
import BlogPostAIVoiceAgents from './pages/BlogPostAIVoiceAgents.tsx';
import BlogPostAIAgentsDeployment from './pages/BlogPostAIAgentsDeployment.tsx';
import BlogPostHumanInTheLoop from './pages/BlogPostHumanInTheLoop.tsx';
import BlogPostAICollectionsOperatingLayer from './pages/BlogPostAICollectionsOperatingLayer.tsx';
import ThirdPartyCollectionsPage from './pages/ThirdPartyCollectionsPage.tsx';
import CollectionsAIWorkshop from './pages/CollectionsAIWorkshop.tsx';
import GreystoneStory from './pages/GreystoneStory.tsx';
import VoiceAgentsPage from './pages/features/context-aware-voice-ai-agents-for-debt-collection.tsx';
import UtahConsumerFinanceStory from './pages/UtahConsumerFinanceStory.tsx';
import DebtBuyerCollectionsPage from './pages/DebtBuyerCollectionsPage.tsx';
import PaymentReminders from './pages/PaymentReminders.tsx';
import BlogPostOmnichannel from './pages/BlogPostOmnichannel.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
    <BrowserRouter>
      <ScrollToTop />
      <Analytics />
      <CanonicalTag />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/book-meeting" element={<BookMeeting />} />
        <Route path="/events/armtech-rmai-2026" element={<EventsPage />} />
        <Route path="/events" element={<EventsListingPage />} />
        <Route path="/events/2026/armtech-dallas" element={<ArmTechDallasEvent />} />
        <Route path="/events/2026/rmai-las-vegas" element={<RMAILasVegasEvent />} />
        <Route path="/events/2026/aca-orlando" element={<ACAOrlandoEvent />} />
        <Route path="/webinars" element={<WebinarsPage />} />
        <Route path="/resources/videos" element={<VideosPage />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/blogs/right-party-contact-rpc-learnings-from-the-field" element={<BlogPostRPC />} />
        <Route path="/blogs/digital-first-collections-small-agencies-2026" element={<BlogPostDigitalFirst />} />
        <Route path="/blogs/why-context-not-more-tools-is-the-future-of-debt-collection" element={<BlogPost />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/blogs/integrate-ai-agents-collections-compliance" element={<BlogPostAICompliance />} />
        <Route path="/blogs/collections-integrations-legacy-systems" element={<BlogPostLegacyIntegrations />} />
        <Route path="/blogs/ai-voice-agents-dnc-disputes-compliance-2026" element={<BlogPostDNCVoiceAgents />} />
        <Route path="/blogs/ai-agents-debt-collection-deployment" element={<BlogPostAIAgentsDeployment />} />
        <Route path="/blogs/human-in-the-loop-collections" element={<BlogPostHumanInTheLoop />} />
        <Route path="/blogs/ai-collections-operating-layer" element={<BlogPostAICollectionsOperatingLayer />} />
        <Route path="/blog/reg-f-call-limits-ai-debt-collection" element={<BlogPostRegFCallLimits />} />
        <Route path="/blogs/ai-voice-agents-debt-disputes-compliance" element={<BlogPostAIVoiceAgents />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/newsroom" element={<NewsroomPage />} />
        <Route path="/customer-stories" element={<CustomerStoriesPage />} />
        <Route path="/customer-stories/greystone-associates" element={<GreystoneStory />} />
        <Route path="/collections/first-party" element={<FirstPartyCollectionsPage />} />
        <Route path="/collections/third-party" element={<ThirdPartyCollectionsPage />} />
        <Route path="/collections/debt-buyer" element={<DebtBuyerCollectionsPage />} />
        <Route path="/features/context-aware-voice-ai-agents-for-debt-collection" element={<VoiceAgentsPage />} />
        <Route path="/collections-ai-workshop" element={<CollectionsAIWorkshop />} />
        <Route path="/customer-stories/utah-consumer-finance" element={<UtahConsumerFinanceStory />} />
        <Route path="/use-cases/ai-voice-agent-payment-reminders" element={<PaymentReminders />} />
        <Route path="/blogs/omnichannel-ai-debt-collection" element={<BlogPostOmnichannel />} />
        <Route path="/api-docs" element={<RedirectToApiDocs />} />
        <Route path="/release-notes" element={<RedirectToReleaseNotes />} />
      </Routes>
    </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
);
