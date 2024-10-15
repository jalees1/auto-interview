import React from 'react';
import { Bell } from 'lucide-react';
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Navbar() {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white shadow">
      {/* Left Section with HRMS title and Search Input */}
      <div className="flex items-center space-x-8"> {/* Increased space between HRMS and input */}
        {/* HRMS Title */}
        <h1 className="text-2xl font-bold text-blue-600">Auto Interview</h1>

      
        
      </div>

      {/* Right Section with Notification and Avatar */}
      <div className="flex items-center">
        <Button variant="ghost" size="icon" className="mr-2">
          <Bell className="h-5 w-5" />
        </Button>

        {/* Dropdown for User Profile */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-8 w-8 rounded-full">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/avatars/01.png" alt="@recruiter" />
                <AvatarFallback>RC</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent className="w-56" align="end" forceMount>
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">Candidate</p>
                <p className="text-xs leading-none text-muted-foreground">
                  user@example.com
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Log out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}

