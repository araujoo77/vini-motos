import React, { useState, useEffect } from 'react';
import { 
  Bike, 
  Search, 
  Trash2, 
  Plus, 
  Minus, 
  CheckCircle2, 
  ShieldCheck, 
  Menu,
  X,
  Gauge,
  Zap,
  Scale,
  SlidersHorizontal,
  Eye,
  Calendar,
  Award,
  PhoneCall
} from 'lucide-react';

// ============================================================================
// CATÁLOGO OFICIAL VINI MOTOS (DADOS TÉCNICOS COMPLETOS)
// ============================================================================
const MOTOS = [
  {
    id: 1,
    marca: "Ducati",
    nome: "Ducati Panigale V4 S",
    ano: 2026,
    categoria: "Esportiva",
    preco: 145900.00,
    potencia: "215 cv",
    velocidade: "305 km/h",
    cilindrada: "1.103 cc",
    peso: "174 kg",
    cambio: "6 marchas Quickshifter",
    destaque: "Edição Especial",
    imagem: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=800&q=80",
    descricao: "A essência da velocidade em pista, equipada com suspensão eletrônica Öhlins Smart EC 2.0 e aerodinâmica derivada da MotoGP."
  },
  {
    id: 2,
    marca: "BMW Motorrad",
    nome: "BMW R 1250 GS Adventure",
    ano: 2026,
    categoria: "Trail / Adventure",
    preco: 132500.00,
    potencia: "136 cv",
    velocidade: "220 km/h",
    cilindrada: "1.254 cc",
    peso: "268 kg",
    cambio: "6 marchas ShiftCam",
    destaque: "Pronta Entrega",
    imagem: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=800&q=80",
    descricao: "Feita para desbravar qualquer continente com máximo conforto tecnológico, tanque de 30 litros e controle dinâmico de tração."
  },
  {
    id: 3,
    marca: "Harley-Davidson",
    nome: "Harley-Davidson CVO Road Glide",
    ano: 2026,
    categoria: "Custom / Cruiser",
    preco: 210000.00,
    potencia: "117 cv",
    velocidade: "185 km/h",
    cilindrada: "1.977 cc",
    peso: "391 kg",
    cambio: "6 marchas Cruise Drive",
    destaque: "Série Limitada",
    imagem: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=800&q=80",
    descricao: "O ápice do luxo custom americano com motor Milwaukee-Eight VVT 121, sistema de som Rockford Fosgate e pintura artesanal."
  },
  {
    id: 4,
    marca: "MV Agusta",
    nome: "MV Agusta Brutale 1000 RR",
    ano: 2026,
    categoria: "Naked",
    preco: 165000.00,
    potencia: "208 cv",
    velocidade: "300 km/h",
    cilindrada: "998 cc",
    peso: "186 kg",
    cambio: "6 marchas EAS 3.0",
    destaque: "Importação Exclusiva",
    imagem: "https://images.unsplash.com/photo-1558980664-3a031cf67ea8?auto=format&fit=crop&w=800&q=80",
    descricao: "Escultura italiana sobre duas rodas com fibra de carbono, escapamento quádruplo em titânio e eletrônica de competição."
  },
  {
    id: 5,
    marca: "Triumph",
    nome: "Triumph Thruxton RS",
    ano: 2025,
    categoria: "Café Racer",
    preco: 98900.00,
    potencia: "105 cv",
    velocidade: "215 km/h",
    cilindrada: "1.200 cc",
    peso: "197 kg",
    cambio: "6 marchas Assistida",
    destaque: "Clássica",
    imagem: "https://images.unsplash.com/photo-1558980663-3685c1c681c2?auto=format&fit=crop&w=800&q=80",
    descricao: "Design britânico atemporal combinado com freios Brembo M50, suspensão Showa Big Piston e acabamento escovado."
  },
  {
    id: 6,
    marca: "Kawasaki",
    nome: "Kawasaki Ninja H2 Carbon",
    ano: 2026,
    categoria: "Esportiva",
    preco: 245000.00,
    potencia: "310 cv",
    velocidade: "337 km/h",
    cilindrada: "998 cc Supercharged",
    peso: "238 kg",
    cambio: "6 marchas Dog-Ring",
    destaque: "Sob Encomenda",
    imagem: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=800&q=80",
    descricao: "A única hiperesportiva com compressor centrífugo de produção em série do planeta. Carenagem superior em fibra de carbono."
  },
  {
    id: 7,
    marca: "KTM",
    nome: "KTM 1200 Super Adventure / Duke",
    ano: 2026,
    categoria: "Naked",
    preco: 139900.00,
    potencia: "180 cv",
    velocidade: "290 km/h",
    cilindrada: "1.301 cc",
    peso: "189 kg",
    cambio: "6 marchas PANKL",
    destaque: "Destaque da Semana",
    imagem: "https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?auto=format&fit=crop&w=800&q=80",
    descricao: "Motor bicilíndrico em V de torque brutal, painel TFT colorido, controle de wheelie e chassi em treliça ultraleve."
  }
];

// ============================================================================
// COMPONENTE 1: CABEÇALHO E NAVEGAÇÃO (Navbar)
// ============================================================================
function Navbar({ abaAtiva, setAbaAtiva, totalReservas, totalComparacao }) {
  const [menuMobile, setMenuMobile] = useState(false);

  const navegar = (aba) => {
    setAbaAtiva(aba);
    setMenuMobile(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#0D0D0D]/95 backdrop-blur-md border-b border-[#262626] text-white">
      {/* Barra Superior Institucional */}
      <div className="bg-[#161616] border-b border-[#222] text-[11px] text-[#999] py-1.5 px-4 hidden sm:block">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <span>Showroom Oficial de Motocicletas Importadas & Colecionáveis</span>
          <span className="text-[#D4AF37] font-medium flex items-center gap-1.5">
            <PhoneCall className="w-3 h-3" /> Atendimento VIP & Entrega Nacional
          </span>
        </div>
      </div>

      {/* Menu Principal */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        <button 
          onClick={() => navegar('showroom')}
          className="flex items-center gap-3 text-left group"
        >
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#8C6D1F] text-[#0D0D0D] flex items-center justify-center font-bold shadow-lg group-hover:scale-105 transition-transform">
            <Bike className="w-6 h-6" />
          </div>
          <div>
            <span className="font-serif text-2xl tracking-wider text-white font-bold block leading-none">
              VINI MOTOS
            </span>
            <span className="text-[10px] uppercase tracking-[0.28em] text-[#D4AF37] font-semibold">
              Luxury Motors
            </span>
          </div>
        </button>

        {/* Links Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => navegar('showroom')}
            className={`text-sm font-medium transition-colors pb-1 ${
              abaAtiva === 'showroom' 
                ? 'text-[#D4AF37] border-b-2 border-[#D4AF37]' 
                : 'text-[#A0A0A0] hover:text-white'
            }`}
          >
            Estoque & Showroom
          </button>

          <button
            onClick={() => navegar('comparador')}
            className={`flex items-center gap-2 text-sm font-medium transition-colors pb-1 ${
              abaAtiva === 'comparador' 
                ? 'text-[#D4AF37] border-b-2 border-[#D4AF37]' 
                : 'text-[#A0A0A0] hover:text-white'
            }`}
          >
            <Scale className="w-4 h-4 text-[#D4AF37]" />
            Comparar Modelos
            {totalComparacao > 0 && (
              <span className="bg-[#262626] text-[#D4AF37] text-[11px] font-bold px-2 py-0.5 rounded-full border border-[#D4AF37]/30">
                {totalComparacao}
              </span>
            )}
          </button>
        </nav>

        {/* Botão Garagem + Menu Mobile */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => navegar('garagem')}
            className="relative flex items-center gap-2.5 bg-[#1A1A1A] hover:bg-[#242424] text-white px-4 py-2.5 rounded-xl text-sm font-semibold transition-all border border-[#333]"
          >
            <Bike className="w-4 h-4 text-[#D4AF37]" />
            <span className="hidden sm:inline">Minha Garagem</span>
            {totalReservas > 0 && (
              <span className="bg-[#D4AF37] text-[#0D0D0D] text-xs font-extrabold w-5 h-5 rounded-full flex items-center justify-center">
                {totalReservas}
              </span>
            )}
          </button>

          <button
            onClick={() => setMenuMobile(!menuMobile)}
            className="md:hidden p-2 text-white hover:bg-[#1E1E1E] rounded-lg"
            aria-label="Abrir Menu"
          >
            {menuMobile ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      {menuMobile && (
        <div className="md:hidden bg-[#141414] border-b border-[#262626] px-4 py-4 space-y-2">
          <button
            onClick={() => navegar('showroom')}
            className={`block w-full text-left px-4 py-3 rounded-xl text-sm font-medium ${
              abaAtiva === 'showroom' ? 'bg-[#D4AF37]/15 text-[#D4AF37]' : 'text-white'
            }`}
          >
            Estoque & Showroom
          </button>
          <button
            onClick={() => navegar('comparador')}
            className={`flex items-center justify-between w-full text-left px-4 py-3 rounded-xl text-sm font-medium ${
              abaAtiva === 'comparador' ? 'bg-[#D4AF37]/15 text-[#D4AF37]' : 'text-white'
            }`}
          >
            <span className="flex items-center gap-2">
              <Scale className="w-4 h-4 text-[#D4AF37]" />
              Comparar Modelos
            </span>
            {totalComparacao > 0 && (
              <span className="text-xs bg-[#D4AF37] text-[#0D0D0D] px-2.5 py-0.5 rounded-full font-bold">
                {totalComparacao}
              </span>
            )}
          </button>
        </div>
      )}
    </header>
  );
}

// ============================================================================
// COMPONENTE 2: MODAL DE FICHA TÉCNICA E AGENDAMENTO DE TEST-RIDE
// ============================================================================
function ModalDetalhesMoto({ moto, fechar, adicionarReserva, alternarComparacao, estaNaComparacao }) {
  const [testRideAgendado, setTestRideAgendado] = useState(false);

  if (!moto) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-[#161616] border border-[#333] rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl my-8">
        <div className="relative h-64 sm:h-80 bg-[#0D0D0D]">
          <img 
            src={moto.imagem} 
            alt={moto.nome} 
            className="w-full h-full object-cover"
          />
          <button
            onClick={fechar}
            className="absolute top-4 right-4 bg-black/70 hover:bg-black text-white p-2.5 rounded-full border border-white/10 transition-colors"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="absolute bottom-4 left-4 flex gap-2">
            <span className="bg-[#D4AF37] text-[#0D0D0D] text-xs font-extrabold px-3 py-1 rounded-full">
              {moto.categoria}
            </span>
            <span className="bg-black/80 text-white text-xs font-semibold px-3 py-1 rounded-full border border-white/15">
              Ano {moto.ano}
            </span>
          </div>
        </div>

        <div className="p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#262626] pb-5">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-bold">
                {moto.marca}
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-white font-bold mt-1">
                {moto.nome}
              </h2>
            </div>
            <div className="sm:text-right">
              <span className="text-xs text-[#888] block">Valor à Vista</span>
              <span className="text-2xl font-extrabold text-[#D4AF37]">
                R$ {moto.preco.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
              </span>
            </div>
          </div>

          <p className="text-sm text-[#B0B0B0] leading-relaxed">
            {moto.descricao}
          </p>

          {/* Grid de Especificações Técnicas */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="bg-[#111] p-3.5 rounded-2xl border border-[#262626]">
              <span className="text-[11px] text-[#888] block">Motorização</span>
              <span className="text-sm font-bold text-white mt-0.5 block">{moto.cilindrada}</span>
            </div>
            <div className="bg-[#111] p-3.5 rounded-2xl border border-[#262626]">
              <span className="text-[11px] text-[#888] block">Potência Máx.</span>
              <span className="text-sm font-bold text-[#D4AF37] mt-0.5 block">{moto.potencia}</span>
            </div>
            <div className="bg-[#111] p-3.5 rounded-2xl border border-[#262626]">
              <span className="text-[11px] text-[#888] block">Vel. Máxima</span>
              <span className="text-sm font-bold text-white mt-0.5 block">{moto.velocidade}</span>
            </div>
            <div className="bg-[#111] p-3.5 rounded-2xl border border-[#262626]">
              <span className="text-[11px] text-[#888] block">Peso a Seco</span>
              <span className="text-sm font-bold text-white mt-0.5 block">{moto.peso}</span>
            </div>
          </div>

          {/* Ações */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              onClick={() => {
                adicionarReserva(moto);
                fechar();
              }}
              className="flex-1 bg-gradient-to-r from-[#D4AF37] to-[#B59226] hover:opacity-95 text-[#0D0D0D] py-3.5 px-6 rounded-xl text-sm font-extrabold flex items-center justify-center gap-2 transition-all shadow-lg"
            >
              <Plus className="w-4 h-4" />
              Reservar na Garagem
            </button>

            <button
              onClick={() => setTestRideAgendado(true)}
              className="flex-1 bg-[#222] hover:bg-[#2A2A2A] text-white py-3.5 px-6 rounded-xl text-sm font-bold flex items-center justify-center gap-2 border border-[#333] transition-colors"
            >
              <Calendar className="w-4 h-4 text-[#D4AF37]" />
              {testRideAgendado ? 'Test-Ride Solicitado!' : 'Agendar Test-Ride VIP'}
            </button>

            <button
              onClick={() => alternarComparacao(moto)}
              className={`py-3.5 px-4 rounded-xl text-sm font-bold flex items-center justify-center gap-2 border transition-colors ${
                estaNaComparacao 
                  ? 'bg-[#D4AF37]/20 border-[#D4AF37] text-[#D4AF37]' 
                  : 'bg-[#1A1A1A] border-[#333] text-[#A0A0A0] hover:text-white'
              }`}
              title="Comparar esta moto"
            >
              <Scale className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// COMPONENTE 3: SHOWROOM DE MOTOCICLETAS (CatalogoMotos)
// ============================================================================
function CatalogoMotos({ adicionarReserva, listaComparacao, alternarComparacao }) {
  const [categoriaFiltro, setCategoriaFiltro] = useState('Todas');
  const [ordenacao, setOrdenacao] = useState('padrao');
  const [busca, setBusca] = useState('');
  const [motoSelecionada, setMotoSelecionada] = useState(null);

  const categorias = ['Todas', 'Esportiva', 'Trail / Adventure', 'Custom / Cruiser', 'Naked', 'Café Racer'];

  // Filtragem utilizando laço de repetição e condicionais
  const motosFiltradas = [];
  for (let i = 0; i < MOTOS.length; i++) {
    const moto = MOTOS[i];
    const bateCategoria = categoriaFiltro === 'Todas' || moto.categoria === categoriaFiltro;
    const bateBusca = moto.nome.toLowerCase().includes(busca.toLowerCase()) || 
                      moto.marca.toLowerCase().includes(busca.toLowerCase()) ||
                      moto.descricao.toLowerCase().includes(busca.toLowerCase());

    if (bateCategoria && bateBusca) {
      motosFiltradas.push(moto);
    }
  }

  // Ordenação por preço
  if (ordenacao === 'menor-preco') {
    motosFiltradas.sort((a, b) => a.preco - b.preco);
  } else if (ordenacao === 'maior-preco') {
    motosFiltradas.sort((a, b) => b.preco - a.preco);
  }

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
      {/* Hero Banner Estilo Concessionária Premium */}
      <div className="relative rounded-3xl overflow-hidden mb-10 border border-[#2C2C2C] bg-[#141414] shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
          <div className="lg:col-span-7 p-8 sm:p-12 space-y-5">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#D4AF37] bg-[#D4AF37]/10 px-3.5 py-1.5 rounded-full border border-[#D4AF37]/30">
              <Award className="w-4 h-4" /> Curadoria Premium 2026
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl text-white font-bold leading-tight">
              Engenharia extrema e exclusividade sobre duas rodas.
            </h1>
            <p className="text-[#A0A0A0] text-sm sm:text-base leading-relaxed max-w-xl">
              Na <strong className="text-white">Vini Motos</strong>, cada motocicleta passa por inspeção rigorosa de procedência. Explore nosso estoque à pronta entrega, compare fichas técnicas e reserve sua próxima máquina.
            </p>
            <div className="pt-2 flex flex-wrap gap-6 text-xs text-[#CCC] font-medium">
              <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-[#D4AF37]" /> Garantia & Procedência</span>
              <span className="flex items-center gap-2"><Zap className="w-4 h-4 text-[#D4AF37]" /> Entrega em Todo o Brasil</span>
            </div>
          </div>

          <div className="lg:col-span-5 h-64 lg:h-full min-h-[280px] relative">
            <img 
              src="https://images.unsplash.com/photo-1558981285-6f0c94958bb6?auto=format&fit=crop&w=900&q=80" 
              alt="Showroom Vini Motos" 
              className="w-full h-full object-cover opacity-85"
            />
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#141414] via-transparent to-transparent" />
          </div>
        </div>
      </div>

      {/* Barra de Filtros, Busca e Ordenação */}
      <div className="bg-[#141414] p-4 rounded-2xl border border-[#262626] mb-8 space-y-4">
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-[#777] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar por modelo, marca (ex: KTM, Ducati, BMW)..."
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-[#0D0D0D] border border-[#2C2C2C] rounded-xl text-sm text-white placeholder-[#666] focus:outline-none focus:border-[#D4AF37]"
            />
          </div>

          <div className="flex items-center gap-2">
            <SlidersHorizontal className="w-4 h-4 text-[#D4AF37] shrink-0" />
            <select
              value={ordenacao}
              onChange={(e) => setOrdenacao(e.target.value)}
              aria-label="Ordenar por"
              className="bg-[#0D0D0D] border border-[#2C2C2C] text-white text-sm rounded-xl px-4 py-2.5 focus:outline-none focus:border-[#D4AF37]"
            >
              <option value="padrao">Ordenar: Destaques</option>
              <option value="menor-preco">Menor Investimento</option>
              <option value="maior-preco">Maior Investimento</option>
            </select>
          </div>
        </div>

        {/* Abas de Categorias */}
        <div className="flex items-center gap-2 overflow-x-auto pt-1">
          {categorias.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoriaFiltro(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                categoriaFiltro === cat
                  ? 'bg-[#D4AF37] text-[#0D0D0D]'
                  : 'bg-[#1C1C1C] text-[#A0A0A0] hover:text-white border border-[#2A2A2A]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grade de Motocicletas */}
      {motosFiltradas.length === 0 ? (
        <div className="text-center py-20 bg-[#141414] rounded-3xl border border-[#262626]">
          <p className="text-[#A0A0A0] font-medium mb-3">Nenhuma motocicleta encontrada com esses critérios.</p>
          <button
            onClick={() => { setCategoriaFiltro('Todas'); setBusca(''); setOrdenacao('padrao'); }}
            className="text-sm text-[#D4AF37] font-bold underline"
          >
            Restaurar estoque completo
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {motosFiltradas.map((moto) => {
            const naComparacao = listaComparacao.some((item) => item.id === moto.id);

            return (
              <article 
                key={moto.id} 
                className="bg-[#161616] rounded-2xl overflow-hidden border border-[#282828] hover:border-[#D4AF37]/60 transition-all flex flex-col justify-between group shadow-xl"
              >
                <div>
                  <div className="relative h-60 overflow-hidden bg-[#0D0D0D]">
                    <img
                      src={moto.imagem}
                      alt={moto.nome}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 bg-[#0D0D0D]/90 backdrop-blur-sm text-[#D4AF37] text-[11px] font-bold px-3 py-1 rounded-lg border border-[#D4AF37]/30">
                      {moto.destaque}
                    </span>
                    <button
                      onClick={() => alternarComparacao(moto)}
                      title={naComparacao ? "Remover da comparação" : "Adicionar à comparação"}
                      className={`absolute top-3 right-3 p-2 rounded-lg backdrop-blur-sm border transition-colors ${
                        naComparacao 
                          ? 'bg-[#D4AF37] text-[#0D0D0D] border-[#D4AF37]' 
                          : 'bg-black/60 text-white border-white/15 hover:border-[#D4AF37]'
                      }`}
                    >
                      <Scale className="w-4 h-4" />
                    </button>
                  </div>
                  
                  <div className="p-5">
                    <div className="flex items-center justify-between text-xs text-[#888] mb-1.5">
                      <span className="uppercase tracking-wider font-bold text-[#D4AF37]">{moto.marca}</span>
                      <span>{moto.ano} • {moto.categoria}</span>
                    </div>

                    <h2 className="font-serif text-xl text-white font-bold group-hover:text-[#D4AF37] transition-colors">
                      {moto.nome}
                    </h2>

                    <div className="flex items-center gap-4 text-xs text-[#B0B0B0] mt-3 py-2.5 px-3 bg-[#111] rounded-xl border border-[#222]">
                      <span className="flex items-center gap-1.5"><Gauge className="w-3.5 h-3.5 text-[#D4AF37]" /> {moto.potencia}</span>
                      <span className="text-[#333]">|</span>
                      <span className="flex items-center gap-1.5"><Zap className="w-3.5 h-3.5 text-[#D4AF37]" /> {moto.velocidade}</span>
                    </div>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-2 space-y-3">
                  <div className="flex items-baseline justify-between border-t border-[#222] pt-3">
                    <span className="text-xs text-[#888]">Investimento</span>
                    <span className="text-xl font-extrabold text-white">
                      R$ {moto.preco.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => setMotoSelecionada(moto)}
                      className="bg-[#222] hover:bg-[#2C2C2C] text-white py-2.5 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-colors border border-[#333]"
                    >
                      <Eye className="w-3.5 h-3.5 text-[#D4AF37]" />
                      Ficha Técnica
                    </button>
                    <button
                      onClick={() => adicionarReserva(moto)}
                      className="bg-[#D4AF37] hover:bg-[#C29F31] text-[#0D0D0D] py-2.5 px-3 rounded-xl text-xs font-extrabold flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      Reservar
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      )}

      {/* Modal de Ficha Técnica */}
      <ModalDetalhesMoto 
        moto={motoSelecionada}
        fechar={() => setMotoSelecionada(null)}
        adicionarReserva={adicionarReserva}
        alternarComparacao={alternarComparacao}
        estaNaComparacao={motoSelecionada ? listaComparacao.some((m) => m.id === motoSelecionada.id) : false}
      />
    </section>
  );
}

// ============================================================================
// COMPONENTE 4: COMPARADOR DE MOTOS LADO A LADO
// ============================================================================
function ComparadorMotos({ listaComparacao, removerComparacao, limparComparacao, adicionarReserva, voltarShowroom }) {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
            Análise Técnica Vini Motos
          </span>
          <h1 className="font-serif text-2xl sm:text-3xl text-white font-bold mt-1">
            Comparador de Modelos ({listaComparacao.length}/3)
          </h1>
        </div>
        {listaComparacao.length > 0 && (
          <button
            onClick={limparComparacao}
            className="text-xs text-[#D4AF37] hover:underline font-bold"
          >
            Limpar Comparador
          </button>
        )}
      </div>

      {listaComparacao.length === 0 ? (
        <div className="bg-[#161616] rounded-3xl p-12 text-center border border-[#282828] space-y-4">
          <Scale className="w-12 h-12 text-[#555] mx-auto" />
          <h2 className="font-serif text-xl text-white font-bold">
            Nenhuma moto selecionada para comparação
          </h2>
          <p className="text-sm text-[#888] max-w-md mx-auto">
            Clique no ícone de balança nos cards do showroom para selecionar até 3 motocicletas e comparar potência, peso e investimento lado a lado.
          </p>
          <button
            onClick={voltarShowroom}
            className="bg-[#D4AF37] hover:bg-[#C29F31] text-[#0D0D0D] px-6 py-2.5 rounded-xl text-sm font-extrabold transition-colors"
          >
            Explorar Estoque
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {listaComparacao.map((moto) => (
            <div key={moto.id} className="bg-[#161616] rounded-2xl border border-[#2C2C2C] overflow-hidden flex flex-col justify-between">
              <div>
                <div className="relative h-48 bg-[#0D0D0D]">
                  <img src={moto.imagem} alt={moto.nome} className="w-full h-full object-cover" />
                  <button
                    onClick={() => removerComparacao(moto.id)}
                    className="absolute top-3 right-3 bg-black/75 text-white hover:text-red-400 p-2 rounded-lg"
                    title="Remover"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                <div className="p-5 space-y-4">
                  <div>
                    <span className="text-[11px] text-[#D4AF37] font-bold uppercase">{moto.marca}</span>
                    <h2 className="font-serif text-lg text-white font-bold">{moto.nome}</h2>
                  </div>

                  <div className="space-y-2.5 text-xs border-t border-[#262626] pt-3">
                    <div className="flex justify-between py-1 border-b border-[#222]">
                      <span className="text-[#888]">Categoria</span>
                      <span className="text-white font-semibold">{moto.categoria}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-[#222]">
                      <span className="text-[#888]">Cilindrada</span>
                      <span className="text-white font-semibold">{moto.cilindrada}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-[#222]">
                      <span className="text-[#888]">Potência</span>
                      <span className="text-[#D4AF37] font-bold">{moto.potencia}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-[#222]">
                      <span className="text-[#888]">Velocidade Máx.</span>
                      <span className="text-white font-semibold">{moto.velocidade}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-[#222]">
                      <span className="text-[#888]">Peso a Seco</span>
                      <span className="text-white font-semibold">{moto.peso}</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-[#888]">Investimento</span>
                      <span className="text-white font-extrabold">
                        R$ {moto.preco.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-5 pt-0">
                <button
                  onClick={() => adicionarReserva(moto)}
                  className="w-full bg-[#D4AF37] hover:bg-[#C29F31] text-[#0D0D0D] py-2.5 rounded-xl text-xs font-extrabold transition-colors"
                >
                  Reservar Esta Moto
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

// ============================================================================
// COMPONENTE 5: MINHA GARAGEM & SIMULADOR DE PROPOSTA
// ============================================================================
function MinhaGaragem({ reservas, alterarQtd, removerReserva, limparReservas, voltarShowroom }) {
  const [propostaEnviada, setPropostaEnviada] = useState(false);
  const [parcelas, setParcelas] = useState(24);

  let totalGeral = 0;
  for (let i = 0; i < reservas.length; i++) {
    totalGeral += reservas[i].preco * reservas[i].quantidade;
  }

  const entrada = totalGeral * 0.4;
  const saldoFinanciado = totalGeral - entrada;
  const valorParcela = parcelas > 0 ? (saldoFinanciado * 1.08) / parcelas : 0;

  if (propostaEnviada) {
    return (
      <section className="max-w-2xl mx-auto px-4 py-16 text-center">
        <div className="bg-[#161616] rounded-3xl p-8 sm:p-12 border border-[#2C2C2C] space-y-5 shadow-2xl">
          <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/30">
            <CheckCircle2 className="w-9 h-9" />
          </div>
          <h2 className="font-serif text-3xl text-white font-bold">
            Proposta de Reserva Registrada!
          </h2>
          <p className="text-sm text-[#A0A0A0] max-w-md mx-auto leading-relaxed">
            Um consultor especialista da <strong className="text-white">Vini Motos</strong> recebeu sua seleção e entrará em contato com os detalhes de faturamento e entrega.
          </p>
          <button
            onClick={() => { setPropostaEnviada(false); voltarShowroom(); }}
            className="bg-[#D4AF37] text-[#0D0D0D] px-6 py-3 rounded-xl text-sm font-extrabold hover:bg-[#C29F31] transition-colors"
          >
            Voltar ao Showroom
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
      <div className="flex items-center justify-between mb-6">
        <h1 className="font-serif text-2xl sm:text-3xl text-white font-bold">
          Minha Garagem & Proposta
        </h1>
        {reservas.length > 0 && (
          <button
            onClick={limparReservas}
            className="text-xs text-[#D4AF37] hover:underline font-bold"
          >
            Esvaziar Garagem
          </button>
        )}
      </div>

      {reservas.length === 0 ? (
        <div className="bg-[#161616] rounded-3xl p-12 text-center border border-[#282828] space-y-4">
          <Bike className="w-12 h-12 text-[#555] mx-auto" />
          <h2 className="font-serif text-xl text-white font-bold">
            Sua garagem está vazia
          </h2>
          <p className="text-sm text-[#888] max-w-sm mx-auto">
            Selecione as motocicletas desejadas no showroom da Vini Motos para simular condições ou solicitar reserva.
          </p>
          <button
            onClick={voltarShowroom}
            className="bg-[#D4AF37] hover:bg-[#C29F31] text-[#0D0D0D] px-6 py-2.5 rounded-xl text-sm font-extrabold transition-colors"
          >
            Ver Estoque
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Lista de Motos Reservadas */}
          <div className="lg:col-span-7 space-y-4">
            {reservas.map((item) => (
              <div 
                key={item.id} 
                className="bg-[#161616] p-4 rounded-2xl border border-[#282828] flex items-center gap-4"
              >
                <img
                  src={item.imagem}
                  alt={item.nome}
                  className="w-24 h-20 object-cover rounded-xl bg-[#0D0D0D]"
                />
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-bold">
                    {item.marca} • {item.categoria}
                  </span>
                  <h3 className="font-serif text-base sm:text-lg text-white font-bold truncate">
                    {item.nome}
                  </h3>
                  <p className="text-sm font-bold text-white mt-1">
                    R$ {(item.preco * item.quantidade).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <div className="flex items-center border border-[#333] bg-[#0D0D0D] rounded-lg">
                    <button
                      onClick={() => alterarQtd(item.id, -1)}
                      className="p-1.5 text-[#888] hover:text-white"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="px-2.5 text-xs font-bold text-white">
                      {item.quantidade}
                    </span>
                    <button
                      onClick={() => alterarQtd(item.id, 1)}
                      className="p-1.5 text-[#888] hover:text-white"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <button
                    onClick={() => removerReserva(item.id)}
                    className="p-2 text-[#777] hover:text-red-400 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Simulador de Condições & Resumo */}
          <div className="lg:col-span-5 bg-[#161616] p-6 rounded-2xl border border-[#2C2C2C] h-fit space-y-5">
            <h2 className="font-serif text-xl text-white font-bold border-b border-[#262626] pb-3">
              Resumo & Simulação VIP
            </h2>

            <div className="space-y-2 text-sm text-[#A0A0A0]">
              <div className="flex justify-between">
                <span>Valor Total das Motos</span>
                <span className="text-white font-semibold">
                  R$ {totalGeral.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Emplacamento & Frete</span>
                <span className="text-emerald-400 font-semibold">Cortesia Vini Motos</span>
              </div>
            </div>

            {/* Simulador de Parcelas */}
            <div className="bg-[#0D0D0D] p-4 rounded-xl border border-[#262626] space-y-3">
              <div className="flex justify-between items-center text-xs">
                <span className="text-[#999]">Simular Plano (Entrada 40%):</span>
                <select
                  value={parcelas}
                  onChange={(e) => setParcelas(Number(e.target.value))}
                  className="bg-[#1A1A1A] text-white border border-[#333] rounded-lg px-2 py-1 font-bold"
                >
                  <option value={12}>12x</option>
                  <option value={24}>24x</option>
                  <option value={36}>36x</option>
                  <option value={48}>48x</option>
                </select>
              </div>
              <div className="text-xs text-[#888] flex justify-between">
                <span>Entrada sugerida:</span>
                <span className="text-white font-semibold">
                  R$ {entrada.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                </span>
              </div>
              <div className="text-xs text-[#888] flex justify-between pt-1 border-t border-[#1E1E1E]">
                <span>Parcelas estimadas:</span>
                <span className="text-[#D4AF37] font-bold">
                  {parcelas}x de R$ {valorParcela.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                </span>
              </div>
            </div>

            <div className="flex justify-between text-base font-extrabold text-white pt-2 border-t border-[#262626]">
              <span>Total à Vista</span>
              <span className="text-[#D4AF37]">
                R$ {totalGeral.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
              </span>
            </div>

            <button
              onClick={() => {
                setPropostaEnviada(true);
                limparReservas();
              }}
              className="w-full bg-gradient-to-r from-[#D4AF37] to-[#B59226] hover:opacity-95 text-[#0D0D0D] py-3.5 rounded-xl text-sm font-extrabold transition-all shadow-lg"
            >
              Solicitar Reserva Oficial
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

// ============================================================================
// COMPONENTE PRINCIPAL (App) — GERENCIA ESTADOS E PERSISTÊNCIA (localStorage)
// ============================================================================
export default function App() {
  const [abaAtiva, setAbaAtiva] = useState('showroom');

  const [reservas, setReservas] = useState(() => {
    try {
      const salvo = localStorage.getItem('vini_motos_garagem_v2');
      return salvo ? JSON.parse(salvo) : [];
    } catch {
      return [];
    }
  });

  const [listaComparacao, setListaComparacao] = useState(() => {
    try {
      const salvo = localStorage.getItem('vini_motos_comparador_v2');
      return salvo ? JSON.parse(salvo) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('vini_motos_garagem_v2', JSON.stringify(reservas));
  }, [reservas]);

  useEffect(() => {
    localStorage.setItem('vini_motos_comparador_v2', JSON.stringify(listaComparacao));
  }, [listaComparacao]);

  const adicionarReserva = (moto) => {
    setReservas((prev) => {
      const existente = prev.find((item) => item.id === moto.id);
      if (existente) {
        return prev.map((item) =>
          item.id === moto.id ? { ...item, quantidade: item.quantidade + 1 } : item
        );
      }
      return [...prev, { ...moto, quantidade: 1 }];
    });
  };

  const alterarQtd = (id, delta) => {
    setReservas((prev) =>
      prev
        .map((item) => item.id === id ? { ...item, quantidade: item.quantidade + delta } : item)
        .filter((item) => item.quantidade > 0)
    );
  };

  const removerReserva = (id) => {
    setReservas((prev) => prev.filter((item) => item.id !== id));
  };

  const limparReservas = () => {
    setReservas([]);
  };

  const alternarComparacao = (moto) => {
    setListaComparacao((prev) => {
      const existe = prev.some((item) => item.id === moto.id);
      if (existe) {
        return prev.filter((item) => item.id !== moto.id);
      }
      if (prev.length >= 3) {
        return [...prev.slice(1), moto];
      }
      return [...prev, moto];
    });
  };

  const removerComparacao = (id) => {
    setListaComparacao((prev) => prev.filter((item) => item.id !== id));
  };

  const limparComparacao = () => {
    setListaComparacao([]);
  };

  let totalReservas = 0;
  for (let i = 0; i < reservas.length; i++) {
    totalReservas += reservas[i].quantidade;
  }

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white flex flex-col font-sans">
      <Navbar 
        abaAtiva={abaAtiva} 
        setAbaAtiva={setAbaAtiva} 
        totalReservas={totalReservas}
        totalComparacao={listaComparacao.length}
      />

      <main className="flex-1">
        {abaAtiva === 'showroom' && (
          <CatalogoMotos 
            adicionarReserva={adicionarReserva}
            listaComparacao={listaComparacao}
            alternarComparacao={alternarComparacao}
          />
        )}

        {abaAtiva === 'comparador' && (
          <ComparadorMotos 
            listaComparacao={listaComparacao}
            removerComparacao={removerComparacao}
            limparComparacao={limparComparacao}
            adicionarReserva={adicionarReserva}
            voltarShowroom={() => setAbaAtiva('showroom')}
          />
        )}

        {abaAtiva === 'garagem' && (
          <MinhaGaragem 
            reservas={reservas}
            alterarQtd={alterarQtd}
            removerReserva={removerReserva}
            limparReservas={limparReservas}
            voltarShowroom={() => setAbaAtiva('showroom')}
          />
        )}
      </main>

      <footer className="bg-[#141414] border-t border-[#222] py-10 mt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#888]">
          <div className="flex items-center gap-2.5">
            <Bike className="w-5 h-5 text-[#D4AF37]" />
            <span><strong className="text-white">VINI MOTOS</strong> — Showroom Oficial de Motocicletas Importadas & Luxo</span>
          </div>
          <p>Av. Europa, Jardins — São Paulo • Atendimento Exclusivo</p>
        </div>
      </footer>
    </div>
  );
}
