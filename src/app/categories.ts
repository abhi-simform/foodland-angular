export interface Category {
  id: number;
  name: string;
  imagePath: string;
  bacgroundGradient: string;
}

export const categories = [
  {
    id: 1,
    name: 'Breakfast',
    imagePath: '../../../../assets/images/categories/category01.svg',
    backgroundGradient:
      'linear-gradient(180deg, rgba(112, 130, 70, 0) 0%, rgba(112, 130, 70, 0.1) 100%);',
  },
  {
    id: 2,
    name: 'Vegan',
    imagePath: '../../../../assets/images/categories/category02.svg',
    backgroundGradient:
      'linear-gradient(180deg, rgba(108, 198, 63, 0) 0%, rgba(108, 198, 63, 0.1) 100%);',
  },
  {
    id: 3,
    name: 'Meat',
    imagePath: '../../../../assets/images/categories/category03.svg',
    backgroundGradient:
      'linear-gradient(180deg, rgba(204, 38, 27, 0) 0%, rgba(204, 38, 27, 0.1) 100%);',
  },
  {
    id: 4,
    name: 'Dessert',
    imagePath: '../../../../assets/images/categories/category04.svg',
    backgroundGradient:
      'linear-gradient(180deg, rgba(240, 158, 0, 0) 0%, rgba(240, 158, 0, 0.1) 100%);',
  },
  {
    id: 5,
    name: 'Lunch',
    imagePath: '../../../../assets/images/categories/category05.svg',
    backgroundGradient:
      'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.05) 100%);',
  },
  {
    id: 6,
    name: 'Chocolate',
    imagePath: '../../../../assets/images/categories/category06.svg',
    backgroundGradient:
      'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.05) 100%);',
  },
];
