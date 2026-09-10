const questions = [
{category:"🌳 ESPÉCIES",question:"Qual árvore amazônica é famosa por seu porte gigantesco e por apresentar raízes tabulares muito desenvolvidas?",answers:[["Sumaúma",true],["Manjericão",false],["Girassol",false],["Capim-limão",false]],explanation:"A sumaúma (Ceiba pentandra) é uma árvore de grande porte e pode desenvolver enormes raízes tabulares, especialmente em ambientes de floresta."},
{category:"🌿 ESTRUTURA",question:"Qual é o nome dado à camada superior formada pelas copas das árvores em uma floresta?",answers:[["Dossel",true],["Subsolo",false],["Substrato rochoso",false],["Serapilheira profunda",false]],explanation:"O dossel é a camada formada principalmente pelas copas das árvores e concentra grande parte da atividade biológica da floresta."},
{category:"💧 CICLO DA ÁGUA",question:"Como as folhas contribuem diretamente para o retorno de água à atmosfera?",answers:[["Por meio da transpiração",true],["Transformando água em rocha",false],["Bloqueando toda evaporação",false],["Produzindo chuva dentro do tronco",false]],explanation:"Na transpiração, a planta libera vapor de água principalmente por estruturas microscópicas das folhas."},
{category:"🌰 CASTANHEIRA",question:"Qual espécie produz as sementes comercializadas como castanha-do-brasil?",answers:[["Bertholletia excelsa",true],["Hevea brasiliensis",false],["Theobroma cacao",false],["Coffea arabica",false]],explanation:"A castanheira-do-brasil é Bertholletia excelsa. Suas sementes são conhecidas como castanha-do-brasil."},
{category:"☀️ FOTOSSÍNTESE",question:"Qual gás do ar é utilizado pela árvore como matéria-prima na fotossíntese?",answers:[["Dióxido de carbono (CO₂)",true],["Hélio (He)",false],["Metano (CH₄) como fonte principal",false],["Neônio (Ne)",false]],explanation:"Na fotossíntese, o CO₂ é utilizado junto com água e energia luminosa para formar compostos orgânicos."},
{category:"🐒 BIODIVERSIDADE",question:"Por que uma árvore gigante pode funcionar como um verdadeiro 'prédio' para a fauna?",answers:[["Porque oferece vários microambientes em tronco, galhos, folhas e cavidades",true],["Porque impede animais de chegar ao solo",false],["Porque só fornece abrigo para uma espécie",false],["Porque não possui interação com outros organismos",false]],explanation:"Uma árvore grande pode reunir diferentes estruturas e recursos, permitindo que várias espécies encontrem abrigo, alimento ou locais de reprodução."},
{category:"🪵 CARBONO",question:"Onde fica armazenada grande parte do carbono incorporado por uma árvore?",answers:[["Na biomassa, como tronco, galhos, folhas e raízes",true],["Somente nas flores",false],["Somente no ar ao redor",false],["Apenas na casca externa",false]],explanation:"O carbono assimilado pela fotossíntese passa a fazer parte da biomassa vegetal, distribuída por diferentes tecidos."},
{category:"🍂 SOLO",question:"O que acontece com folhas e pequenos galhos que caem sobre o solo da floresta?",answers:[["Eles podem se decompor e participar da ciclagem de nutrientes",true],["Transformam-se instantaneamente em plástico",false],["Param toda atividade dos decompositores",false],["Desaparecem sem qualquer transformação",false]],explanation:"Fungos, bactérias e outros organismos decompositores transformam matéria orgânica, contribuindo para a ciclagem de nutrientes."},
{category:"🌧️ CLIMA",question:"Qual afirmação melhor descreve a relação entre vegetação e umidade na Amazônia?",answers:[["A vegetação devolve parte da água à atmosfera por evapotranspiração",true],["As árvores eliminam a umidade do ar",false],["A floresta impede completamente a formação de nuvens",false],["A umidade só existe dentro dos rios",false]],explanation:"A evapotranspiração combina a água liberada pelas plantas com a evaporação da superfície e contribui para a umidade atmosférica."},
{category:"🔬 CIÊNCIA",question:"Qual medida é especialmente útil para acompanhar o crescimento de uma árvore ao longo dos anos?",answers:[["Diâmetro do tronco",true],["Cor de uma única folha",false],["Quantidade de sombras em uma fotografia",false],["Número de nuvens em um dia",false]],explanation:"Medições repetidas do diâmetro do tronco permitem acompanhar o crescimento e a dinâmica da árvore."},
{category:"🌱 PLANTAS",question:"Qual é a principal função das raízes para uma árvore?",answers:[["Fixação no solo e absorção de água e nutrientes",true],["Produção de luz solar",false],["Transformação do vento em alimento",false],["Produção exclusiva de frutos",false]],explanation:"As raízes ancoram a planta e, em conjunto com estruturas especializadas, participam da absorção de água e nutrientes."},
{category:"🦜 HABITAT",question:"O que pode ser encontrado em uma árvore grande que serve de recurso para outros seres vivos?",answers:[["Frutos, flores, folhas, cavidades e superfícies para abrigo",true],["Somente minerais metálicos",false],["Apenas água salgada",false],["Nenhum recurso biológico",false]],explanation:"A estrutura de uma árvore oferece diversos recursos e espaços utilizados por aves, insetos, mamíferos, fungos e outros organismos."},
{category:"🔥 CONSERVAÇÃO",question:"Qual pode ser uma consequência da remoção de grandes árvores em uma floresta?",answers:[["Perda de habitat e alteração de processos ecológicos",true],["Aumento garantido da biodiversidade",false],["Eliminação imediata de toda chuva",false],["Nenhuma mudança possível",false]],explanation:"A retirada de árvores pode modificar habitats, abertura do dossel, microclima, estoque de carbono e outras relações ecológicas."},
{category:"🌳 ECOLOGIA",question:"Por que árvores de grande porte podem ser importantes para a estabilidade ecológica da floresta?",answers:[["Elas participam de fluxos de energia, água, carbono e formação de habitats",true],["Elas vivem isoladas de todos os ciclos naturais",false],["Elas impedem completamente a decomposição",false],["Elas substituem todos os organismos do solo",false]],explanation:"Árvores grandes participam de múltiplos processos ecológicos e influenciam o ambiente ao redor delas."},
{category:"🌰 DISPERSÃO",question:"Por que frutos e sementes são importantes para a relação entre árvores e animais?",answers:[["Podem servir de alimento e ajudar na dispersão de sementes",true],["Servem apenas para absorver luz",false],["Impedem qualquer interação com a fauna",false],["Existem somente em árvores pequenas",false]],explanation:"Muitos animais consomem frutos e podem transportar sementes, contribuindo para a regeneração e distribuição das plantas."},
{category:"🧬 ADAPTAÇÃO",question:"Uma árvore muito alta precisa transportar água das raízes para regiões superiores. Qual tecido vegetal está diretamente ligado a esse transporte?",answers:[["Xilema",true],["Floema exclusivamente",false],["Epiderme exclusivamente",false],["Pólen",false]],explanation:"O xilema conduz principalmente água e sais minerais das raízes para outras partes da planta."},
{category:"🌎 PAISAGEM",question:"O que significa dizer que uma floresta possui diferentes estratos de vegetação?",answers:[["Que existem camadas de plantas em diferentes alturas",true],["Que todas as árvores têm a mesma altura",false],["Que só existe vegetação subterrânea",false],["Que não há competição por luz",false]],explanation:"Os estratos correspondem a diferentes níveis de altura, desde a vegetação mais baixa até o dossel e as árvores emergentes."},
{category:"⚡ ENERGIA",question:"De onde vem a energia usada pela árvore para realizar a fotossíntese?",answers:[["Da luz, principalmente da luz solar",true],["Da gasolina absorvida pelas raízes",false],["Do som produzido pelos animais",false],["Da areia do solo",false]],explanation:"A energia luminosa é capturada por pigmentos fotossintéticos e utilizada para impulsionar as reações da fotossíntese."},
{category:"🌿 CONSERVAÇÃO",question:"Qual ação é mais coerente com a proteção das árvores gigantes da Amazônia?",answers:[["Conservar florestas e adotar uso responsável dos recursos naturais",true],["Provocar queimadas sem controle",false],["Retirar árvores sem planejamento",false],["Substituir toda floresta por uma única cultura",false]],explanation:"A conservação dos ecossistemas e o manejo responsável ajudam a manter árvores, habitats e serviços ambientais."},
{category:"🔭 VISÃO DE FLORESTA",question:"Por que estudar árvores gigantes também ajuda a compreender a própria floresta amazônica?",answers:[["Porque elas estão conectadas a água, carbono, solo, clima e biodiversidade",true],["Porque elas são independentes do restante do ecossistema",false],["Porque apenas o tamanho importa",false],["Porque não interagem com animais ou microrganismos",false]],explanation:"As grandes árvores fazem parte de uma rede de processos ecológicos. Estudá-las ajuda a entender o funcionamento integrado da floresta."}
];

const $=id=>document.getElementById(id);
let current=0,score=0,correctCount=0,timerId=null,seconds=20,answered=false,quizQuestions=[];

function shuffle(arr){
  const a=[...arr];
  for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}
  return a;
}
function prepareQuiz(){
  quizQuestions=shuffle(questions).map(q=>({...q,answers:shuffle(q.answers)}));
}
function showScreen(id){
  document.querySelectorAll(".screen").forEach(s=>s.classList.remove("active"));
  $(id).classList.add("active");
  window.scrollTo({top:0,behavior:"smooth"});
}
function updateScore(){$("score-pill").textContent=score}
function loadQuestion(){
  answered=false;clearInterval(timerId);
  const q=quizQuestions[current];
  $("question-label").textContent=`QUESTÃO ${String(current+1).padStart(2,"0")} / ${quizQuestions.length}`;
  $("progress-bar").style.width=`${(current/quizQuestions.length)*100}%`;
  $("category").textContent=q.category;$("question").textContent=q.question;
  $("answers").innerHTML="";$("feedback").hidden=true;$("feedback").className="feedback";$("next-btn").hidden=true;
  ["A","B","C","D"].forEach((letter,i)=>{
    const btn=document.createElement("button");btn.className="answer";
    btn.innerHTML=`<span class="answer-letter">${letter}</span><span>${q.answers[i][0]}</span>`;
    btn.addEventListener("click",()=>selectAnswer(i,btn));$("answers").appendChild(btn);
  });
  seconds=20;updateTimer();
  timerId=setInterval(()=>{seconds--;updateTimer();if(seconds<=0){clearInterval(timerId);if(!answered)selectAnswer(-1,null)}},1000);
}
function updateTimer(){
  $("timer").textContent=`${seconds}s`;
  $("timer").classList.toggle("warning",seconds<=8&&seconds>4);
  $("timer").classList.toggle("danger",seconds<=4);
}
function selectAnswer(index,selectedButton){
  if(answered)return;answered=true;clearInterval(timerId);
  const q=quizQuestions[current],buttons=[...document.querySelectorAll(".answer")];
  buttons.forEach((btn,i)=>{btn.disabled=true;if(q.answers[i][1])btn.classList.add("correct")});
  const isCorrect=index>=0&&q.answers[index][1];
  if(isCorrect){
    score+=100+Math.max(0,seconds*2);correctCount++;
    selectedButton.classList.add("correct");$("feedback-icon").textContent="✓";$("feedback-title").textContent="RESPOSTA CONFIRMADA";
  }else{
    if(selectedButton)selectedButton.classList.add("wrong");
    $("feedback-icon").textContent="!";$("feedback-title").textContent=index===-1?"TEMPO ESGOTADO":"RESPOSTA INCORRETA";$("feedback").classList.add("wrong");
  }
  $("feedback-text").textContent=q.explanation;$("feedback").hidden=false;
  $("next-btn").hidden=false;
  $("next-btn").innerHTML=current===quizQuestions.length-1?"FINALIZAR EXPERIÊNCIA <span>↗</span>":"PRÓXIMA QUESTÃO <span>→</span>";
  updateScore();$("progress-bar").style.width=`${((current+1)/quizQuestions.length)*100}%`;
  // Avanço automático: não é necessário um botão de confirmação.
  if(index !== -1){
    setTimeout(()=>{
      if(answered && current < quizQuestions.length-1) { current++; loadQuestion(); }
      else if(answered && current === quizQuestions.length-1) finishQuiz();
    }, 1100);
  }else{
    setTimeout(()=>{
      if(answered && current < quizQuestions.length-1) { current++; loadQuestion(); }
      else if(answered) finishQuiz();
    }, 1600);
  }
}
function finishQuiz(){
  clearInterval(timerId);const accuracy=Math.round(correctCount/quizQuestions.length*100);
  $("final-score").textContent=score;$("correct-count").textContent=correctCount;$("wrong-count").textContent=quizQuestions.length-correctCount;$("accuracy").textContent=`${accuracy}%`;
  if(accuracy===100){$("result-title").textContent="Domínio total.";$("result-message").textContent="Você atravessou as 20 missões com precisão máxima e demonstrou excelente domínio sobre as gigantes da Amazônia. 🌟"}
  else if(accuracy>=75){$("result-title").textContent="Excelente desempenho.";$("result-message").textContent="Você demonstrou um conhecimento sólido sobre a floresta, suas árvores e as relações ecológicas que as conectam. 🌿"}
  else if(accuracy>=50){$("result-title").textContent="Boa exploração.";$("result-message").textContent="Você já tem uma boa base. O dossiê final traz conceitos para aprofundar sua leitura da floresta. 🌱"}
  else{$("result-title").textContent="Missão iniciada.";$("result-message").textContent="Cada resposta é uma descoberta. Consulte o dossiê e volte para uma nova tentativa. 🌎"}
  showScreen("result-screen");
}
function start(){
  current=0;score=0;correctCount=0;updateScore();prepareQuiz();showScreen("quiz-screen");loadQuestion();
}
$("start-btn").addEventListener("click",start);
// A navegação agora é automática após a escolha; não há botão de confirmação.
$("info-btn").addEventListener("click",()=>showScreen("info-screen"));
$("restart-btn").addEventListener("click",start);
$("info-restart-btn").addEventListener("click",start);