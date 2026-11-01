const quotes = [
  { text: "我最近有点忙，忙着喜欢你。", category: "甜到犯规" },
  { text: "你知道我缺什么吗？缺点你。", category: "经典土味" },
  { text: "我想买一块地，买你的死心塌地。", category: "经典土味" },
  { text: "你不是人，你是我的心上人。", category: "经典土味" },
  { text: "我对你的爱，就像拖拉机上山，轰轰烈烈。", category: "沙雕暧昧" },
  { text: "你今天怪怪的，怪好看的。", category: "甜到犯规" },
  { text: "你猜我的心在哪边？左边。不，在你那边。", category: "经典土味" },
  { text: "我想去取一下东西，取你的心。", category: "表白冲刺" },
  { text: "遇见你之后，我的人生建议只有一个：和你在一起。", category: "表白冲刺" },
  { text: "我没有备胎，也不玩暧昧，我所有偏心都给你。", category: "表白冲刺" },
  { text: "你是我明目张胆的偏爱，也是我众所周知的私心。", category: "文艺一点" },
  { text: "晚风都知道，我想把温柔寄给你。", category: "文艺一点" },
  { text: "月亮不会奔向你，但我会。", category: "文艺一点" },
  { text: "我喜欢你，不是三分钟热度，是蓄谋已久。", category: "表白冲刺" },
  { text: "今晚月色真好，适合想你。", category: "早晚安" },
  { text: "早安，今天也要把好运分你一半。", category: "早晚安" },
  { text: "晚安，梦里见不到你我就明天继续想。", category: "早晚安" },
  { text: "我发现昨天很喜欢你，今天也很喜欢你，而且预感明天也是。", category: "甜到犯规" },
  { text: "你不用多好，我喜欢就好；我没有很好，你不嫌弃就好。", category: "文艺一点" },
  { text: "我有超能力，超级喜欢你。", category: "沙雕暧昧" },
  { text: "你会弹吉他吗？不会。那你怎么拨动了我的心弦。", category: "经典土味" },
  { text: "你知道我的缺点是什么吗？缺点和你在一起的时间。", category: "经典土味" },
  { text: "我想变成一阵风，这样就能偷偷抱你一下。", category: "文艺一点" },
  { text: "你像一杯奶茶，我想从早喝到晚。", category: "沙雕暧昧" },
  { text: "如果甜也有标准答案，那一定是你的名字。", category: "甜到犯规" },
  { text: "我本来想环游世界，看到你以后，觉得可以先绕着你转。", category: "甜到犯规" },
  { text: "你的眼睛真好看，里面有晴天，也有我想去的地方。", category: "文艺一点" },
  { text: "我想把日落、晚风和喜欢你，都写进同一页。", category: "文艺一点" },
  { text: "别人都在等新年烟火，我在等你一句想我。", category: "早晚安" },
  { text: "早安，今天的第一份心动已经发送给你。", category: "早晚安" },
  { text: "我喜欢你这件事，没什么技巧，全是诚意。", category: "表白冲刺" },
  { text: "想和你从新鲜感走到归属感。", category: "表白冲刺" },
  { text: "你别皱眉，我走过去就想把全世界调成晴天。", category: "甜到犯规" },
  { text: "我不太会说情话，但见到你就自动变甜。", category: "甜到犯规" },
  { text: "你知道我为什么感冒了吗？因为我对你完全没有抵抗力。", category: "沙雕暧昧" },
  { text: "我今天去输液了，输的什么液？想你的夜。", category: "沙雕暧昧" },
  { text: "你是方便面吗？为什么我一泡你就心软。", category: "沙雕暧昧" },
  { text: "你像导航一样，一出现我就有了方向。", category: "经典土味" },
  { text: "喜欢你像天气预报，明天有，后天也有。", category: "甜到犯规" },
  { text: "我的输入法都记住你了，可见我想你有多频繁。", category: "沙雕暧昧" },
  { text: "想牵你的手，从心动走到日常。", category: "文艺一点" },
  { text: "你不用回头，我会一直在你身后，也会走到你身边。", category: "文艺一点" },
  { text: "晚安，今天也把最软的一角留给你。", category: "早晚安" },
  { text: "早安，见不到你的早晨，也要认真想你。", category: "早晚安" },
  { text: "喜欢你之前，我挺会安排生活；喜欢你之后，生活想安排你。", category: "表白冲刺" },
  { text: "你愿意和我试试吗？不是试用，是试一辈子。", category: "表白冲刺" },
  { text: "你笑一下，我的世界就自动开灯。", category: "甜到犯规" },
  { text: "我对你不是滤镜，是确定。", category: "文艺一点" },
  { text: "我想把我攒了很久的温柔，一次性花在你身上。", category: "表白冲刺" },
  { text: "你是年少的欢喜，也是反过来念的喜欢。", category: "文艺一点" },
  { text: "我看人很准，你这个人一看就适合被我喜欢。", category: "沙雕暧昧" },
  { text: "你是不是偷走了我的东西？我的心怎么老往你那跑。", category: "经典土味" },
  { text: "我的心是单人间，已经被你住满了。", category: "经典土味" },
  { text: "你像周五的下午，让我提前开始开心。", category: "甜到犯规" },
  { text: "我想和你一起，把普通日子过成纪念日。", category: "表白冲刺" },
  { text: "你出现以后，我的计划里多了一个我们。", category: "表白冲刺" },
  { text: "今夜星星很多，但我只看向你。", category: "早晚安" },
  { text: "睡前想你一下，梦就会自动加糖。", category: "早晚安" },
  { text: "你像热水袋，靠近一点就觉得世界都暖了。", category: "甜到犯规" },
  { text: "我的脑袋是个小区，你每天都在里面散步。", category: "沙雕暧昧" },
  { text: "你知道你和星星有什么区别吗？星星在天上，你在我心里。", category: "经典土味" },
  { text: "你知道我最喜欢什么酒吗？和你的天长地久。", category: "经典土味" },
  { text: "你知道我想成为什么人吗？你的人。", category: "经典土味" },
  { text: "你知道我为什么睡不着吗？因为我的梦里少了你。", category: "经典土味" },
  { text: "你知道你像什么吗？像地球一样吸引着我。", category: "经典土味" },
  { text: "你会游泳吗？不会的话，怎么一直在我心里游来游去。", category: "经典土味" },
  { text: "你是不是近视？不然怎么看不出我喜欢你。", category: "经典土味" },
  { text: "你知道我喜欢吃什么吗？痴痴地望着你。", category: "经典土味" },
  { text: "你是哪里人？是我的心上人。", category: "经典土味" },
  { text: "你知道我为什么要减肥吗？因为想轻轻走进你心里。", category: "经典土味" },
  { text: "我想问一条路，到你心里的路。", category: "经典土味" },
  { text: "你知道我为什么这么宅吗？因为我心里住着你。", category: "经典土味" },
  { text: "你知道我的心为什么跳这么快吗？因为它认出你了。", category: "甜到犯规" },
  { text: "看见你以后，连空气都变得甜了一点。", category: "甜到犯规" },
  { text: "你一笑，我就觉得今天值得收藏。", category: "甜到犯规" },
  { text: "我把喜欢藏得很好，好到全世界都看出来了。", category: "甜到犯规" },
  { text: "你站在那里，我的心就开始自动靠近。", category: "甜到犯规" },
  { text: "我不贪心，只想每天比昨天更喜欢你一点。", category: "甜到犯规" },
  { text: "遇见你以后，我连路过的风都觉得温柔。", category: "甜到犯规" },
  { text: "你不用刻意可爱，你在我这里本来就满分。", category: "甜到犯规" },
  { text: "你像一颗糖，放在心里就甜很久。", category: "甜到犯规" },
  { text: "我喜欢你这件事，像春天会开花一样自然。", category: "甜到犯规" },
  { text: "你不是我的选项，你是我的答案。", category: "甜到犯规" },
  { text: "我看到好看的云，第一反应是想发给你。", category: "甜到犯规" },
  { text: "喜欢你不是临时起意，是每天醒来都会确认的事。", category: "表白冲刺" },
  { text: "我想认真喜欢你，也想认真照顾你的小情绪。", category: "表白冲刺" },
  { text: "如果你愿意，我想把以后都慢慢讲给你听。", category: "表白冲刺" },
  { text: "我不想只做聊天置顶，我想做你生活里的固定嘉宾。", category: "表白冲刺" },
  { text: "你不用马上回答，我的喜欢会慢慢证明自己。", category: "表白冲刺" },
  { text: "我想把很多普通日子，都过成和你有关的好日子。", category: "表白冲刺" },
  { text: "我想给你的不是一阵热闹，是一直都在。", category: "表白冲刺" },
  { text: "喜欢你以后，我开始期待所有可以见你的明天。", category: "表白冲刺" },
  { text: "我不想错过你，所以这句话我要认真说：我喜欢你。", category: "表白冲刺" },
  { text: "我想牵你的手，也想接住你的不开心。", category: "表白冲刺" },
  { text: "如果心动有坐标，那一定指向你。", category: "表白冲刺" },
  { text: "我不擅长承诺，但我擅长一直对你好。", category: "表白冲刺" },
  { text: "今天的月亮很圆，刚好装下我想你的心情。", category: "早晚安" },
  { text: "早安，今天也要把第一份温柔留给你。", category: "早晚安" },
  { text: "晚安，愿你的梦里有星星，也有一点点我。", category: "早晚安" },
  { text: "早安，太阳负责升起，我负责想你。", category: "早晚安" },
  { text: "晚安，今天的喜欢先存档，明天继续。", category: "早晚安" },
  { text: "早安，今天的我也在认真喜欢你。", category: "早晚安" },
  { text: "晚安，把烦恼关灯，把我留在梦里。", category: "早晚安" },
  { text: "早安，愿你今天遇到的好事都带着甜味。", category: "早晚安" },
  { text: "晚安，别熬夜，我会心疼到明天。", category: "早晚安" },
  { text: "早安，想你的消息比闹钟醒得更早。", category: "早晚安" },
  { text: "晚安，今天的最后一句话也想说给你听。", category: "早晚安" },
  { text: "早安，我把好心情打包了一份给你。", category: "早晚安" },
  { text: "你像夏天的汽水，一靠近就冒甜泡。", category: "沙雕暧昧" },
  { text: "你是不是偷吃糖了？不然怎么一句话就甜到我。", category: "沙雕暧昧" },
  { text: "我今天不想做人了，想做你心里的人。", category: "沙雕暧昧" },
  { text: "你是我的充电器，一出现我就满格。", category: "沙雕暧昧" },
  { text: "你像 Wi-Fi，一靠近我就想自动连接。", category: "沙雕暧昧" },
  { text: "你是不是开了美颜？怎么在我心里一直发光。", category: "沙雕暧昧" },
  { text: "我想报警，因为你偷走了我的注意力。", category: "沙雕暧昧" },
  { text: "你像奶盖，我想把你留到最后慢慢甜。", category: "沙雕暧昧" },
  { text: "我本来很理智，直到你出现把我甜糊涂了。", category: "沙雕暧昧" },
  { text: "你是不是我的外卖？怎么一想到你就期待。", category: "沙雕暧昧" },
  { text: "我不是话少，只是见到你就自动卡壳。", category: "沙雕暧昧" },
  { text: "你的名字很短，却在我心里绕了很久。", category: "文艺一点" },
  { text: "我想把所有晚风都攒起来，等见你时送给你。", category: "文艺一点" },
  { text: "你是我平淡生活里，突然亮起的一盏灯。", category: "文艺一点" },
  { text: "我见过很多风景，最想停留的还是你身边。", category: "文艺一点" },
  { text: "喜欢你像一场小雨，不声不响，却淋湿了整颗心。", category: "文艺一点" },
  { text: "你来的那天，日子忽然有了柔软的边。", category: "文艺一点" },
  { text: "我想和你分享黄昏，也分享早餐和四季。", category: "文艺一点" },
  { text: "你是我写到一半，舍不得结尾的句子。", category: "文艺一点" },
  { text: "我把心事写得很轻，唯独喜欢你写得很重。", category: "文艺一点" },
  { text: "你在的时候，沉默也像一首温柔的歌。", category: "文艺一点" },
  { text: "我想把人间的温柔打包，收件人写你。", category: "文艺一点" },
  { text: "你是我无聊日常里，最想认真保存的瞬间。", category: "文艺一点" }
];

const categories = ["全部", ...new Set(quotes.map((quote) => quote.category)), "已收藏"];

function readFavorites() {
  try {
    return JSON.parse(window.localStorage.getItem("visitorFavorites") || "[]");
  } catch {
    return [];
  }
}

const state = {
  category: "全部",
  query: "",
  favorites: new Set(readFavorites()),
  featured: 0
};

const elements = {
  totalCount: document.querySelector("#totalCount"),
  featuredQuote: document.querySelector("#featuredQuote"),
  quoteGrid: document.querySelector("#quoteGrid"),
  searchInput: document.querySelector("#searchInput"),
  categoryTabs: document.querySelector("#categoryTabs"),
  toast: document.querySelector("#toast"),
  quickResult: document.querySelector("#quickResult"),
  customForm: document.querySelector("#customForm"),
  nameInput: document.querySelector("#nameInput"),
  styleSelect: document.querySelector("#styleSelect"),
  customResult: document.querySelector("#customResult")
};

function quoteId(quote) {
  return `${quote.category}:${quote.text}`;
}

function filteredQuotes() {
  const query = state.query.trim().toLowerCase();
  return quotes.filter((quote) => {
    const id = quoteId(quote);
    const matchesCategory =
      state.category === "全部" ||
      quote.category === state.category ||
      (state.category === "已收藏" && state.favorites.has(id));
    const matchesSearch =
      !query ||
      quote.text.toLowerCase().includes(query) ||
      quote.category.toLowerCase().includes(query);
    return matchesCategory && matchesSearch;
  });
}

function showToast(message) {
  elements.toast.textContent = message;
  elements.toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => {
    elements.toast.classList.remove("show");
  }, 1600);
}

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    showToast("已复制，直接去聊天框粘贴。");
  } catch {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.append(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    showToast("已复制。");
  }
}

function renderTabs() {
  elements.categoryTabs.innerHTML = categories
    .map(
      (category) => `
        <button
          class="segment"
          type="button"
          role="tab"
          aria-selected="${state.category === category}"
          data-category="${category}"
        >${category}</button>
      `
    )
    .join("");
}

function renderFeatured() {
  elements.featuredQuote.textContent = quotes[state.featured].text;
  elements.quickResult.textContent = quotes[state.featured].text;
}

function renderQuotes() {
  const list = filteredQuotes();
  elements.totalCount.textContent = quotes.length;

  if (!list.length) {
    elements.quoteGrid.innerHTML = `<div class="empty">没找到匹配的情话，换个关键词试试。</div>`;
    return;
  }

  elements.quoteGrid.innerHTML = list
    .map((quote) => {
      const id = quoteId(quote);
      const active = state.favorites.has(id);
      return `
        <article class="quote-card">
          <mark>${quote.category}</mark>
          <p>${quote.text}</p>
          <div class="card-actions">
            <button class="icon-btn" type="button" data-copy="${encodeURIComponent(quote.text)}">
              复制
            </button>
            <button
              class="icon-btn"
              type="button"
              aria-pressed="${active}"
              data-favorite="${encodeURIComponent(id)}"
            >${active ? "已收藏" : "收藏"}</button>
          </div>
        </article>
      `;
    })
    .join("");
}

function setRandomFeatured() {
  const next = Math.floor(Math.random() * quotes.length);
  state.featured = next === state.featured ? (next + 1) % quotes.length : next;
  renderFeatured();
}

function saveFavorites() {
  try {
    window.localStorage.setItem("visitorFavorites", JSON.stringify([...state.favorites]));
  } catch {
    showToast("当前浏览器不支持保存收藏，但可以继续复制和随机。");
  }
}

function createCustomQuote(name, style) {
  const target = name.trim() || "你";
  const templates = {
    甜: [
      `${target}，我今天的糖分超标了，因为一直在想你。`,
      `如果心动有名字，那我这里写的全是${target}。`,
      `${target}一出现，我的普通日子就有了高光。`
    ],
    皮: [
      `${target}，你是不是导航？我一看见你就找不到北。`,
      `我怀疑${target}偷偷开了挂，不然怎么这么容易让我心动。`,
      `${target}别动，我正在把你加入人生置顶。`
    ],
    稳: [
      `${target}，我不只想说喜欢，也想把喜欢落实到每天。`,
      `我想认真靠近${target}，从一句问候开始，到很久以后。`,
      `${target}，比起热闹的心动，我更想给你稳定的偏爱。`
    ]
  };
  const options = templates[style];
  return options[Math.floor(Math.random() * options.length)];
}

elements.categoryTabs.addEventListener("click", (event) => {
  const button = event.target.closest("[data-category]");
  if (!button) return;
  state.category = button.dataset.category;
  renderTabs();
  renderQuotes();
});

elements.searchInput.addEventListener("input", (event) => {
  state.query = event.target.value;
  renderQuotes();
});

elements.quoteGrid.addEventListener("click", (event) => {
  const copyButton = event.target.closest("[data-copy]");
  const favoriteButton = event.target.closest("[data-favorite]");

  if (copyButton) {
    copyText(decodeURIComponent(copyButton.dataset.copy));
  }

  if (favoriteButton) {
    const id = decodeURIComponent(favoriteButton.dataset.favorite);
    if (state.favorites.has(id)) {
      state.favorites.delete(id);
      showToast("已取消收藏。");
    } else {
      state.favorites.add(id);
      showToast("已加入收藏。");
    }
    saveFavorites();
    renderQuotes();
    renderTabs();
  }
});

document.querySelector("#copyFeaturedBtn").addEventListener("click", () => {
  copyText(quotes[state.featured].text);
});

document.querySelector("#refreshFeaturedBtn").addEventListener("click", setRandomFeatured);
document.querySelector("#randomTopBtn").addEventListener("click", () => {
  setRandomFeatured();
  showToast("已随机换一句。");
  document.querySelector(".generator").scrollIntoView({ behavior: "smooth", block: "center" });
});

document.querySelector("#showFavoritesBtn").addEventListener("click", () => {
  state.category = "已收藏";
  renderTabs();
  renderQuotes();
  document.querySelector(".filters").scrollIntoView({ behavior: "smooth", block: "start" });
});

elements.customForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const quote = createCustomQuote(elements.nameInput.value, elements.styleSelect.value);
  elements.customResult.textContent = quote;
  copyText(quote);
});

setRandomFeatured();
renderTabs();
renderQuotes();
