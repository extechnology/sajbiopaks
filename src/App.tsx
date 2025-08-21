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
      </Route>


      {/* 404 */}
      <Route path="*" element={<NotFound />} />

    </Routes>


  </Suspense>


);

export default App;
