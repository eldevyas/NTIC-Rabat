import { createTheme } from "@mui/material";


declare module '@mui/material/Button' {
    interface ButtonPropsVariantOverrides {
        flat: true;
    }
    interface ButtonPropsColorOverrides {
        black: true;
        muted: true;
        white: true;
    }
}
// MUI
const Light: any = createTheme({
    // Color Palette
    palette: {
        mode: 'light',
        primary: {
            main: "#29abe2",
            contrastText: '#e0f3fb',
            light: "#b0e1f5",
            dark: "#004d87"
        },
        secondary: {
            main: "#39b54a",
            contrastText: '#e7f6e9',
            light: "#c6e8c8",
            dark: "#006316"
        },
        black: {
            main: '#000',
            light: "#fcfcfc",
            contrastText: '#fff',
        },
        white: {
            main: "#fff",
            contrastText: '#000'
        },
        muted: {
            main: "#ddd",
            contrastText: '#555'
        },
        // contrastThreshold: 3,
        // tonalOffset: 0.6,
    },
    // 
    // Font Family
    typography: {
        fontFamily: [
            'Outfit',
            'Cairo',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
    },
    components: {
        // Name of the component
        MuiButton: {
            defaultProps: {
                // The props to change the default for.
                disableRipple: false,
                disableElevation: true
            },
            styleOverrides: {
                root: ({ ownerState }: any) => ({
                    // ...(ownerState.variant === 'flat' && {
                    //     backgroundColor: '#202020',
                    //     color: '#fff',
                    // }),
                    fontSize: '1rem',
                    boxShadow: "none",
                    textTransform: "capitalize",
                    fontWeight: 800,
                    borderRadius: "0.7rem",
                    padding: "0.6rem 1rem",

                }),
            },
            variants: [
                // Flat Variants
                {
                    props: { variant: "outlined", color: "primary" },
                    style: {
                        background: "#b0e1f5",
                        color: "#29abe2",
                        "&:hover": {
                            background: "#e0f3fb"
                        }
                    }
                },
                {
                    props: { variant: "outlined", color: "secondary" },
                    style: {
                        background: "#c6e8c8",
                        color: "#39b54a",
                        "&:hover": {
                            background: "#e7f6e9"
                        }
                    }
                },
                {
                    props: { variant: "outlined", color: "black" },
                    style: {
                        background: "#fcfcfc",
                        color: "#000",
                        "&:hover": {
                            background: "#fff"
                        }
                    }
                },
                {
                    props: { variant: "outlined", color: "muted" },
                    style: {
                        background: "#ddd",
                        color: "#555",
                        "&:hover": {
                            background: "#eee"
                        }
                    }
                },
                // Contained Variants
                {
                    props: { variant: "contained", color: "primary" },
                    style: {
                        background: "#29abe2",
                        color: "#e0f3fb",
                        "&:hover": {
                            background: "#b0e1f5"
                        }
                    }
                },
                {
                    props: { variant: "contained", color: "secondary" },
                    style: {
                        background: "#39b54a",
                        color: "#e7f6e9",
                        "&:hover": {
                            background: "#006316"
                        }
                    }
                },
                {
                    props: { variant: "contained", color: "black" },
                    style: {
                        background: "#000",
                        color: "#fcfcfc",
                        "&:hover": {
                            background: "#111"
                        }
                    }
                },
                {
                    props: { variant: "contained", color: "white" },
                    style: {
                        background: "#fff",
                        color: "#151515",
                        "&:hover": {
                            background: "#eee"
                        }
                    }
                },
            ]
        },
    },
    shape: {
        borderRadius: 12,
    },
} as any);

const Dark: any = Light;

const MUI_Theme = {
    Light, Dark
}

export { MUI_Theme };