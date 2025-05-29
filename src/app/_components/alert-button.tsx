"use client";

import { Button } from "@/components/ui/button";
import { useCallback } from "react";

export default function AlertButton() {
  const handleAlert = useCallback(() => {
    alert("This is an alert message!");
  }, []);

  return <Button onClick={handleAlert}>Show Alert</Button>;
}
