const toggle = document.querySelector("#themeToggle");

if (toggle) {
  toggle.addEventListener("click", function() {
    document.body.classList.toggle("dark");
    toggle.textContent = document.body.classList.contains("dark") ? "Light" : "Dark";
  });
}

const photoToggle = document.querySelector("#photoToggle");
const stillLifeWrap = document.querySelector(".still-life-wrap");

if (photoToggle && stillLifeWrap) {
  photoToggle.addEventListener("click", function() {
    stillLifeWrap.classList.toggle("show-photo");

    if (stillLifeWrap.classList.contains("show-photo")) {
      photoToggle.textContent = "Click to see CSS still life";
    } else {
      photoToggle.textContent = "Click to see original photo";
    }
  });
}

const teaButtons = document.querySelectorAll(".tea-item");

teaButtons.forEach((button) => {
  button.addEventListener("click", function(event) {
    event.stopPropagation();

    teaButtons.forEach((otherButton) => {
      if (otherButton !== button) {
        otherButton.classList.remove("open");
      }
    });

    button.classList.toggle("open");
  });
});

document.addEventListener("click", function() {
  teaButtons.forEach((button) => {
    button.classList.remove("open");
  });
});

const authorData = {
  "NATSUME SOSEKI": [
    ["I Am a Cat", "assets/books/iamacat.jpg"],
    ["Botchan", "assets/books/botchan.jpg"],
    ["Kokoro", "assets/books/kokoro.jpg"],
    ["Kusamakura", "assets/books/kusamakura.jpg"],
    ["The Wayfarer", "assets/books/wayfarer.jpg"],
    ["Sanshirō", "assets/books/sanshiro.jpg"],
    ["And Then", "assets/books/andthen.jpg"],
    ["The Gate", "assets/books/gate.jpg"],
    ["The Poppy", "assets/books/poppy.jpg"],
    ["The Miner", "assets/books/miner.jpg"]
  ],

  "ANNIE ERNAUX": [
    ["Simple Passion", "assets/books/simplepassion.jpg"],
    ["The Possession", "assets/books/obsession.jpg"],
    ["Shame", "assets/books/shame.jpg"],
    ["Casanova Hotel", "assets/books/casanovahotel.jpg"]
  ],

  "ALBERT CAMUS": [
    ["The Stranger", "assets/books/stranger.jpg"],
    ["The Myth of Sisyphus", "assets/books/sisyphus.jpg"],
    ["The Plague", "assets/books/plague.jpg"]
  ],

  "ALAIN DE BOTTON": [
    ["The Course of Love", "assets/books/romanticlove.jpg"],
    ["Essays in Love", "assets/books/essaysinlove.jpg"]
  ],

  "MILAN KUNDERA": [
    ["The Festival of Insignificance", "assets/books/festival.jpg"],
    ["The Unbearable Lightness of Being", "assets/books/lightness.jpg"]
  ],

  "HERMANN HESSE": [
    ["The Glass Bead Game 1", "assets/books/glassbead1.jpg"],
    ["The Glass Bead Game 2", "assets/books/glassbead2.jpg"]
  ],

  "JOSÉ SARAMAGO": [
    ["Blindness", "assets/books/blindness.jpg"],
    ["Seeing", "assets/books/seeing.jpg"]
  ],

  "W. SOMERSET MAUGHAM": [
    ["The Razor's Edge", "assets/books/razorsedge.jpg"],
    ["Of Human Bondage", "assets/books/ofhumanbondage.jpg"]
  ],

  "YUKIO MISHIMA": [
    ["The Temple of the Golden Pavilion", "assets/books/goldenpavilion.jpg"],
    ["Spring Snow", "assets/books/springsnow.jpg"]
  ],

  "FRANZ KAFKA": [
    ["The Trial", "assets/books/trial.jpg"]
  ],

  "FYODOR DOSTOEVSKY": [
    ["Notes from Underground", "assets/books/notesunderground.jpg"]
  ],

  "VLADIMIR NABOKOV": [
    ["Lolita", "assets/books/lolita.jpg"]
  ],

  "HARUKI MURAKAMI": [
    ["Norwegian Wood", "assets/books/norwegianwood.jpg"]
  ],

  "ROBERT MUSIL": [
    ["The Man Without Qualities", "assets/books/manwithoutqualities.jpg"]
  ],

    "SAMUEL BECKETT": [
    ["Waiting for Godot", "assets/books/waitinggodot.jpg"]
  ],

  "AGOTA KRISTOF": [
  ["The Notebook, The Proof, The Third Lie", "assets/books/trilogy.jpg"]
],

"YI SANG": [
  ["Selected Works of Yi Sang", "assets/books/yi-sang.jpg"]
],

"KAWABATA YASUNARI": [
  ["Snow Country", "assets/books/snowcountry.jpg"]
],

"JEAN-PAUL SARTRE": [
  ["Nausea", "assets/books/nausea.jpg"]
],

"WILLIAM FAULKNER": [
  ["Absalom, Absalom!", "assets/books/absalom.jpg"]
],

"NIKOS KAZANTZAKIS": [
  ["Zorba the Greek", "assets/books/zorba.jpg"]
],

"EMIL AZAR": [
  ["The Life Before Us", "assets/books/lifebeforeus.jpg"]
],

"CHOI JIN-YOUNG": [
  ["Proof of Gu", "assets/books/gu.jpg"]
],

"IAN McEWAN": [
  ["Atonement", "assets/books/atonement.jpg"]
],

"THOMAS PYNCHON": [
  ["The Crying of Lot 49", "assets/books/lot49.jpg"]
],

"ANTON CHEKHOV": [
  ["Chekhov Short Stories", "assets/books/chekhov.jpg"]
],

"THOMAS MANN": [
  ["The Magic Mountain", "assets/books/magicmountain1.jpg"]
],

"MARGUERITE DURAS": [
  ["The Lover", "assets/books/lover.jpg"]
],

"GOETHE": [
  ["The Sorrows of Young Werther", "assets/books/werther.jpg"]
],

"THERESA HAK-KYUNG CHA": [
  ["DICTEE", "assets/books/dictee.jpg"]
],

"MARQUIS DE SADE": [
  ["The 120 Days of Sodom", "assets/books/sodom.jpg"]
],

"EDNA O'BRIEN": [
  ["August is a Wicked Month", "assets/books/augustdevil.jpg"]
],

"TOLSTOY": [
  ["Kholstomer / What For?", "assets/books/kholstomer.jpg"]
],

"HAN KANG": [
  ["The Vegetarian", "assets/books/vegetarian.jpg"]
],

"CHOI EUN-YOUNG": [
  ["Shoko's Smile", "assets/books/shokosmile.jpg"]
],

"KIM I-DEUM": [
  ["Hysteria", "assets/books/hysteria.jpg"]
],

"CATHY PARK HONG": [
  ["Minor Feelings", "assets/books/minorfeelings.jpg"]
]
};

const authorTreemap = document.querySelector(".author-treemap");
const authorBlocks = document.querySelectorAll(".author-block");
const authorCard = document.querySelector("#authorCard");
const authorCardName = document.querySelector("#authorCardName");
const authorCardCount = document.querySelector("#authorCardCount");
const authorCardBooks = document.querySelector("#authorCardBooks");
const authorCardClose = document.querySelector("#authorCardClose");

if (authorTreemap) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        authorTreemap.classList.add("show");
      }
    });
  }, { threshold: 0.25 });

  observer.observe(authorTreemap);
}

authorBlocks.forEach((block) => {
  block.addEventListener("click", () => {
    const author = block.dataset.author;
    const books = authorData[author];

    authorCardName.textContent = author;
    authorCardCount.textContent = `${books.length} book${books.length > 1 ? "s" : ""}`;

    authorCardBooks.innerHTML = `
      <div class="author-book-list">
        ${books.map((book) => `
          <div class="author-book-mini">
            <img src="${book[1]}" alt="${book[0]}">
            <span>${book[0]}</span>
          </div>
        `).join("")}
      </div>
    `;

    authorCard.classList.add("show");
  });
});

if (authorCardClose) {
  authorCardClose.addEventListener("click", () => {
    authorCard.classList.remove("show");
  });
}

const mediaItems = document.querySelectorAll(".media-item img, .media-item video");
const mediaLightbox = document.querySelector("#mediaLightbox");
const mediaLightboxContent = document.querySelector("#mediaLightboxContent");

if (mediaItems && mediaLightbox && mediaLightboxContent) {
  mediaItems.forEach((item) => {
    item.addEventListener("click", function () {
      mediaLightboxContent.innerHTML = "";

      if (item.tagName.toLowerCase() === "video") {
        const video = document.createElement("video");
        video.src = item.getAttribute("src");
        video.autoplay = true;
        video.muted = true;
        video.loop = true;
        video.playsInline = true;
        mediaLightboxContent.appendChild(video);
      } else {
        const img = document.createElement("img");
        img.src = item.getAttribute("src");
        img.alt = item.getAttribute("alt") || "";
        mediaLightboxContent.appendChild(img);
      }

      mediaLightbox.classList.add("show");
    });
  });

  mediaLightbox.addEventListener("click", function () {
    mediaLightbox.classList.remove("show");
    mediaLightboxContent.innerHTML = "";
  });
}

const asciiSwitchLinks = document.querySelectorAll(".ascii-switch-link");

asciiSwitchLinks.forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();

    const target = link.getAttribute("href");

    link.classList.add("is-clicked");

    setTimeout(() => {
      window.location.href = target;
    }, 160);
  });
});

const sectionLinks = document.querySelectorAll(".side-nav nav a");
const observedSections = document.querySelectorAll("#home, #works, #library, #media");

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio >= 0.5) {
        const currentId = entry.target.getAttribute("id");

        sectionLinks.forEach((link) => {
          link.classList.remove("active");

          if (link.getAttribute("href") === `#${currentId}`) {
            link.classList.add("active");
          }
        });
      }
    });
  },
  {
    threshold: [0, 0.25, 0.5, 0.75, 1]
  }
);

observedSections.forEach((section) => {
  sectionObserver.observe(section);
});
