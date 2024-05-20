import Hero from "@/Components/Hero";
import Archive from "@/Components/Archive";
import GetApp from "@/Components/GetApp";
import Matching from "@/Components/Matching";
import YouTube from "@/Components/YouTube";
import Stories from "@/Components/Stories";
import Feature from "@/Components/Feature";
import Ai from "@/Components/Ai";
import Search from "@/Components/Search";
import Details from "@/Components/Details";


export default function Home() {
  return (
    <div>
      <Hero />

      <Archive />
      <GetApp/>
      <Matching/>
      <YouTube/>
      <Stories/>
      <Feature/>
      <Ai/>
      <Search/>
      <Details/>
     
    </div>
  );
}
