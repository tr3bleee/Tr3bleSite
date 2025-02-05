import AuthForm from "@/components/AuthForm";
import ThemeToggle from "@/components/ThemeToogle";

export default function Home() {
    return (
        <main className="min-h-screen flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                <AuthForm />
                <ThemeToggle />
            </div>
        </main>
    )
}

