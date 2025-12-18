"use client"

import * as React from "react"
import { Check, ChevronsUpDown, Globe } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const languages = [
    { label: "English", value: "en" },
    { label: "Spanish", value: "es" },
    { label: "French", value: "fr" },
    { label: "Italian", value: "it" },
]

interface LanguageSelectorProps {
    value: string;
    onChange: (value: string) => void;
}

export function LanguageSelector({ value, onChange }: LanguageSelectorProps) {
    const selectedLanguage = languages.find((lang) => lang.value === value)

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    className="w-[200px] justify-between"
                >
                    <div className="flex items-center gap-2">
                        <Globe className="h-4 w-4 opacity-50" />
                        {selectedLanguage?.label || "Select language"}
                    </div>
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[200px]">
                {languages.map((language) => (
                    <DropdownMenuItem
                        key={language.value}
                        onSelect={() => onChange(language.value)}
                        className="flex items-center justify-between"
                    >
                        <span className="flex items-center gap-2">
                            {language.label}
                        </span>
                        {value === language.value && (
                            <Check className="h-4 w-4 ml-auto" />
                        )}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
