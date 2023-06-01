import React from "react";
import {
    Box,
    Divider,
    Tabs,
    Typography,
    Tab,
    styled,
    Button,
    TextField,
    InputAdornment,
} from "@mui/material";
import Image from "next/image";
import { Chat, Home, Search, User } from "react-iconly";
import { useTheme as useNextTheme } from "next-themes";
import { useTheme, Avatar, Input } from "@nextui-org/react";
import { ColorModeContext } from "@/app/providers";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useSession } from "next-auth/react";
import { useRouter, usePathname } from "next/navigation";
import UserAvatar from "@/app/core/auth/User";
export default function Header() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const { data: session }: any = useSession();

    const Router = useRouter();
    const Pathname: string = usePathname() as string;

    const colorMode: any = React.useContext(ColorModeContext);
    const { isDark, type } = useTheme();
    const { setTheme } = useNextTheme();

    return (
        <Box
            className="ConnectHeader"
            sx={{
                position: "sticky",
                top: 0,
                left: 0,
                width: "100%",
                height: "auto",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "1rem",
                color: (theme) => theme.palette.text.primary,
                padding: "1rem",
                zIndex: "9999",
                backgroundColor: "var(--nextui-colors-backgroundAlpha)",
                backdropFilter: "blur(5rem)",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    gap: "0.5rem",
                }}
            >
                <TextField
                    id="search"
                    type="search"
                    placeholder="Rechercher..."
                    size="small"
                    // value={""}
                    // onChange={handleChange}
                    fullWidth
                    variant="outlined"
                    sx={{ width: "auto", fontSize: "0.85rem" }}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <Search
                                    set="two-tone"
                                    primaryColor="var(--nextui-colors-text)"
                                    size="medium"
                                />
                            </InputAdornment>
                        ),
                    }}
                />
            </Box>

            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    gap: "0.5rem",
                }}
            >
                {
                    // if user is connected
                    session ? (
                        <UserAvatar />
                    ) : (
                        <>
                            <Button
                                color="primary"
                                variant="outlined"
                                onClick={() => {
                                    Router.push("/auth/register");
                                }}
                                sx={{ fontSize: "0.85rem" }}
                            >
                                {"S'inscrire"}
                            </Button>
                            <Button
                                color="primary"
                                variant="contained"
                                onClick={() => {
                                    Router.push("/auth/login");
                                }}
                                sx={{ fontSize: "0.85rem" }}
                            >
                                Se Connecter
                            </Button>
                        </>
                    )
                }
            </Box>
        </Box>
    );
}