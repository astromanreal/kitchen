"use client";

import { useEffect, useState } from 'react';
import { getStudentReviews, StudentReview } from '@/services/student-reviews';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function StudentReviews() {
  const [reviews, setReviews] = useState<StudentReview[]>([]);

  useEffect(() => {
    const fetchReviews = async () => {
      const fetchedReviews = await getStudentReviews();
      setReviews(fetchedReviews);
    };

    fetchReviews();
  }, []);

  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
      {reviews.map((review, index) => (
        <Card key={index} className="bg-secondary">
          <CardContent className="flex flex-col space-y-2 p-4">
            <div className="flex items-center space-x-4">
              <Avatar className="h-10 w-10">
                <AvatarImage src={`https://picsum.photos/id/${100 + index}/50/50`} alt={review.studentName} />
                <AvatarFallback>{review.studentName.charAt(0)}</AvatarFallback>
              </Avatar>
              <h4 className="font-semibold">{review.studentName}</h4>
            </div>
            <div className="text-sm">
              Rating: {'★'.repeat(review.rating)}
            </div>
            <p className="text-sm text-muted-foreground">{review.reviewText}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

