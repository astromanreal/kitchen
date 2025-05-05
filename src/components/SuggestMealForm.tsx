
"use client";

import { useState } from 'react';
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export function SuggestMealForm() {
  const [suggestion, setSuggestion] = useState('');
  const recipientEmail = "Astroman6569@gmail.com"; // Your contact email

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent default form submission

    if (!suggestion.trim()) {
      alert("Please enter a meal suggestion."); // Simple validation
      return;
    }

    const subject = encodeURIComponent("Meal Suggestion from Campus Cuisine Portal");
    const body = encodeURIComponent(`Meal Suggestion:\n\n${suggestion}`);
    const mailtoLink = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;

    // Open the user's default email client
    window.location.href = mailtoLink;

    // Optionally clear the form after submission attempt
    // setSuggestion('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="meal-suggestion" className="block text-sm font-medium mb-1">
          Your Meal Suggestion
        </Label>
        <Textarea
          id="meal-suggestion"
          placeholder="Describe the meal you'd like to see..."
          value={suggestion}
          onChange={(e) => setSuggestion(e.target.value)}
          rows={4}
          className="w-full"
          required
        />
      </div>
      <Button type="submit">Send Suggestion via Email</Button>
       <p className="text-xs text-muted-foreground">
        Note: Clicking the button will open your default email application to send the suggestion.
      </p>
    </form>
  );
}
