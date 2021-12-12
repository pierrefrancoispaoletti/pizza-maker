import Anchoies from "./anchovies.png";
import Arugula from "./arugula-leaves-shutterstock_1517311190-1.png";
import Bacon from "./bacon-strips.png";
import BlackOlives from "./black-olives.png";
import Brocoli from "./broccoli.png";
import CherryTomatoes from "./cherry-tomatoes-1.png";
import Chicken from "./chicken.png";
import Cilantro from "./cilantro.png";
import Cucumber from "./cucumber.png";
import GreenOlives from "./green-olives.png";
import GreenPeppers from "./green-peppers.png";
import Ham from "./ham.png";
import Jalapeno from "./jalapeno-peppers.png";
import MincedGarlic from "./minced-garlic.png";
import MiniMeatBalls from "./mini-meatballs.png";
import Mushrooms from "./mushrooms.png";
import Onions from "./onions.png";
import Parmesan from "./parmesan-cheese.png";
import Pepperoni from "./pepperoni.png";
import RedPeppers from "./red-peppers.png";
import Sausage from "./sausage-basic-1.png";
import Shrimp from "./shrimp.png";
import Basilic from "./basilic.png";
import Tomatoes from "./tomatoes.png";

export const Toppings = [
  { name: "Anchois", image: Anchoies, visible: false, price: 1.5 },
  { name: "Roquette", image: Arugula, visible: false, price: 1.5 },
  { name: "Bacon", image: Bacon, visible: false, price: 1.5 },
  { name: "Olives Noires", image: BlackOlives, visible: false, price: 1.5 },
  { name: "Brocolis", image: Brocoli, visible: false, price: 1.5 },
  {
    name: "Tomates Cerises",
    image: CherryTomatoes,
    visible: false,
    price: 1.5,
  },
  { name: "Poulet", image: Chicken, visible: false, price: 1.5 },
  { name: "Coriandre", image: Cilantro, visible: false, price: 1.5 },
  { name: "Comcombre", image: Cucumber, visible: false, price: 1.5 },
  { name: "Olives Vertes", image: GreenOlives, visible: false, price: 1.5 },
  { name: "Poivrons Verts", image: GreenPeppers, visible: false, price: 1.5 },
  { name: "Jambon", image: Ham, visible: false, price: 1.5 },
  { name: "Jalapeno", image: Jalapeno, visible: false, price: 1.5 },
  { name: "Ail Émincé", image: MincedGarlic, visible: false, price: 1.5 },
  {
    name: "Boulettes de Viande",
    image: MiniMeatBalls,
    visible: false,
    price: 1.5,
  },
  { name: "Champignons", image: Mushrooms, visible: false, price: 1.5 },
  { name: "Oignons", image: Onions, visible: false, price: 1.5 },
  { name: "Parmesan", image: Parmesan, visible: false, price: 1.5 },
  { name: "Pepperoni", image: Pepperoni, visible: false, price: 1.5 },
  { name: "Poivrons Rouges", image: RedPeppers, visible: false, price: 1.5 },
  { name: "Saucisse Piquante", image: Sausage, visible: false, price: 1.5 },
  { name: "Crevettes", image: Shrimp, visible: false, price: 1.5 },
  { name: "Basilic", image: Basilic, visible: false, price: 1.5 },
  { name: "Tomates", image: Tomatoes, visible: false, price: 1.5 },
].sort((a, b) => (b.name > a.name ? -1 : 1));
