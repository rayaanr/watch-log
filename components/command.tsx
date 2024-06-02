"use client";

import { SearchIcon } from "@/assets/icons";
import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/divider";
import { Input } from "@nextui-org/input";
import { Kbd } from "@nextui-org/kbd";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    useDisclosure,
} from "@nextui-org/modal";
import { useEffect, useState } from "react";

export default function SearchCommand() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [input, setInput] = useState("");

    // Open the modal, on command + k
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.ctrlKey || e.metaKey)) {
                onOpen();
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [onOpen]);

    return (
        <>
            {/* prettier-ignore */}
            <Button
                aria-label="Search" variant="flat" onPress={onOpen}
                startContent={<SearchIcon className="text-default-400 flex-shrink-0 size-5" />}
                endContent={<Kbd className="hidden lg:inline-block ms-24 text-xs" keys={["command"]}>K</Kbd>}
                className="text-sm text-default-400"
            >
                Search...
            </Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} hideCloseButton>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="p-0">
                                {/* prettier-ignore */}
                                <Input
                                    startContent={<SearchIcon className="text-default-400" />}
                                    endContent={<Kbd className="hidden lg:inline-block text-xs">ESC</Kbd>}
                                    placeholder="Search Movies" variant="bordered"
                                    className="px-2 py-1 text-lg" size="lg"
                                    classNames={{inputWrapper: "border-none"}}
                                    value={input} onChange={(e) => setInput(e.target.value)}
                                />
                            </ModalHeader>
                            <Divider />
                            <ModalBody>
                                <p>
                                    Magna exercitation reprehenderit magna aute tempor cupidatat
                                    consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex
                                    incididunt cillum quis. Velit duis sit officia eiusmod Lorem
                                    aliqua enim laboris do dolor eiusmod. Et mollit incididunt nisi
                                    consectetur esse laborum eiusmod pariatur proident Lorem eiusmod
                                    et. Culpa deserunt nostrud ad veniam.
                                </p>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Close
                                </Button>
                                <Button color="primary" onPress={onClose}>
                                    Action
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
