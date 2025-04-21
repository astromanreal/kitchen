"use client";

import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {List, ListItem} from "@/components/ui/list";

export default function PricingPage() {
  return (
    <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <Card className="shadow-md">
        <CardHeader className="bg-secondary">
          <CardTitle className="text-2xl font-bold">Pricing</CardTitle>
          <CardDescription className="text-muted-foreground">
            Simple and affordable meal plans to fuel your campus life.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-md bg-accent p-4">
            <p className="text-lg text-accent-foreground font-semibold">
              "Good food is wise medicine." - Let us take care of the food, so you can focus on your studies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Monthly Plan */}
            <div className="space-y-2">
              <p className="text-xl font-semibold">
                Monthly Plan:
              </p>
              <div className="flex items-center space-x-2">
                <span className="text-3xl font-bold">₹3000</span>
                <Badge variant="outline">Most Popular</Badge>
              </div>
              <p className="text-muted-foreground">
                Enjoy unlimited access to our delicious and nutritious meals every day for a month.
              </p>
              <List>
                <ListItem>Balanced and diverse menu options</ListItem>
                <ListItem>Prepared with fresh, high-quality ingredients</ListItem>
                <ListItem>Conveniently available on campus</ListItem>
              </List>
            </div>

            {/* Half-Monthly Plan */}
            <div className="space-y-2">
              <p className="text-xl font-semibold">
                Half-Monthly Plan:
              </p>
              <div className="flex items-center space-x-2">
                <span className="text-3xl font-bold">₹1500</span>
              </div>
              <p className="text-muted-foreground">
                Get access to our meals for half a month, perfect for a shorter commitment.
              </p>
              <List>
                <ListItem>Wide variety of meal choices</ListItem>
                <ListItem>Nutritious and satisfying meals</ListItem>
                <ListItem>Ideal for students with flexible schedules</ListItem>
              </List>
            </div>

            {/* 10-Day Plan */}
            <div className="space-y-2">
              <p className="text-xl font-semibold">
                10-Day Plan:
              </p>
              <div className="flex items-center space-x-2">
                <span className="text-3xl font-bold">₹1000</span>
              </div>
              <p className="text-muted-foreground">
                A short-term plan offering a taste of our healthy and delicious meals.
              </p>
              <List>
                <ListItem>Sample our best dishes</ListItem>
                <ListItem>Great for trying out Campus Cuisine</ListItem>
                <ListItem>Perfect for students needing a temporary meal solution</ListItem>
              </List>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
