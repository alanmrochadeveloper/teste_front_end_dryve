import faker from 'faker'
import carImageUrl from '../../assets/corolla.jpeg'

export interface ICar {
  id: string
  imgUrl: string
  title: string
  model: string
  year: string
  fuel: string
  transmission: string
  km: string
  announcePrice: string
  minPrice: string
  pedingPrice: string
}

// const createCarData = (
//   imgUrl: string,
//   title: string,
//   model: string,
//   year: Date,
//   fuel: 'flex' | 'gasolina' | 'etanol' | 'diesel' | 'biodiesel',
//   transmission: 'automático' | 'manual',
//   km: number,
//   announcePrice: number,
//   minPrice: number,
//   pedingPrice: Date,
// ): ICar => {
//   return {
//     imgUrl,
//     title,
//     model,
//     year,
//     fuel,
//     transmission,
//     km,
//     announcePrice,
//     minPrice,
//     pedingPrice,
//   }
// }

const createMockCarData = (): ICar[] => {
  let cars: ICar[] = []
  for (let i = 0; i <= 25; i++) {
    cars.push({
      id: faker.datatype.uuid(),
      imgUrl: carImageUrl,
      title: faker.vehicle.vehicle(),
      model: faker.vehicle.model(),
      year: JSON.stringify(faker.date.past().getFullYear()),
      fuel: faker.random.arrayElement([
        'gasolina',
        'etanol',
        'diesel',
        'flex',
        'biodisel',
      ]),
      transmission: faker.random.arrayElement(['automático', 'manual']),
      km: faker.finance.amount(0, 1000000),
      announcePrice: faker.finance.amount(100000, 1000000),
      minPrice: faker.finance.amount(100000, 1000000),
      pedingPrice: JSON.stringify(faker.date.recent(2)),
    })
  }
  return cars
}
export const carsList = createMockCarData()

// export const carRows = [
//   createCarData(
//     carImageUrl,
//     'jeep compass',
//     'gdl8019',
//     2018,
//     'diesel',
//     'automático',
//     70972,
//     115560,
//     115560,
//     new Date(),
//   ),
//   createCarData(
//     carImageUrl,
//     'jeep compass',
//     'gdl8019',
//     2018,
//     'diesel',
//     'automático',
//     70972,
//     115560,
//     115560,
//     new Date(),
//   ),
//   createCarData(
//     carImageUrl,
//     'jeep compass',
//     'gdl8019',
//     2018,
//     'diesel',
//     'automático',
//     70972,
//     115560,
//     115560,
//     new Date(),
//   ),
//   createCarData(
//     carImageUrl,
//     'jeep compass',
//     'gdl8019',
//     2018,
//     'diesel',
//     'automático',
//     70972,
//     115560,
//     115560,
//     new Date(),
//   ),
//   createCarData(
//     carImageUrl,
//     'jeep compass',
//     'gdl8019',
//     2018,
//     'diesel',
//     'automático',
//     70972,
//     115560,
//     115560,
//     new Date(),
//   ),
//   createCarData(
//     carImageUrl,
//     'jeep compass',
//     'gdl8019',
//     2018,
//     'diesel',
//     'automático',
//     70972,
//     115560,
//     115560,
//     new Date(),
//   ),
//   createCarData(
//     carImageUrl,
//     'jeep compass',
//     'gdl8019',
//     2018,
//     'diesel',
//     'automático',
//     70972,
//     115560,
//     115560,
//     new Date(),
//   ),
//   createCarData(
//     carImageUrl,
//     'jeep compass',
//     'gdl8019',
//     2018,
//     'diesel',
//     'automático',
//     70972,
//     115560,
//     115560,
//     new Date(),
//   ),
//   createCarData(
//     carImageUrl,
//     'jeep compass',
//     'gdl8019',
//     2018,
//     'diesel',
//     'automático',
//     70972,
//     115560,
//     115560,
//     new Date(),
//   ),
//   createCarData(
//     carImageUrl,
//     'jeep compass',
//     'gdl8019',
//     2018,
//     'diesel',
//     'automático',
//     70972,
//     115560,
//     115560,
//     new Date(),
//   ),
//   createCarData(
//     carImageUrl,
//     'jeep compass',
//     'gdl8019',
//     2018,
//     'diesel',
//     'automático',
//     70972,
//     115560,
//     115560,
//     new Date(),
//   ),
//   createCarData(
//     carImageUrl,
//     'jeep compass',
//     'gdl8019',
//     2018,
//     'diesel',
//     'automático',
//     70972,
//     115560,
//     115560,
//     new Date(),
//   ),
//   createCarData(
//     carImageUrl,
//     'jeep compass',
//     'gdl8019',
//     2018,
//     'diesel',
//     'automático',
//     70972,
//     115560,
//     115560,
//     new Date(),
//   ),
//   createCarData(
//     carImageUrl,
//     'jeep compass',
//     'gdl8019',
//     2018,
//     'diesel',
//     'automático',
//     70972,
//     115560,
//     115560,
//     new Date(),
//   ),
//   createCarData(
//     carImageUrl,
//     'jeep compass',
//     'gdl8019',
//     2018,
//     'diesel',
//     'automático',
//     70972,
//     115560,
//     115560,
//     new Date(),
//   ),
//   createCarData(
//     carImageUrl,
//     'jeep compass',
//     'gdl8019',
//     2018,
//     'diesel',
//     'automático',
//     70972,
//     115560,
//     115560,
//     new Date(),
//   ),
//   createCarData(
//     carImageUrl,
//     'jeep compass',
//     'gdl8019',
//     2018,
//     'diesel',
//     'automático',
//     70972,
//     115560,
//     115560,
//     new Date(),
//   ),
//   createCarData(
//     carImageUrl,
//     'jeep compass',
//     'gdl8019',
//     2018,
//     'diesel',
//     'automático',
//     70972,
//     115560,
//     115560,
//     new Date(),
//   ),
//   createCarData(
//     carImageUrl,
//     'jeep compass',
//     'gdl8019',
//     2018,
//     'diesel',
//     'automático',
//     70972,
//     115560,
//     115560,
//     new Date(),
//   ),
// ]
