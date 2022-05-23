export interface recipe {
  id: number;
  title: string;
  duration: string;
  type: string;
  imagePath: string;
  cardClass: string;
}

export const recipes: recipe[] = [
  {
    id: 1,
    title: 'Big and Juicy Wagyu Beef Cheeseburger',
    duration: '30 minutes',
    type: 'Snack',
    imagePath: '../../../../assets/images/recipe/recipe01.png',
    cardClass: 'recipe-card',
  },
  {
    id: 2,
    title: 'Fresh Lime Roasted Salmon with Ginger Sauce',
    duration: '30 Minutes',
    type: 'Fish',
    imagePath: '../../../../assets/images/recipe/recipe02.png',
    cardClass: 'recipe-card',
  },
  {
    id: 3,
    title: 'Strawberry Oatmeal Pancake with Honey Syrup',
    duration: '30 Minutes',
    type: 'Breakfast',
    imagePath: '../../../../assets/images/recipe/recipe03.png',
    cardClass: 'recipe-card',
  },
  {
    id: 4,
    title: 'Fresh and Healthy Mixed Mayonnaise Salad',
    duration: '30 Minutes',
    type: 'Healthy',
    imagePath: '../../../../assets/images/recipe/recipe04.png',
    cardClass: 'recipe-card',
  },
  {
    id: 5,
    title: 'Chicken Meatballs with Cream Cheese',
    duration: '30 Minutes',
    type: 'Meat',
    imagePath: '../../../../assets/images/recipe/recipe05.png',
    cardClass: 'recipe-card',
  },
  {
    id: 6,
    title: '',
    duration: '',
    type: '',
    imagePath: '../../../../assets/images/recipe/Ads.png',
    cardClass: 'ads-card',
  },
  {
    id: 7,
    title: 'Fruity Pancake with Orange & Blueberry',
    duration: '30 Minutes',
    type: 'Sweet',
    imagePath: '../../../../assets/images/recipe/recipe06.png',
    cardClass: 'recipe-card',
  },
  {
    id: 8,
    title: 'The Best Easy One Pot Chicken and Rice',
    duration: '30 Minutes',
    type: 'Snack',
    imagePath: '../../../../assets/images/recipe/recipe07.png',
    cardClass: 'recipe-card',
  },
  {
    id: 8,
    title: 'The Creamiest Creamy Chicken and Bacon Pasta',
    duration: '30 Minutes',
    type: 'Noodles',
    imagePath: '../../../../assets/images/recipe/recipe08.png',
    cardClass: 'recipe-card',
  },
];
