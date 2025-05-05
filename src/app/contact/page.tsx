"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Twitter, Instagram, Phone, Mail } from "lucide-react";
import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-8 flex justify-center items-center min-h-[calc(100vh-4rem)]">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="text-center bg-secondary">
          <CardTitle className="text-2xl font-bold">Get in Touch</CardTitle>
        </CardHeader>
        <CardContent className="p-6 space-y-4">
          <div className="flex items-center space-x-3">
            <Twitter className="h-6 w-6 text-primary" />
            <Link href="https://x.com/Sathyamsarthak" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary hover:underline">
              x.com/Sathyamsarthak
            </Link>
          </div>
          <div className="flex items-center space-x-3">
            <Instagram className="h-6 w-6 text-primary" />
            <Link href="https://www.instagram.com/srishikharji/" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary hover:underline">
              instagram.com/srishikharji
            </Link>
          </div>
          <div className="flex items-center space-x-3">
            <Phone className="h-6 w-6 text-primary" />
            <a href="tel:+918102116569" className="text-foreground hover:text-primary hover:underline">
              +91 8102116569
            </a>
          </div>
          <div className="flex items-center space-x-3">
            <Mail className="h-6 w-6 text-primary" />
            <a href="mailto:Astroman6569@gmail.com" className="text-foreground hover:text-primary hover:underline">
              Astroman6569@gmail.com
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}