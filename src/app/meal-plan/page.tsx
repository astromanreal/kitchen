"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const weeklyMealPlan = [
  {
    day: "Monday",
    meals: [
      {
        time: "Day",
        food: "Chicken Salad Sandwich",
        details: { calories: 450, protein: 25, carbs: 40 },
        dietaryLabels: ["non-vegetarian"],
      },
      {
        time: "Night",
        food: "Vegetarian Pasta",
        details: { calories: 520, protein: 18, carbs: 65 },
        dietaryLabels: ["vegetarian"],
      },
    ],
  },
  {
    day: "Tuesday",
    meals: [
      {
        time: "Day",
        food: "Turkey and Swiss Wrap",
        details: { calories: 400, protein: 30, carbs: 35 },
        dietaryLabels: ["non-vegetarian"],
      },
      {
        time: "Night",
        food: "Salmon with Roasted Vegetables",
        details: { calories: 600, protein: 40, carbs: 30 },
        dietaryLabels: ["non-vegetarian"],
      },
    ],
  },
  {
    day: "Wednesday",
    meals: [
      {
        time: "Day",
        food: "Tuna Salad on Whole Wheat",
        details: { calories: 380, protein: 28, carbs: 30 },
        dietaryLabels: ["non-vegetarian"],
      },
      {
        time: "Night",
        food: "Lentil Soup with Whole Grain Bread",
        details: { calories: 420, protein: 20, carbs: 50 },
        dietaryLabels: ["vegan", "vegetarian"],
      },
    ],
  },
  {
    day: "Thursday",
    meals: [
      {
        time: "Day",
        food: "Ham and Cheese Baguette",
        details: { calories: 460, protein: 26, carbs: 42 },
        dietaryLabels: ["non-vegetarian"],
      },
      {
        time: "Night",
        food: "Chicken Stir-Fry with Brown Rice",
        details: { calories: 550, protein: 35, carbs: 50 },
        dietaryLabels: ["non-vegetarian"],
      },
    ],
  },
  {
    day: "Friday",
    meals: [
      {
        time: "Day",
        food: "Egg Salad Sandwich",
        details: { calories: 420, protein: 22, carbs: 38 },
        dietaryLabels: ["vegetarian"],
      },
      {
        time: "Night",
        food: "Pizza with Vegetables",
        details: { calories: 650, protein: 28, carbs: 70 },
        dietaryLabels: ["vegetarian"],
      },
    ],
  },
  {
    day: "Saturday",
    meals: [
      {
        time: "Day",
        food: "BLT Sandwich",
        details: { calories: 480, protein: 20, carbs: 45 },
        dietaryLabels: ["non-vegetarian"],
      },
      {
        time: "Night",
        food: "Steak with Sweet Potato",
        details: { calories: 700, protein: 45, carbs: 40 },
        dietaryLabels: ["non-vegetarian"],
      },
    ],
  },
  {
    day: "Sunday",
    meals: [
      {
        time: "Day",
        food: "Peanut Butter and Banana Sandwich",
        details: { calories: 430, protein: 15, carbs: 50 },
        dietaryLabels: ["vegan", "vegetarian"],
      },
      {
        time: "Night",
        food: "Roast Chicken with Potatoes",
        details: { calories: 620, protein: 40, carbs: 35 },
        dietaryLabels: ["non-vegetarian"],
      },
    ],
  },
];

export default function MealPlanPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-8 text-center">Weekly Meal Plan</h1>
      {weeklyMealPlan.map((dayPlan, index) => (
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
