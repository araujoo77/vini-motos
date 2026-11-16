import React, { useState, useEffect } from 'react';
import { 
  Bike, 
  Sparkles, 
  Search, 
  Trash2, 
  Plus, 
  Minus, 
  CheckCircle2, 
  RotateCcw, 
  ShieldCheck, 
  ArrowRight,
  Menu,
  X,
  Gauge,
  Zap
} from 'lucide-react';

// ============================================================================
// CATÁLOGO DE MOTOS DE LUXO E QUESTÕES DO QUIZ
// ============================================================================
const MOTOS = [
  {
    id: 1,
    nome: "Ducati Panigale V4 S",
    categoria: "Esportiva",
    estilo: "Pista & Performance",
    preco: 145900.00,
    potencia: "215 cv",
    velocidade: "305 km/h",
    imagem: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=600&q=80",
    descricao: "A essência da velocidade em pista, equipada com suspensão eletrônica Öhlins e aerodinâmica refinada."
  },
  {
    id: 2,
    nome: "BMW R 1250 GS Adventure",
    categoria: "Trail / Adventure",
    estilo: "Off-Road & Longas Viagens",
    preco: 132500.00,
    potencia: "136 cv",
    velocidade: "220 km/h",
    imagem: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=600&q=80",
    descricao: "Feita para desbravar qualquer terreno com máximo conforto tecnológico e autonomia lendária."
  },
  {
    id: 3,
    nome: "Harley-Davidson CVO Road Glide",
    categoria: "Custom / Cruiser",
    estilo: "Estrada & Exclusividade",
    preco: 210000.00,
    potencia: "117 cv",
    velocidade: "180 km/h",
    imagem: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=600&q=80",
    descricao: "O ápice do luxo custom americano, motor Milwaukee-Eight V-Twin e acabamento customizado de fábrica."
  },
  {
    id: 4,
    nome: "MV Agusta Brutale 1000 RR",
    categoria: "Naked",
    estilo: "Agressivo & Urbano",
    preco: 165000.00,
    potencia: "208 cv",
    velocidade: "300 km/h",
    imagem: "https://images.unsplash.com/photo-1558980664-3a031cf67ea8?auto=format&fit=crop&w=600&q=80",
    descricao: "Uma obra de arte sobre duas rodas, unindo design italiano visceral e potência extrema."
  },
  {
    id: 5,
    nome: "Triumph Thruxton RS",
    categoria: "Café Racer",
    estilo: "Clássico Moderno",
    preco: 98900.00,
    potencia: "105 cv",
    velocidade: "210 km/h",
    imagem: "https://images.unsplash.com/photo-1558980663-3685c1c681c2?auto=format&fit=crop&w=600&q=80",
    descricao: "Estilo vintage autêntico combinado com componentes de corrida de altíssimo desempenho."
  },
  {
    id: 6,
    nome: "Kawasaki Ninja H2 Carbon",
    categoria: "Esportiva",
    estilo: "Supercharged",
    preco: 245000.00,
    potencia: "310 cv",
    velocidade: "337 km/h",
    imagem: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=600&q=80",
    descricao: "A única superesportiva kompressor de produção em massa do mundo. Performance incomparável."
  },
  {
    id: 7,
    nome: "KTM 1200 Super Adventure / Duke",
    categoria: "Naked",
    estilo: "Agressivo & Urbano",
    preco: 139900.00,
    potencia: "180 cv",
    velocidade: "290 km/h",
    imagem: "https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?auto=format&fit=crop&w=600&q=80",
    descricao: "Motor bicilíndrico em V de torque brutal, eletrônica de ponta austríaca e chassi ultraleve."
  }
];

const PERGUNTAS_QUIZ = [
  {
    id: 1,
    pergunta: "Qual é o seu cenário de pilotagem dos sonhos?",
    opcoes: [
      { texto: "Pilotar em alta velocidade em um autódromo fechado", estilo: "Esportiva", pontos: 3 },
      { texto: "Cruzar estradas desertas de costa a costa no fim de semana", estilo: "Custom / Cruiser", pontos: 3 },
      { texto: "Explorar estradas de terra e paisagens remotas pelo mundo", estilo: "Trail / Adventure", pontos: 3 },
      { texto: "Desfilar com estilo marcante pelas avenidas da metrópole", estilo: "Naked", pontos: 3 }
    ]
  },
  {
    id: 2,
    pergunta: "O que você mais valoriza ao escolher uma máquina?",
    opcoes: [
      { texto: "Tecnologia de pista, aerodinâmica e potência máxima", estilo: "Esportiva", pontos: 2 },
      { texto: "Presença imponente, ronco encorpado e conforto absoluto", estilo: "Custom / Cruiser", pontos: 2 },
      { texto: "Robustez, suspensão avançada e versatilidade total", estilo: "Trail / Adventure", pontos: 2 },
      { texto: "Design escultural, agilidade e atitude urbana", estilo: "Naked", pontos: 2 }
    ]
  },
  {
    id: 3,
    pergunta: "Como você descreve sua postura ideal sobre a moto?",
    opcoes: [
      { texto: "Reclinado sobre o tanque, focado na curva", estilo: "Esportiva", pontos: 3 },
      { texto: "Relaxado, com os pés avançados e guidão alto", estilo: "Custom / Cruiser", pontos: 3 },
      { texto: "Erguido e ergonômico, pronto para longas horas", estilo: "Trail / Adventure", pontos: 3 },
      { texto: "Centralizado, com controle total e visceral da frente", estilo: "Naked", pontos: 3 }
    ]
  }
];

// ============================================================================
// COMPONENTE 1: NAVBAR RESPONSIVA
// ============================================================================
function Navbar({ abaAtiva, setAbaAtiva, totalReservas, estiloSalvo }) {
  const [menuMobile, setMenuMobile] = useState(false);

  const irPara = (aba) => {
    setAbaAtiva(aba);
    setMenuMobile(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#121212]/95 backdrop-blur-md border-b border-[#2C2C2C] text-[#F5F5F5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        <button 
          onClick={() => irPara('catalogo')}
          className="flex items-center gap-3 text-left group"
        >
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#997A15] text-[#121212] flex items-center justify-center font-bold shadow-lg">
            <Bike className="w-6 h-6" />
          </div>
          <div>
            <span className="font-serif text-xl tracking-wider text-white font-bold block leading-none">
              VINI MOTOS
            </span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] font-medium">
              Importadas & Luxo
            </span>
          </div>
        </button>

        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => irPara('catalogo')}
            className={`text-sm font-medium transition-colors pb-1 ${
              abaAtiva === 'catalogo' 
                ? 'text-[#D4AF37] border-b-2 border-[#D4AF37]' 
                : 'text-[#A0A0A0] hover:text-white'
            }`}
          >
            Showroom Exclusivo
          </button>
          
          <button
            onClick={() => irPara('quiz')}
            className={`flex items-center gap-1.5 text-sm font-medium transition-colors pb-1 ${
              abaAtiva === 'quiz' 
                ? 'text-[#D4AF37] border-b-2 border-[#D4AF37]' 
                : 'text-[#A0A0A0] hover:text-white'
            }`}
          >
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            Quiz do Piloto
            {estiloSalvo && (
              <span className="ml-1 text-[10px] bg-[#D4AF37]/20 text-[#D4AF37] px-2 py-0.5 rounded-full font-semibold border border-[#D4AF37]/30">
                {estiloSalvo}
              </span>
            )}
          </button>
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={() => irPara('reservas')}
            aria-label="Minhas Reservas"
            className="relative flex items-center gap-2 bg-[#1E1E1E] hover:bg-[#282828] text-white px-4 py-2.5 rounded-xl text-sm font-medium transition-all border border-[#333]"
          >
            <Bike className="w-4 h-4 text-[#D4AF37]" />
            <span className="hidden sm:inline">Garagem / Reservas</span>
            {totalReservas > 0 && (
              <span className="bg-[#D4AF37] text-[#121212] text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {totalReservas}
              </span>
            )}
          </button>

          <button
            onClick={() => setMenuMobile(!menuMobile)}
            className="md:hidden p-2 text-white hover:bg-[#222] rounded-lg"
          >
            {menuMobile ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {menuMobile && (
        <div className="md:hidden bg-[#181818] border-b border-[#2C2C2C] px-4 py-4 space-y-3">
          <button
            onClick={() => irPara('catalogo')}
            className={`block w-full text-left px-4 py-2.5 rounded-xl font-medium ${
              abaAtiva === 'catalogo' ? 'bg-[#D4AF37]/20 text-[#D4AF37]' : 'text-white'
            }`}
          >
            Showroom Exclusivo
          </button>
          <button
            onClick={() => irPara('quiz')}
            className={`flex items-center justify-between w-full text-left px-4 py-2.5 rounded-xl font-medium ${
              abaAtiva === 'quiz' ? 'bg-[#D4AF37]/20 text-[#D4AF37]' : 'text-white'
            }`}
          >
            <span className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#D4AF37]" />
              Quiz do Piloto
            </span>
            {estiloSalvo && (
              <span className="text-xs bg-[#D4AF37] text-[#121212] px-2.5 py-0.5 rounded-full font-bold">
                {estiloSalvo}
              </span>
            )}
          </button>
        </div>
      )}
    </header>
  );
}

// ============================================================================
// COMPONENTE 2: SHOWROOM E CATÁLOGO DE MOTOS
// ============================================================================
function CatalogoMotos({ adicionarReserva, estiloRecomendado, irParaQuiz }) {
  const [categoriaFiltro, setCategoriaFiltro] = useState('Todas');
  const [busca, setBusca] = useState('');
  const [filtrarMeuEstilo, setFiltrarMeuEstilo] = useState(false);

  const categorias = ['Todas', 'Esportiva', 'Trail / Adventure', 'Custom / Cruiser', 'Naked', 'Café Racer'];

  const motosFiltradas = [];
  for (let i = 0; i < MOTOS.length; i++) {
    const moto = MOTOS[i];
    const bateCategoria = categoriaFiltro === 'Todas' || moto.categoria === categoriaFiltro;
    const bateBusca = moto.nome.toLowerCase().includes(busca.toLowerCase()) || 
                      moto.descricao.toLowerCase().includes(busca.toLowerCase());
    const bateEstilo = !filtrarMeuEstilo || !estiloRecomendado || moto.categoria === estiloRecomendado;

    if (bateCategoria && bateBusca && bateEstilo) {
      motosFiltradas.push(moto);
    }
  }

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
      <div className="bg-gradient-to-r from-[#1A1A1A] via-[#242424] to-[#1A1A1A] rounded-3xl p-6 sm:p-10 mb-10 border border-[#333] flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
        <div className="max-w-xl space-y-4 text-center md:text-left">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[#D4AF37] bg-[#D4AF37]/10 px-3.5 py-1.5 rounded-full border border-[#D4AF37]/30">
            <ShieldCheck className="w-4 h-4" /> Vini Motos • Importação Oficial
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-bold leading-tight">
            A paixão pela alta cilindrada em seu estado puro.
          </h1>
          <p className="text-[#B0B0B0] text-sm sm:text-base leading-relaxed">
            Conheça a seleção exclusiva da Vini Motos com as principais supermotos globais. Agende seu test-ride ou reserve sua unidade.
          </p>
          <div className="pt-2 flex flex-wrap justify-center md:justify-start gap-3">
            <button
              onClick={irParaQuiz}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#D4AF37] to-[#B89728] hover:opacity-90 text-[#121212] px-6 py-3 rounded-full text-sm font-bold transition-all shadow-lg"
            >
              <Sparkles className="w-4 h-4" />
              {estiloRecomendado ? `Perfil: ${estiloRecomendado}` : 'Fazer Quiz de Estilo'}
            </button>
          </div>
        </div>

        {estiloRecomendado && (
          <div className="bg-[#121212]/90 backdrop-blur-md p-5 rounded-2xl border border-[#333] max-w-xs w-full shadow-lg">
            <h3 className="text-[#D4AF37] font-bold text-sm mb-1 flex items-center gap-2">
              <Zap className="w-4 h-4" /> Recomendação Ativa
            </h3>
            <p className="text-xs text-[#A0A0A0] mb-3">
              Seu perfil aponta para o estilo <strong>{estiloRecomendado}</strong>. Deseja ver apenas os modelos compatíveis?
            </p>
            <button
              onClick={() => setFiltrarMeuEstilo(!filtrarMeuEstilo)}
              className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold transition-colors ${
                filtrarMeuEstilo 
                  ? 'bg-[#D4AF37] text-[#121212]' 
                  : 'bg-[#222] text-[#D4AF37] border border-[#333] hover:bg-[#333]'
              }`}
            >
              {filtrarMeuEstilo ? 'Mostrar Todas as Motos' : 'Filtrar Meu Perfil'}
            </button>
          </div>
        )}
      </div>

      <div className="flex flex-col md:flex-row justify-between items-stretch md:items-center gap-4 mb-8">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
          {categorias.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoriaFiltro(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                categoriaFiltro === cat
                  ? 'bg-[#D4AF37] text-[#121212] shadow-md'
                  : 'bg-[#1A1A1A] text-[#A0A0A0] border border-[#333] hover:border-[#D4AF37] hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-[#777] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Buscar modelo ou marca..."
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-[#181818] border border-[#333] rounded-full text-sm text-white placeholder-[#777] focus:outline-none focus:border-[#D4AF37]"
          />
        </div>
      </div>

      {motosFiltradas.length === 0 ? (
        <div className="text-center py-20 bg-[#1A1A1A] rounded-3xl border border-[#333]">
          <p className="text-[#A0A0A0] font-medium mb-3">Nenhuma motocicleta encontrada com esses filtros.</p>
          <button
            onClick={() => { setCategoriaFiltro('Todas'); setBusca(''); setFiltrarMeuEstilo(false); }}
            className="text-sm text-[#D4AF37] font-bold underline"
          >
            Limpar filtros de busca
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {motosFiltradas.map((moto) => (
            <article 
              key={moto.id} 
              className="bg-[#1A1A1A] rounded-2xl overflow-hidden border border-[#333] hover:border-[#D4AF37]/50 transition-all flex flex-col justify-between group shadow-xl"
            >
              <div>
                <div className="relative h-64 overflow-hidden bg-[#111]">
                  <img
                    src={moto.imagem}
                    alt={moto.nome}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  />
                  <span className="absolute top-3 left-3 bg-[#121212]/90 backdrop-blur-sm text-[#D4AF37] text-[11px] font-bold px-3 py-1 rounded-full border border-[#D4AF37]/30">
                    {moto.categoria}
                  </span>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-[#A0A0A0] mb-2 font-medium">
                    <span className="flex items-center gap-1"><Gauge className="w-3.5 h-3.5 text-[#D4AF37]" /> {moto.potencia}</span>
                    <span className="flex items-center gap-1"><Zap className="w-3.5 h-3.5 text-[#D4AF37]" /> {moto.velocidade}</span>
                  </div>

                  <h2 className="font-serif text-xl text-white font-bold group-hover:text-[#D4AF37] transition-colors">
                    {moto.nome}
                  </h2>
                  <p className="text-xs text-[#999] mt-2 leading-relaxed">
                    {moto.descricao}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-3 flex items-center justify-between border-t border-[#262626]">
                <div>
                  <span className="text-[10px] text-[#888] block uppercase tracking-wider">Investimento</span>
                  <span className="text-lg font-bold text-white">
                    R$ {moto.preco.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                  </span>
                </div>
                <button
                  onClick={() => adicionarReserva(moto)}
                  className="bg-[#D4AF37] hover:bg-[#C29F31] text-[#121212] px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors shadow-md"
                >
                  <Plus className="w-4 h-4" />
                  Reservar Unidade
                </button>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

// ============================================================================
// COMPONENTE 3: QUIZ DO PILOTO
// ============================================================================
function QuizPiloto({ progressoQuiz, setProgressoQuiz, irParaCatalogo }) {
  const { indiceAtual, respostas, pontuacaoTotal, concluido, estiloFinal } = progressoQuiz;

  const responderQuestao = (opcao) => {
    const novasRespostas = [...respostas, opcao];
    const novaPontuacao = pontuacaoTotal + opcao.pontos;

    if (indiceAtual + 1 < PERGUNTAS_QUIZ.length) {
      setProgressoQuiz({
        ...progressoQuiz,
        indiceAtual: indiceAtual + 1,
        respostas: novasRespostas,
        pontuacaoTotal: novaPontuacao
      });
    } else {
      const contagem = {};
      for (let i = 0; i < novasRespostas.length; i++) {
        const est = novasRespostas[i].estilo;
        contagem[est] = (contagem[est] || 0) + 1;
      }

      let estiloVencedor = "Esportiva";
      let maiorFreq = 0;
      for (const e in contagem) {
        if (contagem[e] > maiorFreq) {
          maiorFreq = contagem[e];
          estiloVencedor = e;
        }
      }

      setProgressoQuiz({
        indiceAtual: indiceAtual,
        respostas: novasRespostas,
        pontuacaoTotal: novaPontuacao,
        concluido: true,
        estiloFinal: estiloVencedor
      });
    }
  };

  const reiniciarQuiz = () => {
    setProgressoQuiz({
      indiceAtual: 0,
      respostas: [],
      pontuacaoTotal: 0,
      concluido: false,
      estiloFinal: null
    });
  };

  const questaoAtual = PERGUNTAS_QUIZ[indiceAtual];
  const progressoPct = concluido ? 100 : Math.round((indiceAtual / PERGUNTAS_QUIZ.length) * 100);

  return (
    <section className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <div className="bg-[#1A1A1A] rounded-3xl p-6 sm:p-10 border border-[#333] shadow-2xl">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#2C2C2C]">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
              Consultoria Vini Motos
            </span>
            <h1 className="font-serif text-2xl sm:text-3xl text-white font-bold mt-1">
              Descubra sua Moto Ideal
            </h1>
          </div>
          <div className="text-right">
            <span className="text-xs text-[#888] block">Índice de Afinidade</span>
            <span className="text-xl font-bold text-[#D4AF37]">{pontuacaoTotal} pts</span>
          </div>
        </div>

        <div className="my-6">
          <div className="flex justify-between text-xs font-medium text-[#A0A0A0] mb-2">
            <span>{concluido ? 'Análise Concluída' : `Questão ${indiceAtual + 1} de ${PERGUNTAS_QUIZ.length}`}</span>
            <span>{progressoPct}%</span>
          </div>
          <div className="w-full h-2.5 bg-[#262626] rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-[#D4AF37] to-[#B89728] transition-all duration-300 rounded-full"
              style={{ width: `${progressoPct}%` }}
            />
          </div>
        </div>

        {concluido ? (
          <div className="py-8 text-center space-y-6">
            <div className="w-16 h-16 bg-[#D4AF37]/20 text-[#D4AF37] rounded-full flex items-center justify-center mx-auto border border-[#D4AF37]/40">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            
            <div className="space-y-2">
              <p className="text-xs text-[#888] uppercase tracking-wider font-semibold">
                Categoria Recomendada para o seu perfil
              </p>
              <h2 className="font-serif text-4xl text-white font-bold">
                {estiloFinal}
              </h2>
              <p className="text-sm text-[#B0B0B0] max-w-md mx-auto pt-2 leading-relaxed">
                Suas respostas e pontuação ({pontuacaoTotal} pontos) foram salvas no seu navegador. Nossa curadoria selecionou os melhores modelos para você.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
              <button
                onClick={irParaCatalogo}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#D4AF37] hover:bg-[#C29F31] text-[#121212] px-6 py-3 rounded-full text-sm font-bold transition-colors shadow-lg"
              >
                Ver Motos Recomendadas
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={reiniciarQuiz}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#222] hover:bg-[#2A2A2A] text-white px-6 py-3 rounded-full text-sm font-bold transition-colors border border-[#333]"
              >
                <RotateCcw className="w-4 h-4" />
                Refazer Quiz
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-6 py-4">
            <h2 className="text-lg sm:text-xl font-semibold text-white leading-snug">
              {questaoAtual.pergunta}
            </h2>

            <div className="space-y-3">
              {questaoAtual.opcoes.map((opcao, idx) => (
                <button
                  key={idx}
                  onClick={() => responderQuestao(opcao)}
                  className="w-full text-left p-4 rounded-2xl bg-[#121212] border border-[#333] hover:border-[#D4AF37] hover:bg-[#1E1E1E] transition-all flex items-center justify-between group"
                >
                  <span className="text-sm sm:text-base text-[#DDD] group-hover:text-white font-medium">
                    {opcao.texto}
                  </span>
                  <ArrowRight className="w-4 h-4 text-[#555] group-hover:text-[#D4AF37] shrink-0 ml-3" />
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

// ============================================================================
// COMPONENTE 4: GARAGEM / RESERVAS
// ============================================================================
function CarrinhoReservas({ reservas, alterarQtd, removerReserva, limparReservas, voltarShowroom }) {
  const [pedidoConcluido, setPedidoConcluido] = useState(false);

  let totalInvestimento = 0;
  for (let i = 0; i < reservas.length; i++) {
    totalInvestimento += reservas[i].preco * reservas[i].quantidade;
  }

  const finalizarPedido = () => {
    setPedidoConcluido(true);
    limparReservas();
  };

  if (pedidoConcluido) {
    return (
      <section className="max-w-2xl mx-auto px-4 py-16 text-center">
        <div className="bg-[#1A1A1A] rounded-3xl p-8 sm:p-12 border border-[#333] space-y-5 shadow-2xl">
          <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/30">
            <CheckCircle2 className="w-9 h-9" />
          </div>
          <h2 className="font-serif text-3xl text-white font-bold">
            Reserva Realizada com Sucesso!
          </h2>
          <p className="text-sm text-[#A0A0A0] max-w-md mx-auto">
            A equipe da Vini Motos entrará em contato para agendar a entrega técnica e documentação.
          </p>
          <button
            onClick={() => { setPedidoConcluido(false); voltarShowroom(); }}
            className="bg-[#D4AF37] text-[#121212] px-6 py-3 rounded-full text-sm font-bold hover:bg-[#C29F31] transition-colors shadow-lg"
          >
            Explorar Outros Modelos
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
      <div className="flex items-center justify-between mb-6">
        <h1 className="font-serif text-2xl sm:text-3xl text-white font-bold">
          Sua Garagem / Reservas
        </h1>
        {reservas.length > 0 && (
          <button
            onClick={limparReservas}
            className="text-xs text-[#D4AF37] hover:underline font-semibold"
          >
            Limpar Garagem
          </button>
        )}
      </div>

      {reservas.length === 0 ? (
        <div className="bg-[#1A1A1A] rounded-3xl p-12 text-center border border-[#333] space-y-4 shadow-xl">
          <Bike className="w-12 h-12 text-[#555] mx-auto" />
          <h2 className="font-serif text-xl text-white font-bold">
            Sua garagem está vazia
          </h2>
          <p className="text-sm text-[#888] max-w-sm mx-auto">
            Navegue pelo showroom da Vini Motos e adicione unidades para reserva ou test-ride.
          </p>
          <button
            onClick={voltarShowroom}
            className="bg-[#D4AF37] hover:bg-[#C29F31] text-[#121212] px-6 py-2.5 rounded-full text-sm font-bold transition-colors"
          >
            Ver Showroom
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-4">
            {reservas.map((item) => (
              <div 
                key={item.id} 
                className="bg-[#1A1A1A] p-4 rounded-2xl border border-[#333] flex items-center gap-4 shadow-md"
              >
                <img
                  src={item.imagem}
                  alt={item.nome}
                  className="w-20 h-20 object-cover rounded-xl bg-[#111]"
                />
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-bold">{item.categoria}</span>
                  <h3 className="font-serif text-base sm:text-lg text-white font-bold truncate">
                    {item.nome}
                  </h3>
                  <p className="text-xs font-bold text-[#D4AF37] mt-1">
                    R$ {(item.preco * item.quantidade).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <div className="flex items-center border border-[#333] bg-[#121212] rounded-lg">
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

          <div className="bg-[#1A1A1A] p-6 rounded-2xl border border-[#333] h-fit space-y-4 shadow-xl">
            <h2 className="font-serif text-xl text-white font-bold border-b border-[#2C2C2C] pb-3">
              Resumo da Proposta
            </h2>
            <div className="space-y-2 text-sm text-[#A0A0A0]">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>R$ {totalInvestimento.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
              </div>
              <div className="flex justify-between">
                <span>Documentação / Frete</span>
                <span className="text-emerald-400 font-medium">Incluso</span>
              </div>
              <div className="flex justify-between text-base font-bold text-white pt-3 border-t border-[#2C2C2C]">
                <span>Total Geral</span>
                <span className="text-[#D4AF37]">R$ {totalInvestimento.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
              </div>
            </div>

            <button
              onClick={finalizarPedido}
              className="w-full bg-gradient-to-r from-[#D4AF37] to-[#B89728] hover:opacity-90 text-[#121212] py-3 rounded-xl text-sm font-bold transition-colors shadow-lg"
            >
              Confirmar Reserva
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

// ============================================================================
// COMPONENTE PRINCIPAL (App)
// ============================================================================
export default function App() {
  const [abaAtiva, setAbaAtiva] = useState('catalogo');

  const [reservas, setReservas] = useState(() => {
    try {
      const salvo = localStorage.getItem('vini_motos_reservas');
      return salvo ? JSON.parse(salvo) : [];
    } catch {
      return [];
    }
  });

  const [progressoQuiz, setProgressoQuiz] = useState(() => {
    try {
      const salvo = localStorage.getItem('vini_motos_quiz');
      return salvo ? JSON.parse(salvo) : {
        indiceAtual: 0,
        respostas: [],
        pontuacaoTotal: 0,
        concluido: false,
        estiloFinal: null
      };
    } catch {
      return {
        indiceAtual: 0,
        respostas: [],
        pontuacaoTotal: 0,
        concluido: false,
        estiloFinal: null
      };
    }
  });

  useEffect(() => {
    localStorage.setItem('vini_motos_reservas', JSON.stringify(reservas));
  }, [reservas]);

  useEffect(() => {
    localStorage.setItem('vini_motos_quiz', JSON.stringify(progressoQuiz));
  }, [progressoQuiz]);

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

  let totalReservas = 0;
  for (let i = 0; i < reservas.length; i++) {
    totalReservas += reservas[i].quantidade;
  }

  return (
    <div className="min-h-screen bg-[#121212] text-white flex flex-col font-sans">
      <Navbar 
        abaAtiva={abaAtiva} 
        setAbaAtiva={setAbaAtiva} 
        totalReservas={totalReservas}
        estiloSalvo={progressoQuiz.estiloFinal}
      />

      <main className="flex-1">
        {abaAtiva === 'catalogo' && (
          <CatalogoMotos 
            adicionarReserva={adicionarReserva}
            estiloRecomendado={progressoQuiz.estiloFinal}
            irParaQuiz={() => setAbaAtiva('quiz')}
          />
        )}

        {abaAtiva === 'quiz' && (
          <QuizPiloto 
            progressoQuiz={progressoQuiz}
            setProgressoQuiz={setProgressoQuiz}
            irParaCatalogo={() => setAbaAtiva('catalogo')}
          />
        )}

        {abaAtiva === 'reservas' && (
          <CarrinhoReservas 
            reservas={reservas}
            alterarQtd={alterarQtd}
            removerReserva={removerReserva}
            limparReservas={limparReservas}
            voltarShowroom={() => setAbaAtiva('catalogo')}
          />
        )}
      </main>

      <footer className="bg-[#181818] border-t border-[#2C2C2C] py-8 mt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#888]">
          <div className="flex items-center gap-2">
            <Bike className="w-4 h-4 text-[#D4AF37]" />
            <span><strong>Vini Motos</strong> — Showroom Importadas & Luxo 2026</span>
          </div>
          <p>Paleta Adobe Color (Luxo) • ReactJS • localStorage</p>
        </div>
      </footer>
    </div>
  );
}
