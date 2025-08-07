import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ChatDashboard() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Card className="shadow-lg border-0 bg-white">
          <CardHeader className="space-y-2 text-center pb-6">
            <CardTitle className="text-3xl font-bold text-gray-900">
              VoltaChat
            </CardTitle>
            <CardDescription className="text-gray-600">
              Connect, chat, and collaborate with ease
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            <div className="space-y-3">
              <Link to="/login" className="block">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 rounded-lg transition-colors duration-200">
                  Login
                </Button>
              </Link>

              <Link to="/signup" className="block">
                <Button
                  variant="outline"
                  className="w-full border-gray-300 hover:bg-gray-50 text-gray-700 font-medium py-2.5 rounded-lg transition-colors duration-200"
                >
                  Sign Up
                </Button>
              </Link>
            </div>

            <div className="text-center pt-4">
              <p className="text-xs text-gray-500">
                Experience seamless communication with VoltaChat
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
