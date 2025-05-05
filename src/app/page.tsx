
"use client";

import { Menu } from '@/components/Menu';
import { StudentReviews } from '@/components/StudentReviews';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import mealData from '@/data/meal-data.json';
import { cn } from "@/lib/utils";
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { UtensilsCrossed } from 'lucide-react';


export default function Home() {
    const [todaysMealPlan, setTodaysMealPlan] = useState<typeof mealData[0] | null>(null);

    useEffect(() => {
      // Ensure this runs only on the client
      const dayOfWeek = new Date().toLocaleDateString('en-US', {weekday: 'long'});
      const plan = mealData.find(dayPlan => dayPlan.day === dayOfWeek) || null;
      setTodaysMealPlan(plan);
    }, []); // Empty dependency array ensures this runs once on mount


  return (
    <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="relative text-center py-16 px-6 mb-12 rounded-xl overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/10 border border-border shadow-sm">
         <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-[0.03]"></div>
         <div className="relative z-10 space-y-4">
           <h1 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
            Smart minds need strong meals — fuel your day the nutritious way.
           </h1>
           <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover healthy and delicious options tailored for students.
           </p>
        </div>
      </section>

       {/* Today's Meal Plan Section */}
      {todaysMealPlan && (
        <section className="mb-12">
          <Card className="shadow-md border border-border hover:shadow-lg transition-shadow duration-300 overflow-hidden">
             <CardHeader className="bg-secondary/30 dark:bg-secondary/10 rounded-t-lg">
               <CardTitle className="text-2xl font-semibold text-primary">Today's Meal Plan ({todaysMealPlan.day})</CardTitle>
              <CardDescription className="text-base text-muted-foreground">Here's what we're serving today.</CardDescription>
            </CardHeader>
            <CardContent className="p-4 md:p-6 grid gap-4">
              {todaysMealPlan.meals.map((meal, mealIndex) => (
                 <div key={mealIndex} className="p-4 border rounded-lg bg-card hover:bg-muted/50 transition-colors duration-200 shadow-sm">
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
        </section>
      )}

      {/* Suggest a Meal CTA Section */}
      <section className="mb-12 p-6 md:p-8 rounded-xl bg-gradient-to-tr from-accent/10 to-primary/5 border border-primary/20 shadow-sm text-center">
         <UtensilsCrossed className="h-10 w-10 text-primary mx-auto mb-4" />
         <h2 className="text-2xl font-semibold text-foreground mb-2">Have a Meal Idea?</h2>
         <p className="text-muted-foreground mb-4 max-w-lg mx-auto">
           We love hearing from you! Visit our Meal Plan page to suggest your favorite dishes or new ideas you'd like to see on the menu.
         </p>
         <Button asChild>
           <Link href="/meal-plan">Suggest a Meal</Link>
         </Button>
      </section>

      {/* Meals Section */}
      <section className="mb-12">
         <Card className="shadow-md border border-border hover:shadow-lg transition-shadow duration-300 overflow-hidden">
           <CardHeader className="bg-secondary/30 dark:bg-secondary/10 rounded-t-lg">
             <CardTitle className="text-2xl font-semibold text-primary">Meals</CardTitle>
             <CardDescription className="text-base text-muted-foreground">Explore our delicious and nutritious meal options.</CardDescription>
          </CardHeader>
          <CardContent className="p-4 md:p-6">
            <Menu />
          </CardContent>
        </Card>
      </section>


      {/* Student Reviews Section */}
       <section className="mb-12">
        <Card className="shadow-md border border-border overflow-hidden bg-card">
          <CardHeader className="bg-secondary/30 dark:bg-secondary/10 rounded-t-lg p-6">
            <CardTitle className="text-2xl font-semibold text-primary">Student Reviews</CardTitle>
            <CardDescription className="text-base text-muted-foreground mt-1">See what other students are saying about Campus Cuisine.</CardDescription>
          </CardHeader>
          <CardContent className="pt-6 p-4 md:p-6">
            <StudentReviews/>
          </CardContent>
        </Card>
      </section>


      <footer className="text-center text-muted-foreground mt-12 py-4 border-t">
        <p>© 2024 Campus Cuisine. All rights reserved.</p>
      </footer>
    </div>
  );
}

// Helper style for grid pattern (if not already global)
const GridPatternStyle = () => (
  <style jsx global>{`
    .bg-grid-pattern {
      background-image: linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px);
      background-size: 40px 40px;
    }
  `}</style>
);
// <GridPatternStyle /> // Include if needed

