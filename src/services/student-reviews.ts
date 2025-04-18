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
      studentName: 'Alice Smith',
      reviewText: 'Great food and convenient location! The staff is always friendly and helpful.',
      rating: 5,
    },
    {
      studentName: 'Bob Johnson',
      reviewText: 'The menu is diverse and the prices are reasonable. I especially love the vegetarian options.',
      rating: 4,
    },
    {
      studentName: 'Charlie Brown',
      reviewText: 'I appreciate the healthy choices available. It\'s great to have nutritious meals on campus.',
      rating: 5,
    },
    {
      studentName: 'Diana Lee',
      reviewText: 'The food is consistently good, and the service is quick. Perfect for a busy student!',
      rating: 4,
    },
    {
      studentName: 'Ethan White',
      reviewText: 'I\'m impressed with the quality and taste of the meals. Definitely worth the price!',
      rating: 5,
    },
  ];
}

