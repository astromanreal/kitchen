"use client";

import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";

export default function PricingPage() {
  return (
    <div className="container mx-auto py-10">
      <Card>
        <CardHeader>
          <CardTitle>Pricing</CardTitle>
          <CardDescription>
            Simple and affordable meal plans to fuel your campus life.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-lg">
              "Good food is wise medicine." - Let us take care of the food, so you can focus on your studies.
            </p>
            <p className="text-2xl font-semibold">
              Monthly Plan: $3000
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
