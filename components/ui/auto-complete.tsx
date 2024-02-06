import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import {Command, CommandEmpty, CommandGroup, CommandInput, CommandItem} from "@/components/ui/command";
import {CheckIcon, SortDescIcon} from "lucide-react";
import {Button} from "@/components/ui/button";
import React, { useEffect } from 'react'
import {cn} from "@/lib/utils";
import { ScrollArea } from '@/components/ui/scroll-area'

export interface AutoCompleteProps {
    values: {value: string, label: string}[]
    onChange: (value: string, label?: string) => void
    value?: string
}

const AutoComplete: React.FC<AutoCompleteProps> = ({values, onChange, value}) => {
    const [open, setOpen] = React.useState(false)
    const [valueState, setValueState] = React.useState(value ?? "")

    // Emit onChange when valueState changes
    useEffect(() => {
        onChange(valueState, values.find((option) => option.value === valueState)?.label)
    }, [valueState]);

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-64 justify-between"
                >
                    {valueState
                        ? values.find((option) => option.value === valueState)?.label
                        : "Select option..."}
                    <SortDescIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-64 p-0">
                <ScrollArea className="flex max-h-48 flex-col" type="always">
                <Command>
                    <CommandInput placeholder="Search options..." className="h-9" />
                    <CommandEmpty>No option found.</CommandEmpty>
                    <CommandGroup>
                        {values.map((option) => (
                            <CommandItem
                                key={option.value}
                                value={option.value}
                                onSelect={(currentValue) => {
                                    setValueState(currentValue === valueState ? "" : currentValue)
                                    setOpen(false)
                                }}
                            >
                                {option.label}
                                <CheckIcon
                                    className={cn(
                                        "ml-auto h-4 w-4",
                                      valueState === option.value ? "opacity-100" : "opacity-0"
                                    )}
                                />
                            </CommandItem>
                        ))}
                    </CommandGroup>
                </Command>
                </ScrollArea>
            </PopoverContent>
        </Popover>
    )
}

export {AutoComplete}