"use client";

import React, { useState } from "react";
import { Mail, ArrowRight, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function EarlyAccessSection({ isDarkMode }) {
  const [email, setEmail] = useState("");
  const [isEmailSubmitted, setIsEmailSubmitted] = useState(false);

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    setIsEmailSubmitted(true);
    fetch("https://api.joinus.team/v1/subscriber", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        payload: {
          email: email,
          product: "AI-Powered Conversations",
        },
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <section
      className={`py-20 relative ${isDarkMode ? "bg-gray-900" : "bg-gray-50"}`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-800/10 pointer-events-none" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          <div className="lg:w-1/2 space-y-8">
            <h2
              className={`text-4xl font-bold leading-tight ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Be the First to Experience AI-Powered Conversations
            </h2>
            <p
              className={`text-xl ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Join our exclusive waitlist and get early access to revolutionary
              AI voices and features that will transform your phone
              interactions.
            </p>
            <ul
              className={`space-y-4 ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              <li className="flex items-center">
                <Sparkles className="w-6 h-6 mr-3 text-yellow-500" />
                <span>Priority access to new AI voices</span>
              </li>
              <li className="flex items-center">
                <Sparkles className="w-6 h-6 mr-3 text-yellow-500" />
                <span>Exclusive beta testing opportunities</span>
              </li>
              <li className="flex items-center">
                <Sparkles className="w-6 h-6 mr-3 text-yellow-500" />
                <span>Special discounts for early adopters</span>
              </li>
            </ul>
          </div>
          <div className="lg:w-1/2 w-full max-w-md">
            <Card
              className={`overflow-hidden shadow-xl ${
                isDarkMode
                  ? "bg-gray-800 border-gray-700"
                  : "bg-white border-gray-200"
              }`}
            >
              <div className="h-2 bg-gradient-to-r from-purple-600 to-pink-600" />
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-br from-purple-400 to-pink-600 flex items-center justify-center">
                    <Mail className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3
                      className={`text-2xl font-semibold ${
                        isDarkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      Get Early Access
                    </h3>
                    <p
                      className={`mt-1 text-sm ${
                        isDarkMode ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      Be the first to know when we launch
                    </p>
                  </div>
                </div>

                {!isEmailSubmitted ? (
                  <form onSubmit={handleEmailSubmit} className="space-y-6">
                    <div className="relative">
                      <Input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className={`pr-28 py-6 text-lg ${
                          isDarkMode
                            ? "bg-gray-700 text-white focus-visible:ring-0"
                            : "bg-white text-black focus-visible:ring-0"
                        }`}
                      />
                      <Button
                        type="submit"
                        className="absolute right-1 top-1 bottom-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 px-6"
                      >
                        Join
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </Button>
                    </div>
                  </form>
                ) : (
                  <div
                    className={`p-6 rounded-lg ${
                      isDarkMode ? "bg-gray-700" : "bg-purple-50"
                    }`}
                  >
                    <p
                      className={`text-center font-medium text-lg ${
                        isDarkMode ? "text-purple-300" : "text-purple-700"
                      }`}
                    >
                      Thanks for joining! We&apos;ll keep you updated.
                    </p>
                  </div>
                )}

                <p
                  className={`mt-6 text-sm text-center ${
                    isDarkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  By joining, you agree to our Terms of Service and Privacy
                  Policy
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
