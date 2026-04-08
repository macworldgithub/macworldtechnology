import { CheckCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ThankYou() {
  const [returnPath, setReturnPath] = useState("/");

  useEffect(() => {
    const lastPage = localStorage.getItem("lastVisitedPage");
    if (lastPage) {
      setReturnPath(lastPage);
    }
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6 text-white">
      <div className="max-w-xl text-center">
        <CheckCircle className="mx-auto mb-6 h-16 w-16 text-green-500" />

        <h1 className="text-4xl font-bold mb-4">Thank You</h1>

        <p className="text-muted-foreground mb-10 text-lg">
          "Thank you for submitting the form. Our team has received your details
          and will be in touch with you soon."
        </p>

        <Link
          to={returnPath}
          className="inline-block rounded-lg bg-[#08708F] px-8 py-3 text-sm font-bold text-white transition-all hover:shadow-lg hover:shadow-cyan-500/20"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
