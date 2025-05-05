"use client";

import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {List, ListItem} from "@/components/ui/list";
import { CheckCircle } from 'lucide-react'; // Icon for highlighting value

export default function PricingPage() {
  return (
    <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <Card className="shadow-lg border border-border rounded-xl overflow-hidden">
        <CardHeader className="bg-secondary/50 dark:bg-secondary/10 p-6">
          <CardTitle className="text-3xl font-bold text-center text-primary">Our Pricing Plans</CardTitle>
          <CardDescription className="text-muted-foreground text-center text-lg mt-2">
            Simple and affordable meal plans to fuel your campus life.
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6 md:p-8 space-y-8">
          {/* Inspirational Quote */}
          <div className="text-center rounded-lg bg-gradient-to-r from-primary/10 to-accent/10 dark:from-primary/5 dark:to-accent/5 p-6 border border-primary/20 dark:border-accent/20">
            <p className="text-xl text-foreground italic font-medium">
              "Good food is wise medicine." - Let us take care of the food, so you can focus on your studies.
            </p>
          </div>

          {/* Value Proposition Section */}
          <div className="bg-accent/10 dark:bg-accent/5 border border-accent/30 rounded-lg p-4 flex items-center justify-center space-x-3">
             <CheckCircle className="h-6 w-6 text-accent" />
            <p className="text-base font-semibold text-accent-foreground">
              Unbeatable value! Compare our prices and see the quality you get.
            </p>
          </div>


          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Monthly Plan */}
            <Card className="flex flex-col border hover:shadow-lg transition-shadow rounded-lg overflow-hidden">
              <CardHeader className="bg-secondary/30 dark:bg-secondary/5 p-5">
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-xl font-semibold text-primary">
                        Monthly Plan
                    </p>
                    <Badge variant="default" className="bg-primary text-primary-foreground">Most Popular</Badge>
                  </div>
                <div className="flex items-baseline space-x-1">
                    <span className="text-4xl font-bold text-foreground">₹3000</span>
                    <span className="text-sm text-muted-foreground">/ month</span>
                </div>
              </CardHeader>
              <CardContent className="p-5 flex-grow">
                <p className="text-muted-foreground mb-4">
                  Enjoy unlimited access to our delicious and nutritious meals every day for a full month.
                </p>
                <List className="space-y-2">
                  <ListItem className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0"/>Balanced and diverse menu</ListItem>
                  <ListItem className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0"/>Fresh, high-quality ingredients</ListItem>
                  <ListItem className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0"/>Conveniently available on campus</ListItem>
                  <ListItem className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0"/>Best value for daily meals</ListItem>
                </List>
              </CardContent>
            </Card>

            {/* Half-Monthly Plan */}
            <Card className="flex flex-col border hover:shadow-lg transition-shadow rounded-lg overflow-hidden">
              <CardHeader className="bg-secondary/30 dark:bg-secondary/5 p-5">
                <p className="text-xl font-semibold text-primary mb-2">
                  Half-Monthly Plan
                </p>
                <div className="flex items-baseline space-x-1">
                    <span className="text-4xl font-bold text-foreground">₹1500</span>
                     <span className="text-sm text-muted-foreground">/ 15 days</span>
                </div>
              </CardHeader>
              <CardContent className="p-5 flex-grow">
                <p className="text-muted-foreground mb-4">
                  Get access to our meals for half a month, perfect for a shorter commitment.
                </p>
                <List className="space-y-2">
                  <ListItem className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0"/>Wide variety of meal choices</ListItem>
                  <ListItem className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0"/>Nutritious and satisfying meals</ListItem>
                  <ListItem className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0"/>Ideal for flexible schedules</ListItem>
                </List>
              </CardContent>
            </Card>

            {/* 10-Day Plan */}
            <Card className="flex flex-col border hover:shadow-lg transition-shadow rounded-lg overflow-hidden">
              <CardHeader className="bg-secondary/30 dark:bg-secondary/5 p-5">
                 <p className="text-xl font-semibold text-primary mb-2">
                  10-Day Plan
                </p>
                 <div className="flex items-baseline space-x-1">
                    <span className="text-4xl font-bold text-foreground">₹1000</span>
                     <span className="text-sm text-muted-foreground">/ 10 days</span>
                </div>
              </CardHeader>
              <CardContent className="p-5 flex-grow">
                <p className="text-muted-foreground mb-4">
                  A short-term plan offering a taste of our healthy and delicious meals.
                </p>
                <List className="space-y-2">
                  <ListItem className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0"/>Sample our best dishes</ListItem>
                  <ListItem className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0"/>Great for trying Campus Cuisine</ListItem>
                  <ListItem className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0"/>Perfect for short-term needs</ListItem>
                 </List>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
