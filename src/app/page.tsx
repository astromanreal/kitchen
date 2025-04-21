"use client";

import {Menu} from '@/components/Menu';
import {StudentReviews} from '@/components/StudentReviews';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import mealData from '@/data/meal-data.json';
import {cn} from "@/lib/utils";

const dayOfWeek = new Date().toLocaleDateString('en-US', {weekday: 'long'});
const todaysMealPlan = mealData.find(dayPlan => dayPlan.day === dayOfWeek);

export default function Home() {
  return (
    <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="text-center py-6 mb-8">
        <h1 className="text-3xl font-semibold text-gray-800">
          Smart minds need strong meals — fuel your day the nutritious way.
        </h1>
        <p className="text-muted-foreground mt-2">
          Discover healthy and delicious options tailored for students.
        </p>
      </section>

      {todaysMealPlan && (
        <section className="mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Today's Meal Plan ({todaysMealPlan.day})</CardTitle>
              <CardDescription>Here's what we're serving today.</CardDescription>
            </CardHeader>
            <CardContent>
              {todaysMealPlan.meals.map((meal, mealIndex) => (
                <div key={mealIndex} className="mb-4 p-4 rounded-md" style={{ backgroundColor: meal.dietaryLabels.includes('vegan') ? '#a5d6a7' : meal.dietaryLabels.includes('vegetarian') ? '#e6ee9c' : '#ffcc80' }}>
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
        </section>
      )}

      <section className="mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Meals</CardTitle>
            <CardDescription>Explore our delicious and nutritious meal options for today.</CardDescription>
          </CardHeader>
          <CardContent>
            <Menu />
          </CardContent>
        </Card>
      </section>

      <section className="mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Student Reviews</CardTitle>
            <CardDescription>See what other students are saying about Campus Cuisine.</CardDescription>
          </CardHeader>
          <CardContent>
            <StudentReviews/>
          </CardContent>
        </Card>
      </section>

      <footer className="text-center text-muted-foreground mt-8">
        <p>© 2024 Campus Cuisine. All rights reserved.</p>
      </footer>
    </div>
  );
}
