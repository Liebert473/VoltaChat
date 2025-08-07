import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { supabase } from "./lib/supabaseClient"; // Your Supabase client from the previous step
import type { Session } from "@supabase/supabase-js";
import LoginPage from "./components/LoginPage"; // Your login page component
import SignupPage from "./components/SignupPage"; // Your signup page component
import ChatDashboard from "./components/ChatDashboard"; // Your main chat dashboard component

// A component that checks for an authenticated user
const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
    });

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session);
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Or a more stylized loading spinner
  }

  // Check for the session state here
  return session ? children : <Navigate to="/login" />;
};

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <ChatDashboard />
            </ProtectedRoute>
          }
        />
        {/* Redirect any other path to the login page if not logged in */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
