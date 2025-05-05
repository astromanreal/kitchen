
"use client"; // Add 'use client' because SuggestMealForm uses client-side hooks

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import mealData from '@/data/meal-data.json';
import { SuggestMealForm } from '@/components/SuggestMealForm'; // Import the component

export default function MealPlanPage() {
  return (
    <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-8">
       {/* Hero Section */}
      <section className="relative py-16 px-6 mb-12 rounded-xl overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/10 border border-border shadow-sm">
         <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-[0.03]"></div>
         <div className="relative z-10 text-center space-y-4">
           <h1 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
            Nourishing Your Academic Journey: Explore Our Meal Plans
          </h1>
           <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
           "A well-planned meal is a cornerstone of academic success, providing sustained energy and focus."
          </p>
          <p className="text-md text-muted-foreground max-w-xl mx-auto">
            Discover our weekly meal plans designed to fuel your mind and body with delicious and nutritious options, tailored for the student lifestyle.
          </p>

          {/* Suggest a Meal Form integrated into the hero section */}
          <div className="mt-8 max-w-lg mx-auto bg-background/80 backdrop-blur-sm p-6 rounded-lg border border-border shadow-inner">
             <h3 className="text-xl font-semibold text-primary mb-4">Have a Meal Idea?</h3>
             <SuggestMealForm />
          </div>

        </div>
      </section>

      <h2 className="text-3xl font-bold mb-8 text-center text-foreground">Weekly Meal Plan</h2>
      {mealData.map((dayPlan, index) => (
        <Card key={index} className="mb-6 shadow-md border border-border hover:shadow-lg transition-shadow duration-300">
          <CardHeader className="bg-secondary/30 dark:bg-secondary/10 rounded-t-lg">
            <CardTitle className="text-xl font-semibold text-primary">{dayPlan.day}</CardTitle>
          </CardHeader>
          <CardContent className="p-4 md:p-6 grid gap-4">
            {dayPlan.meals.map((meal, mealIndex) => (
              <div key={mealIndex} className="p-4 border rounded-lg bg-card hover:bg-muted/50 transition-colors duration-200">
                <h3 className="text-lg font-semibold text-primary mb-1">{meal.time}</h3>
                <p className="text-base font-medium text-foreground">{meal.food}</p>
                <CardDescription className="text-sm mt-2">
                  Calories: {meal.details.calories} | Protein: {meal.details.protein}g | Carbs: {meal.details.carbs}g | Fat: {meal.details.fat}g
                </CardDescription>
                 <div className="mt-3 space-x-2">
                    {meal.dietaryLabels.map((label, labelIndex) => (
                      <span key={labelIndex} className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        label === 'vegan' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' :
                        label === 'vegetarian' ? 'bg-lime-100 text-lime-800 dark:bg-lime-900 dark:text-lime-300' :
                        'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300' // non-vegetarian
                      }`}>
                        {label}
                      </span>
                    ))}
                 </div>
              </div>
            ))}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

// Helper style for grid pattern
const GridPatternStyle = () => (
  <style jsx global>{`
    .bg-grid-pattern {
      background-image: linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px);
      background-size: 40px 40px;
    }
  `}</style>
);

// Include the style component somewhere in your layout or page
// <GridPatternStyle />
