"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import mealData from '@/data/meal-data.json';

export default function MealPlanPage() {
  return (
    <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-8">
       {/* Hero Section */}
      <section className="relative py-12 px-6 mb-8 rounded-lg overflow-hidden">
        <div className="relative z-10 text-center">
          <h1 className="text-3xl font-bold mb-4 text-foreground">
            Nourishing Your Academic Journey: Explore Our Meal Plans
          </h1>
           <p className="text-lg text-muted-foreground">
           "A well-planned meal is a cornerstone of academic success, providing sustained energy and focus."
          </p>
          <p className="text-lg text-muted-foreground">
            Discover our weekly meal plans designed to fuel your mind and body.
          </p>
        </div>
      </section>

      <h1 className="text-3xl font-bold mb-8 text-center">Weekly Meal Plan</h1>
      {mealData.map((dayPlan, index) => (
        <Card key={index} className="mb-6">
          <CardHeader>
            <CardTitle>{dayPlan.day}</CardTitle>
          </CardHeader>
          <CardContent>
            {dayPlan.meals.map((meal, mealIndex) => (
              <div key={mealIndex} className="mb-4 p-4 border rounded-md">
                <h3 className="text-xl font-semibold">{meal.time}</h3>
                <p className="text-lg">{meal.food}</p>
                <CardDescription>
                  Calories: {meal.details.calories}, Protein: {meal.details.protein}g, Carbs: {meal.details.carbs}g
                </CardDescription>
                <p className="text-sm">
                  Dietary Labels: {meal.dietaryLabels.join(", ")}
                </p>
              </div>
            ))}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

