"use client";

import Image from 'next/image';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";

const ContactPerson = ({ name, imageUrl, phone, description, quote }: { name: string, imageUrl: string, phone: string, description: string, quote: string }) => (
  <Card className="shadow-md rounded-lg overflow-hidden">
    <CardHeader className="py-4 px-5 bg-secondary">
      <CardTitle className="text-lg font-semibold">{name}</CardTitle>
      <CardDescription className="text-sm text-muted-foreground">{description}</CardDescription>
    </CardHeader>
    <CardContent className="flex flex-col items-center p-4">
      <Image
        src={imageUrl}
        alt={name}
        width={100}
        height={100}
        className="rounded-full mb-3 object-cover"
      />
      <p className="text-center text-gray-700 mb-2 text-lg">"{quote}"</p>
      <p className="text-sm text-gray-500">Phone: {phone}</p>
    </CardContent>
  </Card>
);

export default function ContactPage() {
  const imageUrl = "https://picsum.photos/id/237/200/200"; // Centralized image URL

  return (
    <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <ContactPerson
          name="Abhijit Singh"
          imageUrl={imageUrl}
          phone="123-456-7890"
          description="Owner"
          quote="“Our commitment is to nourish not just bodies, but minds, with meals crafted for the unique needs of students.”"
        />
        <ContactPerson
          name="Sarthak"
          imageUrl={imageUrl}
          phone="987-654-3210"
          description="Restaurant Manager"
          quote="“We believe that a well-fed student is a successful student. That’s why we pour our passion into every dish, ensuring it’s both delicious and nutritious.”"
        />
        <ContactPerson
          name="Pavan Pandey"
          imageUrl={imageUrl}
          phone="555-123-4567"
          description="CEO"
          quote="“Innovating nutrition, one meal at a time, to support the vibrant campus community and fuel the next generation of leaders.”"
        />
      </div>
    </div>
  );
}
