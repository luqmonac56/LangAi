// declare global {
//   interface Window {
//     ai?: {
//       detectLanguage: (
//         text: string
//       ) => Promise<{ languages: { language: string }[] }>;
//       generateTextSummary: (text: string) => Promise<{ summary: string }>;
//       translateText: (
//         text: string,
//         targetLanguage: string
//       ) => Promise<{ translation: string }>;
//     };
//   }
// }


// export async function summarizeText(text: string): Promise<string> {
//   try {
//     if (!window.ai) throw new Error("AI service is not available.");
//     const result = await window.ai.generateTextSummary(text);
//     return result.summary;
//   } catch (error) {
//     console.error("Error summarizing text:", error);
//     throw error;
//   }
// }


