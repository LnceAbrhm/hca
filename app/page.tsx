import Footer from "@/components/Footer";
import Nav from "@/components/Nav"; 
import Row1 from "@/components/Row1";
import Row2 from "@/components/Row2";
import Row3 from "@/components/Row3";
import Row4 from "@/components/Row4";

export default function Home() {
  return (
    <>
    <div className="w-full mr-auto ml-auto">
      <Nav/>
      <Row1/>
      <Row2/>
      <Row3/>
      <Row4/>
      <Footer/>
    </div>
    </>
  );
}
