"use client";

import React, { useState } from "react";
import {
  Phone,
  Star,
  Sun,
  Moon,
  Github,
  Linkedin,
  Settings,
  PhoneIncoming,
  PhoneOff,
} from "lucide-react";
import { Card, CardContent } from "@/components/card";
import { Button } from "@/components/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/dialog";
import { Input } from "@/components/input";
import { Textarea } from "@/components/textarea";
import { Alert, AlertDescription } from "@/components/alert";

const characters = [
  {
    id: 1,
    name: "Supportive Friend",
    description:
      "Someone who listens, understands, and offers genuine companionship",
    icon: "🤗",
    color: "from-blue-400 to-blue-600",
    tags: ["Emotional Support", "Casual Chat"],
  },
  {
    id: 2,
    name: "Life Coach",
    description: "Guidance for personal growth and achieving your goals",
    icon: "🎯",
    color: "from-purple-400 to-purple-600",
    tags: ["Motivation", "Planning"],
  },
  {
    id: 3,
    name: "English Tutor",
    description: "Natural conversation practice with a patient language expert",
    icon: "📚",
    color: "from-green-400 to-green-600",
    tags: ["Language", "Education"],
  },
  {
    id: 4,
    name: "Career Mentor",
    description:
      "Professional guidance for career development and workplace challenges",
    icon: "💼",
    color: "from-yellow-400 to-yellow-600",
    tags: ["Professional", "Career"],
  },
  {
    id: 5,
    name: "Meditation Guide",
    description: "Calming voice for mindfulness and relaxation sessions",
    icon: "🧘",
    color: "from-teal-400 to-teal-600",
    tags: ["Wellness", "Mindfulness"],
  },
  {
    id: 6,
    name: "Creative Partner",
    description: "Brainstorm ideas and explore creative possibilities together",
    icon: "🎨",
    color: "from-pink-400 to-pink-600",
    tags: ["Creativity", "Ideation"],
  },
];

export default function LandingPage() {
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCustomCharacter, setIsCustomCharacter] = useState(false);
  const [customCharacterTask, setCustomCharacterTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleCharacterSelect = (character) => {
    if (character === "custom") {
      setIsCustomCharacter(true);
      setSelectedCharacter(null);
    } else {
      setIsCustomCharacter(false);
      setSelectedCharacter(character);
    }
  };

  const handleCustomCharacterSubmit = (e) => {
    e.preventDefault();
    setSelectedCharacter({
      id: "custom",
      name: "Custom AI",
      description: customCharacterTask,
      icon: "🤖",
      color: "from-gray-400 to-gray-600",
      tags: ["Custom"],
    });
    setIsCustomCharacter(false);
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-200 ${
        isDarkMode
          ? "bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800"
          : "bg-gradient-to-br from-gray-50 via-gray-50 to-blue-50"
      } `}
    >
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute top-20 left-10 w-64 h-64 rounded-full blur-3xl opacity-30 ${
            isDarkMode ? "bg-blue-900" : "bg-blue-100"
          }`}
        />
        <div
          className={`absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl opacity-30 ${
            isDarkMode ? "bg-purple-900" : "bg-purple-100"
          }`}
        />
      </div>

      <div className="flex justify-end pt-5 pr-5">
        <button
          onClick={toggleDarkMode}
          className={`p-3 rounded-full transition-colors duration-200 ${
            isDarkMode
              ? "bg-gray-800 text-yellow-500 hover:bg-gray-700"
              : "bg-white text-gray-800 hover:bg-gray-100"
          } shadow-lg`}
        >
          {isDarkMode ? (
            <Sun className="w-5 h-5" />
          ) : (
            <Moon className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Hero Section */}
      <div className="relative">
        <div className="container mx-auto px-6 pt-16 pb-12">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-block mb-6">
              <div
                className={`flex items-center gap-2 px-4 py-2 rounded-full border ${
                  isDarkMode
                    ? "bg-gray-800/80 backdrop-blur-sm border-gray-700 text-gray-200"
                    : "bg-white/80 backdrop-blur-sm border-gray-200 text-gray-800"
                }`}
              >
                <Star className="w-4 h-4 text-yellow-500" />
                <span className="text-sm font-medium">
                  AI-Powered Phone Conversations
                </span>
              </div>
            </div>
            <h1
              className={`text-4xl md:text-5xl font-bold mb-6 ${
                isDarkMode
                  ? "text-white"
                  : "bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent"
              } font-[family-name:var(--font-supreme-bold)]`}
            >
              Talk to AI Characters on Your Phone
            </h1>
            <p
              className={`text-xl mb-8 ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Experience engaging phone conversations with AI personalities
              tailored to your needs
            </p>

            {/* Incoming Call Card */}
            <Card
              className={`max-w-sm mx-auto ${
                isDarkMode
                  ? "bg-gray-800 border-gray-700"
                  : "bg-white border-gray-200"
              }`}
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white text-2xl">
                      🤖
                    </div>
                    <div className="text-left">
                      <p
                        className={`font-semibold ${
                          isDarkMode ? "text-white" : "text-gray-900"
                        }`}
                      >
                        AI Companion
                      </p>
                      <p
                        className={`text-sm ${
                          isDarkMode ? "text-gray-400" : "text-gray-500"
                        }`}
                      >
                        Incoming call...
                      </p>
                    </div>
                  </div>
                  <PhoneIncoming
                    className={`w-6 h-6 ${
                      isDarkMode ? "text-green-400" : "text-green-500"
                    } animate-pulse`}
                  />
                </div>
                <div className="flex justify-center space-x-4">
                  <Button className="rounded-full bg-red-500 w-12 h-12">
                    <PhoneOff className="w-6 h-6 text-white" />
                  </Button>
                  <Button className="rounded-full w-12 h-12 bg-green-500 hover:bg-green-600">
                    <Phone className="w-6 h-6 text-white" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 pb-20">
        <div className="grid lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {/* Character Selection */}
          <div className="lg:col-span-3">
            <h3
              className={`text-xl font-semibold mb-6 ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Choose Your AI Conversation Partner
            </h3>
            <div className="flex flex-wrap gap-2 mb-6 ">
              {characters.map((character) => (
                <Button
                  key={character.id}
                  variant={
                    selectedCharacter?.id === character.id
                      ? "default"
                      : "outline"
                  }
                  onClick={() => handleCharacterSelect(character)}
                  className={`rounded-full ${
                    isDarkMode
                      ? "bg-black text-white"
                      : "bg-white text-black border"
                  }
                    ${
                      selectedCharacter?.id === character.id
                        ? "bg-[#4B4851] text-white"
                        : ""
                    }
                   `}
                >
                  {character.icon} {character.name}
                </Button>
              ))}
              <Button
                variant={isCustomCharacter ? "default" : "outline"}
                onClick={() => handleCharacterSelect("custom")}
                className={`rounded-full ${
                  isDarkMode
                    ? "bg-black text-white"
                    : "bg-white text-black border"
                }
                 ${isCustomCharacter ? "bg-[#4B4851] text-white" : ""}
                 `}
              >
                <Settings className="w-4 h-4" /> Custom
              </Button>
            </div>

            {!selectedCharacter && !isCustomCharacter && (
              <Alert>
                <AlertDescription>
                  Please select an AI character or create a custom one to start
                  your phone conversation.
                </AlertDescription>
              </Alert>
            )}

            {isCustomCharacter && (
              <Card
                className={`${
                  isDarkMode
                    ? "bg-gray-800 border-gray-700"
                    : "bg-white border-gray-200"
                }`}
              >
                <CardContent className="p-4">
                  <form
                    onSubmit={handleCustomCharacterSubmit}
                    className="space-y-4"
                  >
                    <div>
                      <label
                        htmlFor="customTask"
                        className={`block text-sm font-medium ${
                          isDarkMode ? "text-gray-300" : "text-gray-700"
                        } mb-3`}
                      >
                        Explain the AI&apos;s task or how it should talk
                      </label>
                      <Textarea
                        id="customTask"
                        value={customCharacterTask}
                        onChange={(e) => setCustomCharacterTask(e.target.value)}
                        required
                        className={
                          isDarkMode
                            ? "bg-gray-700 text-white focus-visible:ring-0"
                            : "bg-white focus-visible:ring-0"
                        }
                        placeholder="E.g., Act as a supportive friend who's good at giving advice on work-life balance"
                      />
                    </div>
                    <Button
                      type="submit"
                      className={
                        isDarkMode ? "bg-black text-white" : "bg-gray-700"
                      }
                    >
                      Create Custom AI Character
                    </Button>
                  </form>
                </CardContent>
              </Card>
            )}

            {selectedCharacter && (
              <Card
                className={`${
                  isDarkMode
                    ? "bg-gray-800 border-gray-700"
                    : "bg-white border-gray-200"
                }`}
              >
                <CardContent className="p-4">
                  <div className="flex items-start space-x-4">
                    <div
                      className={`flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br ${selectedCharacter.color} text-white text-2xl flex items-center justify-center`}
                    >
                      {selectedCharacter.icon}
                    </div>
                    <div className="flex-grow">
                      <h3
                        className={`text-lg font-semibold ${
                          isDarkMode ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {selectedCharacter.name}
                      </h3>
                      <p
                        className={`text-sm mt-1 ${
                          isDarkMode ? "text-gray-300" : "text-gray-600"
                        }`}
                      >
                        {selectedCharacter.description}
                      </p>
                      <div className="flex gap-1 flex-wrap mt-2">
                        {selectedCharacter.tags.map((tag) => (
                          <span
                            key={tag}
                            className={`text-xs px-2 py-1 rounded-full ${
                              isDarkMode
                                ? "bg-gray-700 text-gray-300"
                                : "bg-gray-100 text-gray-600"
                            }`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Call Section */}
          <div className="lg:col-span-2">
            <Card
              className={`sticky top-6 ${
                isDarkMode
                  ? "bg-gray-800 border-gray-700"
                  : "bg-white border-gray-200"
              }`}
            >
              <CardContent className="p-8">
                <h3
                  className={`text-2xl font-semibold mb-5 ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  Get Ready for Your AI Call
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      className={`block text-sm font-medium mb-3 ${
                        isDarkMode ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      Your Phone Number
                    </label>
                    <Input
                      type="tel"
                      placeholder="+1 (234) 567-8900"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      required
                      className={
                        isDarkMode
                          ? "bg-gray-700 text-white focus-visible:ring-0"
                          : "bg-white text-black focus-visible:ring-0"
                      }
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={!selectedCharacter || !phoneNumber}
                    className={`w-full bg-black text-white`}
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Receive AI Call
                  </Button>

                  <p
                    className={`text-xs text-center ${
                      isDarkMode ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    By clicking &quot;Receive AI Call&quot;, you agree to our
                    Terms of Service and Privacy Policy
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className={`py-8  ${isDarkMode ? "bg-gray-900" : "bg-gray-100"}`}>
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div
              className={`text-sm ${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              © 2024 AI Companion. All rights reserved.
            </div>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a
                href="https://github.com/amal5haji"
                target="_blank"
                rel="noopener noreferrer"
                className={`${
                  isDarkMode
                    ? "text-gray-400 hover:text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/amal-s-6524b1242/"
                target="_blank"
                rel="noopener noreferrer"
                className={`${
                  isDarkMode
                    ? "text-gray-400 hover:text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent
          className={`sm:max-w-md ${
            isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
          } border-none`}
        >
          <DialogHeader>
            <DialogTitle className="text-2xl">
              Your AI call is on the way!
            </DialogTitle>
            <DialogDescription
              className={`text-lg ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              We&apos;re connecting you with {selectedCharacter?.name}. Please
              answer your phone when it rings.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center items-center py-10">
            <div className="relative">
              <div
                className={`w-20 h-20 border-4 ${
                  isDarkMode ? "border-blue-400" : "border-blue-500"
                } rounded-full animate-ping`}
              />
              <div
                className={`absolute top-0 left-0 w-20 h-20 border-4 ${
                  isDarkMode ? "border-blue-400" : "border-blue-500"
                } rounded-full animate-pulse`}
              />
              <Phone
                className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 ${
                  isDarkMode ? "text-blue-400" : "text-blue-500"
                }`}
              />
            </div>
          </div>
          <div className="text-center">
            <p
              className={`text-sm ${
                isDarkMode ? "text-gray-400" : "text-gray-500"
              }`}
            >
              Estimated wait time: 30 seconds
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
