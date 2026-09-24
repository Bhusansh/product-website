export interface Product {
  id: string;
  name: string;
  price: string;
  img: string;
  grayscale?: boolean;
  filter?: string;
  description: string;
  features: string[];
}

export const products: Product[] = [
  { 
    id: "blueberry-jam",
    name: "Blueberry Jam", 
    price: "Rs. 290", 
    img: "/product_1.jpg",
    description: "Hand-picked wild blueberries from the pristine slopes of the Himalayas, gently preserved to retain their natural sweetness and nutritional value.",
    features: ["100% Organic", "No artificial preservatives", "Rich in antioxidants"]
  },
  { 
    id: "peach-cooler",
    name: "Peach Cooler", 
    price: "Rs. 495", 
    img: "/product_2.jpg",
    description: "Made with sun-ripened peaches from our orchards, this cooler is an instant refresher. The pure essence of Himalayan peaches in every sip.",
    features: ["No artificial colors", "Refreshing", "Made with fresh fruit"]
  },
  { 
    id: "seabuckthorn-original",
    name: "Seabuckthorn Original", 
    price: "Rs. 375", 
    img: "/product_3.jpg",
    description: "A superfood infusion packed with vitamins and antioxidants. Sourced ethically from the high-altitude regions of Lachen.",
    features: ["Immunity booster", "Rich in Omega 3, 6, 9 & 7", "Sustainable sourcing"]
  },
  { 
    id: "malta-cooler",
    name: "Malta Cooler", 
    price: "Rs. 465", 
    img: "/product_1.jpg", 
    grayscale: true,
    description: "A tangy and sweet cooler made from Himalayan Malta oranges, offering a perfect balance of citrusy zing and natural sweetness.",
    features: ["Vitamin C enriched", "Locally sourced", "Cooling and refreshing"]
  },
  { 
    id: "seabuckthorn-lavender",
    name: "Seabuckthorn Lavender", 
    price: "Rs. 395", 
    img: "/product_3.jpg", 
    filter: "hue-rotate(240deg)",
    description: "A calming blend of tart seabuckthorn and soothing Himalayan lavender, perfect for a relaxing evening beverage.",
    features: ["Relaxing properties", "Unique flavor profile", "Caffeine-free"]
  },
  { 
    id: "lemongrass-chamomile",
    name: "Lemongrass Chamomile", 
    price: "Rs. 375", 
    img: "/product_2.jpg", 
    filter: "hue-rotate(90deg)",
    description: "An aromatic and soothing tea blend with the zesty freshness of lemongrass and the calming notes of chamomile.",
    features: ["Soothing blend", "Aids digestion", "Hand-blended"]
  },
  { 
    id: "apple-cinnamon-jam",
    name: "Apple Cinnamon Jam", 
    price: "Rs. 295", 
    img: "/product_1.jpg", 
    filter: "hue-rotate(320deg)",
    description: "A comforting classic made with crisp Himalayan apples and warm cinnamon spice. Perfect for toast or baking.",
    features: ["Homestyle recipe", "Warm spices", "Perfect for breakfasts"]
  },
  { 
    id: "buransh-squash",
    name: "Buransh (Rhododendron) Squash", 
    price: "Rs. 410", 
    img: "/product_2.jpg", 
    filter: "hue-rotate(330deg)",
    description: "A traditional Himalayan squash made from the vibrant red flowers of the Rhododendron tree. Known for its cooling properties and unique floral taste.",
    features: ["Traditional recipe", "Floral notes", "Cooling for summer"]
  },
];
