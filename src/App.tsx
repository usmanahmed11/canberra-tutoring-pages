import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Primary pages
import PrimaryMathsA from "./pages/landing/PrimaryMathsA";
import PrimaryMathsB from "./pages/landing/PrimaryMathsB";
import PrimaryMathsC from "./pages/landing/PrimaryMathsC";
import PrimaryEnglishA from "./pages/landing/PrimaryEnglishA";
import PrimaryEnglishB from "./pages/landing/PrimaryEnglishB";
import PrimaryEnglishC from "./pages/landing/PrimaryEnglishC";

// High School pages
import HighSchoolMathsA from "./pages/landing/HighSchoolMathsA";
import HighSchoolMathsB from "./pages/landing/HighSchoolMathsB";
import HighSchoolMathsC from "./pages/landing/HighSchoolMathsC";
import HighSchoolEnglishA from "./pages/landing/HighSchoolEnglishA";
import HighSchoolEnglishB from "./pages/landing/HighSchoolEnglishB";
import HighSchoolEnglishC from "./pages/landing/HighSchoolEnglishC";

// College pages
import CollegeMathsA from "./pages/landing/CollegeMathsA";
import CollegeMathsB from "./pages/landing/CollegeMathsB";
import CollegeMathsC from "./pages/landing/CollegeMathsC";
import CollegeEnglishA from "./pages/landing/CollegeEnglishA";
import CollegeEnglishB from "./pages/landing/CollegeEnglishB";
import CollegeEnglishC from "./pages/landing/CollegeEnglishC";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Primary Maths */}
          <Route path="/primary-maths-a" element={<PrimaryMathsA />} />
          <Route path="/primary-maths-b" element={<PrimaryMathsB />} />
          <Route path="/primary-maths-c" element={<PrimaryMathsC />} />
          
          {/* Primary English */}
          <Route path="/primary-english-a" element={<PrimaryEnglishA />} />
          <Route path="/primary-english-b" element={<PrimaryEnglishB />} />
          <Route path="/primary-english-c" element={<PrimaryEnglishC />} />
          
          {/* High School Maths */}
          <Route path="/high-school-maths-a" element={<HighSchoolMathsA />} />
          <Route path="/high-school-maths-b" element={<HighSchoolMathsB />} />
          <Route path="/high-school-maths-c" element={<HighSchoolMathsC />} />
          
          {/* High School English */}
          <Route path="/high-school-english-a" element={<HighSchoolEnglishA />} />
          <Route path="/high-school-english-b" element={<HighSchoolEnglishB />} />
          <Route path="/high-school-english-c" element={<HighSchoolEnglishC />} />
          
          {/* College Maths */}
          <Route path="/college-maths-a" element={<CollegeMathsA />} />
          <Route path="/college-maths-b" element={<CollegeMathsB />} />
          <Route path="/college-maths-c" element={<CollegeMathsC />} />
          
          {/* College English */}
          <Route path="/college-english-a" element={<CollegeEnglishA />} />
          <Route path="/college-english-b" element={<CollegeEnglishB />} />
          <Route path="/college-english-c" element={<CollegeEnglishC />} />
          
          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
