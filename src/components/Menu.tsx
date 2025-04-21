"use client";

import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import mealData from '@/data/meal-data.json';
import { cn } from "@/lib/utils";

interface Meal {
  id: number;
  name: string;
  description: string;
  dietaryInfo: string[];
  nutritionInfo: { calories: number; protein: number; carbs: number; fat: number };
}

interface DayPlan {
  day: string;
  meals: {
    time: string;
    food: string;
    details: { calories: number; protein: number; carbs: number };
    dietaryLabels: string[];
  }[];
}

export function Menu() {
  const [filter, setFilter] = useState('all');

  const mockMeals: Meal[] = mealData.flatMap((dayPlan, dayIndex) =>
    dayPlan.meals.map((meal, mealIndex) => ({
      id: dayIndex * 10 + mealIndex,
      name: meal.food,
      description: `A ${meal.time} meal for ${dayPlan.day}`,
      imageUrl: `https://picsum.photos/200/150?random=${dayIndex * 10 + mealIndex}`,
      dietaryInfo: meal.dietaryLabels,
      nutritionInfo: {
        calories: meal.details.calories,
        protein: meal.details.protein,
        carbs: meal.details.carbs,
        fat: meal.details.calories / 9, // Approximation
      },
    }))
  );
  const filteredMeals = filter === 'all' ? mockMeals : mockMeals.filter(meal => meal.dietaryInfo.includes(filter));

  return (
    <div>
      <Tabs defaultValue="all" className="w-full">
        <TabsList>
          <TabsTrigger value="all" onClick={() => setFilter('all')}>All</TabsTrigger>
          <TabsTrigger value="vegetarian" onClick={() => setFilter('vegetarian')}>Vegetarian</TabsTrigger>
          <TabsTrigger value="vegan" onClick={() => setFilter('vegan')}>Vegan</TabsTrigger>
          <TabsTrigger value="non-vegetarian" onClick={() => setFilter('non-vegetarian')}>Non-Veg</TabsTrigger>
        </TabsList>
        <TabsContent value="all">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredMeals.map(meal => (
              <div key={meal.id} className="mb-4 p-4 border rounded-md">
                <h3 className="font-semibold">{meal.name}</h3>
                <p className="text-sm text-muted-foreground">{meal.description}</p>
                <p className="text-xs mt-2">
                  Calories: {meal.nutritionInfo.calories}, Protein: {meal.nutritionInfo.protein}g
                </p>
                <p className="text-xs mt-2">
                  Dietary Info: {meal.dietaryInfo.join(', ')}
                </p>
              </div>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="vegetarian">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {mockMeals.filter(meal => meal.dietaryInfo.includes('vegetarian')).map(meal => (
              <div key={meal.id} className="mb-4 p-4 border rounded-md">
                <h3 className="font-semibold">{meal.name}</h3>
                <p className="text-sm text-muted-foreground">{meal.description}</p>
                <p className="text-xs mt-2">
                  Calories: {meal.nutritionInfo.calories}, Protein: {meal.nutritionInfo.protein}g
                </p>
                <p className="text-xs mt-2">
                  Dietary Info: {meal.dietaryInfo.join(', ')}
                </p>
              </div>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="vegan">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {mockMeals.filter(meal => meal.dietaryInfo.includes('vegan')).map(meal => (
              <div key={meal.id} className="mb-4 p-4 border rounded-md">
                <h3 className="font-semibold">{meal.name}</h3>
                <p className="text-sm text-muted-foreground">{meal.description}</p>
                <p className="text-xs mt-2">
                  Calories: {meal.nutritionInfo.calories}, Protein: {meal.nutritionInfo.protein}g
                </p>
                <p className="text-xs mt-2">
                  Dietary Info: {meal.dietaryInfo.join(', ')}
                </p>
              </div>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="non-vegetarian">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {mockMeals.filter(meal => meal.dietaryInfo.includes('non-vegetarian')).map(meal => (
              <div key={meal.id} className="mb-4 p-4 border rounded-md">
                <h3 className="font-semibold">{meal.name}</h3>
                <p className="text-sm text-muted-foreground">{meal.description}</p>
                <p className="text-xs mt-2">
                  Calories: {meal.nutritionInfo.calories}, Protein: {meal.nutritionInfo.protein}g
                </p>
                <p className="text-xs mt-2">
                  Dietary Info: {meal.dietaryInfo.join(', ')}
                </p>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
