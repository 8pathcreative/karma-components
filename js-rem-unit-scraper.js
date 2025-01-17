// Function to extract CSS rules using rem
(function extractRemRules() {
    // Get all the stylesheets loaded on the page
    const stylesheets = Array.from(document.styleSheets);
    const remClasses = [];

    // Loop through each stylesheet
    stylesheets.forEach((stylesheet) => {
        try {
            const rules = stylesheet.cssRules; // Get the CSS rules
            if (rules) {
                for (let rule of rules) {
                    // Check if the rule is a style rule and contains 'rem'
                    if (rule.style && rule.cssText.includes('rem')) {
                        remClasses.push(rule.cssText); // Add the rule to the list
                    }
                }
            }
        } catch (error) {
            console.warn("Could not access stylesheet:", stylesheet, error);
        }
    });

    // Output the rem-related rules
    console.log("Extracted REM-based CSS rules:", remClasses);

    // Optional: Copy results to clipboard
    navigator.clipboard.writeText(remClasses.join('\n'));
})();
