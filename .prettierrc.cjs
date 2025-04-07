module.exports = {
    arrowParens: "always",
    bracketSameLine: false,
    bracketSpacing: true,
    semi: true,
    overrides: [
        {
            files: ["*.*css", "*.*ts", "*.*tsx"],
            options: {
                tabWidth: 4,
            },
        },
    ],
};
