import Nav from "@/components/gleam/Nav";
import Hero from "@/components/gleam/Hero";
import Apresentacao from "@/components/gleam/Apresentacao";
import Servicos from "@/components/gleam/Servicos";
import Trabalhos from "@/components/gleam/Trabalhos";
import Producao from "@/components/gleam/Producao";
import Criacao from "@/components/gleam/Criacao";
import Giovanna from "@/components/gleam/Giovanna";
import PorQue from "@/components/gleam/PorQue";
import Identidade from "@/components/gleam/Identidade";
import FAQ from "@/components/gleam/FAQ";
import Encerramento from "@/components/gleam/Encerramento";

export default function Home() {
  return (
    <main className="bg-[#F9F8F6]">
      <Nav />
      <Hero />
      <Apresentacao />
      <Servicos />
      <Trabalhos />
      <Producao />
      <Criacao />
      <Giovanna />
      <PorQue />
      <Identidade />
      <FAQ />
      <Encerramento />
    </main>
  );
}
