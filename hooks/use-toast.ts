"use client";

import { useState, useCallback } from "react";

export interface ToastMessage {
  id: string;
  title: string;
  description?: string;
  type?: "success" | "info" | "warning" | "error";
}

let listeners: Array<(toasts: ToastMessage[]) => void> = [];
let memoryToasts: ToastMessage[] = [];

function notifyListeners() {
  listeners.forEach((listener) => listener([...memoryToasts]));
}

export function toast(message: Omit<ToastMessage, "id">) {
  const id = Math.random().toString(36).substring(2, 9);
  const newToast: ToastMessage = { id, ...message };
  memoryToasts = [newToast, ...memoryToasts.slice(0, 4)];
  notifyListeners();

  setTimeout(() => {
    memoryToasts = memoryToasts.filter((t) => t.id !== id);
    notifyListeners();
  }, 4000);
}

export function useToast() {
  const [toasts, setToasts] = useState<ToastMessage[]>(memoryToasts);

  const subscribe = useCallback(() => {
    listeners.push(setToasts);
    return () => {
      listeners = listeners.filter((l) => l !== setToasts);
    };
  }, []);

  useState(() => {
    const unsubscribe = subscribe();
    return () => unsubscribe();
  });

  const dismiss = useCallback((id: string) => {
    memoryToasts = memoryToasts.filter((t) => t.id !== id);
    notifyListeners();
  }, []);

  return { toasts, toast, dismiss };
}
