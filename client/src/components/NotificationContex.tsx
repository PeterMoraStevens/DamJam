import React, {
  createContext,
  useContext,
  useState,
  useRef,
  useEffect,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Alert, AlertTitle } from "../components/ui/alert";
import { Button } from "../components/ui/button";
import { Progress } from "../components/ui/progress";
import { FaRegTrashAlt } from "react-icons/fa";

const NotificationContext = createContext({
  showNotification: (message: string) => {}, // Default function
});

export const useNotification = () => useContext(NotificationContext);

export const NotificationProvider = ({ children }: any) => {
  const [notification, setNotification] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const showNotification = (message: string) => {
    setNotification(message);
    setProgress(0); // Reset progress

    // Clear existing timers to avoid stacking
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (intervalRef.current) clearInterval(intervalRef.current);

    // Start progress animation (updates every 50ms for a smooth effect)
    intervalRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(intervalRef.current!);
          return 100;
        }
        return prev + 1;
      });
    }, 49);

    // Hide notification after 5 seconds
    timeoutRef.current = setTimeout(() => {
      setNotification(null);
      setProgress(0);
      clearInterval(intervalRef.current!);
      timeoutRef.current = null;
      intervalRef.current = null;
    }, 5000);
  };

  const dismissNotification = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (intervalRef.current) clearInterval(intervalRef.current);

    setNotification(null);
    setProgress(0);
  };

  return (
    <NotificationContext.Provider value={{ showNotification }}>
      {children}

      <AnimatePresence>
        {notification && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-4 right-4 p-4 rounded-lg items-center gap-2"
          >
            <Alert className="shadow-0 rounded-none rounded-t-lg">
              <AlertTitle className="mr-8 flex overflow-visible text-wrap break-words">
                {notification}
              </AlertTitle>
              <Button
                onClick={dismissNotification}
                size="icon"
                variant="noShadow"
                className="absolute top-2 right-2 h-8 w-8 bg-secondary-background text-foreground"
              >
                <FaRegTrashAlt />
              </Button>
            </Alert>
            <Progress
              className="w-full rounded-none rounded-b-lg"
              value={progress}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </NotificationContext.Provider>
  );
};
