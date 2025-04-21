/**
 * Represents a student review.
 */
export interface StudentReview {
  /**
   * The name of the student who wrote the review.
   */
  studentName: string;
  /**
   * The review text.
   */
  reviewText: string;
  /**
   * The rating given by the student (e.g., 1 to 5 stars).
   */
  rating: number;
}

/**
 * Asynchronously retrieves student reviews.
 *
 * @returns A promise that resolves to an array of StudentReview objects.
 */
export async function getStudentReviews(): Promise<StudentReview[]> {
  // TODO: Implement this by calling an API.

  return [
    {
      studentName: 'Aarav Sharma',
      reviewText: 'Campus Cuisine is a lifesaver! Delicious and healthy meals that fit my busy schedule. Highly recommended!',
      rating: 5,
    },
    {
      studentName: 'Priya Patel',
      reviewText: 'I love the variety of vegetarian options. The food is always fresh and flavorful.',
      rating: 4,
    },
    {
      studentName: 'Aryan Verma',
      reviewText: 'Affordable and tasty! It\'s great to have a place on campus that cares about student nutrition.',
      rating: 5,
    },
    {
      studentName: 'Diya Singh',
      reviewText: 'The quick service is perfect for my hectic days. The food is consistently good and satisfying.',
      rating: 4,
    },
    {
      studentName: ' Rohan Gupta',
      reviewText: 'Impressed with the quality and taste. The meals are worth every rupee!',
      rating: 5,
    },
  ];
}


