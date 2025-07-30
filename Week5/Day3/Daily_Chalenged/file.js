      let currentPokemonId = 0;
      const totalPokemon = 1010;

      const loadingElement = document.getElementById("loading");
      const pokemonDisplay = document.getElementById("pokemon-display");
      const errorMessage = document.getElementById("error-message");
      const pokemonName = document.getElementById("pokemon-name");
      const pokemonId = document.getElementById("pokemon-id");
      const pokemonImage = document.getElementById("pokemon-image");
      const pokemonHeight = document.getElementById("pokemon-height");
      const pokemonWeight = document.getElementById("pokemon-weight");
      const pokemonTypes = document.getElementById("pokemon-types");
      const prevBtn = document.getElementById("prev-btn");
      const nextBtn = document.getElementById("next-btn");
      const randomBtn = document.getElementById("random-btn");

      const typeColors = {
        normal: "bg-gray-400",
        fire: "bg-red-500",
        water: "bg-blue-500",
        electric: "bg-yellow-400",
        grass: "bg-green-500",
        ice: "bg-blue-200",
        fighting: "bg-red-700",
        poison: "bg-purple-600",
        ground: "bg-yellow-600",
        flying: "bg-indigo-300",
        psychic: "bg-pink-500",
        bug: "bg-lime-500",
        rock: "bg-yellow-700",
        ghost: "bg-purple-800",
        dragon: "bg-indigo-700",
        dark: "bg-gray-800",
        steel: "bg-gray-500",
        fairy: "bg-pink-300",
      };

      async function fetchPokemon(id) {
        try {
          loadingElement.classList.remove("hidden");
          pokemonDisplay.classList.add("hidden");
          errorMessage.classList.add("hidden");

          prevBtn.disabled = true;
          nextBtn.disabled = true;
          randomBtn.disabled = true;

          const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${id}`
          );

          if (!response.ok) {
            throw new Error("Pokémon not found");
          }

          const data = await response.json();

          currentPokemonId = data.id;

          pokemonName.textContent = data.name;
          pokemonId.textContent = `#${data.id.toString().padStart(3, "0")}`;
          pokemonImage.src =
            data.sprites.other["official-artwork"].front_default ||
            data.sprites.front_default;
          pokemonImage.alt = data.name;
          pokemonHeight.textContent = `${(data.height / 10).toFixed(1)} m`;
          pokemonWeight.textContent = `${(data.weight / 10).toFixed(1)} kg`;

          pokemonTypes.innerHTML = "";

          data.types.forEach((typeInfo) => {
            const type = typeInfo.type.name;
            const typeElement = document.createElement("span");
            typeElement.className = `type-badge ${
              typeColors[type] || "bg-gray-500"
            }`;
            typeElement.textContent = type;
            pokemonTypes.appendChild(typeElement);
          });

          prevBtn.disabled = currentPokemonId <= 1;
          nextBtn.disabled = currentPokemonId >= totalPokemon;

          loadingElement.classList.add("hidden");
          pokemonDisplay.classList.remove("hidden");
        } catch (error) {
          console.error("Error fetching Pokémon:", error);
          loadingElement.classList.add("hidden");
          errorMessage.classList.remove("hidden");
        } finally {
          prevBtn.disabled = currentPokemonId <= 1;
          nextBtn.disabled = currentPokemonId >= totalPokemon;
          randomBtn.disabled = false;
        }
      }

      randomBtn.addEventListener("click", () => {
        const randomId = Math.floor(Math.random() * totalPokemon) + 1;
        fetchPokemon(randomId);
      });

      prevBtn.addEventListener("click", () => {
        if (currentPokemonId > 1) {
          fetchPokemon(currentPokemonId - 1);
        }
      });

      nextBtn.addEventListener("click", () => {
        if (currentPokemonId < totalPokemon) {
          fetchPokemon(currentPokemonId + 1);
        }
      });

      async function fetchCurrencies() {
        try {
          const response = await fetch(
            "https://v6.exchangerate-api.com/v6/YOUR_API_KEY/codes"
          );
          const data = await response.json();

          if (data.result === "success") {
            currencies = data.supported_codes.reduce((acc, [code, name]) => {
              acc[code] = name;
              return acc;
            }, {});

            const fromSelect = document.getElementById("from-currency");
            const toSelect = document.getElementById("to-currency");

            fromSelect.innerHTML = "";
            toSelect.innerHTML = "";

            Object.entries(currencies).forEach(([code, name]) => {
              const option1 = document.createElement("option");
              option1.value = code;
              option1.textContent = `${code} - ${name}`;

              const option2 = document.createElement("option");
              option2.value = code;
              option2.textContent = `${code} - ${name}`;

              fromSelect.appendChild(option1);
              toSelect.appendChild(option2);
            });

            fromSelect.value = "USD";
            toSelect.value = "EUR";
          }
        } catch (error) {
          console.error("Error fetching currencies:", error);
        }
      }

      async function convertCurrency() {
        const fromCurrency = document.getElementById("from-currency").value;
        const toCurrency = document.getElementById("to-currency").value;
        const amount = document.getElementById("amount").value;

        if (!fromCurrency || !toCurrency || !amount) return;

        try {
          const response = await fetch(
            `https://v6.exchangerate-api.com/v6/YOUR_API_KEY/pair/${fromCurrency}/${toCurrency}/${amount}`
          );
          const data = await response.json();

          if (data.result === "success") {
            document.getElementById(
              "result"
            ).value = `${data.conversion_result.toFixed(2)} ${toCurrency}`;
          } else {
            console.error("Conversion error:", data["error-type"]);
          }
        } catch (error) {
          console.error("Error converting currency:", error);
        }
      }

      function switchCurrencies() {
        const fromCurrency = document.getElementById("from-currency");
        const toCurrency = document.getElementById("to-currency");
        const amount = document.getElementById("amount").value;
        const result = document.getElementById("result").value;

        const temp = fromCurrency.value;
        fromCurrency.value = toCurrency.value;
        toCurrency.value = temp;

        if (result) {
          document.getElementById("amount").value = parseFloat(
            result.split(" ")[0]
          ).toFixed(2);
          convertCurrency();
        }
      }

      document
        .getElementById("convert-btn")
        .addEventListener("click", convertCurrency);
      document
        .getElementById("switch-currencies")
        .addEventListener("click", switchCurrencies);
      document
        .getElementById("amount")
        .addEventListener("input", convertCurrency);
      document
        .getElementById("from-currency")
        .addEventListener("change", convertCurrency);
      document
        .getElementById("to-currency")
        .addEventListener("change", convertCurrency);

      fetchCurrencies();