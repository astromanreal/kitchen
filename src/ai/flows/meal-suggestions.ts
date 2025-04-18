// 'use server';
/**
 * @fileOverview Provides AI-powered meal suggestions based on dietary restrictions.
 *
 * - getMealSuggestions - A function that returns meal suggestions based on dietary restrictions.
 * - MealSuggestionsInput - The input type for the getMealSuggestions function.
 * - MealSuggestionsOutput - The return type for the getMealSuggestions function.
 */

'use server';

import {ai} from '@/ai/ai-instance';
import {z} from 'genkit';

const MealSuggestionsInputSchema = z.object({
  dietaryRestrictions: z.string().describe('The dietary restrictions of the student.'),
});
export type MealSuggestionsInput = z.infer<typeof MealSuggestionsInputSchema>;

const MealSuggestionsOutputSchema = z.object({
  suggestions: z.array(z.string()).describe('A list of suggested meals based on the dietary restrictions.'),
});
export type MealSuggestionsOutput = z.infer<typeof MealSuggestionsOutputSchema>;

export async function getMealSuggestions(input: MealSuggestionsInput): Promise<MealSuggestionsOutput> {
  return mealSuggestionsFlow(input);
}

const mealSuggestionsPrompt = ai.definePrompt({
  name: 'mealSuggestionsPrompt',
  input: {
    schema: z.object({
      dietaryRestrictions: z.string().describe('The dietary restrictions of the student.'),
    }),
  },
  output: {
    schema: z.object({
      suggestions: z.array(z.string()).describe('A list of suggested meals based on the dietary restrictions.'),
    }),
  },
  prompt: `You are a helpful assistant that suggests meals based on dietary restrictions.

  Suggest meals considering the following dietary restrictions: {{{dietaryRestrictions}}}. Provide a numbered list of meal suggestions. Limit your response to 5 suggestions.
`,
});

const mealSuggestionsFlow = ai.defineFlow<
  typeof MealSuggestionsInputSchema,
  typeof MealSuggestionsOutputSchema
>({
  name: 'mealSuggestionsFlow',
  inputSchema: MealSuggestionsInputSchema,
  outputSchema: MealSuggestionsOutputSchema,
},
async input => {
  const {output} = await mealSuggestionsPrompt(input);
  return output!;
});