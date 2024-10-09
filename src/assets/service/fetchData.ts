// export async function fetchData(): Promise<any> {
//   try {
//     const response = await fetch("../langs/translations.json");

//     if (!response.ok) {
//       throw new Error("not found");
//     }

//     return await response.json();
//   } catch (error) {
//     console.error("Error:", error);
//     throw error;
//   }
// }

import translations from "../langs/translations.json";

export async function fetchData(): Promise<any> {
  try {
    return translations;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}
