"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Sun, Moon, Laptop, Palette, Text } from "lucide-react";

// Define predefined accent colors (HSL format for ShadCN)
const accentColors = [
  { name: "Default Green", value: "214 71% 72%" }, // Original primary color
  { name: "Blue", value: "221 83% 53%" },
  { name: "Orange", value: "25 95% 53%" },
  { name: "Rose", value: "347 90% 59%" },
  { name: "Violet", value: "262 84% 58%" },
];

// Define font size options
const fontSizes = [
  { name: "Small", value: "text-sm" },
  { name: "Medium", value: "text-base" },
  { name: "Large", value: "text-lg" },
];

export default function SettingsPage() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [selectedAccent, setSelectedAccent] = useState<string | null>(null);
  const [selectedFontSize, setSelectedFontSize] = useState<string | null>(null);

  // Load settings from localStorage on mount
  useEffect(() => {
    setMounted(true);
    const storedAccent = localStorage.getItem("accentColor");
    const storedFontSize = localStorage.getItem("fontSizeClass");

    if (storedAccent) {
      setSelectedAccent(storedAccent);
      document.documentElement.style.setProperty('--primary', storedAccent);
    } else {
       // Set default if nothing is stored
       setSelectedAccent(accentColors[0].value);
    }

    if (storedFontSize) {
      setSelectedFontSize(storedFontSize);
      document.documentElement.classList.remove("text-sm", "text-base", "text-lg"); // Remove existing
      document.documentElement.classList.add(storedFontSize);
    } else {
        // Set default if nothing is stored
        setSelectedFontSize(fontSizes[1].value); // Medium
        document.documentElement.classList.add(fontSizes[1].value);
    }
  }, []);

  // Handle theme change
  const handleThemeChange = (value: string) => {
    setTheme(value);
  };

  // Handle accent color change
  const handleAccentChange = (value: string) => {
    setSelectedAccent(value);
    document.documentElement.style.setProperty('--primary', value);
    localStorage.setItem("accentColor", value);
  };

   // Handle font size change
  const handleFontSizeChange = (value: string) => {
    setSelectedFontSize(value);
    // Remove previous font size classes before adding the new one
    document.documentElement.classList.remove("text-sm", "text-base", "text-lg");
    document.documentElement.classList.add(value);
    localStorage.setItem("fontSizeClass", value);
  };

  if (!mounted) {
    // Avoid rendering potentially mismatched content on the server
    return (
       <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-8 flex justify-center items-center min-h-[calc(100vh-4rem)]">
         <Card className="w-full max-w-lg shadow-lg border">
           <CardHeader className="text-center bg-secondary/30 dark:bg-secondary/10">
             <CardTitle className="text-2xl font-bold text-primary">Settings</CardTitle>
             <CardDescription>Loading settings...</CardDescription>
           </CardHeader>
           <CardContent className="p-6 space-y-6">
             <div className="animate-pulse space-y-4">
               <div className="h-8 bg-muted rounded w-1/3"></div>
               <div className="h-10 bg-muted rounded w-full"></div>
               <div className="h-8 bg-muted rounded w-1/3"></div>
               <div className="h-16 bg-muted rounded w-full"></div>
               <div className="h-8 bg-muted rounded w-1/3"></div>
               <div className="h-10 bg-muted rounded w-full"></div>
             </div>
           </CardContent>
         </Card>
       </div>
    );
  }

  return (
    <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-8 flex justify-center items-start min-h-[calc(100vh-4rem)]">
      <Card className="w-full max-w-lg shadow-lg border border-border">
        <CardHeader className="text-center bg-secondary/30 dark:bg-secondary/10">
          <CardTitle className="text-2xl font-bold text-primary flex items-center justify-center gap-2">
             <Text className="h-6 w-6"/> Application Settings
          </CardTitle>
           <CardDescription>Customize the look and feel of the application.</CardDescription>
        </CardHeader>
        <CardContent className="p-6 space-y-8">
          {/* Theme Selection */}
          <div className="space-y-3">
             <Label className="text-lg font-semibold flex items-center gap-2"><Sun className="h-5 w-5"/> Theme</Label>
            <RadioGroup
              value={theme}
              onValueChange={handleThemeChange}
              className="grid grid-cols-3 gap-4"
            >
              <Label htmlFor="light-theme" className="flex flex-col items-center justify-center rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary cursor-pointer">
                 <RadioGroupItem value="light" id="light-theme" className="sr-only" />
                 <Sun className="mb-3 h-6 w-6" />
                 Light
              </Label>
              <Label htmlFor="dark-theme" className="flex flex-col items-center justify-center rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary cursor-pointer">
                <RadioGroupItem value="dark" id="dark-theme" className="sr-only" />
                 <Moon className="mb-3 h-6 w-6" />
                Dark
              </Label>
               <Label htmlFor="system-theme" className="flex flex-col items-center justify-center rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary cursor-pointer">
                 <RadioGroupItem value="system" id="system-theme" className="sr-only" />
                 <Laptop className="mb-3 h-6 w-6" />
                 System
               </Label>
            </RadioGroup>
          </div>

          {/* Accent Color Selection */}
          <div className="space-y-3">
            <Label className="text-lg font-semibold flex items-center gap-2"><Palette className="h-5 w-5"/> Accent Color</Label>
            <RadioGroup
              value={selectedAccent ?? ''}
              onValueChange={handleAccentChange}
              className="grid grid-cols-3 sm:grid-cols-5 gap-3"
            >
              {accentColors.map((color) => (
                <Label key={color.value} htmlFor={`accent-${color.name.toLowerCase()}`} className="relative flex flex-col items-center justify-center rounded-md border-2 border-muted bg-popover p-2 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary cursor-pointer aspect-square">
                   <RadioGroupItem value={color.value} id={`accent-${color.name.toLowerCase()}`} className="sr-only" />
                   <span
                      className="block w-8 h-8 rounded-full mb-1 border"
                      style={{ backgroundColor: `hsl(${color.value})` }}
                    ></span>
                   <span className="text-xs text-center">{color.name}</span>
                </Label>
              ))}
            </RadioGroup>
          </div>

          {/* Font Size Selection */}
           <div className="space-y-3">
             <Label className="text-lg font-semibold flex items-center gap-2"><Text className="h-5 w-5"/> Font Size</Label>
             <RadioGroup
               value={selectedFontSize ?? ''}
               onValueChange={handleFontSizeChange}
               className="grid grid-cols-3 gap-4"
             >
               {fontSizes.map((size) => (
                 <Label key={size.value} htmlFor={`font-${size.name.toLowerCase()}`} className="flex flex-col items-center justify-center rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary cursor-pointer">
                   <RadioGroupItem value={size.value} id={`font-${size.name.toLowerCase()}`} className="sr-only" />
                   <Text className="mb-3 h-6 w-6" /> {/* Consider different sizes? */}
                   {size.name}
                 </Label>
               ))}
             </RadioGroup>
           </div>

        </CardContent>
      </Card>
    </div>
  );
}
