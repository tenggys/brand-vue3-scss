import { defineStore } from "pinia"

export const mainCardFore = defineStore("cardStoreFore", {
  state: () => ({
    cards: [
      { id: 1, text: "30% OFF", span: "FOR WOMEN", image: "/src/assets/images/cards/for1.png" },
      { id: 2, text: "HOT DEAL", span: "FOR MEN", image: "/src/assets/images/cards/for2.png" },
      { id: 3, text: "NEW ARRIVALS", span: "FOR KIDS", image: "/src/assets/images/cards/for3.png" },
      { id: 4, text: "LUXIROUS & TRENDY", span: "ACCESORIES", image: "/src/assets/images/cards/for4.png" },
    ]
  })
})

export const mainCardFetured = defineStore("cardStoreFeatured", {
  state: () => ({
    cards: [
      { id: 1,
        name: "ELLERY X M'O CAPSULE",
        text: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        price: 52.00,
        image: "/src/assets/images/cards/Fetured1.png"
      },
      { id: 2,
        name: "ELLERY X M'O CAPSULE",
        text: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        price: 55.00,
        image: "/src/assets/images/cards/Fetured2.png"
      },
      { id: 3,
        name: "ELLERY X M'O CAPSULE",
        text: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        price: 29.99,
        image: "/src/assets/images/cards/Fetured3.png"
      },
      { id: 4,
        name: "ELLERY X M'O CAPSULE",
        text: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        price: 53.00,
        image: "/src/assets/images/cards/Fetured4.png"
      },
      { id: 5,
        name: "ELLERY X M'O CAPSULE",
        text: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        price: 47.00,
        image: "/src/assets/images/cards/Fetured5.png"
      },
      { id: 6,
        name: "ELLERY X M'O CAPSULE",
        text: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        price: 44.55,
        image: "/src/assets/images/cards/Fetured6.png"
      },
    ]
  })
})

export const mainCardAdvantages = defineStore("cardStoreAdvantages", {
  state: () => ({
    cards: [
      { id: 1,
        title: "Free Delivery",
        text: "Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.",
        image: "/src/assets/images/advantages1.svg"
      },
      { id: 2,
        title: "Sales & discounts",
        text: "Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.",
        image: "/src/assets/images/advantages2.svg"
      },
      { id: 3,
        title: "Quality assurance",
        text: "Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.",
        image: "/src/assets/images/advantages3.svg"
      },
    ]
  })
})
