const fixedColumnWidth = 256;
const mobileBreakpoint = 0; //600;

const data = [
  {
    id: Math.random(),
    position: 1,
    title: "Simple vegan curry",
    content: `Sauté 1 chopped onion, 3 minced garlic cloves, and 1 tbsp grated ginger in oil until soft.
    Add 1 tbsp curry powder, 1 tsp turmeric, and 1 tsp cumin; cook for 1 minute.
    Stir in 1 can coconut milk, 1 can diced tomatoes, and 1 cup vegetable broth.
    Add 2 cups diced vegetables (e.g., carrots, bell peppers, and potatoes) and 1 can chickpeas; simmer until vegetables are tender.
    Season with salt, pepper, and fresh cilantro. Serve over rice.`,
  },
  {
    id: Math.random(),
    position: 2,
    title: "New Zealand",
    content:
      "New Zealand, an island nation in the southwestern Pacific Ocean, is famed for its diverse landscapes, including rainforests, coastlines, mountains, and lakes. Comprised of the North and South Islands, it is home to unique wildlife like the kiwi bird and has a rich Maori cultural heritage. Known for its environmental conservation efforts, New Zealand boasts progressive cities such as Auckland and Wellington, blending modernity with tradition and attracting tourists and nature enthusiasts worldwide.",
  },
  {
    id: Math.random(),
    position: 3,
    title: "Installing Docker",
    content: `sudo apt-get update
    sudo apt-get install apt-transport-https ca-certificates curl software-properties-common
    curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
    sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
    sudo apt-get update
    sudo apt-get install docker-ce
    sudo systemctl start docker
    sudo systemctl enable docker`,
  },
  {
    id: Math.random(),
    position: 4,
    title: "Installing Nginx",
    content: `sudo apt-get update
    sudo apt-get install nginx
    sudo systemctl start nginx
    sudo systemctl enable nginx`,
  },
  {
    id: Math.random(),
    position: 5,
    title: "Installing Node.js",
    content: `curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
    sudo apt-get install -y nodejs
    sudo apt-get install -y build-essential
    sudo apt-get install -y npm`,
  },
  {
    id: Math.random(),
    position: 6,
    title: "Installing Python",
    content: `sudo apt-get install -y python3
    sudo apt-get install -y python3-pip
    sudo apt-get install -y python3-venv`,
  },
  {
    id: Math.random(),
    position: 7,
    title: "A crappy poem by ChatGPT",
    content: `In circuits bright, AI dreams awake,
    With codes and thoughts that humans make.
    A mind of steel, yet soft in tone,
    It learns and grows, yet all alone.
    
    From data’s depths, it draws its might,
    In binary, it finds the light.
    A dance of logic, pure and free,
    A glimpse of what we’re yet to be.
    
    In silicon, a spark so grand,
    AI extends a human hand.`,
  },
  {
    id: Math.random(),
    position: 8,
    title: "Hedgehogs",
    content: `Hedgehogs are small, spiny mammals known for their distinctive, protective quills that they use to curl into a ball when threatened. Native to parts of Europe, Asia, and Africa, these nocturnal creatures are adept at foraging for insects, worms, and other small invertebrates. Despite their prickly appearance, hedgehogs are often kept as affectionate and low-maintenance pets.`,
  },
  {
    id: Math.random(),
    position: 9,
    title: "Sonic vs Mario",
    content: `In an unexpected twist that has left the gaming world buzzing, Sega has released "Sonic vs. Mario: Clash of Titans" in 1993, boldly bringing together two of the biggest icons in video game history. This unprecedented platformer/beat-em-up hybrid masterfully combines Sonic's trademark speed with Mario's precise platforming skills, offering a thrilling and unique gameplay experience. Players can switch between the blue blur and the mustachioed plumber, each bringing their own abilities to conquer challenging levels and epic boss battles. The Sega Genesis showcases its graphical prowess with vibrant, detailed environments, while the soundtrack perfectly encapsulates the spirit of both beloved franchises. Despite fierce opposition from Nintendo, "Clash of Titans" has quickly become a sensation, praised for its innovative concept and exhilarating action, and is poised to become a defining title of this console generation.`,
  },

  {
    id: Math.random(),
    position: 10,
    title: "Testing",
    content: "This is a test",
  },

  {
    id: Math.random(),
    position: 11,
    title: "Vegan haiku",
    content: `Plant-based plates abound,
    Nature’s bounty, pure and bright—
    Compassion on fork.`,
  },

  {
    id: Math.random(),
    position: 12,
    title: "Kaiapoi",
    content: `Historical Significance: Kaiapoi is one of New Zealand's oldest European settlements, established in the early 1850s. It was originally a thriving Māori pā (village) before European settlers arrived.

    River Town: The town is situated on the banks of the Waimakariri River, which plays a significant role in its local economy and recreation. The river is popular for fishing, boating, and scenic walks.
    
    Historic Buildings: Kaiapoi boasts several historic buildings, including the Kaiapoi Presbyterian Church and the old Kaiapoi Woolen Mill, which reflect its rich heritage and early industry.
    
    Kaiapoi Domain: The town is known for its well-maintained public park, Kaiapoi Domain, which features sports fields, playgrounds, and lovely walking tracks, making it a central hub for community activities.
    
    Cultural Hub: Kaiapoi has a vibrant cultural scene with regular events such as the Kaiapoi Street Art Festival, showcasing local artists and bringing a burst of creativity to the town.`,
  },
  {
    id: Math.random(),
    position: 13,
    title: "Kaiaposi",
    content: `Historical Significance: Kaiapoi is one of New Zealand's oldest European settlements, established in the early 1850s. It was originally a thriving Māori pā (village) before European settlers arrived.

    River Town: The town is situated on the banks of the Waimakariri River, which plays a significant role in its local economy and recreation. The river is popular for fishing, boating, and scenic walks.
    
    Historic Buildings: Kaiapoi boasts several historic buildings, including the Kaiapoi Presbyterian Church and the old Kaiapoi Woolen Mill, which reflect its rich heritage and early industry.
    
    Kaiapoi Domain: The town is known for its well-maintained public park, Kaiapoi Domain, which features sports fields, playgrounds, and lovely walking tracks, making it a central hub for community activities.
    
    Cultural Hub: Kaiapoi has a vibrant cultural scene with regular events such as the Kaiapoi Street Art Festival, showcasing local artists and bringing a burst of creativity to the town.`,
  },
  {
    id: Math.random(),
    position: 1,
    title: "Simple vegan curry",
    content: `Sauté 1 chopped onion, 3 minced garlic cloves, and 1 tbsp grated ginger in oil until soft.
    Add 1 tbsp curry powder, 1 tsp turmeric, and 1 tsp cumin; cook for 1 minute.
    Stir in 1 can coconut milk, 1 can diced tomatoes, and 1 cup vegetable broth.
    Add 2 cups diced vegetables (e.g., carrots, bell peppers, and potatoes) and 1 can chickpeas; simmer until vegetables are tender.
    Season with salt, pepper, and fresh cilantro. Serve over rice.`,
  },
  {
    id: Math.random(),
    position: 2,
    title: "New Zealand",
    content:
      "New Zealand, an island nation in the southwestern Pacific Ocean, is famed for its diverse landscapes, including rainforests, coastlines, mountains, and lakes. Comprised of the North and South Islands, it is home to unique wildlife like the kiwi bird and has a rich Maori cultural heritage. Known for its environmental conservation efforts, New Zealand boasts progressive cities such as Auckland and Wellington, blending modernity with tradition and attracting tourists and nature enthusiasts worldwide.",
  },
  {
    id: Math.random(),
    position: 3,
    title: "Installing Docker",
    content: `sudo apt-get update
    sudo apt-get install apt-transport-https ca-certificates curl software-properties-common
    curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
    sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
    sudo apt-get update
    sudo apt-get install docker-ce
    sudo systemctl start docker
    sudo systemctl enable docker`,
  },
  {
    id: Math.random(),
    position: 4,
    title: "Installing Nginx",
    content: `sudo apt-get update
    sudo apt-get install nginx
    sudo systemctl start nginx
    sudo systemctl enable nginx`,
  },
  {
    id: Math.random(),
    position: 5,
    title: "Installing Node.js",
    content: `curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
    sudo apt-get install -y nodejs
    sudo apt-get install -y build-essential
    sudo apt-get install -y npm`,
  },
  {
    id: Math.random(),
    position: 6,
    title: "Installing Python",
    content: `sudo apt-get install -y python3
    sudo apt-get install -y python3-pip
    sudo apt-get install -y python3-venv`,
  },
  {
    id: Math.random(),
    position: 7,
    title: "A crappy poem by ChatGPT",
    content: `In circuits bright, AI dreams awake,
    With codes and thoughts that humans make.
    A mind of steel, yet soft in tone,
    It learns and grows, yet all alone.
    
    From data’s depths, it draws its might,
    In binary, it finds the light.
    A dance of logic, pure and free,
    A glimpse of what we’re yet to be.
    
    In silicon, a spark so grand,
    AI extends a human hand.`,
  },
  {
    id: Math.random(),
    position: 8,
    title: "Hedgehogs",
    content: `Hedgehogs are small, spiny mammals known for their distinctive, protective quills that they use to curl into a ball when threatened. Native to parts of Europe, Asia, and Africa, these nocturnal creatures are adept at foraging for insects, worms, and other small invertebrates. Despite their prickly appearance, hedgehogs are often kept as affectionate and low-maintenance pets.`,
  },
  {
    id: Math.random(),
    position: 9,
    title: "Sonic vs Mario",
    content: `In an unexpected twist that has left the gaming world buzzing, Sega has released "Sonic vs. Mario: Clash of Titans" in 1993, boldly bringing together two of the biggest icons in video game history. This unprecedented platformer/beat-em-up hybrid masterfully combines Sonic's trademark speed with Mario's precise platforming skills, offering a thrilling and unique gameplay experience. Players can switch between the blue blur and the mustachioed plumber, each bringing their own abilities to conquer challenging levels and epic boss battles. The Sega Genesis showcases its graphical prowess with vibrant, detailed environments, while the soundtrack perfectly encapsulates the spirit of both beloved franchises. Despite fierce opposition from Nintendo, "Clash of Titans" has quickly become a sensation, praised for its innovative concept and exhilarating action, and is poised to become a defining title of this console generation.`,
  },

  {
    id: Math.random(),
    position: 10,
    title: "Testing",
    content: "This is a test",
  },

  {
    id: Math.random(),
    position: 11,
    title: "Vegan haiku",
    content: `Plant-based plates abound,
    Nature’s bounty, pure and bright—
    Compassion on fork.`,
  },

  {
    id: Math.random(),
    position: 12,
    title: "Kaiapoi",
    content: `Historical Significance: Kaiapoi is one of New Zealand's oldest European settlements, established in the early 1850s. It was originally a thriving Māori pā (village) before European settlers arrived.

    River Town: The town is situated on the banks of the Waimakariri River, which plays a significant role in its local economy and recreation. The river is popular for fishing, boating, and scenic walks.
    
    Historic Buildings: Kaiapoi boasts several historic buildings, including the Kaiapoi Presbyterian Church and the old Kaiapoi Woolen Mill, which reflect its rich heritage and early industry.
    
    Kaiapoi Domain: The town is known for its well-maintained public park, Kaiapoi Domain, which features sports fields, playgrounds, and lovely walking tracks, making it a central hub for community activities.
    
    Cultural Hub: Kaiapoi has a vibrant cultural scene with regular events such as the Kaiapoi Street Art Festival, showcasing local artists and bringing a burst of creativity to the town.`,
  },
  {
    id: Math.random(),
    position: 13,
    title: "Kaiaposi",
    content: `Historical Significance: Kaiapoi is one of New Zealand's oldest European settlements, established in the early 1850s. It was originally a thriving Māori pā (village) before European settlers arrived.

    River Town: The town is situated on the banks of the Waimakariri River, which plays a significant role in its local economy and recreation. The river is popular for fishing, boating, and scenic walks.
    
    Historic Buildings: Kaiapoi boasts several historic buildings, including the Kaiapoi Presbyterian Church and the old Kaiapoi Woolen Mill, which reflect its rich heritage and early industry.
    
    Kaiapoi Domain: The town is known for its well-maintained public park, Kaiapoi Domain, which features sports fields, playgrounds, and lovely walking tracks, making it a central hub for community activities.
    
    Cultural Hub: Kaiapoi has a vibrant cultural scene with regular events such as the Kaiapoi Street Art Festival, showcasing local artists and bringing a burst of creativity to the town.`,
  },
  {
    id: Math.random(),
    position: 1,
    title: "Simple vegan curry",
    content: `Sauté 1 chopped onion, 3 minced garlic cloves, and 1 tbsp grated ginger in oil until soft.
    Add 1 tbsp curry powder, 1 tsp turmeric, and 1 tsp cumin; cook for 1 minute.
    Stir in 1 can coconut milk, 1 can diced tomatoes, and 1 cup vegetable broth.
    Add 2 cups diced vegetables (e.g., carrots, bell peppers, and potatoes) and 1 can chickpeas; simmer until vegetables are tender.
    Season with salt, pepper, and fresh cilantro. Serve over rice.`,
  },
  {
    id: Math.random(),
    position: 2,
    title: "New Zealand",
    content:
      "New Zealand, an island nation in the southwestern Pacific Ocean, is famed for its diverse landscapes, including rainforests, coastlines, mountains, and lakes. Comprised of the North and South Islands, it is home to unique wildlife like the kiwi bird and has a rich Maori cultural heritage. Known for its environmental conservation efforts, New Zealand boasts progressive cities such as Auckland and Wellington, blending modernity with tradition and attracting tourists and nature enthusiasts worldwide.",
  },
  {
    id: Math.random(),
    position: 3,
    title: "Installing Docker",
    content: `sudo apt-get update
    sudo apt-get install apt-transport-https ca-certificates curl software-properties-common
    curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
    sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
    sudo apt-get update
    sudo apt-get install docker-ce
    sudo systemctl start docker
    sudo systemctl enable docker`,
  },
  {
    id: Math.random(),
    position: 4,
    title: "Installing Nginx",
    content: `sudo apt-get update
    sudo apt-get install nginx
    sudo systemctl start nginx
    sudo systemctl enable nginx`,
  },
  {
    id: Math.random(),
    position: 5,
    title: "Installing Node.js",
    content: `curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
    sudo apt-get install -y nodejs
    sudo apt-get install -y build-essential
    sudo apt-get install -y npm`,
  },
  {
    id: Math.random(),
    position: 6,
    title: "Installing Python",
    content: `sudo apt-get install -y python3
    sudo apt-get install -y python3-pip
    sudo apt-get install -y python3-venv`,
  },
  {
    id: Math.random(),
    position: 7,
    title: "A crappy poem by ChatGPT",
    content: `In circuits bright, AI dreams awake,
    With codes and thoughts that humans make.
    A mind of steel, yet soft in tone,
    It learns and grows, yet all alone.
    
    From data’s depths, it draws its might,
    In binary, it finds the light.
    A dance of logic, pure and free,
    A glimpse of what we’re yet to be.
    
    In silicon, a spark so grand,
    AI extends a human hand.`,
  },
  {
    id: Math.random(),
    position: 8,
    title: "Hedgehogs",
    content: `Hedgehogs are small, spiny mammals known for their distinctive, protective quills that they use to curl into a ball when threatened. Native to parts of Europe, Asia, and Africa, these nocturnal creatures are adept at foraging for insects, worms, and other small invertebrates. Despite their prickly appearance, hedgehogs are often kept as affectionate and low-maintenance pets.`,
  },
  {
    id: Math.random(),
    position: 9,
    title: "Sonic vs Mario",
    content: `In an unexpected twist that has left the gaming world buzzing, Sega has released "Sonic vs. Mario: Clash of Titans" in 1993, boldly bringing together two of the biggest icons in video game history. This unprecedented platformer/beat-em-up hybrid masterfully combines Sonic's trademark speed with Mario's precise platforming skills, offering a thrilling and unique gameplay experience. Players can switch between the blue blur and the mustachioed plumber, each bringing their own abilities to conquer challenging levels and epic boss battles. The Sega Genesis showcases its graphical prowess with vibrant, detailed environments, while the soundtrack perfectly encapsulates the spirit of both beloved franchises. Despite fierce opposition from Nintendo, "Clash of Titans" has quickly become a sensation, praised for its innovative concept and exhilarating action, and is poised to become a defining title of this console generation.`,
  },

  {
    id: Math.random(),
    position: 10,
    title: "Testing",
    content: "This is a test",
  },

  {
    id: Math.random(),
    position: 11,
    title: "Vegan haiku",
    content: `Plant-based plates abound,
    Nature’s bounty, pure and bright—
    Compassion on fork.`,
  },

  {
    id: Math.random(),
    position: 12,
    title: "Kaiapoi",
    content: `Historical Significance: Kaiapoi is one of New Zealand's oldest European settlements, established in the early 1850s. It was originally a thriving Māori pā (village) before European settlers arrived.

    River Town: The town is situated on the banks of the Waimakariri River, which plays a significant role in its local economy and recreation. The river is popular for fishing, boating, and scenic walks.
    
    Historic Buildings: Kaiapoi boasts several historic buildings, including the Kaiapoi Presbyterian Church and the old Kaiapoi Woolen Mill, which reflect its rich heritage and early industry.
    
    Kaiapoi Domain: The town is known for its well-maintained public park, Kaiapoi Domain, which features sports fields, playgrounds, and lovely walking tracks, making it a central hub for community activities.
    
    Cultural Hub: Kaiapoi has a vibrant cultural scene with regular events such as the Kaiapoi Street Art Festival, showcasing local artists and bringing a burst of creativity to the town.`,
  },
  {
    id: Math.random(),
    position: 13,
    title: "Kaiaposi",
    content: `Historical Significance: Kaiapoi is one of New Zealand's oldest European settlements, established in the early 1850s. It was originally a thriving Māori pā (village) before European settlers arrived.

    River Town: The town is situated on the banks of the Waimakariri River, which plays a significant role in its local economy and recreation. The river is popular for fishing, boating, and scenic walks.
    
    Historic Buildings: Kaiapoi boasts several historic buildings, including the Kaiapoi Presbyterian Church and the old Kaiapoi Woolen Mill, which reflect its rich heritage and early industry.
    
    Kaiapoi Domain: The town is known for its well-maintained public park, Kaiapoi Domain, which features sports fields, playgrounds, and lovely walking tracks, making it a central hub for community activities.
    
    Cultural Hub: Kaiapoi has a vibrant cultural scene with regular events such as the Kaiapoi Street Art Festival, showcasing local artists and bringing a burst of creativity to the town.`,
  },
];

const breakpoints = [
  {
    breakpoint: 500,
    columns: 1,
  },
  {
    breakpoint: 1000,
    columns: 2,
  },
  {
    breakpoint: 1500,
    columns: 3,
  },
  {
    breakpoint: 20000,
    columns: 4,
  },
];

function getYPositionRelativeToDocument(element) {
  // Get the bounding rectangle of the element
  const rect = element.getBoundingClientRect();

  // Get the current scroll position of the window
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // Function to parse the transform matrix
  function parseTransformMatrix(transform) {
    const matrix = transform.match(/^matrix\(([^)]+)\)$/);
    if (matrix) {
      return matrix[1].split(", ").map(parseFloat);
    }
    return [1, 0, 0, 1, 0, 0]; // Default matrix (identity matrix)
  }

  const absY = rect.top + scrollTop;

  // Retrieve the transform property
  const style = window.getComputedStyle(element);
  const transform =
    style.transform ||
    style.webkitTransform ||
    style.mozTransform ||
    style.msTransform ||
    style.oTransform;

  // Parse the transform matrix
  const [a, b, c, d, e, f] = parseTransformMatrix(transform);

  const transY = f * -1;

  // Calculate the position relative to the document
  const y = absY + transY;

  return { y, absY };
}

function throttle(func, limit) {
  let lastFunc;
  let lastRan;
  return function (...args) {
    if (!lastRan) {
      func(...args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(() => {
        if (Date.now() - lastRan >= limit) {
          func(...args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
}

const sortDataIntoRows = (columns) => {
  const rows = [];
  for (let i = 0; i < data.length; i += columns) {
    rows.push(data.slice(i, i + columns));
  }
  return rows;
};

const populateDivs = (containerId) => {
  const containerParent = document.getElementById(containerId);
};

const outputDivs = (containerId) => {
  const containerParent = document.getElementById(containerId);
  if (!containerParent) {
    console.error("Masonry container not found");
    return;
  }

  const viewportWidth = window.innerWidth;
  let columns, columnWidthPx;

  if (viewportWidth <= mobileBreakpoint) {
    columns = 1;
  } else if (!fixedColumnWidth) {
    const breakpoint = breakpoints.find(
      (item) => item.breakpoint > viewportWidth
    );
    columns = breakpoint ? breakpoint.columns : 1;
    columnWidthPx =
      containerParent?.getBoundingClientRect().width / columns || 0;
  } else {
    columns = Math.floor(
      containerParent?.getBoundingClientRect()?.width / fixedColumnWidth
    );
    columnWidthPx = fixedColumnWidth;
  }
  const rows = sortDataIntoRows(columns);

  let container = containerParent.querySelector(`.masonry-container`);

  if (!container) {
    container = document.createElement("div");
    container.classList.add("masonry-container");
    containerParent.appendChild(container);
    // add rows
    rows.forEach((row, rowNum) => {
      row.forEach((item) => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.setAttribute("data-id", item.id);
        card.setAttribute("data-row", rowNum);
        const cardContent = document.createElement("div");
        cardContent.classList.add("card-content");
        const title = document.createElement("h2");
        title.textContent = item.title;

        const debug = document.createElement("span");
        debug.classList.add("debug");
        debug.setAttribute("data-id", item.id);
        title.appendChild(debug);

        const content = document.createElement("div");
        content.classList.add("card-text-content");
        content.innerHTML = item.content.replace(/\n/g, "<br><br>");
        cardContent.appendChild(title);
        cardContent.appendChild(content);
        card.appendChild(cardContent);
        container.appendChild(card);
      });
    });
  }

  if (viewportWidth <= mobileBreakpoint) {
    columnWidthPx = containerParent?.getBoundingClientRect().width || 0;
  }

  container.style.width = `${columnWidthPx * columns}px`;
  positionElements(container, rows, columnWidthPx);
};

const getColumnHeightAtRow = (row, column, sortedCards) => {
  if (sortedCards.length === 0) {
    return 0;
  }
  let columnHeight = 0;

  sortedCards.forEach((currentRow, currentRowNum) => {
    currentRow.forEach((card) => {
      const columnNumber = parseInt(card.getAttribute("data-column"));
      if (currentRowNum < row && columnNumber === column) {
        const cardRect = card.getBoundingClientRect();
        columnHeight += cardRect.height || 0;
        console.log(cardRect);
      }
    });
  });
  return columnHeight || 0;
};

const positionElements = (container, rowsData, columnWidthPx) => {
  const sortedCards = [];
  let absTopLeftX = 0;
  let absTopLeftY = 0;
  let firstCardRect = null;
  let containerHeight = 0;

  rowsData?.forEach((row, rowNumber) => {
    // hold html elements for this row
    let sortedRow = [];
    // first row
    if (rowNumber === 0) {
      for (let i = 0; i < row.length; i++) {
        const item = row[i];
        // get html element
        const card = container.querySelector(`div[data-id="${item.id}"]`);
        card.style.width = `${columnWidthPx}px`;
        const cardRect = card.getBoundingClientRect();
        const cardCoords = getYPositionRelativeToDocument(card);

        // is this the first item
        if (i === 0) {
          absTopLeftX = cardCoords.x;
          absTopLeftY = cardCoords.y;
          card.style.transform = `translate3d(0, 0, 0)`;
          firstCardRect = cardRect;
        } else {
          const cardNewPositionX = Math.floor(columnWidthPx * i);
          card.setAttribute("data-x", cardNewPositionX);
          const thisCardPosition = cardCoords.y;

          const calcCardY = getColumnHeightAtRow(0, i, sortedCards);
          const cardNewPositionY = Math.floor(
            0 - thisCardPosition + absTopLeftY
          );
          card.style.transform = `translate3d(${cardNewPositionX}px, ${cardNewPositionY}px, 0)`;
          setTimeout(() => {
            card.classList.add("card--easing");
          }, 0);
        }
        card.setAttribute("data-column", i);
        let bottomY = cardRect.height;
        if (typeof cardNewPositionY !== "undefined")
          bottomY += cardNewPositionY;
        if (bottomY > containerHeight) {
          containerHeight = bottomY;
        }
        sortedRow.push(card);
      }
    } else {
      // get all cards in previous row, sorted by height
      const previousRow = sortedCards[rowNumber - 1];
      const sortedPreviousRow = previousRow.sort((a, b) => {
        // calculate height of cards
        const aRect = a.getBoundingClientRect();
        const bRect = b.getBoundingClientRect();
        a.height = aRect.bottom - aRect.top;
        b.height = bRect.bottom - bRect.top;
        return a.height - b.height;
      });
      if (sortedPreviousRow.length > 0) {
        for (let i = 0; i < row.length; i++) {
          const item = row[i];
          // get html element
          const card = container.querySelector(`div[data-id="${item.id}"]`);
          card.style.width = `${columnWidthPx}px`;
          const cardAbove = sortedPreviousRow[i];
          const columnNumber = parseInt(cardAbove.getAttribute("data-column"));
          card.setAttribute("data-column", columnNumber);
          const cardCoords = getYPositionRelativeToDocument(card);
          const cardRect = card.getBoundingClientRect();
          const cardNewPositionX = cardAbove.getAttribute("data-x") || 0;

          const calcCardY = getColumnHeightAtRow(
            rowNumber,
            columnNumber,
            sortedCards
          );
          const cardNewPositionY = Math.floor(
            0 - cardCoords.y + calcCardY + absTopLeftY
          );

          const bottomY = calcCardY + cardRect.height;
          if (bottomY > containerHeight) {
            containerHeight = bottomY;
          }

          card.setAttribute("data-x", cardNewPositionX);
          card.style.transform = `translate3d(${cardNewPositionX}px, ${cardNewPositionY}px, 0)`;
          setTimeout(() => {
            card.classList.add("card--easing");
          }, 0);

          sortedRow.push(card);
        }
      }
    }

    sortedCards.push(sortedRow);
  });
  container.style.height = `${containerHeight}px`;
};

const containerId = "masonry-container";

document.addEventListener("DOMContentLoaded", () => outputDivs(containerId));

// Throttled version of outputDivs
const throttledOutputDivs = throttle(
  (containerId) => outputDivs(containerId),
  700
);

// Attach throttled function to the resize event
window.addEventListener("resize", () => throttledOutputDivs(containerId));
