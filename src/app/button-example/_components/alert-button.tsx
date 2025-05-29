"use client";

import { Button } from "@/components/ui/button";
import { useCallback } from "react";

export default function AlertButton() {
  const handleAlert = useCallback(() => {
    alert("This is an alert message!");
  }, []);

  return (
    <div className="flex flex-col items-center justify-center p-8 gap-6">
      <h2 className="text-xl font-semibold mb-4">Alert Button Example</h2>
      <Button onClick={handleAlert}>Show Alert</Button>
    </div>
  );
}
