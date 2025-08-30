import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Routes, Route } from "react-router-dom";
import SuspenseLoader from "./components/common/SuspenseLoader";
import ScrollToTop from "./components/common/ScrollToTop";



// Lazy loading pages
const Index = lazy(() => import("./pages/Index"));
const Products = lazy(() => import("./pages/Products"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Terms = lazy(() => import("./pages/Terms"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Refund = lazy(() => import("./pages/Refund"));
const Shipment = lazy(() => import("./pages/Shipment"));




// Lazy loading components
const MainLayout = lazy(() => import("./components/layout/MainLayout"));




const App = () => (


  <Suspense fallback={<SuspenseLoader />}>

    <Toaster />

    <Sonner />


    <ScrollToTop />

    <Routes>


      {/* Main Layout */}
      <Route element={<MainLayout />}>
        <Route index element={<Index />} />
        <Route path="products" element={<Products />} />
        <Route path="contact" element={<Contact />} />
        <Route path="terms&conditions" element={<Terms />} />
        <Route path="privacy&policy" element={<Privacy />} />
        <Route path="refund&returnpolicy" element={<Refund />} />
        <Route path="shippmentpolicy" element={<Shipment />} />
      </Route>


      {/* 404 */}
      <Route path="*" element={<NotFound />} />

    </Routes>


  </Suspense>


);

export default App;
