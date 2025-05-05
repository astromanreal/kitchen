"use client";

import { useEffect, useState } from 'react';
import { getStudentReviews, StudentReview } from '@/services/student-reviews';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from 'lucide-react';
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
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {reviews.map((review, index) => (
        <Card key={index} className="bg-card border shadow-sm hover:shadow-md transition-shadow duration-300 rounded-lg overflow-hidden">
          <CardContent className="p-6 flex flex-col space-y-4">
            <div className="flex items-center space-x-4">
              <Avatar className="h-12 w-12 border-2 border-primary">
                <AvatarImage
                  data-ai-hint="student avatar"
                  src={`https://picsum.photos/seed/${review.studentName.replace(' ','')}/64/64`} // Use seed for consistent images
                  alt={review.studentName} />
                <AvatarFallback className="text-lg font-semibold bg-muted text-muted-foreground">
                    {review.studentName.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <div>
                 <h4 className="font-semibold text-lg text-foreground">{review.studentName}</h4>
                 {/* Optional: Add a course or year */}
                 {/* <p className="text-xs text-muted-foreground">Master's Student</p> */}
              </div>
            </div>
            <div className="flex items-center">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={cn(
                    "h-5 w-5",
                    i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-muted-foreground"
                  )}
                />
              ))}
               <span className="ml-2 text-sm text-muted-foreground">({review.rating}/5)</span>
            </div>
            <blockquote className="text-sm text-foreground italic border-l-4 border-primary pl-4 py-2 bg-secondary/30 rounded-r-md">
              "{review.reviewText}"
            </blockquote>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
