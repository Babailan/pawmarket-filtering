import generatePrice from "./generatePrice";
import { Document, WithId } from "mongodb";

export default function extractData(document: WithId<Document>) {
  const price = generatePrice();
  const current_breed = document.settings.current_breed;
  const gallery = document.breed.media.gallery;
  const {
    breed_group,
    total_breed_count,
    year_recognized,
    origin,
    life_expectancy,
  } = document.settings.breed_data.basics[current_breed];
  const { akc_org_blurb, akc_org_about } =
    document.settings.breed_data.description[current_breed];
  const { did_you_know } = document.settings.breed_data.history[current_breed];
  const { temperament } = document.settings.breed_data.traits[current_breed];
  const data = {
    current_breed,
    dog_name: current_breed.split("-").join(" "),
    gallery,
    breed_group,
    total_breed_count,
    year_recognized,
    origin,
    life_expectancy,
    description: {
      short_description: akc_org_blurb,
      about: akc_org_about,
      temperament: temperament,
    },
    price,
    did_you_know,
  };
  return data;
}
