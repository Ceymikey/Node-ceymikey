export declare const printOut: () => void;
export declare const executeConsoleString: (consoleString: string) => void;
interface CompileInput {
    data: {
        bits: string[];
        bytes: string[];
    };
}
export declare const compile: (input: CompileInput) => void;
export {};
