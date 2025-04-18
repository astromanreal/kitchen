"use client";

import { useState } from 'react';
import { getMealSuggestions } from '@/ai/flows/meal-suggestions';
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function AISuggestionTool() {
  const [dietaryRestrictions, setDietaryRestrictions] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleGetSuggestions = async () => {
    setIsLoading(true);
    try {
      const result = await getMealSuggestions({ dietaryRestrictions });
      setSuggestions(result.suggestions);
    } catch (error) {
      console.error("Failed to get meal suggestions:", error);
      setSuggestions(['Failed to load suggestions. Please try again.']);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <Input
          type="text"
          placeholder="Enter your dietary restrictions (e.g., vegan, gluten-free)"
          value={dietaryRestrictions}
          onChange={(e) => setDietaryRestrictions(e.target.value)}
          className="w-full"
        />
      </div>
      <Button onClick={handleGetSuggestions} disabled={isLoading}>
        {isLoading ? 'Suggesting...' : 'Get Suggestions'}
      </Button>

      {suggestions.length > 0 && (
        <div>
          <h3 className="font-semibold">Meal Suggestions:</h3>
          <ul className="list-disc pl-5">
            {suggestions.map((suggestion, index) => (
              <li key={index}>{suggestion}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
