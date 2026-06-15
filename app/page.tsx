import Banner from "@/components/banner/Banner";
import Character from "@/components/character/Character";
import Footer from "@/components/footer/Footer";
import NewsCarousel from "@/components/newscarousel/NewsCarousel";

export default function Page() {
  return (
    <main>
      <Banner />
      <Character />
      <NewsCarousel />
      <Footer />
    </main>
  );
}
