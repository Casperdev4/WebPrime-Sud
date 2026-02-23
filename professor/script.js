const CONFIG = {
  typingDelay: 1200,
  afterTypingDelay: 400,
  correctDelay: 800,
  wrongDelay: 600,
  victoryWait: 8000,
  redirectDelay: 2000,
  revealSteps: [
    { opacity: 0.95, blur: 20 },
    { opacity: 0.85, blur: 17 },
    { opacity: 0.72, blur: 14 },
    { opacity: 0.56, blur: 11 },
    { opacity: 0.40, blur: 8 },
    { opacity: 0.20, blur: 4 },
    { opacity: 0, blur: 0 },
  ],
};

const introQuestions = [
  {
    text: "Tu cherches quoi exactement ?",
    answers: [
      { letter: "A", text: "Un site internet" },
      { letter: "B", text: "Une application mobile" }
    ],
    reactions: [
      "Bien, tu es au bon endroit.",
      null
    ],
    redirectIndex: 1,
    redirectUrl: "../creation-application-mobile.html"
  },
  {
    text: "Tu es dans quel secteur ?",

    answers: [
      { letter: "A", text: "Artisan / BTP" },
      { letter: "B", text: "Commerce / Restaurant / Beauté / Cabinet" },
      { letter: "C", text: "E-Commerce" }
    ],
    reactions: [
      "Parfait, les artisans c'est notre spécialité.",
      "On connaît bien ton secteur.",
      "On s'adapte à tous les secteurs."
    ]
  }
];

const questions = [
  {
    text: "Tu es artisan et tu veux des clients via internet. C'est quoi le PLUS important ?",
    answers: [
      { letter: "A", text: "Un beau site avec de jolies photos" },
      { letter: "B", text: "Être en 1ère page Google sur les mots-clés les plus recherchés de ton métier" },
      { letter: "C", text: "Poster sur les réseaux sociaux tous les jours" }
    ],
    correct: 1,
    goodReaction: "Exactement. Sans visibilité sur Google, ton site c'est une vitrine dans une ruelle que personne ne connaît.",
    errorMsg: "FAUX ! Un site que personne ne trouve, c'est un site qui n'existe pas... DÉGAGE !",
    artisanOnly: true
  },
  {
    text: "Seulement 10% des sites peuvent être en première page Google, pour y être tu fais quoi ?",
    answers: [
      { letter: "A", text: "Tu fais appel à un expert SEO qui sait ce qu'il fait" },
      { letter: "B", text: "Tu attends que ça vienne tout seul" },
      { letter: "C", text: "Tu achètes de la pub et tu pries" }
    ],
    correct: 0,
    goodReaction: "Pas mal... tu commences à comprendre.",
    errorMsg: "MAUVAIS CALCUL ! Pendant ce temps, tes concurrents te dévorent... FUIS !"
  },
  {
    text: "Une agence web te promet la 1ère page Google. Tu fais quoi avant de signer ?",
    answers: [
      { letter: "A", text: "Tu signes direct, ils ont l'air sérieux" },
      { letter: "B", text: "Tu vérifies juste leur propre site" },
      { letter: "C", text: "Tu demandes les preuves : quels sites, quels mots-clés, quelles positions" }
    ],
    correct: 2,
    goodReaction: "Malin. 90% des agences ne peuvent PAS prouver leurs résultats. Nous on a une galerie de +200 preuves.",
    errorMsg: "NAÏF ! N'importe qui peut PROMETTRE la lune. Les preuves, c'est tout ce qui compte... FUIS !"
  },
  {
    text: "Avoir une galerie avec + de 200 mots-clés en première page Google, c'est...",
    answers: [
      { letter: "A", text: "De la chance" },
      { letter: "B", text: "Le résultat d'une vraie expertise SEO" },
      { letter: "C", text: "Impossible pour une petite agence" }
    ],
    correct: 1,
    goodReaction: "Exactement. Le travail paie toujours.",
    errorMsg: "ERREUR ! Les résultats parlent d'eux-mêmes... QUITTE CE SITE !"
  },
  {
    text: "Pourquoi beaucoup d'artisans n'ont aucun appel malgré leur site web ?",
    answers: [
      { letter: "A", text: "Internet ça marche pas pour les artisans" },
      { letter: "B", text: "Leur site n'apparaît pas en 1ère page sur les bons mots-clés" },
      { letter: "C", text: "Ils n'ont pas assez de pages sur leur site" }
    ],
    correct: 1,
    goodReaction: "Voilà la vérité. Pas de visibilité = pas de clients. C'est aussi simple que ça.",
    errorMsg: "FAUX ! Le problème c'est jamais internet, c'est ceux qui ne savent pas l'utiliser... QUITTE CE SITE !",
    artisanOnly: true
  },
  {
    text: "Ton site est en 1ère page Google mais tu estimes ne pas recevoir assez d'appels. Tu fais quoi ?",
    answers: [
      { letter: "A", text: "Tu accuses ton développeur web, c'est forcément sa faute" },
      { letter: "B", text: "Tu vérifies tes offres, ta fiche Google et ton discours commercial" },
      { letter: "C", text: "Tu supprimes ton site, de toute façon ça sert à rien" }
    ],
    correct: 1,
    goodReaction: "Enfin quelqu'un qui réfléchit. Être premier sur Google c'est 50% du travail. Le reste, c'est TOI : tes offres, ton accueil téléphonique, tes avis clients.",
    errorMsg: "PATHÉTIQUE ! Tu es en 1ère page Google et tu te plains ?! Le problème c'est pas le site, c'est ce que TU en fais... DÉGAGE !"
  },
  {
    text: "Pour ce genre de site internet, c'est quoi le nerf de la guerre ?",
    answers: [
      { letter: "A", text: "Avoir un beau compte Instagram" },
      { letter: "B", text: "Une fiche Google optimisée reliée à un site web performant" },
      { letter: "C", text: "Payer de la pub Facebook" }
    ],
    correct: 1,
    goodReaction: "Exact. Ta fiche Google c'est ta vitrine digitale. Mais sans un vrai site derrière, Google te prend pas au sérieux.",
    wrongExplanation: "Pas tout à fait. La bonne réponse c'est : une fiche Google optimisée reliée à un site performant. C'est ça qui te rend visible localement.",
    commerceOnly: true,
    forgiving: true
  },
  {
    text: "Les robots de Google analysent ton site. Qu'est-ce qu'ils détectent immédiatement ?",
    answers: [
      { letter: "A", text: "Les couleurs de ton logo" },
      { letter: "B", text: "Le nombre de photos" },
      { letter: "C", text: "La performance, la vitesse et la qualité du code de ton site" }
    ],
    correct: 2,
    goodReaction: "Les robots Google ne regardent pas si ton site est joli. Ils mesurent la vitesse, le code et la structure. Un site no-code, ils le repèrent direct.",
    wrongExplanation: "Raté. Les robots Google analysent la performance, la vitesse et la qualité du code. Un site Wix ou Squarespace, ils le détectent comme du bas de gamme.",
    commerceOnly: true,
    forgiving: true
  },
  {
    text: "WordPress avec du code PHP personnalisé vs un site Wix ou Squarespace, c'est quoi la différence ?",
    answers: [
      { letter: "A", text: "Aucune, c'est pareil" },
      { letter: "B", text: "Juste le prix" },
      { letter: "C", text: "Performance, SEO, et contrôle total sur le référencement Google" }
    ],
    correct: 2,
    goodReaction: "Voilà. WordPress + PHP sur mesure = un site rapide, optimisé, que Google adore. Un site no-code, c'est du bricolage.",
    wrongExplanation: "Non ! La vraie différence c'est la performance, le SEO et le contrôle total. WordPress + PHP sur mesure, c'est ce que Google préfère. Le no-code c'est du bricolage.",
    commerceOnly: true,
    forgiving: true
  },
  {
    text: "Pour un site e-commerce, c'est quoi le plus important pour vendre en ligne ?",
    answers: [
      { letter: "A", text: "Un beau design avec beaucoup de couleurs" },
      { letter: "B", text: "Un site rapide, sécurisé, bien référencé avec un paiement fiable" },
      { letter: "C", text: "Avoir le plus de produits possible" }
    ],
    correct: 1,
    goodReaction: "Exact. Un site e-commerce qui rame ou qui inspire pas confiance, le client ferme l'onglet en 3 secondes.",
    wrongExplanation: "Pas tout à fait. La bonne réponse c'est : un site rapide, sécurisé, bien référencé avec un paiement fiable. C'est ça qui convertit les visiteurs en acheteurs.",
    ecommerceOnly: true,
    forgiving: true
  },
  {
    text: "Un client hésite à payer en ligne sur ton site. Qu'est-ce qui le rassure ?",
    answers: [
      { letter: "A", text: "Des animations et des effets visuels" },
      { letter: "B", text: "Un site fluide, des offres, de bons avis clients et plusieurs modes de paiement" },
      { letter: "C", text: "Un chatbot qui lui dit bonjour" }
    ],
    correct: 1,
    goodReaction: "Voilà. Un site fluide, des offres claires, des avis clients et plusieurs modes de paiement. C'est la base pour que les gens sortent leur carte bancaire.",
    wrongExplanation: "Non. Ce qui rassure un acheteur c'est : un site fluide, des offres, de bons avis clients et plusieurs modes de paiement.",
    ecommerceOnly: true,
    forgiving: true
  },
  {
    text: "WordPress + WooCommerce avec du code PHP personnalisé vs Shopify, c'est quoi la différence ?",
    answers: [
      { letter: "A", text: "Aucune, c'est pareil" },
      { letter: "B", text: "Shopify c'est mieux car c'est plus simple" },
      { letter: "C", text: "Performance, SEO, zéro commission sur les ventes et contrôle total" }
    ],
    correct: 2,
    goodReaction: "Exactement. WordPress + WooCommerce = pas de commission, SEO total, performance sur mesure. Shopify te prend un % sur chaque vente et limite ton référencement.",
    wrongExplanation: "Faux. La vraie différence : WordPress + WooCommerce te donne la performance, le SEO et zéro commission. Shopify prend un pourcentage sur chaque vente et limite ton contrôle.",
    ecommerceOnly: true,
    forgiving: true
  }
];

const chatMessages = document.getElementById('chat-messages');
const chatAnswers = document.getElementById('chat-answers');
const siteOverlay = document.getElementById('site-overlay');
const progressFill = document.getElementById('progress-fill');
const victoryMessage = document.getElementById('victory-message');
const chatZone = document.getElementById('chat-zone');

let currentQuestion = 0;
let currentIntro = 0;
let isAnswering = false;
let introPhase = true;
let selectedSector = null;
let activeQuestions = [];

function buildQuestions() {
  if (selectedSector === 0) {
    activeQuestions = questions.filter(q => !q.commerceOnly && !q.ecommerceOnly);
  } else if (selectedSector === 1) {
    activeQuestions = questions.filter(q => q.commerceOnly);
  } else if (selectedSector === 2) {
    activeQuestions = questions.filter(q => q.ecommerceOnly);
  } else {
    activeQuestions = questions.filter(q => !q.artisanOnly && !q.commerceOnly && !q.ecommerceOnly);
  }
  const total = activeQuestions.length;
  CONFIG.revealSteps = [{ opacity: 0.95, blur: 20 }];
  for (let i = 1; i <= total; i++) {
    const progress = i / total;
    CONFIG.revealSteps.push({
      opacity: Math.round((0.95 * (1 - progress)) * 100) / 100,
      blur: Math.round(20 * (1 - progress))
    });
  }
}

function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

function scrollToBottom() {
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function createGhostBubble(text, extraClass = '') {
  const bubble = document.createElement('div');
  bubble.className = `chat-bubble bubble-ghost ${extraClass}`.trim();
  bubble.innerHTML = `
    <div class="ghost-header">
      <div class="ghost-avatar"><img src="webprime.webp" alt="Professor"></div>
      <span class="ghost-name">Professor</span>
    </div>
    <div class="ghost-text">${text}</div>
  `;
  return bubble;
}

function showTyping() {
  const typing = document.createElement('div');
  typing.className = 'typing-indicator';
  typing.id = 'typing';
  typing.innerHTML = `
    <div class="typing-dot"></div>
    <div class="typing-dot"></div>
    <div class="typing-dot"></div>
  `;
  chatMessages.appendChild(typing);
  scrollToBottom();
}

function hideTyping() {
  const typing = document.getElementById('typing');
  if (typing) typing.remove();
}

async function sendGhostMessage(text, extraClass = '') {
  showTyping();
  await sleep(CONFIG.typingDelay);
  hideTyping();

  const bubble = createGhostBubble(text, extraClass);
  chatMessages.appendChild(bubble);
  scrollToBottom();
  await sleep(CONFIG.afterTypingDelay);
}

function sendUserMessage(text) {
  const bubble = document.createElement('div');
  bubble.className = 'chat-bubble bubble-user';
  bubble.textContent = text;
  chatMessages.appendChild(bubble);
  scrollToBottom();
}

function updateReveal(step) {
  const r = CONFIG.revealSteps[step];
  siteOverlay.style.background = `rgba(0, 0, 0, ${r.opacity})`;
  siteOverlay.style.backdropFilter = `blur(${r.blur}px)`;
}

function showIntroAnswers(q) {
  chatAnswers.innerHTML = '';
  q.answers.forEach((answer, index) => {
    const btn = document.createElement('button');
    btn.className = 'answer-btn';
    btn.innerHTML = `
      <span class="answer-letter">${answer.letter}</span>
      <span class="answer-text">${answer.text}</span>
    `;
    btn.addEventListener('click', () => handleIntroAnswer(index));
    chatAnswers.appendChild(btn);
  });
}

async function handleIntroAnswer(ansIndex) {
  if (isAnswering) return;
  isAnswering = true;

  const q = introQuestions[currentIntro];

  sendUserMessage(q.answers[ansIndex].text);
  chatAnswers.innerHTML = '';

  if (q.redirectIndex !== undefined && ansIndex === q.redirectIndex) {
    const redirectMessages = {
      "../creation-application-mobile.html": "Je t'envoie vers notre page application mobile. À tout de suite !",
      "../creation-site-internet.html": "Je t'envoie vers notre page création de site internet. À tout de suite !"
    };
    const msg = redirectMessages[q.redirectUrl] || "Je te redirige. À tout de suite !";
    await sendGhostMessage(msg);
    await sleep(1000);
    window.location.href = q.redirectUrl;
    return;
  }

  if (currentIntro === 1) {
    selectedSector = ansIndex;
  }

  await sendGhostMessage(q.reactions[ansIndex], 'reaction-good');

  currentIntro++;

  if (currentIntro >= introQuestions.length) {
    introPhase = false;
    buildQuestions();
    await sendGhostMessage("Bien, maintenant passons aux choses sérieuses.");
    await sendGhostMessage(activeQuestions[0].text, 'question');
    showAnswers(activeQuestions[0]);
    isAnswering = false;
  } else {
    await sendGhostMessage(introQuestions[currentIntro].text, 'question');
    showIntroAnswers(introQuestions[currentIntro]);
    isAnswering = false;
  }
}

function showAnswers(q) {
  chatAnswers.innerHTML = '';
  q.answers.forEach((answer, index) => {
    const btn = document.createElement('button');
    btn.className = 'answer-btn';
    btn.innerHTML = `
      <span class="answer-letter">${answer.letter}</span>
      <span class="answer-text">${answer.text}</span>
    `;
    btn.addEventListener('click', () => handleAnswer(index));
    chatAnswers.appendChild(btn);
  });
}

async function handleAnswer(ansIndex) {
  if (isAnswering) return;
  isAnswering = true;

  const q = activeQuestions[currentQuestion];

  sendUserMessage(q.answers[ansIndex].text);
  chatAnswers.innerHTML = '';

  if (ansIndex === q.correct) {
    currentQuestion++;
    progressFill.style.width = (currentQuestion / activeQuestions.length) * 100 + '%';
    updateReveal(currentQuestion);
    await sendGhostMessage(q.goodReaction, 'reaction-good');

    if (currentQuestion >= activeQuestions.length) {
      await sleep(5000);
      showVictory();
    } else {
      await sendGhostMessage(activeQuestions[currentQuestion].text, 'question');
      showAnswers(activeQuestions[currentQuestion]);
      isAnswering = false;
    }

  } else if (q.forgiving || selectedSector === 1) {
    const explanation = q.wrongExplanation || q.errorMsg.replace(/\.\.\..*$/, '. La bonne réponse était : ' + q.answers[q.correct].text);
    await sendGhostMessage(explanation, 'reaction-bad');

    currentQuestion++;
    progressFill.style.width = (currentQuestion / activeQuestions.length) * 100 + '%';
    updateReveal(currentQuestion);

    if (currentQuestion >= activeQuestions.length) {
      await sleep(5000);
      showVictory();
    } else {
      await sendGhostMessage(activeQuestions[currentQuestion].text, 'question');
      showAnswers(activeQuestions[currentQuestion]);
      isAnswering = false;
    }

  } else {
    triggerErrorEffects();

    await sendGhostMessage(q.errorMsg, 'reaction-bad');
    spawnErrorPopups(q.errorMsg);
    showExitButton();
  }
}

function triggerErrorEffects() {
  document.body.classList.add('screen-shake');
  setTimeout(() => document.body.classList.remove('screen-shake'), 600);

  document.body.classList.add('red-flash');
  setTimeout(() => document.body.classList.remove('red-flash'), 800);

  document.body.classList.add('glitch-effect');
  setTimeout(() => document.body.classList.remove('glitch-effect'), 1500);
}

function spawnErrorPopups(errorText) {
  const container = document.createElement('div');
  container.id = 'popup-flood';
  document.body.appendChild(container);

  const totalPopups = 20;
  for (let i = 0; i < totalPopups; i++) {
    setTimeout(() => {
      const popup = document.createElement('div');
      popup.className = 'error-popup';
      popup.style.top = Math.random() * 80 + '%';
      popup.style.left = Math.random() * 75 + '%';
      popup.style.transform = `rotate(${(Math.random() - 0.5) * 20}deg)`;
      popup.innerHTML = `
        <div class="popup-header">
          <span class="popup-icon">&#9888;</span>
          <span>ERREUR</span>
          <span class="popup-close">&#10005;</span>
        </div>
        <div class="popup-body">${errorText}</div>
      `;
      container.appendChild(popup);
    }, i * 150);
  }
}

function showExitButton() {
  chatAnswers.innerHTML = '';
  const btn = document.createElement('button');
  btn.className = 'answer-btn exit-btn';
  btn.textContent = 'Quitter le site';
  btn.addEventListener('click', () => {
    window.location.href = 'https://www.google.com';
  });
  chatAnswers.appendChild(btn);
}

function showVictory() {
  chatZone.classList.add('fade-out');
  document.getElementById('particles').style.transition = 'opacity 1.5s ease';
  document.getElementById('particles').style.opacity = '0';
  sessionStorage.setItem('professorDone', 'true');
  setTimeout(() => {
    if (selectedSector === 0) window.location.href = '../pack-google.html';
    else if (selectedSector === 1) window.location.href = '../creation-site-internet.html';
    else if (selectedSector === 2) window.location.href = '../site-ecommerce.html';
    else window.location.href = '../index.html';
  }, 1500);
}

document.addEventListener('DOMContentLoaded', async () => {
  updateReveal(0);
  await sendGhostMessage("Bienvenue... attends 2 secondes.");
  await sendGhostMessage(introQuestions[0].text, 'question');
  showIntroAnswers(introQuestions[0]);
});
