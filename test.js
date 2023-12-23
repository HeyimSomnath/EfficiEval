function calculateComplexity() {
    try {
        const code = codeMirrorEditor.getValue();
        const lines = code.split('\n');

        let timeComplexity = 'O(1)';
        let spaceComplexity = 'O(1)';

        lines.forEach(line => {
            if (line.includes("for") || line.includes("while") || line.includes("do")) {
                if (line.includes("nested")) {
                    timeComplexity = 'O(n^2)';
                } else {
                    timeComplexity = 'O(n)';
                }
            } else if (line.includes("if") || line.includes("else") || line.includes("switch")) {
                timeComplexity = 'O(1)';
            } else if (line.includes("return")) {
                spaceComplexity = 'O(n)';
            }
        });

        document.getElementById("time").value = timeComplexity;
        document.getElementById("space").value = spaceComplexity;
    } catch (error) {
        console.error("An error occurred:", error);
    }
}

