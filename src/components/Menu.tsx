
"use client";

import { useState } from 'react';
import { Card, CardContent, CardDescription } from "@/components/ui/card"
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

export function Menu() {
  const mockMeals: Meal[] = mealData.flatMap((dayPlan, dayIndex) =>
    dayPlan.meals.map((meal, mealIndex) => ({
      id: dayIndex * 10 + mealIndex,
      name: meal.food,
      description: `A ${meal.time} meal for ${dayPlan.day}`,
      dietaryInfo: meal.dietaryLabels,
      nutritionInfo: {
        calories: meal.details.calories,
        protein: meal.details.protein,
        carbs: meal.details.carbs,
        fat: meal.details.fat, // Use the fat value from JSON
      },
    }))
  );

  // Function to render meals in a grid
  const renderMeals = (mealsToRender: Meal[]) => (
     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
       {mealsToRender.map(meal => (
         <Card key={meal.id} className="bg-card border hover:shadow-md transition-shadow duration-200 rounded-lg overflow-hidden">
          <CardContent className="p-4 space-y-2">
            <h3 className="font-semibold text-lg text-primary">{meal.name}</h3>
             {/* <p className="text-sm text-muted-foreground">{meal.description}</p> */}
            <CardDescription className="text-sm mt-1">
              Calories: {meal.nutritionInfo.calories} | Protein: {meal.nutritionInfo.protein}g | Carbs: {meal.nutritionInfo.carbs}g | Fat: {meal.nutritionInfo.fat}g
            </CardDescription>
             <div className="mt-2 space-x-1">
               {meal.dietaryInfo.map((label, labelIndex) => (
                <span key={labelIndex} className={cn(
                  "inline-block px-2 py-0.5 rounded-full text-xs font-medium",
                   label === 'vegan' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' :
                   label === 'vegetarian' ? 'bg-lime-100 text-lime-800 dark:bg-lime-900 dark:text-lime-300' :
                   'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300' // non-vegetarian
                )}>
                  {label}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  return (
    <div>
      <Tabs defaultValue="all" className="w-full">
         {/* Improved TabsList styling */}
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 gap-2 bg-transparent p-0">
          <TabsTrigger value="all" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md text-foreground bg-muted hover:bg-muted/80 rounded-lg transition-all">All</TabsTrigger>
          <TabsTrigger value="vegetarian" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md text-foreground bg-muted hover:bg-muted/80 rounded-lg transition-all">Vegetarian</TabsTrigger>
          <TabsTrigger value="vegan" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md text-foreground bg-muted hover:bg-muted/80 rounded-lg transition-all">Vegan</TabsTrigger>
          <TabsTrigger value="non-vegetarian" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md text-foreground bg-muted hover:bg-muted/80 rounded-lg transition-all">Non-Veg</TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          {renderMeals(mockMeals)}
        </TabsContent>
        <TabsContent value="vegetarian">
          {renderMeals(mockMeals.filter(meal => meal.dietaryInfo.includes('vegetarian')))}
        </TabsContent>
        <TabsContent value="vegan">
          {renderMeals(mockMeals.filter(meal => meal.dietaryInfo.includes('vegan')))}
        </TabsContent>
        <TabsContent value="non-vegetarian">
          {renderMeals(mockMeals.filter(meal => meal.dietaryInfo.includes('non-vegetarian')))}
        </TabsContent>
      </Tabs>
    </div>
  );
}
