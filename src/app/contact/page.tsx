"use client";

import Image from 'next/image';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";

const ContactPerson = ({ name, imageUrl, phone, description }: { name: string, imageUrl: string, phone: string, description: string }) => (
  <Card>
    <CardHeader>
      <CardTitle>{name}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
    <CardContent className="flex flex-col items-center">
      <Image
        src={imageUrl}
        alt={name}
        width={150}
        height={150}
        className="rounded-full mb-4"
      />
      <p>Phone: {phone}</p>
    </CardContent>
  </Card>
);

export default function ContactPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-8 text-center">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <ContactPerson
          name="John Doe"
          imageUrl="https://picsum.photos/id/237/200/200"
          phone="123-456-7890"
          description="Head Chef"
        />
        <ContactPerson
          name="Jane Smith"
          imageUrl="https://picsum.photos/id/1027/200/200"
          phone="987-654-3210"
          description="Restaurant Manager"
        />
        <ContactPerson
          name="Mike Brown"
          imageUrl="https://picsum.photos/id/1005/200/200"
          phone="555-123-4567"
          description="Customer Service"
        />
      </div>
    </div>
  );
}
