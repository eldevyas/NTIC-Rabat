const Control = (base: any, state: any) => ({
    ...base,
    backgroundColor: "var(--mui-palette-common-background)",
    color: "var(--mui-palette-text-primary)",
    boxShadow: "none",
    borderRadius: "10px",
    outline: "none",
    border: "none",
    padding: "0.25rem 0.25rem",
})

const Menu = (base: any, state: any) => ({
    ...base,
    backgroundColor: "var(--mui-palette-common-background)",
    color: state.isFocused ? "#39b54a" : "#fff",
    // boxShadow: "none",
    borderRadius: "10px",
    zIndex: 100,
    overflow: "hidden",
    boxShadow:
        "0px 0px 10rem rgba(75, 184, 231, 0.25) !important",
})

const Option = (base: any, state: any) => ({
    ...base,
    backgroundColor: state.isSelected
        ? "var(--mui-palette-primary-main)"
        : "transparent",
    color: state.isSelected ? "var(--mui-palette-primary-light)" : "var(--mui-palette-text-primary)",
    fontFamily: "Outfit, sans-serif",
    fontSize: "1rem",
    fontWeight: "400",
    padding: "0.75rem 1.25rem",
    borderRadius: "10px",
    // hover
    "&:hover": {
        backgroundColor: "var(--mui-palette-primary-light)",
        color: "var(--mui-palette-primary-main)",
        cursor: state.isSelected
            ? "default"
            : "pointer"
    },
    "&:active": {
        backgroundColor: state.isFocused
            ? "#4BB8E7"
            : "transparent",
        borderColor: state.isFocused ? "#f5f5f5" : "#fff",
    },
    // selected option
    "&:selected": {
        backgroundColor: "#555",
        borderColor: state.isFocused ? "#f5f5f5" : "#fff",
    },
})

export const HomeStyles = {
    control: Control,
    menu: Menu,
    option: Option,
    // group
    groupHeading: (base: any, state: any) => ({
        ...base,
        fontFamily: "Outfit, sans-serif",
        fontSize: "0.75rem",
        fontWeight: "800",
        padding: "0rem 1.25rem",
        marginTop: "1rem",
        marginBottom: "1rem",
    }),
}


export const EmploisStyles = {
    control: Control,
    menu: Menu,
    option: Option,
    // group
    groupHeading: (base: any, state: any) => ({
        ...base,
        fontFamily: "Outfit, sans-serif",
        fontSize: "0.75rem",
        fontWeight: "800",
        padding: "0rem 1.25rem",
        marginTop: "1rem",
        marginBottom: "1rem",
    }),
}