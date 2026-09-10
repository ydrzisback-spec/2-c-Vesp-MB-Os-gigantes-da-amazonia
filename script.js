const questions = [
  {
    category: "🌿 Floresta",
    question: "Qual destas árvores é conhecida por atingir grande porte na Amazônia?",
    answers: ["Sumaúma", "Girassol", "Capim-limão", "Manjericão"],
    correct: 0,
    explanation: "A sumaúma (Ceiba pentandra) é uma árvore de grande porte encontrada em áreas da Amazônia."
  },
  {
    category: "📏 Tamanho",
    question: "Por que as árvores gigantes são importantes para a estrutura da floresta?",
    answers: ["Porque formam diferentes níveis de vegetação", "Porque impedem toda a chuva", "Porque não permitem animais", "Porque vivem apenas em jardins"],
    correct: 0,
    explanation: "Árvores altas criam um dossel e ajudam a formar diferentes camadas, oferecendo diversos ambientes para a vida."
  },
  {
    category: "💧 Água",
    question: "Como as árvores participam do ciclo da água?",
    answers: ["Pela transpiração das folhas", "Produzindo água líquida no tronco", "Parando a evaporação", "Transformando chuva em pedra"],
    correct: 0,
    explanation: "Na transpiração, a água absorvida pelas raízes é liberada para a atmosfera principalmente pelas folhas."
  },
  {
    category: "🐒 Biodiversidade",
    question: "O que uma árvore grande pode oferecer aos animais?",
    answers: ["Abrigo, alimento e locais para reprodução", "Somente sombra para humanos", "Apenas água salgada", "Nenhum recurso"],
    correct: 0,
    explanation: "Troncos, galhos, folhas, flores e frutos podem servir de abrigo, alimento e espaço para diferentes espécies."
  },
  {
    category: "🌎 Carbono",
    question: "As árvores armazenam carbono principalmente em quais partes?",
    answers: ["Tronco, galhos, raízes e outros tecidos", "Somente nas flores", "Somente nas sementes", "Apenas no solo ao redor"],
    correct: 0,
    explanation: "O carbono incorporado pela fotossíntese fica armazenado na biomassa da árvore, incluindo troncos, galhos e raízes."
  },
  {
    category: "🍂 Ecologia",
    question: "O que acontece com folhas e galhos que caem na floresta?",
    answers: ["Eles podem se decompor e devolver nutrientes ao solo", "Viraram plástico naturalmente", "Desaparecem sem interação", "Impedem toda vida no solo"],
    correct: 0,
    explanation: "A decomposição da matéria orgânica participa da ciclagem de nutrientes no ecossistema."
  },
  {
    category: "🌰 Castanheira",
    question: "Qual produto conhecido está associado à castanheira-do-brasil?",
    answers: ["Castanha-do-brasil", "Café arábica", "Azeitona", "Uva"],
    correct: 0,
    explanation: "A castanheira-do-brasil (Bertholletia excelsa) produz as sementes conhecidas como castanha-do-brasil."
  },
  {
    category: "🌱 Crescimento",
    question: "Para crescer, uma árvore precisa principalmente de luz, água, nutrientes e...",
    answers: ["Dióxido de carbono (CO₂)", "Gasolina", "Sal de cozinha em excesso", "Plástico"],
    correct: 0,
    explanation: "O CO₂ é matéria-prima da fotossíntese, processo que permite à planta produzir compostos orgânicos."
  },
  {
    category: "☀️ Fotossíntese",
    question: "Qual é a função da fotossíntese para a árvore?",
    answers: ["Produzir matéria orgânica usando energia da luz", "Fazer a árvore respirar debaixo d’água", "Eliminar todas as folhas", "Produzir solo"],
    correct: 0,
    explanation: "Na fotossíntese, a planta usa energia luminosa para produzir açúcares a partir de água e CO₂, liberando oxigênio."
  },
  {
    category: "🪵 Floresta",
    question: "O que pode acontecer quando árvores gigantes são retiradas em grande quantidade?",
    answers: ["Há perda de habitat e mudanças no funcionamento da floresta", "A biodiversidade sempre aumenta", "A floresta fica automaticamente mais úmida", "Nada muda"],
    correct: 0,
    explanation: "A retirada de árvores pode reduzir habitats, alterar o microclima e afetar processos ecológicos."
  },
  {
    category: "🔬 Ciência",
    question: "Qual é uma boa maneira de estudar o crescimento de uma árvore?",
    answers: ["Medir seu crescimento ao longo do tempo", "Adivinhar pela cor", "Observar apenas uma vez", "Ignorar o ambiente"],
    correct: 0,
    explanation: "Medições repetidas permitem acompanhar altura, diâmetro e outras características ao longo do tempo."
  },
  {
    category: "🌳 Conservação",
    question: "Qual atitude ajuda a proteger as grandes árvores amazônicas?",
    answers: ["Conservar florestas e usar os recursos de forma responsável", "Desmatar sem planejamento", "Provocar queimadas", "Retirar árvores sem autorização"],
    correct: 0,
    explanation: "A conservação dos ecossistemas e o uso responsável dos recursos ajudam a manter árvores, habitats e serviços ambientais."
  }
];

const $ = (id) => document.getElementById(id);
let current = 0;
let score = 0;
let correctCount = 0;
let timerId = null;
let seconds = 20;
let answered = false;

function showScreen(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  $(id).classList.add("active");
  window.scrollTo({top:0, behavior:"smooth"});
}

function updateScore() {
  $("score-pill").textContent = `${score} ponto${score === 1 ? "" : "s"}`;
}

function loadQuestion() {
  answered = false;
  clearInterval(timerId);
  const q = questions[current];
  $("question-label").textContent = `PERGUNTA ${current + 1} DE ${questions.length}`;
  $("progress-bar").style.width = `${((current) / questions.length) * 100}%`;
  $("category").textContent = q.category;
  $("question").textContent = q.question;
  $("answers").innerHTML = "";
  $("feedback").hidden = true;
  $("feedback").className = "feedback";
  $("next-btn").hidden = true;

  const letters = ["A","B","C","D"];
  q.answers.forEach((answer, index) => {
    const btn = document.createElement("button");
    btn.className = "answer";
    btn.innerHTML = `<span class="answer-letter">${letters[index]}</span><span>${answer}</span>`;
    btn.addEventListener("click", () => selectAnswer(index, btn));
    $("answers").appendChild(btn);
  });

  seconds = 20;
  updateTimer();
  timerId = setInterval(() => {
    seconds--;
    updateTimer();
    if (seconds <= 0) {
      clearInterval(timerId);
      if (!answered) selectAnswer(-1, null);
    }
  }, 1000);
}

function updateTimer() {
  $("timer").textContent = `⏱ ${seconds}s`;
  $("timer").classList.toggle("warning", seconds <= 8 && seconds > 4);
  $("timer").classList.toggle("danger", seconds <= 4);
}

function selectAnswer(index, selectedButton) {
  if (answered) return;
  answered = true;
  clearInterval(timerId);

  const q = questions[current];
  const buttons = [...document.querySelectorAll(".answer")];
  buttons.forEach((btn, i) => {
    btn.disabled = true;
    if (i === q.correct) btn.classList.add("correct");
  });

  const isCorrect = index === q.correct;
  if (isCorrect) {
    const timeBonus = Math.max(0, seconds * 2);
    score += 100 + timeBonus;
    correctCount++;
    selectedButton?.classList.add("correct");
    $("feedback-icon").textContent = "✓";
    $("feedback-title").textContent = "Resposta correta!";
  } else {
    if (selectedButton) selectedButton.classList.add("wrong");
    $("feedback-icon").textContent = "!";
    $("feedback-title").textContent = index === -1 ? "Tempo esgotado!" : "Quase!";
    $("feedback").classList.add("wrong");
  }

  $("feedback-text").textContent = q.explanation;
  $("feedback").hidden = false;
  $("next-btn").hidden = false;
  $("next-btn").textContent = current === questions.length - 1 ? "Ver meu resultado →" : "Próxima pergunta →";
  updateScore();
  $("progress-bar").style.width = `${((current + 1) / questions.length) * 100}%`;
}

function finishQuiz() {
  clearInterval(timerId);
  const accuracy = Math.round((correctCount / questions.length) * 100);
  $("final-score").textContent = score;
  $("correct-count").textContent = correctCount;
  $("wrong-count").textContent = questions.length - correctCount;
  $("accuracy").textContent = `${accuracy}%`;

  if (accuracy === 100) {
    $("result-title").textContent = "Perfeito! 🌟";
    $("result-message").textContent = "Você mostrou que conhece muito bem as gigantes da Amazônia.";
  } else if (accuracy >= 75) {
    $("result-title").textContent = "Mandou muito bem! 🌿";
    $("result-message").textContent = "Ótimo resultado! Você já entende bastante sobre a floresta.";
  } else if (accuracy >= 50) {
    $("result-title").textContent = "Bom trabalho! 🌱";
    $("result-message").textContent = "Você está no caminho certo. Aproveite as informações do projeto para aprender ainda mais.";
  } else {
    $("result-title").textContent = "Valeu pelo desafio! 🌎";
    $("result-message").textContent = "Agora confira as informações do projeto e tente novamente para melhorar sua pontuação.";
  }
  showScreen("result-screen");
}

function restart() {
  current = 0;
  score = 0;
  correctCount = 0;
  updateScore();
  showScreen("quiz-screen");
  loadQuestion();
}

$("start-btn").addEventListener("click", () => {
  current = 0; score = 0; correctCount = 0;
  showScreen("quiz-screen");
  loadQuestion();
});

$("next-btn").addEventListener("click", () => {
  if (current < questions.length - 1) {
    current++;
    loadQuestion();
  } else {
    finishQuiz();
  }
});

$("info-btn").addEventListener("click", () => showScreen("info-screen"));
$("restart-btn").addEventListener("click", restart);
$("info-restart-btn").addEventListener("click", restart);
