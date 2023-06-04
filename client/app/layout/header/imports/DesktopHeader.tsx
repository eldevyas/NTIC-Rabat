import React from "react";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import CenterLink from "./../utils/MiddleLink";
import { useSession } from "next-auth/react";
import User from "../../../core/auth/User";
import { Box, Button, useColorScheme } from "@mui/material";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import Link from "next/link";

export default function DesktopHeader(props: any) {
    const { data: session }: any = useSession();

    const Router = useRouter();
    const Pathname: string = usePathname() as string;

    const { mode, setMode } = useColorScheme();

    const MiddleLinks: {
        href: String;
        text: String;
        icon: any;
    }[] = props.links;

    return (
        <Box
            className="Header"
            sx={{
                background: "transparent",
                width: "100%",
                maxHeight: "100px",
                display: "flex",
                alignItems: "stretch",
                justifyContent: "space-between",
                flexDirection: "row",
                gap: "0.75rem",
                padding: "1rem 2rem",
                overflow: "hidden",
                "&.DefaultButton": {
                    minWidth: 100,
                    height: "100%",
                    "&.Black": {
                        color: "white",
                    },
                },
            }}
        >
            <Box
                sx={{
                    maxHeight: 50,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    flex: 1,
                    img: {
                        transition: "transform .3s ease",
                        "&:hover": {
                            opacity: 0.75,
                            cursor: "pointer",
                            transform: "rotateY(180deg)",
                        },
                    },
                }}
            >
                <Link href="/">
                    <Image
                        src="/Logo.png"
                        width={100}
                        height={100}
                        alt="Logo"
                        priority
                    />
                </Link>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "row",
                    gap: "0.75rem",
                    flex: 1,
                }}
            >
                {MiddleLinks.map((middleLink, index) => {
                    return (
                        <>
                            {index == 2 && (
                                <Button
                                    key={index}
                                    variant="outlined"
                                    color="white"
                                    onClick={() => {
                                        setMode(
                                            mode == "dark" ? "light" : "dark"
                                        );
                                    }}
                                    sx={{
                                        height: "100%",
                                    }}
                                >
                                    {mode == "dark" ? (
                                        <MdDarkMode />
                                    ) : (
                                        <MdLightMode />
                                    )}
                                </Button>
                            )}
                            <CenterLink
                                key={index > 2 ? index + 1 : index}
                                href={middleLink.href}
                                text={middleLink.text}
                                icon={middleLink.icon}
                                variant={"outlined"}
                                color={"white"}
                            >
                                {middleLink.text}
                            </CenterLink>
                        </>
                    );
                })}
            </Box>
            {/* Hidden on Login and Register Pages */}
            {Pathname !== "/auth/login" && Pathname !== "/auth/register" && (
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-end",
                        gap: "0.75rem",
                        flex: 1,
                    }}
                >
                    {
                        // if user is connected
                        session ? (
                            <User />
                        ) : (
                            <>
                                <Link href="/auth/register">
                                    <Button
                                        variant="outlined"
                                        color="secondary"
                                        sx={{
                                            minWidth: 135,
                                        }}
                                    >
                                        {"S'inscrire"}
                                    </Button>
                                </Link>
                                <Link href="/auth/login">
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        sx={{
                                            minWidth: 135,
                                        }}
                                    >
                                        Se Connecter
                                    </Button>
                                </Link>
                            </>
                        )
                    }
                </Box>
            )}
        </Box>
    );
}
