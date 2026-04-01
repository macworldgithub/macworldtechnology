import { CheckCircle } from "lucide-react";

export default function ThankYou() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="max-w-xl text-center">
        <CheckCircle className="mx-auto mb-6 h-16 w-16 text-green-500" />

        <h1>Thank You</h1>

        <p className="text-muted-foreground mb-6">
          "Thank you for submitting the form. Our team has received your details
          and will be in touch with you soon."
        </p>

        <a
          href="/"
          className="inline-block rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:shadow-lg"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
}
