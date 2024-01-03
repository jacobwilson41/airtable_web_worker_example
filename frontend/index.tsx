import { initializeBlock } from "@airtable/blocks/ui";
import React from "react";

function HelloWorldTypescriptApp() {
    const useWebWorker = () => {
        const worker = new Worker("worker.ts", { type: "module" });
        worker.postMessage("foo");
    };

    // YOUR CODE GOES HERE
    return <button onClick={useWebWorker}>Click me</button>;
}

initializeBlock(() => <HelloWorldTypescriptApp />);
